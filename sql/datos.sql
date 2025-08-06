INSERT INTO authors (author, job, photo) VALUES (
  'María López',
  'Desarrolladora Full Stack',
  'https://randomuser.me/api/portraits/women/42.jpg'
);

INSERT INTO form (name, slogan, repo, demo, technologies, description, image, author_id) VALUES (
  'EcoTienda',
  'Compra ecológica, fácil y rápida',
  'https://github.com/marialopez/ecotienda',
  'https://ecotienda.vercel.app',
  'React, Node.js, Express, MongoDB',
  'EcoTienda es una aplicación web que permite a los usuarios comprar productos ecológicos de productores locales. Cuenta con autenticación de usuarios, carrito de compras, panel de administración y pasarela de pagos integrada.',
  'https://placecats.com/bella/300/200',
  1
);

INSERT INTO authors (author, job, photo) VALUES (
  'Adriana Martínez',
  'Frontend Developer',
  'https://randomuser.me/api/portraits/women/56.jpg'
);

INSERT INTO form (name, slogan, repo, demo, technologies, description, image, author_id)
VALUES (
  'Portfolio Pro',
  'Tu portafolio, elevado al siguiente nivel',
  'https://github.com/adriana/portfolio-pro',
  'https://portfolio-pro-demo.netlify.app',
  'React, Tailwind CSS, Node.js',
  'Portfolio Pro es una aplicación web moderna que permite a desarrolladores mostrar sus proyectos de forma elegante y profesional. Incluye secciones personalizables, integración con GitHub y diseño responsive.',
  'https://placecats.com/poppy/300/200',
  2
);