import { Estacion } from '.'

let estacion

beforeEach(async () => {
  estacion = await Estacion.create({ nombre: 'test', latitud: 'test', longitud: 'test', caracteristicas: 'test', ubicacion: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = estacion.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(estacion.id)
    expect(view.nombre).toBe(estacion.nombre)
    expect(view.latitud).toBe(estacion.latitud)
    expect(view.longitud).toBe(estacion.longitud)
    expect(view.caracteristicas).toBe(estacion.caracteristicas)
    expect(view.ubicacion).toBe(estacion.ubicacion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = estacion.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(estacion.id)
    expect(view.nombre).toBe(estacion.nombre)
    expect(view.latitud).toBe(estacion.latitud)
    expect(view.longitud).toBe(estacion.longitud)
    expect(view.caracteristicas).toBe(estacion.caracteristicas)
    expect(view.ubicacion).toBe(estacion.ubicacion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
