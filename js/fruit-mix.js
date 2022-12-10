
const urlFruitMixJson = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const hiddenDataValue = document.getElementById("hidden-date-value");
const freshForm = document.getElementById("fresh-form");
const newDate = new Date(Date.now());

hiddenDataValue.setAttribute("value",newDate.toLocaleDateString("en-US"));
freshForm.addEventListener("submit",getFormValues);

async function mixFruit(jsonFruitMix){
    try {
        const response = await fetch(jsonFruitMix);
        if (response.ok) {
            const data = await response.json();
            // DELETE this CONSOLE
            console.log(data)
            data.forEach(fruit => {
            displayInput(fruit)
            });
        } else {
        throw Error(await response.text());
        };
    } catch (error) {
        console.log(error);
    };
}

function displayInput(data){
    const testSelector = document.querySelectorAll(".fruit-selection");
    
    for (let i = 0; i < testSelector.length; i++) {
        testSelector[i].innerHTML += `<option value=${JSON.stringify(data.nutritions)}>${data.name}</option>`
        
    }
}

function saveMixLocal(){
    let actualStorageValue = window.localStorage.getItem("times-mixed");
    if (actualStorageValue === null) {
        window.localStorage.setItem("times-mixed", 1);
        
    } else {
        window.localStorage.setItem("times-mixed", parseInt(actualStorageValue) + 1);
        
    };
}

function getFormValues(event){
    
    
    let formDate = hiddenDataValue.value;
    let formName = document.getElementById("form-name").value;
    let formEmail = document.getElementById("form-email").value;
    let formPhone = document.getElementById("form-phone").value;

    let fruit1 = document.getElementById("fruit-selection-1");
    let fruit2 = document.getElementById("fruit-selection-2");
    let fruit3 = document.getElementById("fruit-selection-3");

    let fruitSel1 = JSON.parse(document.getElementById("fruit-selection-1").value);
    let fruitSel2 = JSON.parse(document.getElementById("fruit-selection-2").value);
    let fruitSel3 = JSON.parse(document.getElementById("fruit-selection-3").value);

    let additionalInfo = document.getElementById("additional-info").value;

    let carbohydrates = (fruitSel1.carbohydrates + fruitSel2.carbohydrates + fruitSel3.carbohydrates).toFixed(2);
    let protein = (fruitSel1.protein + fruitSel2.protein + fruitSel3.protein).toFixed(2);
    let fat = (fruitSel1.fat + fruitSel2.fat + fruitSel3.fat).toFixed(2);
    let sugar = (fruitSel1.sugar + fruitSel2.sugar + fruitSel3.sugar).toFixed(2);
    let calories = (fruitSel1.calories + fruitSel2.calories + fruitSel3.calories).toFixed(2);

    

    displayFormValues(formDate,formName,formEmail,formPhone,fruit1,fruit2,fruit3,carbohydrates,protein,fat,sugar,calories,additionalInfo);
    saveMixLocal();
    freshForm.reset();
    event.preventDefault();
    
}

function displayFormValues(date,name,email,phone,fruit1,fruit2,fruit3,carbohydrates,protein,fat,sugar,calories,additionalInfo){
    document.querySelector("#order-date-output").innerHTML = date;
    document.querySelector("#order-name-output").innerHTML = name;
    document.querySelector("#order-email-output").innerHTML = email;
    document.querySelector("#order-phone-output").innerHTML = phone;

    document.querySelector("#order-fruit1-output").innerHTML = fruit1.options[fruit1.selectedIndex].text;
    document.querySelector("#order-fruit2-output").innerHTML = fruit2.options[fruit2.selectedIndex].text;
    document.querySelector("#order-fruit3-output").innerHTML = fruit3.options[fruit3.selectedIndex].text;

    document.querySelector("#order-carboydrates-output").innerHTML = carbohydrates;
    document.querySelector("#order-protein-output").innerHTML = protein;
    document.querySelector("#order-fat-output").innerHTML = fat;
    document.querySelector("#order-sugar-output").innerHTML = sugar;
    document.querySelector("#order-calories-output").innerHTML = calories;

    document.querySelector("#order-instructions-output").innerHTML = additionalInfo;
}


mixFruit(urlFruitMixJson);




