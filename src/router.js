import VueRouter from "vue-router";

import Inicio from './views/Inicio.vue';
import AssetInfo from './views/AssetInfo.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name:"Inicio",
            component: Inicio
        },
        {
            path: "/asset/:id",
            name:"Asset",
            component: AssetInfo
        },

        
    ]
});