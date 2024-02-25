/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gowtham Senthilnayaki",
  title: "Hi all, I'm Gowtham",
  subTitle: emoji(
    "An AI Engineer with 3+ years of experience dedicated to transforming industries through data science. With a robust foundation in software development, my passion now lies in leveraging artificial intelligence and machine learning to uncover insights, automate processes, and create innovative solutions. My portfolio showcases a diverse range of AI projects, reflecting my deep analytical skills and my commitment to advancing the frontiers of technology. Join me on this journey as we explore the potential of AI and ML to solve real-world challenges."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16AWJNJNfG18Rls1hCyzPxcrt9I82SjVd/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GowthamS07",
  linkedin: "https://www.linkedin.com/in/gowthams7/",
  gmail: "gs@bu.edu",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Research and Develop End to End AI Powered Applications for Organisations."
    ),
    emoji("⚡ Create prototypes in emerging AI Technologies (currently:GenAI) for potential business needs."),
    emoji(
      "⚡Visualize Data and extract information from data with high degree of explainability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Boston University",
      logo: require("./assets/images/bu.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "September 2022 - January 2024",
      desc: "Worked as a Research Assistant.",
      descBullets: [
        "Participaed in 3 Machine learning and Deep Learning competitions and placed in the top 5 percentile of the global ranking.",
        "Researched and Developed a text to image generative AI model for our project and received first grade in the class"
      ]
    },
    {
      schoolName: "Sikkim Manipal Institute of Technology",
      logo: require("./assets/images/SMIT_logo_large.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2016 - October 2020",
      desc: "Participated in research of Authorship Identification and published a paper and in a Journal.",
      descBullets: [
      "Selected to be one of 20 people in OpenSeventeen Challenge organised by the UN.",
      "Selected as a Facilitator for Explore ML Academy an initiative by Google AI Hyderabad.",
      "Core team member of D'Coder (coding club of SMIT)."
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis and Visualization", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine and Deep learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Statistical Modeling",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Boston University",
      companylogo: require("./assets/images/bu.png"),
      date: "June 2023 – January 2024",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed innovative graph embeddings to represent customer spending patterns, providing novel insights into consumer behavior.",
        "Led a project focused on web scraping ESG report data, with the aim to build a fine-tuned Large Language Model for extracting actionable insights from these reports with ROUGE score of 0.6."
      ]
    },
    {
      role: "Lead AI Engineer",
      company: "Coence",
      companylogo: require("./assets/images/logo.jpeg"),
      date: "March 2021 – August 2022",
      descBullets: [
        "Pioneered a comprehensive Resume Extractor and Creator system that matched with 90% keywords, leveraging advanced parsing techniques to distill and tailor resume content for specific job descriptions.",
        "Designed and implemented a bespoke recommendation engine to dynamically match users with events, competitions, and hackathons, enhancing user engagement and exposure."
    ]
    },
    {
      role: "Offshore Data Science Specialist",
      company: "Mastech Infotrellis",
      companylogo: require("./assets/images/mastech.jpg"),
      date: "Jan 2020 – Feb 2021",
      descBullets: [
        "Crafted an OCR-based data extraction pipeline with accuracy of 87% from 79%, streamlining the processing of proprietary company data.",
        "Developed a Novel Knowledge Graph-based decision support system that with 10% increase in efficiency of querying company data."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND ORGANISATIONS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bobble.jpeg"),
      projectName: "Bobble AI",
      projectDesc: "Collaborated directly with the AI Lead to develop a novel Speech Recognition system for Indian languages increasing the accuracy to 82% from 71% and created a data pipeline that managed over 1,000,000 speech data points weekly.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://bobble.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/isi.png"),
      projectName: "Indian Statistical Institute",
      projectDesc: "Conducted research under PostDoc of Dr. Ashish Ghosh, focusing on the classification of multi-label datasets using a combination of Association Rule Mining and Machine Learning techniques.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.isical.ac.in/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. - gs@bu.edu",
  //number: "+92-0000000",
  email_address: "gs@bu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
