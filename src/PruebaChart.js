
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
        <div className="overflow-x-auto">
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
    )
}
