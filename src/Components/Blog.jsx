import './Blog.css'

export const Blog = () => {

  return (
    <div className="blog">
      <br/>
      <h2> Blog</h2>
    <br/>
    <div className="card-container">

      <div className="card">
        <img src="/assets/images/blog1.jpg" alt="Blog1" />
				<div className="info-article" >
					PULPO A LA BRASA, UNA ESPECIALIDAD DE SANTANA
          <p className="title-info-article" >
          Nuestro pulpo no es uno más, es un pulpo diferente. A continuación te explicamos el porqué.
					</p>
					<p className="description-info-article">
          El pulpo es un cefalópodo que procede de aguas ricas en marisco, aguas corrientes marinas, que le obligan a 
          esforzarse para conseguir la comida y le dan esa textura firme tan característica en su carne. Al ser un animal 
          muy selectivo, come lo mejor que caza en sus aguas, ese marisco que le da el sabor tan especial y tan valorado.
					</p>
					<div className="author-name">Carlos Santana</div>
					<div className="publication-date">20 de julio de 2023</div>
				</div>
			</div>

			<div className="card">
        <img src="/assets/images/blog2.jpg" alt="Blog2" />
				<div className="info-article" >
          ¿CONOCES EL LOMO DE BACALAO DE SANTANA?
          <p className="title-info-article" >
          Primero un poco de historia del bacalao
					</p>
					<p className="description-info-article">
          El pulpo es un cefalópodo que procede de aguas ricas en marisco, aguas corrientes marinas, que le obligan a 
          esforzarse para conseguir la comida y le dan esa textura firme tan característica en su carne. Al ser un animal 
          muy selectivo, come lo mejor que caza en sus aguas, ese marisco que le da el sabor tan especial y tan valorado.
					</p>
					<div className="author-name">Carlos Santana</div>
					<div className="publication-date">26 de julio de 2023</div>
				</div>
			</div>

      <div className="card">
        <img src="/assets/images/blog3.jpg" alt="Blog3" />
				<div className="info-article" >
          CREMA CATALANA, UN POSTRE DE LA COCINA TRADICIONAL CATALANA
          <p className="title-info-article" >
          Si hay un postre estrella en las cocinas de Cataluña, ese es la crema catalana.
					</p>
					<p className="description-info-article">
          <br/>
          <br/>
          UN POCO DE HISTORIA
          <br/>
          La crema catalana es también conocida con los nombres de “crema cremada” o “crema de Sant Josep”, 
          ya que antiguamente se consumía en esta fecha del santo que es el 19 de Marzo.
          <br/>
          Es una de las recetas más antiguas de Europa referente a postres y ya aparece su receta en libros como 
          “Libre de Sent Soví” del siglo XIV o el “Llibre del Coch” del XVI.
					</p>
					<div className="author-name">Carlos Santana</div>
					<div className="publication-date">27 de julio de 2023</div>
				</div>
			</div>

      <div className="card">
        <img src="/assets/images/blog4.jpg" alt="Blog4" />
				<div className="info-article" >
          NUEVA CARTA DE VINOS EN SANTANA
          <p className="description-info-article">
          Este mes llega cargado de novedades. Una de ellas, la carta de vinos. La innovación no solo está en el contenido, 
          también hemos renovado el diseño. La original presentación anterior, reproducción de una botella de vino tamaño 
          mangum con toda la información en su etiqueta, se ha reemplazado por una más clásica pero dónde quedan mejor 
          presentados toda la información. Es formato díptico, y, en ella, cada vino va con imagen y referencia. A parte, 
          se han agrupado todos los vinos por su tipología, lo que hará mucho más fácil la elección. Vinos blancos, rosados, 
          tinto y cavas.
					</p>
					<div className="author-name">Carlos Santana</div>
					<div className="publication-date">26 de julio de 2023</div>
				</div>
			</div>
			
    </div>
    </div>

  );
};
