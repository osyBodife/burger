
//create a function that would create a div container on page load
//create div containers for the page
//cretae div to container burger image

function createImgDiv() {
    //createMainContainerDiv();
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
    //$("#wrapper").append(imgDiv);

}

function createTopDiv() {
    //createMainContainerDiv();
//let p="<p id='addBurger'>"
    var topDiv = $("<div>");
    //add attributes to the button just created
    //btnClass is defined in .css file
    topDiv.addClass("top");
    //data-type is a data* attribute, provides the name the of button
    topDiv.attr("Id", "top");

    //write the name of each button
    //p.text('Eat de Burger');
    //topDiv.append(p);
    topDiv.text("Add or Eat Burger");

    //display button on home page            
    //$("body").append(topDiv);
   // $("#wrapper").append(topDiv);


}
function createLeftDiv() {
    //createMainContainerDiv();

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
    //$("#wrapper").append(divFirst);


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
    //$("body").append(footer);


}
//create function to create a form on page load
function createFormField() {
    //createMainContainerDiv();
    var form = $("<form></form>");
    form.append('<input type="text" name="burger_name" id="burger">');
    form.append('<br>');
    form.append('<button type="submit" name="burger_name" id="submit" >Add a Burger</button>');

    //$('body').append($form);
    //mainDiv.append($form);
    //$("#wrapper").append(form);
}

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
    




var currentURL = window.location.origin;
//console.log (currentURL);
$("#submit").click(function (event) {
    event.preventDefault();
    let burgerName = $("#burger").val().trim();
    //console.log(burgerName);
   
    
    new_burger = {
        burger_name: burgerName,
        
    }
    console.log(new_burger);
    $.post(currentURL + "/add", new_burger)
        .then(function (data) {
            console.log(data)
        });
    //clear form field after submission
    //$('#survey_form input[type="text"]').val('');
    //modal logic
});

//to display burger 
/*
<div class="row" id="menu_list">
      <div class="burger_container" id="{{id}}">
        <p class="burgerToEat">
            <img src="img/burger_image.jpg" id="imgburger">{{burger_name}}
        </p>

        <button class="btn" data-id="{{id}}" data-state="{{devoured}}">
            {{#if devoured}} devoure{{else}} Devoure{{/if}}
        </button>




      </div>
  </div>


*/
const burger_template = (burgerName, id, devoured) => {
    const burger_container = $('<div>').attr({
        class: 'burger_container',
        id: id
    });
    const img = $('<img>').attr('src', 'img/burger_image.jpg" id="imgburger');
    //const name = $('<p>');
    const p = $('<p>').attr({
        class:"burgerToEat" 
    })


    
    const button = $('<button>').attr({
        'data-id': id,
        class: 'btn ',
        'data-state': devoured
    });
    p.append(img);
    p.html(burgerName);
    button.html('Devoured');

    burger_container.append(p,button);
    return burger_container;
};