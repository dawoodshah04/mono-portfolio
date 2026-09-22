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
    id: "wallepi",
    title: "Wallepi",
    subtitle: "Next-Gen Android Wallpaper Platform",
    category: "Mobile & Edge Systems",
    description:
      "High-performance mobile wallpaper application engineered with React Native / Expo and powered by a serverless Cloudflare Workers backend with D1 SQL and R2 storage.",
    highlights: [
      "Edge backend on Cloudflare Workers & Hono with composite D1 indexing for O(limit) range scans",
      "Dual-tier image delivery with BlurHash placeholders, 400px WebP thumbnails & native Glide caching",
      "AI ingestion pipeline leveraging AWS Rekognition for automated computer vision tagging",
      "Direct native Android wallpaper setting integration for Home Screen and Lock Screen"
    ],
    tech: ["React Native", "Expo", "Cloudflare Workers", "Hono", "Cloudflare D1", "Cloudflare R2", "AWS Rekognition"],
    githubUrl: "https://github.com/dawoodshah04/wallepi-app",
    featured:false,
    year: "2026"
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
    githubUrl: "https://github.com/dawoodshah04/SwiftChatepi-app",
    year: "2026"
  },
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
    tech: ["Next.js", "TypeScript", "MongoDB Atlas", "Mongoose", "Tailwind CSS", "JWT", "Vercel"],
    liveUrl: "https://tariqaboudhelabi.com",
  
    year: "2025"
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
    githubUrl: "https://github.com/dawoodshah04/tenet-system",
    year: "2026"
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
    githubUrl: "https://github.com/dawoodshah04/MedRemind",
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
    githubUrl: "https://github.com/dawoodshah04/mern-blog",
    year: "2025"
  },

];
