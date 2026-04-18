<script setup>
import { onMounted, ref } from 'vue';
import WeatherCard from '@/components/WeatherCard.vue';
import apiClient from '@/api/apiClient';

// const clima = {
//   "coord": {
//     "lon": -70.6,
//     "lat": -33.4667
//   },
//   "weather": [
//     {
//       "id": 804,
//       "main": "Clouds",
//       "description": "nubes",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 20.72,
//     "feels_like": 20.75,
//     "temp_min": 20.72,
//     "temp_max": 20.72,
//     "pressure": 1016,
//     "humidity": 73,
//     "sea_level": 1016,
//     "grnd_level": 918
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 1.67,
//     "deg": 257,
//     "gust": 0.99
//   },
//   "clouds": {
//     "all": 99
//   },
//   "dt": 1776521361,
//   "sys": {
//     "country": "CL",
//     "sunrise": 1776510396,
//     "sunset": 1776550586
//   },
//   "timezone": -14400,
//   "id": 3878431,
//   "name": "Ñuñoa",
//   "cod": 200
// }


const comunas = [
  'ñuñoa',
  'macul',
  'temuco',
  'puerto natales',
  'arica',
  'concon',
  'san carlos'
]

const isLoading = ref(false)
const error = ref(null)

const climas = ref([])
const fetchClimas = async () => {
  try {
    isLoading.value = true
    const promises = comunas.map(comuna => apiClient.get(`/weather?q=${comuna},cl`))
    const response = await Promise.all(promises)
    console.log(response)
    climas.value = response
    climas.value = climas.value.map(clima => clima.data)
  } catch (err) {
    error.value = err
  } finally {
    isLoading.value = false
  }
}

// const colorBorde = ref('bordeRojo')

const handleClickCard = () => {
  console.log('click en la tarjeta')
  // colorBorde.value === 'bordeRojo' ? colorBorde.value = 'bordeVerde' : colorBorde.value = 'bordeRojo'
}

onMounted(() => {
  fetchClimas()
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <WeatherCard v-for="clima in climas" :clima="clima" @clickCard="handleClickCard" />
  </div>
</template>

<style scoped></style>