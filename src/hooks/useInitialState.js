import React, { useEffect, useState } from 'react'
import initialState from '../helpers/initialState'

const useInitialState = () => {
  const [state1, setState1] = useState(initialState);
  // useEffect(() => {
    
  // console.log(state1)
  // }, [])
  
  return (
    <div>useInitialState</div>
  )
}

export default useInitialState