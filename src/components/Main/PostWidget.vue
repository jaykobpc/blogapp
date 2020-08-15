<template>
  <div @click="change_view" class="postwidget">
      <div class="postwidget__imageview">
          <img :src="require(`@/assets/Images/${dataList.image}`)" alt="Widget" class="postwidget__imageview--img">
      </div>
      <div class="postwidget__textview">
          <h3 class="postwidget__textview--title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="postwidget__textview--smtext">{{ dataList.tags }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "PostWidget",
    props: {
        dataList: {
            type: Object,
            required: false,
        }
    },
    methods: {
        change_view() {
            this.$router.push('/post');
        }
    }
}
</script>

<style lang="scss">
.postwidget {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-radius: 0.4rem;
    border: 1px solid $color-grey-300;
    margin-bottom: 0.8rem;
    cursor: pointer;

    &__imageview {
        width: 12rem;
        overflow: hidden;

        &--img {
            max-width: 12rem;
            object-fit: cover;
            height: 100%;
        }
    }

    &__textview {
        padding: 0.5rem 0.8rem;

        &--title {
            font-size: 1.4rem;
            font-weight: 600;
            color: $color-grey-600;
            margin-bottom: 0.5rem;
            width: 100%;
        }

        &--smtext {
            font-size: 1.3rem;
            font-weight: 400;
            color: $color-grey-600;
        }
    }
}
</style>