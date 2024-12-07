import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import VCard from '../VCard.vue'

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
    const textInputs = wrapper.findAll('[data-testid=input]')

    expectedvCardFields.forEach((expectedvCardField, index) => {
      expect(textInputs[index].attributes('placeholder')).toBe(expectedvCardField.placeholder)
    })
  })

  it('should display a submit button', () => {
    const wrapper = mount(VCard)
    expect(wrapper.find('[data-testid=generate-btn]').exists()).toBe(true)
  })

  it('should call the generate method when the submit button is clicked', async () => {
    const wrapper = mount(VCard)

    const generateSpy = vi.spyOn(wrapper.vm, 'generate')

    const submitButton = wrapper.find('button')
    await submitButton.trigger('click')
    
    expect(generateSpy).toHaveBeenCalled()
  })

  it('should display a vcard when the submit button is clicked', async () => {
    const wrapper = mount(VCard)

    const submitButton = wrapper.find('[data-testid=generate-btn]')
    await submitButton.trigger('click')

    expect(wrapper.find('[data-testid=vcard]').text()).toContain('BEGIN:VCARD')
  })

  it('should display the qr code when the submit button is clicked', async () => {
    const wrapper = mount(VCard)

    const submitButton = wrapper.find('[data-testid=generate-btn]')
    await submitButton.trigger('click')

    expect(wrapper.find('[data-testid=qrcode]').find('img').exists()).toBe(true)
  })

  it('should call generate function when any input field is changed', async () => {
    const wrapper = mount(VCard)

    const generateSpy = vi.spyOn(wrapper.vm, 'generate')

    const textInputs = wrapper.findAll('[data-testid=input]')
    await textInputs[0].setValue('Mahatma')

    expect(generateSpy).toHaveBeenCalled()
  })
})