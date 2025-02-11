import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Notpage extends LitElement {
  createRenderRoot() {
    return this;
}

  render() {
    return html`
      <p>not page</p>
    `;
  }
}

customElements.define('not-page', Notpage);