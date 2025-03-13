import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'; 
import {SearchDetail} from '../index.mjs'




export class Search extends LitElement {
    createRenderRoot() {
        return this;
    }
  render() {

    
    return html`
        <!-- search -->
        <div 
            class="flex justify-between my-[4px] p-[8px] rounded-[24px] bg-slate-200 min-w-[600px] leading-[32px] focus-within:bg-white focus-within:shadow-md transition-all relative"
        >
            <button 
                class="w-[32px] hover:bg-gray-300 rounded-full"
            >
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
                placeholder="메일 검색"
                class="bg-[transparent] w-[calc(100%-98px)] px-[4px] outline-none focus:ring-0"
            />
            <div class="flex justify-end min-w-[66px]">
                <button
                    class="w-[32px] mr-[2px] hover:bg-gray-300 rounded-full"
                >
                    <i class="fa-solid fa-x"></i>
                </button>                
                <button
                    class="w-[32px] hover:bg-gray-300 rounded-full"
                >
                    <i class="fa-solid fa-sliders"></i>
                </button>
            </div>
            <search-detail-com 
                class="absolute top-[50px] left-0 w-full border border-gray-400 p-[8px] shadow-md leading-[24px] bg-white z-9 text-[14px] rounded-md"
            ></search-detail-com>
        </div>
    `;
  }
}

customElements.define('search-com', Search);

