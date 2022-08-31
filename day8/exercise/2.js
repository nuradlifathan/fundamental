class ShootingGame {
  player1
  player2

  constructor(player1, palyer2) {
    this.player1 = player1
    this.player2 = player2
  }

  // buat function getrandomitem
  getRandomItem() {
    let randomNumber = Math.floor(Math.random() * 10)
    // buat variable item yang berisi object
    let item = {
      health: 0,
      power: 0,
    }

    if (randomNumber == 1) {
      // tambah power
      item.power = 10
    } else if (randomNumber == 2) {
      // tambah health
      item.health = 10
    }
    return item
  }

  start = () => {
    console.log(" GAME START ")

    while (this.player1 > 0 && this.player2.health > 0) {
      console.log(`=== Player ${this.player1.name} turn ===`)
      this.player1.showStatus()
      let itemPlayer1 = this.getRandomItem()
      this.player1.useItem(itemPlayer1)

      // method player 2 terkena hit dari method player1.power
      this.player2.hit(this.player1.power)
      // lalu menampilkan kondisi player2.showStatus
      this.player2.showStatus()

      if (this.player2.health < 0) {
        break
      }
    }
  }
}
