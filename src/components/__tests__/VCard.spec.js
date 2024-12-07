import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VCard from '../VCard.vue'
import VCardTextInput from '../VCardTextInput.vue'

describe('VCard', () => {
  it('should have as many vcard text inputs as passed in the props', () => {
    const vcardFields = ['Firstname', 'Lastname', 'Email']
    const wrapper = mount(VCard, { props: { fields: vcardFields } })
    expect(wrapper.findAllComponents(VCardTextInput).length).toBe(vcardFields.length)
  })

  it('should display all the vcard text inputs given in the props with correct label', () => {
    const vcardFields = ['Firstname', 'Lastname', 'Email']
    const wrapper = mount(VCard, { props: { fields: vcardFields } })
    const textInputs = wrapper.findAllComponents(VCardTextInput)
    textInputs.forEach((textInput, index) => {
      expect(textInput.props('label')).toBe(vcardFields[index])
    })
  })
})