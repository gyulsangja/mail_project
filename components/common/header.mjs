import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import { Link } from '../Link.js';
import { Search } from './search.mjs';



document.addEventListener("alpine:init", () => {
    Alpine.data("searchComponent", () => ({
        searchMail: "",

        handleSearchClick() {
            if (this.searchMail.length > 0) {
                alert("검색 실행: " + this.searchMail);
            }
        },

        handleEnterKey(event) {
            if (event.key === "Enter" && this.searchMail.length > 0) {
                this.handleSearchClick();
            }
        },

        clearSearch() {
            this.searchMail = "";
        },


        // search detail
        isOpen: false,  
        fromMail: '',
        toMail: '',
        contentMail: '',
        mailbox: 'all',
        selectedPeriod: 'all',
        periodStr: '',
        periodEnd: '',
        attachment: false,
        includeTrash: false,

        resetFields() {
            this.fromMail = '';
            this.toMail = '';
            this.contentMail = '';
            this.mailbox = 'all';
            this.selectedPeriod = 'all';
            this.periodStr = '';
            this.periodEnd = '';
            this.attachment = false;
            this.includeTrash = false;
        },

        toggleOpen() {
            this.isOpen = !this.isOpen;
            if (!this.isOpen) {
                this.resetFields(); 
            }
        },
        closeAndReset() {
            this.isOpen = false;
            this.resetFields();
        },

        updateDateRange() {
            if (this.selectedPeriod === 'free') {
                return;
            }

            let today = new Date();
            let startDate = new Date();

            switch (this.selectedPeriod) {
                case 'week':
                    startDate.setDate(today.getDate() - 7);
                    break;
                case 'month':
                    startDate.setMonth(today.getMonth() - 1);
                    break;
                case 'tMonth':
                    startDate.setMonth(today.getMonth() - 3);
                    break;
                case 'sMonth':
                    startDate.setMonth(today.getMonth() - 6);
                    break;
                case 'year':
                    startDate.setFullYear(today.getFullYear() - 1);
                    break;
                default:
                    this.periodStr = '';
                    this.periodEnd = '';
                    return;
            }

            this.periodStr = startDate.toISOString().split('T')[0];
            this.periodEnd = today.toISOString().split('T')[0];
        }

        
    }));
});


