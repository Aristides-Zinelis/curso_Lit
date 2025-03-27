import { LitElement, html } from "lit-element";
import "./tabla"
import "./registro"

class Home extends LitElement{
    static get properties(){
        return{
            lista: {type: Array}
        }
    }

    constructor(){
        super();
        this.lista = [
            {nombre: 'Jorge', apellidos: 'garcia perez', edad: '30'},
            {nombre: 'Maria', apellidos: 'rios de rio', edad: '25'},
            {nombre: 'Julia', apellidos: 'duran duran', edad: '45'},

        ]
    }

    agregaraLista(event){
        let newlista = [...this.lista, event.detail]
        this.lista = newlista;
    }


    render(){
       return html`
        <wc-registro @guardarPersona="${this.agregaraLista}"></wc-registro>
        <wc-tabla .lista=${this.lista}></wc-tabla>
        `
    }

}

window.customElements.define('wc-home', Home)