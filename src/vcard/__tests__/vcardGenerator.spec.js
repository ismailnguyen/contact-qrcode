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
            website: 'www.gandhi.io',
        });

        const expectedvCard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN;CHARSET=UTF-8:Mahatma GANDHI\r\nN;CHARSET=UTF-8:GANDHI;Mahatma;;;\r\nTEL;TYPE=CELL:+91 123 456 789\r\nTEL;TYPE=HOME,VOICE:+91 123 456 789\r\nADR;CHARSET=UTF-8;TYPE=WORK:;;30 Janpath;New Delhi;Delhi;110011;India\r\nTITLE;CHARSET=UTF-8:Leader\r\nORG;CHARSET=UTF-8:Indian National Congress\r\nURL;CHARSET=UTF-8:www.gandhi.io\r\nREV:${new Date().toISOString()}\r\nEND:VCARD\r\n`;

        expect(actualvCard).toEqual(expectedvCard);
    })
})