export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Constantly looking to bring new ideas to life",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] grid-scrolltrigger",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/pc-screen.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am open to projects all over the world",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/world.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tools",
    description: "What do I use to work ?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I try to learn and improve myself day by day",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I’m currently working on a mobile application focused on fashion and clothing.",
    description: "What am I working on ?",
    className: "md:col-span-3 md:row-span-2 grid-scrolltrigger",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fondation Diaka Camara - Website",
    des: "The Fondation Diaka Camara website is a modern and responsive platform designed to reflect the foundation’s values.",
    img: "/fondation.png",
    iconLists: ["/re.svg", "/tail.svg", "/framer.png"],
    link: "https://fondationdiakacamara.org",
  },
  {
    id: 2,
    title: "Retail Revive Services - Website",
    des: "Retail Revive Services, is a pan-African consultancy that supports local and international companies in their establishment in Africa.",
    img: "/banner_rss.png",
    iconLists: ["/next.svg", "/tail.svg", "/framer.png"],
    link: "https://retailreviveservices.com/fr",
  },
  {
    id: 3,
    title: "AleksicDesign - Designer Portfolio",
    des: "This one consists of creating the portfolio of a graphic designer using React and GSAP.",
    img: "/pfa.PNG",
    iconLists: ["/re.svg", "/gsap.svg"],
    link: "https://aleksdesign-portfolio.netlify.app",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web development",
    desc: "Throughout my formation and personal projects, I have acquired full-stack development skills using React.js, TypeScript and Node.js",
    className: "md:col-span-2",
    thumbnail: "/web-development-icon.svg",
  },
  {
    id: 2,
    title: "Graphic design",
    desc: "As a bachelor's degree holder in visual communication, I have gained foundations in the fundamental principles of graphic design. I have learned to utilize tools such as InDesign, Photoshop, and Illustrator to create visually impactful graphics.",
    className: "md:col-span-2",
    thumbnail: "/graphic-design-icon.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    alt: "github",
    url: "https://github.com/VikzG?tab=repositories",
  },
  {
    id: 2,
    img: "/link.svg",
    alt: "linkedin",
    url: "https://www.linkedin.com/in/jeremyb-frontend/",
  },
];
