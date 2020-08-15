<template>
  <div class="mailbox">
      <div class="mailbox__container">
          <h3 class="mailbox__container--title">Subscribe to email alerts</h3>
          <input type="email" autocomplete="false" placeholder="Your email" class="mailbox__container--input">
          <button class="mailbox__container--btn">Subscribe</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Mailbox",
}
</script>

<style lang="scss">
.mailbox {
    margin-top: 3rem;
    padding: 1.5rem 0.6rem;
    border-radius: 0.4rem;
    border: 1px solid $color-grey-300;

    &__container {
        display: flex;
        flex-direction: column;

        &--title {
            font-size: 1.5rem;
            font-weight: 600;
            color: $color-grey-600;
            margin-bottom: 0.5rem;
        }

        &--input {
            border: none;
            outline: none;
            background-color: $color-white;
            font-size: 1.4rem;
            font-weight: 400;
            color: $color-dark-300;
            border: 1px solid $color-grey-500;
            border-radius: 0.4rem;
            padding: 1.3rem 1rem;
        }

        &--btn {
            margin-top: 1rem;
            padding: 1rem;
            text-transform: uppercase;
            border-radius: 0.4rem;
            background-color: $color-blue-500;
            border: none;
            outline: none;
            color: $color-white;
            font-weight: 600;
            cursor: pointer;
            letter-spacing: 0.0555rem;
        }
    }
}
</style>