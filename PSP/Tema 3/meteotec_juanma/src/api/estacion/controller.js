import { success, notFound } from '../../services/response/'
import { Estacion } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Estacion.create(body)
    .then((estacion) => estacion.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Estacion.count(query)
    .then(count => Estacion.find(query, select, cursor)
      .then((estacions) => ({
        count,
        rows: estacions.map((estacion) => estacion.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Estacion.findById(params.id)
    .then(notFound(res))
    .then((estacion) => estacion ? estacion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Estacion.findById(params.id)
    .then(notFound(res))
    .then((estacion) => estacion ? Object.assign(estacion, body).save() : null)
    .then((estacion) => estacion ? estacion.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Estacion.findById(params.id)
    .then(notFound(res))
    .then((estacion) => estacion ? estacion.remove() : null)
    .then(success(res, 204))
    .catch(next)
