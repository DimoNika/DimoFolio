import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/about', component: About },
    ]
});

const app = createApp(App)

app.use(router);
app.mount('#app')