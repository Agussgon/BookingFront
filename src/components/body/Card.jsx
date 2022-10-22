



const Card=({type, name,location, url })=>{

    return( 
    <>
    <div> <img src={url} alt={name}/> </div>
    <div>
        <h3>{type}</h3>
        <p>{name}</p>
        <p>{location}</p>
    </div>

    </>)
}