var skillGen = require('./skill_set');
var scrumPoints = require('./scrum_points');
var randomName = {};

randomName.firstNames = ['David', 'John', 'Andrew', 'James', 'Christopher', 'Paul', 'Steven', 'Kevin', 'Robert', 'Scott',
              'Craig','Michael', 'Mark', 'Stuart', 'Stephen', 'Alan', 'William', 'Gary', 'Ross', 'Colin',
              'Brian', 'Barry', 'Richard', 'Martin', 'Thomas', 'Neil', 'Peter', 'Iain', 'Graeme', 'Ian', 'Gordon',
              'Alexander', 'Ryan', 'Derek', 'Kenneth', 'Allan', 'Jamie', 'Graham', 'Gavin', 'Darren',
              'Stewart', 'Jonathan', 'Daniel', 'Douglas', 'Grant', 'Lee', 'George', 'Joseph', 'Simon', 'Jake'];
randomName.lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez',
            'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee',
            'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'Sanchez', 'Wright', 'King',
            'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans'];
randomName.randomInt = function(max, min){
  min = min || 0;
  return Math.floor(Math.random() * (max - min) + min);
};
randomName.Employee = function() {
  console.log('run');
  this.name = (randomName.firstNames[randomName.randomInt(randomName.firstNames.length)] + " " + randomName.lastNames[randomName.randomInt(randomName.lastNames.length)]);
  console.log(this.name);
  this.skillset = skillGen.skillSet();
  this.scrumpts = scrumPoints.scrumPoints();
};
module.exports = randomName;
