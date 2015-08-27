
$(document).ready(function(){
	var $content = $('#content');
	var project = {};
	$('#generate').on('click', function(e){
		e.preventDefault();
		project = new Project();
		console.log(project);
		displayProject(project);
		});
	//when the produced button is clicked this will query the server which will return an employee - this will push the data to the correct array after reception.
	$content.on('click', '#assignEmp', function() {
		$.ajax({
			type: 'GET',
			url: '/NewEmployee'
		}).always(function(){
			console.log('Ajax request complete');
		}).done(function(data){
			switch (data.skillset){
				case 'Front-End':
					project.frontEnd.frontEndEmployees.push(data);
					break;
				case 'Client-Side':
					project.clientSide.clientSideEmployees.push(data);
					break;
				case 'Server-Side':
					project.serverSide.serverSideEmployees.push(data);
					break;
			}
			console.log(data.skillset);
			console.log(project);
		}).fail(function(){
			console.log('Ajax request failed');
		});
	});
//project generators using a random number from the two arrays
	companyName1 = ['Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Hairy','Fuzzy','Silly','Crazy','Sleepy','Angry','Melancholy','Hungry','Thirsty','Ugly','Turqoise','Lime Green','Magenta'];
	companyName2 = ['Kangaroo', 'Polar Bear', 'Killer Whale', 'Zebra', 'Lemming', 'Penguin','Frog','Elephant','Angelfish','Anteater','Fox','Panda','Kiwi','Komodo Dragon','Lemur','Toucan','Wallaby','Wolverine'];
	var Project = function(){
		this.projectName = companyName1[randomNumber(0,(companyName1.length-1))]+" "+companyName2[randomNumber(0,(companyName2.length-1))];
		this.frontEnd = {frontendPoints: randomNumber(10,60), frontEndEmployees: []};
		this.clientSide = {clientSidePoints: randomNumber(10,60), clientSideEmployees: []};
		this.serverSide = {serverSidePoints: randomNumber(10,60), serverSideEmployees: []};
	};
//this displays the project object on to the DOM
	function displayProject(object){
		$content.empty();
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
		$content.append($newProjectDiv);
	};



//random number generator
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	};
});

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
