const Manager = require('../lib/Manager');

test('creates manager object', () => {
  const manager = new Manager('Ian', 8, 'ianadamprice@gmail.com', 334);

  expect(manager.officeNum).toEqual(expect.any(Number));
});

test('gets managers role', () => {
  const manager = new Manager('Ian', 8, 'ianadamprice@gmail.com', 334);

  expect(manager.getRole()).toEqual('Manager');
});
  