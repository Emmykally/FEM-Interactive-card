const cardName = document.querySelector("#card-name");
const cardNum = document.querySelector("#card-number");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
const cardCvv = document.querySelector("#cvv");
const numberFormat = document.querySelector("#number-format");
const nameFormat = document.querySelector("#name-format");
const monthFormat = document.querySelector("#date-format");
const cvvFormat = document.querySelector("#cvv-format");
const button = document.querySelector("#btn");
const formSection = document.querySelector("#form-section");
const successSection = document.querySelector("#success-section");
const form = document.querySelector("#form");

//varaibles for the card output
const outputName = document.getElementById("output-name");
const outputNum = document.getElementById("output-number");
const outputMonth = document.getElementById('output-month');
const outputYear = document.getElementById("output-year");
const outputCvv = document.getElementById("output-cvv");
const detailsName = outputName.textContent;
const detailsNumber = outputNum.textContent;
const detailsMonth = outputMonth.textContent;
const detailsYear = outputYear.textContent;
const detailsCvv = outputCvv.textContent;


let validatedCard = true;

// making the card name appear in real time on the card
cardName.addEventListener("input", ()=>{
    if(cardName.value === ""){
        outputName.textContent = detailsName;
    }else{
        outputName.textContent = cardName.value;
    }
})

// making the card number appear in real time on the card

cardNum.addEventListener("input", ()=>{
    if(cardNum.value === ""){
        outputNum.innerHTML = detailsNumber;
    }else{
        const number = `${cardNum.value.slice(0,4)} ${cardNum.value.slice(4,8)} ${cardNum.value.slice(8,12)} ${cardNum.value.slice(12,16)}`;
        outputNum.textContent = number;
    }
})

// making the card month appear in real time on the card
cardMonth.addEventListener("input", () => {
    if(cardMonth.value === ""){
        outputMonth.textContent = detailsMonth;
    }else{
        outputMonth.textContent = cardMonth.value;
    }
})

// making the card Year appear in real time on the card
cardYear.addEventListener("input", () => {
    if(cardYear.value === ""){
        outputYear.textContent = detailsYear;
    }else{
        outputYear.textContent = cardYear.value;
    }
})

// making the CVV appear in real time on the card
cardCvv.addEventListener("input", () => {
    if(cardCvv.value === ""){
        outputCvv.textContent = detailsCvv;
    }else{
        outputCvv.textContent = cardCvv.value;
    }
})

// to validate the card number field
function validateNumber(){
    const fieldValue = cardNum.value;
    const numberRegex = /^[0-9]+$/;
    if(!numberRegex.test(fieldValue)){
        numberFormat.textContent = `Wrong format, numbers only`;
        cardNum.style.border = "1px solid red";
    }
    // if(fieldValue.length < 16){
    //     numberFormat.textContent = `Input complete card details`;
    // }
}

function validateName(){
    const namevalue = cardName.value;
    if(namevalue === ""){
        nameFormat.textContent = `Input correct card name`;
    }
}

//lets validate the year and month fields
function validateDate(){
    const monthValue = cardMonth.value;
    const yearvalue = cardYear.value;
    if(monthValue.length < 2 && yearvalue < 2){
        monthFormat.textContent = `Input correct Date`;
    }
    if(monthValue === ""){
        monthFormat.textContent = `Can't be blank`;
    }
    if(yearvalue === ""){
        monthFormat.textContent = `Can't be blank`;
    }
}

// lets validate the cvv
function validaterCvv() {
    const cvvValue = cardCvv.value;
    if(cvvValue === ""){
        cvvFormat.textContent = `Can't be blank`;
    }
    if(cvvValue.length < 3){
        cvvFormat.textContent = `Input correct CVV`;
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    if(cardName.value === ""){
        validateName();
    }else if(cardNum.value === ""){
        validateNumber();
    }else if(cardCvv.value === ""){
        validaterCvv();
    } else if(cardMonth.value === "" && cardYear.value === ""){
        validateDate();
    }else{
        formSection.classList.add("hidden");
        successSection.classList.remove("hidden");
        button.textContent = "Continue";
        button.addEventListener('click', function (){
            window.location.reload();
        })
    }
        
})



// button.addEventListener('click', ()=>{
   
//     e.preventDefault();
//     validateName();
//     validateNumber();
//     validaterCvv();
//     validateDate();
//     formSection.classList.add("hidden");
//     successSection.classList.remove("hidden");
//     button.textContent = "Continue";
//     button.addEventListener('click', function (){
//         window.location.reload();
//     })
    

// })
