import { useState } from 'react';
import './Contacto.css'

export const Contacto = () => {
  // Estados para guardar los valores de los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí agregar la lógica para enviar los datos del formulario a un servidor
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
  };

  return (
    <div className="contacto">
      <br/>
      <h2>¿ALGUNA PREGUNTA?</h2>
      <h5>No dudes en contactarnos. Estamos encantados <br/>
          de ayudarte en todo lo que puedas necesitar.</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <label  className="nombre" 
                  htmlFor="nombre">Nombre : 
          </label>
          <input  className="campo" 
                  type="text" 
                  id="nombre" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <br />
          <label  className="email" 
                  htmlFor="email">Email @ : 
          </label>
          <input  className="campo" 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <br />
          <label  className="mensaje" 
                  htmlFor="mensaje">Mensaje : 
          </label>
          <textarea className="campo" 
                    id="mensaje" 
                    value={mensaje} 
                    onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <br />
        <button className='boton' type="submit"> Enviar mensaje</button>
        <br/>
      </form>
      <br/>
    </div>
  );
};

