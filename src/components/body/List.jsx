//style
// import styles from './body.module.css';

//json 
import data from '../../data/data copy.json'
import category from '../../data/category.json'

//
import Card from './Card'
import { Category } from './Category'



const List = () => {
	return (
		<>
		{/*Implementar el template del bloque Categorías Categorías: Crear un bloque 
		que incluya un heading <h2 /> cómo título, un parágrafo <p /> y debajo 4 imágenes
		 con sus correspondientes captions. */ }

        <div>
		<div className={`f-column f-center `}>
			<h2>Buscar por tipo de alojamiento</h2> 
			<p>Encontrá lo que buscas </p>
		</div>
		<section className={`f-row f-center wrap container_card_category`}>
			
		{
				category.map(category => <Category key={category.id} count={category.category_count} name={category.category_name}  urlImagen={category.urlImagen} />)
			}
		</section>
		</div>
		
		{/* listado de las cartas de todos los alojamientos  */}
		<section className={`f-row f-center wrap container_card`}>
			{
				data.map(type => <Card key={type.id} type={type.type} name={type.name} distance={type.distance} urlImagen={type.urlImagen} description={type.description}/>)
			}
			{/* {
				data.map(type => <Card dat={data} key={type.id}/>)
			} */}
		</section>
		</>
	)
}

export default List; 