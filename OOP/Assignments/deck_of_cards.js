//DECK
function Card(value, suit){
  this.value = value;
  this.suit =suit;
}

function Deck(){
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var suits = ['diamonds', 'clubs', 'spades', 'hearts'];
  this.cards = [];
  //creating Deck
  for(var i=0; i<values.length; i++){
    for(var j=0; j<suits.length; j++){
      this.cards.push(new Card(values[i], suits[j]));//creates Card object and pushes it to the deck
    }
  }
}
//Makes a random reoredering of the deck
Deck.prototype.shuffle = function(){
  for (var i = 0; i < this.cards.length; i++) {
    var rand1 = Math.floor(Math.random() * this.cards.length);//this.cards.length enables reoredering even after dealing cards
    var rand2 = Math.floor(Math.random() * this.cards.length);
    // console.log(rand1, rand2);
    var value = this.cards[rand1]
    this.cards[rand1] = this.cards[rand2];
    this.cards[rand2] = value;
  }
  console.log(this.cards);
  return this;
};

Deck.prototype.reset = new Deck();

Deck.prototype.deal = function(){
    var index = Math.floor(Math.random() * this.cards.length);
    var card = this.cards[index];//Get that specific card
    this.cards.splice(index, 1);//Remove the card from the deck
  //  console.log(this.cards);
    return card;
  }

//PLAYER
function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.takeCard = function(card){
    this.hand.push(card);
    return this;
}
Player.prototype.discard = function(index) {
    if (this.hand[index] != null){
      this.hand.splice(index, 1);
    }
    return this;
}

var deck = new Deck();//invoke the Deck -> deck of cards available
//console.log(deck.cards, deck.cards.length + " cards are in the deck.");
var player = new Player('xona');//invoke the Player -> player available
console.log(player.name);
//Player deals one card
var cardTaken = deck.deal();
player.takeCard(cardTaken);

console.log("Player: " + player.name + " took " + cardTaken.value + " with " + cardTaken.suit);
//console.log("Player's hand: " , player.hand);//Show the cards in the player's hand
//console.log(deck.cards, deck.cards.length + " cards in the deck.");
player.discard(0);//
//console.log("Player's hand: " + player.hand);
deck = deck.reset;
console.log(deck.cards, deck.cards.length + " cards in the deck.");
