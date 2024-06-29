<template>
  <div class="card-wrapper" :key="anime.content.id">
    <img class="thumbnail" :src="anime.content.thumbNailImage" />
    <div class="anime-info">
      <img class="logo" :src="anime.content.logo" loading="lazy" />
      <div>
        <div class="title">{{ anime.content.title }}</div>
        <div class="subtite">{{ anime.content.subTitle }}</div>
      </div>
      <button class="refresh-btn">Refresh</button>
    </div>
  </div>
  
</template>
  
<script>
export default {
  name: 'AnimeCard',
  props: {
    anime: Object,
  },
};
</script>
  
<style scoped>
.card-wrapper {
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.thumbnail {
  max-height: 75vh;
}

.anime-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  cursor: pointer;
}

.logo {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}

.title {
  font-size: 1.125rem;
  font-weight: bold;
}

.refresh-btn {
  color: #6f5cda;
  background-color: #f6e5f8;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 1rem;
  margin-left: auto;
}
</style>
  