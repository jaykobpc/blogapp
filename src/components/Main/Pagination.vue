<template>
  <div class="wxpagination">
    <button class="wxpagination__btn">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </svg>
      <span class="wxpagination__btn--text">Prev</span>
    </button>
    <button class="wxpagination__btn">
      <span class="wxpagination__btn--text">Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination"
};
</script>

<style lang="scss">
.wxpagination {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 2rem;

  @include respond(tab-port) {
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding: 0 0.5rem;
  }

  &__btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    background-color: $color-grey-400;
    padding: 0.5rem 1.5rem;
    fill: $color-white;
    color: $color-white;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0px 2px 5px rgba($color-dark, 0.3);
    }

    &--text {
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.055rem;
    }
  }
}
</style>