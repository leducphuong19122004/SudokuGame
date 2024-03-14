let x = [];
const n = 9;

function check(k) {
    for(let t =1; t < k; t++ ){
        let i = (k-1)/n;
        let j = (k-1)%n;
        let it = (t-1)/n;
        let jt = (t-1)%n;
        if((i==it || j ==jt)&& (x[t] == x[k]) ){
            console.log("Phan tu thu "+ t + "trung voi phan tu thu " + k);
            return 0;
        } 

        let idiv3 = i/3;
        let jdiv3 = j/3;
        let itdiv3 = it/3;
        let jtdiv3 = jt/3;
        if((idiv3==itdiv3) && (jdiv3==jtdiv3)&& (x[t] == x[k]) ){
            console.log("Phan tu thu "+ t + "cung o voi phan tu thu " + k);
            return 0; 
        } 
    }
    return 1;
}

export default function checkAnswer (req, res) {
    x = [...req.body];
    x.unshift('0');

    for(let i = 1; i< 82; i++) {
        if(check(i) == 0) {
            return res.send({message: "wrong answer"});
        }
    }
    return res.send({message: "true answer"});
    
}
