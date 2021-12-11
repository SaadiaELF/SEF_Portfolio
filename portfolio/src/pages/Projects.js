// This file holds projects information array
import treePeeps from '../images/treepeeps.jpg';
import codeCrowd from '../images/code-crowd.png';
import techBlog from '../images/tech-blog.gif';
import codeQuiz from '../images/code-quiz.gif';
import popcornpedia from '../images/Popcornpedia.JPG';
import weatherDashboard from '../images/Weather.JPG';
import scheduler from '../images/Scheduler.JPG';

export const projects =[
    {
        "id": 1,
        "title": "TreePeeps",
        "image": treePeeps,
        "description": "This app allows you to make connections between people with land and resources but who need people power, and those who have the time and enthusiasm, but a lack resources or land. By making these connections, and creating small tree planting projects, not only are steps being taken towards a more sustainable future, but networks of people are being created which could be the foundation for further grass-roots projects.",
        "github": "https://github.com/SaadiaELF/TreePeeps.git",
        "demo": "https://treepeeps.herokuapp.com/"
    },
    {
        "id": 2,
        "title": "Code Crowd",
        "image": codeCrowd,
        "description": "Code Crowd is a tech-based social media platform, where you get to connect with other skilled programmers and add them as friends. This app, however, comes  with its own distinguishing feature, which is, that once you create an account and sign in, it allows to post screenshots of codes and code snippets into the feed, so that other users can look at the code in your post and learn and perfect their own programming skills. You can search for friends based on the programming languages and then like and comment their posts.",
        "github": "https://github.com/SaadiaELF/Code_Crowd.git",
        "demo": "https://code-crowd.herokuapp.com/"
    },
    {
        "id": 3,
        "title": "Tech Blog",
        "image": techBlog,
        "description": "This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        "github": "https://github.com/SaadiaELF/Tech_Blog_SEF.git",
        "demo": "https://tech-blog-sef.herokuapp.com/"
    },
    {
        "id": 4,
        "title": "Code Quiz",
        "image": codeQuiz,
        "description": "Code quiz is a timed coding quiz application with multiple-choice questions. This application run in the browser, and feature dynamically updated HTML and CSS powered by JavaScript.",
        "github": "https://github.com/SaadiaELF/Code_Quiz_SEF.git",
        "demo": "https://saadiaelf.git./images/Popcornpedia.JPGhub.io/Code_Quiz_SEF/"
    },
    {
        "id": 5,
        "title": "Popcornpedia",
        "image": popcornpedia,
        "description": "This website allows the users to search a film, view information about this film including actors and crew information and also, receive recommendations based on their search. This application runs in the browser and features dynamically updated HTML and CSS powered by JavaScript. The project use also the Foundation and Bulma CSS Frameworks and make use of the different APIs.",
        "github": "https://github.com/SaadiaELF/Popcornpedia-Project.git",
        "demo": "https://saadiaelf.github.io/Popcornpedia-Project/"
    },
    {
        "id": 6,
        "title": "Weather Dashboard",
        "image": weatherDashboard,
        "description": "This weather dashboard allows to search weather parameters by city name, display current temperature, humidity, wind speed and UV index for the searched city. It displays also a 5-days forecast for the searched city and a dynamic recent search history. This application runs in the browser and features dynamically updated HTML and CSS.",
        "github": "https://github.com/SaadiaELF/Weather_Dashboard_SEF.git",
        "demo": "https://saadiaelf.github.io/Weather_Dashboard_SEF/"
    },
    {
        "id": 7,
        "title": "Work Day Scheduler",
        "image": scheduler,
        "description": "This is a simple calendar application that allows the user to save events for each hour of the day. This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",
        "github": "https://github.com/SaadiaELF/Work_Day_Scheduler_SEF.git",
        "demo": "https://saadiaelf.github.io/Work_Day_Scheduler_SEF/"
    }
]