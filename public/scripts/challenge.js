
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
			employeeCall();
			$(this).hide();
	});
//project generators using a random number from the two arrays
	companyName1 = ['Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Hairy','Fuzzy','Silly','Crazy','Sleepy','Angry','Melancholy','Hungry','Thirsty','Ugly','Turqoise','Lime Green','Magenta'];
	companyName2 = ['Kangaroo', 'Polar Bear', 'Killer Whale', 'Zebra', 'Lemming', 'Penguin','Frog','Elephant','Angelfish','Anteater','Fox','Panda','Kiwi','Komodo Dragon','Lemur','Toucan','Wallaby','Wolverine'];
	var Project = function(){
		this.projectName = companyName1[randomNumber(0,(companyName1.length-1))]+" "+companyName2[randomNumber(0,(companyName2.length-1))];
		this.frontEnd = {name: 'Front-End', frontendPoints: randomNumber(10,60), frontEndEmployees: []};
		this.clientSide = {name: 'Client-End', clientSidePoints: randomNumber(10,60), clientSideEmployees: []};
		this.serverSide = {name: 'Server-Side', serverSidePoints: randomNumber(10,60), serverSideEmployees: []};
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
		$newFrontli.text('Front-End Points: '+object.frontEnd.frontendPoints).attr({id: 'Front-End'});
		$newClientli.text('Client-Side Points: '+object.clientSide.clientSidePoints).attr({id: 'Client-Side'});
		$newServerli.text('Server-Side Points: '+object.serverSide.serverSidePoints).attr({id: 'Server-Side'});

		$newul.append($newFrontli).append($newClientli).append($newServerli);
		$newProjectDiv.append($newH1);
		$newProjectDiv.append($newul).append($newEmployeeButton);
		$content.append($newProjectDiv);
	};
	function displayEmployees(object){
		var $newul = $('<ul>');
		var $newEmpName = $('<li>');
		var $newEmpskillset = $('<li>');
		var $newEmpScrum = $('<li>');
		$newEmpName.text('Name: ' + object.name + ' ');
		$newEmpskillset.text(' Skillset: ' + object.skillset);
		$newEmpScrum.text(' Scrum Points: ' + object.scrumpts);
		$newul.attr({class: 'EmployeeList'}).append($newEmpName).append($newEmpskillset).append($newEmpScrum);
		return $newul;
	}
	function employeeCall(){
		$.ajax({
			type: 'GET',
			url: '/NewEmployee'
		}).always(function(){
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
				if(project.frontEnd.frontEndEmployees.length < 1 || project.clientSide.clientSideEmployees.length < 1 || project.serverSide.serverSideEmployees.length < 1){
					employeeCall();
				}
				if(project.frontEnd.frontEndEmployees.length >= 1 && project.clientSide.clientSideEmployees.length >= 1 && project.serverSide.serverSideEmployees.length >= 1){
					project.frontEnd.frontEndEmployees.forEach(function(object){
						$('#Front-End').append(displayEmployees(object));
					});
					project.serverSide.serverSideEmployees.forEach(function(object){
						$('#Server-Side').append(displayEmployees(object));
					});
					project.clientSide.clientSideEmployees.forEach(function(object){
						$('#Client-Side').append(displayEmployees(object));
					});
					totalPoints();
					sprintTime();
					displaySprint();
					console.log(project);
				}
		}).fail(function(){
			console.log('Ajax request failed');
			});
	};

//random number generator
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	};
	function totalPoints(){
		function sumTotals(array){
			var totalPoints = 0;
			array.forEach(function(object){
				totalPoints = totalPoints + object.scrumpts;
			})
			return totalPoints
		};
		project.frontEnd.frontEndEmployees.totalPts = sumTotals(project.frontEnd.frontEndEmployees);
		project.clientSide.clientSideEmployees.totalPts = 	sumTotals(project.clientSide.clientSideEmployees);
		project.serverSide.serverSideEmployees.totalPts = sumTotals(project.serverSide.serverSideEmployees);
	};
	function sprintTime(){
		project.sprintTime = [];
		project.sprintTime.push(project.frontEnd.frontendPoints / project.frontEnd.frontEndEmployees.totalPts);
		project.sprintTime.push(project.clientSide.clientSidePoints / project.clientSide.clientSideEmployees.totalPts);
		project.sprintTime.push(project.serverSide.serverSidePoints / project.serverSide.serverSideEmployees.totalPts);
		console.log(project.sprintTime);
		project.sprintTime = Math.ceil(Math.max.apply(null, project.sprintTime));
	}
	function displaySprint(){
		$sprintDiv = $('<div>');
		$sprintH1 = $('<h1>');
		$content.append($sprintDiv.append($sprintH1.text('Estimated project time: ' + (project.sprintTime * 2) + ' weeks.')));
	}
});
