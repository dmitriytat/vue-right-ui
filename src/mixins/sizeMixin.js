export const SIZES = ['small', 'medium', 'large'];

/**
 * @mixin
 */
const sizeMixin = {
  props: {
    /**
     * Size of the element
     */
    size: {
      type: String,
      default: 'medium',
      validator: val => SIZES.includes(val),
    },
  },
};

export default sizeMixin;
