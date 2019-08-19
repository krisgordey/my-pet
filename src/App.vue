<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>{{ $t("helloWorld") }}</h1>
    <div>
      <button
        v-for="entry in locales"
        :key="entry.title"
        @click="changeLocale(entry.code)"
      >
        {{ entry.name }}
      </button>
    </div>
    <div class="block">
      <el-date-picker
        v-model="date"
        type="datetimerange"
        align="right"
        :start-placeholder="$t('startdate')"
        :end-placeholder="$t('enddate')"
        :default-time="['12:00:00', '08:00:00']"
      >
      </el-date-picker>
    </div>
    <router-view />
  </div>
</template>

<script>
import i18n from "./plugins/i18n";
import { locales } from "@/plugins/i18n";

export default {
  name: "app",
  data() {
    return {
      locales,
      date: ""
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
