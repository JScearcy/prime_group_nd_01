var skillGen = {};

function skillRandomInt(max, min){
  min = min || 0;
  return Math.floor(Math.random() * (max - min) + min);
};

skillGen.titles = ['Front-End', 'Client-Side', 'Server-Side'];
skillGen.skillSet = function(){
  var emp = skillGen.titles[skillRandomInt(skillGen.titles.length)];
  return emp;
};
module.exports = skillGen;
