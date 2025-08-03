import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import javascriptImg from "../image/kisspng-javascript-logo-product-design-brand-1713939908433-removebg-preview.png";
import reactImg from "../image/images-removebg-preview.png";
import htmlImg from "../image/Other-html-5-icon-removebg-preview.png";
import cssImg from "../image/images-removebg-preview (1).png";
import tailwindImg from "../image/images.png";
import gitImg from "../image/2048px-Git_icon.svg-removebg-preview.png";
import bootStarpImg from "../image/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67-removebg-preview.png";
import projectMovieImg from "../image/Screenshot 2025-07-26 144137.png";
import reactBlogImg from "../image/react-nodejs blog 1.webp";
import materialUiImg from "../image/6aecc665-9f30-4dc7-bacc-880d8e66c7bb.png";
import nextJsImg from "../image/nextjs2106.logowik.com.webp";
import typeScriptImg from "../image/ts-logo-512.webp";
import jsonImg from "../image/images.jpeg";
import vercleimg from "../image/images (1).png";
import githubImg from "../image/github_logo_icon_206752.webp";
import projectCommunicateImg from "../image/Screenshot 2025-07-28 111405.png";
import projectAppleCart from "../image/Screenshot 2025-07-28 112002.png";
import projectShowerCart from "../image/Screenshot 2025-07-28 112418.png";
import blogNextJsimg from "../image/blog Next.js 1.jpg";
import blogTailwindCss from "../image/blog tailwind css.webp"

export interface ISocialMedia {
  id: number;
  icon: React.ReactElement;
  path :string
}

export interface IEducation {
  id: number;
  date: string;
  title: string;
  learned: string;
}
export interface IExperience {
  id: number;
  date: string;
  title: string;
  subject: string;
}
export interface Iprojects {
  id: number;
  imgurl: string;
  linkUrl: string;
  description: string;
}

export interface BlogSection {
  heading: string;
  content?: string;
  list?: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string; // ISO format: YYYY-MM-DD
  tags: string[];
  imageUrl: string;
  sections: BlogSection[];
}

export const socialMedia: ISocialMedia[] = [
  {
    id: 1,
    icon: <InstagramIcon fontSize="large" className="hover:text-pink-500" />,
    path:"https://www.instagram.com/web.developer.front.end?igsh=MXVtb3Q2OWR4dDdkaQ=="
  },
  {
    id: 2,
    icon: <LinkedInIcon fontSize="large" className="hover:text-sky-600" />,
    path:"https://www.linkedin.com/in/hossein-kamali-rousta/"
  },
  {
    id: 3,
    icon: <WhatsAppIcon fontSize="large" className="hover:text-green-600" />,
    path:"https://wa.me/00905461824197"
  },
  {
    id: 4,
    icon: <TelegramIcon fontSize="large" className="hover:text-blue-600" />,
    path:"https://t.me/Hossein_KR63"
  },
];

export const education: IEducation[] = [
  {
    id: 1,
    date: "Feb 2024 - Mar 2024",
    title: "META",
    learned: "React.js",
  },
  {
    id: 2,
    date: "Aug 2023 - Oct 2023 ",
    title: "University of California, Davis",
    learned: "JavaScript",
  },
  {
    id: 3,
    date: "Jan 2023 – May 2023",
    title: "Johns Hopkins University",
    learned: "HTML , CSS , JavaScript",
  },
  {
    id: 4,
    date: "2016",
    title: "Bachelor of Computer",
    learned: "Tehran University",
  },
];

export const skillsImg = [
  {
    id: 1,
    img: javascriptImg,
    title: "javascript",
  },
  {
    id: 2,
    img: reactImg,
    title: " React.js",
  },
  {
    id: 3,
    img: htmlImg,
    title: "Html5",
  },
  {
    id: 4,
    img: cssImg,
    title: "Css3",
  },
  {
    id: 5,
    img: tailwindImg,
    title: "Tailwind Css",
  },
  {
    id: 6,
    img: gitImg,
    title: "Git",
  },
  {
    id: 7,
    img: bootStarpImg,
    title: "Bootstrap",
  },
  {
    id: 8,
    img: materialUiImg,
    title: "Material Ui",
  },
  {
    id: 9,
    img: nextJsImg,
    title: "Next.js",
  },
  {
    id: 10,
    img: typeScriptImg,
    title: "TypeScript",
  }, 
  {
    id: 11,
    img: jsonImg,
    title: "Json",
  },
  {
    id: 12,
    img: vercleimg,
    title: "Vercle",
  },
  {
    id: 13,
    img: githubImg,
    title: "GitHub",
  },
];

