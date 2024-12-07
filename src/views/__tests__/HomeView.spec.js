import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import VCard from '../../components/VCard.vue'

describe('HomeView', () => {
  it('should display a VCard', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findComponent(VCard).exists()).toBe(true)
  })
})
