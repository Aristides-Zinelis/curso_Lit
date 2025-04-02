import { LitElement, html } from "lit-element";

class Pagina2 extends LitElement{

    render(){
        return html`
            <div>
                <h1>Hola desde Pagina2</h1>
            </div>
        `
    }
}

window.customElements.define('wc-pagina2', Pagina2)