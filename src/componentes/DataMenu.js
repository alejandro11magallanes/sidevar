import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaDog } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";

export const DataMenu = [
    {
        label: "Home",
        llave: "1",
        icon: <AiFillHome/>,
        programas:[
            {
                titulo: "hola 1",
                ruta: "/"
            },
            {
                titulo: "hola 2",
                ruta: "/"
            }
        ]
    },
    {
        label: "Pagina 1",
        llave: "prue1",
        icon: <FaDog/>,
        programas:[
            {
                titulo: "hola 3",
                ruta: "/prue1"
            },
            {
                titulo: "hola 4",
                ruta: "/prue1"
            }
        ]
    },{
        label: "Pagina 2",
        llave: "2",
        icon: <GiRoundStar/>,
        programas:[
            {
                titulo: "hola 5",
                ruta: "/prue2"
            },
            {
                titulo: "hola 6",
                ruta: "/prue2"
            }
        ]
    },
]