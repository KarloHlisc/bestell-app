function displayFoodBox(){
    let cardFoodRef = document.getElementById("food-box-display");
    cardFoodRef.innerHTML="";
    for(let index = 0 ; index < myDishes.length; index++){
        let singleDish = myDishes[index];
        cardFoodRef.innerHTML+=`<div class="food-content" id="${singleDish.id}">
        <div class="food-name-section">
                <h3 id="food-name-${index}">${singleDish.name}</h3>
                <button id="btn-add-food-${index}" class="btn-add-food" onclick="addNote(${index})">+</button>
            </div>
            <p class="food-description" id="food-description">${singleDish.description}</p>
            <p class="food-price" id="food-price">${singleDish.price} €</p>
        </div>`;
    }
}

function displayDrinkBox(){
    let cardFoodRef = document.getElementById("drink-box-display");
    cardFoodRef.innerHTML="";
    for(let index = 0 ; index < myDrinks.length; index++){
        let singleDrink = myDrinks[index];
        cardFoodRef.innerHTML+=`<div class="drink-content">
        <div class="food-name-section">
                <h3 id="food-name-${index}">${singleDrink.name}</h3>
                <button id="btn-add-food-${index}" class="btn-add-food" onclick="addNote(${index})">+</button>
            </div>
            <p class="food-description" id="food-description">${singleDrink.description}</p>
            <p class="food-price" id="food-price-${index}">${singleDrink.price} €</p>
        </div>`;
    }
}

