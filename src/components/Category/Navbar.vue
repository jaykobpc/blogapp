<template>
  <div class="wxnavbar">
    <div class="wxnavbar__iconview">
      <div @click="change_view" class="wxnavbar__iconview--icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </div>
    </div>
    <div class="wxnavbar__textview">
      <h3 class="wxnavbar__textview--text">#Music and Lifestyle</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "wxnavbar",
  methods: {
      change_view() {
          this.$router.push("/");
      }
  }
};
</script>

<style lang="scss">
.wxnavbar {
  background-image: linear-gradient(
      rgba($color-dark-300, 0.4),
      rgba($color-dark-300, 0.4)
    ),
    url("../../assets/Images/image2.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 25vh;

  @include respond(tab-port) {
      height: 20vh;
  }

  &__iconview {
      padding: 1rem 1.5rem;

      @include respond(tab-port) {
          padding: 1rem 0.3rem;
      }

      &--icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          text-align: center;
          background-color: transparent;
          fill: $color-grey-300;
          padding: 0.4rem 0.3rem;
          transform: scale(1.1);
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
              background-color: $color-dark-300;
          }
      }
  }

  &__textview {
      padding: 1.5rem 1.5rem;
      text-align: center;

    &--text {
        font-size: 2rem;
        font-weight: 500;
        color: $color-grey-300;
    }
  }
}
</style>