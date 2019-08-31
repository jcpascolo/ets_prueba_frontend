import VueRouter from "vue-router";

import Inicio from './views/Inicio.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name:"Inicio",
            component: Inicio
        },
    ]
});