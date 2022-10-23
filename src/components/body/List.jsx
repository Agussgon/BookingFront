//style
import styles from './body.module.css';

//
import Card from './Card'

const List = ({data})=>{

    return(
       <section className={styles.container_card}>
        { 
            data.map(type =>< Card key={type.id} type={type.type} name={type.name} start={type.Start} url={type.urlImagen}/>)
           }
        </section>
    )
}

export default List; 