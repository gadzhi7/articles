<template lang="html">


  <section class="edit_wrapper">
    <Header />
    <div class="edit_page">

<!--    <div class="popup">-->
<!--      <DeletePopup />-->
<!--    </div>-->
    <div class="popup">
      <EditPopup />
    </div>
    </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import EditPopup from '../components/EditPopup.vue'
import DeletePopup from '../components/DeletePopup.vue'

export default {
  name: 'EditPage',
  components: { Header, EditPopup, DeletePopup },
  data () {
    return {

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

</style>
