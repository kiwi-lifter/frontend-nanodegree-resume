/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ['HTML', 'javascript', 'CSS', 'Git', 'Grunt'];

var bio = {
	"name" : "Garrick McCaskill",
	"role" : "Front End Developer",
	"contact" : "example@gmail.com",
	"mobile" : "022 example 118",
	"gitHubURL" : "kiwi-lifter",
	"pictureURL" : "/images/generic.jpg",
	"message" : "Hi, thanks for taking the time to checkout my profile!",
	"skills" : skills,
	"locationPoint" : "Auckland, New Zealand"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var mobileNum = HTMLmobile.replace("%data%", bio.mobile);
var emailContact = HTMLemail.replace("%data%", bio.contact);
var gitHub = HTMLgithub.replace("%data%", bio.gitHubURL);
var locationPoint = HTMLlocation.replace("%data%", bio.locationPoint);
var profilePic = HTMLbioPic.replace("%data%", bio.pictureURL);
var message = HTMLwelcomeMsg.replace("%data%", bio.message);
var mySkills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(mobileNum);
$("#topContacts").append(emailContact);
$("#topContacts").append(gitHub);
$("#topContacts").append(locationPoint);
$("#header").append(profilePic);
$("#header").append(message);
$("#header").append(HTMLskillsStart);
$("#skills").append(mySkills);
