
import staricon from '../../assets/icons/star.png'


const Card = ({ type, name, stars, urlImagen, description }) => {
  // console.log(type, stars)
  //
  /* react-dom.development.js:86 Warning: Functions are not valid as a React child. 
  This may happen if you return a Component instead of
   <Component /> from render. Or maybe you meant to call this function rather than return it. 
   https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon */
  const star = ({ stars }) => {
    const container = <div> </div>;
    for (let index = 0; index <= stars; index++) {
      container.innerHTML += <img src={staricon} alt='estrella ' />
    }
  }


  return (
    <>
      <div className={`f-row card_recomend`}>
        <img src={urlImagen} alt={name} className="m-img-deskt" /> 
        <div>  {/* terminar de cuadrar */}
        {/* <div className={styles.card_child2} > */}
          <h3>{type}</h3>
          <p>{name}</p>
          <p>{stars}</p>
          <img src={staricon} alt='estrella ' />
          {star}
          <p>{description}</p>
          <button type="submit">Ver mas</button>
        </div>
      </div>
    </>
  )
}

export default Card;