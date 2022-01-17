const Employee = require('../lib/Employee');

test('Creates an Employee Object', () => {
  const employee = new Employee('Ian', 3, 'ianadamprice@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
}); 

test('gets employee Id', () => {
  const employee = new Employee('Ian', 3, 'ianadamprice@gmail.com');

  expect(employee.getId).toEqual(expect.any(Number));
});

test('gets employee email', () => {
  const employee = new Employee('Ian', 3, 'ianadamprice@gmail.com');

  expect(employee.getEmail).toEqual(expect.any(String));
});

test('gets employee role', () => {
  const employee = new Employee('Ian', 3, 'ianadamprice@gmail.com');

  expect(employee.getRole).toEqual("Employee")
});