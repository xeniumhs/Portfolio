import { IconType } from "react-icons";

export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  placeholderIcon: IconType;

  github?: string;
  demo?: string;
  youtube?: string;

  layout: "wide" | "normal";

  status?: "completed" | "working";
  featured?: boolean;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  icon: React.ElementType;
  certificateUrl: string;
};
