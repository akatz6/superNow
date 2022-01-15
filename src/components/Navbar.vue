<template>
  <div v-if="expandedData">
    <div class="slidein" :class="open ? 'open' : ''">
      <img
        :src="getImage()"
        alt="more info image"
        style="height:300px;width=300px"
      />
      <br />
      <br />
      <h3>{{ expandedData.title }}</h3>
      <br />
      <br />
      <p>
        {{ expandedData.extendedDescription }}
      </p>
      <button class="close-btn" @click="toggle">X</button>
      <button
        v-if="!expandedData.check"
        type="button"
        class="btn btn-primary"
        @click="changeBook"
      >
        Book
      </button>
      <button v-else type="button" class="btn btn-primary" @click="changeBook">
        Cancel
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent, toRefs } from "vue";
import Carousel from "@/components/Carousel.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Navbar",
  setup(props: any, context: any) {
    const store = useStore();
    const open = ref(false);
    const expandedData = computed(() => store.getters["data/currentDataInfo"]);
    const category = computed(() => store.getters["data/getCategory"]);
    const toggle = () => {
      open.value = !open.value;
    };

    store.watch(
      () => store.getters["data/currentDataInfo"],
      () => {
        if (open.value) {
          open.value = false;
        }
        setTimeout(() => {
          open.value = true;
        }, 500);
      }
    );

    const getImage = () => {
      console.log(category.value);
      switch (category.value) {
        case "Featured":
          return require("@/assets/featured/" + expandedData.value.img);
        case "Arts and Crafts":
          return require("@/assets/arts/" + expandedData.value.img);
        case "Small Group Socials":
          return require("@/assets/groups/" + expandedData.value.img);
      }
    };

    const changeBook = () => {
      const payload = {
        id: expandedData.value.id,
        category: category.value,
      };
      store.dispatch("data/setBooking", payload);
    };

    return {
      open,
      toggle,
      expandedData,
      getImage,
      changeBook,
    };
  },
});
</script>

<style>
/* Make slide in box hidden off screen with fixed positioning 100% to the right */
.slidein {
  max-width: 600px;
  padding: 2em 3em;
  position: fixed;
  z-index: 100;
  top: 0;
  right: -100%;
  background: #ddd;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

/* Set positioning back to 0 when toggled opened */
.open {
  right: 0;
}

/* add a close button in case toggle button is hidden on smaller screens */
.close-btn {
  border: none;
  font-weight: bold;
  font-size: 2em;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5em;
}
</style>
