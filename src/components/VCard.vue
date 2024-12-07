<script setup>
    import VCardTextInput from './VCardTextInput.vue';
    import { ref } from 'vue';

    const fields = ref([
        {
        label: 'First Name',
        placeholder: 'Mahatma',
        },
        {
        label: 'Last Name',
        placeholder: 'GANDHI',
        },
        {
        label: 'Email',
        placeholder: 'mahatma@gandhi.io',
        },
        {
        label: 'Mobile phone',
        placeholder: '+91 123 456 789',
        },
        {
        label: 'Landline phone',
        placeholder: '+91 123 456 789',
        },
        {
        label: 'Company',
        placeholder: 'Indian National Congress',
        },
        {
        label: 'Job title',
        placeholder: 'Leader'
        },
        {
        label: 'Street',
        placeholder: '30 Janpath',
        },
        {
        label: 'City',
        placeholder: 'New Delhi',
        },
        {
        label: 'Zip code',
        placeholder: '110011',
        },
        {
        label: 'State',
        placeholder: 'Delhi',
        },
        {
        label: 'Country',
        placeholder: 'India',
        },
        {
        label: 'Website',
        placeholder: 'www.gandhi.io',
        },
        {
        label: 'Notes',
        placeholder: 'Father of the Nation',
        }
    ]);

    const generate = () => {
    };
</script>

<template>
    <VCardTextInput
        v-for="(field, index) in fields"
        :key="index"
        :label="field.label"
        :placeholder="field.placeholder" />

    <button data-testid="generate-btn" type="submit" @click="generate()">Generate</button>
</template>
