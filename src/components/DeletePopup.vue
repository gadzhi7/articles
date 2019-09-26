<template>
  <div class="confirm">
    <h2>Вы действительно хотите удалить</h2>
    <h3>статью: <b> {{article.title}} </b> ?</h3>
    <div class="actions">
      <button class="delete" @click="deleting()">Удалить</button>
      <button class="cancel" @click="close()">Отмена</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  name: 'DeletePopup',
  data () {
    return {
      articles: []
    };
  },
  beforeMount () {
    this.articles = JSON.parse(localStorage.getItem('articles'));
  },
  methods: {
    // удаление статьи
    deleting () {
      this.articles = this.articles.filter(a => {
        if (a.date_publication !== this.article.date_publication) {
          return a
        }
      });
      localStorage.setItem('articles', JSON.stringify(this.articles));
      this.close();
    },
    close () {
      // Закрыть модальное окно
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">

.confirm {
  padding: 10px 15px;
  width: 400px;
  min-height: 150px;
  box-shadow: 0 1px 15px 5px rgba(red, .2);
  border-radius: 7px;
  background: #c9d6ff;
  background: -webkit-linear-gradient(to right, #c9d6ff, #e2e2e2);
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
}

h2 {
  text-align: center;
  margin: 10px 0;
  font-size: 22px;
  font-weight: bold;
}

h3 {
  text-align: center;
  font-size: 20px;
  margin: 20px 0;

  b {
    font-weight: bold;
  }
}

</style>
