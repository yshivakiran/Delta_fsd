// practice Q1
let num=35;

if (num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

//practice Q2

let name=prompt("enter the name");
let age=prompt("enter the age");

let mess=(`${name} is ${age} years old`);
alert(mess)

//practice Q3

let quarter=2;

switch (quarter){
    case 1:
        console.log('january, february, march')
        break;
    case 2:
        console.log('april,may,june')
        break;
    case 3:
        console.log('july,august,september')
        break;
    case 4:
        console.log('october,november,december')
        break;  
    default:
        console.log('not a quarter');            
}

//practice Q4

str='apple'

if (str[0]=='a' || str[0]=='A' && str.length>5){
    console.log("golden string")
}
else{
    console.log("not golden string")
}

//practice Q5

let a=3;
let b=5;
let c=1;

if (a>b){
    if(a>c){
        console.log(`${a} is greater`)
    }
    else{
        console.log(`${c} is greater`)
    }
}else{
    if (b>c){
        console.log(`${b} is greater`)
    }
    else{
        console.log(`${c} is greater`)
    }
}

//practice Q6

let num1=62;
let num2=32452;

if ((num1%10)==(num2%10)){
    console.log("the last digit is same");
}
else{
    console.log("the last digit is not same");
}