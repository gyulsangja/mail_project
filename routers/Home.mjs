import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import {
  Header,
  Aside
} from '../components/index.mjs';

export class Home extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div 
        class="h-full w-full bg-[#f6f8fc]"
    >
        <header-com></header-com>

        <!-- 메인 시작 -->
        
            <!-- home 메일서비스 시작 -->
            <div class="flex h-[calc(100%-56px)] p-[8px]">
              <aside-com></aside-com>
                
        
                <!-- 본문 -->
                <main class="bg-white w-[calc(100%-312px)] rounded-2xl p-[15px]">
                    <section class="">
        
        
                    </section>
                </main>
                <!-- 본문끝 -->
                <quickside-com></quickside-com>
                <!-- 퀵사이드 -->
            </div>

    </div>
    `;
  }
}

customElements.define('home-page', Home);