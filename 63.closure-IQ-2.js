function outer() {
    let arrfn = [];
    for (let i = 0; i < 3; i++) {
        arrfn.push(function fn() {
            i++;  
            console.log(i);
        });
    }
    return arrfn;
}
let arrFn = outer();
arrFn[0](); // 4
arrFn[1](); // 5
arrFn[2](); // 6
