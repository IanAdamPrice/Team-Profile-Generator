const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
  const engineer = new Engineer('Ian', 7, 'ianadamprice@gmail.com', 'ianadamprice');

  expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer GitHub value', () => {
  const engineer = new Engineer('Ian', 7, 'ianadamprice@gmail.com', 'ianadamprice');

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of new engineer', () => {
  const engineer = new Engineer('Ian', 7, 'ianadamprice@gmail.com', 'ianadamprice');

  expect(engineer.getRole()).toEqual('Engineer');
});