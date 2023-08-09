import Pet from "./Pet.js";
import Card from "./Card.js";

function Child({
  firstName = "Joe",
  lastName = "Bloggs",
  age = 60,
  petName = "I don't have a pet",
}) {
  //   console.log(props);
  //   Below is obj destructuring example
  //   const obj = {
  //     firstName: "Andy",
  //     lastName: "Bolton",
  //     age: "35"
  //   };
  //   obj.firstName
  //   let {firstName} = obj;
  //   firstName

  return (
    <Card>
      <p>This is a child component it's firstName value is {firstName}</p>
      <p>The last name is {lastName}</p>
      <p>The age is {age}</p>
      <Pet name={petName} />
    </Card>
  );
}

export default Child;
