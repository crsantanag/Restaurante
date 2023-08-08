import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import './Reserva.css'

export const ReservaMostrarMesas = ({ fecha }) => {

    const [reservas, setReservas] = useState([]);
    const [celdas, setCeldas] = useState([]);
    const [mesas, setMesas] = useState (0)

    const getReservas = async () => {
        try {
            // Realiza la consulta con la condición de filtro
            const querySnapshot = await db
                .collection("reservas")
                .where("fecha", "==", fecha)
                .get();

            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setReservas(docs);
        }
        catch (error) {
            console.error ("Error al obtener las reservas :", error)
        }
    };

    const calcularMesas = () => {
        setMesas(0);
        reservas.map( (reserva) => (
            setMesas (contador => contador + reserva.mesas)
        ) )
    };
        
    const calcularCeldas = () => {
        const nuevasCeldas = [];
        for (let i = 0; i < mesas; i++) {
            nuevasCeldas.push('red');
        }
        for (let i = mesas; i < 24; i++) {
            nuevasCeldas.push('green');
        }
        setCeldas (nuevasCeldas);
    };

    useEffect( () => {
        getReservas();
        },
        [fecha]
    );

    useEffect ( () => {
        calcularMesas();
        },
        [reservas]
    )

    useEffect ( () => {
        calcularCeldas();
        },
        [mesas]
    );

    return (
    <>
    <div className="contenedor">
        {celdas.map((celda, index) => (
        <div className="mesas" style={{backgroundColor: celdas[index]}} key={index}>
            Mesa {index + 1}
        </div>
        ))}
    </div>
    </>
    );
};
