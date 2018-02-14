import * as Rx from 'rxjs';


export const zip = () =>{
    const source = Rx.Observable.of(1,2,3,4,5);
    const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

    const example = Rx.Observable.zip(source,source2);

    const subscribe = example.subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log('complete')
    );
};



export const merge = ()=>{
    const source = Rx.Observable.of(1,2,3,4,5);
    const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

    const example = Rx.Observable.merge(source,source2);

    const subscribe = example.subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log('complete')
    );
};

export const concat = ()=>{
    const source = Rx.Observable.of(1,2,3,4,5);
    const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

    const example = Rx.Observable.concat(source,source2);

    const subscribe = example.subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log('complete')
    );
};


export const combineLatest = () =>{
    const source = Rx.Observable.of(1,2,3,4,5);
    const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

    const example = Rx.Observable.combineLatest(source,source2);

    const subscribe = example.subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log('complete')
    );
};


export const bufferAndZipPack = () => {
    const source = Rx.Observable.of(1,2,3,4,5);
    const example:Rx.Observable<any> = source.take(3).bufferCount(2).zip();
    const subscribe = example.subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log('complete')
    )
};

export const concatMap = () =>{
    const source = Rx.Observable.of(1,2,3,4,5);
    const source2 = Rx.Observable.of(`A`,`B`,`C`,`D`,`E`);

    const example = source.do(console.log).concatMap(item => source2);

    const subscribe = example.subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log('complete')
    );
};

concatMap();


