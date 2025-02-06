//임시라우터

document.addEventListener("alpine:init", () => {
    Alpine.store("router", {
        currentPath: "home",
        segments: [],

        updateRoute() {
            let hash = window.location.hash.replace(/^#\/?/, "#/"); 
            window.location.hash = hash; 

            let cleanPath = hash.slice(2); 
            this.segments = cleanPath ? cleanPath.split("/") : ["home"];
            this.currentPath = cleanPath || "home";
        },

        isRoute(path) {
            return this.currentPath.startsWith(path);
        },

        isExactRoute(path) {
            return this.segments.join("/") === path; 
        }
    });

    window.addEventListener("hashchange", () => {
        Alpine.store("router").updateRoute();
    });

    Alpine.store("router").updateRoute();
});




