<template>
  <div class="mxnavbar add_shadow">
    <div class="mxnavbar__imageview"></div>
    <div class="mxnavbar__container">
      <div @click="change_view" class="mxnavbar__iconview">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </div>
    </div>
    <div class="mxnavbar__textview">
      <h3 class="mxnavbar__textview--title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et aperiam suscipit tenetur nihil, ea vel.</h3>
      <p class="mxnavbar__textview--smtext">#Events &amp; Meetings</p>
    </div>
    <div class="mxnavbar__imageview">
      <img src="@/assets/Images/profile.jpeg" alt="Profile" class="mxnavbar__imageview--img">
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    change_view() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.mxnavbar {
  width: 100%;
  background-image: linear-gradient(
      rgba($color-dark-200, 0.6),
      rgba($color-dark-200, 0.6)),
      url("../../assets/Images/image3.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 50vh;
  background-size: cover;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0.5rem;
    z-index: 999;
  }

  &__iconview {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    text-align: center;
    padding: 0.6rem 0.3rem;
    fill: $color-grey-300;
    background-color: transparent;
    transition: background-color 0.3s;
    cursor: pointer;
    transform: scale(1.1);

    &:hover {
      background-color: $color-dark-300;
      fill: $color-white;
    }
  }

  &__textview {
    text-align: center;
    width: 550px;
    margin: 1.5rem auto;

    @include respond(tab-port) {
      width: 100%;
    }

    &--title {
      font-size: 2.4rem;
      font-weight: 500;
      color: $color-grey-300;
      margin-bottom: 3rem;
    }

    &--smtext {
      font-size: 1.7rem;
      font-weight: 400;
      color: $color-grey-300;
    }
  }

  &__imageview {
    margin: 0 auto;
    width: 7rem;

    &--img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>