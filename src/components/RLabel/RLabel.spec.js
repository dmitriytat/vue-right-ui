import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';

import RLabel from './RLabel.vue';

describe('RLabel', () => {
  const renderer = createRenderer();

  it('should render label', () => {
    const wrapper = shallowMount(RLabel, {
      propsData: {
        id: 'label',
        forId: 'input',
      },
    });

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);

      expect(str).toMatchSnapshot();
    });
  });

  it('should render active label', () => {
    const wrapper = shallowMount(RLabel, {
      propsData: {
        id: 'label',
        forId: 'input',
        active: true,
      },
    });

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);

      expect(str).toMatchSnapshot();
    });
  });
});
