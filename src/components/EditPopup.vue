<template>
  <div class="edit_article">
    <form>
      <label class="edit_article__field">
        <p>Заголовок статьи</p>
        <input type="text" placeholder="Заголовок статьи..." required v-model="title">
      </label>
      <label class="edit_article__field">
        <p>Текст статьи</p>
        <textarea rows="10" placeholder="Текст статьи..." required v-model="description"></textarea>
      </label>
      <div class="actions">
        <button class="success" type="button" @click="save()">Сохранить</button>
        <button class="cancel" type="button" @click="close()">Отмена</button>
      </div>
    </form>
  </div>

</template>

<script>


export default {
  name: 'EditPopup',
  props: ['article'],
  data () {
    return {
      addOrEdit: null,
      articles: [],
      title: this.article !== null ? this.article.title : '',
      description: this.article !== null ? this.article.description : ''
    };
  },
  beforeMount () {
    // проверка что элемент редактируется или добавляется новый
    if (this.article === null) {
      this.addOrEdit = 'add';
    } else {
      this.addOrEdit = 'edit';
    }
    // более коротная, но менее читабельная запись
    // this.addOrEdit = this.article === null ? 'add' : 'edit';
    this.articles = JSON.parse(localStorage.getItem('articles'));
  },
  methods: {
    save () {
      if (this.addOrEdit === 'edit') {
        let article = this.articles.find(a => a.date_publication === this.article.date_publication);
        article.title = this.title;
        article.description = this.description;
      } else {
        this.articles.push({
          title: this.title,
          description: this.description,
          date_publication: new Date()
        });
      }

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

.edit_article {
  padding: 10px 15px;
  width: 400px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 1px 15px 5px rgba(red, .2);
  border-radius: 7px;

  .edit_article__field {

    p {
      margin: 10px 0;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      resize-x: none;

    }
  }
}


</style>
