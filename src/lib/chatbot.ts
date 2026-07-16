import {
  personal,
  experience,
  projects,
  skills,
  education,
  certificates,
} from "@/data/content";

export type ChatAction = {
  label: string;
  href: string;
};

export type BotReply = {
  text: string;
  action?: ChatAction;
};

type Rule = {
  keywords: string[];
  reply: () => BotReply;
};

const rules: Rule[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "yo"],
    reply: () => ({
      text: `Hey! 👋 I'm ${personal.name}'s assistant. Ask me about his skills, projects, experience, training, or how to get in touch.`,
    }),
  },
  {
    keywords: [
      "skill",
      "tech stack",
      "technology",
      "technologies",
      "stack",
      "language",
    ],
    reply: () => ({
      text: `${personal.name} works with: ${skills.join(", ")}.`,
      action: { label: "View Skills", href: "#skills" },
    }),
  },
  {
    keywords: ["experience", "work", "job", "career", "company", "role"],
    reply: () => {
      const lines = experience
        .map(
          (item) =>
            `${item.role}${item.company ? ` at ${item.company}` : ""} (${item.duration})`
        )
        .join("; ");
      return {
        text: `Professional experience: ${lines}. Overall he has ${personal.experienceYears} of experience.`,
        action: { label: "View Experience", href: "#experience" },
      };
    },
  },
  {
    keywords: [
      "project",
      "portfolio",
      "built",
      "build",
      "sample",
      "app",
      "application",
    ],
    reply: () => {
      const titles = projects.map((p) => p.title).join(", ");
      return {
        text: `Some projects he's built: ${titles}.`,
        action: { label: "View Projects", href: "#projects" },
      };
    },
  },
  {
    keywords: [
      "education",
      "degree",
      "college",
      "university",
      "mca",
      "study",
      "qualification",
    ],
    reply: () => {
      const lines = education
        .map((e) => `${e.degree} — ${e.institution} (${e.duration})`)
        .join("; ");
      return {
        text: `Education: ${lines}.`,
        action: { label: "View Education", href: "#education" },
      };
    },
  },
  {
    keywords: ["certificate", "certification", "certified"],
    reply: () => {
      const lines = certificates
        .map((c) => `${c.title} (${c.issuer})`)
        .join(", ");
      return {
        text: `Certificates: ${lines}.`,
        action: { label: "View Certificates", href: "#certificates" },
      };
    },
  },
  {
    keywords: ["train", "teach", "workshop", "lecture", "mentor", "class"],
    reply: () => ({
      text: `${personal.name} is also a Software Trainer, conducting guest lectures and hands-on workshops on modern web development across Tamil Nadu.`,
      action: { label: "View Training", href: "#training" },
    }),
  },
  {
    keywords: ["youtube", "video", "tutorial", "course"],
    reply: () => ({
      text: `Yes! Check out his YouTube channel for tutorials like "Learn ReactJS for Beginners — Full Course".`,
      action: { label: "Open YouTube", href: personal.youtube },
    }),
  },
  {
    keywords: ["resume", "cv"],
    reply: () => ({
      text: `You can download the resume right here.`,
      action: { label: "Download Resume", href: "/resume.pdf" },
    }),
  },
  {
    keywords: ["goal", "future", "plan", "aim"],
    reply: () => ({
      text: `Short-term: ${personal.goals.shortTerm} Long-term: ${personal.goals.longTerm}`,
    }),
  },
  {
    keywords: ["strength", "good at", "why hire"],
    reply: () => ({
      text: `Strengths: ${personal.strengths.join(", ")}.`,
    }),
  },
  {
    keywords: ["where", "location", "based", "live"],
    reply: () => ({
      text: `${personal.name} is based in ${personal.location}.`,
    }),
  },
  {
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "hire",
      "linkedin",
      "github",
      "connect",
    ],
    reply: () => ({
      text: `You can reach ${personal.name} at ${personal.email} or ${personal.phone}.`,
      action: { label: "Contact", href: "#contact" },
    }),
  },
  {
    keywords: ["who", "about", "yourself", "introduce", "bio"],
    reply: () => ({
      text: personal.about[0],
      action: { label: "About", href: "#about" },
    }),
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye"],
    reply: () => ({
      text: "You're welcome! Feel free to reach out through the Contact section anytime. 😊",
    }),
  },
];

const fallback: BotReply = {
  text: "I'm not totally sure about that — try asking about skills, projects, experience, education, training, or how to get in touch.",
};

export function getBotReply(message: string): BotReply {
  const lower = message.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((keyword) => lower.includes(keyword))) {
      return rule.reply();
    }
  }
  return fallback;
}

export const quickReplies: { label: string; message: string }[] = [
  { label: "Skills", message: "What are your skills?" },
  { label: "Projects", message: "Tell me about your projects" },
  { label: "Experience", message: "What's your work experience?" },
  { label: "Contact", message: "How can I contact you?" },
];

export const greeting = `Hi, I'm ${personal.name}'s assistant 👋 Ask me anything about his skills, projects, experience, or training — or tap a quick option below.`;
