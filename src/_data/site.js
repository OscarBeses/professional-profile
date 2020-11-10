/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  year: `${year}`,
  cookieNoticeEnabled: true,
  lang: "es", // for html tag
  title: "Oscar Beses",
  description: "Perfil Profesional de Oscar Beses",
  url: "", // Don't end with a slash /
  email: "mdopdoal",

  author: {
    name: "OscarBeses",
    email: "oscar.beses@gmail.com",
    legal_email: "oscar.beses@gmail.com", // Show only in legal page
    github: "https://github.com/OscarBeses",
    twitter: "https://twitter.com/oski_bc",
    linkedin: "https://www.linkedin.com/in/oscar-beses",
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "/assets/img/social_image.png", // For Open Graph meta
    locale: "es_ES", // For Open Graph meta
    twitter_username: "@oski_bc", // For Twitter Open Graph meta
  },
};
