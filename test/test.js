
    const assert = require('assert')
    
    const classes = require('../main')

    const Player = classes.Player

    const arrOfPeople = classes.arrOfPeople
    
    const listOfPlayers = classes.listOfPlayers

    const makePlayer = classes.makePlayer
    

    describe('dodgeball()', () => {
        describe('player', () => {
            it('player can dodge balls', () => {

                const player = new Player()
        
                assert.strictEqual(typeof player, 'object')
              });
            it('person was added to players', () => {

                 makePlayer(4)

                let expected = [  
                    {
                    id: 4,
                    name: "Cynthia Doolittle",
                    age: 20,
                    skillSet: "tic tac toe",
                    placeBorn: "Pawnee, Texas"
                  }]

                  assert.deepStrictEqual(listOfPlayers,expected)
                  
              });
            it('class inherits properties from previous class', () => {
              let player = listOfPlayers[0] //Cynthia Doolittle//
              let blueTM = new blueTeammate(player)

              assert.strictEqual(blueTM.name,'Cynthia Doolittle')
              assert.strictEqual(blueTM.mascot,'Hawks')
              assert.strictEqual(blueTM.teamColor,'Blue')
          
              });
        } )
    });