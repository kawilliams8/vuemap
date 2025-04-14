<template>
  <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import { onMounted } from 'vue'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F3aWxsaWFtczgiLCJhIjoiY2swaWNvM2liMGJ4dDNjbGV2aGhvNHVwdiJ9.omOH_S9FQH-fjgcS0iDA5A'

onMounted(() => {
  new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // example coords
    zoom: 9
  })
})
</script>
