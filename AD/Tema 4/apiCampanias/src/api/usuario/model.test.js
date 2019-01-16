import { Usuario } from '.'

let usuario

beforeEach(async () => {
  usuario = await Usuario.create({ nombre: 'test', apellidos: 'test', email: 'test', campania: 'test', : 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = usuario.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(usuario.id)
    expect(view.nombre).toBe(usuario.nombre)
    expect(view.apellidos).toBe(usuario.apellidos)
    expect(view.email).toBe(usuario.email)
    expect(view.campania).toBe(usuario.campania)
    expect(view.).toBe(usuario.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = usuario.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(usuario.id)
    expect(view.nombre).toBe(usuario.nombre)
    expect(view.apellidos).toBe(usuario.apellidos)
    expect(view.email).toBe(usuario.email)
    expect(view.campania).toBe(usuario.campania)
    expect(view.).toBe(usuario.)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
