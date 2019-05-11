import {shallowMount} from "@vue/test-utils";
import Quote from '~/components/Quote.vue'

describe('Quote', () => {
  it('displays a quote', () => {
    const wrapper = shallowMount(Quote, {
      propsData: {
        quote: "test quote",
        name: 'test name',
        location: 'test location'
      }
    });

    expect(wrapper.exists()).toBe(true)

  })
});
