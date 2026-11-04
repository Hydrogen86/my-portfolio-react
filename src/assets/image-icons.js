//-----------------------------------
//------------ICONS------------------
//-----------------------------------
import exit from './icons/exit.png'
import menu from './icons/menu.png'
import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import linkedIn from './icons/linkedIn.png'
import whatsApp from './icons/whatsapp.png'
import tiktok from './icons/tiktok.png'
const icons = {
    exit,
    menu,
    facebook,
    instagram,
    linkedIn,
    whatsApp,
    tiktok
}

//-----------------------------------
//------PROGRAMMING LANGUAGES--------
//-----------------------------------
import cSharp from './icons/c-sharp.png'
import css from './icons/CSS.png'
import html from './icons/html.png'
import java from './icons/java.png'
import js from './icons/js.png'
import python from './icons/python.png'
import php from './icons/php.png'
const programLanguage = [
    {
        name: "HTML",
        icon: html
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "JavaScript",
        icon: js
    },
    {
        name: "Java",
        icon: java
    },
    {
        name: "Python",
        icon: python
    },
    {
        name: "PHP",
        icon: php
    },
    {
        name: "C#",
        icon: cSharp
    }
]

//-----------------------------------
//--------DATABASE MANAGEMENT--------
//-----------------------------------
import mongoDB from './icons/mongodb.png'
import mySQL from './icons/mySQL.png'
const databaseManagement = [
    {
        name: "MongoDB",
        icon: mongoDB
    },
    {
        name: "MySQL",
        icon: mySQL
    }
]

//-----------------------------------
//------FRAMEWORKS & LIBRARIES-------
//-----------------------------------
import laravel from './icons/laravel.png'
import react from './icons/atom.png'
import bootstrap from './icons/bootstrap-icon-css.png'
import nodeJS from './icons/nodejs.png'
const frameworksAndLabraries = [
    {
        name: "Laravel",
        icon: laravel
    },
    {
        name: "React",
        icon: react
    },
    {
        name: "Bootstrap",
        icon: bootstrap
    },
    {
        name: "NodeJS",
        icon: nodeJS
    },
    {
        name: "Express JS",
        icon: js
    }
]

//-----------------------------------
//---------TOOLS & PLATFORMS---------
//-----------------------------------
import andriodStudio from './icons/android studio.png'
import git from './icons/Git.png'
import gitHub from './icons/github.png'
import vsCode from './icons/visual-studio.png'
import xampp from './icons/xammp.png'
import canva from './icons/canva.png'
import mockPlus from './icons/mockplus.png'
import figma from './icons/figma.png'
const toolsAndPlatforms = [
    {
        name: "Andriod Studio",
        icon: andriodStudio
    },
    {
        name: "VS Code",
        icon: vsCode
    },
    {
        name: "Git",
        icon: git
    },
    {
        name: "GitHub",
        icon: gitHub
    },
    {
        name: "XAMPP",
        icon: xampp
    },
    {
        name: "Figma",
        icon: figma
    },
    {
        name: "Mockplus",
        icon: mockPlus
    },
    {
        name: "Canva",
        icon: canva
    }
]


//-----------------------------------
//-------------IMAGES----------------
//-----------------------------------
import heroImg from './images/hero-section-img.png'
import aboutImg from './images/about-img.png'
import { icon } from '@fortawesome/fontawesome-svg-core'
const images = {
    heroImage: heroImg,
    aboutImage: aboutImg
}

//-----------------------------------
//----------TESTIMONIALS-------------
//-----------------------------------
import clientOne from './images/testimonials/client-1.png'
import clientTwo from './images/testimonials/client-2.png'
const testimonials = [
    {
        name: "Marco",
        message: "The project works well and meets the requirements. I also appreciate your cooperation and patience throughout the process.",
        image: clientOne
    },
    {
        name: "Lance Aron",
        message: "The application is well-designed, user-friendly, and has very few errors. Thank you! I really appreciate your work.",
        image: clientTwo
    }
]


export {
    icons,
    images,
    programLanguage,
    toolsAndPlatforms,
    frameworksAndLabraries,
    databaseManagement,
    testimonials
}