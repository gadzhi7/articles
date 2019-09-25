<template lang="html">
  <section class="edit_wrapper">
    <Header :links="headerLinks"/>
    <div class="actions actions_adding">
      <p>Добавить новую статью</p>
      <button class="success" type="button" @click="addingEditing()">Добавить</button>
    </div>
    <div class="articles_item-wrapper" v-for="(article, index) in sortedArticles" :key="index">
      <div class="articles_item">
        <h3>{{article.title}}</h3>
        <p>{{article.description}}</p>
        <h6>{{new Date(article.date_publication).toLocaleString()}}</h6>
        <div class="actions">
          <button class="cancel" type="button" @click="addingEditing(index)">Редактировать</button>
          <button class="delete" type="button" @click="deleteing(index)">Удалить</button>
        </div>
      </div>
    </div>
    <div class="edit_page">
      <div class="popup" v-if="deleteArticle">
        <DeletePopup @close="close()"/>
      </div>
      <div class="popup" v-if="addEditArticle">
        <EditPopup @saveEdit="save" :article="article" @close="close()"/>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue';
import EditPopup from '../components/EditPopup.vue';
import DeletePopup from '../components/DeletePopup.vue';

export default {
  name: 'EditPage',
  components: {
    Header,
    EditPopup,
    DeletePopup
  },
  data () {
    return {
      headerLinks: [{
        title: 'Главная',
        route: 'home'
      }],
      article: null,
      articles: [],
      addEditArticle: false,
      deleteArticle: false
    };
  },
  beforeMount () {
    this.getArticles();
  },
  methods: {
    getArticles () {
      this.articles = JSON.parse(localStorage.getItem('articles'));
      if (!JSON.parse(localStorage.getItem('auth'))) {
        this.$router.push({ name: 'home' });
      }
    },
    close () {
      this.addEditArticle = this.deleteArticle = false;
      this.article = null;
      this.getArticles();
    },
    addingEditing (i) {
      if (i !== undefined) {
        this.article = this.articles[i];
      }
      this.addEditArticle = true;
    },
    deleteing (i) {
      console.log(i);
      console.log(this.articles[i]);
    },
    save (i) {
      console.log(i);
    },
    overlay () {
      console.log(11111);
    }
  },
  computed: {
    sortedArticles () {
      // сортируем статьи по дате (от новых к старому)
      return this.articles.sort((a, b) => {
        return new Date(b.date_publication) - new Date(a.date_publication);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000, 0.1);
  z-index: 2;
  top: 0;
  left: 0;
}

.actions_adding {
  padding: 20px;

  p {
    font-size: 18px;
    font-weight: bold;
  }
}

</style>
