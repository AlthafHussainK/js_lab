class Player {
  constructor (name, country) {
    this.name = name 
    this.country = country
  }

  playerDetails() {
    console.log(`${this.name} was born in ${this.country}`)
  }
}

const player = new Player ('Messi', 'Argentina')

player.playerDetails()

class TennisPlayer extends Player {
  constructor (name, country, age) {
    super(name, country) 
    this.age = age 
  }

  playerTennis() {
    console.log(`${this.name} is ${age} years old and from ${this.country}`)
  }
}

const roger = new TennisPlayer('Roger Federer', 'Spain', '38')

roger.playerDetails()
roger.playerTennis()