
var faker = require('faker');

var firstName = faker.name.firstName();
var lastName = faker.name.lastName();

var suffix = faker.name.suffix();
let prefix = faker.name.prefix();
let jobArea = faker.name.jobArea();


console.log(faker.fake("{{name.firstName}}"));
console.log(faker.fake("{{name.lastName}}"));
console.log(faker.fake("{{name.suffix}}"));
console.log(faker.fake("{{name.prefix}}"));
console.log(faker.fake("{{name.jobArea}}"));