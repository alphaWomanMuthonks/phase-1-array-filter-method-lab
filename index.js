// Code your solution here
const drivers=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { 
    return driver.toLowerCase() === attribute.toLowerCase() })  //using callback function to filter
  }
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { 
    return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  function matchName(drivers,argument) {
    return drivers.filter(function(drivers){
    return drivers.name === argument })
  }