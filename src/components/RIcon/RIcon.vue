<template>
  <svg
    :width="dimensions.width"
    :height="dimensions.height"
    :viewBox="glyph.viewBox"
    class="r-icon"
  >
    <use :xlink:href="glyph.url" />
  </svg>
</template>

<script>
import sizeMixin from '@/mixins/sizeMixin';

const SIZES = {
  small: {
    width: 8,
    height: 8,
  },

  medium: {
    width: 12,
    height: 12,
  },

  large: {
    width: 16,
    height: 16,
  },
};

export default {
  name: 'RIcon',

  mixins: [sizeMixin],

  props: {
    /**
     * Svg icon
     */
    glyph: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  computed: {
    dimensions() {
      return SIZES[this.size];
    },
  },
};
</script>

<style>
  .r-icon {
    display: inline-block;
    vertical-align: middle;
  }
</style>

<docs>
  Component for svg icons

  ## Examples

  Eye icon in different sizes:

  ```jsx
  const eyeIcon = require('@/assets/icons/eye.svg').default;
  <div>
    <r-icon :glyph="eyeIcon" size="small" />
    <r-icon :glyph="eyeIcon" size="medium" />
    <r-icon :glyph="eyeIcon" size="large" />
  </div>
  ```
</docs>
