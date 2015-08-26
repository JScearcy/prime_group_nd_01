var exporter = module.exports = {};

function scrumrandomInt(max, min){
  min = min || 0;
  return Math.floor(Math.random() * (max - min) + min);
};

exporter.scrumPoints = function() {
  console.log('scrumPoints run');
  var scrumPoints = scrumrandomInt(9, 1);
  return scrumPoints
}
