import { success, notFound } from '../../services/response/'
import { Monumentos } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Monumentos.create(body)
    .then((monumentos) => monumentos.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Monumentos.count(query)
    .then(count => Monumentos.find(query, select, cursor)
      .then((monumentos) => ({
        count,
        rows: monumentos.map((monumentos) => monumentos.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Monumentos.findById(params.id)
    .then(notFound(res))
    .then((monumentos) => monumentos ? monumentos.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Monumentos.findById(params.id)
    .then(notFound(res))
    .then((monumentos) => monumentos ? Object.assign(monumentos, body).save() : null)
    .then((monumentos) => monumentos ? monumentos.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Monumentos.findById(params.id)
    .then(notFound(res))
    .then((monumentos) => monumentos ? monumentos.remove() : null)
    .then(success(res, 204))
    .catch(next)
