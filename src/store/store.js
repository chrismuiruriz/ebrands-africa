import { reactive } from "vue";

const store = reactive({
  theme: "",
  setTheme(theme) {
    this.theme = theme;
  },
});

export default store;
