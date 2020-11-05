
// Array listing people // 

const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
// Arrays listing players and which team they're going to be a part of //

  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  // Assing classes to each player to fir them into the array //

  class Player {
    constructor(person, canThrowBall = true, canDodgeBall = true, hasPaid = true, isHealthy = true, yearsExperience = 0){
        this.canDodgeBall = canDodgeBall
        this.canThrowBall = canThrowBall
        this.hasPaid = hasPaid
        this.isHealthy = isHealthy
        this.yearsExperience = yearsExperience
        this.name = person.name
        this.skillSet = person.skillSet
        this.id = person.id
    }
  }
  class blueTeammate extends Player {
    constructor(player){
      super(player)
      this.mascot = 'Hawks'
      this.teamColor = 'Blue'
    }
  }
  class redTeammate extends Player {
    constructor(player){
      super(player)
      this.mascot = 'Elephants'
      this.teamColor = 'Red'
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML = ''
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  const createTeamButtons = () => {
    const playerElement = document.getElementById('players')
    playerElement.innerHTML = ''
    listOfPlayers.map(player => {
      const li = document.createElement("li")
      const buttonRed = document.createElement("button")
      const buttonBlue = document.createElement("button")
      li.appendChild(document.createTextNode(player.name + " - " + player.skillSet))
      buttonRed.innerHTML = "Red Team"
      buttonBlue.innerHTML = "Blue Team"
      buttonRed.addEventListener('click', function() {redButton(player.id)} )
      buttonBlue.addEventListener('click', function() {blueButton(player.id)} )
      li.appendChild(buttonRed)
      li.appendChild(buttonBlue)
      console.log(player)
      playerElement.append(li)
    })
  }

  const playerInRedTeam = () => {
    const redElement = document.getElementById('red')
    redElement.innerHTML = ''
    redTeam.map(person => {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      redElement.append(li)
    })
  }

  const playerInBlueTeam = () => {
    const blueElement = document.getElementById('blue')
    blueElement.innerHTML = ''
    blueTeam.map(person => {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      blueElement.append(li)
    })
  }


 

  const makePlayer = (id) => {
    const matchesId = (element) => element.id === id
    console.log(`li ${id} was clicked!`)

    let personIndex = arrOfPeople.findIndex(matchesId)

    let person = arrOfPeople[personIndex]

    const player = new Player(person)


    listOfPlayers.push(player)

    arrOfPeople.splice(personIndex, 1)

    listPeopleChoices()

    console.log(listOfPlayers)

    createTeamButtons()
  }

  const blueButton = (id) => {
    const matchesId = (element) => element.id === id
    let playerIndex = listOfPlayers.findIndex(matchesId)

    let player = listOfPlayers[playerIndex]

    const bluePlayer = new blueTeammate(player)

    blueTeam.push(bluePlayer)

    listOfPlayers.splice(playerIndex, 1)

    playerInBlueTeam()

    createTeamButtons()
  }

  const redButton = (id) => {
    const matchesId = (element) => element.id === id
    let playerIndex = listOfPlayers.findIndex(matchesId)

    let player = listOfPlayers[playerIndex]

    const redPlayer = new redTeammate(player)

    redTeam.push(redPlayer)

    listOfPlayers.splice(playerIndex, 1)

    playerInRedTeam()

    createTeamButtons()
  }

module.exports = {
  Player : Player,
  makePlayer : makePlayer,
  arrOfPeople : arrOfPeople,
  listOfPlayers : listOfPlayers,
  blueTeammate : blueTeammate,
}
