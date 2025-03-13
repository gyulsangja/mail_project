import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class SearchDetail extends LitElement {
    createRenderRoot() {
        return this;
    }

  render() {
    return html`
    <div>
        <dl class="flex mb-[4px]">
            <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="fromMail">보낸사람</label></dt>
            <dd class="w-[80%]"><input id="fromMail" name="fromMail" class="border-gray-400 border-b w-full outline-none focus:ring-0 p-[4px]" /></dd>
        </dl>
        <dl class="flex mb-[4px]">
            <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="toMail">받는사람</label></dt>
            <dd class="w-[80%]"><input id="toMail" name="toMail" class="border-gray-400 border-b w-full outline-none focus:ring-0 p-[4px]" /></dd>
        </dl>
        <dl class="flex mb-[4px]">
            <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="contentMail">제목/내용</label></dt>
            <dd class="w-[80%]"><input id="contentMail" name="contentMail" class="border-gray-400 border-b w-full outline-none focus:ring-0 p-[4px]" /></dd>
        </dl>
        <dl class="flex mb-[4px]">
            <dt class="text-gray-500 w-[20%] leading-[33px]"><label for="mailbox">메일함</label></dt>
            <dd class="w-[80%]">
                <select id="mailbox" name="mailbox" class="p-[4px] w-full outline-none focus:ring-0 cursor-pointer border-b border-gray-400">
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
                    class="border-gray-400 border-b w-[33%] outline-none focus:ring-0 p-[4px]"
                    placeholder="시작"
                />
                <input
                    id="periodEnd"
                    name="periodEnd"
                    class="border-gray-400 border-b w-[33%] outline-none focus:ring-0 p-[4px]"
                    placeholder="끝"
                />
            </dd>
        </dl>
        <dl class="flex">
            <dd class="flex leading-[33px] cursor-pointer group mr-[16px]">
                <div class="size-[33px] rounded-full flex flex-colume mr-[8px] group-hover:bg-gray-300">
                    <input type="checkbox" id="attachment" name="attachment" class="m-auto size-[16px] bg-[transparent]" />
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
    `;
  }
}

customElements.define('search-detail-com', SearchDetail);