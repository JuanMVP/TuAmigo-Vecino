import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Aportacion } from '.'

const app = () => express(apiRoot, routes)

let aportacion

beforeEach(async () => {
  aportacion = await Aportacion.create({})
})

test('POST /aportaciones 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ cantidad: 'test', usuario: 'test', categoria: 'test', campania: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.cantidad).toEqual('test')
  expect(body.usuario).toEqual('test')
  expect(body.categoria).toEqual('test')
  expect(body.campania).toEqual('test')
})

test('GET /aportaciones 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /aportaciones/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${aportacion.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(aportacion.id)
})

test('GET /aportaciones/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /aportaciones/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${aportacion.id}`)
    .send({ cantidad: 'test', usuario: 'test', categoria: 'test', campania: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(aportacion.id)
  expect(body.cantidad).toEqual('test')
  expect(body.usuario).toEqual('test')
  expect(body.categoria).toEqual('test')
  expect(body.campania).toEqual('test')
})

test('PUT /aportaciones/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ cantidad: 'test', usuario: 'test', categoria: 'test', campania: 'test' })
  expect(status).toBe(404)
})

test('DELETE /aportaciones/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${aportacion.id}`)
  expect(status).toBe(204)
})

test('DELETE /aportaciones/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
