
export const Category=({count,name,urlImagen})=>{



    return (
        <>
          <div className={`f-col card_category`}>
            <img src={urlImagen} alt={name} className="m-img-deskt-category" /> 
            <div>  {/* terminar de cuadrar */}
            {/* <div className={styles.card_child2} > */}
              <h3>{name}</h3>
              <p>{count}</p>
              
           
            </div>
          </div>
        </>
      )

}