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

// create work object to hold employment details
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
						"dates" : "example 205 - 2009",
						"location" : "example city, country",
						"description" : "example description, example description,example description,example description,example description,example description."		
						}				
	]
}

// loop through jobs array in work object, retrieve job objects info and display in html
for (job in work.jobs){	
	// 
	if(work.jobs.hasOwnProperty(job)){
		// update HTML code with employment info and display
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		// concat these two variables otherwise the html <a> tag breaks for some reason
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$("#workExperience").append(HTMLworkStart);// create new div for job
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedWorkDescription);
		$(".work-entry:last").append(formattedLocation);
	}// end if hasOwnProperty
}// end for job in

// education object using bracket notation 
var education = {}; // declare variable
education["institute"] = "University of Technology";
education["degree"] = "Bachelor Landscape Architecture";
education["year"] = "2015";
education["city"] = "Auckland, New Zealand";
education["major"] = "Urban Design";

/*
var education = {
	"institutes": [
	{
		"name": "Unitec Institute of Technology",
		"degree": "Bachelor of Landscape Architecture",
		"year": "2015",
		"city": "Auckland",
		"major": "Landscape Architecture"
	}, 
	{
		"name": "Auckland University",
		"degree": "Bachelor of Arts",
		"year": "1992 - 1996",
		"city": "Auckland",
		"major": "Political Studies"
	}
	]
}
*/

/* display education history */
var formattedInstitute = HTMLschoolName.replace("%data%", education.institute);
var formattedDegree = HTMLschoolDegree.replace("%data", education.degree);
var formattedDates = HTMLschoolDates.replace("%data%", education.year);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.city);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedInstitute + formattedDegree);
$("#education").append(formattedDates);
$("#education").append(formattedLocation);
$("#education").append(formattedMajor);






