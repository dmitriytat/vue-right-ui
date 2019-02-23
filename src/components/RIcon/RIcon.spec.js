import { shallowMount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';

import RIcon from './RIcon.vue';

describe('RIcon', () => {
  const renderer = createRenderer();

  it('should render icon', () => {
    const glyph = {
      id: 'eye-usage',
      url: 'img/icons.svg#eye',
      viewBox: '0 0 18 18',
    };

    const wrapper = shallowMount(RIcon, { propsData: { glyph } });

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);

      expect(str).toMatchSnapshot();
    });
  });
});
