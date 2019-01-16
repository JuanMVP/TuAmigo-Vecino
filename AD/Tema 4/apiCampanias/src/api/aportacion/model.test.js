import { Aportacion } from '.'

let aportacion

beforeEach(async () => {
  aportacion = await Aportacion.create({ cantidad: 'test', usuario: 'test', categoria: 'test', campania: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = aportacion.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(aportacion.id)
    expect(view.cantidad).toBe(aportacion.cantidad)
    expect(view.usuario).toBe(aportacion.usuario)
    expect(view.categoria).toBe(aportacion.categoria)
    expect(view.campania).toBe(aportacion.campania)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = aportacion.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(aportacion.id)
    expect(view.cantidad).toBe(aportacion.cantidad)
    expect(view.usuario).toBe(aportacion.usuario)
    expect(view.categoria).toBe(aportacion.categoria)
    expect(view.campania).toBe(aportacion.campania)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
