import { Campania } from '.'

let campania

beforeEach(async () => {
  campania = await Campania.create({ nombreCampania: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = campania.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campania.id)
    expect(view.nombreCampania).toBe(campania.nombreCampania)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = campania.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campania.id)
    expect(view.nombreCampania).toBe(campania.nombreCampania)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
