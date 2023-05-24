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
      <router-link to="/" class="news-item__footer-link">Читать полностью</router-link>
    </footer>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>.news-item {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.news-item__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 17px;
}

.news-item__date {
  position: absolute;
  z-index: 1;
  color: var(--white);
  padding: 8px 12px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
  background-color: var(--purple);
}

.news-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-item__footer-stats {
  display: flex;
  flex: auto;
  justify-content: space-between;
  padding: 0 17px;
}

.news-item__footer-link {
  background-color: var(--blue-light);
  color: var(--white);
  font-weight: 700;
  font-size: 13px;
  padding: 16px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}
</style>