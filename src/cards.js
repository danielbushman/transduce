

function holdem(num_players) {
  const suits = ['hearts', 'diamonds', 'spades', 'clubs']
  const numbers = ['Ace', 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
  const cards = suits.map(suit => {
    return numbers.map(num => {
      return num + ' of ' + suit;
    })
  })
  const CARDS_PER_PLAYER = 5;
  return {
    deal: ()=> {
      for (var i = 0; i < cards_per_player; i++) {
        console.log(i)
      } {
        Array(cards_per_player).map(()=> {
          return cards[Math.rand(0, cards.length - 1)]
        })
      })
    }
  }
}

function deck(suits, numbers) {
  return suits.map(suit => {
    return numbers.map(num => {
      return num + ' of ' + suit;
    })
  })
}

function dealer(num_players, cards_per_player, deck) {
  if (num_players * cards_per_player > deck.length) {
    throw 'not enough cards'
  }
}

const our_game = holdem(7)
console.log(our_game.deal(4))
