export interface SkillCategory {
  title: string;
  code: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    code: "01",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C / C++", "SQL", "Dart"]
  },
  {
    title: "Frontend Engineering",
    code: "02",
    items: ["React.js", "Next.js 16", "React Native", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"]
  },
  {
    title: "Backend & Systems",
    code: "03",
    items: ["Node.js", "Express.js", "Hono", "FastAPI", "Next.js API Routes", "Socket.io", "RESTful APIs", "JWT Auth"]
  },
  {
    title: "Databases & Storage",
    code: "04",
    items: ["MongoDB Atlas", "PostgreSQL", "Cloudflare D1 / R2", "MySQL", "Redis", "Firebase", "Supabase"]
  },
  {
    title: "Cloud & DevOps",
    code: "05",
    items: ["Docker", "Cloudflare Workers", "AWS (EC2/S3)", "Vercel", "Linux (Ubuntu / Arch WSL2)", "Git / GitHub Actions"]
  },
  {
    title: "AI",
    code: "06",
    items: ["Claude API", "AWS Rekognition", "Ollama / Llama 3", "CUDA", "LLM Integration", "RAG"]
  }
];
