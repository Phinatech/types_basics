// //string
// console.log("hello judith");
// let ju: string ="judith"
// ju = "tommy"
// console.log(ju);
// // change the value to be the same with the variable

// //number
// let x: number = 10;
// console.log(x);

// let z : number = 5;
// let y : number = 10;

// let w = z + y;
// console.log(w);

// //to have a value either a  string or number
// let person :boolean | string = true 
// console.log(person);

// //null

// let nul: null = null;
// console.log(nul);

// //undefined
// let ear: undefined
// console.log(ear);

// //array
// let names : (string | number |boolean |object ) [] =["jaji", true , 20 , {car:"motor"}]
// names [1] = "sanni"
// console.log(names);


// let codelab : (string | number |boolean |object ) [] =["race","yhok" , true , 20 , 6, {car:"motor"}]
// console.log(codelab.length);

// //tuple it must following special order and it must be fixed
// let codelab2 : [string,number] = ["jane", 9]

// //object
// let codelab3 : {
//     name:string
//     age:number
//     car:boolean
//     pagination?: number              //??  the or complexion it means optional
//     arr2:(number|string)[];

// } 
// ={
//     name:"john",
//     age : 300,
//     car:true,
//     pagination:10,
//     arr2:[30, "jane"]

// }
// console.log(codelab3);

// // let persons : {
// //     name:string
// //     age:number
// //     height:boolean
// //     complexion: string
// //     score:number
// // }


// //using type

// type Person = {
//     named:string;
//     Age : number;
//     short : boolean;  
//     color : string|number;       //"|" THIS IS CALLED UNION TYPE .the general name is pipe

// }
// let student: Person = {
//     named:"judith",
//     Age: 78,
//     short: true,
//     color : 4 
// }
// console.log(student);

// //interfere

// interface Mydate {
//     naez : string;
//     Age : number;
//     color : string;
// }
// let data : Mydate {
//     height : number
    
// }


//Emus

enum myData{
    small = 200,
    medium = 600,
    large = 700,
}

const user1 = myData.small;
console.log(user1);

//function
const myFun2 = (x: number, y:number):string => {
    return( x * y).toString();
};
console.log(myFun2(2,3,));

//OOP

class ALL {
   name : string;
   age : number;
   score : number;

   constructor( name : string, age : number, score : number){
    this.name = name
    this.age = age
    this.score = score
   }

   intro(): void{
    console.log(`my name is ${this.name} and i score ${this.score}`);
   }
}

let student1 = new ALL("edwin",67,789);
console.log(student1);
student1.intro();



let student2 = new ALL("favour",80,569);
console.log(student2);