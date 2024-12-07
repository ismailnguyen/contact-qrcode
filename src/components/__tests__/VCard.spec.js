import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VCard from '../VCard.vue'
import VCardTextInput from '../VCardTextInput.vue'

describe('VCard', () => {
  it('should display all vcard fields', () => {
    const expectedvCardFields = [
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
    ]
    const wrapper = mount(VCard)
    const textInputs = wrapper.findAllComponents(VCardTextInput)

    expectedvCardFields.forEach((expectedvCardField, index) => {
      expect(textInputs[index].props('label')).toBe(expectedvCardField.label)
      expect(textInputs[index].props('placeholder')).toBe(expectedvCardField.placeholder)
    })
  })
})