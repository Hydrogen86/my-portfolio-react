const userData = {
    firstName: "Robert",
    lastname: "Magno",
    course: "BSI/T",
    speciality: "Software Developer",

    yearsOfExp: "2+",
    projectCount: 8,

    municipality: "Marinduque",
    region: "MIMAROPA",
    country: "Philippines",

    email: "magno.robert.m@gmail.com",
    phone: "+63 926 6495 922"
}

const computerLanguages = [
    "JavaScript",
    "React",
    "PHP",
    "HTML",
    "CSS",
    "C#",
    "Java",
    "Python",
]

const database = [
    "MonoDB",
    "MySQL"
]

const librariesAndFramework = [
    "React",
    "Laravel",
    "Node.Js",
    "Express.Js",
    "Bootstrap",
    "Tailwind"
]

const toolsAndPlatforms = [
    "VS Code",
    "Git",
    "GitHub",
    "Render",
    "Vercel",
    "Figma",
    "Canva"
]


import swineGuardImg from '../assets/images/swineguard.png'
import pmbcsImg from '../assets/images/penroMarinduque.png'
import carabaoCartImg from '../assets/images/carabaoCart.png'
import bikezoneImg from '../assets/images/BikeZone.png'
import animeTheaterImg from '../assets/images/anime-theater.png'
import ebudget from '../assets/images/ebudget.png'
const projects = [
    {
        projectName: "SwineGuard",
        about: "Web-based Health Monitoring and Vaccination Tracker System",
        techStack: "HTML, JavaScript, NodeJS, ExpressJS, & MongoDB",
        development: "Web Developmet",
        img: swineGuardImg
    },
    {
        projectName: "Penro MArinduque Billing Collection System",
        about: "Digital Billing Procedure of PENRO Marinduque",
        techStack: "Laravel, JavaScript, & MySQL",
        development: "Web Developmet",
        img: pmbcsImg
    },
    {
        projectName: "CarabaoCart",
        about: "Web-Based Carabao Milk Supply and Dairy Product Management System",
        techStack: "PHP, JavaScript, & MySQL",
        development: "Web Developmet",
        img: carabaoCartImg
    },
    {
        projectName: "BikeZone",
        about: "Web-based Bike Supply and Product Management System",
        techStack: "HTML, JavaScript, & XML",
        development: "Web Developmet",
        img: bikezoneImg
    },
    {
        projectName: "E-budget",
        about: "Mobile Application Budget Managing Application",
        techStack: "Java",
        development: "Mobile Developmet",
        img: ebudget
    },
    {
        projectName: "Anime Theater",
        about: "Web-based Video Streaming Site",
        techStack: "React, & NodeJS",
        development: "Web Developmet",
        img: animeTheaterImg
    },
]


export {
    userData,
    computerLanguages,
    database,
    librariesAndFramework,
    toolsAndPlatforms,
    projects
}