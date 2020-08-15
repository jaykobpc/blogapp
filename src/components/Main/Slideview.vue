<template>
  <div v-if="layoutData.length > 0" class="slideview">
    <div class="slideview__headerbox">
      <h3 class="slideview__titlebox">#Collections</h3>
      <div class="slideview__iconview">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </div>
    </div>
    <swiper class="slideview__container" :options="swiperOptions">
      <swiper-slide @click.native="change_view" v-for="data in layoutData" :key="data.id" class="slideview__card">
        <img
          draggable="false"
          :src="require(`@/assets/Images/${data.img}`)"
          alt="Recommended"
          class="slideview__card--img"
        />
        <h3 class="slideview__card--text">{{ data.text }}</h3>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/** Vue swiper */
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "Slideview",
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    change_view() {
      this.$router.push('/category');
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        loop: false,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: ".slideview__iconview"
        }
      },
      layoutData: [
        { id: 1, img: "image1.jpeg", text: "#Featured" },
        { id: 2, img: "image2.jpeg", text: "#Moments" },
        { id: 3, img: "image3.jpeg", text: "#Gallery" },
        { id: 4, img: "image8.jpeg", text: "#Food & Recipes" },
        { id: 5, img: "image5.jpeg", text: "#Events & Meetings" },
        { id: 6, img: "image6.jpeg", text: "#Films & Movies" },
        { id: 7, img: "image4.jpeg", text: "#Art & Culture" },
        { id: 8, img: "image3.jpeg", text: "#Music & Lifestyle" },
      ]
    };
  }
};
</script>

<style lang="scss">
.slideview {
  padding: 0.5rem 0.5rem;

  &__titlebox {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.0555rem;
    color: $color-dark-300;

    @include respond(tab-port) {
      font-size: 1.5rem;
    }
  }

  &__headerbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__iconview {
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
    border-radius: 50%;
    padding: 0.5rem 0.3rem;
    fill: $color-grey-600;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #dde;
    }
  }

  &__container {
    padding: 0.5rem 0rem !important;
  }

  &__card {
    overflow: hidden;
    border-radius: 0.4rem;
    position: relative;
    height: 10rem !important;
    cursor: pointer;

    @include respond(tab-port) {
      height: 7rem !important;
    }

    &--img {
      object-fit: cover;
    }

    &--text {
      position: absolute;
      display: block;
      bottom: 0;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1rem 0.8rem;
      letter-spacing: 0.0999rem;
      color: $color-grey-300;
      
      &:hover {
          text-decoration: underline;
      }

      @include respond(tab-port) {
        font-size: 1.3rem;
      }
    }
  }
}
</style>