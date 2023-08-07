import './Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
      <br />
      <h2>Menú</h2>
      <div className="menu">
        <br/>
        <img className= "menu_carta" src="/assets/images/comidas.jpg" alt="Comidas" />
        <br/>
        <br/>
        <img className= "menu_carta" src="/assets/images/postres.jpg" alt="Postres" />
        <br/>
        <br/>
        <img className= "menu_carta" src="/assets/images/vinos.jpg" alt="Vinos" />
      </div>

    </div>
  )
}

