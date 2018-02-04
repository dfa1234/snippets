import './main.scss';

import Module from './module';
Module.date();

console.log('%cTest querySelectorAll','color:red');

let nodeList:NodeListOf<Element> = document.querySelectorAll('ul li a');
let htmlListElement:HTMLCollectionOf<HTMLElement> = nodeList as HTMLCollectionOf<HTMLElement>;
let arrayElement:HTMLElement[] = Array.from(htmlListElement);
arrayElement.forEach((elem)=>{
    console.log(elem);
    elem.style.color ='red'
});

console.log('%cTest querySelector','color:red');
let nodeElement:Element|null = document.querySelector('ul li a');
let myHtmlElement:HTMLElement = nodeElement as HTMLElement;
console.log(myHtmlElement);
myHtmlElement.style.color = 'blue';


console.log('%cTest 3: jQuery','color:red');
console.log($('ul li a'));
$('ul li a')[2].style.color = 'yellow';


console.log('%cTest 4: jQuery','color:red');
console.log($('ul li a'));
$('ul li a')[2].style.color = 'yellow';
$('ul li a').attr('href','http://github.com/dfa1234');

//$('ul li a').css('color','FFF');