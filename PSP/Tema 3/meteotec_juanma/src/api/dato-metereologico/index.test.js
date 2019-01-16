import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DatoMetereologico } from '.'

const app = () => express(apiRoot, routes)

let datoMetereologico

beforeEach(async () => {
  datoMetereologico = await DatoMetereologico.create({})
})

test('POST /dato-metereologicos 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ fecha_hora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', num_estacion: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.fecha_hora).toEqual('test')
  expect(body.lluvia).toEqual('test')
  expect(body.viento).toEqual('test')
  expect(body.humedad).toEqual('test')
  expect(body.temperatura).toEqual('test')
  expect(body.num_estacion).toEqual('test')
})

test('GET /dato-metereologicos 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /dato-metereologicos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${datoMetereologico.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(datoMetereologico.id)
})

test('GET /dato-metereologicos/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dato-metereologicos/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${datoMetereologico.id}`)
    .send({ fecha_hora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', num_estacion: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(datoMetereologico.id)
  expect(body.fecha_hora).toEqual('test')
  expect(body.lluvia).toEqual('test')
  expect(body.viento).toEqual('test')
  expect(body.humedad).toEqual('test')
  expect(body.temperatura).toEqual('test')
  expect(body.num_estacion).toEqual('test')
})

test('PUT /dato-metereologicos/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ fecha_hora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', num_estacion: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dato-metereologicos/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${datoMetereologico.id}`)
  expect(status).toBe(204)
})

test('DELETE /dato-metereologicos/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
