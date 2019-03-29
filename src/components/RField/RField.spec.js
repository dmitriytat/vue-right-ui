import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';

import RField from './RField.vue';

describe('RField', () => {
  const renderer = createRenderer();

  it('should render field', () => {
    const wrapper = shallowMount(RField, {
      propsData: {
        id: 'field',
      },
    });

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);

      expect(str).toMatchSnapshot();
    });
  });
});
