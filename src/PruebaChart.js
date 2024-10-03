import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

import './estilos.css';

export default function SelectionDemo() {
  const handleClick = () => {
    console.log("Go to link");
  };

  const [data] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        Nombre: "Iñigo Aceves",
        Puesto: "Gerente General",
        Descripcion: "link",
      }, //Inicio de Gerencias
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
            //Area sistemas
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Ricardo",
                Puesto: "Jefatura de sistemas",
                Descripcion:
                  "https://drive.google.com/file/d/1UPMeduq7NefxY-JvMe1KM5KtXLkghbCV/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Misael",
                    Puesto: "Desarrollador JR",
                    Descripcion:
                      "https://drive.google.com/file/d/1R41lRky9rPT7PEyY82W53F3so1fqLvxo/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Técnico de sistemas",
                    Descripcion: "link",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Jorge",
                    Puesto: "Traine",
                    Descripcion:
                      "https://drive.google.com/file/d/1_ZJrlI9prhbKH0wVp7ktav0hYcv65Ohz/view",
                  },
                },
              ], //Elementos dependientes
            },
            //Area Contador general
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Velman",
                Puesto: "Contador general",
                Descripcion:
                  "https://drive.google.com/file/d/1DkQNXXfAEgxnn88NB26qSMa6DBHMowN6/view",
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
            //Area Responsable de tesoreria
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Cesar",
                Puesto: "Responsable de tesorería",
                Descripcion:
                  "https://drive.google.com/file/d/1VXLnLoMucHzWk4fNm0Ph4rHJ6RiXZ1Mb/view",
              },
            },
            //Area Jefe de costos
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de costos",
                Descripcion:
                  "https://drive.google.com/file/d/155tTZx_WXlyPMkpHhjc3wxsYYsV0UnPj/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de costos",
                    Descripcion:
                      "https://drive.google.com/file/d/1e3zVVvVnRawfr3GgL6AFpwQ4fqlbWUzp/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de báscula (2)",
                    Descripcion:
                      "https://drive.google.com/file/d/1HDKmPc_kUcBqVL4-pGO6nK2UEclCva_p/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Analista de costos",
                    Descripcion:
                      "https://drive.google.com/file/d/1zjEdr3zLIsBX6POZTf_sm1fqWB0CMhzR/view",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Supervisor de contabilidad
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Supervisor de contabilidad",
                Descripcion:
                  "https://drive.google.com/file/d/1uMAUQmzEhjNAz-ZAqLJoug4V3j65dmCW/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Coordinador de crédito y cartera mascotas",
                    Descripcion:
                      "https://drive.google.com/file/d/1Nw_QjWwpU5HZ_UuvNwreKeC7fVDtZRrw/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Coordinador de crédito y cartera pecuario",
                    Descripcion:
                      "https://drive.google.com/file/d/1Nw_QjWwpU5HZ_UuvNwreKeC7fVDtZRrw/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Auditor interno administrativo",
                    Descripcion:
                      "https://drive.google.com/file/d/1dVBWxaY3I83Bew33A6dQ18x2_ng5caa-/view",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Coordinador administrativo
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Coordinador administrativo",
                Descripcion:
                  "https://drive.google.com/file/d/1h0vqvIJambH7LhC7UCCKtvX7nLHjwRHh/view",
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
            Descripcion:
              "https://drive.google.com/file/d/10iKkcoPukGRJ_oZO7pd3j4O4amCLGzyx/view",
          },
          //Areas
          children: [
            //Area Gerente de division OCCIDENTE-NORTE-PÁCIFICO
            {
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
                    Descripcion:
                      "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "Nallely Anaid O.",
                        Puesto: "Gerente de zona Pácifico",
                        Descripcion:
                          "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                      },
                    },
                  ],
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Fernando Ramos",
                    Puesto: "Gerente de zona SLP-AG-ZAC",
                    Descripcion:
                      "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "Vacante",
                        Puesto: "Gerente de zona JAL-COL-NAY",
                        Descripcion:
                          "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                      },
                    },
                  ],
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Bonifacio Zuñiga",
                    Puesto: "Gerente de zona NL-TAM",
                    Descripcion:
                      "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "Vacante",
                        Puesto: "Gerente de zona CHI-DUR-COA",
                        Descripcion:
                          "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                      },
                    },
                  ],
                },
              ], //Elementos dependientes
            },
            //Area Gerente kam moderno VDM
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Fernanda Jarquín",
                Puesto: "Gerente kam moderno VDM",
                Descripcion: "link",
              },
            },
            //Area Gerente kan de E-Commerce y MKT
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Tania Castillo",
                Puesto: "Gerente de KAN E-COMMERCE y MKT",
                Descripcion:
                  "https://drive.google.com/file/d/1o31h3fwXkusoB8VMGrSMHKr7flz-vVbY/view",
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
                    Descripcion:
                      "https://drive.google.com/file/d/1kVXtWEulRL7qmVgeSMVcFVJv-76fN-Ke/view",
                  },
                },
              ], //Elementos dependientes
            },
            //Area Gerente kam mayorista PDV
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Vacante",
                Puesto: " Gerente kam mayorista PDV",
                Descripcion: "link",
              },
            },
            //Area Gerente kam grandes distribuidores a chngarro/mayoristas
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Vacante",
                Puesto:
                  "Gerente kam grandes distribuidores a chngarro/mayoristas",
                Descripcion: "link",
              },
            },
            //Area Gerente de division VDM-CENTRO-SUR
            {
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
                    Descripcion: "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "Gerardo García",
                        Puesto: "Gerente de zona VDM-PONIENTE-EDO",
                        Descripcion: "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                      },
                    },
                  ],
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Arturo Santiago Leonel",
                    Puesto: "Gerente de zona CENTRO-NORTE-HIDALGO",
                    Descripcion: "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "Leonardo Rosales",
                        Puesto: "Gerente de zona VDM MORELOS-GUERRERO",
                        Descripcion: "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                      },
                    },
                  ],
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Marco Corona",
                    Puesto: "Gerente de zona TLAX-VER",
                    Descripcion: "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "Vacante",
                        Puesto: "Gerente de zona PUE-OAX",
                        Descripcion: "https://drive.google.com/file/d/1cMEh8d4BI_la8TPy3quh2eKlzJ2G3xRQ/view",
                      },
                    },
                  ],
                },
              ], //Elementos dependientes
            },
            //Area Responsable de operación comercial
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "María Shavenny Ávila",
                Puesto: "Responsable de operación comercial",
                Descripcion:
                  "https://drive.google.com/file/d/1a1ft0BPr4-q4F9WI_XgZ7TOjGUQUQZGz/view",
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
            Descripcion:
              "https://drive.google.com/file/d/1tyJvOY9Rsij2Lv2c1n-QG7ebbaeZ9b7E/view",
          }, //Areas
          children: [
            //Area Jefe de trafico
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de tráfico",
                Descripcion:
                  "https://drive.google.com/file/d/1NYoJHnsjR_xg0ewEFmoLrTz-5mtf4xKC/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de tráfico",
                    Descripcion:
                      "https://drive.google.com/file/d/1RJ5HgM-A3DHAYZmiAfVK1Iu-bqHrzzI9/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Chofer comisionista (4)",
                    Descripcion:
                      "https://drive.google.com/file/d/1ripPvO7xLRqt9HKrcNvC4Rzfaw5dVdSi/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Chofer transporte de personal (5)",
                    Descripcion:
                      "https://drive.google.com/file/d/1vJ7x_sj9OHMTiqRd-TUsjq5IXKgFL1KX/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Chofer mensajero",
                    Descripcion:
                      "https://drive.google.com/file/d/19kdvr2T6GtpjE6MfhKFtxETUyPbBiVwe/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Analista de tráfico",
                    Descripcion:
                      "https://drive.google.com/file/d/1uCMEUs8cWuvu0zAEdxFSl5nzbd1xTJt-/view",
                  },
                },
              ], //Fn de Elementos dependientes
            },
            //Area Responsable de bodega estacion
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de bodega estación",
                Descripcion:
                  "https://drive.google.com/file/d/19VTxtUYbzxSye0cBaWlluARV9BCivDhh/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Encargado de báscula",
                    Descripcion:
                      "https://drive.google.com/file/d/1giVuq2RqpaFG-98_GztjFcjkByz2ZuZr/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Estibador de bodega estación (2)",
                    Descripcion:
                      "https://drive.google.com/file/d/1_Wrszgheh-8TtFhGU1AyeN7uj64p0iOU/view",
                  },
                },
              ], //Fn de Elementos dependientes
            },
            //Area Analista de logistica
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Analista de logística",
                Descripcion: "link",
              },
            },
            //Area Coordinador de compras
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Coordinador de compras",
                Descripcion:
                  "https://drive.google.com/file/d/11gwP_OUI5ohIqR7hIaJpY2JLba_AU_Sz/view",
              },
            },
            //Area Responsable de compras
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de compras",
                Descripcion:
                  "https://drive.google.com/file/d/19He-kmDpV13Y13KdwBtcJnNZQisTHpNm/view",
              },
            },
            //Area Traine
            {
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
            Descripcion:
              "https://drive.google.com/file/d/13Yl0YBVmOwdFVLRB3vurW8Ovn0bVpp2S/view",
          },
          children: [
            //Area Jefe de SGC
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe del SGC",
                Descripcion:
                  "https://drive.google.com/file/d/1GHMt4bpWr4urCbDcrSM4uPZ4khjvcE9O/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Auditor del SGC",
                    Descripcion:
                      "https://drive.google.com/file/d/1Q6fZnB8wRObcetY1fyyu3iV4FuwBd1zz/view",
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
                    Descripcion:
                      "https://drive.google.com/file/d/1GgF_fK2OKFbdApRgh-jNolQxuDyOEV7L/view",
                  },
                },
              ], //Elementos dependientes
            },
            //Area Jefe de laboratorio
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Jefe de laboratorio",
                Descripcion:
                  "https://drive.google.com/file/d/1tKVagYi6KiYKMDNMvjVb5Q7kkmRIo35E/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor de calidad en proceso (6)",
                    Descripcion:
                      "https://drive.google.com/file/d/1UHAw_PQX484qb-t2j1aeO6FFYXPyjJ0C/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Analista de aseguramiento de calidad (2)",
                    Descripcion:
                      "https://drive.google.com/file/d/1_AKvnmg76mOfpQ14Pk2dP586bLLQTR01/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Muestreador de aseguramiento de calidad",
                    Descripcion:
                      "https://drive.google.com/file/d/10voyrs_0NqXMfC1gLTshDG6oxyjgO-Fd/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Intendente de laboratorio",
                    Descripcion:
                      "https://drive.google.com/file/d/1Rvd6YBrnFcF-9cvR6QVCCC2t4QmQVuiV/view",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Traine
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Traine (2)",
                Descripcion:
                  "https://drive.google.com/file/d/1zX0cjfHkg3F0HALEjFR6vQ8ZpY9yk0BJ/view",
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
            Descripcion: "https://drive.google.com/file/d/1lX_bGIhFHjKk-bZsxsS3I9wCHnjExD4G/view",
          },
        },
        //Gerencia de operaciones LISTO
        {
          expanded: true, //Mostramos los dependientes
          type: "person", //Hacemos visible el elemento
          data: {
            Nombre: "Marco Huerta",
            Puesto: "Gerente de operaciones",
            Descripcion: "https://drive.google.com/file/d/1CgG1fugMRXNtSe4ekIO52D-rT_ejq20k/view",
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
                    Puesto: "Supervisor de mascotas (3)",
                    Descripcion: "https://drive.google.com/file/d/1Z_E0turHzZ8xilySdNkpWvevBdUSn1mn/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador/Cosedor mascotas (32)",
                        Descripcion: "https://drive.google.com/file/d/1mrT8ONK_TvLgi8WiAJoKsaDei9DUcELL/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador/Cosedor mascotas E-Commerce (2)",
                        Descripcion: "https://drive.google.com/file/d/1mrT8ONK_TvLgi8WiAJoKsaDei9DUcELL/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Responsable de doping (2)",
                        Descripcion: "https://drive.google.com/file/d/1Hm1FIsPATXn6T4yhTzkkzvocUB7z1I6p/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Líder de línea (7)",
                        Descripcion: "https://drive.google.com/file/d/1tOzcg_iHc7Pg1Mddn2eJPpr0SZDz2qSK/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador/Cosedor mascotas marca blanca (9)",
                        Descripcion: "https://drive.google.com/file/d/1mrT8ONK_TvLgi8WiAJoKsaDei9DUcELL/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Operador de limpieza (2)",
                        Descripcion: "https://drive.google.com/file/d/1_BTcgE4NstcJcQBv4-Eb-IxUIWl_9M1J/view",
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
                Descripcion: "https://drive.google.com/file/d/1Tbo9TQ5RevSsVFT2mCQc_8N7OVdfmbgw/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Planeador de la producción",
                    Descripcion: "https://drive.google.com/file/d/1G-YnEut5syqsBmr7479fUq-UO5mEMdit/view",
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
                    Descripcion: "https://drive.google.com/file/d/1PGxZKPQK8GxJ7USU-tOfKj0M6UzoL57_/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ingeniero de equipo (10)",
                        Descripcion: "https://drive.google.com/file/d/18rC0nyKjBQwKTGEDHX8HfLH8Q0AN6HXC/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Facilitador",
                        Descripcion: "https://drive.google.com/file/d/1l9R7JSclaXC6wrAGtFtzXccF_r5EJTFP/view",
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
                    Descripcion: "https://drive.google.com/file/d/12_NaMu_OFVh9-U9GRDB14LvWHITJFC07/view",
                  },
                },
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Planeador de mantenimiento",
                    Descripcion: "https://drive.google.com/file/d/1sgYvXansA1ZK2l_azvdgnPm91woGGB3D/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Operador de mantenimiento (2)",
                        Descripcion: "https://drive.google.com/file/d/12X7UwM5qMQN8Nl_pIncEexCcVRz3uoV6/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Intendente",
                        Descripcion: "https://drive.google.com/file/d/1q0iws7pdYdvx6-P2_tx54wElc2SUlbqx/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Jardinero (2)",
                        Descripcion: "https://drive.google.com/file/d/1JdyM_rer5JfWStGBUtwaN6B5bR6iP9w4/view",
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
                        Descripcion: "https://drive.google.com/file/d/1lI8IW9fxjH0PhiWTR-OnYYAbNKEnM8K1/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Dosificador (3)",
                        Descripcion: "https://drive.google.com/file/d/1SYQuPjo2qr8zAEfMJti3JWg0gVlthjfe/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador cosedor pecuario (11)",
                        Descripcion: "https://drive.google.com/file/d/1Yc0-GGUB3RUFEURhdk7f48MZhOL0e1vp/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Operador de limpieza (2)",
                        Descripcion: "https://drive.google.com/file/d/1zOgOEK_6DUv0CXTa787pNTdipOdRRcCS/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Ensacador gallos y pequeñas (8)",
                        Descripcion: "https://drive.google.com/file/d/12X5Z5KPuXf8otu3FxANqrnyqVv60z6i2/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Quebrador de maíz (4)",
                        Descripcion: "https://drive.google.com/file/d/1ClGXle68P3IOqIHA7fK7RxjSB1pyppDy/view",
                      },
                    },
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Peleteador (3)",
                        Descripcion: "https://drive.google.com/file/d/1qxLsi6xdoECBzY_dDQp-svgy6wWUA9PE/view",
                      },
                    },
                    {
                      expanded: true, //Mostramos los dependientes
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Coordinador de premezclas",
                        Descripcion: "https://drive.google.com/file/d/1X0to0i-BvMCR8UHghF9DVyGf4r8bfHFW/view",
                      },
                      children: [
                        {
                          type: "person", //Hacemos visible el elemento
                          data: {
                            Nombre: "z",
                            Puesto: "Operador de premezclas (3)",
                            Descripcion: "https://drive.google.com/file/d/1nv5LBguUNNE3hRgq5ZkeDNp-a4Qqyz3h/view",
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
                Descripcion: "https://drive.google.com/file/d/1nv5LBguUNNE3hRgq5ZkeDNp-a4Qqyz3h/view",
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
                Descripcion: "https://drive.google.com/file/d/19QRTtLktA7JEADGj4pqmOjcQs2E3E1ai/view",
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
                Descripcion: "https://drive.google.com/file/d/1dl0u603xqWVQnXgYi1u2eM4Op1UMfN02/view",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Supervisor JR",
                    Descripcion: "https://drive.google.com/file/d/1epqkoT_mqeqcAVMW9LB8EyzMBmqGpRgO/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Estibador de embarque (6)",
                        Descripcion: "https://drive.google.com/file/d/1O5j2CgKlrhKGRtbHJHBHL7KnAmzX4ZV-/view",
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
                    Descripcion: "https://drive.google.com/file/d/1nizb8eubdMFSIv76a4VL4FvPt5mRz-pg/view",
                  },
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Estibador de embarque (6)",
                        Descripcion: "https://drive.google.com/file/d/1O5j2CgKlrhKGRtbHJHBHL7KnAmzX4ZV-/view",
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
                Descripcion: "https://drive.google.com/file/d/17oYd61EDZPeqPQmfz-ZS5mSFgZwwPdsF/view",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Montacarguista de bodega ensacado",
                    Descripcion: "https://drive.google.com/file/d/1AI_sjhw9v82RU4eClw00VhMYu4Wlqs0u/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Estibador de bodega ensacado (2)",
                    Descripcion: "https://drive.google.com/file/d/1KCq8OlhQ67j6wMmzsXQzkDXkVrwmEVsR/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Molinero (3)",
                    Descripcion: "https://drive.google.com/file/d/13a0Wy6TwmHYxmsK42aEvw4J__cj-0oN8/view",
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
                Descripcion: "https://drive.google.com/file/d/1ya_wfDS-H6U4obgR1ISML7EmTQv3BsTa/view",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Líder tranferencista",
                    Descripcion: "https://drive.google.com/file/d/1UUgFOIBn6AxDc7RZ4kY-psnucz8nTITO/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Tranferencista molinereo (4)",
                    Descripcion: "https://drive.google.com/file/d/1A3lBQ-SWxaZLMbgTmEZrruuTh0WldJYU/view",
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
                Descripcion: "https://drive.google.com/file/d/1l42mVeLXvMvgHFP9-vJR3vcXYwur9kSj/view",
              },
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de Bodega PT",
                    Descripcion: "https://drive.google.com/file/d/1AUqwmRNzdICr9Y8VSA8C1QsZNmfiM7BY/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Capturista (2)",
                    Descripcion: "https://drive.google.com/file/d/1y8p5Bz0NiiB-tEGB2oaFZWNR61N0QKQQ/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Surtidor de pedidos",
                    Descripcion: "https://drive.google.com/file/d/10ayIUoHj-KcaTrNj4S4DRc_WeYZTTX3_/view",
                  },
                },
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Montacarguista de bodega PT (9)",
                    Descripcion: "https://drive.google.com/file/d/1BfsvVQH7ZIrBd9-T5RfhaydtKEsZvH-z/view",
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
                Descripcion: "https://drive.google.com/file/d/1y8p5Bz0NiiB-tEGB2oaFZWNR61N0QKQQ/view",
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
            Descripcion: "https://drive.google.com/file/d/1T8VIehtamTAIlXT-wmddsDM18VLTlwCf/view",
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
                Descripcion: "https://drive.google.com/file/d/1AJQB310p4kDHOuWj4493Cxo2cw_UVglc/view",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de bodega Santa Ana",
                    Descripcion: "https://drive.google.com/file/d/1G6naEHZv5CdtM-w6acSAeJG43b_Ium_L/view",
                  },
                  //elemento Sub-dependiente
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Chofer ayudante",
                        Descripcion: "https://drive.google.com/file/d/1hpJ_fp4Zhx4qjwriZiP9RS_HtcA5yrAk/view",
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
                Descripcion: "https://drive.google.com/file/d/1AJQB310p4kDHOuWj4493Cxo2cw_UVglc/view",
              },
            },
            //Area Gerente de zona Aguascalientes, Queretaro
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Filberto Bravo",
                Puesto: "Gerente de zona Aguascalientes, Querétaro",
                Descripcion: "https://drive.google.com/file/d/1AJQB310p4kDHOuWj4493Cxo2cw_UVglc/view",
              },
            },
            //Area Gerente de zona Jalisco, Colima
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Víctor Hugo Santos Velasco",
                Puesto: "Gerente de zona Jalisco, Colima",
                Descripcion: "https://drive.google.com/file/d/1AJQB310p4kDHOuWj4493Cxo2cw_UVglc/view",
              },
            },
            //Area Gerente de zona Hidalgo, Tlaxcala, EDO MEX
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Omar Olguín",
                Puesto: "Gerente de zona Hidalgo, Tlaxcala, EDO MEX",
                Descripcion: "https://drive.google.com/file/d/1AJQB310p4kDHOuWj4493Cxo2cw_UVglc/view",
              },
              //Elementos dependientes
              children: [
                {
                  expanded: true, //Mostramos los dependientes
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Responsable de bodega Almoloya",
                    Descripcion: "https://drive.google.com/file/d/1G6naEHZv5CdtM-w6acSAeJG43b_Ium_L/view",
                  },
                  //Nuevo elemento Sub-dependiente
                  children: [
                    {
                      type: "person", //Hacemos visible el elemento
                      data: {
                        Nombre: "z",
                        Puesto: "Chofer ayudante",
                        Descripcion: "https://drive.google.com/file/d/1hpJ_fp4Zhx4qjwriZiP9RS_HtcA5yrAk/view",
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
                Descripcion: "https://drive.google.com/file/d/18oBpqoJD2w-gz9UrXxNWrdcjI8udrmpF/view",
              },
            },
            //Area Responsable de operacion comercial
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "z",
                Puesto: "Responsable de operación comercial",
                Descripcion: "https://drive.google.com/file/d/1I-mWsdnxVq2nA1K_6tJFQb47F1LVSXH4/view",
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
            Descripcion:
              "https://drive.google.com/file/d/1uPHg1OgUxYu-EzaH-xjAoB2jrSbQU8Y2/view",
          },
          //Areas
          children: [
            //Area coordinador de reclutamiento y seleccion
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Yessenia",
                Puesto: "Coordinador de reclutamiento y selección",
                Descripcion:
                  "https://drive.google.com/file/d/1j3yLWvJhARc0sJUe-bqaL6tbACVNU8Jo/view",
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
            //Area coordinador de capacitacion y desarrollo organizacional
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Michelle",
                Puesto:
                  "Coordinaodr de capacitacion y desarrollo organizacional",
                Descripcion:
                  "https://drive.google.com/file/d/1UbZk-Z3yc7D4HMcERklytIXTIfUbkdCr/view",
              },
              //Elementos dependientes
              children: [
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Intendente (2)",
                    Descripcion:
                      "https://drive.google.com/file/d/1BVV32HmiW_VC_dviMRlsUTBxsv26sR4R/view",
                  },
                }, //Nuevo elemento dependiente
              ], //Elementos Dependientes
            },
            //Area Responsable de comunicación
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Esteban",
                Puesto: "Responsable de comunicación",
                Descripcion:
                  "https://drive.google.com/file/d/1VGkSE7Q-1P60baLLSxR2VYKNYH6E8McH/view",
              },
            },
            //Area coordinador de EHS
            {
              expanded: true, //Mostramos los dependientes
              type: "person", //Hacemos visible el elemento
              data: {
                Nombre: "Arturo",
                Puesto: "Coordinador de EHS",
                Descripcion:
                  "https://drive.google.com/file/d/1qGQlqiBL4TxFeDO7ibonY_xXHaUDbmIj/view",
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
                    Descripcion:
                      "https://drive.google.com/file/d/1ey5FgojSJCI5jnSqzvUIYNRO7weQJzVt/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "Jessica",
                    Puesto: "Enfermera laboral",
                    Descripcion:
                      "https://drive.google.com/file/d/1Q_XCF8jC8rwAGp8kEW4_qtMqfysEOPww/view",
                  },
                }, //Nuevo elemento dependiente
                {
                  type: "person", //Hacemos visible el elemento
                  data: {
                    Nombre: "z",
                    Puesto: "Monitorista (2)",
                    Descripcion:
                      "https://drive.google.com/file/d/1LH2o7fIDJ7h5xAEUcr5odNhQD6RPEIZB/view",
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
            Descripcion:
              "https://drive.google.com/file/d/17p9EIuesQsnhGr6kJbbXKtG339J7_Bbr/view",
          },
        },
      ], //Fin de Gerencias
    },
  ]);




  const nodeTemplate = (node) => {
    if (node.type === 'person' && node.data.Descripcion !== "link") {

      return (
        <div className="cascos flex flex-column" >
          <a href={node.data.Descripcion} target="_blank" rel="noreferrer">
            <div className="flex flex-column align-items-center">
              {
                node.data.image != null ? <img alt="" src={node.data.image} className="mb-3 w-1rem h-3rem" /> : <div></div>
              }
              {
                node.data.Nombre === 'z' ? <div></div> : <span className="font-bold mb-2">{node.data.Nombre}</span>
              }
              <span>{node.data.Puesto}</span>
            </div>
          </a>
        </div>
      );
    } else {
      return (
        <div className="cascos flex flex-column" >
          <div className="flex flex-column align-items-center">
            {
              node.data.image != null ? <img alt="" src={node.data.image} className="mb-3 w-1rem h-3rem" /> : <div></div>
            }
            {
              node.data.Nombre === 'z' ? <div></div> : <span className="font-bold mb-2">{node.data.Nombre}</span>
            }
            <span>{node.data.Puesto}</span>
          </div>
        </div>
      );
    }
  };


  return (
    <div onClick={handleClick}>
      <div className="overflow-x-auto" >
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      </div>
    </div>

  )
}
