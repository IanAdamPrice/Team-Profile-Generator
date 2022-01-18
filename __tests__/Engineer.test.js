const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
  const engineer = new Engineer('Ian', 7, 'ianadamprice@gmail.com', 'ianadamprice');

  expect(engineer.gitHub).toEqual(expect.any(String));
});

test('gets engineer GitHub value', () => {
  const engineer = new Engineer('Ian', 7, 'ianadamprice@gmail.com', 'ianadamprice');

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

test('gets role of new engineer', () => {
  const engineer = new Engineer('Ian', 7, 'ianadamprice@gmail.com', 'ianadamprice');

  expect(engineer.getRole()).toEqual('Engineer');
});