import React, {useState} from 'react'

const useStateContador = props => {

    const [contador, setContador] = useState(10);

    return (
        <div>
            <h1>
                {contador}
            </h1>
            <button onClick={() => setContador(contador+1)}>
                Inc
            </button>
        </div>
    )
} 

export default useStateContador