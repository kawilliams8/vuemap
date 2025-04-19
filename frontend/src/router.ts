import { createMemoryHistory, createRouter } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import MapVue from './components/MapVue.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/map', component: MapVue },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
