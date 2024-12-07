<script setup>
  import VCard from '../components/VCard.vue'

  defineProps({
    vcardFields: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <main>
    <VCard :fields="vcardFields" />
  </main>
</template>
