import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Publicacion } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Publicacion.create({ ...body, usuario: user })
    .then((publicacion) => publicacion.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Publicacion.count(query)
    .then(count => Publicacion.find(query, select, cursor)
      .populate('usuario')
      .then((publicacions) => ({
        count,
        rows: publicacions.map((publicacion) => publicacion.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Publicacion.findById(params.id)
    .populate('usuario')
    .then(notFound(res))
    .then((publicacion) => publicacion ? publicacion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Publicacion.findById(params.id)
    .populate('usuario')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'usuario'))
    .then((publicacion) => publicacion ? Object.assign(publicacion, body).save() : null)
    .then((publicacion) => publicacion ? publicacion.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Publicacion.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'usuario'))
    .then((publicacion) => publicacion ? publicacion.remove() : null)
    .then(success(res, 204))
    .catch(next)
