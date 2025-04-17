<template>
  <div id="map" style="width: 100%; height: 600px"></div>
</template>

<script lang="ts" setup>
import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

onMounted(() => {
  new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // example coords
    zoom: 9,
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
</script>
