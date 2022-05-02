import React from 'react';

// Exportar depois da função

let condicao = false;

function primeiro(props){
    return <div>
        <h1>{props.valor}</h1>
        <h2>{props.nome}</h2>
        <p>{condicao ? 'SIM' : 'NÃO'}</p>
    </div>
}
export default primeiro

// O export pode ser feito direto na função 

// export default function primeiro(){
//     return <h1>Primeiro Componente</h1>
// }

// Exportar sem o nome da função

// export default function(){
//     return <h1>Primeiro Componente</h1>
// }


// Exportar com arrow function

// export default () => 
//     <h1>Primeiro Componente</h1>