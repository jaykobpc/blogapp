<template>
  <div class="searchbox">
      <div class="searchbox__container">
          <input type="text" autocomplete="false" placeholder="Search Post.." class="searchbox__container--input">
          <button class="searchbox__container--btn">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Searchbox",
}
</script>

<style lang="scss">
.searchbox {
    padding: 2.5rem 1rem;

    &__container {
        margin: 0 auto;
        width: 600px;
        display: flex;
        flex-direction: row;
        align-items: center;

        @include respond(tab-port) {
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        &--input {
            width: 100%;
            padding: 1.3rem 1rem;
            border-top-left-radius: 0.4rem;
            border-bottom-left-radius: 0.4rem;
            border: 1px solid $color-grey-500;
            font-size: 1.4rem;
            font-weight: 500;
            color: $color-grey-600;
        }

        &--btn {
            padding: 1rem 1.3rem;
            border: none;
            outline: none;
            background-color: $color-blue-500;
            fill: $color-white;
            border-top-right-radius: 0.4rem;
            border-bottom-right-radius: 0.4rem;
            cursor: pointer;
        }
    }
}

</style>