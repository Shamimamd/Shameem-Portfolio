// Skills Section Logo's
// import htmlLogo from "./assets/tech_logo/html.png";
// import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
// import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
// import mongodbLogo from "./assets/tech_logo/mongodb.png";
// import firebaseLogo from "./assets/tech_logo/firebase.png";
// import cLogo from "./assets/tech_logo/c.png";
// import cppLogo from "./assets/tech_logo/cpp.png";
// import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
// import vscodeLogo from "./assets/tech_logo/vscode.png";
// import postmanLogo from "./assets/tech_logo/postman.png";
// import mcLogo from "./assets/tech_logo/mc.png";
// import figmaLogo from "./assets/tech_logo/figma.png";
// import netlifyLogo from "./assets/tech_logo/netlify.png";
// import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
// import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/newtonschool_logo.jpeg";
import agcLogo from "./assets/company_logo/agc_logo1.jpg";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo1.jpg";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det1.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/img1.png";
// import taskremLogo from "./assets/work_logo/task_rem.png";
// import npmLogo from "./assets/work_logo/npm.png";
// import webverLogo from "./assets/work_logo/web_dig.png";
// import cmLogo from "./assets/work_logo/cm.png";
// import imagesearchLogo from "./assets/work_logo/image_search.png";
// import removebgLogo from "./assets/work_logo/remove_bg.png";

//new imports
import datacleaning from "./assets/tech_logo/datacleaning.png";
import etl from "./assets/tech_logo/etl.png";
import statistics from "./assets/tech_logo/statistics.png";
import visualization from "./assets/tech_logo/visualization.png";
import powerbi from "./assets/tech_logo/powerbi.png";
import excel from "./assets/tech_logo/excel.png";
import jupyter from "./assets/tech_logo/jupyter.png";

export const SkillsInfo = [
  {
    title: "Data Analytics",

    skills: [
      { name: "SQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      // { name: "Python", logo: sassLogo },
      { name: "Data Cleaning", logo: datacleaning },
      { name: "ETL", logo: etl },
      { name: "Statistics", logo: statistics },
      { name: "Data Visualization", logo: visualization },
      { name: "Power BI", logo: powerbi },
      { name: "Excel", logo: excel },
      { name: "Jupyter", logo: jupyter },
    ],
  },

  {
    title: "Analytics Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Power BI", logo: powerbi },
      { name: "Excel", logo: excel },
      { name: "SQL Environments", logo: mysqlLogo },
    ],
  },
  {
    title: "Additional Skills",

    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Node Js", logo: nodejsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    // img: webverseLogo,
    img: newtonschoolLogo,
    role: "Data Assistant",
    company: "Yateem Air Conditioning Company, Bahrain",
    date: "2025 – Present",
    desc: [
      "Prepare reports and dashboards using Excel & Power BI",
      "Clean and validate operational data for analysis",
      "Support management with daily & weekly performance insights",
    ],
    skills: [
      "SQL",
      "PostgreSQL",
      "Data Cleaning",
      "ETL",
      "Statistics",
      "Data Visualization",
      "Power BI",
      "Excel",
      "Jupyter",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Permit Receiver",
    company: "Industrial Projects, Bahrain ",
    date: "Mar 2023 - 2025",
    desc: [
      "Managed work permits, safety documentation & coordination",
      " Maintained compliance and reporting with site supervisors",
    ],
    skills: [],
  },
  {
    id: 2,
    img: webverseLogo,
    role: "Founder",
    company: "Ahmed Plywood & Hardware, Howrah (Google Listed)",
    date: "2019",
    desc: [
      "Started and managed a retail business from scratch",
      " Handled sales, inventory, vendors & customers",
      " Built local brand presence via Google listing",
    ],
    skills: [],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "North Kolkata Polytechnic, India",
    date: "2015-2018",
    grade: "7.81 CGPA",
    desc: "Among the top 5% of the batch",
    degree: "Diploma in Mechanical Engineering",
  },

  {
    id: 3,
    img: bsaLogo,
    school: "Lal Baba Vidyalya",
    date: "Apr 2014 - March 2015",
    grade: "67.5%",
    desc: "I completed my class 10 education from Lal Baba Vidyalya, Belurmath, under the WBBSE board, where I studied Science with Computer.",
    degree: "WBBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Eid Sales Data Analysis",
    description: [
      "Analysed Eid sales by State & Gender (Male/Female)",
      "Identified Top 10 States by Revenue and Orders",
      "Built interactive Power BI dashboard with filters",
    ],
    image: githubdetLogo,
    tags: ["PostgreSQL", "Python", "Power BI"],
    github:
      "https://www.github.com/Shamimamd/Data-Analysis-Project/blob/main/festival_sales.ipynb",
    webapp: "",
  },
  {
    id: 1,
    title: "Shopping Mall Data Analysis ",
    description: [
      "Cleaned and analysed customer & product data ",
      "Visualized gender-wise & category-wise sales trends",
    ],
    // image: csprepLogo,
    tags: [],
    github:
      "https://www.github.com/Shamimamd/Data-Analysis-Project/blob/main/festival_sales.ipynb",
    webapp: "",
  },
  {
    id: 2,
    title: "Sales Performance Dashboard – Ahmed Plywood and Hardware",
    description: [
      "Excited to share my latest Data Analytics Dashboard project built to analyze sales performance and business insights.",
      "Total Sales Amount: 438K",

      "Total Quantity Sold: 5615",

      "Total Profit: 37K",
      "Average Order Value: 121K ",
      " Delivered actionable insights on product performance",
    ],
    image: movierecLogo,
    tags: [],
    github:
      "https://www.github.com/Shamimamd/Data-Analysis-Project/blob/main/festival_sales.ipynb",
    webapp: "",
  },
];
