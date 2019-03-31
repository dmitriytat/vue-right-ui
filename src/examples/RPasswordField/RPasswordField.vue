<template>
  <r-field
    :id="id"
    :class="b()"
  >
    <r-label
      :id="id"
      slot="label"
      slot-scope="{ id, forId, active, focused, invalid }"
      :for-id="forId"
      :active="active"
      :invalid="invalid"
      :focused="focused"
    >
      Password
    </r-label>
    <r-input
      :id="id"
      slot="control"
      slot-scope="{ id, activate, deactivate, focus, blur }"
      :value="value"
      :type="isPasswordShown ? 'text' : 'password'"
      @activate="activate"
      @deactivate="deactivate"
      @focus="focus"
      @blur="blur"
      @input="handleInput"
    >
      <button
        slot="button"
        aria-label="Toggle password visibility"
        :class="b('button')"
        @click="handleToggleVisibility"
      >
        <r-icon
          :class="b('icon')"
          :glyph="isPasswordShown ? eyeHideIcon : eyeIcon"
        />
      </button>
    </r-input>
  </r-field>
</template>

<script>
import RField from '@/components/RField/RField.vue';
import RIcon from '@/components/RIcon/RIcon.vue';
import RInput from '@/components/RInput/RInput.vue';
import RLabel from '@/components/RLabel/RLabel.vue';

import eyeIcon from '@/assets/icons/eye.svg';
import eyeHideIcon from '@/assets/icons/eye-hide.svg';

export default {
  name: 'RPasswordField',
  block: 'r-password-field',

  components: {
    RField,
    RLabel,
    RIcon,
    RInput,
  },

  props: {
    /**
     * Identificator of field
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
  },

  data() {
    return {
      eyeIcon,
      eyeHideIcon,

      isPasswordShown: true,
    };
  },

  methods: {
    handleToggleVisibility() {
      this.isPasswordShown = !this.isPasswordShown;
    },

    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style>
  .r-password-field {
    &__button {
      display: block;
      width: 100%;
      height: 100%;
      padding: 8px 0 14px;
      background: none;
      border: none;
      cursor: pointer;
    }

    &__button:focus {
      outline: none;
    }

    &__button:focus &__icon {
      fill: var(--color-blue);
    }
  }
</style>

<docs>
  ```jsx
  let value = '';
  <r-password-field id="password" v-model="value" />
  ```
</docs>
