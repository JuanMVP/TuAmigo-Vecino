import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Publicacion } from '.'

const app = () => express(apiRoot, routes)

let userSession, anotherSession, adminSession, publicacion

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  adminSession = signSync(admin.id)
  publicacion = await Publicacion.create({ usuario: user })
})

test('POST /publicaciones 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, titulo: 'test', contenido: 'test', fecha: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.titulo).toEqual('test')
  expect(body.contenido).toEqual('test')
  expect(body.fecha).toEqual('test')
  expect(typeof body.usuario).toEqual('object')
})

test('POST /publicaciones 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /publicaciones 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /publicaciones 401 (admin)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(401)
})

test('GET /publicaciones 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /publicaciones 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /publicaciones/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${publicacion.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(publicacion.id)
})

test('GET /publicaciones/:id 401 (admin)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${publicacion.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(401)
})

test('GET /publicaciones/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${publicacion.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /publicaciones/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${publicacion.id}`)
  expect(status).toBe(401)
})

test('GET /publicaciones/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /publicaciones/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${publicacion.id}`)
    .send({ access_token: userSession, titulo: 'test', contenido: 'test', fecha: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(publicacion.id)
  expect(body.titulo).toEqual('test')
  expect(body.contenido).toEqual('test')
  expect(body.fecha).toEqual('test')
  expect(typeof body.usuario).toEqual('object')
})

test('PUT /publicaciones/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${publicacion.id}`)
    .send({ access_token: anotherSession, titulo: 'test', contenido: 'test', fecha: 'test' })
  expect(status).toBe(401)
})

test('PUT /publicaciones/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${publicacion.id}`)
  expect(status).toBe(401)
})

test('PUT /publicaciones/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: anotherSession, titulo: 'test', contenido: 'test', fecha: 'test' })
  expect(status).toBe(404)
})

test('DELETE /publicaciones/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${publicacion.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /publicaciones/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${publicacion.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /publicaciones/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${publicacion.id}`)
  expect(status).toBe(401)
})

test('DELETE /publicaciones/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
