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
  "welcomeMessage" : "Welcome to Hyojin's Homepage!",
  "skills" : [
    "Html", " CSS", " JavaScript", " Blogging", " Awesome cook"
  ]
};

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").prepend(formattedName, formattedRole);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedBlog, formattedLocation);
    $("#header").append(formattedBiopic);

    if(bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
        });
      }

    $("#header").append(formattedWelcomeMessage);
};
bio.display();



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


work.display = function(){
  $("#workExperience").append(HTMLworkStart);

  work.jobs.forEach(function(job) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);

    $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription, formattedLocation);
    // $(".work-entry:last").append(formattedDates);
    // $(".work-entry:last").append(formattedDescription);
    // $(".work-entry:last").append(formattedLocation);
  });
};
work.display();
  // for(var job in work.jobs){
  //   $("#workExperience").append(HTMLworkStart);
  //
  //     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  //     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  //     var formattedEmployerTitle = formattedEmployer + formattedTitle;
  //     $(".work-entry:last").append(formattedEmployerTitle);
  //
  //     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  //     $(".work-entry:last").append(formattedDates);
  //     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  //     $(".work-entry:last").append(formattedDescription);
  //
  //     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  //     $(".work-entry:last").append(formattedLocation);
  // }



var education = {
  "schools" : [{
  "name" : "Hanguk University of Foreign Studies",
  "degree" : "Bachelor of Arts",
  "dates" : "1999 - 2004",
  "location" : "Seoul, South Korea",
  "majors" : ["Linguistics", " English"]
}],
  "onlineCourses" : [{
    "title" : "Front-End Web Developer Nanodegree Program",
    "school" : "Udacity",
    "dates" : "July, 2017 - Aug, 2017",
    "url" : "https://www.udacity.com/"
  }]
};


education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

  $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
  // $(".education-entry:last").append(formattedSchoolDates);
  // $(".education-entry:last").append(formattedSchoolLocation);
  // $(".education-entry:last").append(formattedSchoolMajor);
  });

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(online) {
    $("#education").append(HTMLschoolStart);

  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
  var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);

  $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
  // $(".education-entry:last").append(formattedOnlineDates);
  // $(".education-entry:last").append(formattedOnlineURL);
  });
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
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
    // $(".project-entry:last").append(formattedDates);
    // $(".project-entry:last").append(formattedDescription);

    project.images.forEach(function(image){
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
    });
  });
};
projects.display();

$("#mapDiv").append(googleMap);

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//
//   logClicks(x, y);
// });
//
//
// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   name[1] = name[1].toUpperCase();
//
//   return name[0] + " " + name[1];
// }
//
// $("#main").append(internationalizeButton);
