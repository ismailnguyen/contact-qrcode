<script setup>
    import { ref, watch } from 'vue';
    import { defineEmits } from 'vue';

    defineProps({
        label: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits(['input']);
    const inputValue = ref('');

    watch(inputValue, (newValue) => {
        emit('input', newValue);
    });
</script>

<template>
    <div>
        <label>{{ label }}</label>
        <input type="text" v-model="inputValue" />
    </div>
</template>