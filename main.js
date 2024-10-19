
// جمع المعلومات  get slider items / arry.from [es6]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slider
var sliderCount = sliderImages.length; 
// كدا بجيب العدد بتاع الصور الي في الاسليدر
// console.log(sliderCount)
// set current slider 

var currentSlider = 1 ;

// slider number string element;

var sliderNumberElement = document.getElementById('slider-number');

// previous  buttons

var nextButton = document.getElementById('next');
// // previous  buttons
var prevButton = document.getElementById('prev');

// Handil click on previous and next Buttons;


nextButton.onclick = nextSlider;
prevButton.onclick = prevSlider;

// create the main ul element

var paginathionElement = document.createElement('ul');

paginathionElement.setAttribute('id','paginathion-ul');

// creat list items Baswd on slide count

for(var i = 1; i<= sliderCount; i++){
     // crearte the li  
    
 var paginathionItemLI = document.createElement('li');

 // set custom attribute

 paginathionItemLI.setAttribute('data-index',i );

 // set item content
 paginathionItemLI.appendChild(document.createTextNode(i));
 
 // append items to the main ul list
  paginathionElement.appendChild(paginathionItemLI);
}
// add the created  ul element to the page;
document.getElementById('indicators').appendChild(paginathionElement);


// get the new created ul

var paginathionCreatedUl = document.getElementById('paginathion-ul');

// جمع المعلومات  get pagination Items / arry.from [es6]
var paginationBullets = Array.from(document.querySelectorAll('#paginathion-ul li'));

// loop throug all bullets utems

for(var i = 0; i < paginationBullets.length; i++){

paginationBullets[i].onclick = function(){

    currentSlider = parseInt(this.getAttribute('data-index'));

    theChecker();
}

}


// triger the checker functhion
theChecker();

// start function next slid
function nextSlider(){

   if(nextButton.classList.contains('disabled')){


   }else{

    currentSlider++;
    theChecker();

   }

}

function prevSlider(){

   if(prevButton.classList.contains('disabled')){
    
     return false; 

   }else{

    currentSlider--;
    theChecker();

   }
}

// crate the checker functhion

function theChecker(){
 // set the slider number 
    sliderNumberElement.textContent = 'slide# ' + (currentSlider) + 'of ' + (sliderCount); 
 // remove active class

   removeAllActive(); 

 // set active class on current slider

 sliderImages[currentSlider - 1 ].classList.add('active');

 // set active class on current pagination items
 paginathionCreatedUl.children[currentSlider - 1].classList.add('active');

 // checker  if current slider is the firest

 if(currentSlider == 1){
   // add disaled class on previous button
   
   prevButton.classList.add('disabled');
 }else{
    // add disaled class on previous button
   
   prevButton.classList.remove('disabled');
 }

 // checker  if current slider is the last

 if(currentSlider == sliderCount){
    // add disaled class on nextButton 
    nextButton.classList.add('disabled');
  }else{
     // add disaled class on nextButton
    
     nextButton.classList.remove('disabled');
  }

}

// remove active class from imges an bullets

function removeAllActive(){
    
    // loop throug imges
     sliderImages.forEach(function(img){
        img.classList.remove('active');
});

// loop through pagination Bullets

paginationBullets.forEach(function(bullet){

   bullet.classList.remove('avtive');

});

}
