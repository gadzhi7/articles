<template>
  <div class="confirm">
    <h2>Вы действительно хотите удалить?</h2>
    {{article}}
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
  min-height: 250px;
  box-shadow: 0 1px 15px 5px rgba(red, .2);
  border-radius: 7px;
  background: #009fff;
  background: -webkit-linear-gradient(to right, #009fff, #ec2f4b);
  background: linear-gradient(to right, #009fff, #ec2f4b);
}

h2 {
  text-align: center;
  margin: 10px 0;
  font-size: 22px;
  font-weight: bold;
}

</style>
