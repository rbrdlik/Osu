const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn')
const deleteBtn = document.getElementById('deleteBtn');
const kostka2= document.getElementById('kostka2');
const clickText = document.getElementById('clickText');
const score_text = document.getElementById('score');

let timeStart = 0;
let count = 0;
let gInterval;

startBtn.onclick = () => {
    setCookieClicker(kostka2);
    startGame();
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    kostka2.style.display = "block";
    deleteBtn.style.display = "none";
}

deleteBtn.onclick = () => {
    deleteBtn.style.display = "none";
    count-=count;
    kostka2.innerHTML = count;
    score_text.innerHTML = "Score: "+count;
    clickText.innerHTML = "Click time 0ms"
}

stopBtn.onclick = () => {
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    kostka2.style.display = "none";
    if(count>=1){
        deleteBtn.style.display = "inline-block";
    }
}

const changeColor = (element, red, green, blue) => {
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const setNumber = (element, number) => {
    element.innerHTML = number;
}

const setCookieClicker = (element) => {
    element.onclick = () => {
        count++;
        kostka2.innerHTML = count;
        score_text.innerHTML = "Score: "+count;
        //moveCube(kostka2, getRandomNumber(0, window.innerWidth), getRandomNumber(0, window.innerHeight));
        moveCube(kostka2, getRandomNumber(0, 1400), getRandomNumber(150, 800));
        let randomSize = getRandomNumber(100, 300);
        setSize(kostka2, randomSize, randomSize);

        if(timeStart == 0){
            timeStart = performance.now();
        } else{
            let timeEnd = performance.now();
            let result = timeEnd-timeStart;
            let zak_result = result.toFixed(2);
            clickText.innerHTML = `Click time ${zak_result}ms`;
            timeStart = performance.now();
        }
    }
}

const moveCube = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}

const setSize = (element, w, h) => {
    element.style.width = `${w}px`;
    element.style.height = `${h}px`;
}

const startGame = () => {
    clearInterval(gInterval)
    gInterval = setInterval(() => {
        //moveCube(kostka2, getRandomNumber(0, window.innerWidth), getRandomNumber(0, window.innerHeight));
        moveCube(kostka2, getRandomNumber(0, 1400), getRandomNumber(150, 800));
        let randomSize = getRandomNumber(20, 100);
        setSize(kostka2, randomSize, randomSize);
        let color1 = getRandomNumber(0, 254);
        let color2 = getRandomNumber(0, 254);
        let color3 = getRandomNumber(0, 254);
        changeColor(kostka2, color1, color2, color3);
    }, 800) 
}

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
