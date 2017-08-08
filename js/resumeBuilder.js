var bio = {
  "name" : "Hyojin Sarchet",
  "role" : "Web Developer",
  "contacts" : {
      "mobile" : "123-456-7890",
      "email" : "hyojin.sarchet@gmail.com",
      "github" : "https://github.com/hyojinsarchet",
      "blog" : "http://blog.naver.com/zghyojin",
      "location" : "Washington DC"
  },
  "biopic" : "images/fry.jpg",
  "welcomeMsg" : "Welcome to Hyojin's Homepage!",
  "skills" : [
    "Html", " CSS", " JavaScript", " Blogging", " Awesome cook"
  ]
}

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkills);
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedskills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedBiopic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// // $("#topContacts").append(formattedContacts);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedwelcomeMsg);
$("#header").append(formattedskills);


var work = {
  "jobs" : [
    {
      "employer" : "Korean Cultural Center",
      "title" : "Staff",
      "dates" : "Jan, 2015 - May, 2017",
      "location" : "Washington DC",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit~~~"
    },
    {
      "employer" : "Jesongsang Language School",
      "title" : "English Teacher",
      "dates" : "Aug, 2012 - Dec, 2013",
      "location" : "Seoul",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit~~~"
    }
  ]
};


function displayWork() {
for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);
  }
}
displayWork();

// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
// var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
// var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
// $("#workExperience").append(HTMLworkStart);
// $(".work-entry").append(formattedEmployer + formattedTitle);
// // $(".work-entry").append(formattedTitle);
// $(".work-entry").append(formattedDates);
// $(".work-entry").append(formattedLocation);
// $(".work-entry").append(formattedDescription);


var education = {};
education["schoolName"] = "Hanguk University of Foreign Studies";
education["schoolDegree"] = "Bachelor of Arts"
education["schoolDates"] = "1999 - 2004"
education["schoolLocation"] = "Seoul, South Korea"
education["schoolMajor"] = "Linguistics"

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schoolDegree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schoolDates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schoolLocation);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schoolMajor);


$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);
// $(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);


var projects = {
  "projects" : [
    {
    "title" : "Frontend Nanodegree Resume",
    "dates" : "July, 2017 - Aug, 2017",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit~~~",
    "images" : ["images/fry.jpg"]
    },
    {
    "title" : "Build a Portfolio Site",
    "dates" : "July, 2017",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit~~~",
    "images" : ["images/fry.jpg"]
    }
  ]
};

projects.display = function() {
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for (images in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

// var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectTitle);
// var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projectDates);
// var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectDescription);
// var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectImage);
//
// $("#projects").append(HTMLprojectStart);
// $(".project-entry").append(formattedProjectTitle);
// $(".project-entry").append(formattedProjectDates);
// $(".project-entry").append(formattedProjectDescription);
// $(".project-entry").append(formattedProjectImage);




$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});



function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);
