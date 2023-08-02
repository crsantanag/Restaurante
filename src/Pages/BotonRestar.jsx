import './Boton.css'

export const BotonRestar = ( { value, personas } ) => {
    
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