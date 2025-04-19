<script lang="ts" setup>
import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

onMounted(() => {
  new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-106.25, 39.25],
    zoom: 8,
  });
  fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query {
        locations {
          id
          name
          latitude
          longitude
        }
      }
    `,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.data.locations))
    .catch((error) => console.error('Error fetching data:', error));
});
const goToHome = () => {
  router.replace('/');
};
</script>
<template>
  <div id="map" style="width: 100%; height: 400px"></div>
  <button @click="goToHome">Go to Home</button>
</template>
