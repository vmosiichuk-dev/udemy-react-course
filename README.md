# [Full Course on JavaScript + React](https://www.udemy.com/course/javascript_full/)
### :star::star::star::star::star: (16,915 Ratings)

```javascript
courseDetails {
    author: Ivan Petrichenko,
    rating: 4.8,    
    ratingCount: 16 915,
    students: 45 560,
    tests: 2,
    tasks: 55,
    lectures: 224,
    videoHoursTotal: 67
    lastUpdate: 10.2023
}
```
This course, authored by Ivan Petrichenko, offers an in-depth exploration of JavaScript and React, coupled with practical applications. Throughout the course, each theoretical concept is followed by a hands-on test or practice task, fostering interactive web development skills. The curriculum is divided into two main sections:

### [JavaScript](https://www.github.com/vladnomad/udemy-js-course/)

Progress: ![100%](https://geps.dev/progress/100)

### [React 18 + Redux](https://www.github.com/vladnomad/udemy-react-course/)

Progress: ![99%](https://geps.dev/progress/99)

## What the Course Covers

```javascript
// Learn the BASICS
async function exploreCourse() {
    try {
        const [programmingBasics, algorithmsBasics, oopBasics] = await Promise.all([
            fetch('/programming'),
            fetch('/algorithms'),
            fetch('/oop')
        ]);
        
        const programming = await programmingBasics.json();
        const algorithms = await algorithmsBasics.json();
        const oop = await oopBasics.json();

        return [programming, algorithms, oop];
    } catch (error) {
        throw new Error(`Error: First grasp programming, algorithms and OOP basics to continue`);
    }
}

// Dive into JavaScript concepts and various technologies.
const jsConcepts = complex ? "Learn Hard" : "Learn Even Harder";

const technologies = ["AJAX", "JSON", "Git", "GitHub", "npm", "Babel", "Webpack", "Heroku", "Firebase"];
const learnTech = technologies.join(', ');

// Explore frameworks and libraries.
const frameworksAndLibraries = ["React", "Redux", "jQuery"];

// Utilize architectural approaches in web application development.
do {
    useArchitecturalApproach();
} while (buildingWebApplications);
