
//create a function that would create a div container on page load
//create div containers for the page
//cretae div to container burger image

function createImgDiv() {
    createMainContainerDiv();
    var imgDiv = $("<div>");
    //add attributes to the button just created    
    //add class to the image Div
    imgDiv.addClass("imgItem");
    //create the image tag to house src
    let burgerImg = $("<img>");
    //assign image src to the results
    burgerImg.attr("src", "img/burger_image.jpg");
    burgerImg.addClass("burger-image");
    //append image to images div
    imgDiv.append(burgerImg);
    //display image on home page            
    //$("body").append(imgDiv);
    mainDiv.append(imgDiv);

}
function createMainContainerDiv() {

    var mainDiv = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    mainDiv.addClass("container");
    //data-type is a data* attribute, provides the name the of button
    topDiv.attr("Id", "wrapper");

    //write the name of each button
    //topDiv.text("Add or Eat Burger");

    //display button on home page            
    $("body").append(mainDiv);


}
function createTopDiv() {
    createMainContainerDiv();

    var topDiv = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    topDiv.addClass("top");
    //data-type is a data* attribute, provides the name the of button
    topDiv.attr("Id", "top");

    //write the name of each button
    topDiv.text("Add or Eat Burger");

    //display button on home page            
    //$("body").append(topDiv);
    mainDiv.append(topDiv);


}
function createLeftDiv() {
    createMainContainerDiv();

    var divFirst = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    divFirst.addClass("left");
    //data-type is a data* attribute, provides the name the of button
    divFirst.attr("Id", "divfirst");

    //write the name of each button
    //divFirst.text("first Div");   

    //display button on home page            
    //$("body").append(divFirst);
    mainDiv.append(divFirst);


}
//cretate footer
function createFooterDiv() {

    var footer = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    footer.addClass("footer");
    //data-type is a data* attribute, provides the name the of button
    footer.attr("Id", "footer");

    //write the name of each button
    footer.html("&#169 Osy Odife-2019");

    //display button on home page            
    $("body").append(footer);


}
//create function to create a form on page load
function createFormField() {
    createMainContainerDiv();
    $form = $("<form></form>");
    $form.append('<input type="text" name="burger" id="burger">');
    $form.append('<br>');
    $form.append('<button type="submit" form="nameform" id="submitBtn" >Add a Burger</button>');

    //('body').append($form);
    mainDiv.append($form);
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
    //createMainContainerDiv();
    createImgDiv();
    createTopDiv();
    createLeftDiv();
    createFormField();
    createFooterDiv()


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
