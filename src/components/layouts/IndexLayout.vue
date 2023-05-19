<script>
import {defineComponent} from 'vue'
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import MobileNav from "@/components/MobileNav.vue";

export default defineComponent({
    name: "IndexLayout",
    components: {MobileNav, TheSidebar, TheHeader}
})
</script>

<template>
    <TheHeader/>
    <TheSidebar/>
    <MobileNav/>
    <main class="main">
        <router-view/>
    </main>
</template>

<style scoped>

</style>