export const experience: IExperience[] = [
  {
    id: 1,
    date: "2023 – 2025",
    title: "RobolifeChange",
    subject: "Front-End Developer-React.js",
  },
  {
    id: 2,
    date: "2019 – 2022 ",
    title: "NamaChob",
    subject: "Front-End Developer-HTML5, CSS3,JavaScript.",
  },
];

export const myProject: Iprojects[] = [
  {
    id: 1,
    imgurl: projectMovieImg,
    linkUrl: "https://movies-sisb.vercel.app/",
    description:
      "This project was developed using React, Tailwind CSS, and Material UI to deliver a responsive, user-friendly, and visually consistent interface. The implementation focused on component-based architecture, scalable design patterns, and efficient UI development leveraging both utility-first and pre-built UI components.",
  },
  {
    id: 2,
    imgurl: projectCommunicateImg,
    linkUrl: "https://hossein-kr-website.vercel.app/",
    description:
      "This project was developed using React, Tailwind CSS, and Material UI to deliver a responsive, user-friendly, and visually consistent interface. The implementation focused on component-based architecture, scalable design patterns, and efficient UI development leveraging both utility-first and pre-built UI components.",
  },
  {
    id: 3,
    imgurl: projectAppleCart,
    linkUrl: "https://apple-card.vercel.app/",
    description:
      "This project was developed using React, Tailwind CSS, and Material UI to deliver a responsive, user-friendly, and visually consistent interface. The implementation focused on component-based architecture, scalable design patterns, and efficient UI development leveraging both utility-first and pre-built UI components.",
  },
  {
    id: 4,
    imgurl: projectShowerCart,
    linkUrl: "https://hossein-web-site-two.vercel.app/",
    description:
      "This project was developed using React, Tailwind CSS, and Material UI to deliver a responsive, user-friendly, and visually consistent interface. The implementation focused on component-based architecture, scalable design patterns, and efficient UI development leveraging both utility-first and pre-built UI components.",
  },
];
export const Blogs: BlogPost[] = [
  {
    id: 1,
    title: "Why React Is Still One of the Most Popular Front-End Libraries",
    slug: "why-react-is-still-popular",
    author: "Hossein Kamali",
    date: "2025-07-27",
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    imageUrl: reactBlogImg,
    sections: [
      {
        heading: "Introduction",
        content:
          "In the fast-paced world of front-end development, libraries and frameworks are constantly evolving. Yet React remains one of the most widely used and trusted tools among developers. In this article, we’ll explore the reasons behind React's enduring popularity and why it's still a top choice for building user interfaces.",
      },
      {
        heading: "What is React?",
        content:
          "React is an open-source JavaScript library developed by Facebook for building fast, interactive user interfaces, especially for single-page applications (SPAs).",
      },
      {
        heading: "Key Advantages of React",
        content: "",
        list: [
          "Component-Based Architecture: Build reusable, modular components that make your code cleaner and more maintainable.",
          "Virtual DOM: Improves performance by updating only the parts of the UI that change.",
          "One-Way Data Binding: Makes data flow easier to trace and debug.",
          "Strong Ecosystem: Tools like Next.js, Redux, React Router, and React Query expand its capabilities.",
          "Large Community Support: Huge community, rich documentation, and tons of tutorials and open-source packages.",
        ],
      },
      {
        heading: "Big Companies Using React",
        list: ["Facebook", "Instagram", "Netflix", "Airbnb", "Uber"],
      },
      {
        heading: "How React Compares to Vue and Angular",
        content:
          "React is more flexible and unopinionated compared to Angular, which is more of a full-fledged framework. It also offers more scalability and community support than Vue, especially in enterprise-level applications.",
      },
      {
        heading: "My Experience with React",
        content:
          "I used React to build a movie filtering web app with custom components, data fetching using React Query, and responsive design using Tailwind CSS.",
      },
      {
        heading: "Conclusion",
        content:
          "If you're looking for a fast, scalable, and developer-friendly solution for building modern web apps, React is still one of the best choices out there.",
      },
    ],
  },
 {
  id:2,
  title: "Why Developers Choose Next.js for Modern Web Applications",
  slug: "why-developers-choose-nextjs",
  author: "Hossein Kamali",
  date: "2025-07-27",
  tags: ["Next.js", "React", "Frontend", "Web Development", "SSR", "SSG"],
  imageUrl: blogNextJsimg,
  sections: [
    {
      heading: "Introduction",
      content: "In today’s fast-moving web development landscape, developers are looking for tools that provide speed, flexibility, and great performance out of the box. Next.js, a powerful React framework built by Vercel, has quickly become the go-to choice for building fast, scalable, and SEO-friendly web applications."
    },
    {
      heading: "What is Next.js?",
      content: "Next.js is a React-based framework that simplifies many aspects of web development. It supports features like server-side rendering (SSR), static site generation (SSG), dynamic routing, and built-in API routes—all without needing complex configurations."
    },
    {
      heading: "Key Features of Next.js",
      list: [
        "File-based Routing: Pages are created by simply adding files in the /pages directory.",
        "Server-Side Rendering (SSR): Pages can be rendered on the server for better performance and SEO.",
        "Static Site Generation (SSG): Ideal for blogs, portfolios, and marketing pages—content is pre-rendered at build time.",
        "API Routes: Build backend endpoints directly inside your Next.js project without needing a separate server.",
        "Image Optimization: The <Image> component automatically optimizes images for better performance.",
        "Built-in CSS and CSS Modules Support: Write styles with global CSS or scoped modules with zero config."
      ]
    },
    {
      heading: "Why Developers Love It",
      list: [
        "Improved Performance: Features like code splitting, lazy loading, and optimized bundles make apps faster.",
        "Zero Configuration: Next.js comes with smart defaults and works out-of-the-box.",
        "Strong Community & Ecosystem: Official plugins, extensive documentation, and Vercel’s deployment platform make it easy to scale.",
        "Perfect for SEO: With SSR and metadata control, Next.js is a great choice for SEO-driven sites."
      ]
    },
    {
      heading: "Use Cases",
      list: [
        "Company landing pages",
        "Developer portfolios",
        "Blogs and documentation sites",
        "Full-stack apps with authentication & backend",
        "E-commerce stores (e.g., with Stripe integration)"
      ]
    },
    {
      heading: "My Experience with Next.js",
      content: "I used Next.js to build a personal blog and portfolio website with dynamic routing, static generation for blog posts, and deployment on Vercel. Tailwind CSS was used for styling, and the built-in API routes handled contact form submissions. The performance, simplicity, and development speed were significantly better than traditional React apps."
    },
    {
      heading: "Conclusion",
      content: "Next.js combines the flexibility of React with powerful features for performance, SEO, and developer experience. Whether you're building a simple blog or a complex web app, Next.js provides everything you need to deliver modern, production-ready applications efficiently."
    }
  ]
},
{
  id:3,
  title: "Why Tailwind CSS Is Changing the Way Developers Build Interfaces",
  slug: "why-tailwind-css-is-popular",
  author: "Hossein Kamali",
  date: "2025-07-27",
  tags: ["Tailwind CSS", "CSS Framework", "Frontend", "Responsive Design", "UI"],
  imageUrl: blogTailwindCss,
  sections: [
    {
      heading: "Introduction",
      content: "Tailwind CSS has rapidly grown in popularity among developers and designers for building fast, clean, and responsive user interfaces. Unlike traditional CSS frameworks like Bootstrap, Tailwind introduces a utility-first approach that offers maximum flexibility without writing custom CSS."
    },
    {
      heading: "What is Tailwind CSS?",
      content: "Tailwind CSS is a utility-first CSS framework that provides low-level classes like 'flex', 'p-4', 'text-center', and 'bg-blue-500' to build custom designs directly in your HTML or JSX. Instead of pre-styled components, it gives you building blocks to create any design."
    },
    {
      heading: "Key Features of Tailwind",
      list: [
        "Utility-First Classes: Design anything without leaving your markup.",
        "Responsive Design: Use responsive prefixes like md:, lg: for mobile-first development.",
        "Customization: Fully customizable via the tailwind.config.js file.",
        "Dark Mode Support: Built-in dark mode with simple class toggling.",
        "Plugin Ecosystem: A strong ecosystem of plugins like typography, forms, and aspect-ratio.",
        "JIT Engine: The Just-In-Time compiler generates styles on demand for better performance."
      ]
    },
    {
      heading: "Why Developers Use It",
      list: [
        "Faster Development: No need to write custom CSS—just use utility classes.",
        "Better Consistency: Enforces consistent design tokens (spacing, font sizes, colors).",
        "Small Bundle Size: Only the classes you use are compiled, making CSS smaller.",
        "Works Well with React, Next.js, Vue, and more: Easy to integrate into any modern frontend framework."
      ]
    },
    {
      heading: "Use Cases",
      list: [
        "Dashboards and admin panels",
        "Landing pages",
        "E-commerce UIs",
        "Component libraries",
        "Blogs and documentation"
      ]
    },
    {
      heading: "My Experience with Tailwind",
      content: "In my projects, Tailwind CSS drastically improved the development speed and design consistency. I no longer need to jump between HTML and CSS files. Tailwind works especially well with React and frameworks like Next.js, making UI development faster and more scalable."
    },
    {
      heading: "Conclusion",
      content: "Tailwind CSS offers a fresh and efficient approach to styling web apps. It empowers developers to create custom designs faster, cleaner, and more consistently—making it a must-have tool in the modern frontend toolkit."
    }
  ]
}


];
