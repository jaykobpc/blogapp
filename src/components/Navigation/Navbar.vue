<template>
  <div class="navbar">
    <div class="navbar__navbox">
      <h3 class="navbar__navbox--title"></h3>
    </div>
    <div class="navbar__titleview">
      <h3 class="navbar__titleview--text">The Nature Mystery</h3>
      <p class="navbar__titleview--smtext">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dicta sed asperiores magni nemo facilis tempora tempore excepturi?
      Ut assumenda libero totam. Blanditiis inventore ipsa tempora! 
      </p>
      <button @click="change_view" class="navbar__titleview--smbutton">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    change_view() {
      this.$router.push('/post');
    }
  }
};
</script>

<style lang="scss">
.navbar {
  background-image: linear-gradient(
    rgba($color-dark, 0.4),
    rgba($color-dark, 0.4)),
    url("../../assets/Images/landing2.jpg");
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &__navbox {
    padding: 2rem 1rem;
    text-align: center;

    &--title {
      font-size: 1.7rem;
      font-weight: 600;
      color: $color-grey-300;
      text-transform: uppercase;
      letter-spacing: 0.055rem;
    }
  }

  &__titleview {
    width: 48rem;
    position: relative;
    top: 15%;
    left: 5%;

    @include respond(tab-port) {
      text-align: center;
      width: 100%;
      left: 0;
      top: 20%;
      padding: 0rem 0.8rem;
    }

    &--text {
      display: block;
      font-size: 4.5rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.555rem;
      color: $color-grey-300;

      @include respond(tab-port) {
        font-size: 3.5rem;
      }
    }

    &--smtext {
      font-size: 1.4rem;
      font-weight: 300;
      margin-top: 0.5rem;
      color: $color-white;
    }

    &--smbutton {
      margin-top: 2rem;
      border: none;
      background-color: $color-dark-200;
      color: $color-grey-300;
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 300;
      cursor: pointer;
      letter-spacing: 0.20995rem;
      border-radius: 0.4rem;
      padding: 1rem 1.5rem;
      transition: all 0.3s;
    }
  }
}

</style>