const counting = document.getElementById('countVal');
const addBtn = document.getElementById('countAddBtn');
const subBtn = document.getElementById('countSubBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;
let val = `0${count + 1}`;

addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (val < 10) {
        counting.innerHTML = `0${val++}`;
    }
    else{
        counting.innerHTML = val++;
    }
});

subBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (val < 0) {
        counting.innerHTML = "value cannot be negative";
    }
    else if (val < 10) {
        counting.innerHTML =  `0${val--}`;
    }
    else{
        counting.innerHTML = val--;
    }
});

resetBtn.addEventListener("click", function(){
    val = 0;
    counting.innerHTML = `0${val}`;
});