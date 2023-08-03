import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'

export const ReservaDisplay = () => {
{/* }  const [reservas, setReservas] = useState([])
  const getReservas = async() => {
    db.collection('reservas').onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
    });
    setReservas(docs)
    console.log (docs)
    }
    );
  };

  useEffect( () => {
    getReservas()
  },
  []
)
*/}

return (
  <>
  </>
)
};