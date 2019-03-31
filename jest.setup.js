import Vue from 'vue';
import VueBemCn from 'vue-bem-cn';

Vue.config.productionTip = false;

Vue.use(VueBemCn, {
  delimiters: {
    ns: '', // namespace
    el: '__', // element delimeter
    mod: '_', // modifier delimeter
    modVal: '_', // value delimeter for modifier
  },
});
