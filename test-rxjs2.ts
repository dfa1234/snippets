import * as Rx from 'rx-dom';
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

import {log} from "./module";

const source = Rx.Observable.of(1,2,3,4,5);
const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

log(`
//**********************************************************
//
//         NUMBERS - THEN LETTERS
//
//**********************************************************
`);

//Method one
//let one = source.take(1);
//let two = source2.take(1);
//one.concat(two).subscribe(r => log(r));


let numbers = source;
let letters = source2.publish();
letters.subscribe(r => log(r));
numbers.subscribe(r => log(r), r => log(r), letters.connect.bind(letters));


log(`
//**********************************************************
//
//         RX-DOM EXTENSION - PUBLISH LAST
//
//**********************************************************
`);

//console.time('request');
let getRequest = Rx.Observable
    .timer(1000).concatMap( r=> Rx.DOM.get(`https://jsonplaceholder.typicode.com/posts/1`))
    //.do(r => console.timeEnd('request'))
    .publishLast()
    .refCount();


getRequest.subscribe(
        r => log(r.response),
        r => log(r)
    );

getRequest.subscribe(
    r => log(r.response),
    r => log(r)
);

getRequest.subscribe(
    r => log(r.response),
    r => log(r)
);

getRequest.subscribe(
    r => log(r.response),
    r => log(r)
);

getRequest.subscribe(
    r => log(r.response),
    r => log(r)
);
