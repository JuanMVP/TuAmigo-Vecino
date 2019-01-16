import { Publicacion } from '.'
import { User } from '../user'

let user, publicacion

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  publicacion = await Publicacion.create({ usuario: user, titulo: 'test', contenido: 'test', fecha: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = publicacion.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(publicacion.id)
    expect(typeof view.usuario).toBe('object')
    expect(view.usuario.id).toBe(user.id)
    expect(view.titulo).toBe(publicacion.titulo)
    expect(view.contenido).toBe(publicacion.contenido)
    expect(view.fecha).toBe(publicacion.fecha)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = publicacion.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(publicacion.id)
    expect(typeof view.usuario).toBe('object')
    expect(view.usuario.id).toBe(user.id)
    expect(view.titulo).toBe(publicacion.titulo)
    expect(view.contenido).toBe(publicacion.contenido)
    expect(view.fecha).toBe(publicacion.fecha)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
