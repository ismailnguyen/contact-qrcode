<script setup>
    import { vcardGenerator } from '../vcard/vcardGenerator'
    import qrcode from '../qrcode/qrcode'
    import { ref } from 'vue';

    const vcard = ref();
    const qrcodeImg = ref();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const mobilePhone = ref('');
    const landlinePhone = ref('');
    const company = ref('');
    const jobTitle = ref('');
    const street = ref('');
    const city = ref('');
    const zipCode = ref('');
    const state = ref('');
    const country = ref('');
    const website = ref('');
    const note = ref('');

    const fields = ref([
        {
            label: 'First Name',
            placeholder: 'Mahatma',
            model: firstName,
        },
        {
            label: 'Last Name',
            placeholder: 'GANDHI',
            model: lastName,
        },
        {
            label: 'Email',
            placeholder: 'mahatma@gandhi.io',
            model: email,
        },
        {
            label: 'Mobile phone',
            placeholder: '+91 123 456 789',
            model: mobilePhone,
        },
        {
            label: 'Landline phone',
            placeholder: '+91 123 456 789',
            model: landlinePhone,
        },
        {
            label: 'Company',
            placeholder: 'Indian National Congress',
            model: company,
        },
        {
            label: 'Job title',
            placeholder: 'Leader',
            model: jobTitle,
        },
        {
            label: 'Street',
            placeholder: '30 Janpath',
            model: street,
        },
        {
            label: 'City',
            placeholder: 'New Delhi',
            model: city,
        },
        {
            label: 'Zip code',
            placeholder: '110011',
            model: zipCode,
        },
        {
            label: 'State',
            placeholder: 'Delhi',
            model: state,
        },
        {
            label: 'Country',
            placeholder: 'India',
            model: country,
        },
        {
            label: 'Website',
            placeholder: 'www.gandhi.io',
            model: website,
        },
        {
            label: 'Note',
            placeholder: 'Father of the Nation',
            model: note,
        }
    ]);

    const generate = () => {
        vcard.value = vcardGenerator({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            mobilePhone: mobilePhone.value,
            landlinePhone: landlinePhone.value,
            company: company.value,
            jobTitle: jobTitle.value,
            street: street.value,
            city: city.value,
            zipCode: zipCode.value,
            state: state.value,
            country: country.value,
            website: website.value,
            note: note.value
        });

        var typeNumber = 0;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(vcard.value);
        qr.make();
        qrcodeImg.value = qr.createImgTag()
    };
</script>

<template>
    <div v-for="(field, index) in fields" :key="index">
        <label for="fname">{{ field.label }}</label><br>
        <input
            data-testid="input"
            v-model="field.model"
            :label="field.label"
            type="text"
            @change="generate()"
            :placeholder="field.placeholder" />
    </div>

    <pre data-testid="vcard">{{ vcard }}</pre>
    <pre data-testid="qrcode" v-html="qrcodeImg"></pre>
</template>
