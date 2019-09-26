<template lang="html">
  <header class="header">
    <div class="header_inner">
      <h2><a href="http://gkhabada.ru/" target="_blank">Gkhabada</a></h2>
      <div class="header_links">
        <router-link
          :to="{ name: link.route }"
          v-for="(link, index) in links"
          :key="index"
        >
          {{link.title}}
        </router-link>
        <a href="#" @click.stop="signOut()" v-if="auth">Выход</a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  props: ['links'],
  name: 'Header',
  data () {
    return {
      auth: false
    };
  },
  beforeMount () {
    // проверка на аунтефикацию для отображения кнопки выход
    this.auth = JSON.parse(localStorage.getItem('auth'));
  },
  methods: {
    // выход из профиля
    signOut () {
      this.auth = false;
      localStorage.setItem('auth', 'false');
      if (!!this.$parent.$options.methods.headerLinks) {
        this.$emit('update');
      } else {
        this.$router.push({ name: 'home' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.header {
  background-color: #111;
  color: #eee;
  font-family: sans-serif;
  padding: 0 50px;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  .header_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 970px;
    min-height: 50px;
    margin: 0 auto;
  }

  a {
    color: #bbb;
    text-decoration: none;
    margin-left: 15px;
    transition: 0.3s;
    padding: 3px 7px;
    border-radius: 2px;

    &:hover {
      transition: 0.3s;
      color: #000;
      background-color: #fff;
    }
  }
}

@media (max-width: 500px) {
  .header h2 {
    display: none;
  }
}

</style>
