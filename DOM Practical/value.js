var element;
// ############## GETTING THE VALUE OF DOM ###########

// element = document.getElementById('wrapper').innerText;
// element = document.getElementById('content').innerText;
// element = document.getElementById('content').innerHTML;
// element = document.getElementById('header').innerHTML;
// element = document.getElementById('menu').getAttribute('onClick');
// element = document.getElementById('menu').getAttributeNode('onClick'); // returns atttibute with its value
// element = document.getElementById('menu').getAttributeNode('onClick').value; //Same as .getAttribute
// element = document.getElementById('menu').attributes; //selects all attributes of menu tag
// element = document.getElementById('menu').attributes[1]; //returns 1st attribute of menu tag
// element = document.getElementById('menu').attributes[1].value; //returns 1st attribute's value

// element = document.getElementById('menu').attributes[1].name; //returns 1st attribute's name
// console.log(element);


// ******************* SETTTING THE VALUES OF DOM **************

// document.getElementById('header').innerText="<h1>Hey</h1>";
// document.getElementById('header').innerHTML="<h1>Hey</h1>";
// element = document.getElementById('header').innerHTML; //Checking the value of above setters

// ************** CHANGING/SETTING THE VALUES OF ATTRIBUTES **************

// element = document.getElementById('header').getAttribute('class');
// document.getElementById('header').setAttribute('class', 'xyz');
// console.log(element);

// document.getElementById('menu').setAttribute('style','border: 8px dotted yellow');
// document.getElementById('menu').attributes[3].value="border:10px dotted yellow";


// ***********************REMOVING ATTRIBUTES*************************

// document.getElementById('menu').removeAttribute('style');
// document.getElementById('menu').removeAttribute('class');
// element = document.getElementById('menu').getAttribute('class');
// console.log(element);