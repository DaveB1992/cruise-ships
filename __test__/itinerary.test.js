const Itinerary = require('../src/itinerary');

describe('itinerary constructor', () => {
  it('it returns an object', () => {
    expect(new Itinerary('Itinerary')).toBeInstanceOf(Object);
  });
  it('it has the ports property', () => {
    const ports = ['Amsterdam', 'Dover'];

    const itinerary = new Itinerary(ports);

    expect(itinerary.ports).toEqual(ports);
  });
});
