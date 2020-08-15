<template>
  <div class="categorygrid">
    <div class="categorygrid__container">
      <PostCard v-for="data in imgList" :key="data.id" :imgItem="data" />
    </div>
    <Pagination />
  </div>
</template>

<script>
import PostCard from "../Main/PostCard";
import Pagination from "../Main/Pagination";

export default {
  name: "CategoryGrid",
  components: {
    PostCard,
    Pagination
  },
  data() {
    return {
      imgList: [
        { id: 1, image: "image5.jpeg", tags: "#Featured" },
        { id: 2, image: "image6.jpeg", tags: "#Moments" },
        { id: 3, image: "image7.jpeg", tags: "#Food & Recipes" },
        { id: 4, image: "image8.jpeg", tags: "#Food & Recipes" }
      ]
    };
  }
};
</script>

<style lang="scss">
.categorygrid {
  margin-top: 1.5rem;
  margin: 0 auto;
  width: 900px;
  padding-bottom: 2rem;

  @include respond(tab-port) {
    width: 100%;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2rem;
  }
}
</style>