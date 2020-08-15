<template>
  <div class="postview">
    <Navbar />
    <PostItem />
    <Footerview />
    <Imageview />
  </div>
</template>

<script>
import Navbar from './Post/Navbar';
import PostItem from './Post/PostItem';
import Footerview from './Main/Footerview';
import Imageview from './Post/ImageModal';

export default {
    name: 'Postview',
    components: {
      Navbar,
      PostItem,
      Footerview,
      Imageview,
    }
}
</script>

<style lang="scss">

</style>