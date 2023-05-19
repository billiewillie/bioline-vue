<template>
    <header class="header">
        <router-link to="/">
            <TheLogo/>
        </router-link>
        <BaseNav/>
        <TheSearch/>
        <HeaderProfile/>
    </header>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";
import BaseNav from "@/components/BaseNav.vue";
import TheSearch from "@/components/TheSearch.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";

export default {
    components: {
        TheLogo,
        BaseNav,
        TheSearch,
        HeaderProfile
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: var(--blue-dark);

    @media (min-width: 1280px) {
        height: 50px;
        padding-right: 16px;
    }

    @media (min-width: 1920px) {
        height: 70px;
        padding-right: 20px;
    }
}

.base-nav__menu {
    display: none;

    @media (min-width: 1280px) {
        display: flex;
    }
}
</style>