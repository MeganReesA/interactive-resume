var bio = {
    "name": "Megan Rees Ahigian",
    "role": "Senior Product Manager",
    "contacts": {
        "mobile": "617-642-6029",
        "email": "rees.megan@gmail.com",
        "github": "MeganReesA",
        "twitter": "@meganahigian",
        "location": "Walpole, MA"
      },
    "bioPic": "images/fry.jpg",
    "welcomeMsg": "Welcome to my digital resume! I'm trying very hard to make it work.",
    "skills": [
        "Product Management", "User Stories", "Roadmap Definition"
    ]
}

bio.display = function(){
  
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#header").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#header").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#header").append(formattedGithub);
  
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#header").append(formattedTwitter);
  
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").append(formattedLocation);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);

  $("#header").append(HTMLskillsStart);

  for (var skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
};

bio.display();

var education = {
    "schools": [
        {"name": "Tufts University",
        "location": "Medford, MA",
        "degree": "BA",
        "majors": "Poli Sci",
        "dates": "2002-2006",
        "url": "http://tufts.edu"
        },
        {"name": "Boston College",
        "location": "Chestnut Hill, MA",
        "degree": "MBA",
        "majors": "Product and Brand Mgmt",
        "dates": "who knows",
        "url": "http://bc.edu",
        }
      ],
      "onlineCourses": [
        {"title": "Intro to Programming",
        "school": "Harvard Extension School",
        "dates": "2013",
        "url": "abc.com"
        }
      ]
};

education.display = function() {
  for (var school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  $(".education-entry:last").append(formattedSchoolName);
  
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchoolDegree);
  
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchoolDates);
  
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchoolLocation);
  
  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchoolMajor);
  }
  
  $("#education").append(HTMLonlineClasses);
  
  for (var course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedOnlineTitle);
  
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedOnlineSchool);
  
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedOnlineDates);
  
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
};

education.display();

var work = {
    "jobs": [
        {"employer": "Pearson",
        "title": "Senior Product Manager",
        "location": "Boylston Street, Boston, MA",
        "dates": "2015-Present",
        "description": "Worked very hard."
        },
        {"employer": "Xplana",
        "title": "Product Manager",
        "location": "Newbury Street Boston, MA",
        "dates": "2011-2012",
        "description": "Didn't like it there very much."
        }
    ]
};

work.display = function(){
  for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  
  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedWorkDates);
  
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedWorkLocation);
  
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkDescription);
  }
};

work.display();

var projects = {
  "projects" : [
      {"title": "Ethnographic Research on B-School Students",
      "dates": "2014-2015",
      "description": "Yielded some stellar results",
      "images": ["images/frog.jpg", "images/frog.jpg"]
      },
      {"title": "Business Publishing NextGen",
      "dates": "2015",
      "description": "This was a fun project",
      "images": ["images/frog.jpg", "images/frog.jpg"]
      }
    ]
  };
  
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
  
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
  
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  
    if (projects.projects[project].images.length > 0){
      for (var image in projects.projects) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();

$("#mapDiv").append(googleMap);
 