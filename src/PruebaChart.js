
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function SelectionDemo() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: "person",
            data: {
                Nombre: "Iñigo",
                Puesto: "Gerente General",
                Descripcion: "link",
            },
            children: [
                {
                    expanded: true,
                    type: "person",
                    data: {
                        Nombre: "Antonio Topete",
                        Puesto: "Gerente de administración y finanzas",
                        Descripcion: "link",
                    },
                    children: [
                        {

                            expanded: true,
                            type: "person",
                            data: {
                                expanded: true,
                                type: "person",
                                Nombre: "Ricardo",
                                Puesto: "Jefatura de sistemas",
                                Descripcion: "link",
                            },
                            children: [
                                {
                                    type: "person",
                                    data: {
                                        expanded: true,
                                        type: "person",
                                        Nombre: "Misael",
                                        Puesto: "Desarrollador JR",
                                        Descripcion: "link",
                                    }
                                },
                                {
                                    type: "person",
                                    data: {
                                        Nombre: "Jorge del futuro",
                                        Puesto: "Técnico de sistemas",
                                        Descripcion: "link"
                                    }
                                }
                            ]
                        },
                        {
                            expanded: true,
                            type: "person",
                            data: {
                                expanded: true,
                                Nombre: "z",
                                Puesto: "Contador General",
                                Descripcion: "link",

                               
                            },
                            children: [
                                {
                                    type: "person",
                                    data: {
                                        expanded: true,
                                        type: "person",
                                        Nombre: "Misael",
                                        Puesto: "Desarrollador JR",
                                        Descripcion: "link",
                                    },
                                    children: [
                                        {
                                            type: "person",
                                            data: {
                                                expanded: true,
                                                type: "person",
                                                Nombre: "Misael",
                                                Puesto: "Desarrollador JR",
                                                Descripcion: "link",
                                            },
                                            
                                        },
                                    ],
                                },
                                {
                                    type: "person",
                                    data: {
                                        Nombre: "Jorge del futuro",
                                        Puesto: "Técnico de sistemas",
                                        Descripcion: "link"
                                    }
                                }
                            ]
                        }

                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.Nombre} src={node.data.image} className="mb-3 w-1rem h-3rem" />
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
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
    )
}
