function displayFoodBox(){
    let cardFoodRef = document.getElementById("food-box-display");
    cardFoodRef.innerHTML="";
    for(let index = 0 ; index < myDishes.length; index++){
        cardFoodRef.innerHTML+=`<div class="food-content">
        <div class="food-name-section">
                <h3 id="food-name-${index}">${myDishes[index].name}</h3>
                <button id="btn-add-food-${index}" class="btn-add-food" onclick="addNote(${index})">+</button>
            </div>
            <p class="food-description" id="food-description">${myDishes[index].description}</p>
            <p class="food-price" id="food-price">${myDishes[index].price} €</p>
        </div>`;
    }
}

function displayDrinkBox(){
    let cardFoodRef = document.getElementById("drink-box-display");
    cardFoodRef.innerHTML="";
    for(let index = 0 ; index < myDrinks.length; index++){
        cardFoodRef.innerHTML+=`<div class="drink-content">
        <div class="food-name-section">
                <h3 id="food-name-${index}">${myDrinks[index].name}</h3>
                <button id="btn-add-food-${index}" class="btn-add-food" onclick="addNote(${index})">+</button>
            </div>
            <p class="food-description" id="food-description">${myDrinks[index].description}</p>
            <p class="food-price" id="food-price-${index}">${myDrinks[index].price} €</p>
        </div>`;
    }
}
