import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VCardTextInput from '../VCardTextInput.vue'

describe('VCardTextInput', () => {
    it('should have a label', () => {
        const wrapper = mount(VCardTextInput, { props: { label: 'Name' } })
        expect(wrapper.text()).toContain('Name')
    })

    it('should have a placeholder', () => {
        const wrapper = mount(VCardTextInput, { props: { placeholder: 'Enter your name' } })
        expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your name')
    })

    it('should have an text input field', () => {
        const wrapper = mount(VCardTextInput)
        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('should send back the value when input changes', async () => {
        const wrapper = mount(VCardTextInput)
        const input = wrapper.find('input')
        await input.setValue('Hello')
        expect(wrapper.emitted('input')[0][0]).toBe('Hello')
    })
})