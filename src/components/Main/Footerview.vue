<template>
  <footer class="footerview">
      <!-- <div class="footerview__widgets">
          <p class="footerview__widgets--link">About</p>
          <p class="footerview__widgets--link">Support</p>
      </div> -->
      <div class="footerview__logoset">
          <a title="Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/jaykob_w" class="footerview__logoset--link">
             <img src="@/assets/Images/twitter.png" alt="Twitter" class="footerview__logoset--img">
          </a>
           <a title="Instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/jaykob_w" class="footerview__logoset--link">
             <img src="@/assets/Images/instagram.png" alt="Twitter" class="footerview__logoset--img">
          </a>
           <a title="Facebook" target="_blank" rel="noopener noreferrer" href="https://facebook.com/" class="footerview__logoset--link">
             <img src="@/assets/Images/facebook.png" alt="Twitter" class="footerview__logoset--img">
          </a>
           <a title="Mail" target="_blank" rel="noopener noreferrer" href="https://mail.google.com/" class="footerview__logoset--link">
             <img src="@/assets/Images/gmail.png" alt="Twitter" class="footerview__logoset--img">
          </a>
      </div>
      <div class="footerview__titlebox">
          <p class="footerview__titlebox--text">&copy; jaykob_w {{ getYear }}</p>
      </div>
      <!-- <div class="footerview__item">
          <a href="#" class="footerview__item--link">Scroll up</a>
      </div> -->
  </footer>
</template>

<script>
export default {
    name: "Footerview",
    computed: {
        getYear() {
            let dt = new Date();
            return dt.getFullYear();
        }
    }
}
</script>

<style lang="scss">
.footerview {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    background-color: #002047;

    &__widgets {
        display: flex;
        flex-direction: row;
        align-items: center;

        &--link {
            font-size: 1.3rem;
            font-weight: 500;
            text-transform: uppercase;
            margin: 0rem 0.8rem;
            color: $color-grey-300;
            cursor: pointer;
            
            &:hover {
                color: $color-blue-500;
                text-decoration: underline;
            }
        }
    }

    &__titlebox {
        text-align: center;

        &--text {
            font-size: 1.3rem;
            font-weight: 600;
            color: $color-grey-300;
        }
    }


    &__logoset {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0rem;

        &--link {
            text-decoration: none;
            display: block;
        }

        &--img {
            width: 2.5rem;
            object-fit: cover;
            margin: 0rem 1.5rem;
        }
    }
}
</style>