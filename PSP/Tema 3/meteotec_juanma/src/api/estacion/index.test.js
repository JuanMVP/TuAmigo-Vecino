import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Estacion } from '.'

const app = () => express(apiRoot, routes)

let estacion

beforeEach(async () => {
  estacion = await Estacion.create({})
})

test('POST /estacions 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ nombre: 'test', latitud: 'test', longitud: 'test', caracteristicas: 'test', ubicacion: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.nombre).toEqual('test')
  expect(body.latitud).toEqual('test')
  expect(body.longitud).toEqual('test')
  expect(body.caracteristicas).toEqual('test')
  expect(body.ubicacion).toEqual('test')
})

test('GET /estacions 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /estacions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${estacion.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(estacion.id)
})

test('GET /estacions/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /estacions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${estacion.id}`)
    .send({ nombre: 'test', latitud: 'test', longitud: 'test', caracteristicas: 'test', ubicacion: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(estacion.id)
  expect(body.nombre).toEqual('test')
  expect(body.latitud).toEqual('test')
  expect(body.longitud).toEqual('test')
  expect(body.caracteristicas).toEqual('test')
  expect(body.ubicacion).toEqual('test')
})

test('PUT /estacions/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ nombre: 'test', latitud: 'test', longitud: 'test', caracteristicas: 'test', ubicacion: 'test' })
  expect(status).toBe(404)
})

test('DELETE /estacions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${estacion.id}`)
  expect(status).toBe(204)
})

test('DELETE /estacions/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
