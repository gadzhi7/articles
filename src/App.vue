<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'app',

  data () {
    return {
      auth: false,
      articles: [
        {
          title: 'Первая тестовая статья',
          description: 'Простое описание статьи',
          date_publication: '2019-09-24T12:05:07'
        },
        {
          title: 'Вторая статья',
          description: 'Простое описание статьи',
          date_publication: '2019-09-24T14:25:15'
        }
      ]
    }
  },
  beforeMount () {
    // если в localStorage нет статей (первый раз пользователь зашел сайт) то, записываем с data иначе получаем раннее добавленные
    if (localStorage.getItem('articles') === null) {
      localStorage.setItem('articles', JSON.stringify(this.articles));
    } else {
      this.articles = JSON.parse(localStorage.getItem('articles'));
    }
  }
}
</script>

<style lang="scss">
  @import "assets/reset.css";

  .page-enter-active, .page-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

  .articles_item-wrapper {
    border-bottom: 1px solid #777777;

    .articles_item {
      max-width: 970px;
      padding: 20px;
      margin: 0 auto;

      h3 {
        font-weight: bold;
        font-size: 26px;
      }

      p {
        margin: 20px 0;
        font-size: 18px;
      }

      h6 {
        color: #777777;
        text-align: right;
      }
    }
  }

  .actions {
    margin: 15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      padding: 7px 18px;
      border-radius: 3px;
      border: 0;
      color: #fff;
      font-size: 16px;
      margin-left: 10px;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
      }
    }

    .success {
      background-color: forestgreen;

      &:hover {
        background-color: #1e771e;
      }

      &:active {
        background-color: #1c681c;
      }
    }

    .delete {
      background-color: red;

      &:hover {
        background-color: #ef0000;
      }

      &:active {
        background-color: #e10000;
      }
    }

    .cancel {
      background-color: dodgerblue;

      &:hover {
        background-color: #1e82ee;
      }

      &:active {
        background-color: #1e76e1;
      }
    }

  }

</style>
