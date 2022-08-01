
let value;

document.getElementById("number1").addEventListener("click", function () {
    document.querySelector(`#number1`).classList.add("active");
    document.querySelector(`#number2`).className = "number";
    document.querySelector(`#number3`).className = "number";
    document.querySelector(`#number4`).className = "number";
    document.querySelector(`#number5`).className = "number";
    value = document.querySelector(`#number1 p`).innerHTML;
    valor(value);
});

document.getElementById("number2").addEventListener("click", function () {
    document.querySelector(`#number2`).classList.add("active");
    document.querySelector(`#number1`).className = "number";
    document.querySelector(`#number3`).className = "number";
    document.querySelector(`#number4`).className = "number";
    document.querySelector(`#number5`).className = "number";
    value = document.querySelector(`#number2 p`).innerHTML
    valor(value);
});

document.getElementById("number3").addEventListener("click", function () {
    document.querySelector(`#number3`).classList.add("active");
    document.querySelector(`#number1`).className = "number";
    document.querySelector(`#number2`).className = "number";
    document.querySelector(`#number4`).className = "number";
    document.querySelector(`#number5`).className = "number";
    value = document.querySelector(`#number3 p`).innerHTML
    valor(value);
});

document.getElementById("number4").addEventListener("click", function () {
    document.querySelector(`#number4`).classList.add("active");
    document.querySelector(`#number1`).className = "number";
    document.querySelector(`#number2`).className = "number";
    document.querySelector(`#number3`).className = "number";
    document.querySelector(`#number5`).className = "number";
    value = document.querySelector(`#number4 p`).innerHTML
    valor(value);
});

document.getElementById("number5").addEventListener("click", function () {
    document.querySelector(`#number5`).classList.add("active");
    document.querySelector(`#number1`).className = "number";
    document.querySelector(`#number2`).className = "number";
    document.querySelector(`#number3`).className = "number";
    document.querySelector(`#number4`).className = "number";
    value = document.querySelector(`#number5 p`).innerHTML
    valor(value);
});

function initiateAsync() {
    const urlParams = new URLSearchParams(window.location.search)
    document.getElementById("result").innerText = urlParams.get("valor");

}

function valor(value) {
    document.querySelector(".submit").addEventListener("click", function () {
        window.location.href = `./page-2.html?valor=${value}`;
    });
}