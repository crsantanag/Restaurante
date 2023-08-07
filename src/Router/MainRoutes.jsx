import { Routes, Route } from "react-router-dom";
import { Portada } from '../Components/Portada'
import { Nosotros } from '../Components/Nosotros'
import { Menu } from '../Components/Menu'
import { Reserva } from '../Components/Reserva'
import { Contacto } from '../Components/Contacto'
import { Ubicacion } from '../Components/Ubicacion'
import { Blog } from '../Components/Blog'
import { Admin } from "../Components/Admin";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Portada />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reserva' element={<Reserva />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/ubicacion' element={<Ubicacion />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
};

