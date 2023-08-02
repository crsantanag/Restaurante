

export const Footer = () => {
  return (
    <div>

<div className="container my-5">
        <footer>
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">SANTANA</h5>
                <p>
                Santana nace en el año 2010 como un nuevo concepto de restaurante de calidad, 
                que aúna las características de la cocina sana tradicional -cocinada a la brasa 
                de carbón- con una fórmula novedosa de entender el acto de comer, o simplemente, 
                disfrutar de un entorno agradable, moderno y desenfadado.
                </p>
                <div className="mt-4">
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg" >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg" >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg" >
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">CONTACTO</h5>
                <ul className="fa-ul">
                  {" "}
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">
                      Av. Libertador Bernardo OHiggins 214, Concepción - Chile
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">contacto@santana.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+ 56 41 5555555</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">HORARIOS</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Lunes - Jueves</td>
                      <td>19:00 - 24.00 hrs.</td>
                    </tr>
                    <tr>
                      <td>Viernes - Sábado</td>
                      <td>19:00 - 2:00 hrs</td>
                    </tr>
                    <tr>
                      <td>Domingo</td>
                      <td>Cerrado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            {" "}
            © 2023 Copyright:
            SANTANA
          </div>
        </footer>
      </div>

    </div>
  )
}
