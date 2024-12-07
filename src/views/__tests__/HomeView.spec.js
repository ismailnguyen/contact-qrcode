import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import VCard from '../../components/VCard.vue'

describe('HomeView', () => {
  it('should display a VCard with its given fields', () => {
    const vcardFields = ['Firstname', 'Lastname', 'Email']
    const wrapper = mount(HomeView, { props: { vcardFields: vcardFields } })
    const vcard = wrapper.findComponent(VCard)
    expect(vcard.props('fields')).toStrictEqual(vcardFields)
  })
})
