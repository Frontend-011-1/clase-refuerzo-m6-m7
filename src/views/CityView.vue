<script setup>
import { onMounted, ref } from 'vue';
import apiClient from '@/api/apiClient';

const loading = ref(false)
const error = ref(null)
const clima = ref({})

const fetchClima = async () => {
  try {
    loading.value = true
    const response = await apiClient.get(`/forecast?id=${props.id}`)
    console.log(response)
    clima.value = response.data
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

const props = defineProps({
  id: String
})

onMounted(() => {
  fetchClima()
})
</script>

<template>
  <div>
    <h1>El clima en {{ clima.city.name }}</h1>
  </div>
</template>

<style scoped></style>