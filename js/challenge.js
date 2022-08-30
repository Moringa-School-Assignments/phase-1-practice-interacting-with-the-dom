let counter = document.getElementById("counter");
let counterNumber = Number(counter.innerHTML);
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let pause = document.getElementById("pause");
let interval;


function addCounter() {
    counterNumber += 1;
    counter.innerHTML = counterNumber;
};
function minusCounter(){
    counterNumber -= 1;
    counter.innerHTML = counterNumber;
}

function automatic() {
    interval = setInterval(addCounter, 500);
};

function stopInterval() {
    clearInterval(interval);
    interval = null;
};

function pauseIt() {
    if (pause.innerHTML === "resume") {
        pause.innerHTML = "pause";
        automatic();
        
    } else {
        pause.innerHTML = "resume";
        stopInterval();
    }
}

automatic();
pause.addEventListener("click", pauseIt);
plus.addEventListener("click", addCounter);
minus.addEventListener("click", minusCounter)


