<template>
  <div v-if="isActive" class="imageview">
    <div class="imageview__wrapper">

      <div class="imageview__navbar">
        <div @click="closeModal" class="imageview__iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
          </svg>
        </div>
        <div class="imageview__textview">
          <h3 class="imageview__textview--text">Blog image</h3>
        </div>
      </div>

      <div class="imageview__container">
          <img draggable="false" src="@/assets/Images/image5.jpeg" alt="Gallery" class="imageview__container--img">
      </div>

    </div>
  </div>
</template>

<script>
import EventBus from '../../Eventbus/EventBus.js';

export default {
    name: "Imageview",
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        EventBus.$on('clkModal', this.ActiveModal);
    },
    beforeDestroy() {
        EventBus.$off('clkModal', this.ActiveModal);
    },
    methods: {
        ActiveModal(value) {
            if(!value) return '';
            this.isActive = value
            document.body.style.overflowY = 'hidden';
        },
        closeModal() {
            this.isActive = false;
            document.body.style.overflowY = null;
        }
    }
};
</script>

<style lang="scss">
.imageview {
    //display: none;

    &__wrapper {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            rgba($color-dark-200, 0.8),
            rgba($color-dark-200, 0.8)
        );
        z-index: 9999;
        overflow: hidden;
    }

    &__navbar {
        display: flex;
        flex-direction: row;
        padding: 1.2rem 0.8rem;
        align-items: center;
        text-align: center;
    }

    &__iconview {
        fill: $color-white;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        padding: 0.5rem 0.3rem;
        transition: all 0.3s;

        &:hover {
            background-color: $color-dark-300;
        }
    }

    &__textview {
        flex: 1;
        text-align: center;

        &--text {
            font-size: 1.5rem;
            font-weight: 500;
            color: $color-grey-300;
            margin-right: 5rem;
        }
    }

    &__container {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 70rem;
        overflow-y: auto;

        @include respond(tab-port) {
            width: 100%;
            padding: 0 0.5rem;
        }

        &--img {
            object-fit: cover;
        }
    }
}
</style>