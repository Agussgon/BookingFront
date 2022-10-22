



const Card=({type, name,start, url })=>{

    return( 
    <div>
        <div> <img src={url} alt={name}/> 
         </div>
         <div>
        <h3>{type}</h3>
        <p>{name}</p>
        <p>{start}</p>
        </div>

    </div>
    )
}

export default Card;