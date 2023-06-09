const Ship = require('../src/ship');


describe('ship', () => {
  describe('has ports and itinerarys', () => {
    let ship;
    let amsterdam;
    let dover;
    let itinerary;

    beforeEach(() => {
      amsterdam = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Amsterdam',
        ships: [],
      };

      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Dover',
        ships: [],
      };

      itinerary = {
        ports: [amsterdam, dover],
      };

      ship = new Ship(itinerary);
    });

    it('returns an object', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('it should have a starting port', () => {
      expect(ship.currentPort).toBe(amsterdam);
    });

    it('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toEqual(null);
      expect(amsterdam.removeShip).toHaveBeenCalledWith(ship);
    });
    it('gets added to the port on instantiation ', () => {
      expect(amsterdam.addShip).toHaveBeenCalledWith(ship);
    });

    it('can dock at a different port', () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(dover);
      expect(amsterdam.removeShip).toHaveBeenCalledWith(ship);
    });
    it("can't sail further than the itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError('Reached the end of the Itinerary!');
    });
  });
});
