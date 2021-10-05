import tiendamusikal from "../assets/tiendamusikal.PNG";
import lacomanda from "../assets/lacomanda.PNG";
import crudApp from "../assets/crudApp.PNG";
import cafeteria from "../assets/cafeteria.JPG";
import superheroes from "../assets/superheroes.JPG";

export const Proyectos = [
  {
    id: 0,
    titulo: "Tienda MusiKal",
    descripcion: "E-commerce de Articulos Musicales",
    used_Tecs: " React Js - Context - Firebase ",
    picture: tiendamusikal,
    url: `https://tienda-musikal.netlify.app/`,
  },

  {
    id: 1,
    titulo: "La Comanda",
    descripcion: "Carrito de Compras para Restaurante La Comanda",
    used_Tecs: "React - Styled Components",
    picture: lacomanda,
    url: `https://la-comanda.netlify.app/`,
  },

  {
    id: 2,
    titulo: "Gestion de Proyectos",
    descripcion: "CRUD App para administrar y hacer seguimiento de proyectos",
    used_Tecs: " React Js - Chakra UI",
    picture: crudApp,
    url: `https://crud-project-app.netlify.app/`,
  },

  {
    id: 3,
    titulo: "La Cafeteria",
    descripcion: "Landing Page realizada con SASS",
    used_Tecs: "Sass",
    picture: cafeteria,
    url: `https://cafeterianueva.netlify.app/`,
  },

  {
    id: 4,
    titulo: "SuperHeroes",
    descripcion: "Buscador de Superheroes (Conexion con Api)",
    used_Tecs: "React Js - Bootstrap - Context",
    picture: superheroes,
    url: ``,
  },
];
