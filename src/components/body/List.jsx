//style
// import styles from './body.module.css';

//json 
import data from '../../data/data.json'

//
import Card from './Card'

const List = () => {

	return (
		<section className={`f-row f-center wrap container_card`}>
			{
				data.map(type => <Card key={type.id} type={type.type} name={type.name} stars={type.stars} urlImagen={type.urlImagen} />)
			}
			{/* {
				data.map(type => <Card dat={data} key={type.id}/>)
			} */}
		</section>
	)
}

export default List; 