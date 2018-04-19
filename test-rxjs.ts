import * as Rx from 'rxjs';
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {log} from "./module";

const source = Rx.Observable.of(1,2,3,4,5);
const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

const observer:Observer<any> = {
    //closed: false,
    next:(value:any) => log(value),
    error: (err:any) => log(err,true),
    complete: () => log(`complete<hr>`)
};


log(`
//**********************************************************
//
//          MERGES
//
//**********************************************************
`);

const zip = () => Rx.Observable.zip(source,source2).subscribe(observer);

const merge = ()=> Rx.Observable.merge(source,source2).subscribe(observer);

const concat = ()=> Rx.Observable.concat(source,source2).subscribe(observer);

const combineLatest = () => Rx.Observable.combineLatest(source,source2).subscribe(observer);

const combineLatestTransform = () => Rx.Observable.combineLatest(source,source2,(a,b)=>a+'+'+b).subscribe(observer);

const forkJoin = () => Observable.forkJoin(source,source2).subscribe(observer);

const forkJoinTransform = () => Observable.forkJoin(source,source2,(a,b)=>a+'+'+b).subscribe(observer);

log(`zip`);
zip();
log(`merge`);
merge();
log(`concat`);
concat();
log(`combineLatest`);
combineLatest();
log(`combineLatest + Transform`);
combineLatestTransform();
log(`forkJoin`);
forkJoin();
log(`forkJoin + Transform`);
forkJoinTransform();


log(`
//**********************************************************
//
//          OPERATORS
//
//**********************************************************
`);

const bufferAndZipPack = () => source.take(3).bufferCount(2).zip().subscribe(observer);

const concatMap = () => source.concatMap(item => source2).subscribe(observer);


log(`bufferAndZipPack`);
bufferAndZipPack();
log(`concatMap`);
concatMap();