Vue.component('text-area', {
  template: `
  <div @click="focus = true" class="text-field w-100 mt-0 mt-sm-5" style="height: auto">
    <label       
      :for="id" 
      class="text-black-50 text-field-placeholder font-weight-bold"
      :class="{'active': focus}">
      {{ label }}
    </label>
    <textarea :id="id" class="bg-transparent border-0 pb-2 w-100" style="outline: none;" rows="5"></textarea>
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