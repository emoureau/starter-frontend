import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import IndexPage from '../../app/pages/index.vue'

describe('index page', () => {
  it('renders the hello world heading', async () => {
    const component = await mountSuspended(IndexPage)
    expect(component.find('h1').text()).toBe('Hello, world!')
  })
})
