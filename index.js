// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}*/

/*const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);*/

function writeCards(card, event) {
    const newMessage = [];
    for (let i = 0; i < card.length; i++) {
        newMessage.push(`Thank you, ${card[i]}, for the wonderful ${event} gift!`);
        debugger;
    };

    return newMessage;
}

function countDown(interger) {
    let i = 0
    while (interger >= i) {
        console.log(interger)
        interger--
    }
}