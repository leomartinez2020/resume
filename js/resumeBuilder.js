var bio = {
	"name": "Leonardo Martinez",
	"role": "Desarrollador Python",
	"contacts": {
		"mobile": "3107489655",
		"email": "lowenhard@yahoo.com",
		"github": "leonardo384",
		"twitter": "@leomartinez2015",
		"location": "Barranquilla, Colombia"
	},
	"welcomeMessage": "Desarrollador Python",
	"skills": [
		"Python", "Django", "HTML", "CSS", "JavaScript", "Mongodb", "Educación", "Linux"
	],
	"biopic": "images/perfil2.jpg",
	displayBio: function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		var lista = [
			formattedEmail, formattedTwitter, formattedMobile, formattedGithub, formattedLocation
		];
		//corregir aqui el uso de in
		for (i in lista) {
			$('#topContacts').append(lista[i]);
			$('#footerContacts').append(lista[i]);
		}
		$('#header').append(formattedPic);
		$('#header').append(formattedWelcomeMsg);
		//$('#header').append(HTMLskillsStart);
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		}
	}
}

var education = {
	"schools": [
	    {
		  	"name": "Kharkov National University",
		  	"location": "Jarkov, Ucrania",
		  	"degree": "Titulación Universitaria",
		  	"majors": ["Bioquímica"],
		  	"dates": 1993,
		  	"url": "http://www.univer.kharkov.ua/en"
	    }
	],
	"onlineCourses": [
	    {
		  	"title": "Introduction to Computer Science and Programming using Python",
		  	"school": "edX",
		  	"dates": 2014,
		  	"url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0"
	    },
	    {
		  	"title": "Intro to Computer Science",
		  	"school": "Udacity",
		  	"dates": 2014,
		  	"url": "https://www.udacity.com/course/cs101"
	    },
	    {
		  	"title": "Mongodb for Developers",
		  	"school": "Mongodb University",
		  	"dates": 2014,
		  	"url": "https://university.mongodb.com/courses/M101P/about"
	    },
	    {
		  	"title": "Intro to HTML and CSS",
		  	"school": "Udacity",
		  	"dates": 2015,
		  	"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	    },
	    {
		  	"title": "JavaScript Basics",
		  	"school": "Udacity",
		  	"dates": 2015,
		  	"url": "https://www.udacity.com/course/javascript-basics--ud804"
	    },
	    {
		  	"title": "Introduction to Computational Thinking and data Science",
		  	"school": "edX",
		  	"dates": 2015,
		  	"url": "https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-2"
	    },
	    {
		  	"title": "Mongodb for Nodejs Developers",
		  	"school": "Mongodb University",
		  	"dates": 2015,
		  	"url": "https://university.mongodb.com/courses/M101JS/about"
	    },
	    {
		  	"title": "Business Metrics for Data-Driven Companies",
		  	"school": "Coursera",
		  	"dates": 2017,
		  	"url": "https://es.coursera.org/learn/analytics-business-metrics"
	    },
	    {
		  	"title": "Getting Started with Essay Writing",
		  	"school": "Coursera",
		  	"dates": 2017,
		  	"url": "https://es.coursera.org/learn/getting-started-with-essay-writing"
	    },
	],
	displaySchool: function() {
    	for (i in this.schools) {
    		$('#education').append(HTMLschoolStart);
    		var formattedSchoolName = HTMLschoolName.replace('%data%', this.schools[i].name);
			formattedSchoolName = formattedSchoolName.replace('%link%', this.schools[i].url);
    		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', this.schools[i].degree);
    		var formattedSchoolDates = HTMLschoolDates.replace('%data%', this.schools[i].dates);
    		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
    		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation);
    		if (this.schools[i].majors.length > 0) {
    			for (major in this.schools[i].majors) {
    				var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', this.schools[i].majors[major]);
    				$('.education-entry:last').append(formattedSchoolMajor + '<br><hr><br>');
    			}
    		}
    	}
    	$('#education').append(HTMLonlineClasses);
    	$('#education').append(HTMLschoolStart);
    	for (i in this.onlineCourses) {
    		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
			formattedOnlineTitle = formattedOnlineTitle.replace('%link%', this.onlineCourses[i].url);
    		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
    		var formattedOnlineDates = HTMLonlineDates.replace('%data%', this.onlineCourses[i].dates);
    		var formattedOnlineURL = HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
			formattedOnlineURL = formattedOnlineURL.replace('%link%', this.onlineCourses[i].url);
    		$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL + '<hr><br>');
    	}
    }
}

var work = {
	"jobs": [
		{
		  	"employer": "Centro Colombo-Americano",
		  	"title": "Profesor de Inglés",
		  	"dates": "Febrero 2003-2017",
		  	"description": "Enseñé inglés enfatizando la pronunciación y la producción oral y escrita",
		  	"location": "Barranquilla, Colombia"
	    },
	    {
		  	"employer": "Instituto Experimental del Atlantico",
		  	"title": "Docente de Química",
		  	"dates": "Agosto 2010-Junio 2016",
		  	"description": "Enseñé química y pensamiento científico a estudiantes de bachillerato",
		  	"location": "Barranquilla, Colombia"
	    }
	],
	displayWork: function() {
		for (i in this.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
		var formattedDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', this.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		$('.work-entry:last').append(formattedEmployerTitle);
			}
		}
}

var projects = {
	"projects": [
	    {
		  	"title": "Word Scrambler",
		  	"link": "http://pacific-mesa-1286.herokuapp.com/",
		  	"dates": "2014",
		  	"description": "Una sencilla aplicaci\u00f3n Python en Heroku donde us\u00e9 Bottle y Bootstrap",
		  	"images": [
		  	  "images/scrambler.png"
			]
	    },
	    {
		  	"title": "Educadatos",
		  	"link": "http://educadatos.com",
		  	"dates": "2017",
		  	"description": "Aplicaci\u00f3n Django que muestra visualmente los resultados de las pruebas Saber",
		  	"images": [
		  	  "images/educadatos17.png"
		  	]
	    },
	    {
		  	"title": "Blog Piensapython",
		  	"link": "https://piensapython.com",
		  	"dates": "2016",
		  	"description": "Blog construido con Jekyll acerca de temas de Python y Linux",
		  	"images": [
		  	  "images/piensapython.png"
		  	]
	    },
	],
	displayProjects: function() {
		for (i in this.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
			formattedProjectTitle = formattedProjectTitle.replace('%link%', this.projects[i].link);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
			$('.project-entry:last').append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
			if (this.projects[i].images.length > 0) {
				for (image in this.projects[i].images) {
					var formattedProjectImage = HTMLprojectImage.replace('%data%', this.projects[i].images[image]);
					$('.project-entry:last').append(formattedProjectImage);
				}
			}
		}
	}
}

bio.displayBio();
work.displayWork();
education.displaySchool();
projects.displayProjects();
$('#skillsChart').append(HTMLskillsChartStart);

function inName() {
	var name = $('#name').text();
	name = name.trim().split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
