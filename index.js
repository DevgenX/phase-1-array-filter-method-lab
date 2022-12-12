// Code your solution here

const findMatching = (drivers, name) =>
  drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (drivers, str) =>
  drivers.filter(driver => driver.charAt(0) === str[0]);

const matchName = (drivers, str) =>
  drivers.filter(driver => driver.name === str);
