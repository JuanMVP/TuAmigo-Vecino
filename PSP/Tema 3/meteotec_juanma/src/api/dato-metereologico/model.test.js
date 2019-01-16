import { DatoMetereologico } from '.'

let datoMetereologico

beforeEach(async () => {
  datoMetereologico = await DatoMetereologico.create({ fecha_hora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', num_estacion: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = datoMetereologico.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(datoMetereologico.id)
    expect(view.fecha_hora).toBe(datoMetereologico.fecha_hora)
    expect(view.lluvia).toBe(datoMetereologico.lluvia)
    expect(view.viento).toBe(datoMetereologico.viento)
    expect(view.humedad).toBe(datoMetereologico.humedad)
    expect(view.temperatura).toBe(datoMetereologico.temperatura)
    expect(view.num_estacion).toBe(datoMetereologico.num_estacion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = datoMetereologico.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(datoMetereologico.id)
    expect(view.fecha_hora).toBe(datoMetereologico.fecha_hora)
    expect(view.lluvia).toBe(datoMetereologico.lluvia)
    expect(view.viento).toBe(datoMetereologico.viento)
    expect(view.humedad).toBe(datoMetereologico.humedad)
    expect(view.temperatura).toBe(datoMetereologico.temperatura)
    expect(view.num_estacion).toBe(datoMetereologico.num_estacion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
