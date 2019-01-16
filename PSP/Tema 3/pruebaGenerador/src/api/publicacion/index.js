import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token, master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Publicacion, { schema } from './model'

const router = new Router()
const { titulo, contenido, fecha } = schema.tree

/**
 * @api {post} /publicaciones Create publicacion
 * @apiName CreatePublicacion
 * @apiGroup Publicacion
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam titulo Publicacion's titulo.
 * @apiParam contenido Publicacion's contenido.
 * @apiParam fecha Publicacion's fecha.
 * @apiSuccess {Object} publicacion Publicacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Publicacion not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ titulo, contenido, fecha }),
  create)

/**
 * @api {get} /publicaciones Retrieve publicacions
 * @apiName RetrievePublicacions
 * @apiGroup Publicacion
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of publicacions.
 * @apiSuccess {Object[]} rows List of publicacions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /publicaciones/:id Retrieve publicacion
 * @apiName RetrievePublicacion
 * @apiGroup Publicacion
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} publicacion Publicacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Publicacion not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /publicaciones/:id Update publicacion
 * @apiName UpdatePublicacion
 * @apiGroup Publicacion
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam titulo Publicacion's titulo.
 * @apiParam contenido Publicacion's contenido.
 * @apiParam fecha Publicacion's fecha.
 * @apiSuccess {Object} publicacion Publicacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Publicacion not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ titulo, contenido, fecha }),
  update)

/**
 * @api {delete} /publicaciones/:id Delete publicacion
 * @apiName DeletePublicacion
 * @apiGroup Publicacion
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Publicacion not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
