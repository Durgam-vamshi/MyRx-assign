class Address {
  constructor(street, city, postalCode) {
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    Object.freeze(this);
  }
}

class Person {
  constructor(name, id, dateOfJoining, addresses) {
    this.name = name;
    this.id = id;
    this.dateOfJoining = new Date(dateOfJoining);
    this.addresses = Object.freeze(
      addresses.map((addr) =>
        Object.freeze(new Address(addr.street, addr.city, addr.postalCode))
      )
    );
    Object.freeze(this);
  }
}

const addresses = [
  { street: "12-1-504, Masab Tank", city: "Hyderabad", postalCode: "500028" },
  {
    street: "Banjara Hills, Road No 12",
    city: "Hyderabad",
    postalCode: "500034",
  },
];

const person = new Person("Rajesh Kumar", "ID456", "2024-12-24", addresses);

console.log(person);

person.name = "vamshi";
person.addresses[0].street = "Ameerpet, Opposite Mettuguda";

console.log(person);
