<template>
    <div class="news">
        <NewsItem v-for="item in news" :key="item.id" :item="item"/>
    </div>
    <TheCalendar/>
    <SliderGallery/>
    <IndexBirthdaysCard/>
    <IndexDefaultCard
            v-for="item in defaultCards"
            :key="item.title"
            :title="item.title"
            :text="item.text"
            :background="item.background"
    />
</template>

<script>
import NewsItem from "@/components/NewsItem.vue";
import TheCalendar from "@/components/TheCalendar.vue";
import SliderGallery from "@/components/SliderGallery.vue";
import IndexDefaultCard from "@/components/IndexDefaultCard.vue";
import IndexBirthdaysCard from "@/components/IndexBirthdaysCard.vue";

export default {
    name: "Home",
    components: {IndexDefaultCard, SliderGallery, TheCalendar, NewsItem, IndexBirthdaysCard},
    data() {
        return {
            news: [
                {
                    id: 1,
                    title: "Новость 1",
                    image: './src/assets/img/news.jpg',
                    text: "Текст новости 1 Текст новости 1Текст новости 1Текст новости 1Текст новости 1Текст новости 1",
                    date: "12.12.22",
                    link: "https://google.com",
                    comments: 9,
                    likes: 12,
                    views: 12
                },
                {
                    id: 2,
                    title: "Новость 2",
                    image: './src/assets/img/news.jpg',
                    text: "Текст новости 2 Текст новости 1Текст новости 1Текст новости 1Текст новости 1Текст новости 1",
                    date: "12.12.21",
                    link: "https://google.com/1",
                    comments: 9,
                    likes: 12,
                    views: 12
                },
                {
                    id: 3,
                    title: "Новость 3",
                    image: './src/assets/img/news.jpg',
                    text: "Текст новости 3 Текст новости 1Текст новости 1Текст новости 1Текст новости 1Текст новости 1",
                    date: "12.12.20",
                    link: "https://google.com/1",
                    comments: 9,
                    likes: 12,
                    views: 12
                }
            ],
            defaultCards: [
                {
                    title: "Маркетинговые документы",
                    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
                    background: '#F2CECE'
                },
                {
                    title: "Обновления на сайте",
                    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
                    background: '#E3BBF7'
                },
                {
                    title: "Оформить заявку",
                    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
                    background: '#BAF7F3'
                },
            ]
        }
    }
}
</script>

<style scoped>
.news {
    display: grid;
    grid-row-start: 1;
    grid-row-end: 4;
    overflow-y: scroll;
}

@media (min-width: 1280px) {
    .news {
        row-gap: 20px;
    }

}
</style>