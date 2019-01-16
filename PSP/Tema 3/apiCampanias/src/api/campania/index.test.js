import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Campania } from '.'

const app = () => express(apiRoot, routes)

let campania

beforeEach(async () => {
  campania = await Campania.create({})
})

test('POST /campanias 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ nombreCampania: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.nombreCampania).toEqual('test')
})

test('GET /campanias 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /campanias/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${campania.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campania.id)
})

test('GET /campanias/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /campanias/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${campania.id}`)
    .send({ nombreCampania: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campania.id)
  expect(body.nombreCampania).toEqual('test')
})

test('PUT /campanias/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ nombreCampania: 'test' })
  expect(status).toBe(404)
})

test('DELETE /campanias/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${campania.id}`)
  expect(status).toBe(204)
})

test('DELETE /campanias/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
