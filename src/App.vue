<!-- 2 formas (APIs) de escribir VUE -->
<!-- 1. Options API -->
<!-- <script>
export default {
  data() {
    return {
      clima: {}
    }
  },
  methods: {

  },
  computed: {

  },
  components: {

  }
}
</script> -->

<!-- 2. Composition API -->
<script setup>
import WeatherCard from './components/WeatherCard.vue';

const clima = {
  "coord": {
    "lon": -70.6,
    "lat": -33.4667
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "nubes",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 20.72,
    "feels_like": 20.75,
    "temp_min": 20.72,
    "temp_max": 20.72,
    "pressure": 1016,
    "humidity": 73,
    "sea_level": 1016,
    "grnd_level": 918
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.67,
    "deg": 257,
    "gust": 0.99
  },
  "clouds": {
    "all": 99
  },
  "dt": 1776521361,
  "sys": {
    "country": "CL",
    "sunrise": 1776510396,
    "sunset": 1776550586
  },
  "timezone": -14400,
  "id": 3878431,
  "name": "Ñuñoa",
  "cod": 200
}

const handleClickCard = () => {
  console.log('click en la tarjeta')
}
</script>

<template>
  <h1>Don Clima</h1>
  <!-- <div>
    <h2>{{ clima.name }}</h2>
    <h4>{{ clima.sys.country }}</h4>
    <h3>{{ clima.main.temp }}°C</h3>
  </div> -->
  <!-- props: properties -->
  <WeatherCard :clima="clima" @clickCard="handleClickCard" />
</template>

<style scoped></style>
