/*Code try to understand*/

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
  };
  
  // x gets the value "Honda"
  const x = mycar.make;
  
  // the make property is changed by the function
  myFunc(mycar);
  // y gets the value "Toyota"
  const y = mycar.make;
  
  // When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
  
  function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30