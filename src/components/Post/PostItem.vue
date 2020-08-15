<template>
  <div class="postitem">
    <div class="postitem__container copyable-text">
      <div class="postitem__paragraph">
        <p class="postitem__paragraph--text"><span class="capitalize">L</span>orem ipsum dolor sit, amet consectetur adipisicing elit. 
          Debitis rem nostrum obcaecati accusantium fuga consectetur optio, ducimus incidunt autem dolor minus vero, 
          natus non repudiandae expedita vitae facere consequatur fugit eos. Cum molestiae sit, labore quod itaque inventore 
          ipsam deleniti quis totam, commodi voluptas. Architecto illum officia consectetur excepturi praesentium neque! Doloribus 
          inventore totam, assumenda similique <br>
          <br>
          Repellendus molestias nostrum tempore eligendi sed tempora porro amet optio repudiandae 
          pariatur minima non molestiae minus recusandae laboriosam harum itaque aliquam est. Nostrum dolorum, earum illum iure perspiciatis 
          veniam vel. Suscipit minima, id dolorem laboriosam iste iure eligendi, dolor harum ullam quisquam voluptas aspernatur illum! 
          Expedita necessitatibus cum unde, praesentium, reprehenderit labore fugiat cupiditate voluptates similique eveniet commodi 
          dolorem iusto alias nisi et doloremque fugit sapiente provident! Labore nihil sed numquam magnam incidunt non similique 
          cupiditate a fugiat temporibus aliquid, doloribus officiis saepe modi voluptatibus omnis voluptas itaque. Perspiciatis 
          reprehenderit hic qui aspernatur ea!
          <br>
          <br>
          Repellendus molestias nostrum tempore eligendi sed tempora porro amet optio repudiandae 
          pariatur minima non molestiae minus recusandae laboriosam harum itaque aliquam est. Nostrum dolorum, earum illum iure perspiciatis 
          veniam vel. Suscipit minima, id dolorem laboriosam iste iure eligendi, dolor harum ullam quisquam voluptas aspernatur illum! 
          Expedita necessitatibus cum unde, praesentium, reprehenderit labore fugiat cupiditate voluptates similique eveniet commodi 
          dolorem iusto alias nisi et doloremque fugit sapiente provident! Labore nihil sed numquam magnam incidunt non similique 
          cupiditate a fugiat temporibus aliquid, doloribus officiis saepe modi voluptatibus omnis voluptas itaque. Perspiciatis 
          reprehenderit hic qui aspernatur ea!
        </p>
      </div>
      <div class="postitem__listview">
        <img @click="openModal" src="@/assets/Images/image3.jpeg" alt="PostImage" class="postitem__listview--img">
        <img @click="openModal" src="@/assets/Images/image4.jpeg" alt="PostImage" class="postitem__listview--img">
        <img @click="openModal" src="@/assets/Images/image5.jpeg" alt="PostImage" class="postitem__listview--img">
        <img @click="openModal" src="@/assets/Images/image6.jpeg" alt="PostImage" class="postitem__listview--img">
      </div>
      <div class="postitem__paragraph">
        <p class="postitem__paragraph--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Magnam laboriosam consectetur labore soluta porro illo commodi maiores. 
          Pariatur reiciendis consequatur eaque commodi? Atque, optio deleniti!
        </p>
      </div>
      <div class="postitem__metadata">
        <p class="postitem__metadata--title">By Debra the zebra</p>
        <p class="postitem__metadata--smtext">Aug 15, 2020</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../Eventbus/EventBus.js';

export default {
  name: "PostItem",
  methods: {
    openModal() {
      EventBus.$emit('clkModal', true);
      console.log('clicked');
    }
  }
};
</script>

<style lang="scss">
.postitem {
  z-index: 9999;
  background-color: $color-white;
  margin: 0 auto;
  width: 80rem;
  height: 100%;

  @include respond(tab-port) {
    width: 100%;
    padding: 0rem 0.8rem;
  }

  &__container {
    padding: 2rem 0.5rem;
  }

  &__paragraph {
    overflow: hidden;

    &--text {
      font-size: 1.4rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }

  &__listview {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    padding: 1.5rem 0rem;

    &--img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      flex: 1;
      margin-right: 0.8rem;
      margin-bottom: 0.5rem;
      border-radius: 0.4rem;
      cursor: pointer;
      filter: brightness(70%);
      transition: all 0.3s;

      &:hover {
        filter: brightness(100%);
      }
    }
  }

  &__metadata {
    padding: 2.5rem 0.5rem;
    text-align: center;

    &--title {
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 0.0995rem;
      color: $color-grey-600;
      margin-bottom: 0.8rem;
    }

    &--smtext {
      font-size: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.0995rem;
      color: $color-grey-600;
    }
  }
}

.capitalize:first-child {
  text-transform: capitalize;
  font-size: 2.3rem;
  font-weight: 600;
  margin-right: 0.3rem;
  color: $color-brown-300;
}
</style>