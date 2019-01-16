import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Monumentos } from '.'

const app = () => express(apiRoot, routes)

let monumentos

beforeEach(async () => {
  monumentos = await Monumentos.create({})
})

test('POST /monumentos 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ countryCode: 'test', countryName: 'test', cityName: 'test', location: 'test', name: 'test', description: 'test', photoUrl: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.countryCode).toEqual('test')
  expect(body.countryName).toEqual('test')
  expect(body.cityName).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.photoUrl).toEqual('test')
})

test('GET /monumentos 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /monumentos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${monumentos.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(monumentos.id)
})

test('GET /monumentos/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /monumentos/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${monumentos.id}`)
    .send({ countryCode: 'test', countryName: 'test', cityName: 'test', location: 'test', name: 'test', description: 'test', photoUrl: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(monumentos.id)
  expect(body.countryCode).toEqual('test')
  expect(body.countryName).toEqual('test')
  expect(body.cityName).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.photoUrl).toEqual('test')
})

test('PUT /monumentos/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ countryCode: 'test', countryName: 'test', cityName: 'test', location: 'test', name: 'test', description: 'test', photoUrl: 'test' })
  expect(status).toBe(404)
})

test('DELETE /monumentos/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${monumentos.id}`)
  expect(status).toBe(204)
})

test('DELETE /monumentos/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
