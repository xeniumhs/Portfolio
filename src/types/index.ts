export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}