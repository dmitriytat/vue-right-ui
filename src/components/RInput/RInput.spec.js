import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';

import RInput from './RInput.vue';

describe('RInput', () => {
  const renderer = createRenderer();

  it('should render input', () => {
    const wrapper = shallowMount(RInput, {
      propsData: {
        id: 'input',
        value: 'value',
      },
    });

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);

      expect(str).toMatchSnapshot();
    });
  });
});
