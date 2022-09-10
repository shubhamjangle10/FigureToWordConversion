let btn = document.getElementById('btn');
let inputNumber = document.getElementById('inputNumber');
let outputField = document.getElementById('output');

btn.addEventListener('click',()=>{
    // console.log(inputNumber.value);
    let digits= ["","one","two","three","four","five","six","seven","eight","nine"];
    let output;
    let x = inputNumber.value;
    let ipLength= parseInt(x.toString().length);   
    // console.log("Length: "+ipLength);
    let y = String(x).slice(-2);
    let op1 = getOneToHundred(y);
    console.log(op1);
    
    if(ipLength<3){
        output = op1;
    }
    else if(ipLength==3){
        let val = x[0];
        let op2 = digits[val];
        output = op2+" "+"hundred"+" and "+op1;
    }
    else if(ipLength==4 || ipLength==5){
        let val0;
        let val1;
        if(ipLength==4){
            val0 = x[0];
            val1 = x[1];
        }
        else {
            val0 =(x.toString()).substr(0,2);
            val1 = x[2];
        }
        let op3 = getOneToHundred(val0)+" "+"thousand";
        if(val1!= 0){
            op2 = digits[val1]+" "+"hundred";
            output = op3+" "+op2+" and "+op1;
        }
        else{
            if(op1!=0){
                output = op3+" and "+op1;
            }
            else{
                output = op3;
            }
        }
    }
    else if(ipLength==6 || ipLength==7){
        let val0;
        if(ipLength==6){
            val0 = x[0];
            val1 = (x.toString()).substr(1,2);
            val2 = x[3];
        }
        else {
            val0 =(x.toString()).substr(0,2);
            val1 = (x.toString()).substr(2,2);
            val2 = x[4];
        }
        // console.log("lakh " + val1)
        let op4 = getOneToHundred(val0)+" "+"lakh";
        if(val1 != 0){
            op3 = getOneToHundred(val1)+" "+"thousand";
            if(val2 != 0){
                op2 = digits[val2]+" "+"hundred";
                output = op4+" "+op3+" "+op2+" and "+op1;
            }
            else{
                output = op4+" "+op3+" and "+op1;
            }
        }
        else{
            if(val2 != 0){
                op2 = digits[val2]+" "+"hundred";
                output = op4+" "+op2+" and "+op1;
            }
            if(op1!=0){
                output = op4+" and "+op1;
            }
            else{
                output = op4;
            }
        }
    }
    else{
        output = "Input number too large. Max length can be 7"
    }
    outputField.value = output;
})

function getOneToHundred(y){
    let digits= ["","one","two","three","four","five","six","seven","eight","nine"];
    let teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let op;
    if(y[0]==0){
        if(y[1]){

            op = digits[y[1]]
        }
        else{
            op = "zero";
        }
    }
    else if(y<10){
        op = digits[y];
    }
    else if(y>=10 && y<20){
        let val = y[1];
        op= teens[val];
    }
    else if(y>=20 && y<100){
        let val0 = y[0];
        let val1 = y[1];
    
        op= tens[val0]+" "+digits[val1];
    }
    return op;
}
