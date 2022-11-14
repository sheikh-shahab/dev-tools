const Name = [{name: "shahmeer", age: 20}, {name: "shayan", age: 17}];

function makeRed() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
 console.log("hello");

// Interpolated
console.log("hello I am %s string!");
// Styled
console.log("%c I am some great text", 'font-size: 50px; background:red; text-shadow: 10px 0 blue');
// warning
console.warn('please red this msg!');
// Error
console.error("please solve this error!");
// Info
console.info("crocodiles eat 3-4 pepole per year");
// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');
// clearing

// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
Name.forEach(Name => {
    console.groupCollapsed(Name.name);
    console.log("This is " + Name);
    console.log(Name + "is"+ Name.age+ 'years old');
    console.log(Name + "is" + Name.age * 7 + "Name years old");
    console.groupEnd(Name.name);

})
// counting
console.count("wes");
console.count("wes");
console.count("wes");
console.count("shahmeer");
console.count("wes");
console.count("wes");
console.count("wes");
console.count("shahmeer");
console.count("wes");

//timing