import { createApp } from 'vue'

import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import App from './App.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

import { watch } from 'vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
    ]
});

const app = createApp(App)

app.use(createPinia())
import { createI18n } from 'vue-i18n'

import eng from './locale/en/translation.json'
import ukr from './locale/ua/translation.json'

import { useStore } from '@/stores/store';
const store = useStore();



// https://vue-i18n.intlify.dev/guide/installation.html#package-managers
const i18n = createI18n({
    // something vue-i18n options here ...
    
    locale: store.locale,
    messages: {
        en: eng,
        ua: ukr,
    }
})

watch(() => store.locale, (newLocale) => {
    i18n.global.locale = newLocale;
});



app.use(router);
app.mount('#app')


app.use(i18n)