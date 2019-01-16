import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Campania, { schema } from './model'

const router = new Router()
const { nombreCampania } = schema.tree

/**
 * @api {post} /campanias Create campania
 * @apiName CreateCampania
 * @apiGroup Campania
 * @apiParam nombreCampania Campania's nombreCampania.
 * @apiSuccess {Object} campania Campania's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campania not found.
 */
router.post('/',
  body({ nombreCampania }),
  create)

/**
 * @api {get} /campanias Retrieve campanias
 * @apiName RetrieveCampanias
 * @apiGroup Campania
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of campanias.
 * @apiSuccess {Object[]} rows List of campanias.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /campanias/:id Retrieve campania
 * @apiName RetrieveCampania
 * @apiGroup Campania
 * @apiSuccess {Object} campania Campania's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campania not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /campanias/:id Update campania
 * @apiName UpdateCampania
 * @apiGroup Campania
 * @apiParam nombreCampania Campania's nombreCampania.
 * @apiSuccess {Object} campania Campania's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campania not found.
 */
router.put('/:id',
  body({ nombreCampania }),
  update)

/**
 * @api {delete} /campanias/:id Delete campania
 * @apiName DeleteCampania
 * @apiGroup Campania
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Campania not found.
 */
router.delete('/:id',
  destroy)

export default router
