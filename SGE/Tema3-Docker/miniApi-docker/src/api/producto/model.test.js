import { Producto } from '.'

let producto

beforeEach(async () => {
  producto = await Producto.create({ nombre: 'test', descripcion: 'test', precio: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = producto.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(producto.id)
    expect(view.nombre).toBe(producto.nombre)
    expect(view.descripcion).toBe(producto.descripcion)
    expect(view.precio).toBe(producto.precio)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = producto.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(producto.id)
    expect(view.nombre).toBe(producto.nombre)
    expect(view.descripcion).toBe(producto.descripcion)
    expect(view.precio).toBe(producto.precio)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
