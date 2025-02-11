import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Login extends LitElement {
    createRenderRoot() {
        return this;
    }

  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`
      <p>This is MyComponent (No npm).</p>
    `;
  }
}

customElements.define('login-page', Login);