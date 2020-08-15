<template>
  <div class="postgrid">
    <div class="postgrid__container">
      <div class="postgrid__colview">
        <h3 class="postgrid__colview--title">#Recommended Articles</h3>
        <div class="postgrid__colview--grid">
          <PostCard v-for="img in imgList" :key="img.id" :imgItem="img" />
        </div>
        <Pagination />
      </div>
      <div class="postgrid__rowview">
          <h3 class="postgrid__rowview--title">#Recent Articles</h3>
          <div class="postgrid__rowview--list">
              <PostWidget v-for="data in recentList" :key="data.id" :dataList="data" />
          </div>
          <Mailbox />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard";
import PostWidget from './PostWidget';
import Pagination from './Pagination';
import Mailbox from './Mailbox';

export default {
  name: "PostGrid",
  components: {
    PostCard,
    PostWidget,
    Pagination,
    Mailbox,
  },
  data() {
    return {
      imgList: [
        { id: 1, image: 'image5.jpeg', tags: "#Featured" },
        { id: 2, image: 'image6.jpeg', tags: "#Moments"},
        { id: 3, image: 'image7.jpeg', tags: "#Food & Recipes" },
        { id: 4, image: 'image8.jpeg', tags: "#Food & Recipes" },
      ],
      recentList: [
        { id: 1, image: 'image2.jpeg', tags: "Today" },
        { id: 2, image: 'image3.jpeg', tags: "Today"},
        { id: 3, image: 'image4.jpeg', tags: "Yesterday" },
        { id: 4, image: 'image5.jpeg', tags: "Aug 13, 2020" },
        { id: 5, image: 'image6.jpeg', tags: "Aug 13, 2020" },
        { id: 6, image: 'image7.jpeg', tags: "Aug 12, 2020" },
      ]
    }
  }
};
</script>

<style lang="scss">
.postgrid {
  margin-top: 2rem;
  overflow: hidden;

  @include respond(tab-port) {
    max-height: 100%;
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  &__colview {
      flex: 1 1 70%;

      &--title {
          font-size: 1.7rem;
          font-weight: 600;
          color: $color-grey-600;
          letter-spacing: 0.0555rem;
      }

      &--grid {
          display: flex;
          flex-wrap: wrap;
          padding-right: 2rem;

          @include respond(tab-port) {
              padding-right: 0;
          }
      }
  }

  &__rowview {
      flex: 1 1 30%;

      display: flex;
      flex-direction: column;

      @include respond(tab-port) {
        margin-top: 3rem;
        padding: 0 0.5rem;
      }

      &--title {
          font-size: 1.7rem;
          font-weight: 600;
          color: $color-grey-600;
          letter-spacing: 0.0555rem;
          margin-bottom: 1rem;
      }

      &--list {
          max-height: 40rem;
          overflow-y: auto;
      }
  }
}
</style>