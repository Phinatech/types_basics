class code {
  name: string;
  age: number;
  stack: string;

  constructor(name: string, age: number, stack: string) {
    (this.name = name), (this.age = age), (this.stack = stack);
  }

  static totalage() {
    console.log(`89`);
  }

  sum() {
    return this.age;
  }
}

let code2 = new code("edwin", 67, "Node.js");
let code3 = new code("edwin", 67, "Node.js");
let code4 = new code("edwin", 67, "Node.js");
console.log();

class tokenkey extends code {
  tokenData: number;

  constructor(tokenData: number, name: string, age: number, stack: string) {
    super(name, age, stack);
    this.tokenData = tokenData;
  }

  tokencheck(b: number) {
    if (b === this.tokenData) {
      console.log("welcome");
    } else {
      console.log("incorect password");
    }
  }
}
let tokenUser = new tokenkey(67888, "jude", 45, "php developer");
console.log(tokenUser);

tokenUser.tokencheck(6788);

//interference
// every class must constructor,memembers,field

interface motorType {
  name: string;
  model: number;
  color: string;
  size: number;
}

class newMotors implements motorType {
  name: string;
  model: number;
  color: string;
  size: number;

  constructor(options: motorType) {
    this.name = options.name;
    this.model = options.model;
    this.color = options.color;
    this.size = options.size;
  }
}

let newCars = new newMotors({
  name: " tesla",
  model: 2078,
  color: "black",
  size: 600,
});
console.log(newCars);
