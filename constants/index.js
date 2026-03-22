import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";


const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analysis",
    icon: <FullStackIcon />,
  },
  {
    title: "Process Automation",
    icon: <FrontendIcon />,
  },
  {
    title: "BI Dashboarding",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "SQL & Python Insights",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "SQL",
      icon: "/assets/tech/SQL.jpg",
      link: "https://www.w3schools.com/sql/",
    },
    // {
    //   name: "CSS3",
    //   icon: "/assets/tech/css3.svg",
    //   link: "https://www.w3.org/Style/CSS/Overview.en.html",
    // },
    // {
    //   name: "JavaScript",
    //   icon: "/assets/tech/javascript.svg",
    //   link: "https://262.ecma-international.org/",
    // },
    // {
    //   name: "TypeScript",
    //   icon: "/assets/tech/typescript.svg",
    //   link: "https://www.typescriptlang.org/",
    // },
    // {
    //   name: "C",
    //   icon: "/assets/tech/c.svg",
    //   link: "https://en.cppreference.com/w/c",
    // },
    // {
    //   name: "Java",
    //   icon: "/assets/tech/java.svg",
    //   link: "https://www.java.com/en/",
    // },
    {
      name: "Python",
      icon: "/assets/tech/Python.jpg",
      link: "https://www.python.org/",
    },
  ],
  Softwares: [
    {
      name: "SAP",
      icon: "/assets/tech/SAP.png",
      link: "https://www.sap.com/",
    },
    {
      name: "Salesforce",
      icon: "/assets/tech/Salesforce.png",
      link: "https://www.salesforce.com/in/",
    },
    {
      name: "Servicenow",
      icon: "/assets/tech/Servicenow.jpg",
      link: "https://www.servicenow.com/in/",
    },
    {
      name: "PIM",
      icon: "/assets/tech/PIM.svg",
      link: "https://www.stibosystems.com/solution/product-experience-data-cloud/product-information-management",
    },
    {
      name: "Globallink",
      icon: "/assets/tech/Globallink.png",
      link: "https://globallink.transperfect.com/",
    },
    {
      name: "JIRA",
      icon: "/assets/tech/JIRA.svg",
      link: "https://www.atlassian.com/software/jira",
    },
    {
      name: "Sharepoint",
      icon: "/assets/tech/Sharepoint.svg",
      link: "https://www.microsoft.com/en-in/microsoft-365/sharepoint/collaboration",
    },
  ],
  libraries: [
    {
      name: "NumPy",
      icon: "/assets/tech/NumPy.png",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/Pandas.png",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/Seaborn.png",
      link: "https://seaborn.pydata.org/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/Matplotlib.jpg",
      link: "https://matplotlib.org/",
    },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    // {
    //   name: "NextAuth.js",
    //   icon: "/assets/tech/nextauthjs.png",
    //   link: "https://next-auth.js.org/",
    // },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/Git.png",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/Github.png",
      link: "https://github.com/",
    },
    {
      name: "PowerBI",
      icon: "/assets/tech/PowerBI.png",
      link: "https://www.microsoft.com/en-in/power-platform/products/power-bi",
    },
    {
      name: "Tableau",
      icon: "/assets/tech/Tableau.png",
      link: "https://www.tableau.com/",
    },
    {
      name: "Excel",
      icon: "/assets/tech/Excel.png",
      link: "https://excel.cloud.microsoft/",
    },
  ],
  environments: [
    {
      name: "Microsoft 365",
      icon: "/assets/tech/Microsoft.jpg",
      link: "https://www.office.com/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/MySql.png",
      link: "https://www.mysql.com/",
    },
    // {
    //   name: "PostgreSQL",
    //   icon: "/assets/tech/postgresql.png",
    //   link: "https://www.postgresql.org",
    // },
    // {
    //   name: "MongoDB",
    //   icon: "/assets/tech/mongodb.svg",
    //   link: "https://www.mongodb.com/",
    // },
    // {
    //   name: "Firebase",
    //   icon: "/assets/tech/firebase.svg",
    //   link: "https://firebase.google.com/",
    // },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Master Data Analyst - Governance",
    company_name: "Schneider Electric",
    icon: "/assets/company/Schneider Logo.jpg",
    iconBg: "#E6DEDD",
    date: "November 2024 - Present",
    points: [
      "Handle Master Data Management (MDM) activities for Baltic countries, ensuring accurate product data across SAP, Salesforce, and PIM systems.",
      "Support Nordic markets with master data operations to enable product availability and efficient sales execution.",
      "Automated two reporting processes using VBA and Advanced Excel, reducing manual effort by ~70% and improving operational efficiency.",
      "Prepare and structure datasets for Tableau dashboards tracking 20+ KPIs, delivering product insights and performance visibility.",
      "Manage large-scale product data (>75k records), maintain pricing and agreements in SAP, and collaborate with stakeholders to improve data governance and process efficiency.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "SkillCraft Technology",
    icon: "/assets/company/Skillcraft logo.jpg",
    iconBg: "#E6DEDD",
    date: "September 2024",
    points: [
      "Analyzed 10k+ automotive and accident records using Python, performing EDA, trend analysis, and pattern detection.",
      "Built 2–3 dashboards in Power BI/Tableau visualizing accident hotspots, vehicle types, and pricing trends for stakeholder insights.",
      "Experimented with OCR tools (OpenCV, Tesseract) to extract key fields from sample medical documents. as part of a guided learning task. ",
      "Cleaned and modularized Python scripts into reusable functions, improving workflow efficiency and clarity for the team.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SQL Data Analytics Project (SQL Server)",
    description:
      "Executed end-to-end SQL analytics in SQL Server & SSMS, including data cleaning, validation, EDA, KPI reporting, trend analysis, and segmentation, which revealed that a small percentage of customers/products drove the majority of revenue, guiding strategic optimization.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "SSMS",
        color: "green-text-gradient",
      },
      {
        name: "T-SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Trend Analysis",
        color: "orange-text-gradient",
      },
      {
        name: "Business Insights",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Top_customers.png",
    source_code_link: "https://github.com/arnavsr29/SQL_Analytics_project",
    deployed_link: "https://github.com/arnavsr29/SQL_Analytics_project/blob/main/README.md",
  },
  {
    name: "Shifting Gears – Automotive Analysis",
    description:
      "Analyzed 10k+ automotive sales and vehicle records using Tableau, building interactive dashboard that revealed high-growth segments, regional sales variations, pricing dynamics, EV adoption, and consumer preferences, supporting marketing, pricing, and product strategy decisions.",
    tags: [
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "green-text-gradient",
      },
      {
        name: "Consumer Behavior Analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Pricing Analysis",
        color: "orange-text-gradient",
      },
      {
        name: "Dashboard Building",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Car_sales_dashboard.png",
    source_code_link: "https://github.com/arnavsr29/Car_Sales_Dashboard",
    deployed_link: "https://github.com/arnavsr29/Car_Sales_Dashboard/blob/main/README.md",
  },
  {
    name: "AtliQ Grands – Hospitality Chain Business Insights",
    description:
      "Analyzed historical data for AtliQ Grands and built dashboard tracking revenue, RevPAR, occupancy, and customer ratings, uncovering top-performing properties, high-revenue cities, and cancellation impacts, which enabled 30% in online bookings and 10% increase in customer base.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analytics",
        color: "green-text-gradient",
      },
      {
        name: "KPI Analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "orange-text-gradient",
      },
      {
        name: "Business Intelligence",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Hospitality_chain_insights_dashboard.png",
    source_code_link: "https://github.com/arnavsr29/AtliQ-Grands-Hospitality-Chain-Business-Insights",
    deployed_link: "https://github.com/arnavsr29/AtliQ-Grands-Hospitality-Chain-Business-Insights/blob/main/README.md",
  },
  {
    name: "Indian Ecosystem Analysis Dashboard",
    description:
      "Developed dashboard analyzing 8,000+ survey responses and 3,500+ records using CRISP-DM technique, identifying underperforming brands, perception gaps, and white-space opportunities with 7+ filters, KPIs, and heatmaps for actionable marketing decisions.",
    tags: [
      {
        name: "Brand Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Customer Segmentation",
        color: "green-text-gradient",
      },
      {
        name: "Market Research",
        color: "pink-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "orange-text-gradient",
      },
      {
        name: "BI Dashboarding",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Ecosystem_Analysis_dashboard.png",
    source_code_link:
      "https://github.com/arnavsr29/Indian-Ecosystem-Analysis-Dashboard",
    deployed_link:
      "https://github.com/arnavsr29/Indian-Ecosystem-Analysis-Dashboard/blob/main/README.md",
  },
  {
    name: "Blinkit Sales Analysis – Quick Commerce Insights",
    description:
      "Built a dashboard analyzing Blinkit sales data to track $1M+ total sales, average sales, item count, and customer ratings, revealing high demand for low-fat products, top sales in fruits & snacks, and highest profitability from medium outlets in Tier-3 cities.",
    tags: [
      {
        name: "KPI Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Retail Analytics",
        color: "green-text-gradient",
      },
      {
        name: "Business Intelligence",
        color: "pink-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "orange-text-gradient",
      },
      {
        name: "Sales Analysis",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/blinkit_data_analysis_dashboard.png",
    source_code_link: "https://github.com/arnavsr29/Blinkit-Sales-Findings",
    deployed_link: "https://github.com/arnavsr29/Blinkit-Sales-Findings/blob/main/README.md",
  },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];


// test:

const certificates = [
  {
    name: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "August 2025",
    description:
      "Demonstrates proficiency in writing SQL queries to extract, filter, and manipulate data, with a strong understanding of core database concepts and operations.",
    link: "https://www.hackerrank.com/certificates/bf94d3a8e9e7",
    image: "/assets/projects/SQL_HackerRank.png",
  },
  {
    name: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "July 2024",
    description:
      "Includes core concepts such as preparing data, creating visual reports, and generating meaningful insights to support data-driven decisions.",
    link: "https://drive.google.com/file/d/1-3dKNRaEX2OnGO8QgQmTmH7YQAuOXlRX/view?usp=drive_link",
    image: "/assets/projects/CertificateOfCompletion_Career Essentials in Data Analysis by Microsoft and LinkedIn (2)_page-0001.jpg",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    date: "September 2024",
    description:
      "Covers Python syntax, control flow, functions, and data structures, with hands-on practice in writing scripts and solving practical problems.",
    link: "https://drive.google.com/file/d/1tqgcAtGLQDeymkTwCNfIWhwepwQf1pFb/view?usp=drive_link",
    image: "/assets/projects/Python_Essentials_1_Certificate (1)_page-0001.jpg",
  },
  {
    name: "Business Analysis Foundations",
    issuer: "International Institute of Business Analysis (IIBA)",
    date: "September 2024",
    description:
      "Focuses on gathering requirements, analyzing datasets, defining business problems, and enabling effective decision-making through structured analysis.",
    link: "https://drive.google.com/file/d/1fD4VRB9Ty2B3F8HRdA92YRJjxT2wMk6w/view?usp=sharing",
    image: "/assets/projects/CertificateOfCompletion_Business Analysis Foundations (1)_page-0001.jpg",
  },
  // {
  //   name: "Business Analysis Foundations",
  //   issuer: "International Institute of Business Analysis (IIBA)",
  //   date: "September 2024",
  //   description:
  //     "Focuses on gathering requirements, analyzing datasets, defining business problems, and enabling effective decision-making through structured analysis.",
  //   link: "https://drive.google.com/file/d/1fD4VRB9Ty2B3F8HRdA92YRJjxT2wMk6w/view?usp=sharing",
  //   image: "/assets/projects/CertificateOfCompletion_Business Analysis Foundations (1)_page-0001.jpg",
  // }
];


const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/arnavsr29",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/arnav-srivastava-963571227/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/arnavsr26158295",
  },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  "Data Analytics",
  500,
  "Process & Workflow Automation",
  500,
  "SAP Implementation",
  500,
  "Stakeholder Communication",
  500,
  "Interactive Dashboard Development",
  500,
  "Problem Solving",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  certificates,
  heroTexts,
};
