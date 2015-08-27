var skillGen = require('./skill_set');
var scrumPoints = require('./scrum_points');
var randomName = {};

randomName.firstNames = ['David', 'Katie', 'Andrew', 'Erin', 'Christopher', 'Liz', 'Steven', 'Patty', 'Robert', 'Amy',
             'Craig','Michael', 'Mark', 'Stuart', 'Stephen', 'Alan', 'William', 'Gary', 'Ross', 'Colin',
             'Brian', 'Anna', 'Richard', 'Jenny', 'Thomas', 'Ashley', 'Peter', 'Alex', 'Graeme', 'Madison', 'Gordon',
             'Maggie', 'Ryan', 'Julie', 'Kenneth', 'Jean', 'Jamie', 'Kamie', 'Gavin', 'Kelly',
             'Stewart', 'Jane', 'Daniel', 'Ashley', 'Grant', 'Laurie', 'George', 'Stacey', 'Simon', 'Jake'];
randomName.lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez',
            'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee',
            'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'Sanchez', 'Wright', 'King',
            'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans'];
randomName.randomInt = function(max, min){
  min = min || 0;
  return Math.floor(Math.random() * (max - min) + min);
};
randomName.Employee = function() {
  this.name = (randomName.firstNames[randomName.randomInt(randomName.firstNames.length)] + " " + randomName.lastNames[randomName.randomInt(randomName.lastNames.length)]);
  this.skillset = skillGen.skillSet();
  this.scrumpts = scrumPoints.scrumPoints();
};
module.exports = randomName;
