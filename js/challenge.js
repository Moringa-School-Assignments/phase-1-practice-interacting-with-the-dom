let counter = document.getElementById("counter");
let counterNumber = Number(counter.innerHTML);
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const minus = document.getElementById("minus");
let pause = document.getElementById("pause");
const submit = document.getElementById("submit");
const likes = document.getElementById("likes");
let interval;
let commentForm = document.getElementById("comment-form");



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
        plus.disabled = false;
        minus.disabled = false;
        submit.disabled = false;
        heart.disabled = false;

    } else {
        pause.innerHTML = "resume";
        stopInterval();
        plus.disabled = true;
        minus.disabled = true;
        submit.disabled = true;
        heart.disabled = true;

    }
}

function handleComments(event){
    event.preventDefault();
    let input = document.getElementById("comment-input");
    let ul = document.getElementById("comments");
    let li = document.createElement("li");
    let val = input.value;
    li.innerHTML = val;
    ul.append(li)
    commentForm.reset();
    
}
// function handleLikes(){
//     let li = document.createElement("li");
//     for (let count of counterNumber){
//         if (count)
//     }

//     likes.appendChild(li)
// }

automatic();
pause.addEventListener("click", pauseIt);
plus.addEventListener("click", addCounter);
minus.addEventListener("click", minusCounter)
commentForm.addEventListener("submit", handleComments)
// heart.addEventListener("click", handleLikes);


