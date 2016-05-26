var displayWork = function(){

/* profile info object */
var bio = {
	"name" : "Garrick McCaskill",
	"role" : "Front End Developer",
	"contacts" : {
		"email" : "example@gmail.com",
		"mobile" : "022 example 118",
		"gitHubName" : "kiwi-lifter",
		"locationPoint" : "Auckland, New Zealand"
	},
	"pictureURL" : "/images/generic.jpg",
	"message" : "Hi, thanks for taking the time to checkout my profile!",
	"skills" : ['HTML', 'javascript', 'CSS', 'Git', 'Grunt']
}

/* update HTML code with profile info */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var mobileNum = HTMLmobile.replace("%data%", bio.contacts.mobile);
var emailContact = HTMLemail.replace("%data%", bio.contacts.email);
var gitHub = HTMLgithub.replace("%data%", bio.contacts.gitHubName);
var locationPoint = HTMLlocation.replace("%data%", bio.contacts.locationPoint);
var profilePic = HTMLbioPic.replace("%data%", bio.pictureURL);
var message = HTMLwelcomeMsg.replace("%data%", bio.message);
var mySkills = HTMLskills.replace("%data%", bio.skills);

/* display profile info */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(profilePic);
$("#header").append(message);

$("#topContacts").append(mobileNum);
$("#topContacts").append(emailContact);
$("#topContacts").append(gitHub);
$("#topContacts").append(locationPoint);

// if there are any skills 
if ( bio.skills.length > 0 ){
	// append skills starter html
	$("#header").append(HTMLskillsStart);
	// get number of skills in skills array
	var skillsLength = bio.skills.length;
	// loop through skills array, update and display skills ul
	for (i = 0; i < skillsLength; i++) {
		var mySkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(mySkills);
	} // end for
} // end if

// create work object for employment details
var work = {
	"jobs" : [  { "employer" : "example 1 employer",
						"title" : "example title",
						"dates" : "example 2013 - 2016",
						"location" : "example city, country",
						"description" : "example description, example description,example description,example description,example description,example description."		
						},
				 { "employer" : "example 2 employer",
						"title" : "example title",
						"dates" : "example 2010 - 2012",
						"location" : "example city, country",
						"description" : "example description, example description,example description,example description,example description,example description."		
						},
				 { "employer" : "example 3 employer",
						"title" : "example title",
						"dates" : "example 2005 - 2009",
						"location" : "example city, country",
						"description" : "example description, example description,example description,example description,example description,example description."		
						}				
	]// end jobs array
} // end work object

// loop through jobs array in work object, retrieve job objects info and display in html
work.jobs.forEach(function(job) {	
	
		// update HTML code with employment info and display
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		
		// concat these two variables otherwise the html <a> tag breaks for some reason
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$("#workExperience").append(HTMLworkStart);// create new div for job
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	
});// end for job in

// create projects object for projects details
var projects = {
	"projects" : [ { "title" : "example 1 project",
						"dates" : "2016",
						"description" : "Udacity Front End Web Developer nano degree - portfolio.",
						"images" : [ "/images/project1a.jpg", "/images/project1b.jpg"]
					},
					{ "title" : "example 2 project",
						"dates" : "2015",
						"description" : "Udacity Front End Web Developer nano degree - resume.",
						"images" : [ "/images/project1a.jpg", "/images/project1b.jpg"]
					}
	]
} // end projects object

// loop through projects for project info
projects.projects.forEach(function(project){

		//update HTML code with projects info and display
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		
		// get number of images in array
		var imagesLength = project.images.length;
		// loop through images array update and display images ul
		for (i = 0; i < imagesLength; i++) {
			// update HTML code with projects info and display
			var projectImages = HTMLprojectImage.replace("%data%", project.images);
			$(".project-entry:last").append(projectImages);
		}// end for	
});// end forEach

// create education info object
var education = {
	"institutes": [
		{
			"name": "Unitec Institute of Technology",
			"location": "Auckland, New Zealand",
			"degree": "1st Year Bachelor of Landscape Architecture",
			"majors": "Landscape Architecture",
			"dates": "2015",
			"url" : "http://www.unitec.ac.nz/career-and-study-options/landscape-architecture"
		}, 
		{
			"name": "Auckland University",
			"location": "Auckland, New Zealand",
			"degree": "Bachelor of Arts",
			"majors": "Political Studies",
			"dates": "1992 - 1996",
			"url" : "http://www.arts.auckland.ac.nz/en/about/subjects-and-courses/politics-and-international-relations.html"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Developer Nano Degree",
			"school": "Udacity.com",
			"dates": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "example 1",
			"school": "example 1",
			"dates": "2015",
			"url": "https://www.example.com"
		}
	]
}

// loop through institutes array in education object, retrieve institute objects info and display in html
education.institutes.forEach(function(institute) {
		
		// display education history 
		var formattedInstitute = HTMLschoolName.replace("%data%", institute.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", institute.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", institute.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", institute.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", institute.majors);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedInstitute + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	
}); // end forEach

// check if there are any online courses in the object...
if(education.hasOwnProperty('onlineCourses')){
	// ...if there is add the online courses html header
	$("#education").append(HTMLonlineClasses);
	// loop through onlineCourses array in education object, retrieve school objects info, update and display html
	education.onlineCourses.forEach(function(course){
		
			// display online courses history 
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			var formattedURL = HTMLonlineURL.replace("%data%", course.url);
			
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);

	});// end forEach
}// end if hasOwnProperty

 
// add button to internationalise name
$("#main").prepend(internationalizeButton);

//function that internationalises name
inName("Garrick McCaskill") === "Garrick MCCASKILL";


}// displayWork function

// display resume HTML
displayWork();



