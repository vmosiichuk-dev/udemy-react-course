# [Full course on JavaScript + React](https://www.udemy.com/course/javascript_full/)
### :star::star::star::star::star: (15 437 ratings)

    courseData {
        author: Ivan Petrichenko,
        rating: 4.8,    
        ratingCount: 15 437,
        students: 43046,
        tests: 2,
        tasks: 55,
        lectures: 224,
        videoHoursTotal: 67
        lastUpdate: 03.2023
    }

This course is aimed at learning React in detail and to immediately put it into practice. Each theoretical block ends with a test or a practice task, where you will create interactive web elements, an application, etc. Two main parts of the course are:


React 18 + Redux

Progress: ![](https://geps.dev/progress/0)


[JavaScript course section repo](https://www.github.com/vladnomad/udemy-js-course/) 

## What this course covers?

    async function firstGrasp() {
        const [programmingBasics, algorithmsBasics, oopBasics] = 
        await Promise.all([
            fetch('/programming'),
            fetch('/algorithms'),
            fetch('/oop')
        ]);

        const programming = await programmingBasics.json();
        const algorithms = await algorithmsBasics.json();
        const oop = await oopBasics.json();

        return [programming, algorithms, oop];
    }
    firstGrasp().then(([programming, algorithms, oop]) => {
        programming;
        algorithms;
        oop;
    }).catch(error => {
        throw new Error(`${error.name}: First grasp 
        programming, algorithms and Object Oriented 
        Programming basics to continue`);
    });

    //------------------------------------------------------
    
    jsConcepts < complex ? learnHard() : learnEvenHarder();

    //------------------------------------------------------

    let j = 1,
        learnTech = "Learn How To: ",
        technologies = ["AJAX", "JSON", "Git", "GitHub", 
                        "npm", "Babel", "Browserify", 
                        "Webpack", "Heroku", "Firebase"];

    function howTo(tech) {
        if (j == technologies.length) {
            learnTech += `${tech}`;
            return learnTech;
        } else {
            learnTech += `${tech}, `;
            j++;
        }
    };

    for (let i = 0; i < technologies.length; i++) {
        howTo(technologies[i]);
    }

    //------------------------------------------------------

    let frameworksAndlibraries = [];
    frameworksAndlibraries.push("React", "Redux", "jQuery");

    //------------------------------------------------------

    class ReactApp {
        constructor(count) {
            this.count = count;
        }
    }

    let react = new ReactApp(4);

    //------------------------------------------------------

    do useArchitecturalApproach(); 
    while (buildingWebApplications);