// 기간
$(document).ready(function() {
    $("#periodStr, #periodEnd").flatpickr({
        dateFormat: "Y-m-d",
        enableTime: false,
        maxDate: "today",
        locale: {
            weekdays: {
                shorthand: ["일", "월", "화", "수", "목", "금", "토"],
                longhand: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            months: {
                shorthand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                longhand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
            }
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let periodStrInput = document.getElementById('periodStr');
    let periodEndInput = document.getElementById('periodEnd');

    flatpickr(periodStrInput, {
        dateFormat: "Y-m-d",
        onChange: function() {
            Alpine.data('datePicker').selectedPeriod = 'free';
        }
    });

    flatpickr(periodEndInput, {
        dateFormat: "Y-m-d",
        onChange: function() {
            Alpine.data('datePicker').selectedPeriod = 'free';
        }
    });
});

export class Header extends LitElement {
    createRenderRoot() {
        return this;
    }  
    render() {
    return html`
    <header class="h-[56px] px-[8px] flex justify-between">
                    
        <!-- right -->
        <div class="flex">
        <!-- h1 부분 -->
        <section class="flex w-[256px] px-[8px]">
            <button class="leading-[40px] w-[40px] rounded-[50%] h-[40px] my-auto hover:bg-[#e8eaed] ">
                <i class="fa-solid fa-bars"></i>
            </button>
            <h1 class="leading-[56px]">
                <a href="#/home" class="block font-bold px-[8px]">LX 메일</a>
            </h1>
        </section>

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
                x-model="searchMail"
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
            <div 
                class="absolute top-[50px] left-0 w-full border border-gray-400 p-[8px] shadow-md leading-[24px] bg-white z-9 text-[14px] rounded-md"
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
        <!-- search 끝 -->
        </div>
        <!-- right 끝 -->

        <!-- left -->
        <div class="flex mr-[8px]">
            <div class="my-auto relative mr-[16px]" x-data="{isOpen:false}">
                <button 
                    class="leading-[40px] w-[40px] rounded-[50%] h-[40px] hover:bg-[#e8eaed] flex flex-col justify-center"
                >
                    <span class="material-symbols-outlined mx-auto">apps</span>
                </button>
                <nav
                    class="absolute top-[50px] right-0 border border-gray-400 p-[16px] shadow-md leading-[24px] z-9 text-[14px] rounded-lg w-[360px] text-center bg-[#d3e3fd]"
                >
                    <ul class="flex flex-row justify-start flex-wrap w-full bg-white rounded-md p-[16px]">
                        <li class="w-[30%] m-[1.5%] hover:bg-[#f6f8fc] rounded-lg py-[8px]">
                            <a href="#/home">
                                <div class="size-[60px] flex flex-col justify-center mx-auto"><img src="./assets/images/mail_icon.svg" class="mx-auto w-[60%] object-contain"/></div>
                                <p class="font-semibold">메일함</p>
                            </a>
                        </li>
                        <li class="w-[30%] m-[1.5%] hover:bg-[#f6f8fc] rounded-lg py-[8px]">
                            <a href="#/memo">
                                <div class="size-[60px] flex flex-col justify-center mx-auto"><img src="./assets/images/memo_icon.svg" class="mx-auto w-[60%] object-contain"/></div>
                                <p class="font-semibold">메모장</p>
                            </a>
                        </li>
                        <li class="w-[30%] m-[1.5%] hover:bg-[#f6f8fc] rounded-lg py-[8px]">
                            <a href="#/calendar">
                                <div class="size-[60px] flex flex-col justify-center mx-auto"><img src="./assets/images/calendar_icon.svg" class="mx-auto w-[60%] object-contain"/></div>
                                <p class="font-semibold">캘린더</p>
                            </a>
                        </li>
                        <li class="w-[30%] m-[1.5%] hover:bg-[#f6f8fc] rounded-lg py-[8px]">
                            <a href="#/addressbook">
                                <div class="size-[60px] flex flex-col justify-center mx-auto"><img src="./assets/images/contactboock_icon.svg" class="mx-auto w-[60%] object-contain"/></div>
                                <p class="font-semibold">주소록</p>
                            </a>
                        </li>                        
                        <li class="w-[30%] m-[1.5%] hover:bg-[#f6f8fc] rounded-lg py-[8px]">
                            <a href="#/webhard">
                                <div class="size-[60px] flex flex-col justify-center mx-auto"><img src="./assets/images/webhard_icon.svg" class="mx-auto w-[60%] object-contain"/></div>
                                <p class="font-semibold">웹하드</p>
                            </a>
                        </li>
                        <li class="w-[30%] m-[1.5%] hover:bg-[#f6f8fc] rounded-lg py-[8px]">
                            <a href="#/board">
                                <div class="size-[60px] flex flex-col justify-center mx-auto"><img src="./assets/images/board_icon.svg" class="mx-auto w-[60%] object-contain"/></div>
                                <p class="font-semibold">게시판</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                class="my-auto relative"
                x-data="{isOpen:false}"                
            >
                <button
                    class="leading-[40px] w-[40px] rounded-[50%] h-[40px] hover:bg-[#e8eaed] flex flex-col justify-center border border-1 border-[#e8eaed]"
                >
                    <img 
                        class="w-[50%] self-center"
                        src="./assets/images/user_icon.svg"
                    />
                </button>
                <div
                    x-cloak
                    x-show="isOpen"
                    x-transition 
                    class="absolute top-[50px] right-0 border border-gray-400 p-[24px] shadow-lg leading-[24px] z-[9999] text-[14px] rounded-3xl w-[360px] text-center bg-[#f6f8fc]"
                >
                    <h2>gyulgyul@lxn.co.kr</h2>  
                    <div class="mx-auto my-[15px] size-[150px] rounded-full border border-1 border-gray-300 flex flex-col justify-center">
                        <img 
                            class="w-[50%] self-center"
                            src="./assets/images/user_icon.svg"
                        />
                    </div>
                    <h4><span class="font-bold text-xl">귤귤</span>님,</h4>
                    <a href="#/mypage" class="block leading-[40px] px-[30px] border rounded-[60px] my-[8px] hover:bg-[#689ee5] bg-[#1a73e8] text-white">마이페이지</a>
                    <button class="block leading-[40px] px-[30px] border border-1 border-gray-300 rounded-[60px] mb-[15px] hover:bg-gray-300 w-full">로그아웃</button>
                </div>
            </div>
        </div>
    </header>
    `;
  }
}

customElements.define('header-com', Header);