import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import './estilos.css';

export default function SelectionDemo() {
  const [selection, setSelection] = useState([]);
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        Nombre: "Iñigo Aceves",
        Puesto: "Gerente General",
        Descripcion: "link",
      },
      //Inicio de Gerencias
      children: [
        //Gerencia de Administracion y finanzas LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Antonio Topete Procel",
            Puesto: "Gerente de administración y finanzas",
            Descripcion: "link",
          },
          //Areas
          children: [
            {
              //Area sistemas
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Ricardo",
                Puesto: "Jefatura de sistemas",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Misael",
                    Puesto: "Desarrollador JR",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Jorge",
                    Puesto: "Técnico de sistemas",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            },
            {
              //Area Contador general
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Velman",
                Puesto: "Contador general",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            {
              //Area Responsable de tesoreria
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Cesar",
                Puesto: "Respnsable de tesorería",
                Descripcion: "link",
              },
            },
            {
              //Area Jefe de costos
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de costos",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de costos",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de bascula (2)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "analista de costos",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            {
              //Area Supervisor de contabilidad
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Supervisor de contabilidad",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Coordinador de crédito y cartera mascotas",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Coordinador de crédito y cartera pecuario",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "auditor interno administrativo",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            {
              //Coordinador administrativo
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Coordinador administrativo",
                Descripcion: "link",
              },
            },
          ], //Fin de las Areas
        },
        //Gerencia comercial LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Roman Soto Trujillo",
            Puesto: "Director Comercial",
            Descripcion: "link",
          },
          //Areas
          children: [
            {
              //Area Gerente de division OCCIDENTE-NORTE-PÁCIFICO
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Adriana Zambrano",
                Puesto: "Gerente de división OCCIDENTE-NORTE-PÁCIFICO",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Carlos Miranda",
                    Puesto: "Gerente de zona QRO-GTO-MICH",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Fernando Ramos",
                    Puesto: "Gerente de zona SLP-AG-ZAC",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Bonifacio Zuñiga",
                    Puesto: "Gerente de zona NL-TAM",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Nallely Anaid O.",
                    Puesto: "Gerente de zona Pácifico",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Vacante",
                    Puesto: "Gerente de zona JAL-COL-NAY",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Vacante",
                    Puesto: "Gerente de zona  CHI-DUR-COA",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            },
            {
              //Area Gerente kam moderno VDM
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Fernanda Jarquín",
                Puesto: "Gerente kam moderno VDM",
                Descripcion: "link",
              },
            },
            {
              //Area Gerente kan de E-Commerce y MKT
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Tania Castillo",
                Puesto: "Gerente de KAN E-COMMERCE y MKT",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Eduardo Roa",
                    Puesto: "Asistente MKT/E-Commerce",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Israel Álvarez",
                    Puesto: "Coordinador de E-Commerce",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            },
            {
              //Area Gerente kam mayorista PDV
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Vacante",
                Puesto: " Gerente kam mayorista PDV",
                Descripcion: "link",
              },
            },
            {
              //Area Gerente kam grandes distribuidores a chngarro/mayoristas
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Vacante",
                Puesto:
                  "Gerente kam grandes distribuidores a chngarro/mayoristas",
                Descripcion: "link",
              },
            },
            {
              //Area Gerente de division VDM-CENTRO-SUR
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Susana Mendieta",
                Puesto: "Gerente de división VDM-CENTRO-SUR",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Mariana Rosales",
                    Puesto: "Gerente de zona CDMX-ORIENTE-CENTRAL DE ABASTOS",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Arturo Santiago Leones",
                    Puesto: "Gerente de zona CENTRO-NORTE-HIDALGO",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "MArco Corona",
                    Puesto: "Gerente de zona TLAX-VER",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Gerardo García",
                    Puesto: "Gerente de zona VDM-PONIENTE-EDO",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Leonardo Rosales",
                    Puesto: "Gerente de zona VDM MORELOS-GUERRERO",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Vacante",
                    Puesto: "Gerente de zona PUE-OAX",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            },
            {
              //Area Responsable de operación comercial
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "María Shavenny Ávila",
                Puesto: "Responsable de operación comercial",
                Descripcion: "link",
              },
            },
          ], //Fin de Areas
        },
        //Gerencia de logistica y abstecimiento LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Juan Francisco Sánchez García",
            Puesto: "Gerente de Logistica y abastecimiento",
            Descripcion: "link",
          }, //Areas
          children: [
            {
              //Area Jefe de trafico
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de tráfico",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de tráfico",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Chofer comisionista (4)",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Chofer transporte de personal (5)",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Chofer mensajero",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Analista de tráfico",
                    Descripcion: "link",
                  },
                },
              ], //Fn de Elementos dependientes
            },
            {
              //Area Responsable de bodega estacion

              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de bodega estación",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Encargado de bascula",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Estibador de bodega estacion (2)",
                    Descripcion: "link",
                  },
                },
              ], //Fn de Elementos dependientes
            },
            {
              //Area Analista de logistica
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Analista de logistica",
                Descripcion: "link",
              },
            },
            {
              //Area Coordinador de compras
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Coordinador de compras",
                Descripcion: "link",
              },
            },
            {
              //Area Responsable de compras
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de compras",
                Descripcion: "link",
              },
            },
            {
              //Area Traine
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Traine",
                Descripcion: "link",
              },
            },
          ], //Fin de Areas
        },
        //Gerencia de aseguramiento de calidad LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "José Cervantes",
            Puesto: "Gerente de aseguramiento de calidad",
            Descripcion: "link",
          },
          children: [
            {
              //Area Jefe de SGC
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe del SGC",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Auditor del SGC",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Gestor del sistema de calidad",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Coordinador de asuntos regulatorios",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            }, //Nueva area
            {
              //Area Jefe de laboratorio
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de laboratorio",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor de calidad en proceso (6)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Analista de aseguramiento de calidad (2)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Muestreador de aseguramiento de calidad",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Intendente de laboratorio",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            }, //Nueva area
            {
              //Area Responsable de tesoreria
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Traine (2)",
                Descripcion: "link",
              },
            },
          ], //Fin de las Areas
        },
        //Gerencia de nutricion LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "David Jara Aguilar",
            Puesto: "Gerente de nutrición",
            Descripcion: "link",
          },
        },
        //Gerencia de operaciones LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Marco Huerta",
            Puesto: "Gerente de operaciones",
            Descripcion: "link",
          },
          //Areas
          children: [
            //Area Jefe de produccion mascotas
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de producción mascotas",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Capacitor",
                    Descripcion: "link",
                  },
                },
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supevisor de mascotas (3)",
                    Descripcion: "link",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador/Cosedor mascotas (32)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador/Cosedor mascotas E-Commerce (2)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Responsable de doping (2)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Líder de línea (7)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador/Cosedor mascotas marca blanca (9)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Operador de limpieza (2)",
                        Descripcion: "link",
                      },
                    },
                  ],
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de producción de mascotas",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            },
            //Area Planeador de la demanda
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Planeador de la demanda",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Planeador de la producción",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Jefe de mantenimiento
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de mantenimiento",
                Descripcion: "link",
              },
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor de mantenimiento",
                    Descripcion: "link",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ingeniero de equipo (10)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Facilitador",
                        Descripcion: "link",
                      },
                    },
                  ],
                },
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor de metrología",
                    Descripcion: "link",
                  },
                },
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Planeador de mantenimiento",
                    Descripcion: "link",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Operador de mantenimiento (2)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Intendente",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Jardinero (2)",
                        Descripcion: "link",
                      },
                    },
                  ],
                },
              ],
            },
            //Area Jefe de producción pecuario
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de producción pecuario",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor de pecuario (3)",
                    Descripcion: "link",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Mezclador (4)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Dosificador (3)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador cosedor pecuario (11)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Operador de limpieza (2)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador gallos y pequeñas (8)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Quebrador de maíz (4)",
                        Descripcion: "link",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Peleteador (3)",
                        Descripcion: "link",
                      },
                    },
                    {
                      expanded: true, //Mostramos los dependientes
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Coordinador de premezclas",
                        Descripcion: "link",
                      },
                      children: [
                        {
                          type: "person", //Hacemos visible el elemento
                          data: {
                            Nombre: "z",
                            Puesto: "Operador de premezclas (3)",
                            Descripcion: "link",
                          },
                        },
                      ],
                    },
                  ],
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Capacitor (1)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Responsable de almacen de refacciones
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de almacén de refacciones",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Responsable de alimento húmedo
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de alimento húmedo",
                Descripcion: "link",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Auxiliar/operador de alimento húmedo",
                    Descripcion: "link",
                  },
                },
              ],
            },
            //Area Supervisor de embarque
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Supervisor de embarque",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor JR",
                    Descripcion: "link",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Estibador de embarque (6)",
                        Descripcion: "link",
                      },
                    },
                  ],
                }, //Nuevo elemento dependiente
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de embarque",
                    Descripcion: "link",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Estibador de embarque (6)",
                        Descripcion: "link",
                      },
                    },
                  ],
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Supervisor de materias primas envasadas
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Supervisor de materias primas envasadas",
                Descripcion: "link",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Montacarguista de bodega ensacado",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Estibador de bodega ensacado (2)",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Molinero (3)",
                    Descripcion: "link",
                  },
                },
              ],
            },
            //Area Supervisor de bodegas garnel
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Supervisor de bodegas garnel",
                Descripcion: "link",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Líder tranferencista",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Tranferencista molinereo (4)",
                    Descripcion: "link",
                  },
                },
              ],
            },
            //Area Supervisor de bodega PT
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Supervisor de bodega PT",
                Descripcion: "link",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de Bodega PT",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Capturista (2)",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Surtidor de pedidos",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Montacarguista de bodega PT (9)",
                    Descripcion: "link",
                  },
                },
              ],
            },
            //Area Capturista de producción
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Capturista de producción",
                Descripcion: "link",
              },
            },
            //Area Traine
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Traine (5)",
                Descripcion: "link",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine Marca Blanca",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine Capacitacion (2)",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine Pecuario (2)",
                    Descripcion: "link",
                  },
                },
              ],
            },
          ], //Fin de las Areas
        },
        //Gerencia de ventas pecuario Listo
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Marco Celstinos",
            Puesto: "Gerente nacional ventas pecuario",
            Descripcion: "link",
          },
          //Areas
          children: [
            //Area gerente de zona Guanajuato
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Luis Miguel Arriaga Alcázar",
                Puesto: "Gerente de zona Guanajuato",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de bodega Santa Ana",
                    Descripcion: "link",
                  },
                  //elemento Sub-dependiente
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Chófer ayudante",
                        Descripcion: "link",
                      },
                    }, //elemento Sub-dependiente
                  ], //Elementos dependientes
                },
              ], //Elementos dependientes
            },
            //Area Gerente de zona Michoacan
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Sergio Ceballos",
                Puesto: "Gerente de zona Michoacán",
                Descripcion: "link",
              },
            },
            //Area Gerente de zona Aguascalientes, Queretaro
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Filberto Bravo",
                Puesto: "Gerente de zona Aguascalientes, Querétaro",
                Descripcion: "link",
              },
            },
            //Area Gerente de zona Jalisco, Colima
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Víctor Hugo Santos Velasco",
                Puesto: "Gerente de zona Jalisco, Colima",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Vigilancia (7)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Jessica",
                    Puesto: "Enfermera laboral",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Monitorista (2)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Gerente de zona Hidalgo, Tlaxcala, EDO MEX
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Omar Olguín",
                Puesto: "Gerente de zona Hidalgo, Tlaxcala, EDO MEX",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de bodega Almoloya",
                    Descripcion: "link",
                  },
                  //Nuevo elemento Sub-dependiente
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Chófer ayudante",
                        Descripcion: "link",
                      },
                    }, //Nuevo elemento sub-dependiente
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ayudante general",
                        Descripcion: "link",
                      },
                    }, //Nuevo elemento sub-dependiente
                  ], //Elementos Sub-Dependientes
                },
              ],
            },
            //Area Gerente JR MKT pecuario
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Martha Yanira Salinas Colio",
                Puesto: "Gerente JR mkt pecuario",
                Descripcion: "link",
              },
            },
            //Area Coordinador de modulo de servicio pecuario
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Coordinador de módulo de servicio pecuario",
                Descripcion: "link",
              },
            },
            //Area Responsable de operacion comercial
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de operación comercial",
                Descripcion: "link",
              },
            },
          ], //Fin de las Areas
        },
        //Gerencia de innovacion y proyectos LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Vacante",
            Puesto: "Gerente de innovación y proyectos",
            Descripcion: "link",
          },
        },
        //Gerencia de gestion de talento humano LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Juan Manuel Magaña",
            Puesto: "Gerente de géstion de talento humano",
            Descripcion: "link",
          },
          //Areas
          children: [
            {
              //Area coordinador de reclutamiento y seleccion
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Yessenia",
                Puesto: "Coordinador de reclutamiento y selección",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Comedor (4)",
                    Descripcion: "link",
                  },
                },
              ], //Elementos dependientes
            },
            {
              //Area coordinador de capacitacion y desarrollo organizacional
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Michelle",
                Puesto:
                  "Coordinaodr de capacitacion y desarrollo organizacional",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Intendente (2)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            {
              //Area Responsable de comunicación
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Esteban",
                Puesto: "Responsable de comunicación",
                Descripcion: "link",
              },
            },
            {
              //Area coordinador de EHS
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Arturo",
                Puesto: "Coordinador de EHS",
                Descripcion: "link",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Traine",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Vigilancia (7)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Jessica",
                    Puesto: "Enfermera laboral",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Monitorista (2)",
                    Descripcion: "link",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
          ], //Fin de las Areas
        },
        //Gerencia de coordinacion de logistica interna y maquilas LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Vacante",
            Puesto: "Coordinador de logistica interna y maquilas",
            Descripcion: "link",
          },
        },
      ], //Fin de Gerencias
    },
  ]);
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: "person",
            data: {
              Nombre: "Iñigo Aceves",
              Puesto: "Gerente General",
              Descripcion: "link",
            },
            //Inicio de Gerencias
            children: [
              //Gerencia de Administracion y finanzas
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Antonio Topete Procel",
                  Puesto: "Gerente de administración y finanzas",
                  Descripcion: "link",
                },
                //Areas
                children: [
                  {
                    //Area sistemas
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "Ricardo",
                      Puesto: "Jefatura de sistemas",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "Misael",
                          Puesto: "Desarrollador JR",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "Jorge",
                          Puesto: "Técnico de sistemas",
                          Descripcion: "link",
                        },
                      },
                    ], //Elementos dependientes
                  }, //Nueva area
                  {
                    //Area Contador general
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "Velman",
                      Puesto: "Contador general",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Traine",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                    ], //Elementos Dependientes
                  }, //Nueva area
                  {
                    //Area Responsable de tesoreria
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "Cesar",
                      Puesto: "Respnsable de tesorería",
                      Descripcion: "link",
                    },
                  }, //Nueva area
                  {
                    //Area Jefe de costos
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Jefe de costos",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Responsable de costos",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Responsable de bascula (2)",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "analista de costos",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                    ], //Elementos Dependientes
                  }, //Nueva area
                  {
                    //Area Supervisor de contabilidad
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Supervisor de contabilidad",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Coordinador de crédito y cartera mascotas",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Coordinador de crédito y cartera pecuario",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "auditor interno administrativo",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                    ], //Elementos Dependientes
                  }, //Nueva area
                  {
                    //Coordinador administrativo
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Coordinador administrativo",
                      Descripcion: "link",
                    },
                  },
                ], //Fin de las Areas
              },
              //Gerencia comercial
              {
                //Gerencia comercial
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Roman Soto Trujillo",
                  Puesto: "Director Comercial",
                  Descripcion: "link",
                },
              },
              //Gerencia de logistica y abstecimiento
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Juan Francisco Sánchez García",
                  Puesto: "Gerente de Logistica y abastecimiento",
                  Descripcion: "link",
                },
                children: [
                  {
                    //Area Jefe de trafico
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Jefe de tráfico",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Responsable de tráfico",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Chofer comisionista (4)",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Chofer transporte de personal (5)",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Chofer mensajero",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Analista de tráfico",
                          Descripcion: "link",
                        },
                      },
                    ], //Fn de Elementos dependientes
                  },
                ],
              },
              //Gerencia de aseguramiento de calidad
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "José Cervantes",
                  Puesto: "Gerente de aseguramiento de calidad",
                  Descripcion: "link",
                },
                children: [
                  {
                    //Area Jefe de SGC
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Jefe del SGC",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Auditor del SGC",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Gestor del sistema de calidad",
                          Descripcion: "link",
                        },
                      },
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Coordinador de asuntos regulatorios",
                          Descripcion: "link",
                        },
                      },
                    ], //Elementos dependientes
                  }, //Nueva area
                  {
                    //Area Jefe de laboratorio
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Jefe de laboratorio",
                      Descripcion: "link",
                    },
                    //Elementos dependientes
                    children: [
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Supervisor de calidad en proceso (6)",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Analista de aseguramiento de calidad (2)",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Muestreador de aseguramiento de calidad",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                      {
                        type: "person", //Hacemos visible el elemento
                        data: {
                          Nombre: "z",
                          Puesto: "Intendente de laboratorio",
                          Descripcion: "link",
                        },
                      }, //Nuevo elemento dependiente
                    ], //Elementos Dependientes
                  }, //Nueva area
                  {
                    //Area Responsable de tesoreria
                    expanded: true, //Mostramos los dependientes
                    type: "person", //Hacemos visible el elemento
                    data: {
                      Nombre: "z",
                      Puesto: "Traine (2)",
                      Descripcion: "link",
                    },
                  },
                ], //Fin de las Areas
              },
              //Gerencia de nutricion
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "David Jara",
                  Puesto: "Jefe de nutrición",
                  Descripcion: "link",
                },
              },
              //Gerencia de operaciones
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Marco Huerta",
                  Puesto: "Gerente de operaciones",
                  Descripcion: "link",
                },
              },
              //Gerencia de ventas pecuario
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Marco Celstinos",
                  Puesto: "Gerente nacional ventas pecuario",
                  Descripcion: "link",
                },
              },
              //Gerencia de innovacion y proyectos
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Vacante",
                  Puesto: "Gerente de innovación y proyectos",
                  Descripcion: "link",
                },
              },
              //Gerencia de gestion de talento humano
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Juan Manuel Magaña",
                  Puesto: "Gerente de géstion de talento humano",
                  Descripcion: "link",
                },
              },
              //Gerencia de cooordinacion de logistica interna y maquilas
              {
                expanded: true, //Mostramos los dependientes
                type: "person", //Hacemos visible el elemento
                data: {
                  Nombre: "Vacante",
                  Puesto: "Coordinador de logistica interna y maquilas",
                  Descripcion: "link",
                },
              },
            ], //Fin de Gerencias
          },
    ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-column">
          <div className="flex flex-column align-items-center">
            <img alt="" src={node.data.image} className="mb-3 w-1rem h-3rem" />
            <span className="font-bold mb-2">{node.data.Nombre}</span>
            <span>{node.data.Puesto}</span>
          </div>
        </div>
      );
    }
    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="cascos flex flex-column">
                    <div className="flex flex-column align-items-center">
                        {
                            node.data.image != null ? <img alt="" src={node.data.image} className="mb-3 w-1rem h-3rem" /> : <div></div>
                        }
                        
                        <span className="font-bold mb-2">{node.data.Nombre}</span>
                        <span>{node.data.Puesto}</span>
                    </div>
                </div>
            );
        }

    return node.label;
  };

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart
        value={data}
        selectionMode="multiple"
        selection={selection}
        onSelectionChange={(e) => setSelection(e.data)}
        nodeTemplate={nodeTemplate}
      />
    </div>
  );
    return (
        <div className="overflow-x-auto">
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
    )
}
