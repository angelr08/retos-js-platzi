function simulacion({ satelite, estacion, astronauta, texto }) {
  satelite.send({
    from: astronauta,
    to: estacion,
    text: texto,
  });

  return satelite.messages;
}

class Astronaut {
  constructor({ name }) {
    this.name = name;
  }
}

class SpaceStation {
  constructor({ name }) {
    this.name = name;
    this.team = [];
  }

  addTeamMember(newMember) {
    if (newMember instanceof Astronaut) {
      this.team.push(newMember.name);
    }
  }
}

class Satelite {
  constructor({
    name,
  }) {
    this.name = name;
    this.messages = [];
  }
  
  send({ from, to, text }) {
    if(from instanceof Astronaut && to.team.includes(from.name) && to instanceof SpaceStation) {
        this.messages.push({
          from: from.name,
          to: to.name,
          text,
        });
    }
  }
}

const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const capitanImpostor = { name: 'Capitan Impostor' };
const estacionFalsa = { name: 'Estacion Espacial Falsa', team: ["Capitan Impostor"] };
satelitePlatziSat01.send({
  from: capitanImpostor,
  to: estacionFalsa,
  text: "MUAJAJA2",
});
console.log(satelitePlatziSat01.messages);

