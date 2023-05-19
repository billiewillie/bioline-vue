<template>
    <div class="news-item shadow">
        <span class="news-item__date">{{ item.date }}</span>
        <img :src="`${item.image}`" alt=""/>
        <div class="news-item__content">
            <h2 class="title">{{ item.title }}</h2>
            <p class="text">{{ item.text }}</p>
        </div>
        <footer class="news-item__footer">
            <div class="news-item__footer-stats">
                <span class="comments-count">{{ item.comments }}</span>
                <span class="likes-count">{{ item.likes }}</span>
                <span class="views-count">{{ item.views }}</span>
            </div>
            <router-link to="item.link" class="link">Читать полностью</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: "NewsItem",
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.news-item {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.news-item__content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0 20px;
}

.news-item__date {
    position: absolute;
    z-index: 1;
    background-color: var(--purple);
}

.news-item__footer {
    display: flex;
    justify-content: space-between;
}

.news-item__footer-stats {
    padding-left: 20px;
}
</style>