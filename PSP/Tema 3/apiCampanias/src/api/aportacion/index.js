import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Aportacion, { schema } from './model'

const router = new Router()
const { cantidad, usuario, categoria, campania } = schema.tree

/**
 * @api {post} /aportaciones Create aportacion
 * @apiName CreateAportacion
 * @apiGroup Aportacion
 * @apiParam cantidad Aportacion's cantidad.
 * @apiParam usuario Aportacion's usuario.
 * @apiParam categoria Aportacion's categoria.
 * @apiParam campania Aportacion's campania.
 * @apiSuccess {Object} aportacion Aportacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Aportacion not found.
 */
router.post('/',
  body({ cantidad, usuario, categoria, campania }),
  create)

/**
 * @api {get} /aportaciones Retrieve aportacions
 * @apiName RetrieveAportacions
 * @apiGroup Aportacion
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of aportacions.
 * @apiSuccess {Object[]} rows List of aportacions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /aportaciones/:id Retrieve aportacion
 * @apiName RetrieveAportacion
 * @apiGroup Aportacion
 * @apiSuccess {Object} aportacion Aportacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Aportacion not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /aportaciones/:id Update aportacion
 * @apiName UpdateAportacion
 * @apiGroup Aportacion
 * @apiParam cantidad Aportacion's cantidad.
 * @apiParam usuario Aportacion's usuario.
 * @apiParam categoria Aportacion's categoria.
 * @apiParam campania Aportacion's campania.
 * @apiSuccess {Object} aportacion Aportacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Aportacion not found.
 */
router.put('/:id',
  body({ cantidad, usuario, categoria, campania }),
  update)

/**
 * @api {delete} /aportaciones/:id Delete aportacion
 * @apiName DeleteAportacion
 * @apiGroup Aportacion
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Aportacion not found.
 */
router.delete('/:id',
  destroy)

export default router
