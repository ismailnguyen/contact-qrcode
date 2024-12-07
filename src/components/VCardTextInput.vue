<script setup>
    import { ref, watch } from 'vue';
    import { defineEmits } from 'vue';

    defineProps({
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: ''
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
        <input type="text" :placeholder="placeholder" v-model="inputValue" />
    </div>
</template>