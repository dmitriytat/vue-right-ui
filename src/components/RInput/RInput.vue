<template>
  <div
    :class="b({
      invalid,
      disabled,
      'i-position': $slots.icon && iconPosition,
      'b-position': $slots.button && buttonPosition,
    })"
  >
    <input
      ref="input"
      :class="b('input')"
      v-bind="attrs"
      :value="value"
      v-on="listeners"
      @input="handleInput"
      @keydown="handleKeyDown"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <div
      v-if="$slots.icon"
      :class="b('icon')"
    >
      <slot name="icon" />
    </div>
    <div
      v-if="$slots.button"
      :class="b('button')"
    >
      <slot name="button" />
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
  block: 'r-input',

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
     * Button position
     * `left, right`
     */
    buttonPosition: {
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
      const { focus, blur, input, keydown, ...listeners } = this.$listeners;

      return listeners;
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
    handleInput(event) {
      const value = event.currentTarget.value;

      /**
       * Input event.
       *
       * @event keydown
       * @type {string}
       */
      this.$emit('input', value);
    },

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
      padding: 8px 0 14px;
    }

    &_i-position_left &__input {
      padding-left: 24px;
    }

    &_i-position_left &__icon {
      left: 0;
    }

    &_i-position_right &__input {
      padding-right: 24px;
    }

    &_i-position_right &__icon {
      right: 0;
    }

    &__button {
      position: absolute;
      top: 0;
      box-sizing: border-box;
      width: 30px;
      height: 40px;
    }

    &_b-position_left &__input {
      padding-left: 30px;
    }

    &_b-position_left &__button {
      left: 0;
    }

    &_b-position_right &__input {
      padding-right: 30px;
    }

    &_b-position_right &__button {
      right: 0;
    }
  }
</style>

<docs>
  ```jsx
  let value = '';
  <r-input
    id="r-input"
    v-model="value"
  />
  ```

  RInput with placeholder

  ```jsx
  let value = '';
  <r-input
    id="r-input-with-placeholder"
    placeholder="placeholder"
    v-model="value"
  />
  ```

  Invalid RInput

  ```jsx
  let value = '';
  <r-input
    id="r-input-with-placeholder"
    value="Hello"
    v-model="value"
    invalid
  />
  ```

  Disabled RInput

  ```jsx
  let value = '';
  <r-input
    id="r-input-disabled"
    v-model="value"
    disabled
  />
  ```

  RInput with icon

  ```jsx
  const searchIcon = require('@/assets/icons/search.svg').default;
  const eyeIcon = require('@/assets/icons/eye.svg').default;
  let value = '';
  <r-input
    id="r-input-with-icon"
    v-model="value"
  >
    <r-icon
      slot="icon"
      :glyph="eyeIcon"
    />
  </r-input>
  <r-input
    id="r-input-with-icon"
    v-model="value"
  >
    <r-icon
      slot="icon"
      :glyph="searchIcon"
    />
  </r-input>
  <r-input
    id="r-input-with-icon"
    icon-position="left"
    v-model="value"
  >
    <r-icon
      slot="icon"
      :glyph="searchIcon"
    />
  </r-input>
  ```
</docs>
