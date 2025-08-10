export const siteConfig = {
  name: "Emile Gaudinot",
  title: "Machine Learning Engineer",
  description: "Portfolio website of Emile Gaudinot",
  accentColor: "#55019eff",
  social: {
    // email: 'example@domain.com',
    linkedin: "https://www.linkedin.com/in/emile-gaudinot/",
    // twitter: "twitter.com",
    github: "https://github.com/emile-gaudinot",
  },
  aboutMe:
    "I am currently enrolled in a dual-degree program at the Technical University of Berlin, in a Master's in Computer Science and Machine Learning, and at École Centrale de Nantes, where I obtained an Engineering Diploma. Alongside my academic pursuits, I have gained valuable experience working part-time as a Machine Learning Engineer for the past two years. I am seeking a position as a Machine Learning Engineer, starting in October.",
  skills: ["Python", "scikit-learn", "PyTorch", "MLflow", "R", "SQL"],
  projects: [
    {
      name: "Machine Learning for Medical Image Processing",
      description:
        "Segmentation of coronary arteries from 800 CTA images of the heart, in 3D. Extraction of a graph from the arteries, to automate early detection of Coronary Artery Disease. The whole standardized Deep Learning pipeline we developed was deployed to production. Models tested: U-Net, nnU-Net, UNETR, MedSAM. Best Dice-score of 0.77.",
      img: "segm-graph.png",
      link: "https://github.com/emile-gaudinot/ML4MIP",
      skills: ["PyTorch", "MLflow", "MONAI", "nvidia-smi"],
    },
    // {
    //   name: "MT",
    //   description:
    //     "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
    //   link: "https://fullstackextensions.com/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    {
      name: "Smart Cybersecurity",
      description:
        `Implementation, training and fine-tunning of various proof-of-concept machine learning models to
         addressed cybersecurity challenges: adversarial attacks and defenses, 
         network intrusion detection, malware detection in documents, etc.
         Models used: SVM, Random Forests, Gradient Boosting, or even Local Outlier Factor. 
         Feature extraction with Bag-of-words and PCA.`,
      img: "adv-attacks.png",
      link: "https://github.com/emile-gaudinot/smart-cybersecurity-project",
      skills: ["scikit-learn", "PyTorch", "Wireshark"],
    },
    // {
    //   name: "Local LLM",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "MNE-Python",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "DJ website",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "PROENC",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "P2E",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
  ],
  experience: [
    {
      company: "Fraunhofer Heinrich-Hertz-Institute, Berlin",
      title: "Machine Learning Engineer",
      dateRange: "March 2025 - Present",
      bullets: [
        "Led the development of the ML pipeline for EEG analysis, team of 5",
        "Maintained high code quality and high standards of software development",
        "Master's thesis \"Machine Learning for neurophysiological assessment of proximity in a virtual environment\"",
      ],
    },
    {
      company: "Charité, Berlin",
      title: "Machine Learning Engineer",
      dateRange: "March 2024 - March 2025",
      bullets: [
        "Automated DL approach to enable early detection of Coronary Artery Disease",
        "Coronary artery segmentation on 800 3D images (CTA) of the heart + graph extraction",
        "Tried U-Net, nnU-Net, UNETR, MedSAM. Best Dice-score with U-Net: 0.77",
      ],
    },
    {
      company: "BIFOLD, Berlin",
      title: "Data Scientist - internship",
      dateRange: "September 2023 - February 2024",
      bullets: [
        "Design and implementation of proof-of-concept ML models, to solve cybersecurity problems",
        "Training and fine-tunning of the models",
        "Adversarial Machine Learning Defense, Malware Clustering, Network Intrusion Detection, etc",
      ],
    },
    {
      company: "Solypse, Paris",
      title: "Cybersecurity Engineer",
      dateRange: "September 2022 - March 2023",
      bullets: [
        "Production of cybersecurity reports, using OWASP ZAP",
        "Development of Angular HR apps",
        "Organisation in agile sprints",
      ]
    },
    {
      company: "European Bioinformatics Institute (EMBL-EBI), Cambridge",
      title: "Data Engineer - internship",
      dateRange: "April 2022 - August 2022",
      bullets: [
        "Led the migration of the 7GB database (gene essentiality data) to PostgreSQL",
        "Development of an R Shiny app, to visualize the database",
        "Improvement of the request system, 70% faster",
        "App freely available http://cen-tools.com",
      ],
    },
  ],
  education: [
    {
      school: "Technical University of Berlin",
      degree: "Computer Science M.Sc.",
      dateRange: "2023-2025",
      achievements: [
        "Graduated with 3.97 GPA",
        "Mathematical theory behind ML models and architectures",
        "Hands-on implementation of ML and DL models (scikit-learn, PyTorch)",
      ],
    },
    {
      school: "Ecole Centrale de Nantes",
      degree: "Engineering Degree",
      dateRange: "2020-2022",
      achievements: [
        "Graduated with 3.81 GPA",
        "Specialized in Bioinformatics and Database Management Systems",
        "Highly involved in the associative life (Rugby, Brass Band)",
      ],
    },
    {
      school: "Lycée Hoche, Versailles",
      degree: "CPGE MPSI/MP",
      dateRange: "2018-2020",
      achievements: [
        "Graduated with 4.0 GPA",
        "Intensive preparation for Engineering Schools competitive exams",
        "Maths (linear algebra, analysis, etc), Computer Science (graphs, automata, etc), Physics",
      ],
    },
  ],
};
