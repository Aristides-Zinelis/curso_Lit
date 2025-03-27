import { LitElement, html } from "lit-element";

class Registro extends LitElement {
    static get properties(){
        return {
            nombre: {Type: String},
            apellidos: {Type: String},
            edad: {Type: Number}
            }
        }

        constructor(){
            super();
            this.nombre = this.apellidos = this.edad = '';
        }

        manejador(nombre){
            return (event)=>{
                let valor = event.target.value;
                this[nombre] = valor;
            }
        }

        guardar(){
            let detail = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                edad: this.edad
            }

            let options = {
                detail: detail,
                bubble: true,
                composed: true
            }
            this.dispatchEvent(new CustomEvent('guardarPersona', options))
        }

        render(){
            return html`
                <form>
                    <label>Nombre<input @input="${this.manejador('nombre')}" .value="${this.nombre}" type='text'/></label>
                    <label>Apellidos<input @input="${this.manejador('apellidos')}" .value="${this.apellidos}" type='text'/></label>
                    <label>Edad<input  @input="${this.manejador('edad')}" .value="${this.edad}" type='text'/></label>
                    <button @click="${this.guardar}" type='button'>Guardar</button>
                </form>

            `
        }

}

window.customElements.define('wc-registro', Registro)