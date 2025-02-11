import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class MyComponent extends LitElement {
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

customElements.define('my-component', MyComponent);