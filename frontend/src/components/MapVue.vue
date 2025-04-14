<template>
  <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import { onMounted } from 'vue'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

onMounted(() => {
  new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // example coords
    zoom: 9
  })
  fetch('http://localhost:3000/api/locations')
  .then(res => res.json())
  .then(data => {
    console.log(data) // [{ name: 'Trailhead A', lat, lng }, ...]
  })
})
</script>
