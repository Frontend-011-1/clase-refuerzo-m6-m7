<!-- SFC: Single File Components -->
<script setup>
const props = defineProps({
  clima: Object
})

const emit = defineEmits(['clickCard'])

const handleClick = () => {
  emit('clickCard')
}
</script>

<template>
  <div @click="handleClick">
    <h2>{{ clima.name }}</h2>
    <h4>{{ clima.sys.country }}</h4>
    <h3>{{ clima.main.temp }}°C</h3>
  </div>
</template>

<style scoped></style>