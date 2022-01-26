student = {
  name: "Jack",
  surname: "Jackson",
  isMale: "male",
  address: "Lenina street 34",
  contact: "+380954523645",
  getaddress: () => {
    return this.address;
  },
  switchIsMale: () =>
    (this.isMale = !this.isMale),
};

object = {
  nameFaculty: "Gryffindor",
  founder: "Godric Gryffindor",
  animal: "lion",
  colours: "scarlet and gold",
  Department:
    "of Witchcraft and Wizardry",
  getDepartment: () => {
    return this.Department;
  },
  setDepartment: (newDepartment) => {
    this.Department = newDepartment;
  },
};

class Book {
  constructor(
    author = "Макс Фрай",
    title = "Макс Фрай",
    publish = "2000",
    publishing = "Амфора"
  ) {
    this.author = author;
    this.title = title;
    this.publish = publish;
    this.publishing = publishing;
  }

  get_year() {
    return (
      new Date().getFullYear() -
      this.publish
    );
  }
}
let age = new Book();
console.log(age.get_year());
