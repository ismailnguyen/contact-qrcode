<script setup>
    import { vcardGenerator } from '../vcard/vcardGenerator'
    import qrcode from '../qrcode/qrcode'
    import QRCodeStyling, {
        DrawType,
        TypeNumber,
        Mode,
        ErrorCorrectionLevel,
        DotType,
        CornerSquareType,
        CornerDotType,
        Extension
        } from 'qr-code-styling';

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
    const imageUrl = ref('');

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
        },
        {
            label: 'Image URL',
            placeholder: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg',
            model: imageUrl,
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
            note: note.value,
            imageUrl: imageUrl.value,
        });

        var typeNumber = 0;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(vcard.value);
        qr.make();
        qrcodeImg.value = qr.createImgTag()

        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: vcard.value,
            image: imageUrl.value,
            dotsOptions: {
                color: '#000000',
                type: 'rounded'
            },
            backgroundOptions: {
                color: '#ffffff',
            },
            imageOptions: {
                crossOrigin: 'anonymous',
                margin: 20,
            }
        });
    };
</script>

<template>
    <div class="boardingPass">
        <header class="boardingPass-header">
            <h1 class="boardingPass-airline">vCard QR Code</h1>
        </header>
        
        <main class="boardingPass-main">
            <div class="row" v-for="(field, index) in fields" :key="index">
                <section class="boardingPass-date col-xs">
                    <span class="section-label">{{ field.label }}</span>
                    <input
                        data-testid="input"
                        v-model="field.model"
                        :label="field.label"
                        type="text"
                        @change="generate()"
                        :placeholder="field.placeholder" />
                </section>
            </div>
            
            <hr />
        </main>
		
        <footer class="boardingPass-footer">
            <div class="row">
                <div class="boardingPass-qrCode col-xs" data-testid="qrcode" v-html="qrcodeImg"></div>
            </div>
            <hr>
            <div class="row">
                <div class="boardingPass-qrCode col-xs">
                    <pre data-testid="vcard">{{ vcard }}</pre>
                    <div id="qr-code" ref="qrCode"> </div>
                </div>
            </div>
        </footer>
    </div>
</template>
