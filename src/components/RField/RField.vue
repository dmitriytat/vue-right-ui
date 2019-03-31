<template>
  <div
    :id="`${id}-field`"
    :class="b()"
  >
    <slot
      :id="`${id}-label`"
      name="label"
      :active="active"
      :focused="focused"
      :invalid="invalid"
      :forId="id"
      :class="b('label')"
    />
    <slot
      :id="id"
      name="control"
      :activate="activate"
      :deactivate="deactivate"
      :focus="focus"
      :blur="blur"
      :active="active"
      :focused="focused"
      :invalid="invalid"
      :class="b('control')"
    />
    <slot
      :id="`${id}-error`"
      name="error"
      :active="active"
      :focused="focused"
      :invalid="invalid"
      :validate="validate"
      :invalidate="invalidate"
      :class="b('error')"
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
  block: 'r-field',

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
      focused: false,
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

    focus() {
      this.focused = true;
    },

    blur() {
      this.focused = false;
    },
  },
};
</script>

<docs>
  ```jsx
  const searchIcon = require('@/assets/icons/search.svg').default;
  let value = '';
  <r-field id="user-name">
    <r-label
      slot="label"
      slot-scope="{ id, forId, active, focused, invalid }"
      :id="id"
      :for-id="forId"
      :active="active"
      :invalid="invalid"
      :focused="focused"
    >
      Search
    </r-label>
    <r-input
      slot="control"
      slot-scope="{ id, activate, deactivate, focus, blur }"
      :id="id"
      @activate="activate"
      @deactivate="deactivate"
      @focus="focus"
      @blur="blur"
      v-model="value"
    >
      <r-icon
        slot="icon"
        :glyph="searchIcon"
      />
    </r-input>
  </r-field>
  ```
</docs>
