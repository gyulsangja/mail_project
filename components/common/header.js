
// search
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
