
const urlFruitMixJson = "https://brotherblazzard.github.io/canvas-content/fruit.json";

const submitButton = document.getElementById("submit-button");

async function mixFruit(jsonFruitMix){
    try {
        const response = await fetch(jsonFruitMix);
        if (response.ok) {
            const data = await response.json();
            // DELETE this CONSOLE
            console.log(data)
            const fruitInputForm = document.getElementById("fruit-fieldset");
            data.forEach(fruit => {
            displayInput(fruit,fruitInputForm)
            });
            return data;
        } else {
        throw Error(await response.text());
        };
    } catch (error) {
        console.log(error);
    };
}

function displayInput(data,fieldset){


    const testSelector = document.querySelectorAll(".fruit-selection");
    
    for (let i = 0; i < testSelector.length; i++) {
        console.log(testSelector[i])
        testSelector[i].innerHTML += `<option value=${data.id}>${data.name}</option>`
        
    }



}

const fruitJson = mixFruit(urlFruitMixJson);



/*
const maxChecks = 3;

    let input = document.createElement("input");
    input.setAttribute("class","check");
    input.setAttribute("type","checkbox");
    input.setAttribute("name","fruit-check");
    input.setAttribute("value",data.id);
    //input.required = true;
    input.onclick = limitCheck;

// Limit Checks to Max
function limitCheck () {
    let checkedChecks = document.querySelectorAll(".check:checked");
    if (checkedChecks.length >= maxChecks + 1){
        return false;
    }
}

function submitForm(){
    console.log("Working")
}

submitButton.addEventListener("submit",submitForm)


function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);

*/