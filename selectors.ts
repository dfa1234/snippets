console.log('SELECTORS');

console.log('querySelector');
let nodeElement:Element|null = document.querySelector('ul li a');
let myHtmlElement:HTMLElement = nodeElement as HTMLElement;
myHtmlElement.textContent = 'Attributes';

console.log('querySelector to JQuery');
let firstA:Element|null = document.querySelector('#menu a:first-child');
if(firstA)
    $(firstA).css('color','#ffdaec');

console.log('querySelectorAll');
let nodeList:NodeListOf<Element> = document.querySelectorAll('ul li a');
let htmlListElement:HTMLCollectionOf<HTMLElement> = nodeList as HTMLCollectionOf<HTMLElement>;
let arrayElement:HTMLElement[] = Array.from(htmlListElement);
arrayElement.forEach( elem => elem.style.color ='#FFF');
arrayElement[1].textContent = 'CSS';
arrayElement[1].style.color ='#fff0c9';

console.log('getElementById');
let myMenu:HTMLElement|null = document.getElementById('menu');
if(myMenu){
    myMenu.style.textDecoration = 'none';
    let myLis = Array.from(myMenu.children as HTMLCollectionOf<HTMLElement>);
    myLis.forEach(li => li.classList.add('mytab'));
}

console.log('jQuery selector only');
let allA:JQuery = $('ul li a');
allA.css('text-transform','uppercase');
allA.css('text-decoration','none');
allA.attr('href','http://github.com/dfa1234');
allA[2].style.color = '#ffd784';
allA[2].textContent = 'Attributes';
$('#menu li').addClass('bgd');

console.log('jQuery selector, back to native');
let lastA:JQuery = $('#menu a:last');
lastA.css('color','#ffbf62');
lastA.text('Effects');
let lastANative:HTMLElement = $(lastA)[0];
lastANative.setAttribute('href','http://google.com');


///////

$.get("https://jsonplaceholder.typicode.com/users",(resultParsed,textStatus,jqXHR)=>{
    resultParsed.forEach((user:any) => {
        //$('#container').append(user.name).append('<br>');
    })
});

///////

const loadPage = (idPage:number) => function($event:JQuery.Event){
    $event.stopPropagation();
    $event.preventDefault();
    $('#container').fadeOut(500,'',()=>{
        $('#container').load('html/pages.html #page'+idPage).fadeIn()
    })
    // $('#container').slideUp(500,'',()=>{
    //     $('#container').load('html/pages.html #page3').slideDown()
    // })

};

$('#container').load('html/pages.html #page1');
$('#container').css('white-space','pre-wrap');
$('#menu li:nth-child(1)').on('click', loadPage(1));
$('#menu li:nth-child(2)').on('click',loadPage(2));
$('#menu li:nth-child(3)').on('click',loadPage(3));
$('#menu li:nth-child(4)').on('click',loadPage(4));

$('#menu li:nth-child(4)').on('click',function($event){
    $(this).animate({'background':'#534823'},500)
});

//debugger;