import './Boton.css'

export const BotonSumar = ( { personas, value } ) => {
    
     const sumarUno = () => {
        if (personas == 12) return;
        value (contador => contador+1)
    }

    return (
        <>
        <button className= 'boton_restasuma' onClick={sumarUno}> + </button>
        </>
    )
}