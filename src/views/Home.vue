<template lang="html">
  <div class="">
    <Header :links="links" @update="headerLinks"/>
    <div class="articles">
      <div class="articles_item-wrapper" v-for="(article, index) in sortedArticles" :key="index">
        <div class="articles_item">
          <h3>{{article.title}}</h3>
          <p>{{article.description}}</p>
          <h6>{{new Date(article.date_publication).toLocaleString()}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: { Header },
  data () {
    return {
      links: [],
      articles: []
    };
  },
  beforeMount () {
    // получаем статьи с localStorage
    this.articles = JSON.parse(localStorage.getItem('articles'));
    this.headerLinks();
  },
  methods: {
    headerLinks () {
      // ссылки страницы в header
      if (JSON.parse(localStorage.getItem('auth'))) {
        this.links = [{
          title: 'Редактирование',
          route: 'edit'
        }];
      } else {
        this.links = [{
          title: 'Вход',
          route: 'signin'
        }];
      }
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

<style lang="scss">

.articles {
  margin: 50px 0;
}

</style>
