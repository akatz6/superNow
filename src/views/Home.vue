<template>
  <div class="home">
    home
    <carousel :item="'getFeaturedBasicData'" />
    <carousel :item="'getArtBasicData'" />
    <carousel :item="'getSmallBasicData'" />
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, toRefs } from "vue";
import Carousel from "@/components/Carousel.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    Carousel,
  },
  setup(props: any, context: any) {
    const store = useStore();
    store.dispatch("data/setData");
    return {};
  },
});
</script>
