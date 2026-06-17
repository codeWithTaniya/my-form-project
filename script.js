// "document" refers to the entire HTML page.
// "querySelector() "finds an HTML element using a CSS selector.
// "'#my-form' "means "find the element whose id is my-form".
// "const" creates a constant variable.
// The selected form element is stored in the variable "myForm".

const myform=document.querySelector('#my-form');
const emailInput=document.querySelector('#email');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const regInput=document.querySelector('#regno');
const branchInput=document.querySelector('#branch');
const age=document.querySelector('#age');
const option=document.querySelector('#option');
const design=document.querySelector('#design');
const motto=document.querySelector('#motto');
const review=document.querySelector('#review');
const about=document.querySelector('#about');
const join=document.querySelector('#join');
const userList=document.querySelector('#users');

console.log(regInput);
console.log(review);
console.log(about);
console.log(join);
console.log(design);

myform.addEventListener('submit', onsubmit);

function onsubmit(event){
    console.log("Submit button triggered");
    event.preventDefault();

    if(nameInput.value.trim() === '' || emailInput.value.trim() ==='' || regInput.value.trim() ==='' || branchInput.value.trim()==='' || age.value.trim()==='' || motto.value.trim()===''|| review.value.trim()===''|| about.value.trim()===''||join.value.trim() === ''){
        // Stop submission ONLY if validation fails
        event.preventDefault();

        msg.classList.add('error');
        msg.innerHTML ='Please enter all fields';

        setTimeout(() => {
            msg.innerHTML ='';
            msg.classList.remove('error');
        },3000);
       
    }
    else{
        console.log("Validation Passed - Data sending to Formspree...");
    }
}