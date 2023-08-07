import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'

export const Admin = () => {

  const fechaActual      = new Date()
  const fechaHoy = fechaActual.toISOString().slice(0,10)
  
  const [reservas, setReservas] = useState([])
  
  const getReservas = async() => {
    db.collection('reservas').where("fecha", ">=", fechaHoy).onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
    });
    setReservas(docs.sort((a, b) => a.fecha - b.fecha))
    } );
  };

  useEffect( () => {
    getReservas()
  },
  []
  )

return (
  <>
    <br />
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-dark table-hover">

            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Comensales</th>
              </tr>
            </thead>

            <tbody>
              {reservas
              .sort((a, b) => a.fecha - b.fecha)
              .map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.nombre}</td>
                <td>{reserva.email}</td>
                <td>{reserva.fecha.slice(8,10)}-{reserva.fecha.slice(5,7)}-{reserva.fecha.slice(0,4)}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
              </tr>
              ) ) }
            </tbody>

          </table>
        </div>
      </div>
    </div>
    
  </>
)
};