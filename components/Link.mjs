import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Link extends LitElement {
  createRenderRoot() {
    return this; // Light DOM 사용
  }

  static properties = {
    href: { type: String }
  };

  constructor() {
    super();
    this.href = '#';
  }

  firstUpdated() {
    const aTag = this.renderRoot.querySelector('a');

    // <link-com> 내부의 모든 노드를 가져오기
    const nodes = Array.from(this.childNodes); 
    
    // 텍스트 노드만 추출하여 <a> 태그 안에 추가
    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        aTag.appendChild(node);
      }
    });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.href) {
      router.navigate(this.href);
    }
  }

  render() {
    return html`
      <a href="${this.href}" @click="${this.handleClick}" class="cursor-pointer block leading-[inherit]">
      </a>
    `;
  }
}

customElements.define('link-com', Link);


