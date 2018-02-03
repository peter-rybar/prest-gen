function swInit() {
    if ("serviceWorker" in navigator) {
        // Path is relative to the origin, not project root.
        navigator.serviceWorker.register("./sw.js")
            .then((registration) => {
                // console.log(reg);
                if (registration.installing) {
                    console.log("Service worker installing");
                } else if (registration.waiting) {
                    console.log("Service worker installed");
                } else if (registration.active) {
                    console.log("Service worker active");
                }
                console.log("Registration succeeded. Scope is " + registration.scope);
            })
            .catch((error) => {
                console.error("Registration failed with " + error);
            });
    }
}

swInit();
