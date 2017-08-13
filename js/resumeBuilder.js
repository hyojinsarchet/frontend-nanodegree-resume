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
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedskills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBiopic);

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
$("#header").append(formattedwelcomeMsg);

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
for(var job in work.jobs){
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


var education = {
  "schools" : [{
  "name" : "Hanguk University of Foreign Studies",
  "degree" : "Bachelor of Arts",
  "dates" : "1999 - 2004",
  "location" : "Seoul, South Korea",
  "major" : "Linguistics"
}],
  "onlineClasses" : [{
    "onlineTitle" : "Front-End Web Developer Nanodegree Program",
    "onlineSchool" : "Udacity",
    "onlineDates" : "July, 2017 - Aug, 2017",
    "onlineURL" : "https://www.udacity.com/"
  }]
};

education.display = function() {
  for(var school in education.schools){
    $("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

  $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
  $(".education-entry:last").append(formattedSchoolDates);
  $(".education-entry:last").append(formattedSchoolLocation);
  $(".education-entry:last").append(formattedSchoolMajor);
  }

  $("#education").append(HTMLonlineClasses);
  for(var online in education.onlineClasses){
    $("#education").append(HTMLschoolStart);

  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[online].onlineTitle);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[online].onlineSchool);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[online].onlineDates);
  var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[online].onlineURL);

  $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
  $(".education-entry:last").append(formattedOnlineDates);
  $(".education-entry:last").append(formattedOnlineURL);
  }
};

education.display();

var projects = {
  "projects" : [
    {
    "title" : "Frontend Nanodegree Resume",
    "dates" : "July, 2017 - Aug, 2017",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit~~~",
    "images" : ["images/small1.jpg"]
    },
    {
    "title" : "Build a Portfolio Site",
    "dates" : "July, 2017",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit~~~",
    "images" : ["images/small2.jpg"]
    }
  ]
};

projects.display = function() {
  for(var project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for (var images in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[images]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
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


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedLocation);
