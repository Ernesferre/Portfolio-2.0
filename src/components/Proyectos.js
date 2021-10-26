import tiendamusikal from "../assets/tiendamusikal.PNG";
import lacomanda from "../assets/lacomanda.PNG";
import crudApp from "../assets/crudApp.PNG";
import cafeteria from "../assets/cafeteria.JPG";
import ficticia_seguros from "../assets/ficticia_seguros.JPG";
import superheroes from "../assets/superheroes.JPG";
import movies from "../assets/movies.JPG";

export const Proyectos = [
  {
    id: 0,
    titulo: "My Movies",
    descripcion:
      "Despliegue de lista de peliculas desde API y modificacion de criterio de ordenamiento, Responsive design, Infinit-scroll",
    used_Tecs: " React Js - Charkra UI ",
    picture: movies,
    url: `https://app-mymovies.netlify.app/`,
  },

  {
    id: 1,
    titulo: "Tienda MusiKal",
    descripcion: "E-commerce de Articulos Musicales",
    used_Tecs: " React Js - Context - Firebase ",
    picture: tiendamusikal,
    url: `https://tienda-musikal.netlify.app/`,
  },

  {
    id: 2,
    titulo: "La Comanda",
    descripcion: "Carrito de Compras para Restaurante La Comanda",
    used_Tecs: "React Js - Styled Components",
    picture: lacomanda,
    url: `https://la-comanda.netlify.app/`,
  },

  {
    id: 3,
    titulo: "Gestion de Proyectos",
    descripcion: "CRUD App para administrar y hacer seguimiento de proyectos",
    used_Tecs: " React Js - Chakra UI",
    picture: crudApp,
    url: `https://crud-project-app.netlify.app/`,
  },

  {
    id: 4,
    titulo: "La Cafeteria",
    descripcion: "Landing Page realizada con SASS",
    used_Tecs: "Sass - Html - Css",
    picture: cafeteria,
    url: `https://cafeterianueva.netlify.app/`,
  },

  {
    id: 5,
    titulo: "Ficticia Seguros Sa",
    descripcion:
      "Validacion de usuarios, alta, baja, lectura y modificacion, Responsive Design",
    used_Tecs: "React Js - Chakra UI",
    picture: ficticia_seguros,
    url: `https://ficticia-seguros-sa.netlify.app/`,
  },

  // {
  //   id: 5,
  //   titulo: "SuperHeroes",
  //   descripcion: "Buscador de Superheroes (Conexion con Api)",
  //   used_Tecs: "React Js - Bootstrap - Context",
  //   picture: superheroes,
  //   url: ``,
  // },
];
