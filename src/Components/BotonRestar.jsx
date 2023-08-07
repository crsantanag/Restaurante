import './Boton.css'

export const BotonRestar = ( { personas, value  } ) => {
    
     const restarUno = () => {
        if (personas == 1) return;
        value (contador => contador-1)
    }

    return (
        <>
        <button className= 'boton_restasuma' onClick={restarUno}> - </button>
        </>
    )
}