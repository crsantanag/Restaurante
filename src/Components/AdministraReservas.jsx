import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'
import './AdministraReservas.css'

export const AdministraReservas = () => {

  const fechaActual      = new Date()
  const fechaHoyCompleta = fechaActual.toISOString()
  const fechaHoyObjeto   = new Date(fechaHoyCompleta);
  const fechaHoyNumero   = fechaHoyObjeto.getTime();

  const fechaHoyNumeroCL = fechaHoyNumero - (4*60*60*1000) // Paso a Fecha de CL
  const fechaHoy         = new Date (fechaHoyNumeroCL)     // Tiempo en milisegundos
  const fechaHoyCL       = fechaHoy.toISOString().slice(0, 10)
  
  const [fechaConsulta, setFechaConsulta] = useState('')
  const [reservas, setReservas] = useState([])

  const handleChangeFecha = (event) => {
    event.preventDefault();
    setFechaConsulta(event.target.value);
  };

  const getReservas = async() => {
    const querySnapshot = await db
    .collection('reservas')
    .where("fecha", "==", fechaConsulta)
    .orderBy('hora')
    .get();

        const docs = [];
          querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
          });
        setReservas(docs)
    };

  useEffect( () => {
    getReservas()
  },
  [fechaConsulta]
  )

return (
  <>
    <div className='mostrar_admin'>
        <br />
        <form >
        <h2>Administración de Reservas</h2>
        <div>
            <label  className='reserva_fecha_admin' 
                    htmlFor="fechaConsulta">
                    Fecha consulta : </label>
            <input  className='reserva_campos_admin'
                    min={fechaHoyCL} 
                    type="date" 
                    id="fechaConsulta" 
                    value={fechaConsulta} 
                    onChange={ handleChangeFecha } />
        </div>
        <br />
        </form>
    </div>

    <div className="container">
      <div className="row">
        <div className="col">

          <table className="table  table-hover">

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
              .map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.nombre}</td>
                <td>{reserva.email}</td>
                <td>{reserva.fecha.slice(8,10)}-{reserva.fecha.slice(5,7)}-{reserva.fecha.slice(0,4)}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
                <td>
                <button className='btn btn-light mx-2'>Modifica</button>
                <button className='btn btn-light mx-2'>Elimina</button>
                </td>
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