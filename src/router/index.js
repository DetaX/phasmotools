import { createRouter, createWebHistory } from 'vue-router'
import ConfigEditor from "@/components/ConfigEditor.vue";
import Proofs from "@/components/Proofs.vue";

const routes = [
    {
        path: '/',
        name : 'Home',
        redirect: '/configurateur'
    },
    {
        path: '/configurateur',
        name: 'Générateur de configuration',
        component: ConfigEditor
    },
    {
        path: '/preuves',
        name: 'Preuves',
        component: Proofs
    }
]
const router = createRouter({
    history: createWebHistory("/phasmo/"),
    routes,
})
export default router