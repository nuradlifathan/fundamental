//Dari Kak Ariel
class ShootingGame {
  player1 = {}
  player2 = {}

  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }

  getRandomItem() {
    // 1. Create an "item" object consisting of health and power property
    const item = {
      health: 0,
      power: 0,
    }

    // 2. Get random number
    const randomNumber = Math.floor(Math.random() * 2)

    // 3. Determine bonus item
    if (randomNumber === 0) {
      // Menambahkan health di dalam item
      item.health += 10
    } else {
      // Menambahkan power di dalam item
      item.power += 10
    }

    return item
  }

  // Represent the start of the game
  start() {
    // Preparing to start game
    function gameEnd(winner) {
      console.log("---Game End---")
      player1.showStatus()
      player2.showStatus()
      console.log(`Player ${winner} wins!`)
    }

    function determineWinner(player1, player2) {
      if (player1.health > player2.health) {
        return player1.name
      } else {
        return player2.name
      }
    }

    function printTurn(playerA, playerB, item) {
      console.log(`Player ${playerA.name} turn!`)
      playerA.showStatus()
      playerA.useItem(item)
      playerA.showStatus()

      playerB.hit(playerA.power)
      playerB.showStatus()
    }

    // Play game
    let turn = true
    while (true) {
      if (player1.health <= 0 || player2.health <= 0) {
        const winner = determineWinner(player1, player2)
        gameEnd(winner)
        break
      }

      // Determine player turn
      if (turn) {
        printTurn(player1, player2, this.getRandomItem())
        turn = false
      } else {
        printTurn(player2, player1, this.getRandomItem())
        turn = true
      }
    }
  }
}

class Player {
  // Initialize player object
  name = ""
  health = 0
  power = 0

  constructor(name) {
    this.name = name
    this.health = 100
    this.power = 10
  }

  // Implement hitting mechanism
  hit(power) {
    // Subtract player health
    this.health -= power
    console.log(`Player ${this.name} has been damaged by ${power} points`)
  }

  // Implement use item mechanism
  useItem(item) {
    // Apply item to player
    this.health += item.health
    this.power += item.power

    // Determine which of the items are used
    let itemUsed
    if (item.health === 10) {
      itemUsed = "Health + 10"
    } else if (item.power === 10) {
      itemUsed = "Power + 10"
    }

    console.log(`Player ${this.name} ${itemUsed}`)
  }

  // Show player status
  showStatus() {
    // “Player A (Health => 100, Power => 10) ”
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    )
  }
}

const playerName = ["A", "B"]
const player1 = new Player(playerName[0])
const player2 = new Player(playerName[1])

const game = new ShootingGame(player1, player2)
game.start()
