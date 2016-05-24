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
	"skills" : ['HTML', 'javascript', 'CSS', 'Git', 'Grunt'],
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

/* work object using dot .notation */
var work = {}; // declare variable

work.position[0] = "example position";
work.employer[0] = "example employer";
work.title[0] = "example title";
work.dates[0] = "example 2012 - 2015";
work.location[0] = "example city, country";
work.description[0] = "example description example description example description example description example description";

work.position[1] = "example position";
work.employer[1] = "example employer";
work.title[1] = "example title";
work.dates[1] = "example 2012 - 2015";
work.location[1] = "example city, country";
work.description[1] = "example description example description example description example description example description";

work.position[2] = "example position";
work.employer[2] = "example employer";
work.title[2] = "example title";
work.dates[2] = "example 2012 - 2015";
work.location[2] = "example city, country";
work.description[2] = "example description example description example description example description example description";


/* update HTML code with employment info */
var formattedEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedTitle = HTMLworkTitle.replace("%data%", work['title']);
var formattedYears = HTMLworkDates.replace("%data%", work['years']);
var formattedLocation = HTMLworkLocation.replace("%data%", work['city']);

/* display some work history */
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedEmployer + formattedTitle);/* if these variables are appended seperately the <a> link breaks for some reason. */
$("#workExperience").append(formattedYears);
$("#workExperience").append(formattedLocation);

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






