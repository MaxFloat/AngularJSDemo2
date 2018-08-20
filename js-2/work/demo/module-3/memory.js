function arrayShuffle(a){
  if(a.length == 1) return this;
  for(var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
}

var deck = ["2_BUB.gif", "3_BUB.gif", "4_BUB.gif", "5_BUB.gif", "6_BUB.gif", "7_BUB.gif", "8_BUB.gif", "9_BUB.gif", "10_BUB.gif", "A_BUB.gif", "J_BUB.gif", "K_BUB.gif", "Q_BUB.gif", "2_CH.gif", "3_CH.gif", "4_CH.gif", "5_CH.gif", "6_CH.gif", "7_CH.gif", "8_CH.gif", "9_CH.gif", "10_CH.gif", "A_CH.gif", "J_CH.gif", "K_CH.gif", "Q_CH.gif", "2_PIK.gif", "3_PIK.gif", "4_PIK.gif", "5_PIK.gif", "6_PIK.gif", "7_PIK.gif", "8_PIK.gif", "9_PIK.gif", "10_PIK.gif", "A_PIK.gif", "J_PIK.gif", "K_PIK.gif", "Q_PIK.gif", "2_TREF.gif", "3_TREF.gif", "4_TREF.gif", "5_TREF.gif", "6_TREF.gif", "7_TREF.gif", "8_TREF.gif", "9_TREF.gif", "10_TREF.gif", "A_TREF.gif", "J_TREF.gif", "K_TREF.gif", "Q_TREF.gif"];

const VIS_TIME = 3000;
const VIS_DECK_TIME = 3000;
const COLS = 4;
const ROWS = 4;
const IMG_PATH = 'images/';
const BACK = 'images/1COVER.GIF';

let mis = 0;
let cards = [];
let start_btn = null 
let mis_span = null
let h3 = null
let last_clicked = null
let box = null
window.onload = function () {

    mis = 0;
    cards = [];
    start_btn = document.getElementById('new')
    mis_span = document.getElementById('wrong')
    h3 = document.getElementsByTagName('h3')[0]
    last_clicked = null
    box = document.getElementById('box')
    let img;
    for (let i = 0; i < ROWS; i++)
        for (let j = 0; j < COLS; j++)
        {
            img = document.createElement('img')
            img.id = i * COLS + j
            img.src = BACK;
            box.appendChild(img)
        }
    start_btn.addEventListener('click', newGame)
    newGame();
}

function newGame() {
    mis_span.textContent = wrong = 0;
    arrayShuffle(deck)
    cards = deck.slice(0, ROWS * COLS / 2)
    cards = cards.concat(cards)
    arrayShuffle(cards)
    let imgs = box.getElementsByTagName('img')
    //console.log(cards)
    for (let i = 0; i < imgs.length; i++) {
        //console.log(cards[i])
        //console.log(IMG_PATH + cards[i])
        imgs[i].src = IMG_PATH + cards[i]
    }
    setTimeout(function () {
        let imgs = box.getElementsByTagName('img')
        for(im of imgs)
            im.src = BACK;
    }, VIS_TIME);
}

function cardClicekd(e) {
    let cc_img = IMG_PATH + cards[this.id]
    this.src = cc_img
    if (last_clicked) {
        if (cc_img == last_clicked.src)
            return
        else
        {

        }
    }
    else
    {
        last_clicked = this;
    }
}