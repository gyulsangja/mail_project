import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import { Link } from '../Link.mjs';
import { Search } from './Search.mjs';


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
    static properties = {
        test: {type: String}
    };

    constructor(){
        super();
        this.test = '';
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
                    <link-com href="/" class="block font-bold px-[8px]">LX 메일</link-com>
                </h1>
            </section>

            <!-- search -->
            <search-com></search-com>

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