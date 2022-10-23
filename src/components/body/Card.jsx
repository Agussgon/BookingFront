
import styles from './body.module.css'


const Card=({type, name, start, url, descripcion})=>{

    return( 
    <div className={styles.card}>
        <div className={styles.card_child1} > <img src={url} alt={name}/> 
        </div>
        <div className="card_child2">
        <h3>{type}</h3>
        <p>{name}</p>
        <p>{start}</p>
        <p>{descripcion}</p>
        <button type="submit">Ver mas</button>
        </div>
    </div>
    )
}

export default Card;