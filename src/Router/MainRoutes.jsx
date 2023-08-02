import { Routes, Route } from "react-router-dom";
import { Bienvenidos } from '../Pages/Bienvenidos'
import { Nosotros } from '../Pages/Nosotros'
import { Menu } from '../Pages/Menu'
import { Reserva } from '../Pages/Reserva'
import { Contacto } from '../Pages/Contacto'
import { Ubicacion } from '../Pages/Ubicacion'
import { Blog } from '../Pages/Blog'


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Bienvenidos />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reserva' element={<Reserva />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/ubicacion' element={<Ubicacion />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
};

