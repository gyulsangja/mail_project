import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Link extends LitElement {
  static styles = css`
      a{
        line-height: var(--link-line-height);
        display: var(--link-display);
        font-weight: var(--link-font-weight);
        padding: var(--link-padding);
        color:var(--link-color);
        text-decoration:none;
      }
  `;
    static properties = {
        href: { type: String }
      };
    
      constructor() {
        super();
        this.href = '#';
      }
    
      handleClick(event) {
        event.preventDefault();
        if (this.href) {
          router.navigate(this.href);
        }
      }
    render() {
        return html`
            <a href="${this.href}" @click="${this.handleClick}">
                <slot></slot>
            </a>
        `;
    }
}

customElements.define('link-com', Link);