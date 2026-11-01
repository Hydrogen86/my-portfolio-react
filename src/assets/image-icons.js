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
const programLanguage = {
    html: {
        name: "HTML",
        icon: html
    },
    css: {
        name: "CSS",
        icon: css
    },
    javascript: {
        name: "JavaScript",
        icon: js
    },
    java: {
        name: "Java",
        icon: java
    },
    python:
    {
        name: "Python",
        icon: python
    },
    php: {
        name: "PHP",
        icon: php
    }
}

//-----------------------------------
//--------DATABASE MANAGEMENT--------
//-----------------------------------
import mongoDB from './icons/mongodb.png'
import mySQL from './icons/mySQL.png'
const databaseManagement = {
    mongodb: {
        name: "MongoDB",
        icon: mongoDB
    },
    mysql: {
        name: "MySQL",
        icon: mySQL
    }
}

//-----------------------------------
//------FRAMEWORKS & LIBRARIES-------
//-----------------------------------
import laravel from './icons/laravel.png'
import react from './icons/atom.png'
import bootstrap from './icons/bootstrap-icon-css.png'
import nodeJS from './icons/nodejs.png'
const frameworksAndLabraries = {
    laravel: {
        name: "Laravel",
        icon: laravel
    },
    react: {
        name: "React",
        icon: react
    },
    bootstrap: {
        name: "Bootstrap",
        icon: bootstrap
    },
    nodejs: {
        name: "NodeJS",
        icon: nodeJS
    },
    expressjs: {
        name: "Express JS",
        icon: js
    }
}

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
const toolsAndPlatforms = {
    andriodstudio: {
        name: "Andriod Studio",
        icon: andriodStudio
    },
    vscode: {
        name: "VS Code",
        icon: vsCode
    },
    git: {
        name: "Git",
        icon: git
    },
    github: {
        name: "GitHub",
        icon: gitHub
    },
    xampp: {
        name: "XAMPP",
        icon: xampp
    },
    figma: {
        name: "Figma",
        icon: figma
    },
    mockplus: {
        name: "Mockplus",
        icon: mockPlus
    },
    canva: {
        name: "Canva",
        icon: canva
    }
}


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

export {
    icons,
    images
}