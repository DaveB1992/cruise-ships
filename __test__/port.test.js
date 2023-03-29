const Port = require('../src/port.js')

describe('port constructor', () => {
    describe('has ports, can add and remove ships', () => {
        let myPort
        let port
        let ship 
        let theBlackPearl
        let theFlyingDutchmen
        
        beforeEach(() => {
            myPort = new Port ('Amsterdam')
            port = new Port ('Amsterdam')
            ship = {}
            theBlackPearl = {}
            theFlyingDutchmen = {}
        })
        it('returns an object', () => {
            
            expect(new Port('Port')).toBeInstanceOf(Object)
        })
        it('has a name property', () => {
            const myPort = new Port('Amsterdam')
    
            expect(myPort.name).toBe('Amsterdam')
        })
        it('can add a ship', () => {
            const port = new Port ('Amsterdam')
            const ship = {}
    
            port.addShip(ship)
    
            expect(port.ships).toContain(ship)
        })
        it('can remove a ship', () =>{
            const port = new Port('Amsterdam')
            const theBlackPearl = {}
            const theFlyingDutchmen = {}
    
            port.addShip(theBlackPearl)
            port.addShip(theFlyingDutchmen)
    
            port.removeShip(theBlackPearl)
    
            expect(port.ships).toEqual([theBlackPearl])
        })  
    }) 
})  