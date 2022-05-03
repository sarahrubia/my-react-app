import React, {Component} from 'react';

export default class Contador extends Component {

    state = {
        numero: this.props.numero
    }

    // A função deve utilizar arrow function

    maisUm = () => {
        // console.log(this)

        // this.props.numero++ não funciona pq this é só para leitura. Então usa-se o state acima, para defini-lo, e com o setState, poder alterar o this.

        // this.props.numero++; 

        this.setState({numero: this.state.numero + 1})
    }

    render(){
        return (
            <div>
                <span>Número: {this.state.numero}</span>
                <button onClick={this.maisUm}>Incremento</button>
            </div>)
        }
}