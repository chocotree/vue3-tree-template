import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import 'virtual:windi.css';
import 'virtual:svg-icons-register';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
