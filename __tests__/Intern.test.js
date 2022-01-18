const Intern = require('../lib/Intern');

test('creates intern object', () => {
  const intern = new Intern('Ian', 6, 'ianadamprice@gmail.com', 'Jay M Robinson');

  expect(intern.school).toEqual(expect.any(String));
});

test('Gets interns school', () => {
  const intern = new Intern('Ian', 6, 'ianadamprice@gmail.com', 'Jay M Robinson');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Gets interns role', () => {
  const intern = new Intern('Ian', 6, 'ianadamprice@gmail.com', 'Jay M Robinson');

  expect(intern.getRole()).toEqual('Intern');
});