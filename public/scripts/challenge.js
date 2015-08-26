var $content = $('#content');
$(document).ready(function(){

$('#generate').on('click', function(e){
	e.preventDefault();
	var project = new Project();
	console.log(project);
	displayProject(project);
	});
});

companyName1 = ["Blue", "Green", "Yellow", "Orange", "Pink"];
companyName2 = ["Kangaroo", "Polar Bear", "Killer Whale", "Zebra", "Lemming"];
var Project = function(){
	this.projectName = companyName1[randomNumber(0,(companyName1.length-1))]+" "+companyName2[randomNumber(0,(companyName2.length-1))];
	this.frontEnd = {frontendPoints: randomNumber(10,60)};
	this.clientSide = {clientSidePoints: randomNumber(10,60)};
	this.serverSide = {serverSidePoints: randomNumber(10,60)};
}
function displayProject(object){
	$('#content').empty();
	var $newProjectDiv = $('<div>');
	var $newH1 = $('<h1>');
	var $newul = $('<ul>');
	var $newFrontli = $('<li>');
	var $newClientli = $('<li>');
	var $newServerli = $('<li>');
	var $newEmployeeButton = $('<button>').attr({id: "assignEmp"}).text('Assign Employees');
	$newH1.text(object.projectName);
	$newFrontli.text('Front-End Points: '+object.frontEnd.frontendPoints);
	$newClientli.text('Client-Side Points: '+object.clientSide.clientSidePoints);
	$newServerli.text('Server-Side Points: '+object.serverSide.serverSidePoints);

	$newul.append($newFrontli).append($newClientli).append($newServerli);
	$newProjectDiv.append($newH1);
	$newProjectDiv.append($newul).append($newEmployeeButton);
	$('#content').append($newProjectDiv);
}




function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// function getCompanyName(){
//   $.ajax ({
//   type: 'GET',
//   dataType: 'jsonp',
//   crossDomain: true,
//   url: "http://randomword.setgetgo.com/get.php",
//   }).always(function() {
//       console.log('Ajax attempt complete.');
//       }).done(function(data) {
//       console.log('before');
//       return data.Word;
//       console.log('after');
//       }).fail(function(jqXHR, textStatus, errorThrown) {
//       console.log('Ajax failed: ', textStatus);
//     });
// }
