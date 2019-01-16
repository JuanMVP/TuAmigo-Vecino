import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import {  master, token } from '../../services/passport'
export Estacion, { schema } from './model'

const router = new Router()
const { nombre, latitud, longitud, caracteristicas, ubicacion } = schema.tree

/**
 * @api {post} /estacions Create estacion
 * @apiName CreateEstacion
 * @apiGroup Estacion
 * @apiParam nombre Estacion's nombre.
 * @apiParam latitud Estacion's latitud.
 * @apiParam longitud Estacion's longitud.
 * @apiParam caracteristicas Estacion's caracteristicas.
 * @apiParam ubicacion Estacion's ubicacion.
 * @apiSuccess {Object} estacion Estacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Estacion not found.
 */
router.post('/',
  token({requiered: true, roles: 'admin' }),
  body({ nombre, latitud, longitud, caracteristicas, ubicacion }),
  create)

/**
 * @api {get} /estacions Retrieve estacions
 * @apiName RetrieveEstacions
 * @apiGroup Estacion
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of estacions.
 * @apiSuccess {Object[]} rows List of estacions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  token({requiered: true, roles: ['user','admin'] }),
  query(),
  index)

/**
 * @api {get} /estacions/:id Retrieve estacion
 * @apiName RetrieveEstacion
 * @apiGroup Estacion
 * @apiSuccess {Object} estacion Estacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Estacion not found.
 */
router.get('/:id',
  token({requiered: true, roles: ['user','admin'] }),
  show)

/**
 * @api {put} /estacions/:id Update estacion
 * @apiName UpdateEstacion
 * @apiGroup Estacion
 * @apiParam nombre Estacion's nombre.
 * @apiParam latitud Estacion's latitud.
 * @apiParam longitud Estacion's longitud.
 * @apiParam caracteristicas Estacion's caracteristicas.
 * @apiParam ubicacion Estacion's ubicacion.
 * @apiSuccess {Object} estacion Estacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Estacion not found.
 */
router.put('/:id',
  token({requiered: true, roles: 'admin' }),
  body({ nombre, latitud, longitud, caracteristicas, ubicacion }),
  update)

/**
 * @api {delete} /estacions/:id Delete estacion
 * @apiName DeleteEstacion
 * @apiGroup Estacion
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Estacion not found.
 */
router.delete('/:id',
  token({requiered: true, roles: 'admin' }),
  destroy)

export default router
