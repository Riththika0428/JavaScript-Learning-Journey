//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}               //Output - 1 2 3 4 5



for (let i = 5; i >= 1; i--) {
    console.log(i);
}          //Output : 5 4 3 2 1



for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}                //Output : 2 4 6 8 10 12 14 16 18 20


//While loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}            //Output : 1 2 3 4 5


//do..while loop
let a = 1;

do{
    console.log(a);
    i++;
} while(a<=5);


//Break statement
for(let x =1; x<=10; x++){
    if(x === 6){
        break;
    }
console.log(x);
}                      //output : 1 2 3 4 5


//continue statement
for(let y =1; y<=5; y++){
    if(y===3){
        continue;
    }
console.log(y);
}                    //output : 1 2 4 5



