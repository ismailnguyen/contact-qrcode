import { describe, it, expect, vi } from 'vitest'

import { vcardGenerator } from '../vcardGenerator'

describe('vcardGenerator', () => {
    it('should generate a vCard', () => {
        const actualvCard = vcardGenerator({
            firstName: 'Mahatma',
            lastName: 'GANDHI',
            email: '',
            mobilePhone: '+91 123 456 789',
            landlinePhone: '+91 123 456 789',
            company: 'Indian National Congress',
            jobTitle: 'Leader',
            street: '30 Janpath',
            city: 'New Delhi',
            zipCode: '110011',
            state: 'Delhi',
            country: 'India',
            website: 'www.gandhi.io'
        });

        const expectedvCard = `BEGIN:VCARD\r\nVERSION:4.0\r\nFN:Mahatma GANDHI\r\nN:GANDHI;Mahatma;;;\r\nTEL;VALUE=uri;TYPE="voice,cell":tel:+91 123 456 789\r\nTEL;VALUE=uri;TYPE="voice,home":tel:+91 123 456 789\r\nADR;TYPE=WORK:;;30 Janpath;New Delhi;Delhi;110011;India\r\nTITLE:Leader\r\nORG:Indian National Congress\r\nURL:www.gandhi.io\r\nREV:${new Date().toISOString()}\r\nEND:VCARD\r\n`;

        expect(actualvCard).toEqual(expectedvCard);
    })
})