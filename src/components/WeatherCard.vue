<!-- SFC: Single File Components -->
<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  clima: Object,
  color: String
})

// const color = ref('bordeRojo')

const emit = defineEmits(['clickCard'])

const handleClick = () => {
  emit('clickCard')
  // color.value === 'bordeRojo' ? color.value = 'bordeVerde' : color.value = 'bordeRojo'
}
const goToDetail = () => {
  router.push({ name: 'City', params: { name: props.clima.name, id: props.clima.id } })
}
</script>

<template>
  <!-- : es una abreviación de v-bind: -->
  <div @click="handleClick" :class="color">
    <h2>{{ clima.name }}</h2>
    <h4>{{ clima.sys.country }}</h4>
    <h3>{{ clima.main.temp }}°C</h3>
    <button @click="goToDetail">Ver detalle</button>
  </div>
</template>

<style scoped>
.bordeRojo {
  border: 4px solid red
}

.bordeVerde {
  border: 4px solid green
}
</style>