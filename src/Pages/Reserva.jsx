import { useState, useEffect } from 'react'
import { BotonRestar } from './BotonRestar'
import { BotonSumar }  from './BotonSumar'
import { db } from '../firebase/firebase'
import './Reserva.css'


export const Reserva = () => {

  const fechaActual      = new Date()
  const fechaHoyCompleta = fechaActual.toISOString()
  const fechaHoyObjeto = new Date(fechaHoyCompleta);
  const fechaHoyNumero   = fechaHoyObjeto.getTime();

//  const fechaHoyNumeroCLS = fechaHoyNumero - (4*60*60*1000)
//  const fechaHoyCLS       = new Date(fechaHoyNumeroCLS)
//  const fechaHoyStringCLS = fechaHoyCLS.toISOString().slice(0, 10)
//  const horaHoyStringCLS  = fechaHoyCLS.toISOString().slice(11, 16)

  const fechaMananaNumero    = fechaHoyNumero + (24*60*60*1000) - (4*60*60*1000)
  const fechaManana          = new Date(fechaMananaNumero) // Tiempo en milisegundos
  const fechaMananaStringCLS = fechaManana.toISOString().slice(0, 10);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const [comensales, setComensales] = useState(2)
  useEffect( () => {
    },
    [comensales]
  )

  const [fechaReserva, setFechaReserva] = useState('')
  const [horaReserva, setHoraReserva] = useState('')

  const horas = [
    { value: '19:00', label: '19:00' },
    { value: '19:30', label: '19:30' },
    { value: '20:00', label: '20:00' },
    { value: '20:30', label: '20:30' },
    { value: '21:00', label: '21:00' },
    { value: '21:30', label: '21:30' },
    { value: '22:00', label: '22:00' },
  ];

  const handleChange = (event) => {
    setHoraReserva(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const validarDatos = () => {
    if (nombre.trim() === '' || email.trim() === '' || telefono === ''  || horaReserva == '' || fechaReserva === '') 
      {
        alert ('Debe completar todos los datos solicitados')
      } 
    else
      {
        const reserva = {
          nombre: nombre,
          email : email,
          telefono : telefono,
          comensales: comensales,
          hora : horaReserva,
          fecha: fechaReserva
        }
        enviarReserva (reserva)
      }
    }

    const  enviarReserva  = async (reserva) => {
      await db.collection ("reservas").add (reserva)
      alert ('Reserva realizada')
      setNombre ('')
      setEmail('')
      setTelefono('')
      setComensales(2)
      setHoraReserva('')
      setFechaReserva('')
      }

  return (
    <div className='reserva'>
      <br />
      <img src="/assets/images/reserva.jpg" alt="Reserva" />
      <br />
      <br />

          <br/>
          <h2>Solicitud de Reserva</h2>
          <br />
          <h5>Restricciones: <br/>
          - No  se  aceptan reservas para el mismo día <br/>
          - Mínimo 2 y Máximo 12 comensales por reserva <br /> </h5>
          <br/>

          <form>
          <div>
            <label  className="reserva_nombre" 
                    htmlFor="nombre">Nombre : 
            </label>
            <input  className="reserva_campos" 
                    type="text" 
                    id="nombre" 
                    value={nombre} 
                    onChange={(event) => setNombre(event.target.value)}
            />
          </div>
          <div>

            <label  className="reserva_nombre" 
                    htmlFor="email">Email @ : 
            </label>
            <input  className="reserva_campos" 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>

            <label  className="reserva_nombre" 
                    htmlFor="telefono">Teléfono : 
            </label>
            <input  className="reserva_campos" 
                    type="tel" 
                    id="telefono" 
                    value={telefono} 
                    onChange={(event) => setTelefono(event.target.value)}
            />
          </div>

        </form>

        <br />
        <div className='misma_linea'>
          <div className='reserva_signo'> <BotonRestar personas = {comensales} value = {setComensales} /> </div>
          <div className='reserva_item'>   Reserva para {comensales} comensales </div>
          <div className='reserva_signo'> <BotonSumar  personas = {comensales} value = {setComensales} /> </div>
        </div>

        <form>
          <br />
          <div>
            {/*
            input type time min 19.00 max 23.00 step 00.30 
            */}
            <label  className='reserva_hora' 
                    htmlFor="horas">Hora reserva : 
            </label>
            <select className='reserva_campos' 
                    id="horas" 
                    value={horaReserva} 
                    onChange={handleChange}>
                    <option value="">-- Selecciona --</option>
                    { horas.map( (opcion) => (  <option key={opcion.value} 
                                                        value={opcion.value}> 
                                                        {opcion.label}
                                                </option> ) ) }
            </select>
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <div>
            <label  className='reserva_fecha' htmlFor="fechaReserva">Fecha reserva :</label>
            <input  className='reserva_campos'
                    min={fechaMananaStringCLS} 
                    type="date" 
                    id="fechaReserva" 
                    value={fechaReserva} 
                    onChange={(event) => setFechaReserva(event.target.value)} />
          </div>
        </form>

        <br />
        <button className='boton_reserva' 
                id='boton_reserva' 
                type="submit"
                onClick= {validarDatos}>
                Realizar reserva
        </button>
        <br />
        <br />
        <br />
      </div>

  )
}
