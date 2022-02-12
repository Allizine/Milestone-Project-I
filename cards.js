const suits = ["♣","♦", "♥", "♠"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K"]

export default class deck {
    constructor() {
        this.cards = cards;
    }

    get numberOfCards() {
        return cards.length;
    }

    shuffle() {
        for (let i  = this.numberOfCards - 1; i > 0; i--) {
            const  newIndex = math.floor(math.random() * (i + 1))
            const oldValue = this.card[newIndex]
            this.cards[newIndex] = this.card[i]
            this.cards[i] = oldValue
    }
}
}


class card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function generateDeck() {
    return suits.flatmap(suits => {
        return values.map(values =>{
            return new card(suits, values)
        })
    })
}

