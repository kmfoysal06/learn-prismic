// Basic types for Prismic content - simplified for React version
export interface ImageField {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface LinkField {
  url?: string;
  text?: string;
}

export interface SocialLink {
  link_name?: string;
  link?: LinkField;
}

export interface Project {
  title?: string;
  description?: string;
  image?: ImageField;
}

export interface Skill {
  skill_name?: string;
  skill_icon?: ImageField;
}

export interface Experience {
  title?: string;
  company?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
}

export interface HeroSlice {
  slice_type: "hero";
  variation: string;
  primary: {
    developer_full_name?: string;
    developer_bio?: string;
    hello_text?: string;
    developer_image?: ImageField;
    social_links: SocialLink[];
  };
}

export interface HeaderSlice {
  slice_type: "header";
  variation: string;
  primary: {
    logo_text?: string;
    logo?: ImageField;
    logo_link?: LinkField;
    header_links: LinkField[];
    github_link?: LinkField;
  };
}

export interface ContactSlice {
  slice_type: "contact";
  variation: string;
  primary: {
    badge?: string;
    section_description?: string;
    name?: string;
    designation?: string;
    phone?: string;
    email?: string;
    image?: ImageField;
  };
}

export interface ProjectsSlice {
  slice_type: "projects";
  variation: string;
  primary: {
    badge?: string;
    section_description?: string;
    projects: Project[];
  };
}

export interface SkillsSlice {
  slice_type: "skills";
  variation: string;
  primary: {
    badge?: string;
    section_description?: string;
    skills: Skill[];
  };
}

export interface FooterSlice {
  slice_type: "footer";
  variation: string;
  primary: {
    name?: string;
    designation?: string;
    location?: string;
    email?: string;
    footer_credit_text?: string;
    external_links: LinkField[];
  };
}

export type SliceType = HeroSlice | HeaderSlice | ContactSlice | ProjectsSlice | SkillsSlice | FooterSlice;