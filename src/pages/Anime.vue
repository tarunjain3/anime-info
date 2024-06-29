<template>
  <div class="anime-wrapper">
    <div v-if="anime">
      <div class="date">{{ formattedDate }}</div>
      <div class="today-wrapper">
        <div  class="today">Today</div>
        <div class="avatar">VS</div>
      </div>
      <AnimeCard :anime="anime" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useApiRequest } from '../utils/api'
import AnimeCard from '../components/Animecard.vue';
import { formattedDate } from '../utils/date';

export default {
  name: 'Anime',
  components: {
    AnimeCard,
  },
  setup() {
    const anime = ref(null);
    const isModalOpened = ref(false);

    const openModal = () => {
      isModalOpened.value = true;
      alert(isModalOpened.value)
    };
    const closeModal = () => {
      isModalOpened.value = false;
    };

    const { isLoading, error, sendRequest } = useApiRequest({ url: 'getContent' });

    onMounted(async () => {
      try {
        const data = await sendRequest();
        anime.value = data;
      } catch (err) {
        console.error('Error fetching anime data:', err);
      }
    });

    return {
      anime,
      isLoading,
      error,
      formattedDate,
      openModal,
      closeModal
    };
  },
};
</script>

<style scoped>
.anime-wrapper {
  width: 50%;
  margin: 0 auto;
  text-align: left;
}

.date {
  text-transform: capitalize;
  font-size: 1.125rem;
}

.today-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.today {
  font-size: 2rem;
  font-weight: bold;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border-radius: 100%;
  background: lightgrey;
  font-weight: bold;
}
</style>
