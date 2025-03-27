import { LitElement, html } from "lit-element";

class Tabla extends LitElement {
    static get properties(){
       return{
            lista: {Type: Array}
       }
    }

    render(){
        return html`
        <h1>Tabla de registros</h1>
        <table>
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>apellido</th>
                    <th>edad</th>
                </tr>
            </thead>
            <tbody>
                ${
                this.lista.map((item) => {
                    return html`
                        <tr>
                            <td>
                                ${item.nombre}
                            </td>
                            <td>
                                ${item.apellidos}
                            </td>
                            <td>
                                ${item.edad}
                            </td>
                        </tr>
                        `
                    })
                }
            </tbody>
        </table>
        `
    }

}
window.customElements.define('wc-tabla', Tabla)