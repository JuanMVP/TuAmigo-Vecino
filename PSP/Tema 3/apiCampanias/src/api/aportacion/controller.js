import { success, notFound } from '../../services/response/'
import { Aportacion } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Aportacion.create(body)
    .then((aportacion) => aportacion.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Aportacion.count(query)
    .then(count => Aportacion.find(query, select, cursor)
      .then((aportacions) => ({
        count,
        rows: aportacions.map((aportacion) => aportacion.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Aportacion.findById(params.id)
    .then(notFound(res))
    .then((aportacion) => aportacion ? aportacion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Aportacion.findById(params.id)
    .then(notFound(res))
    .then((aportacion) => aportacion ? Object.assign(aportacion, body).save() : null)
    .then((aportacion) => aportacion ? aportacion.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Aportacion.findById(params.id)
    .then(notFound(res))
    .then((aportacion) => aportacion ? aportacion.remove() : null)
    .then(success(res, 204))
    .catch(next)
