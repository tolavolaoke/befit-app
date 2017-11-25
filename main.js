
// For Watermelon image 
var fruitImg = document.getElementById("watermelon");
//get the watermelon image
	// fruitImg.addEventListener("click", myFunction);
    // add a click event to it

function addWatermelon() {
    document.getElementsByClassName("blue")[0].innerHTML += "<img src='https://vignette3.wikia.nocookie.net/clubpenguin/images/f/f9/Watermelon_Pin.PNG/revision/latest?cb=20140323201318'>";
    //tells the browser to add the image to the blue div 
}

// For Waternmelon button
function addimage() { 
    var img = document.createElement("img");
    img.src = "https://vignette3.wikia.nocookie.net/clubpenguin/images/f/f9/Watermelon_Pin.PNG/revision/latest?cb=20140323201318"; 

    // document.body.appendChild(img);
    document.getElementsByClassName("blue")[0].innerHTML += "<img src='https://vignette3.wikia.nocookie.net/clubpenguin/images/f/f9/Watermelon_Pin.PNG/revision/latest?cb=20140323201318'>";
  }

//Form Validation



// var signInForm = document.getElementsByClassName("signInForm");

// // submitBtn.addEventListener("click", function(){
// //     check(signInForm);   
// // })

//     function check()/*function to check userid & password*/
//     { 
//         var signInForm = document.getElementsByClassName("signInForm")[0];
//         console.log(signInForm)
//      /*the following code checkes whether the entered userid and password are matching*/

//      if(signInForm.email.value !== "" && signInForm.password.value !== "") 
//       {
//         window.open('index.html')/*opens the target page while Id & password matches*/
//       }
//      else
//      {
//        alert("Error Password or Username")/*displays error message*/
//       }
//     }

// var signInForm = document.getElementsByClassName("signInForm");
// console.log(signInForm);


// submitBtn.addEventListener("click", function(){
//     check();   
// })

    // function check()/*function to check userid & password*/
    // { 
    //  /*the following code checkes whether the entered userid and password are matching*/

    //  if(signInForm.email.value !== "" && signInForm.password.value !== "") 
    //   {
    //     window.open('index.html')/*opens the target page while Id & password matches*/
    //   }
    //  else
    //  {
    //    alert("Error Password or Username")/*displays error message*/
    //   }
    // }

    window.onload = function() {
        var signInForm = document.getElementsByClassName("signInForm")[0];
        var signInBtn = signInForm.submitBtn;

        signInBtn.addEventListener('click', function() {
            if(signInForm.email.value !== "" && signInForm.password.value !== "") 
            {
              window.open('index.html')/*opens the target page while Id & password matches*/
            }
           else
           {
             alert("Error Password or Username")/*displays error message*/
            }
        });


    }