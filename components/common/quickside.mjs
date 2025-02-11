import { LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class QuickSide extends LitElement {
    createRenderRoot() {
        return this;
    }
  render() {
    return html`
        <aside class="p-[8px]">
            <nav class="w-[40px]">
                <ul>
                    <li class="relative mb-[8px]" x-data="{show:false}">
                        <button
                            class="rounded-full hover:bg-bgGray size-[40px] flex flex-col justify-center"
                        >
                            <img src="./assets/images/memo_icon.svg" class="object-contain w-[50%] mx-auto"/>
                            
                        </button>
                        <p
                            class="absolute py-[4px] px-[16px] rounded-xl bg-[#00000022] whitespace-norwrap break-keep right-[50px] top-[50%] text-xs translate-y-[-50%]"
                        >메모장</p>
                    </li>
                    <li class="relative mb-[8px]" x-data="{show:false}">
                        <button
                            class="rounded-full hover:bg-bgGray size-[40px] flex flex-col justify-center"
                        >
                            <img src="./assets/images/calendar_icon.svg" class="object-contain w-[50%] mx-auto"/>
                            
                        </button>
                        <p
                            class="absolute py-[4px] px-[16px] rounded-xl bg-[#00000022] whitespace-norwrap break-keep right-[50px] top-[50%] text-xs translate-y-[-50%]"
                        >캘린더</p>
                    </li>
                    <li class="relative mb-[8px]" x-data="{show:false}">
                        <button
                            class="rounded-full hover:bg-bgGray size-[40px] flex flex-col justify-center"
                        >
                            <img src="./assets/images/contactboock_icon.svg" class="object-contain w-[50%] mx-auto"/>
                            
                        </button>
                        <p
                            class="absolute py-[4px] px-[16px] rounded-xl bg-[#00000022] whitespace-norwrap break-keep right-[50px] top-[50%] text-xs translate-y-[-50%]"
                        >주소록</p>
                    </li>
                    <li class="relative mb-[8px]" x-data="{show:false}">
                        <button
                            class="rounded-full hover:bg-bgGray size-[40px] flex flex-col justify-center"
                        >
                            <img src="./assets/images/webhard_icon.svg" class="object-contain w-[50%] mx-auto"/>
                            
                        </button>
                        <p
                            class="absolute py-[4px] px-[16px] rounded-xl bg-[#00000022] whitespace-norwrap break-keep right-[50px] top-[50%] text-xs translate-y-[-50%]"
                        >웹하드</p>
                    </li>
                    <li class="relative mb-[8px]" x-data="{show:false}">
                        <button
                            class="rounded-full hover:bg-bgGray size-[40px] flex flex-col justify-center"
                        >
                            <img src="./assets/images/board_icon.svg" class="object-contain w-[50%] mx-auto"/>
                            
                        </button>
                        <p
                            class="absolute py-[4px] px-[16px] rounded-xl bg-[#00000022] whitespace-norwrap break-keep right-[50px] top-[50%] text-xs translate-y-[-50%]"
                        >게시판</p>
                    </li>
                </ul>
            </nav>
            </aside>
    `;
  }
}

customElements.define('quickside-com', QuickSide);