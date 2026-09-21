export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "csms",
    title: "CSMS",
    subtitle: "Construction Supply Management System",
    category: "Client Production",
    description:
      "A client-commissioned, full-stack enterprise platform live in production. Built with a dual-portal architecture separating customer catalog experiences from operational back-office tools.",
    highlights: [
      "Dual-portal architecture: customer catalog, real-time order tracking & invoices",
      "Administrative dashboard with live inventory tracking and bulk Excel import/export",
      "15+ RESTful API routes with JWT auth, password hashing, and route-level middleware",
      "Deployed on Vercel with automated continuous delivery and custom domain"
    ],
    tech: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Mongoose", "Tailwind CSS", "JWT", "Vercel"],
    liveUrl: "https://tariqaboudhelabi.com",
    featured: true,
    year: "2024"
  },
  {
    id: "swiftchat",
    title: "SwiftChat",
    subtitle: "Real-Time WebSocket Messaging",
    category: "Full-Stack / Real-Time",
    description:
      "High-concurrency instant messaging application engineered on the MERN stack with bidirectional event streams and persistent sessions.",
    highlights: [
      "WebSocket-based instant messaging powered by Socket.io for low-latency delivery",
      "Secure authentication cycle utilizing JWT, protected routes, and session persistence",
      "Dynamic mobile-first interface with responsive theme styling"
    ],
    tech: ["Socket.io", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/dawoodshah04",
    year: "2024"
  },
  {
    id: "adagds",
    title: "ADAGDS",
    subtitle: "Adaptive Distributed App Generation & Deployment",
    category: "Distributed Systems",
    description:
      "Master-worker distributed pipeline orchestrating concurrent generation and packaging of themed React Native mobile applications.",
    highlights: [
      "Python orchestrator with ProcessPoolExecutor coordinating parallelized worker threads",
      "Theme-descriptor compiler generating parameterized apps across 5 market domains",
      "Centralized configuration, telemetry, and distributed task logging with Supabase"
    ],
    tech: ["Python", "ProcessPoolExecutor", "React Native", "Expo", "Supabase"],
    githubUrl: "https://github.com/dawoodshah04",
    year: "2024"
  },
  {
    id: "medremind",
    title: "MedRemind",
    subtitle: "Google Solution Challenge 2025",
    category: "Mobile HealthTech",
    description:
      "Smart medication reminder and health metrics tracker built for the Google Solution Challenge 2025 representing COMSATS University.",
    highlights: [
      "Automated cross-platform scheduling logic with persistent background push alerts",
      "Offline-first synchronization pattern backed by Firebase real-time persistence",
      "Accessible patient UI designed for intuitive daily prescription adherence"
    ],
    tech: ["React Native", "Firebase", "Dart/Flutter", "Push Notifications"],
    githubUrl: "https://github.com/dawoodshah04",
    year: "2025"
  },
  {
    id: "mern-blog",
    title: "MERN Blog",
    subtitle: "Full-Stack CMS with RBAC",
    category: "Full-Stack / CMS",
    description:
      "Content publishing engine with role-based access control, markdown rendering, media upload integration, and structured REST APIs.",
    highlights: [
      "Role-based privilege layers distinguishing public readers from authorized editors",
      "Optimized query caches and paginated feeds for fast article indexing",
      "Comprehensive CRUD endpoints with payload validation and sanitized input"
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    githubUrl: "https://github.com/dawoodshah04",
    year: "2024"
  },
  {
    id: "pricewisepk",
    title: "PriceWisePK",
    subtitle: "E-Commerce Intelligence & Comparison Engine",
    category: "In Active Development",
    description:
      "Data pipeline and price tracking engine indexing catalog inventories and historic price trends across Pakistani e-commerce storefronts.",
    highlights: [
      "Automated scraping and normalization pipelines parsing unstructured store data",
      "Historical price tracking algorithms with threshold drop notification webhooks",
      "Fast cached query interface powered by Next.js and high-throughput backend services"
    ],
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Redis"],
    year: "2025"
  }
];
