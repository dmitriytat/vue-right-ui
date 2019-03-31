<template>
  <label
    :for="forId"
    :class="b({ active, focused, invalid })"
  >
    <slot />
  </label>
</template>

<script>
export default {
  name: 'RLabel',
  block: 'r-label',

  props: {
    /**
     * Id of input element
     */
    forId: {
      type: String,
      required: true,
    },

    /**
     * Is field focused
     */
    active: {
      type: Boolean,
      default: false,
    },

    /**
     * Is field focused
     */
    focused: {
      type: Boolean,
      default: false,
    },

    /**
     * Is field invalid
     */
    invalid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
  .r-label {
    position: relative;
    z-index: 10;
    display: block;
    height: 24px;
    color: var(--color-gray);
    font: normal 17px/24px var(--font-family);
    transform: translateY(29px);
    transition: transform var(--transition-base), font-size var(--transition-base), color var(--transition-base);
    pointer-events: none;

    &_active {
      font-size: 14px;
      transform: translateY(0);
      pointer-events: auto;
    }

    &_focused {
      color: var(--color-blue);
    }

    &_invalid {
      color: var(--color-red);
    }
  }
</style>

<docs>
  Component for labeling input in field

  ```
  <RLabel for-id="#" active>Label</RLabel>
  ```
</docs>
