function validate(e) {
    e.preventDefault();
    if (+prev.value >= 0 && +prev.value < 3000) {
        if (+next.value <= 3000 ) {
            price.innerHTML = (+next.value - +prev.value) * 1.5;
        } else if (+next.value <= 3800) {
            price.innerHTML = 1.5 * (3000 - +prev.value) + 1.7 * (+next.value - 3000);
        } else if (+next.value <= 4600) {
            price.innerHTML = 1.5 * (3000 - +prev.value) + 1.7 * 800 + 2 * (+next.value - 3800);
        } else {
            price.innerHTML = 1.5 * (3000 - +prev.value) + 1.7 * 800 + 2 * 800 + 4.2 * (+next.value - 4600);
        }
    } 

    else if (+prev.value >= 3000 && +prev.value < 3800) {
        if (+next.value <= 3800) {
            price.innerHTML = (+next.value - +prev.value) * 1.7;
        } else if (+next.value <= 4600) {
            price.innerHTML = 1.7 * (3800 - +prev.value) + 2 * (+next.value - 3800);
        } else if (+next.value <= 5650) {
            price.innerHTML = 1.7 * (3800 - +prev.value) + 2 * 800 + 4.2 * (+next.value - 4600);
        } else {
            price.innerHTML = 1.7 * (3800 - +prev.value) + 2 * 800 + 4.2 * 1050 + 5.3 * (+next.value - 5650);
        }
    } 

    else if (+prev.value >= 3800 && +prev.value < 4600) {
        if (+next.value <= 4600) {
            price.innerHTML = (+next.value - +prev.value) * 2;
        } else if (+next.value <= 5650) {
            price.innerHTML = 2 * (4600 - +prev.value) + 4.2 * (+next.value - 4600);
        } else if (+next.value <= 6000) {
            price.innerHTML = 2 * (4600 - +prev.value) + 4.2 * 1050 + 5.3 * (+next.value - 5650);
        } else {
            price.innerHTML = 2 * (4600 - +prev.value) + 4.2 * 1050 + 5.3 * 350 + 12 * (+next.value - 6000);
        }
    }

    else if (+prev.value >= 4600 && +prev.value < 5650) {
        if (+next.value <= 5650) {
            price.innerHTML = (+next.value - +prev.value) * 4.2;
        } else if (+next.value <= 6000) {
            price.innerHTML = 4.2 * (5650 - +prev.value) + 5.3 * (+next.value - 5650);
        } else if (+next.value <= 7000) {
            price.innerHTML = 4.2 * (5650 - +prev.value) + 5.3 * 350 + 12 * (+next.value - 6000);
        } else {
            price.innerHTML = 4.2 * (5650 - +prev.value) + 5.3 * 350 + 12 * 1000 + 20 * (+next.value - 7000);
        }
    }

    else if (+prev.value >= 5650 && +prev.value < 6000) {
        if (+next.value <= 6000) {
            price.innerHTML = (+next.value - +prev.value) * 5.3;
        } else if (+next.value <= 7000) {
            price.innerHTML = 5.3 * (6000 - +prev.value) + 12 * (+next.value - 6000);
        } else {
            price.innerHTML = 5.3 * (6000 - +prev.value) + 12 * 1000 + 20 * (+next.value - 7000);
        }
    }

    else if (+prev.value >= 6000 && +prev.value < 7000) {
        if (+next.value <= 7000) {
            price.innerHTML = (+next.value - +prev.value) * 12;
        } else {
            price.innerHTML = 12 * (7000 - +prev.value) + 20 * (+next.value - 7000);
        }
    }

    else {
        price.innerHTML = 20 * (+next.value - +prev.value);
    }
}


let form = document.querySelector("#form");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let price = document.querySelector(".price");

form.addEventListener("submit", validate);
