import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Monumentos, { schema } from './model'

const router = new Router()
const { countryCode, countryName, cityName, location, name, description, photoUrl } = schema.tree

/**
 * @api {post} /monumentos Create monumentos
 * @apiName CreateMonumentos
 * @apiGroup Monumentos
 * @apiParam countryCode Monumentos's countryCode.
 * @apiParam countryName Monumentos's countryName.
 * @apiParam cityName Monumentos's cityName.
 * @apiParam location Monumentos's location.
 * @apiParam name Monumentos's name.
 * @apiParam description Monumentos's description.
 * @apiParam photoUrl Monumentos's photoUrl.
 * @apiSuccess {Object} monumentos Monumentos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Monumentos not found.
 */
router.post('/',
  body({ countryCode, countryName, cityName, location, name, description, photoUrl }),
  create)

/**
 * @api {get} /monumentos Retrieve monumentos
 * @apiName RetrieveMonumentos
 * @apiGroup Monumentos
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of monumentos.
 * @apiSuccess {Object[]} rows List of monumentos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /monumentos/:id Retrieve monumentos
 * @apiName RetrieveMonumentos
 * @apiGroup Monumentos
 * @apiSuccess {Object} monumentos Monumentos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Monumentos not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /monumentos/:id Update monumentos
 * @apiName UpdateMonumentos
 * @apiGroup Monumentos
 * @apiParam countryCode Monumentos's countryCode.
 * @apiParam countryName Monumentos's countryName.
 * @apiParam cityName Monumentos's cityName.
 * @apiParam location Monumentos's location.
 * @apiParam name Monumentos's name.
 * @apiParam description Monumentos's description.
 * @apiParam photoUrl Monumentos's photoUrl.
 * @apiSuccess {Object} monumentos Monumentos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Monumentos not found.
 */
router.put('/:id',
  body({ countryCode, countryName, cityName, location, name, description, photoUrl }),
  update)

/**
 * @api {delete} /monumentos/:id Delete monumentos
 * @apiName DeleteMonumentos
 * @apiGroup Monumentos
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Monumentos not found.
 */
router.delete('/:id',
  destroy)

export default router
