export const personal = {
  name: "Saravanan Sekar",
  role: "Software Developer",
  roles: [
    "React Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Trainer",
  ],
  email: "saravanansekar434@example.com",
  phone: "+91 6380190949",
  linkedin: "https://www.linkedin.com/in/saravanansekar2003/",
  github: "https://github.com/saravananCodeExplorer",
  portfolio: "https://bug2build.redwindow.tech/",
  youtube: "https://www.youtube.com/channel/UCTb_zMC6s3h6fVp-q1YJ7Ag",
  about: [
    "I'm a Software Developer with a passion for building innovative web applications and empowering future developers. I specialize in React, JavaScript, and modern web technologies, delivering scalable and user-focused solutions for clients and businesses.",
    "With experience in both development and training, I bridge the gap between technical expertise and practical learning. Whether developing custom web solutions or mentoring students and professionals, I am committed to delivering quality, fostering growth, and staying at the forefront of technology.",
  ],
};

export const profileImage = "/about/Saravanan.jpeg";

export type TrainingPhoto = {
  src: string;
  caption: string;
  location: string;
};

export const trainingPhotos: TrainingPhoto[] = [
  {
    src: "/assets/poster-kongunadu-vacad.jpg",
    caption: "Value Added Course — Web Application Development",
    location: "Kongunadu College of Engineering & Technology",
  },
  {
    src: "/assets/poster-periyar-guest-lecture.jpg",
    caption: "Guest Lecture — Modern Web Development",
    location: "Periyar Maniammai Institute of Science & Technology",
  },
  {
    src: "/assets/training-vallam-4.jpg",
    caption: "Session on Web Application Architecture",
    location: "Periyar Maniammai University Knowledge Centre, Vallam",
  },
  {
    src: "/assets/training-thoothukudi-1.jpg",
    caption: "Workshop with the Dept. of Computer Science & Business Systems",
    location: "Thoothukudi",
  },
  {
    src: "/assets/training-tholurpatti-2.jpg",
    caption: "Classroom training session",
    location: "Tholurpatti",
  },
  {
    src: "/assets/training-thoothukudi-2.jpg",
    caption: "Hands-on lab session",
    location: "Thoothukudi",
  },
  {
    src: "/assets/award-best-coder.jpg",
    caption: "Recognized for coding excellence",
    location: "Award Ceremony",
  },
  {
    src: "/assets/training-vallam-1.jpg",
    caption: "Web development training session",
    location: "Periyar Maniammai University Knowledge Centre, Vallam",
  },
  {
    src: "/assets/training-vallam-2.jpg",
    caption: "Session on frontend & backend architecture layers",
    location: "Periyar Maniammai University Knowledge Centre, Vallam",
  },
  {
    src: "/assets/training-vallam-3.jpg",
    caption: "Web development fundamentals session",
    location: "Periyar Maniammai University Knowledge Centre, Vallam",
  },
  {
    src: "/assets/training-thoothukudi-3.jpg",
    caption: "Programming fundamentals training",
    location: "Thoothukudi",
  },
  {
    src: "/assets/training-tholurpatti.jpg",
    caption: "Hands-on coding session",
    location: "Tholurpatti",
  },
  {
    src: "/assets/training-git-workshop-1.jpg",
    caption: "Git & version control workshop",
    location: "Classroom Training",
  },
  {
    src: "/assets/training-git-workshop-2.jpg",
    caption: "Git & version control workshop",
    location: "Classroom Training",
  },
  {
    src: "/assets/training-large-hall.jpg",
    caption: "Full-house training session",
    location: "Classroom Training",
  },
  {
    src: "/assets/working-at-laptop.jpg",
    caption: "Building and preparing session material",
    location: "Foxdare Technologies",
  }
];

export const heroTechOrbit = [
  { label: "React", color: "#61dafb" },
  { label: "Next.js", color: "#ffffff" },
  { label: "Node.js", color: "#3c873a" },
  { label: "JavaScript", color: "#f7df1e" },
  { label: "Tailwind", color: "#38bdf8" },
  { label: "MongoDB", color: "#47a248" },
  { label: "MySQL", color: "#00758f" },
  { label: "Express", color: "#a8a8a8" },
  { label: "Redis", color: "#dc382d" },
  { label: "JWT", color: "#a855f7" },
];

