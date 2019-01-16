import { success, notFound } from '../../services/response/'
import { Opinion } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Opinion.create(body)
    .then((opinion) => opinion.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Opinion.count(query)
    .then(count => Opinion.find(query, select, cursor)
      .then((opinions) => ({
        count,
        rows: opinions.map((opinion) => opinion.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Opinion.findById(params.id)
    .then(notFound(res))
    .then((opinion) => opinion ? opinion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Opinion.findById(params.id)
    .then(notFound(res))
    .then((opinion) => opinion ? Object.assign(opinion, body).save() : null)
    .then((opinion) => opinion ? opinion.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Opinion.findById(params.id)
    .then(notFound(res))
    .then((opinion) => opinion ? opinion.remove() : null)
    .then(success(res, 204))
    .catch(next)
