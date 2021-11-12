import { createApp } from 'vue'
import MainTask from './components/MainTask.vue'
import OutstandingTask from './components/OutstandingTask.vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
const routes =[
    {
        path: '/main',
        component: MainTask,
    },
    {
        path: '/outstanding',
        component: OutstandingTask,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);
app.mount('#app');