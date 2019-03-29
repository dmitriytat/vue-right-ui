<template>
  <div
    :id="`${id}-field`"
    class="r-field"
  >
    <slot
      name="label"
      :active="active"
      :id="`${id}-label`"
      :forId="id"
      class="r-field__label"
    />
    <slot
      name="control"
      :id="id"
      :activate="activate"
      :deactivate="deactivate"
      class="r-field__control"
    />
    <slot
      name="error"
      :id="`${id}-error`"
      :validate="validate"
      :invalidate="invalidate"
      class="r-field__error"
    />
  </div>
</template>

<script>
/* eslint-disable no-console */
import '@/variables/colors.css';
import '@/variables/transitions.css';
import '@/variables/fonts.css';

export default {
  name: 'RField',

  inheritAttrs: false,

  props: {
    /**
       * Identificator of field
       */
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      active: false,
      invalid: false,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    activate() {
      this.active = true;
    },

    deactivate() {
      this.active = false;
    },

    validate() {
      this.invalid = false;
    },

    invalidate() {
      this.invalid = true;
    },
  },
};
</script>

<docs>
  ```jsx
  const eyeIcon = require('@/assets/icons/eye.svg').default;
  <r-field id="user-name">
    <r-label
      slot="label"
      slot-scope="{ id, forId, active }"
      :id="id"
      :for-id="forId"
      :active="active"
    >
      Password
    </r-label>
    <r-input
      slot="control"
      slot-scope="{ id, activate, deactivate }"
      :id="id"
      @activate="activate"
      @deactivate="deactivate"
    >
      <r-icon
        slot="icon"
        :glyph="eyeIcon"
      />
    </r-input>
  </r-field>
  ```
</docs>
