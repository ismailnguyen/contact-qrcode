<script setup>
    defineProps({
        fields: {
            type: Array,
            required: true
        }
    })
</script>

<script>
import VCardTextInput from './VCardTextInput.vue';

export default {
    components: {
        VCardTextInput
    }
};
</script>

<template>
    <VCardTextInput
        v-for="(field, index) in fields"
        :key="index"
        :label="field.label"
        :placeholder="field.placeholder" />
</template>