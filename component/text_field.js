Vue.component('text-field', {
  template: `
  <div @click="focus = true" class="text-field w-100">
    <label       
      :for="id" 
      class="text-white text-field-placeholder"
      :class="{'active': focus}">
      {{ label }}
    </label>
    <input type="text" :id="id" class="bg-transparent border-0 text-white pb-2" style="outline: none;">
  </div>
  `,
  props: ['id', 'label'],
  data: () => ({
    focus: false
  }),
  methods: {
    handleClickOutside(evt) {
      const value = document.querySelector('#'+this.id).value
      if (!this.$el.contains(evt.target) && value === '') {
        this.focus = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
})