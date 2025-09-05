// TypeScript types for Prismic data structures

export interface PrismicImage {
  alt?: string;
  copyright?: string;
  url: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface PrismicLink {
  url?: string;
  link_type: string;
  uid?: string;
  type?: string;
  target?: string;
}

export interface SocialLink {
  link_name: string;
  link: PrismicLink;
}

export interface HeroSlice {
  slice_type: 'hero';
  variation: string;
  primary: {
    hello_text: string;
    developer_full_name: string;
    developer_bio: string;
    developer_image: PrismicImage;
    social_links: SocialLink[];
  };
}

export interface HeaderLink {
  key?: string;
  url?: string;
  link_type: string;
  text?: string;
}

export interface HeaderSlice {
  slice_type: 'header';
  variation: string;
  primary: {
    logo_text: string;
    logo_link: PrismicLink;
    header_links: HeaderLink[];
    github_link: PrismicLink;
  };
}

export interface Skill {
  skill_name: string;
  skill_logo: PrismicImage;
}

export interface SkillsSlice {
  slice_type: 'skills';
  variation: string;
  primary: {
    badge: string;
    section_description: string;
    skills: Skill[];
  };
}

export interface RichTextSlice {
  slice_type: 'rich_text';
  variation: string;
  primary: {
    content: string;
  };
}

export interface Project {
  title: string;
  description: string;
  image: PrismicImage;
}

export interface ProjectsSlice {
  slice_type: 'projects';
  variation: string;
  primary: {
    badge: string;
    section_description: string;
    projects: Project[];
  };
}

export interface Experience {
  title: string;
  designation: string;
  image: PrismicImage;
  start_time: string;
  end_time?: string;
  currently_working: boolean;
}

export interface ExperiencesSlice {
  slice_type: 'experiences';
  variation: string;
  primary: {
    badge: string;
    section_description: string;
    experiences: Experience[];
  };
}

export interface ContactSlice {
  slice_type: 'contact';
  variation: string;
  primary: {
    badge: string;
    section_description: string;
    name: string;
    designation: string;
    phone: string;
    email: string;
    image: PrismicImage;
  };
}

export interface ExternalLink {
  key?: string;
  url?: string;
  link_type: string;
  text?: string;
}

export interface FooterSlice {
  slice_type: 'footer';
  variation: string;
  primary: {
    name: string;
    designation: string;
    location: string;
    email: string;
    external_links: ExternalLink[];
    footer_credit_text: string;
  };
}

export type SliceType = 
  | HeroSlice 
  | HeaderSlice 
  | SkillsSlice 
  | ProjectsSlice 
  | ExperiencesSlice 
  | ContactSlice 
  | RichTextSlice
  | FooterSlice;

export interface PrismicDocument {
  id: string;
  uid: string;
  type: string;
  data: {
    slices: SliceType[];
    meta_title?: string;
    meta_description?: string;
    meta_image?: PrismicImage;
  };
}
