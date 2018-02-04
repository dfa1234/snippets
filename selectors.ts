console.log('%c TEST SELECTORS:','color:red');

console.log('%c querySelector','color:red');
let nodeElement:Element|null = document.querySelector('ul li a');
let myHtmlElement:HTMLElement = nodeElement as HTMLElement;
myHtmlElement.textContent = 'Test querySelector';

console.log('%c querySelectorAll','color:red');
let nodeList:NodeListOf<Element> = document.querySelectorAll('ul li a');
let htmlListElement:HTMLCollectionOf<HTMLElement> = nodeList as HTMLCollectionOf<HTMLElement>;
let arrayElement:HTMLElement[] = Array.from(htmlListElement);
arrayElement.forEach((elem)=>{
    elem.style.color ='#FFF'
});
arrayElement[1].textContent = 'Test querySelectorAll';
arrayElement[1].style.color ='#fff0c9';

console.log('%c jQuery selector','color:red');
let allA = $('ul li a');
allA.css('text-transform','uppercase');
allA.css('text-decoration','none');
allA.attr('href','http://github.com/dfa1234');
allA[2].style.color = '#ffd784';
allA[2].textContent = 'Test jQuery Selector';

console.log('%c jQuery selector to native','color:red');
let lastA:JQuery = $('#menu a:last');
lastA.css('color','#ffbf62');
lastA.text('Test jQuery selector to native');
let lastANative:HTMLElement = $(lastA)[0];
lastANative.setAttribute('href','http://google.com');

//debugger;