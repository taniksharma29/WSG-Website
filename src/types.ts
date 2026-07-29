export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'LEAGUE' | 'SPORTS EVENT' | 'DEVELOPMENT';
  image: string;
  location?: string;
  stats?: { label: string; value: string }[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
