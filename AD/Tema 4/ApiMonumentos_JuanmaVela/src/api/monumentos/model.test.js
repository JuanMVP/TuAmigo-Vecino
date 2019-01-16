import { Monumentos } from '.'

let monumentos

beforeEach(async () => {
  monumentos = await Monumentos.create({ countryCode: 'test', countryName: 'test', cityName: 'test', location: 'test', name: 'test', description: 'test', photoUrl: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = monumentos.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(monumentos.id)
    expect(view.countryCode).toBe(monumentos.countryCode)
    expect(view.countryName).toBe(monumentos.countryName)
    expect(view.cityName).toBe(monumentos.cityName)
    expect(view.location).toBe(monumentos.location)
    expect(view.name).toBe(monumentos.name)
    expect(view.description).toBe(monumentos.description)
    expect(view.photoUrl).toBe(monumentos.photoUrl)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = monumentos.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(monumentos.id)
    expect(view.countryCode).toBe(monumentos.countryCode)
    expect(view.countryName).toBe(monumentos.countryName)
    expect(view.cityName).toBe(monumentos.cityName)
    expect(view.location).toBe(monumentos.location)
    expect(view.name).toBe(monumentos.name)
    expect(view.description).toBe(monumentos.description)
    expect(view.photoUrl).toBe(monumentos.photoUrl)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
