<template>
    <div id="map"></div>

</template>
<script  >
import L from 'leaflet'
import '@/assets/leaflet.css'
 
export default{
    mounted(){
        const map = L.map('map').setView([51.505, -0.09], 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 4,
            attribution: '© OpenStreetMap'
        }).addTo(map)
    }
}
</script>
 

 
<style scoped>
    #map  { 
        height: 100vh;
        width: 100vw;
    }
</style>