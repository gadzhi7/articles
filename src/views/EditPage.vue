<template lang="html">
  <section class="edit_wrapper">
    <Header />
      <div class="articles_item-wrapper" v-for="(article, index) in articles" :key="index">
        <div class="articles_item">
          <h3>{{article.title}}</h3>
          <p>{{article.description}}</p>
          <h6>{{new Date(article.date_publication).toLocaleString()}}</h6>
          <div class="actions" >
            <button class="cancel" type="button" @click="editing(index)">Отмена</button>
            <button class="delete" type="button" @click="deleteing(index)">Удалить</button>
          </div>
        </div>
      </div>
      <div class="actions actions_adding">
        <p>Добавить новую статью</p>
        <button class="success" type="button" @click="adding()">Добавить</button>
      </div>
    <div class="edit_page">
       <div class="popup" v-if="deleteArticle">
         <DeletePopup />
       </div>
      <div class="popup" v-if="editArticle">
      <EditPopup />
    </div>
    </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import router from '../router/index'
import EditPopup from '../components/EditPopup.vue'
import DeletePopup from '../components/DeletePopup.vue'

export default {
  name: 'EditPage',
  components: {
    Header,
    EditPopup,
    DeletePopup
  },
  data() {
    return {
      articles: [],
      editArticle: false,
      addArticle: false,
      deleteArticle: false
    }
  },
  beforeMount () {
    this.articles = JSON.parse(localStorage.getItem('articles'));
    if (!JSON.parse(localStorage.getItem('auth'))) {
      router.push({ name: 'home' })
    }
  },
  methods: {
    editing (i) {

    },
    deleteing (i) {

    },
    adding() {

    }
  }
}
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
}

.actions_adding {
  padding: 20px;

  p {
    font-size: 18px;
    font-weight: bold;
  }
}

</style>
