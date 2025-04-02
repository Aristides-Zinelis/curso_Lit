import { LitElement, html, css } from "lit-element";

class NavBar extends LitElement {

    static get styles(){
        return css`
        .contenedor-navbar{
            display: flex;
            justify-content: center;
            margin: auto;
            background-color: #83b983;
            padding: 1pc;
        }
        `
    }

    render() {
        return html`
            <div class="contenedor-navbar">
                <wc-link to="/default">
                    <wc-boton texto="Home"></wc-boton>
                </wc-link>
                <wc-link to="/pagina2">
                    <wc-boton texto="pagina 2"></wc-boton>
                </wc-link>
                <wc-link to="/pagina3">
                    <wc-boton texto="pagina 3"></wc-boton>
                </wc-link>
            </div>
        `;
    }
}

customElements.define('wc-navbar', NavBar);