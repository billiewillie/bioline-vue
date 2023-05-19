<script>
export default {
    name: 'BaseNav',
    data() {
        return {
            navList: [
                {
                    title: 'Новости',
                    path: '/news'
                },
                {
                    title: 'Новичку',
                    path: '/newbie'
                }, {
                    title: 'Фотогалерея',
                    path: '/gallery'
                }, {
                    title: 'Наша команда',
                    path: '/team'
                },
                {
                    title: 'О компании',
                    path: '/about'
                }
            ]
        }
    }
}
</script>

<template>
    <ul class="base-nav__menu">
        <li v-for="item in navList" :key="item.title" class="base-nav__item">
            <router-link class="base-nav__link" :to="`${item.path}`">
                {{ item.title }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
.base-nav__link {
    color: var(--white);
}
</style>