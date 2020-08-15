<template>
  <div class="categoryview">
      <Navbar />
      <Searchbox />
      <CategoryGrid />
      <Footerview />
  </div>
</template>

<script>
import Navbar from './Category/Navbar';
import Searchbox from './Category/Searchbox';
import CategoryGrid from './Category/CategoryGrid';
import Footerview from './Main/Footerview';

export default {
  name: "Category",
  components: {
    Navbar,
    Searchbox,
    CategoryGrid,
    Footerview,
  }
}
</script>

<style lang="scss">

</style>