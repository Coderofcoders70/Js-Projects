// ********************************** WITH IF-ELSE STATEMENT ******************************
// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(e){
//         if (e.target.id === "black") {
//             body.style.backgroundColor = "#212121";
//         }
//         if (e.target.id === "blue") {
//             body.style.backgroundColor = "rgb(29, 199, 211)";
//         }
//         if (e.target.id === "light-yellow") {
//             body.style.backgroundColor = "rgb(226, 225, 126)";
//         }
//         if (e.target.id === "dark-blue") {
//             body.style.backgroundColor = "rgb(41, 86, 138)";
//         }
//         if (e.target.id === "light-brown") {
//             body.style.backgroundColor = "rgb(194, 145, 102)";
//         }
//     })
// });

// ******************************* USING SWITCH CASE **************************************
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        let btn = e.target.id;

        switch (btn) {
            case "black":
                body.style.backgroundColor = "#212121";
                break;

            case "blue":
                body.style.backgroundColor = "rgb(29, 199, 211)";
                break;

            case "light-yellow":
                body.style.backgroundColor = "rgb(226, 225, 126)";
                break;

            case "dark-blue":
                body.style.backgroundColor = "rgb(41, 86, 138)";
                break;

            case "light-brown":
                body.style.backgroundColor = "rgb(194, 145, 102)";
                break;
        
            default:
                body.style.backgroundColor = "white";
                break;
        }
    })
});