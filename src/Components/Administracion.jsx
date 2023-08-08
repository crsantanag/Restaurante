import { useState } from 'react'
import './Administracion.css'

export const Administracion = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // Aquí va la lógica de inicio de sesión
    if (username == 'admin' && password == 'admin' ) {
    const urlActual = window.location.href;
    const urlNueva = urlActual.replace('administracion', 'consultareservas');
    alert(urlActual)
    alert(urlNueva)
    location.replace(urlNueva)
    }
  };


return (
  <>
    <div className='mostrar_admin'>
    <br />
    <h2>Administración</h2>
      <form onSubmit={handleSubmitLogin}>
            <div>
                <label className='consulta_username_admin' 
                htmlFor="username">Nombre de Usuario:</label>
                <input
                    className='consulta_username_admin'
                    type="text"
                    id="username"
                    value={username}
                    onChange={ handleUsernameChange }
                />
            </div>
            <div>
                <label className='consulta_username_admin' htmlFor="password">Contraseña:</label>
                <input
                    className='consulta_username_admin'
                    type="password"
                    id="password"
                    value={password}
                    onChange={ handlePasswordChange }
                />
            </div>
            <br />
            <button 
              className="administracion_submit" 
              type="submit"
              onClick= { handleSubmitLogin }>
              Iniciar Sesión
            </button>
      </form>
      <br />
  </div>
  </>
)
};