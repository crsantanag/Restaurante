import { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { db } from '../firebase/firebase'
import { BotonRestar } from './BotonRestar'
import { BotonSumar }  from './BotonSumar'
import { ReservaMostrarMesas } from './ReservaMostrarMesas'
import './Reserva.css'

export const Reserva = () => {

  const fechaActual      = new Date()
  const fechaHoyCompleta = fechaActual.toISOString()
  const fechaHoyObjeto   = new Date(fechaHoyCompleta);
  const fechaHoyNumero   = fechaHoyObjeto.getTime();

//  const fechaHoyNumeroCLS = fechaHoyNumero - (4*60*60*1000)
//  const fechaHoyCLS       = new Date(fechaHoyNumeroCLS)
//  const fechaHoyStringCLS = fechaHoyCLS.toISOString()
//  const fechaHoyStringCLS = fechaHoyCLS.toISOString().slice(0, 10)
//  const horaHoyStringCLS  = fechaHoyCLS.toISOString().slice(11, 16)

  const fechaMananaNumero   = fechaHoyNumero + (24*60*60*1000) - (4*60*60*1000)
  const fechaManana         = new Date(fechaMananaNumero) // Tiempo en milisegundos
  const fechaMananaStringCL = fechaManana.toISOString().slice(0, 10);
  const [comensales, setComensales] = useState(1)

  useEffect( () => {
    revisaMesas()
  },
  [comensales]
)
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const [showErrorDatos, setShowErrorDatos] = useState(false);
  const [showExito, setShowExito] = useState(false);
  const [showErrorMesas, setShowErrorMesas] = useState(false);

  const [fechaReserva, setFechaReserva] = useState('')
  const [horaReserva, setHoraReserva] = useState('')
  const [mesasLibres, setMesasLibres] = useState(24)

  const horas = [
    { value: '19:00', label: '19:00' },
    { value: '19:30', label: '19:30' },
    { value: '20:00', label: '20:00' },
    { value: '20:30', label: '20:30' },
    { value: '21:00', label: '21:00' },
    { value: '21:30', label: '21:30' },
    { value: '22:00', label: '22:00' },
  ];

  const handleChangeFecha = (event) => {
    event.preventDefault();
    setFechaReserva(event.target.value);
    setShowErrorDatos (false)
    setShowExito (false)
    setShowErrorMesas (false)
  };

  const handleChangeHora = (event) => {
    event.preventDefault();
    setHoraReserva(event.target.value);
    setShowErrorDatos (false)
    setShowExito (false)
    setShowErrorMesas (false)
  };

  const validarDatos = () => {
    if (nombre.trim() === '' || email.trim() === '' || telefono === ''  || horaReserva == '' || fechaReserva === '') 
      {
        setShowErrorDatos(true)
      }

    else
      {
        const mesas = Math.round (Math.max (1, (comensales / 2) - 1));

        if (mesasLibres == 0) {
          alert ('No existen mesas disponibles')
        }
        else {
          if (mesas > mesasLibres) {
            setShowErrorMesas(true)
          }
          else {
            const reserva = {
              fecha: fechaReserva,
              hora : horaReserva,
              nombre: nombre,
              email : email,
              telefono : telefono,
              comensales: comensales,
              mesas: mesas
            }
            enviarReserva (reserva)
          }
        }
      }
    }

    const  enviarReserva  = async (reserva) => {
      await db.collection ("reservas").add (reserva)
      setShowExito(true)

      setHoraReserva('')
      setFechaReserva('')
      setComensales(1)
      setNombre ('')
      setEmail('')
      setTelefono('')
    }

    const revisaMesas = () => {

      const mesas = Math.round (Math.max (1, (comensales / 2) - 1));
      if ( mesas > mesasLibres) {
        setShowErrorMesas (true)
      }
      else {
        setShowErrorMesas (false)
      }
      setShowErrorDatos (false)
    }

/*   const sumarUno = () => {
      console.log ('SUMAR - ^^^^^^^^^^^^^^^^^^^^^^^^^')
      console.log ('SUMAR - Comensales antes de cambiar de estado : ', comensales)

      if (comensales == 12) return;

      setComensales (contador => contador + 1)

      console.log ('SUMAR - Comensales después de cambiar el estado : ', comensales)
      console.log ('SUMAR - vvvvvvvvvvvvvvvvvvvvvvvvv')
  }
*/

    function AlertaErrorDatos ( { variante, mensaje1, mensaje2 } ) {
      if (showErrorDatos) {
        return (
          <Alert variant={variante} onClose={() => setShowErrorDatos (false)} dismissible>
            <Alert.Heading> {mensaje1} </Alert.Heading>
            <p> {mensaje2} </p>
          </Alert>
        );
      }
      return <Button onClick={() => setShowErrorDatos (true)}>Show Alert</Button>;
    }

    function AlertaErrorMesas ( { variante, mensaje1, mensaje2 } ) {
      if (showErrorMesas) {
        return (
          <Alert variant = {variante} onClose={() => setShowErrorMesas(false)} dismissible>
            <Alert.Heading>  {mensaje1} </Alert.Heading>
            <p> {mensaje2} </p>
          </Alert>
        );
      }

      return <Button onClick={() => setShowErrorMesas(true)}>Show Alert</Button>;
    }

    function AlertaExito () {
      if (showExito) {
        return (
          <Alert variant="success" onClose={() => setShowExito(false)} dismissible>
            <Alert.Heading>Reserva realizada exitosamente</Alert.Heading>
            <p>
              SANTANA agradece su reserva
            </p>
          </Alert>
        );
      }
      return <Button onClick={() => setShowExito(true)}>Show Alert</Button>;
    }

  return (
  <>
  <div className='reserva'>
    <br />
    {showExito && (
      <AlertaExito />
    )}
    <div className='mostrar'>

      <div className="left-content">
        <br/>
        <h2>Solicitud de Reserva</h2>
        <br />
        <h5>Condiciones: <br/>
        - No  se  aceptan reservas para el mismo día <br/>
        - Máximo 12 comensales por reserva <br />
        - Reservas para grupos hacerlas por teléfono<br /> </h5>
        <br/>

        {showErrorDatos && (
          <AlertaErrorDatos variante = 'danger' 
                            mensaje1 = 'Error en ingreso de datos' 
                            mensaje2 = 'Todos los datos solicitados deben ingresarse' />
        )}

        <form >
          <div>
            <label  className='reserva_fecha' 
                    htmlFor="fechaReserva">
                    Fecha reserva :</label>
            <input  className='reserva_campos'
                    min={fechaMananaStringCL} 
                    type="date" 
                    id="fechaReserva" 
                    value={fechaReserva} 
                    onChange={ handleChangeFecha } />
          </div>
        </form>

        <form>
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
                    onChange={ handleChangeHora }>
                    <option value="">-- Selecciona --</option>
                    { horas.map( (opcion) => (  <option key={opcion.value} 
                                                        value={opcion.value}> 
                                                        {opcion.label}
                                                </option> ) ) }
            </select>
          </div>
        </form>

        <br />
        {showErrorMesas && (
          <AlertaErrorMesas variante = 'danger' 
                            mensaje1 = 'No existen mesas para la cantidad de comensales seleccionados' 
                            mensaje2 = 'Disminuya la cantidad de comensales, o reserve en otro día' />
        )}

        <div className='misma_linea'>
          <div className='reserva_signo'> <BotonRestar comensales = {comensales} setComensales = {setComensales} /> </div>
          <div className='reserva_item'>   Reserva para {comensales} comensal(es) </div>
{/*          <button className= 'boton_restasuma' onClick={ sumarUno }> + </button> */}
          <div className='reserva_signo'> <BotonSumar  comensales = {comensales} setComensales = {setComensales} /> </div>
        </div>

        <br />
        <br />
        <form>
          <div>
            <label  className="reserva_nombre" 
                    htmlFor="nombre">Nombre : 
            </label>
            <input  className="reserva_campos" 
                    type="text" 
                    id="nombre" 
                    value={nombre} 
                    onChange={(event) => {setNombre(event.target.value)
                                          setShowErrorDatos (false)
                                          setShowExito (false)
                                        }
                            }
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
                    onChange={(event) => {setEmail(event.target.value)
                                          setShowErrorDatos (false)
                                          setShowExito (false)
                                        }
                            }
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
                    onChange={(event) => {setTelefono(event.target.value)
                                          setShowErrorDatos (false)
                                          setShowExito (false)
                                        }
                            }
            />
          </div>
        </form>

        <br />
        <button className='boton_reserva' 
                id='boton_reserva' 
                type="submit"
                onClick= { validarDatos }>
                Realizar reserva
        </button>
        <br />
        <br />
        <br />
      </div>

      <div className='right-content'>
        < br />
        <h2>Mesas</h2>
        <br />
        <div>
          <ReservaMostrarMesas fecha = {fechaReserva} mesas = {setMesasLibres}/>
          <br />
        </div>
      </div>
    </div>  
  </div>
  </>
  )
}
