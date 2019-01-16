import { success, notFound } from '../../services/response/'
import { DatoMetereologico } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DatoMetereologico.create(body)
    .then((datoMetereologico) => datoMetereologico.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  DatoMetereologico.count(query)
    .then(count => DatoMetereologico.find(query, select, cursor)
      .then((datoMetereologicos) => ({
        count,
        rows: datoMetereologicos.map((datoMetereologico) => datoMetereologico.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DatoMetereologico.findById(params.id)
    .then(notFound(res))
    .then((datoMetereologico) => datoMetereologico ? datoMetereologico.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DatoMetereologico.findById(params.id)
    .then(notFound(res))
    .then((datoMetereologico) => datoMetereologico ? Object.assign(datoMetereologico, body).save() : null)
    .then((datoMetereologico) => datoMetereologico ? datoMetereologico.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DatoMetereologico.findById(params.id)
    .then(notFound(res))
    .then((datoMetereologico) => datoMetereologico ? datoMetereologico.remove() : null)
    .then(success(res, 204))
    .catch(next)
