document.addEventListener("alpine:init", () => {
    Alpine.store("pageStore", {
        selectedPage: "home",
        navItems: [
            { id: 1, page: "allMail", label: "전체메일", icon: "fa-regular fa-envelope" },
            { id: 2, page: "allMail", label: "전체메일", icon: "fa-regular fa-envelope" },
            { id: 3, page: "allMail", label: "전체메일", icon: "fa-regular fa-envelope" },
        ],
        menuItems: [
            { id: 1, page: "allMail", label: "전체메일", icon: "fa-regular fa-envelope" },
            { id: 2, page: "allMail2", label: "전체메일", icon: "fa-regular fa-envelope" },
            { id: 3, page: "allMail3", label: "전체메일", icon: "fa-regular fa-envelope" },
        ],
        setPage(page) {
            this.selectedPage = page;
        }
    });
});
