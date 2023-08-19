export function simulador(astronaut, spaceShip, direction) {
    astronaut.navigate(spaceShip, direction);
    return spaceShip._movements;
  }
  
  export class Astronaut {
    constructor({ name }) {
      this.name = name;
  
      let _spaceShipKey = undefined;
      this.setAccessKey = (accessKey) => {
        _spaceShipKey = accessKey
      };
  
      this.navigate = (spaceShip, direction) => {
        spaceShip.navigator(direction, { accessKey: _spaceShipKey });
      }
    }
  }
  
  export class SpaceShip {
    constructor({ key }) {
      this._movements = [];
  
      let _key = key;
      this.getAccessKey = (astronaut) => {
        const isAstronaut = astronaut instanceof Astronaut;
    
        if (isAstronaut) {
          astronaut.setAccessKey(_key);
        }
      }
  
      this.navigator = (direction, { accessKey }) => {
        if (_key == accessKey) {
          this._movements.push(direction)
        } else {
          this._movements.push("Incorrect Access Key");
        }
      }
    }
  }

const rocket99 = new SpaceShip({ key: "__LLAVE_DE_ACCESO__" });
const capitandc = new Astronaut({ name: "Capitán DC" });
rocket99.getAccessKey(capitandc);

const comandanteJuanita = new Astronaut({ name: "Comandante Juanita" });
comandanteJuanita._spaceShipKey = capitandc._spaceShipKey;
comandanteJuanita.navigate(rocket99, "right");

console.log(rocket99._movements);
  