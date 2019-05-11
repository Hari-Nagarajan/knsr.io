import {shallowMount} from "@vue/test-utils";
import TeamBox from '~/components/TeamBox.vue';

describe('TeamBox', () => {
  it('displays a TeamBox', () => {
    const wrapper = shallowMount(TeamBox, {
      propsData: {
        name: "test quote",
        role: 'test name',
        photo: '~/assets/hari.jpg'
      }
    });

    expect(wrapper.exists()).toBe(true)

  })
});
