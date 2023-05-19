import {createRouter, createWebHistory} from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import NotFound from "@/pages/NotFound.vue";
import News from "@/pages/News.vue";
import Newbie from "@/pages/Newbie.vue";
import Gallery from "@/pages/Gallery.vue";
import Team from "@/pages/Team.vue";
import Docs from "@/pages/Docs.vue";
import Instructions from "@/pages/Instructions.vue";
import Orders from "@/pages/Orders.vue";
import ConferenceRoomBooking from "@/pages/ConferenceRoomBooking.vue";
import MarketingMaterials from "@/pages/MarketingMaterials.vue";
import Learning from "@/pages/Learning.vue";
import User from "@/pages/User.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/newbie', component: Newbie},
    {path: '/gallery', component: Gallery},
    {path: '/team', component: Team},
    {path: '/about', component: About},
    {path: '/docs', component: Docs},
    {path: '/instructions', component: Instructions},
    {path: '/orders', component: Orders},
    {path: '/conference-room-booking', component: ConferenceRoomBooking},
    {path: '/marketing-materials', component: MarketingMaterials},
    {path: '/learning', component: Learning},
    {
        path: '/users', component: User, children: [
            {path: ':id', component: User}
        ]
    },
    {path: '/:notFound(.*)', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router