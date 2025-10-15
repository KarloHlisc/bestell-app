let myBasketName = [];
let myBasketPrice = [];
let myBasketNameDrinks = [];
let myBasketDrinkPrice = [];

function init(){
    displayFoodBox();
    displayDrinkBox();
    
    saveToLocalStorage();

   // getFromLocalStorage();
}

function getItemToTheBasket(index){
  let addIntemRef =  document.getElementById("basket");
  addIntemRef.innerHTML=`<h2 class="basket-name">Warenkorb</h2>
            <div class="basket-title">
                <h2 class="basket-name"> -Name Basket</h2>
            </div>
            <div class="basket-items">
                <h3 class="product-name">${myBasketName[index]}</h3>
                <div class="product-amount">
                    <button id="btn-product-decrease" onclick="" class="btn">-</button>
                    <span id="product-number" class="product-number">${myBasketPrice[index]}</span>
                     <button id="btn-product-increase" onclick="" class="btn">+</button>
                     <span id="product-costs" class="product-costs">`;
                     for(let i=0; i< myBasketPrice.length; i++){
                        return i;
                     }+`${i}
                     </span>
                     <button id="btn-product-delete" onclick="" class="btn">D</button>
                </div>
                 </div>
                `
}