var element;

// ********************** GETTING VALUE OF CSS PROPERTIES ********************

// element= document.querySelector('#menu').style.border;
// element= document.querySelector('#menu').style.color;


// ********************** SETTING VALUE OF CSS PROPERTIES ********************
// document.querySelector('#menu').style.backgroundColor='yellow';

// document.querySelector('#header').style.backgroundColor='yellow';
// document.querySelector('#header').style.color='black';


// **********************SETTING VALUE WITH CLASS NAME/LIST********************
// document.querySelector('#header').className='abc xyz';
// element= document.querySelector('#header').className;

// document.querySelector('#header').classList='abc xyz'; // Same as className while setting value
// element= document.querySelector('#header').classList; //Returns Array

// *********************CLASS LIST PROPERTY*********************
// document.querySelector('#header').classList.add('NewClass','AnotherNewClass');
// document.querySelector('#header').classList.remove('OldClass');

element = document.querySelector('#header').classList;

console.log(element);
