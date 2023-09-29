function Person(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
  this.person = true;
}

Person.prototype.sayMyName = function () {
  return this.firstname + " " + this.lastname;
};


function SuperHero(fname, lname) {
  Person.call(this, fname, lname);
  this.SuperHero = true;
}

// SuperHero.s
SuperHero.prototype.fight = function () {
  return this.sayMyName() + " " + "fight";
};

let p1 = new Person("Gaurav", "Gunjan");
console.log(p1);
console.log(p1.sayMyName());

console.log("====================");

let sh1 = new SuperHero("Shaktimaan", "Maan");
console.log(sh1);
console.log(sh1.fight());
console.log(sh1.sayMyName());
