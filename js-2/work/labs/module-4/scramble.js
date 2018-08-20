function arrayShuffle(a){
  if(a.length == 1) return this;
  for(var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
}

var wordList = ["АНТИЛОПА",
                "БЕГЕМОТ",
                "АВТОМОБИЛЬ",
                "ФУТБОЛ",
                "ПАРОВОЗ",
                "КОРОБКА",
                "ПИАНИНО",
                "ТЕЛЕВИЗОР",
                "РЕСТОРАН",
                "ОЛИМПИАДА"];

//wordList = ['КОНЬ'];
const TTL = 5;        // общее время на слово в секундах 
var myTimer = null;
let currentWord = "", // текущее слово
    numWin = 0,       // счётчик угаданных слов
    numLose = 0,      // счётчик неугаданных слов
    secondsLeft = 0,  // количество оставшихся секунд
    //timer = null,     // ссылка на таймер
    strTimer = null,  //<span id="strTimer">
    btnStart = null,  //<button id="btnStart">
    txtResult = null, //<input id="txtResult">
    strWin = null,    //<span id="strWin">
    strLose = null,   //<span id="strLose">
    strWord = null,   //<h2 id="strWord">
    strWordsLeft = null,
    h3 = null;        //<h3>


let shuffledWords = null

function getNewWord() {
    console.log("new word")
    if (shuffledWords.length == 0) {
        strWord.textContent = "Game over"
        btnStart.style.visibility = ""
        btnStart.textContent = "Играть снова"
        currentWord = null
        $("#strWordsLeft").textContent = "0"
        return
    }
    txtResult.value = ''
    txtResult.focus()
    $("#strWordsLeft").textContent = shuffledWords.length
    currentWord = shuffledWords[shuffledWords.length - 1]
    shuffledWords.pop()
    let sc_word = currentWord
    let ar = sc_word.split('')
    console.log(ar)
    arrayShuffle(ar)
    console.log(ar)
    sc_word = ar.join('')
    console.log("sc: "+sc_word)
    strWord.textContent = sc_word
    secondsLeft = 15
    strTimer.textContent = secondsLeft
    txtResult.onkeyup = checkInput
    //getTime()
    if (window.myTimer)
        clearTimeout(window.myTimer)
    window.myTimer = setTimeout(getTime, 1000)
}

function getTime()
{
    if (secondsLeft == 0)
        return
    secondsLeft = secondsLeft - 1
    console.log("left" + secondsLeft)
    if (secondsLeft == 0)
    {
        numLose = numLose + 1
        strLose.textContent = numLose
        strWord.textContent = currentWord
        //txtResult.textContent = ''
        if (window.myTimer)
            clearTimeout(window.myTimer)
        
        window.myTimer = setTimeout(getNewWord, 1000)
        return
    }
    strTimer.textContent = secondsLeft 
    if (window.myTimer)
        clearTimeout(window.myTimer)
    window.myTimer = setTimeout(getTime, 1000)
  // Исполняется таймером
}

function checkInput(){
    // Вызывается при каждом нажатии на клавиши
    let chal = txtResult.value
    //console.log("chal " + chal.toUpperCase())
    if (chal.toUpperCase() == currentWord)
    {
        currentWord = ''
        numWin = numWin + 1
        strWin.textContent = numWin
        strWord.textContent = "BINGO!"
        if (window.myTimer)
            clearTimeout(window.myTimer)
        window.myTimer = setTimeout(getNewWord, 1000)

    }
}

function $(name)
{
    if (name.charAt(0) == "#") {
        let n = name.slice(1)
        //console.log(n)
        return document.getElementById(n)
    }
        

    return document.getElementsByTagName(name)
}

window.onload = function ()
{
    //timer = null;     // ссылка на таймер
    strTimer = $("#strTimer");  //<span id="strTimer">
    
    btnStart = $('#btnStart');  //<button id="btnStart">
    //console.log("btnStart:")
    //console.log(btnStart)
    txtResult = $('#txtResult'); //<input id="txtResult">
    strWin = $('#strWin');    //<span id="strWin">
    strLose = $('#strLose');  //<span id="strLose">
    strWord = $('#strWord');   //<h2 id="strWord">
    h3 = $('h3')[0];        //<h3>

    btnStart.onclick = startNewGame;
}

function startNewGame() {
    console.log("new game")
    shuffledWords = wordList;
    arrayShuffle(shuffledWords)

    btnStart.style.visibility = "hidden"
    numWin = 0,       // счётчик угаданных слов
        numLose = 0,      // счётчик неугаданных слов
        //secondsLeft = 0,  // количество оставшихся секунд
        getNewWord();

}