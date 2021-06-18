/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "GiftOjeabulu",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Gift Ojeabulu Portfolio",
    type: "website",
    url: "http://giftojeabulu.com/",
  },
};

//Home Page
const greeting = {
  title: "Gift Ojeabulu",
  logo_name: "GiftOjeabulu",
  nickname: "GiftOjabu",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Py81Jy31-X1lMExjFTF_G3lxGlhrWKnX/view?usp=sharing",
  portfolio_repository: "https://github.com/Gift-Ojeabulu",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/Gift-Ojeabulu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gift-ojabu/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:giftoscart@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/GiftOjeabulu_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Medium",
    link: "https://medium.com/@giftojeabulu",
    fontAwesomeIcon: "fab fa-medium", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=twitter
  },
  
];

const skills = {
  data: [
    {
      title: "Data Science,Data Visualization & Machine learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various machine learning and statistical use cases",
        "⚡ Experience building dashboards and data visualization projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos-jupyter",
          style: {
            //backgroundColor: "white",
            //color: "#D00000",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing static Websites using HTML and CSS",
        "⚡ Creating application backend in MySQL & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites with Heroku and Firebase",
        "⚡ Deploying Machine Learning learning models on cloud to use on Web Application",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      //profileLink: "",
    },
    {
      siteName: "Zindi",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      //profileLink: "https://zindi.africa/users/GiftOjeabulu/competitions",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      //profileLink: "https://www.kaggle.com/giftoscar11",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ambrose Alli University",
      subtitle: "B.Sc(Hons). in Computer Science",
      logo_path: "aau1.png",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structures and Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, Discrete Mathematics  and Full Stack Development." 
      ],
      website_link: "https://www.aauekpoma.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analytics A-Z with Python",
      subtitle: "- Udemy",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZMoYmz4ojrgqAWJJAZoS3wpIz2Z3eCsU/view",
      alt_name: "Udemy",
      color_code: "#8a373f",
    },
    {
      title: "Business Metrics for Data-driven companies",
      subtitle: "Coursera - Duke University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9S7LSATXSZ4Z",
      alt_name: "deeplearning.ai",
      color_code: "#0056D2",
    },
    {
      title: "Managing Big Data with MySQL",
      subtitle: "Cousera - Duke University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QVJC2SN5NZB6",
      alt_name: "Google",
      color_code: "#0056D2",
    },
    {
      title: "Fundamental course in the AWS Machine Learning",
      subtitle: "Udacity - AWS ",
      logo_path: "udacity-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1YUFru_os5wyRi1FM1G-lK5Lm7hoa5zF3/view",
      alt_name: "AWS",
      color_code: "#02B3E4",
    },
    {
      title: "Data Visualization and Communication with Tableau",
      subtitle: "Cousera - Duke University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6A92RLUGT2SB",
      alt_name: "Duke University",
      color_code: "#0056D2",
    },
    {
      title: "SQL + Tableau + Python",
      subtitle: "- 365 Data Science",
      logo_path: "365_Data_Science.png",
      certificate_link:
        "https://drive.google.com/file/d/1mQv1e0ZazOXB86p8W0J1nGSsSQcuvJLr/view",
      alt_name: "365 Data Science",
      color_code: "#FFFFFF",
    },
    {
      title: "Interactive Dashboards with Streamlit and Python",
      subtitle: "- Coursera Project Network",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Deploying of Machine Learning models",
      subtitle: "- Udemy",
      logo_path:"udemy-logo.png" ,
      alt_name: "deeplearning.ai",
      color_code: "#8a373f",
    },
    {
      title: "Software Engineering for Data Scientist in Python",
      subtitle: "- Jogesh Muppala",
      logo_path: "datacamp.png",
      alt_name: "Datacamp",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with evolving startups as Data Scientist and as a Freelance Web developer. I love attending &  organising tech events.I am forefronted about growth & Continuous Improvement.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work/Internship/Volunteerships",
      experiences: [
        {
          title: "Data Scientist",
          company: "Quantum Analytics",
          company_url: "https://www.quantumanalyticsng.com/",
          logo_path: "muffito_logo.png",
          duration: "March 2021 - PRESENT",
          location: "Fully Remote",
          description:
            " Developing, evaluating, and maintaining cutting-edge technical content for training experiences relevant to audiences with a diverse set of educational backgrounds and industry experience.Train online boot camp students, the next generation of data scientist, on a wide range of topics ranging from statistics, probability, python coding, data analysis, machine learning and data visualization.Training online students, the next generation of data scientist, on a wide range of topics ranging from statistics, probability, python coding, data analysis, machine learning and data visualization.Guiding and mentoring our students inside and outside of the classroom for their industry- ready projects. Help to orient our students’ learning toward the target industries.",
          color: "#9b1578",
        },
        {
          title: "Data Scientist",
          company: "Xcrowme",
          company_url: "https://www.xcrowme.com/",
          logo_path: "freecopy_logo.png",
          duration: "August 2020 - PRESENT",
          location: "Work From Home",
          description:
            "Identifying market opportunities and analyze trends and data to make well-informed business decision through market research analysis.Conduct SWOT analysis to help the organization identify strength, weakness, opportunities and threats related to business competition.Finding and making research for better ways of collecting data from consumers and competitors to merge information into actionable reports and presentations.Researching ways to incorporate AI and Data Science to improve Software Products.",
          color: "#fc1f20",
        },
        {
          title: "Data Scientist",
          company: "8th Gear Partners",
          company_url: "https://www.8thgearpartners.com/",
          duration: "April 2020 - MAY 2020",
          location: "Lagos, Nigeria",
          description:
            " I gave a virtual talk at 8th Gear Space titled The Rudiment in Data science where over 100 seek to participate on LinkedIn, over 60% rated the class as being impactful and was interested in joining us at 8th Gear space.I gave a publicity strategy idea to the Head of strategy that kept customers and brought attention to 8th Gear space in getting convinced for customer retention..",
          color: "#0879bf",
        },
        {
          title: "Network System Analyst",
          company: "New Horizons",
          company_url:
            "https://newhorizonsnigeria.com/",
         logo_path: "intel_logo.jpg",
          duration: "June 2018 - Feb 2019",
          location: "Lagos,Nigeria",
          description:
            "Organized, installed, and support new horizon computer systems, including local area networks (LANs), network segments, intranets, and other data communication systems.Oversee and support the day-to-day operation of computer systems and networks throughout the organization, ensuring reliable performance and data integrity.Guided learning students in understanding theoretical and practical networking, hardware and programming.",
          color: "#0071C5",
        },
        {
          title: "Data Scientist",
          company: "YARD INITIATIVE",
          logo_path: "google_logo.png",
          duration: "March 2021 - PRESENT",
          location: "Work From Home",
          description:
            "Actively involve in working with team members with grit to provides data reports on the SDGs, targets & indicators, to track & evaluate progress for key decisions.",
          color: "#4285F4",
        },
        {
          title: "Co-Organizer & Mentor at AI+ AAU",
          company: "Data Science Nigeria",
          company_url: "https://www.datasciencenigeria.org/",
          logo_path: "microsoft_logo.png",
          duration: "March 2019 - Oct 2019",
          description:
            "Trained Female University students on data science/machine learning related topics to empower and encourage women in tech. Help organize data science meet-ups, taught students programming in Java and basic Android development.",
          color: "#D83B01",
        },
        {
          title: "Data Scientist",
          company: "ZINDI",
          company_url: "http://zindi.africa/",
          logo_path: "mozilla_logo.png",
          duration: "Sept 2019 - March 2021",
          location: "Fully Remote",
          description:
            "Collaborated and connect with data scientists from throughout Africa and beyond,Learn and also share knowledge with others.",
          color: "#000000",
        },
      ],
    }, 
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aaaaaa2.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Analysis, Data Science, Machine Learning and Web development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://giftojeabulu.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Lagos,Nigeria - 110115",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ARNhCKe4M7R571jK7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 9077393129",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
