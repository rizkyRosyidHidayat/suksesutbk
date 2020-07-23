Vue.component('text-field-kontak', {
  template: `
  <div @click="focus = true" class="text-field field-kontak w-100">
    <label       
      :for="id" 
      class="text-black-50 text-field-placeholder font-weight-bold"
      :class="{'active': focus}">
      {{ label }}
    </label>
    <input type="text" :id="id" class="bg-transparent border-0 pb-2" style="outline: none;">
  </div>
  `,
  props: ['id', 'label'],
  data: () => ({
    focus: false
  }),
  methods: {
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
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