class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.person = true;
  }

  sayMyName() {
    return this.fname + " " + this.lname;
  }
}

class SuperHero extends Person {
  constructor(fname, lname) {
    super(fname, lname);
    this.SuperHero = true;
  }

  fight() {
    return this.sayMyName() + " " + "fight";
  }
}

let p1 = new Person("Gaurav", "Gunjan");
console.log(p1);
console.log(p1.sayMyName());

console.log("==================");

let sh1 = new SuperHero("Shaktimaan", "Maan");
console.log(sh1);
console.log(sh1.sayMyName());
console.log(sh1.fight());
