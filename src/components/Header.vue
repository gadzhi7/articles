<template lang="html">
  <header class="header">
    <h2>Gkhabada</h2>
    <div class="header_links">
      <template v-if="!auth">
        <router-link :to="{ name: 'signin' }">Вход</router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'home' }">Главная</router-link>
        <router-link :to="{ name: 'edit' }">Редактирование статей</router-link>
        <a href="#" @click.stop="signout()">Выход</a>
      </template>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      auth: false
    }
  },
  beforeMount () {
    this.auth = JSON.parse(localStorage.getItem('auth'));
  },
  methods: {
    signout() {
      this.auth = false;
      localStorage.setItem('auth', 'false');
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>

  .header {
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  .header {
    background-color: #111;
    color: #eee;
    font-family: sans-serif;

    a {
      color: #eee;
      text-decoration: none;
      margin-left: 15px;
    }
  }

</style>
