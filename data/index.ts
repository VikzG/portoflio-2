export const navItems = [
  { name: "À propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Expériences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Toujours en quête de nouvelles idées à concrétiser",
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
    title: "Ouvert aux projets partout dans le monde",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/world.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes outils",
    description: "Avec quoi je travaille ?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "J’apprends et je progresse chaque jour",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 grid-scrolltrigger",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Je développe actuellement une application mobile dédiée à la mode et aux vêtements.",
    description: "Sur quoi je travaille ?",
    className: "md:col-span-3 md:row-span-2 grid-scrolltrigger",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Envie de lancer un projet ensemble ?",
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
    title: "Agence Rotharc - Site web",
    des: "Site de mon agence de création de sites web et d’applications sur mesure : direction artistique noir et or, animations soignées et offres présentées en toute transparence.",
    img: "/rotharc.webp",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/framer.png"],
    link: "https://rotharc-agency.com",
  },
  {
    id: 2,
    title: "Les Artisans Sonores - Site web",
    des: "Création du site vitrine des Artisans Sonores, un studio de création d’identités musicales.",
    img: "/las_hero.png",
    iconLists: ["/next.svg", "/framer.png", "/tail.svg"],
    link: "https://lesartisanssonores.com/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Développement web",
    desc: "Au fil de ma formation et de mes projets, j’ai acquis des compétences de développeur full-stack avec React.js, TypeScript et Node.js.",
    className: "md:col-span-2",
    thumbnail: "/web-development-icon.svg",
  },
  {
    id: 2,
    title: "Design graphique",
    desc: "Titulaire d’une licence en communication visuelle, je maîtrise les fondamentaux du design graphique et les outils InDesign, Photoshop et Illustrator pour créer des visuels percutants.",
    className: "md:col-span-2",
    thumbnail: "/graphic-design-icon.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/jeremyb-frontend/",
  },
];
