import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'; 


export class Search extends LitElement {
    createRenderRoot() {
        return this;
    }
  render() {
    return html`
        <!-- search -->
        <div
        x-cloak
        x-show="$store.router.isExactRoute('home')" 
        x-data="searchComponent"
        class="flex justify-between my-[4px] p-[8px] rounded-[24px] bg-slate-200 min-w-[600px] leading-[32px] focus-within:bg-white focus-within:shadow-md transition-all relative"
        >
        <button 
            class="w-[32px] hover:bg-gray-300 rounded-full"
            @click="handleSearchClick"
            x-ref="searchBtn"
        >
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input 
            x-model="searchMail"
            placeholder="메일 검색"
            class="bg-[transparent] w-[calc(100%-98px)] px-[4px] outline-none focus:ring-0"
            @keyup="handleEnterKey"
        />
        <div class="flex justify-end min-w-[66px]">
            <button 
                x-cloak
                x-show="searchMail.length > 0"
                @click="clearSearch"
                class="w-[32px] mr-[2px] hover:bg-gray-300 rounded-full"
            >
                <i class="fa-solid fa-x"></i>
            </button>                
            <button
                class="w-[32px] hover:bg-gray-300 rounded-full"
                @click="toggleOpen"
            >
                <i class="fa-solid fa-sliders"></i>
            </button>
        </div>
        <div 
            x-cloak
            x-show="isOpen"
            @click.outside="closeAndReset"
            class="absolute top-[50px] left-0 w-full border border-gray-400 p-[8px] shadow-md leading-[24px] bg-white z-9 text-[14px] rounded-md"
            x-transition
        >
            <dl class="flex mb-[4px]">
                <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="fromMail">보낸사람</label></dt>
                <dd class="w-[80%]"><input id="fromMail" name="fromMail" x-model="fromMail" class="border-gray-400 border-b w-full outline-none focus:ring-0 p-[4px]" /></dd>
            </dl>
            <dl class="flex mb-[4px]">
                <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="toMail">받는사람</label></dt>
                <dd class="w-[80%]"><input id="toMail" name="toMail" x-model="toMail" class="border-gray-400 border-b w-full outline-none focus:ring-0 p-[4px]" /></dd>
            </dl>
            <dl class="flex mb-[4px]">
                <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="contentMail">제목/내용</label></dt>
                <dd class="w-[80%]"><input id="contentMail" name="contentMail" x-model="contentMail" class="border-gray-400 border-b w-full outline-none focus:ring-0 p-[4px]" /></dd>
            </dl>
            <dl class="flex mb-[4px]">
                <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="mailbox">메일함</label></dt>
                <dd class="w-[80%]">
                    <select id="mailbox" name="mailbox" x-model="mailbox" class="p-[4px] w-full outline-none focus:ring-0 cursor-pointer border-b border-gray-400">
                        <option value="all">전체메일</option>
                        <option value="0">받은메일함</option>
                        <option value="toMe">내게쓴메일함</option>
                        <option value="0">내게쓴메일함</option>
                    </select>
                </dd>
            </dl>
            <dl class="flex mb-[4px]">
                <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="period">기간</label></dt>
                <dd class="w-[80%] flex justify-between">
                    <select 
                        id="period"
                        name="period"
                        x-model="selectedPeriod"
                        @change="updateDateRange"
                        class="p-[4px] w-[25%] outline-none focus:ring-0 cursor-pointer border-b border-gray-400"
                    >
                        <option value="all">전체</option>
                        <option value="week">1주일</option>
                        <option value="month">1개월</option>
                        <option value="tMonth">3개월</option>
                        <option value="sMonth">6개월</option>
                        <option value="year">1년</option>
                        <option value="free">직접입력</option>
                    </select>
                    <input
                        id="periodStr"
                        name="periodStr"
                        x-model="periodStr"
                        @input="selectedPeriod = 'free'"
                        class="border-gray-400 border-b w-[33%] outline-none focus:ring-0 p-[4px]"
                        placeholder="시작"
                    />
                    <input
                        id="periodEnd"
                        name="periodEnd"
                        x-model="periodEnd"
                        @input="selectedPeriod = 'free'"
                        class="border-gray-400 border-b w-[33%] outline-none focus:ring-0 p-[4px]"
                        placeholder="끝"
                    />
                </dd>
            </dl>
            <dl class="flex">
                <dd class="flex leading-[33px] cursor-pointer group mr-[16px]">
                    <div class="size-[33px] rounded-full flex flex-colume mr-[8px] group-hover:bg-gray-300">
                        <input type="checkbox" id="attachment" name="attachment" x-model="attachment" class="m-auto size-[16px] bg-[transparent]" />
                    </div>
                    <label for="attachment" class="cursor-pointer">첨부파일 있음</label>
                </dd>
                <dd class="flex leading-[33px] cursor-pointer group">
                    <div class="size-[33px] rounded-full flex flex-colume mr-[8px] group-hover:bg-gray-300">
                        <input type="checkbox" id="includeTrash" name="includeTrash" x-model="includeTrash" class="m-auto size-[16px] bg-[transparent]" />
                    </div>
                    <label for="includeTrash" class="cursor-pointer">휴지통/스팸메일함 포함</label>
                </dd>
            </dl>
            <div class="flex justify-end">
                <button class="bg-[#1a73e8] px-[16px] py-[8px] text-white rounded-md shadow-sm hover:shadow-lg hover:bg-[#689ee5]">상세검색</button>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('search-com', Search);