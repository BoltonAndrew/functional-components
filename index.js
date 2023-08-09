function pet(obj) {
  return `My pet is called ${obj.name}`;
}

function child({ firstName, lastName, age = 60, petName }) {
  return [
    `This is a child component it's firstName value is ${firstName}`,
    `The last name is ${lastName}`,
    `The age is ${age}`,
    pet({ name: petName }),
  ];
}

function parent() {
  return [
    "Functional Components",
    child({ firstName: "Andy", lastName: "Bolton", age: 19, petName: "Link" }),
    child({ firstName: "Steve", lastName: "Jobs" }),
  ];
}

function app() {
  return parent();
}

console.log(app());
