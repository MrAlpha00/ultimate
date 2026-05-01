export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    description: "Modern full stack websites",
    image: "/images/web.png",
  },
  {
    id: 2,
    title: "Mobile App Builder",
    category: "Development",
    description: "Cross-platform mobile apps",
    image: "/images/mobile.png",
  },
  {
    id: 3,
    title: "Workflow Automation",
    category: "Automation",
    description: "Automate repetitive tasks",
    image: "/images/automation.png",
  },
  {
    id: 4,
    title: "CI/CD Pipeline",
    category: "Automation",
    description: "Deploy with confidence",
    image: "/images/cicd.png",
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    category: "AI",
    description: "Intelligent conversational AI",
    image: "/images/ai-chat.png",
  },
  {
    id: 6,
    title: "ML Model Training",
    category: "AI",
    description: "Train custom models easily",
    image: "/images/ml.png",
  },
  {
    id: 7,
    title: "Smart Code Editor",
    category: "Editing",
    description: "AI-powered code editing",
    image: "/images/editor.png",
  },
  {
    id: 8,
    title: "Content Rewriter",
    category: "Editing",
    description: "Rewrite and optimize content",
    image: "/images/rewrite.png",
  },
  {
    id: 9,
    title: "SaaS Starter Kit",
    category: "Products",
    description: "Launch your SaaS faster",
    image: "/images/saas.png",
  },
  {
    id: 10,
    title: "Analytics Dashboard",
    category: "Products",
    description: "Track your metrics",
    image: "/images/analytics.png",
  },
  {
    id: 11,
    title: "Full Stack Course",
    category: "Courses",
    description: "Master web development",
    image: "/images/course-web.png",
  },
  {
    id: 12,
    title: "AI Engineering Course",
    category: "Courses",
    description: "Build AI-powered apps",
    image: "/images/course-ai.png",
  },
];

export const categories = [
  "All",
  "Development",
  "Automation",
  "AI",
  "Editing",
  "Products",
  "Courses",
];
