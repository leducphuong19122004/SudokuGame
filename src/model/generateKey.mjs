let x = [];
let array_key = [];
const n = 9;
let dem  = 0;
let NUMBER_OF_KEY = 2;

function ghinhan() {
    if(dem < NUMBER_OF_KEY) {
        // for (let k = 1; k < 82; k++) {
        //     console.log(x[k]);
        // }
        let key = [];
        for(let k =1; k<82; k++) {
            key.push(x[k]);
        }

        array_key[dem] = [];
        for(let j=0; j<81; j++) {
            array_key[dem][j] = key[j];
        }
        dem++;
    }else {
        process.exit(0);
    }
}

function check(v, k) {
    for(let t =1; t<k; t++) {
         // Determine row and column indices
         let i = Math.floor((k - 1) / n);
         let j = (k - 1) % n;
         let it = Math.floor((t - 1) / n);
         let jt = (t - 1) % n;
         if ((i === it || j === jt) && v === x[t]) return 0; // Same row or same column
         // Determine grid indices
         let idiv3 = Math.floor(i / 3);
         let jdiv3 = Math.floor(j / 3);
         let itdiv3 = Math.floor(it / 3);
         let jtdiv3 = Math.floor(jt / 3);
         if (idiv3 === itdiv3 && jdiv3 === jtdiv3 && v === x[t]) return 0; // Same 3x3 grid
    }
    return 1;
}

function Try(k) {
    for(let v=1; v<(n+1);v++) {
        if(check(v,k) === 1){
            x[k] =v;
            if(k == n*n){
                ghinhan();
            }else {
                Try(k+1);
            }
        }
    }
}

function Run() {
    for(let i=1; i <82; i++) {
        x[i] = -1;
    }
    Try(1);
}

process.on("exit", code => {
    return console.log(`App exit with ${dem} keys :`, array_key );
})

Run();