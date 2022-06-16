function Q2(){
    let a_2 = document.querySelector(".a_2");
    let span1 = document.querySelector(".a_2 span");
    let span2 = document.querySelector(".b_2 span");
    let span3 = document.querySelector(".c_2 span");
    // --------------------------------------------------------
    const diag = 9 ;
    let res = (Math.sqrt(2) * diag) ;
    console.log(res);
    span1.innerHTML = res;

    // ---------------------------------------------------------
 
// const side1 = parseInt(prompt('Enter side1: '));
// const side2 = parseInt(prompt('Enter side2: '));
// const side3 = parseInt(prompt('Enter side3: '));

const sides = (5 + 6+ 7) / 2;
const area  = Math.sqrt(  sides * (sides - 5) * (sides - 6) * (sides - 7) );
    // let area = ( 6 + 5 + 7) /2;
    span2.innerHTML = area;
    console.log(area);

   // ---------------------------------------------------------

   const radius  = 4;
   const pi = Math.PI;
   let circumference = 4 * 2 * pi;
   let surfaceArea = (4^2) * pi ;
   
   console.log("circumference is :  " + Math.floor(circumference)  + " surface Area of circle is :  " + Math.floor(surfaceArea) );
// console.log("circumference is :  " + circumference + " surface Area of circle is :  " + circumference );
span3.innerHTML = "circumference is :  " + Math.floor(circumference)  + " surface Area of circle is :  " + Math.floor(surfaceArea ) ;
        // return res;
}
Q2();

// ------------------------------------------------------------------------------------------------------------------------------------------
// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-1.php
// https://www.youtube.com/watch?v=2P66HUh45h8

let a_3 = document.querySelector(".a_3 strong");
let b_3 = document.querySelector(".b_3 strong");

function Q3(){
    let span4= document.querySelector(".a_3 span");
    let span5 = document.querySelector(".b_3 span");

    a_3.addEventListener("click" , (e)=>{

        let num1 , num2;
        num1 = prompt(num1 );
        num2 =prompt(num2);
    
        if(num1>num2){
            span4.innerHTML=" first number  " + num1 +"  is bigger than second number  "+ num2;
        }else{
            span4.innerHTML=" first number  " + num1 +"  is NOT bigger than second number  "+ num2;
    
        }

    });

// ------------------------------------------------------------------

    b_3.addEventListener("click" , (e)=>{

          let num1 = prompt(num1 );
 
            if(num1%2 == 0){
                span5.innerHTML=` The number ${num1} is an EVEN number `  ;
            }else{
                span5.innerHTML= ` The number ${num1} is an ODD ` ;
            }

    });


}

Q3();

// ------------------------------------------------------------------------------------------------------------------------------------------


