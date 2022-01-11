
export default class User {
  constructor(email, name, pass, grade) {
    this.email = email;
    this.name = name;
    this.pass = pass;
    this.grade = grade;
  }

  tos() {
    return `email = ${this.email}, name=${this.name}, pass=${this.pass}, grade=${this.grade}`
  }
}