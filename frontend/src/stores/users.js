import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      // Получение данных из JSON-файла заменим в последующих разделах
      this.users = users;
    },
  },
});
