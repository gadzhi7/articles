<template>
  <div class="confirm">
    <h2>Вы действительно хотите удалить?</h2>
    <div class="actions">
      <button class="delete">Удалить</button>
      <button class="cancel">Отмена</button>
    </div>
  </div>
</template>

<script>
export default {
  // props: [index],
  name: 'DeletePopup'
};
</script>

<style scoped lang="scss">

  .confirm {
    padding: 10px 15px;
    width: 400px;
    min-height: 250px;
    background-color: #fff;
    box-shadow: 0 1px 15px 5px rgba(red, .2);
    border-radius: 7px;
  }

  h2 {
    text-align: center;
    margin: 10px 0;
    font-size: 22px;
    font-weight: bold;
  }

</style>
