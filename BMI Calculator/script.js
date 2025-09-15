const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const msg = document.querySelector("#msg");

    if (height < 0 || isNaN(height) || height === "") {
        result.innerHTML = "Please enter a valid height";
    }
    else if (weight < 0 || isNaN(weight) || weight === "") {
        result.innerHTML = "Please enter a valid weight";
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<div>${bmi}</div>`;

        if (bmi <= 18.6) {
            msg.innerHTML = `You are underweight`;
        }
        else if(bmi > 18.6 || bmi <= 24.9){
            msg.innerHTML = `Your weight is normal`;
        }
        else{
            msg.innerHTML = `You are overweight`;
        }
    }
});