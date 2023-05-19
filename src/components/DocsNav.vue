<template>
    <ul class="docs-nav__menu">
        <li v-for="item in navList" :key="item.title" class="docs-nav__item">
            <router-link class="docs-nav__link" :to="`${item.path}`">
                {{ item.title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'DocsNav',
    data() {
        return {
            navList: [
                {
                    title: 'Документы',
                    path: '/docs'
                },
                {
                    title: 'Инструкции',
                    path: '/instructions'
                }, {
                    title: 'Заявки',
                    path: '/orders'
                }, {
                    title: 'Бронирование переговорок',
                    path: '/conference-room-booking'
                },
                {
                    title: 'Маркетинговые материалы',
                    path: '/marketing-materials'
                },
                {
                    title: 'Обучение',
                    path: '/learning'
                }
            ]
        }
    }
}
</script>

<style scoped></style>