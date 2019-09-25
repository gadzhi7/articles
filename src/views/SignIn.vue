<template lang="html">
  <div class="signin">
    <Header />
    <div class="sign_in">
      <form @submit.prevent="login">
        <label for="">
          <p>Логин</p>
          <input type="text" placeholder="Введите логин" required>
        </label>
        <label>
          <p>Пароль</p>
          <input type="password" placeholder="Введите пароль" required>
        </label>
        <div class="actions">
          <button type="submit" class="success">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'SignIn',
  components: {Header},
  data () {
    return {
      auth: false
    }
  },
  methods: {
    login () {
      localStorage.setItem('auth', 'true');
      this.$router.push({ name: 'edit' });
    }
  }
}
</script>

<style lang="scss" scoped>

  .sign_in {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: -1;

    form {
      width: 250px;
      background: #7f7fd5;
      background: -webkit-linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
      background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
      padding: 20px 30px;
      border-radius: 7px;

      label {
        margin-bottom: 10px;
        display: block;

        p {
          margin: 5px 0;
        }

        input {
          width: 100%;
        }
      }
    }
  }

</style>
