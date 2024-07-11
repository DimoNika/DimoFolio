import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: () => ({
        locale: "en",
    }),
    actions: {
        setLocale(locale) {
            this.locale = locale
        },
    }
});