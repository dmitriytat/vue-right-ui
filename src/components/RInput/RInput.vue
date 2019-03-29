<template>
  <div
    class="r-input"
    :class="{
      'r-input_invalid': invalid,
      'r-input_disabled': disabled,
      'r-input_left': iconPosition === 'left',
      'r-input_right': iconPosition === 'right',
    }"
  >
    <input
      ref="input"
      class="r-input__input"
      v-bind="attrs"
      v-on="listeners"
      :value="value"
      @keydown="handleKeyDown"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <div
      v-if="$slots.icon"
      class="r-input__icon"
    >
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import '@/variables/colors.css';
import '@/variables/transitions.css';
import '@/variables/fonts.css';

import { KEYBOARD_CODES } from '../../keyboard';

export default {
  name: 'RInput',

  inheritAttrs: false,

  props: {
    /**
     * Identificator of input element
     */
    id: {
      type: String,
      required: true,
    },

    /**
     * Value of input element
     */
    value: {
      type: String,
      required: true,
    },

    /**
     * Icon position
     * `left, right`
     */
    iconPosition: {
      type: String,
      default: 'right',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },

    /**
     * Is input invalid
     */
    invalid: {
      type: Boolean,
      default: false,
    },

    /**
     * Is input disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    attrs() {
      return this.$attrs;
    },

    listeners() {
      return this.$listeners;
    },
  },

  watch: {
    value() {
      this.activate();
    },
  },

  mounted() {
    this.activate();
  },

  methods: {
    handleKeyDown(event) {
      if (this.disabled && event.which !== KEYBOARD_CODES.Tab) {
        event.preventDefault();
      }

      /**
       * Keydown event.
       *
       * @event keydown
       * @type {Event}
       */
      this.$emit('keydown', event);
    },

    handleFocus(event) {
      this.activate();

      /**
       * Focus event.
       *
       * @event focus
       * @type {Event}
       */
      this.$emit('focus', event);
    },

    handleBlur(event) {
      this.activate();

      /**
       * Blur event.
       *
       * @event blue
       * @type {Event}
       */
      this.$emit('blur', event);
    },

    activate() {
      const isFocused = document.activeElement === this.$refs.input;

      if (this.value || isFocused) {
        /**
         * Activate event.
         *
         * @event activate
         */
        this.$emit('activate');
      } else {
        /**
         * Deactivate event.
         *
         * @event deactivate
         */
        this.$emit('deactivate');
      }
    },
  },
};
</script>

<style>
  .r-input {
    position: relative;
    width: 100%;

    &__input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 5px 0 10px;
      color: var(--color-black);
      font: normal 17px/24px var(--font-family);
      border: none;
      border-bottom: 1px solid var(--color-gray);
      outline: none;
      transition: border var(--transition-base), color var(--transition-base);

      &::placeholder {
        color: var(--color-lightGray);
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset;
      }

      &:focus {
        border-bottom-color: var(--color-blue);
      }
    }

    &_disabled &__input,
    &_disabled &__input:hover {
      color: var(--color-gray);
      border-bottom-style: dotted;
      border-bottom-color: var(--color-gray);
      caret-color: transparent;
      cursor: not-allowed;
    }

    &_disabled &__input:focus {
      border-bottom-color: var(--color-gray);
    }

    &_invalid &__input,
    &_invalid &__input:focus {
      color: var(--color-red);
      border-bottom-color: var(--color-red);
    }

    &__icon {
      position: absolute;
      top: 0;
      box-sizing: border-box;
      height: 40px;
      padding: 6px 0 12px;
    }

    &_left &__input {
      padding-left: 24px;
    }

    &_left &__icon {
      left: 0;
    }

    &_right &__input {
      padding-right: 24px;
    }

    &_right &__icon {
      right: 0;
    }
  }
</style>

<docs>
  ```jsx
  <r-input id="r-input" />
  ```

  RInput with placeholder

  ```jsx
  <r-input
    id="r-input-with-placeholder"
    placeholder="placeholder"
  />
  ```

  Invalid RInput

  ```jsx
  <r-input
    id="r-input-with-placeholder"
    value="Hello"
    invalid
  />
  ```

  Disabled RInput

  ```jsx
  <r-input
    id="r-input-disabled"
    disabled
  />
  ```

  RInput with icon

  ```jsx
  const eyeIcon = require('@/assets/icons/eye.svg').default;
  <r-input id="r-input-with-icon">
    <r-icon
      slot="icon"
      :glyph="eyeIcon"
    />
  </r-input>
  <r-input id="r-input-with-icon" icon-position="left">
    <r-icon
      slot="icon"
      :glyph="eyeIcon"
    />
  </r-input>
  ```
</docs>
