import { LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Aside extends LitElement {
    createRenderRoot() {
        return this;
    }
  render() {
    return html`
    <aside class="w-[256px] p-[8px] leading-[40px]">
        <nav>
            <ul>
                <li class="mb-[4px]">
                    <a href="#"
                        class="flex rounded-lg bg-[#d3e3fd]">
                        <div class="w-[40px] text-center mr-[4px] rounded-[50%]">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <p>전체메일</p>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    `;
  }
}

customElements.define('aside-com', Aside);