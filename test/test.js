
    const assert = require('assert')
    
    const classes = require('../main')

    const Player = classes.Player

    const arrOfPeople = classes.arrOfPeople
    
    const listOfPlayers = classes.listOfPlayers

    const makePlayer = classes.makePlayer

    const blueTeammate = classes.blueTeammate

    
  //Comment calls to Dom for NPM Test:
  //listPeopleChoices() 
  //createTeamButtons()
  //playerInRedTeam()
  //playerInBlueTeam()


    describe('dodgeball()', () => {
        describe('player', () => {
            it('player is object', () => {

              
                const person = arrOfPeople[0]

                const player = new Player(person)
        
                assert.strictEqual(typeof player, 'object')

              });
            it('person was added to players', () => {

                 makePlayer(4)

                 const player = listOfPlayers[0]

                  assert.strictEqual(player.name,"Cynthia Doolittle")
                  assert.strictEqual(player.canDodgeBall,true)
                  assert.strictEqual(player.skillSet,"tic tac toe")
              });
            it('class inherits properties from previous class', () => {
              let player = listOfPlayers[0] //Cynthia Doolittle//
              let blueTM = new blueTeammate(player)

              assert.strictEqual(blueTM.name,'Cynthia Doolittle')
              assert.strictEqual(blueTM.mascot,'Hawks')
              assert.strictEqual(blueTM.teamColor,'Blue')
          
              });
            it('Testing out array parameters', () => {
              const person = arrOfPeople[0]
              console.log(person) 

              const player = new Player(person, false, false, true, true, 5)
              assert.strictEqual(player.hasPaid, true)
              assert.strictEqual(player.isHealthy, true)
              assert.strictEqual(player.yearsExperience, 5)
              assert.strictEqual(player.canThrowBall, false)
              assert.strictEqual(player.canDodgeBall, false)
            })
        } )
    });

    //constructor(person, canThrowBall = true, canDodgeBall = true, hasPaid = true, isHealthy = true, yearsExperience = 0)