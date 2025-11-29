export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "remote";
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
  experience: "entry" | "mid" | "senior" | "lead" | "executive";
  postedAt: string;
  featured?: boolean;
  tags: string[];
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  website: string;
  location: string;
  size: string;
  industry: string;
  founded: number;
  jobs: Job[];
}

export interface FilterState {
  search: string;
  category: string;
  type: string;
  experience: string;
  location: string;
  salary: {
    min: number;
    max: number;
  };
}
