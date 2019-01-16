import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import {  master, token } from '../../services/passport'

export DatoMetereologico, { schema } from './model'

const router = new Router()
const { fecha_hora, lluvia, viento, humedad, temperatura, num_estacion } = schema.tree

/**
 * @api {post} /dato-metereologicos Create dato metereologico
 * @apiName CreateDatoMetereologico
 * @apiGroup DatoMetereologico
 * @apiParam fecha_hora Dato metereologico's fecha_hora.
 * @apiParam lluvia Dato metereologico's lluvia.
 * @apiParam viento Dato metereologico's viento.
 * @apiParam humedad Dato metereologico's humedad.
 * @apiParam temperatura Dato metereologico's temperatura.
 * @apiParam num_estacion Dato metereologico's num_estacion.
 * @apiSuccess {Object} datoMetereologico Dato metereologico's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dato metereologico not found.
 */
router.post('/',
  token({required: true , roles: 'station'}),
  body({ fecha_hora, lluvia, viento, humedad, temperatura, num_estacion }),
  create)

/**
 * @api {get} /dato-metereologicos Retrieve dato metereologicos
 * @apiName RetrieveDatoMetereologicos
 * @apiGroup DatoMetereologico
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of dato metereologicos.
 * @apiSuccess {Object[]} rows List of dato metereologicos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /dato-metereologicos/:id Retrieve dato metereologico
 * @apiName RetrieveDatoMetereologico
 * @apiGroup DatoMetereologico
 * @apiSuccess {Object} datoMetereologico Dato metereologico's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dato metereologico not found.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /dato-metereologicos/:id Update dato metereologico
 * @apiName UpdateDatoMetereologico
 * @apiGroup DatoMetereologico
 * @apiParam fecha_hora Dato metereologico's fecha_hora.
 * @apiParam lluvia Dato metereologico's lluvia.
 * @apiParam viento Dato metereologico's viento.
 * @apiParam humedad Dato metereologico's humedad.
 * @apiParam temperatura Dato metereologico's temperatura.
 * @apiParam num_estacion Dato metereologico's num_estacion.
 * @apiSuccess {Object} datoMetereologico Dato metereologico's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dato metereologico not found.
 */
router.put('/:id',
  token({required: true , roles: 'admin'}),
  body({ fecha_hora, lluvia, viento, humedad, temperatura, num_estacion }),
  update)

/**
 * @api {delete} /dato-metereologicos/:id Delete dato metereologico
 * @apiName DeleteDatoMetereologico
 * @apiGroup DatoMetereologico
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dato metereologico not found.
 */
router.delete('/:id',
  token({required: true , roles: 'admin'}),
  destroy)

export default router
