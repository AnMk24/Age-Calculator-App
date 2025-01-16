const birthYearInput = document.getElementById("birthYear") as HTMLInputElement;
const calculateButton = document.getElementById("calculateButton") as HTMLButtonElement;
const resultDisplay = document.getElementById("result") as HTMLParagraphElement;

function calculateAge() {
    const birthYear = parseInt(birthYearInput.value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
     
    if(isNaN(birthYear)){
        resultDisplay.textContent = "մուտքագրված թիվը գոյություն չունի"
    }
    else if(birthYear>currentYear){
        resultDisplay.textContent= "տարեթիվը ապագայից չի կարող լինել";
    }
    else{
        resultDisplay.textContent = `Քո տարիքը ${age} տարի է։` ;
    }

}

calculateButton.addEventListener("click",calculateAge);