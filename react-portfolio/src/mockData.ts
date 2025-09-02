import { SliceType } from "./types";

// Sample data that simulates what would come from Prismic CMS
export const mockData: SliceType[] = [
  {
    slice_type: "header",
    variation: "default",
    primary: {
      logo_text: "Foysal",
      logo_link: {
        url: "/",
        text: "Home"
      },
      header_links: [
        { url: "#hero", text: "Home" },
        { url: "#skills", text: "Skills" },
        { url: "#projects", text: "Projects" },
        { url: "#contact", text: "Contact" }
      ],
      github_link: {
        url: "https://github.com/kmfoysal06",
        text: "GitHub"
      }
    }
  },
  {
    slice_type: "hero",
    variation: "default",
    primary: {
      hello_text: "Hello, I am",
      developer_full_name: "Kazi Mohammad Foysal",
      developer_bio: "I have been exploring web development for almost 4 years. After 2021 I strongly started learning WordPress In Depth. I started Developing simple WordPress Plugin and Theme. and successfully published some WordPress Plugins and Themes in The WordPress Plugin and Theme Directory. Earlier I Did Developed A WordPress Plugin That Let Admin of The Site To Create Portfolio With Input From Dashboard Where I Used PHP OOP for Maintainable Code, Webpack for Compiling SASS, JS, TailWindCSS and WordPress Option API.",
      developer_image: {
        url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHw2fHxlbXBsb3llZXxlbnwwfHx8fDE3NTU4Mzg2NTB8MA&ixlib=rb-4.1.0&q=85&rect=0,1000,4000,4000&w=500&h=500",
        alt: "Developer photo"
      },
      social_links: [
        {
          link_name: "Facebook",
          link: { url: "https://facebook.com/kmfoysal06" }
        },
        {
          link_name: "Twitter",
          link: { url: "https://twitter.com/kmfoysal06" }
        },
        {
          link_name: "LinkedIn",
          link: { url: "https://linkedin.com/in/kmfoysal06" }
        }
      ]
    }
  },
  {
    slice_type: "skills",
    variation: "default",
    primary: {
      badge: "Skills",
      section_description: "Technologies and tools I work with",
      skills: [
        {
          skill_name: "JavaScript",
          skill_icon: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
        },
        {
          skill_name: "React",
          skill_icon: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        },
        {
          skill_name: "PHP",
          skill_icon: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
        },
        {
          skill_name: "WordPress",
          skill_icon: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" }
        },
        {
          skill_name: "Node.js",
          skill_icon: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
        },
        {
          skill_name: "CSS3",
          skill_icon: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
        }
      ]
    }
  },
  {
    slice_type: "projects",
    variation: "default",
    primary: {
      badge: "Projects",
      section_description: "Some of my featured work",
      projects: [
        {
          title: "WordPress Plugin Development",
          description: "Custom plugins for WordPress websites with advanced functionality",
          image: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop" }
        },
        {
          title: "React Portfolio Website",
          description: "Modern portfolio built with React and TypeScript",
          image: { url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop" }
        },
        {
          title: "E-commerce Solution",
          description: "Full-stack e-commerce platform with payment integration",
          image: { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop" }
        }
      ]
    }
  },
  {
    slice_type: "contact",
    variation: "default",
    primary: {
      badge: "Contact",
      section_description: "Get in touch with me",
      name: "Kazi Mohammad Foysal",
      designation: "Full Stack Developer",
      phone: "+880 1234 567890",
      email: "contact@kmfoysal06.com",
      image: {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop",
        alt: "Contact"
      }
    }
  },
  {
    slice_type: "footer",
    variation: "default",
    primary: {
      name: "Kazi Mohammad Foysal",
      designation: "Full Stack Developer",
      location: "Bangladesh",
      email: "contact@kmfoysal06.com",
      footer_credit_text: "© [current_year] Kazi Mohammad Foysal. All rights reserved.",
      external_links: [
        { url: "https://blog.kmfoysal06.com", text: "Blog" },
        { url: "https://github.com/kmfoysal06", text: "GitHub" },
        { url: "https://linkedin.com/in/kmfoysal06", text: "LinkedIn" }
      ]
    }
  }
];