let incrementBtn = document.querySelector('.cart .increment');
let quantity = document.querySelector('.cart .quantity');




function increment() {
    quantity.value = Number(quantity.value) + 1;

}

incrementBtn.addEventListener("click" , increment);


// Decrement
let decrementBtn = document.querySelector('.cart .decrement');


decrementBtn.addEventListener('click' , () => {

    if (quantity.value > 1) {

        quantity.value = Number(quantity.value) - 1;
    }

    

} )


// rangeSlider
let rangeSlider = document.querySelector('.rangeSlider');
let output =document.querySelector('.slider .output');

rangeSlider.addEventListener('input' , () => {

    output.innerHTML = rangeSlider.value;

})

// randomBtn
let randomBtn = document.querySelector('.randomBtn');
let colorize = document.querySelector('#colorize');




randomBtn.addEventListener('click' , () =>{
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    

    colorize.style.backgroundColor = `rgb(${red} ,${green} ,${blue})`
})


let passwordBtn = document.querySelector('.passwordBtn');
let userPassword = document.querySelector('.userPassword');


passwordBtn.addEventListener('click' , () => {

     if (userPassword.type == 'password') {
        userPassword.type = 'text';
        passwordBtn.innerHTML = `<i class="bi bi-eye"></i>`

     } else{
        userPassword.type = 'password';
        passwordBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`

     }

})