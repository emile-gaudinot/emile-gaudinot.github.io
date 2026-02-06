export const siteConfig = {
  name: "Emile Gaudinot",
  title: "Data Scientist & Machine Learning Engineer",
  description: "Portfolio website of Emile Gaudinot",
  accentColor: "#55019eff",
  social: {
    // email: 'example@domain.com',
    linkedin: "https://www.linkedin.com/in/emile-gaudinot/",
    // twitter: "twitter.com",
    github: "https://github.com/emile-gaudinot",
  },
  aboutMe:
    `Passionate about building impactful machine learning models, I am fascinated by the fields of 
    medicine - especially brain research - and cybersecurity. As a Machine Learning Engineer with 
    two years of experience and a dual degree in Engineering and Computer Science, I thrive at the 
    intersection of innovation and real-world problem-solving.`,
  skills: ["Python", "scikit-learn", "PyTorch", "MLflow", "R", "SQL"],
  projects: [
    {
      name: "Machine Learning for Medical Image Processing",
      description:
        "Segmentation of coronary arteries from 800 CTA images, in 3D. Extraction of a graph from the arteries, to automate early detection of Coronary Artery Disease. The whole standardized Deep Learning pipeline (U-Net) was deployed to production. Dice-score of 0.77.",
      img: "segm-graph.png",
      link: "https://github.com/emile-gaudinot/ML4MIP",
      skills: ["PyTorch", "MLflow", "MONAI", "nvidia-smi"],
    },
    {
      name: "Publication",
      description:
        "Machine learning for neurophysiological assessment of proximity in a virtual environment. Development of a ML pipeline to predict distances in VR, relying on brain signals. Correlation of 0.45 (twice better than SOTA). Accuracy of 66% for classification proximity/distance.",
      img: "masters-thesis-dist-pred.png",
      link: "masters-thesis-emile-gaudinot.pdf",
      skills: ["MNE-Python", "scikit-learn", "Google Scholar"],
    },
    {
      name: "Local LLM",
      description:
        "Complete application to run open-source LLMs locally using Ollama, with a user-friendly web interface. It works perfectly on your own local machine, with lightweight models you can choose.",
      img: "local-llm.png",
      link: "https://github.com/emile-gaudinot/local-llm",
      skills: ["Ollama", "LLMs", "JavaScript"],
    },
    {
      name: "Smart Cybersecurity Hackathon",
      description:
        `Winner among 24 competitors! Training of various ML models (SVM, RF, GB, etc) to tackle cybersecurity challenges: adversarial attacks/ defences, network intrusion detection, malware detection in documents, etc. Feature extraction with Bag-of-Words and PCA.`,
      img: "adv-attacks.png",
      link: "https://github.com/emile-gaudinot/smart-cybersecurity-project",
      skills: ["scikit-learn", "PyTorch", "Wireshark"],
    },
    {
      name: "MNE-Python Contributor",
      description:
        "Direct collaboration with the core team of MNE-Python, a Python package for EEG and MEG analysis. Expanded the SPoC (Dähne et al., 2014) and SSD (Nikulin et al., 2011) functions. Contributions merged via pull requests, strengthening this open-source neuroscience tool.",
      img: "spoc-patterns.png",
      link: "https://github.com/emile-gaudinot/mne-python",
      skills: ["Python", "MNE", "GitHub"],
    },
    // {
    //   name: "DJ website",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "Memory card - german/french",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    {
      name: "3D Geodesic Meshes of the Heart",
      description:
        "This project provides a robust method to generate 3D geodesic meshes of heart valves, to study their deformations. This is critical for advancing our understanding of pathologies like Mitral Valve Prolapse (~3% of the population).",
      img: "meshes.png",
      link: "https://github.com/emile-gaudinot/geodesic-meshes",
      skills: ["Python", "Gmsh", "pygeodesic"],
    },
  ],
  experience: [
    {
      company: "Fraunhofer Heinrich-Hertz-Institute, Berlin",
      title: "Data Scientist",
      dateRange: "March 2025 - November 2025",
      bullets: [
        "Led the development of the ML pipeline for EEG analysis, team of 5",
        "Maintained high code quality and high standards of software development",
        "Master's thesis \"Machine Learning for neurophysiological assessment of proximity in a virtual environment\"",
      ],
    },
    {
      company: "Charité, Berlin",
      title: "Data Scientist",
      dateRange: "March 2024 - March 2025",
      bullets: [
        "Automated DL approach to enable early detection of Coronary Artery Disease",
        "Coronary artery segmentation on 800 3D images (CTA) of the heart + graph extraction",
        "Tried U-Net, nnU-Net, UNETR, MedSAM. Best Dice-score with U-Net: 0.77",
      ],
    },
    {
      company: "BIFOLD, Berlin",
      title: "Data Scientist - Internship",
      dateRange: "September 2023 - February 2024",
      bullets: [
        "Design and implementation of proof-of-concept ML models to solve cybersecurity problems",
        "Training and fine-tuning of the models",
        "Adversarial Machine Learning Defense, Malware Clustering, Network Intrusion Detection, etc",
      ],
    },
    {
      company: "Solypse, Paris",
      title: "Cybersecurity Engineer",
      dateRange: "September 2022 - March 2023",
      bullets: [
        "Production of cybersecurity reports using OWASP ZAP",
        "Development of Angular HR apps",
        "Organization in agile sprints",
      ]
    },
    {
      company: "European Bioinformatics Institute (EMBL-EBI), Cambridge",
      title: "Data Engineer - Internship",
      dateRange: "April 2022 - August 2022",
      bullets: [
        "Led the migration of the 7GB database (gene essentiality data) to PostgreSQL",
        "Development of an R Shiny app to visualize the database",
        "Improvement of the request system, 70% faster",
        "App freely available http://cen-tools.com",
      ],
    },
  ],
  education: [
    {
      school: "Technical University of Berlin",
      degree: "Applied Mathematics M.Sc.",
      dateRange: "2023-2024",
      achievements: [
        "Graduated with 4.0 GPA",
        "Mathematical theory behind ML models and architectures",
        "Hands-on implementation of ML and DL models (scikit-learn, PyTorch)",
      ],
    },
    {
      school: "Ecole Centrale de Nantes",
      degree: "Engineering Degree",
      dateRange: "2020-2023",
      achievements: [
        "Graduated with 4.0 GPA",
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
