//practice of string methods Question 1
let arr=[7,9,0,-4]
let n=3;

let ans=arr.slice(0,n);
console.log(ans);

//practice of string methods Question 2

let answ=arr.slice(arr.length-1);
console.log(answ);

//practice of string methods Question 3
let string=prompt("Enter a string");
if (string.length==0){
    console.log("Empty string");
}
else{
    console.log("Non-empty string");
}

//practice of string methods Question 4
let str="HelLo wOrlD";
let indx=str[3];
if (indx==indx.toLowerCase()){
    console.log("The character is in lowercase");
}else{
    console.log("The character is in uppercase");
}

//practice of string methods Question 5
let string1=prompt("Enter a string");
console.log(`the original string = ${string1}`);
console.log(`removed spaces = ${string1.trim()}`);

//practice of string methods Question 6
let arr2=[1,2,3,4,5];
let item=5;
if (arr2.indexOf(item) !== -1){
    console.log("Item found in the array");
}else{
    console.log("Item not found in the array");
}