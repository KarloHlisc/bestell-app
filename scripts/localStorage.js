////localSotgrage function
function saveToLocalStorage(){
    localStorage.setItem("myBasketName", JSON.stringify(myBasketName));
    localStorage.setItem("myBasketPrice", JSON.stringify(myBasketPrice));
}

function getFromLocalStorage() {
   let basketName =  JSON.parse(localStorage.getItem("myBasketName"));
   let basketPrice =  JSON.parse(localStorage.getItem("myBasketPrice"));
   if(basket != null && basketPrice != null){
   myBasket = basketName;
   myBasketPrice = basketPrice;
    };
}



function addNote(index){
    ///eingabe von user
    //let foodButtonRef = document.querySelector(`food-content`);
   // let noteTitleInputRef = document.getElementById("noteTitle_input");
    /// eingabe auslesen
    let foodName = document.getElementById(`food-name-${index}`).innerHTML;
    let foodPrice = document.getElementById(`food-price-${index}`).innerHTML;
    /// eingabe den notizen hinzufugen
    if(foodName != "" && foodPrice !=""){
    myBasketName.push(foodName);
    myBasketPrice.push(foodPrice);
   // notesTitles.push(noteTitleInputRef.value);
    }
     saveToLocalStorage();
     //getFromLocalStorage();
     getItemToTheBasket(index);
    /// eingabe anzeigen lassen
   // renderNotes(); //pozivamo tu funkciju da se prikazu promjene
    ///input field lerren (aber ganz am ende)
   // foodButtonRef.value=""; // na kraju svega brisemo prethodnu natipkanu vrijednost iz input polja
   // noteTitleInputRef.value="";
    //getFromLocalStorage();
}
/**
function addToTrashNote(indexNote){
let trashNote = notes.splice(indexNote,1);
trashNotes.push(trashNote[0]);
let trashNotesTitle = notesTitles.splice(indexNote,1);
trashNotesTitles.push(trashNotesTitle[0]);
    renderNotes();
    renderTrashNotes();
} */