import { success, notFound } from '../../services/response/'
import { Campania } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Campania.create(body)
    .then((campania) => campania.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Campania.count(query)
    .then(count => Campania.find(query, select, cursor)
      .then((campanias) => ({
        count,
        rows: campanias.map((campania) => campania.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Campania.findById(params.id)
    .then(notFound(res))
    .then((campania) => campania ? campania.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Campania.findById(params.id)
    .then(notFound(res))
    .then((campania) => campania ? Object.assign(campania, body).save() : null)
    .then((campania) => campania ? campania.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Campania.findById(params.id)
    .then(notFound(res))
    .then((campania) => campania ? campania.remove() : null)
    .then(success(res, 204))
    .catch(next)
