var scrumport = module.exports = {};

function scrumrandomInt(max, min){
  min = min || 0;
  return Math.floor(Math.random() * (max - min) + min);
};

scrumport.scrumPoints = function() {
  var scrumPoints = scrumrandomInt(9, 1);
  return scrumPoints
}
