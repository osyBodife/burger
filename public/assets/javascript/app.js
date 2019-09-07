
//create a function that would create a div container on page load
//create div containers for the page
//cretae div to container burger image

function createImgDiv(){
    var imgDiv = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    imgDiv.addClass("top");
    //data-type is a data* attribute, provides the name the of button
    imgDiv.attr("Id", "top");

    //write the name of each button
    imgDiv.text("Add or Eat Burger");

    //display button on home page            
    $("body").append(img);

}
function createTopDiv() {

    var topDiv = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    topDiv.addClass("top");
    //data-type is a data* attribute, provides the name the of button
    topDiv.attr("Id", "top");

    //write the name of each button
   topDiv.text("Add or Eat Burger");

    //display button on home page            
    $("body").append(topDiv);


}
function createLeftDiv(){

    var divFirst = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    divFirst.addClass("left");
    //data-type is a data* attribute, provides the name the of button
    divFirst.attr("Id", "divfirst");
    
    //write the name of each button
    //divFirst.text("first Div");   
    
    //display button on home page            
    $("body").append(divFirst);
   

}

//create function to create a form on page load
function createFormField() {
    $form = $("<form></form>");
    $form.append('<input type="text" name="burger" id="burger">');
    $form.append('<button type="submit" form="nameform" >Add a Burger</button>');   
    createLeftDiv(); 
    $('body').append($form);
}
//get the burgers in database and display them
// function getDbBurgers(){
//     //make an ajax call to grab the burgers
//     let url=
//     s.jax(){

//     }

// }
window.onload = function () {
    // alert("window has loaded")
    //call the function to create the  form and input field/submit button
    createTopDiv()
    createFormField() ;


}

// $('button[type=submit]').on('click', function (event) {
//     event.preventDefault(); // prevent the Browser from refreshing
//     const burgerName = $('input[name="burger_name"]').val();

//     $.ajax({
//         url: '/add',
//         method: 'POST',
//         data: {
//             burger_name: burgerName
//         }
//     })
//         .then(displayNewBurger)
//         .catch(addBurgerFail);
// });
