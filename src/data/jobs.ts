// data/jobs.ts
// types/jobs.ts
export type Job = {
  title: string;
  description: string;
  location: string;
  type: "full-time" | "part-time";
  href: string;
};

export type JobCategory = {
  category: string;
  jobs: Job[];
};

export const jobCategories: JobCategory[] = [
  {
    category: "engeneering",
    jobs: [
      {
        title: "AI Engineer",
        description: "Build and deploy cutting-edge AI models and systems.",
        location: "San Francisco",
        type: "full-time",
        href: "ai-engineer",
      },
      {
        title: "Design Engineer",
        description: "Bridge the gap between design and engineering.",
        location: "San Francisco",
        type: "full-time",
        href: "design-engineer",
      },
      {
        title: "Product Engineer",
        description: "Own features end-to-end from ideation to delivery.",
        location: "Remote",
        type: "full-time",
        href: "product-engineer",
      },
      {
        title: "Backend Engineer",
        description: "Design and build scalable backend services.",
        location: "San Francisco",
        type: "full-time",
        href: "backend-engineer",
      },
      {
        title: "Software Engineer",
        description: "Develop high-quality software solutions.",
        location: "New York",
        type: "full-time",
        href: "software-engineer",
      },
    ],
  },

  {
    category: "marketing",
    jobs: [
      {
        title: "Marketing Manager",
        description: "Lead marketing campaigns and brand strategy.",
        location: "New York",
        type: "full-time",
        href: "marketing-manager",
      },
      {
        title: "Content Strategist",
        description: "Create compelling content that drives engagement.",
        location: "Remote",
        type: "part-time",
        href: "content-strategist",
      },
      {
        title: "Growth Marketer",
        description: "Drive user acquisition and retention strategies.",
        location: "San Francisco",
        type: "full-time",
        href: "growth-marketer",
      },
    ],
  },

  {
    category: "compliance",
    jobs: [
      {
        title: "Compliance Officer",
        description: "Ensure regulatory compliance across operations.",
        location: "San Francisco",
        type: "full-time",
        href: "compliance-officer",
      },
      {
        title: "Regulatory Analyst",
        description: "Analyze and interpret regulatory requirements.",
        location: "New York",
        type: "full-time",
        href: "regulatory-analyst",
      },
      {
        title: "Compliance Manager",
        description: "Oversee compliance programs and policies.",
        location: "Remote",
        type: "full-time",
        href: "compliance-manager",
      },
    ],
  },

  {
    category: "data",
    jobs: [
      {
        title: "Data Scientist",
        description: "Extract insights from complex datasets.",
        location: "Remote",
        type: "full-time",
        href: "data-scientist",
      },
      {
        title: "Data Analyst",
        description: "Transform data into actionable business insights.",
        location: "San Francisco",
        type: "full-time",
        href: "data-analyst",
      },
      {
        title: "Data Engineer",
        description: "Build and maintain data pipelines and infrastructure.",
        location: "New York",
        type: "full-time",
        href: "data-engineer",
      },
    ],
  },

  {
    category: "finance",
    jobs: [
      {
        title: "Financial Analyst",
        description: "Provide financial analysis and forecasting.",
        location: "New York",
        type: "full-time",
        href: "financial-analyst",
      },
      {
        title: "Accountant",
        description: "Manage financial records and reporting.",
        location: "San Francisco",
        type: "part-time",
        href: "accountant",
      },
      {
        title: "Finance Manager",
        description: "Lead financial planning and strategy.",
        location: "Remote",
        type: "full-time",
        href: "finance-manager",
      },
    ],
  },
];
