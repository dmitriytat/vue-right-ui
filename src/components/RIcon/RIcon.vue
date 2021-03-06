<template>
  <svg
    :width="dimensions.width"
    :height="dimensions.height"
    :viewBox="glyph.viewBox"
    :class="b()"
    :aria-hidden="!standalone"
    :role="standalone ? 'img' : undefined"
  >
    <use :xlink:href="`#${glyph.id}`" />
  </svg>
</template>

<script>
import sizeMixin from '@/mixins/sizeMixin';

const SIZES = {
  small: {
    width: 12,
    height: 12,
  },

  medium: {
    width: 16,
    height: 16,
  },

  large: {
    width: 20,
    height: 20,
  },
};

export default {
  name: 'RIcon',
  block: 'r-icon',

  mixins: [sizeMixin],

  props: {
    /**
     * Svg icon
     */
    glyph: {
      type: Object,
      required: true,
    },

    /**
     * Icon is used without text.
     * Probably you need to use aria-label to describe it.
     */
    standalone: {
      type: Boolean,
      default: false,
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
  const searchIcon = require('@/assets/icons/search.svg').default;
  <div>
    <r-icon :glyph="eyeIcon" standalone size="small" />
    <r-icon :glyph="eyeIcon" size="medium" />
    <r-icon :glyph="eyeIcon" size="large" />
  </div>
  <div>
    <r-icon :glyph="searchIcon" standalone size="small" />
    <r-icon :glyph="searchIcon" size="medium" />
    <r-icon :glyph="searchIcon" size="large" />
  </div>
  ```

  Standalone icon with aria label
  ```jsx
  const eyeIcon = require('@/assets/icons/eye.svg').default;
  <r-icon :glyph="eyeIcon" size="medium" standalone aria-label="eye icon" />
  ```

  Decorative icon without aria label
  ```jsx
  const eyeIcon = require('@/assets/icons/eye.svg').default;
  <r-icon :glyph="eyeIcon" size="medium" />
  ```
</docs>
