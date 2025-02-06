
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
        }
    }));
});

// search detail
$(document).ready(function() {
    $("#datepicker").flatpickr({
        dateFormat: "Y-m-d",
        enableTime: false
    });
});
