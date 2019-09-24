<template>

    <div class="edit_article">
      <form>
        <label class="edit_article__field">
          <p>Заголовок статьи</p>
          <input type="text" placeholder="Заголовок статьи..." required>
        </label>
        <label class="edit_article__field">
          <p>Текст статьи</p>
          <textarea rows="10" placeholder="Текст статьи..." required></textarea>
        </label>
        <div class="actions">
          <button class="success" type="submit">Сохранить</button>
          <button class="cancel" type="button">Отмена</button>
        </div>
      </form>
    </div>

</template>

<script>


export default {
  name: 'EditPopup'
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