export const codeSnippetLines = [
  "const App = () => {",
  "  const [data, setData] =",
  "    useState(null);",
  "",
  "  useEffect(() => {",
  "    fetchData().then(",
  "      setData",
  "    );",
  "  }, []);",
  "",
  "  return <UI data={data} />;",
  "};",
  "",
  "export default App;",
];

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "",
    role: "Software Developer",
    duration: "May 2024 — Present",
    points: [
      "Built and maintained scalable full-stack features using React.js and Node.js/Express REST APIs.",
      "Implemented global state management with Zustand and efficient server-state caching with TanStack Query.",
      "Designed responsive, accessible UI with Tailwind CSS across multiple product surfaces.",
      "Worked extensively with MySQL for schema design, query optimization, and data integrity.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express",
      "REST APIs",
      "Zustand",
      "TanStack Query",
      "MySQL",
      "Responsive UI",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  preview: "iam" | "ecommerce" | "testplatform" | "erp" | "windmill" | "ship";
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "iam",
    title: "Identity & Access Management Platform",
    description:
      "A secure IAM platform with JWT authentication, role-based access control, multi-factor authentication, and background job processing for enterprise-grade access management.",
    tags: [
      "JWT Authentication",
      "RBAC",
      "MFA",
      "Redis",
      "Bull Queue",
      "Next.js",
      "React",
      "Node",
      "PostgreSQL",
      "Tailwind",
    ],
    preview: "iam",
    gradient: "from-neon-cyan via-neon-blue to-neon-purple",
  },
  {
    id: "ecommerce",
    title: "Full Stack E-Commerce",
    description:
      "A complete e-commerce solution with product catalog, shopping cart, secure checkout, JWT-based auth, and a full-featured admin dashboard for managing orders and inventory.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Shopping Cart",
      "Admin Dashboard",
    ],
    preview: "ecommerce",
    gradient: "from-neon-purple via-neon-blue to-neon-cyan",
  },
  {
    id: "testplatform",
    title: "Online Test Platform",
    description:
      "An online examination system with dedicated student and admin panels, timed assessments, and real-time result analytics built for academic institutions.",
    tags: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "Student Panel",
      "Admin Panel",
      "Result Analytics",
    ],
    preview: "testplatform",
    gradient: "from-neon-blue via-neon-purple to-neon-cyan",
  },
  {
    id: "erp-lead-management",
    title: "ERP Lead Management Module",
    description:
      "A responsive ERP Lead Management Module that enables users to manage customer leads efficiently through a clean and reusable React component architecture, integrating with REST APIs using Axios.",
    tags: [
      "React.js",
      "React Router",
      "Axios",
      "JSON Server",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
    ],
    preview: "erp",
    gradient: "from-neon-cyan via-neon-purple to-neon-blue",
  },
  {
    id: "windmill-data-management",
    title: "Windmill Data Management System",
    description:
      "A web-based system to manage and monitor windmill operational data through a centralized platform, tracking wind speed, energy output, turbine status, and maintenance records with interactive dashboards and report generation.",
    tags: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "XAMPP/Apache",
    ],
    preview: "windmill",
    gradient: "from-neon-blue via-neon-cyan to-neon-purple",
  },
  {
    id: "ship-environmental-management",
    title: "Ship Environmental Management System",
    description:
      "A web-based environmental monitoring system for ship operations, featuring user authentication, real-time sensor monitoring, environmental compliance, waste management, crew training, emergency preparedness, and interactive dashboards with Chart.js reporting.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Chart.js",
      "XAMPP",
    ],
    preview: "ship",
    gradient: "from-neon-purple via-neon-cyan to-neon-blue",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Redis",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
];

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "MCA",
    institution: "Alagappa University",
    duration: "2024 — 2026",
    detail: "Master of Computer Applications",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Raja Serfoji Government College",
    duration: "2020 — 2023",
    detail: "Bachelor of Science in Computer Science",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
};

export const certificates: Certificate[] = [
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
  },
  {
    title: "Web Development Professional Certificate",
    issuer: "Professional Certification",
  },
];
