<template>
    <div @click="change_view" class="postcard flex-auto">
      <div class="postcard__imagebox">
        <img draggable="false" :src="require(`@/assets/Images/${imgItem.image}`)" alt="Post Image" class="postcard__imagebox--img" />
        <span class="postcard__imagebox--smtext">{{ imgItem.tags }}</span>
      </div>
      <div class="postcard__textview">
        <h3 class="postcard__textview--title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
        <p class="postcard__textview--smtext">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nostrum eius accusantium voluptates quibusdam earum reprehenderit quo odio, illo fugiat explicabo.
        </p>
      </div>
      <div class="postcard__footerview">
        <img src="@/assets/Images/profile.jpeg" alt="Profile" class="postcard__footerview--img" />
        <p class="postcard__footerview--smtext">By Debra the zebra</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    imgItem: {
      type: Object,
      required: false
    }
  },
  methods: {
    change_view() {
      this.$router.push("/post");
    }
  }
};
</script>

<style lang="scss">
.postcard {
  width: 30rem;
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;
  margin: 1rem 0.5rem;
  border: 1px solid $color-grey-300;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 3px 5px rgba($color-grey-600, 0.4);
  }

  @include respond(tab-port) {
    width: 100%;
    flex: 1 1 auto;
    margin: 1rem 0.5rem;
  }

  &__imagebox {
    overflow: hidden;
    height: 15rem;
    position: relative;

    &--img {
      object-fit: cover;
      max-height: 15rem;
      filter: brightness(75%);
      transition: all 0.3s;

      &:hover {
          filter: brightness(100%);
      }
    }

    &--smtext {
      position: absolute;
      font-size: 1.5rem;
      font-weight: 400;
      color: $color-grey-300;
      bottom: 0.5rem;
      padding: 1rem 1rem;
    }
  }

  &__textview {
    padding: 1.3rem 0.8rem;

    &--title {
      font-size: 2rem;
      font-weight: 600;
      overflow: hidden;
      width: 100%;
      color: $color-dark-300;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }

  &__footerview {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0.5rem;

    &--img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 1rem;
    }

    &--smtext {
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }
}

.flex-auto {
  flex: 1 1 auto;
}
</style>