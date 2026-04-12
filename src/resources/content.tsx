import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ratul",
  lastName: "",
  name: `MD. Ratul`,
  role: "ERP & Full-Stack Software Engineer",
  avatar: "/images/Ratul_PF.jpg",
  email: "mdratul47782@gmail.com",
  location: "Asia/Dhaka",
  languages: ["English", "Bengali"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on full-stack development, ERP systems, and modern web engineering.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mdratul47782?tab=repositories",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/md-ratul-05a366283",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:mdratul47782@gmail.com`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning complex systems into clean, scalable software</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">FG Warehouse MS</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/fg-warehouse-management-system",
  },
  subline: (
    <>
      I'm Ratul, an ERP &amp; Full-Stack Engineer at{" "}
      <Text as="span" size="xl" weight="strong">HKD Outdoor Innovations Ltd.</Text>,
      building production, quality, and warehouse systems. <br /> After hours, I push the boundaries of what web apps can do.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Dhaka, Bangladesh`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://md-ratuls-portfulio.vercel.app/#Home",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        MD. Ratul is a Full-Stack Developer and ERP Engineer with a passion for building
        scalable, high-performance applications that streamline real-world business operations. With
        hands-on experience in manufacturing ERP systems, he specializes in Next.js, React, Node.js,
        MongoDB, and GraphQL — bridging the gap between enterprise software needs and modern web
        engineering.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "HKD Outdoor Innovations Limited",
        timeframe: "Nov 2025 - Present",
        role: "Executive – ERP Software Engineer",
        achievements: [
          <>
            Designed and developed ERP software modules for Quality, Production, Maintenance, HR,
            and FG Warehouse operations running live on the factory floor.
          </>,
          <>
            Built and customized system workflows to streamline business processes, integrating ERP
            functionalities across multiple departments for accurate data flow and process coordination.
          </>,
          <>
            Supported automation and reporting features — including real-time dashboards, barcode
            printing pipelines, and role-based access control — to enhance decision-making and
            day-to-day productivity.
          </>,
        ],
        images: [
          {
            src: "/images/hkd_building_hero_16x9.webp",
            alt: "HKD Office Building",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Battery Low Interactive Ltd.",
        timeframe: "July 2024 - Oct 2024",
        role: "Web Developer ",
        achievements: [
          <>
            Developed and maintained responsive websites using React, JavaScript, and CSS to improve
            user experience and web performance.
          </>,
          <>
            Led a project group, conducting code reviews and debugging to ensure high-quality
            deliverables and on-time project completion.
          </>,
        ],
        images: [{
            src: "/images/Screenshot 2026-04-12 154842.png",
            alt: "HKD Office Building",
            width: 16,
            height: 9,
          },],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Green University of Bangladesh",
        description: (
          <>
            Bachelor of Science in Computer Science and Engineering (2020 – 2024), Dhaka.
          </>
        ),
      },
      {
        name: "IEEE QPAIN 2025 – Published Research",
        description: (
          <>
            Presented <em>Advancing Plant Disease Detection with Deep Learning</em> — a custom
            PlantNet model achieving 94.08% accuracy, surpassing CNN, InceptionV3, and VGG16
            benchmarks. Paper ID: 214.
          </>
        ),
      },
      {
        name: "React Accelerator – Learn With Sumit",
        description: (
          <>
            5-month intensive program covering React, Next.js, state management, and advanced
            ecosystem tools. Built 15+ real-world projects including a Learning Management Platform.
          </>
        ),
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Full-Stack & ERP Development",
      description: (
        <>
          Building end-to-end production-grade ERP and web applications with Next.js App Router,
          React 19, Node.js, Express.js, and TypeScript — deployed and running live in factory
          environments, including manufacturing and ERP systems.
        </>
      ),
      tags: [
        { name: "Next.js 15", icon: "nextjs" },
        { name: "React 19", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "ERP Systems", icon: "settings" },
        { name: "Manufacturing Systems", icon: "factory" },
      ],
      images: [
        {
          src: "/images/projects/project-01/full-stack-development-2.jpg",
          alt: "ERP Dashboard",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Database, Backend & Real-time Systems",
      description: (
        <>
          Designing scalable backends with MongoDB, PostgreSQL, Prisma, GraphQL, and Socket.IO —
          including real-time data synchronization, barcode pipelines, API integrations, and
          multi-warehouse inventory systems.
        </>
      ),
      tags: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Prisma", icon: "prisma" },
        { name: "GraphQL", icon: "graphql" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "API Integration", icon: "api" },
        { name: "Axios", icon: "axios" },
      ],
      images: [
        {
          src: "/images/projects/project-01/SkillsRequiredtoBecomeaBackendDeveloper.png",
          alt: "Backend Architecture",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Frontend, Styling & State Management",
      description: (
        <>
          Crafting modern, responsive UIs using Tailwind CSS, TanStack Query, and optimized
          state/data fetching patterns in Next.js applications.
        </>
      ),
      tags: [
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "TanStack Query", icon: "reactquery" },
      ],
      images: [
        {
          src: "/images/projects/project-01/cover-03.jpg",
          alt: "Frontend UI",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Authentication, Tools & Workflow",
      description: (
        <>
          Implementing secure authentication and efficient development workflows using NextAuth,
          Firebase, Git, and GitHub for version control and collaboration.
        </>
      ),
      tags: [
        { name: "NextAuth", icon: "nextauth" },
        { name: "Firebase", icon: "firebase" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
      ],
      images: [
        {
          src: "/images/projects/project-01/images.avif",
          alt: "Dev Tools",
          width: 16,
          height: 9,
        },
      ],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about ERP, full-stack dev & engineering...",
  description: `Read what ${person.name} has been building and learning recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `ERP systems and full-stack web projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
  // 🔹 Gallery Images
  // { src: "/images/gallery/horizontal-1.jpg", alt: "horizontal 1", orientation: "horizontal" },
  // { src: "/images/gallery/horizontal-2.jpg", alt: "horizontal 2", orientation: "horizontal" },
  // { src: "/images/gallery/horizontal-3.jpg", alt: "horizontal 3", orientation: "horizontal" },
  // { src: "/images/gallery/horizontal-4.jpg", alt: "horizontal 4", orientation: "horizontal" },

  // { src: "/images/gallery/vertical-1.jpg", alt: "vertical 1", orientation: "vertical" },
  // { src: "/images/gallery/vertical-2.jpg", alt: "vertical 2", orientation: "vertical" },
  // { src: "/images/gallery/vertical-3.jpg", alt: "vertical 3", orientation: "vertical" },
  // { src: "/images/gallery/vertical-4.jpg", alt: "vertical 4", orientation: "vertical" },

  // // 🔹 OG
  // { src: "/images/og/home.jpg", alt: "home og image", orientation: "horizontal" },

  // 🔹 Project Images
  // { src: "/images/projects/project-01/avatar-01.jpg", alt: "avatar", orientation: "square" },

  // { src: "/images/projects/project-01/cover-01.jpg", alt: "cover 1", orientation: "horizontal" },
  // { src: "/images/projects/project-01/cover-02.jpg", alt: "cover 2", orientation: "horizontal" },
  // { src: "/images/projects/project-01/cover-03.jpg", alt: "cover 3", orientation: "horizontal" },
  // { src: "/images/projects/project-01/cover-04.jpg", alt: "cover 4", orientation: "horizontal" },

  // { src: "/images/projects/project-01/image-01.jpg", alt: "project image 1", orientation: "horizontal" },
  // { src: "/images/projects/project-01/image-02.jpg", alt: "project image 2", orientation: "horizontal" },
  // { src: "/images/projects/project-01/image-03.jpg", alt: "project image 3", orientation: "horizontal" },

  

  { src: "/images/projects/project-01/Screenshot 2026-04-12 073936.png", alt: "screenshot 1", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 074224.png", alt: "screenshot 2", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 074320.png", alt: "screenshot 3", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080008.png", alt: "screenshot 4", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080046.png", alt: "screenshot 5", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080557.png", alt: "screenshot 6", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080621.png", alt: "screenshot 7", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080652.png", alt: "screenshot 8", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080714.png", alt: "screenshot 9", orientation: "horizontal" },
  { src: "/images/projects/project-01/Screenshot 2026-04-12 080735.png", alt: "screenshot 10", orientation: "horizontal" },

  // 🔹 Root Images
  // { src: "/images/avatar.jpg", alt: "avatar", orientation: "square" },
  // { src: "/images/projects/project-01/full-stack-development-2.jpg", alt: "full stack dev", orientation: "horizontal" },

  // { src: "/images/projects/project-01/SkillsRequiredtoBecomeaBackendDeveloper.png", alt: "backend skills", orientation: "horizontal" },
  // { src: "/images/Ratul_PF.jpg", alt: "ratul profile", orientation: "square" },
  // { src: "/images/hkd_building_hero_16x9.webp", alt: "hero building", orientation: "horizontal" },
  // { src: "/images/Screenshot 2026-04-12 154842.png", alt: "root screenshot", orientation: "horizontal" },
],
};

export { person, social, newsletter, home, about, blog, work, gallery };