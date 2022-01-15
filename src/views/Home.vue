<template>
  <div class="home">
    <div class="feature">
      <navbar />
    </div>

    <carousel :item="'getFeaturedBasicData'" />
    <carousel :item="'getArtBasicData'" />
    <carousel :item="'getSmallBasicData'" />
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, toRefs } from "vue";
import Carousel from "@/components/Carousel.vue";
import Navbar from "@/components/Navbar.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    Carousel,
    Navbar,
  },
  setup(props: any, context: any) {
    const store = useStore();
    store.dispatch("data/setData");
    return {};
  },
});
</script>

<style lang="scss" scoped>
.feature {
  float: right;
  width: 25%;
}
</style>
