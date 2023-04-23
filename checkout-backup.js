/* Something goes wrong when I connect the documents.
The error messages show up if the input doesnt meet the requirements set in the function.
But the submit/pay button doesn't take you to the "next" page (success.html).
I disconnected the js file from the HTML, 
so it's at least possible to see the success page.

The event in the prevent default is also deprecated, maybe that matters?
change tag in form from input to button , didn't work, only skips the errors.

Now it just shows the errors, but still goes to succsess

tried passing event in as parameter, still goes to success*/


const form = document.querySelector("form");

//just testing, connected
//form.innerHTML =`<p>hellai</p>`

const firstnameName = document.querySelector("#fornavn");
const firstnameError = document.querySelector("#firstname-error");

const lastnameName = document.querySelector ("#etternavn");
const lastnameError = document.querySelector("#lastname-error");

const street =document.querySelector ("#gatenavn");
const streetError = document.querySelector ("#street-error");

const postalCode = document.querySelector("#postadresse");
const postalError = document.querySelector("#postal-error");

const city = document.querySelector("#by");
const cityError = document.querySelector("#city-error");

const cardNum = document.querySelector("#kort");
const cardNumError = document.querySelector("#card-num-error");

const expDate = document.querySelector("#utlop");
const expDateError = document.querySelector("#exp-error");

const CVC = document.querySelector("#sikkerhet");
const CVCError = document.querySelector("#cvc-error");

const yourEmail = document.querySelector("#epost");
const emailError = document.querySelector("#email-error");



function onSubmitting(event) {

    event.preventDefault();

    if (checkLength(firstnameName, 0) === true) {
        firstnameError.style.display = "none";
    } else {
        firstnameError.style.display = "block";
    }
    if (checkLength(lastnameName,1) === true) {
        lastnameError.style.display = "none";
    } else {
        lastnameError.style.display = "block";
    }
    if (checkLength(street,4) === true) {
        streetError.style.display = "none";
    } else {
        streetError.style.display = "block";
    }
    if (checkLength(postalCode,3) === true) {
        postalError.style.display = "none";
    } else {
        postalError.style.display = "block";
    }
    if (checkLength(city, 1) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }
    if (checkLength(cardNum, 15) === true) {
        cardNumError.style.display = "none";
    } else {
        cardNumError.style.display = "block";
    }
    if (checkLength(expDate, 4) === true) {
        expDateError.style.display = "none";
    } else {
        expDateError.style.display = "block";
    }
    if (checkLength(CVC, 2) === true) {
        CVCError.style.display = "none";
    } else {
        CVCError.style.display = "block";
    }

    if (checkEmailFormat(yourEmail.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}

form.addEventListener("submit", onSubmitting(event));

function checkLength(inputLine, criterium) {
    if (inputLine.value.trim().length > criterium) {
        return true;
    }
    else {
        return false;
    }
}

function checkEmailFormat(emailInput) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailInput);
    return patternMatches;
}
