<template>
  <div class="homeview">
    <Navbar />
    <div class="wxcontainer">
      <Slideview />
      <PostGrid />
    </div>
    <Footerview />
  </div>
</template>

<script>
import Navbar from "./Navigation/Navbar";
import Slideview from "./Main/Slideview";
import PostGrid from './Main/PostGrid';
import Footerview from './Main/Footerview';

export default {
  name: "Homeview",
  components: {
    Navbar,
    Slideview,
    PostGrid,
    Footerview,
  }
};
</script>

<style lang="scss">
.wxcontainer {
  width: 100%;
  padding: 2rem 2.3rem;
  margin-top: 0rem;

  @include respond(tab-port) {
    padding: 2rem 0.5rem;
    margin-top: 0.5rem;
  }
}
</style>