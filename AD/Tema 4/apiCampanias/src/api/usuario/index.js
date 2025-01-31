import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Usuario, { schema } from './model'

const router = new Router()
const { nombre, apellidos, email, campania,  } = schema.tree

/**
 * @api {post} /usuarios Create usuario
 * @apiName CreateUsuario
 * @apiGroup Usuario
 * @apiParam nombre Usuario's nombre.
 * @apiParam apellidos Usuario's apellidos.
 * @apiParam email Usuario's email.
 * @apiParam campania Usuario's campania.
 * @apiParam  Usuario's .
 * @apiSuccess {Object} usuario Usuario's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Usuario not found.
 */
router.post('/',
  body({ nombre, apellidos, email, campania,  }),
  create)

/**
 * @api {get} /usuarios Retrieve usuarios
 * @apiName RetrieveUsuarios
 * @apiGroup Usuario
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of usuarios.
 * @apiSuccess {Object[]} rows List of usuarios.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /usuarios/:id Retrieve usuario
 * @apiName RetrieveUsuario
 * @apiGroup Usuario
 * @apiSuccess {Object} usuario Usuario's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Usuario not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /usuarios/:id Update usuario
 * @apiName UpdateUsuario
 * @apiGroup Usuario
 * @apiParam nombre Usuario's nombre.
 * @apiParam apellidos Usuario's apellidos.
 * @apiParam email Usuario's email.
 * @apiParam campania Usuario's campania.
 * @apiParam  Usuario's .
 * @apiSuccess {Object} usuario Usuario's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Usuario not found.
 */
router.put('/:id',
  body({ nombre, apellidos, email, campania,  }),
  update)

/**
 * @api {delete} /usuarios/:id Delete usuario
 * @apiName DeleteUsuario
 * @apiGroup Usuario
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Usuario not found.
 */
router.delete('/:id',
  destroy)

export default router
