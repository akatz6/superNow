<template>
  <br />
  <h3 class="title">{{ title }}</h3>
  <div class="navigate">
    <div
      v-if="0 < start"
      class="toggle-page left left-arrow"
      @click="leftShift"
    >
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="card-row">
      <div class="card-inner-row">
        <div v-for="(item, index) in basicData" :key="index">
          <transition class="slide">
            <div
              v-if="index >= start && index < end"
              class="card"
              @click="getMoreData(index)"
            >
              <div class="card-body">
                <div v-if="item.check">
                  <i class="fa fa-check item-booked" aria-hidden="true"></i>
                </div>
                <h5 class="card-title">
                  {{ item.title }}
                </h5>
                <img
                  :src="getImage(item.img)"
                  class="card-img-top"
                  :alt="item.img"
                />
                <p class="card-text">{{ item.tagLine }}</p>
              </div>
            </div>
          </transition>
        </div>
        <div
          v-if="basicData.length > end"
          class="toggle-page right right-arrow"
          @click="rightShift"
        >
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Carousel",
  components: {},
  props: ["item"],
  setup(props: any) {
    const store = useStore();
    let basicData = computed(() => store.getters[`data/${props.item}`]);
    let start = ref(0);
    let end = ref(Math.floor(screen.width / 300));
    let range = ref(
      Math.floor(end.value / 2) > 1 ? Math.floor(end.value / 2) : 1
    );
    if (end.value > basicData.value.length) {
      end.value = basicData.value.length;
      start.value == 0;
    }
    let title = ref("");
    switch (props.item) {
      case "getFeaturedBasicData":
        title.value = "Featured";
        break;
      case "getArtBasicData":
        title.value = "Arts and Crafts";
        break;
      case "getSmallBasicData":
        title.value = "Small Group Socials";
        break;
    }

    const rightShift = () => {
      start.value += range.value;
      end.value += range.value;
    };

    const leftShift = () => {
      end.value -= range.value;
      start.value -= range.value;
    };
    const getImage = (imagePath: any) => {
      switch (props.item) {
        case "getFeaturedBasicData":
          return require("@/assets/featured/" + imagePath);
        case "getArtBasicData":
          return require("@/assets/arts/" + imagePath);
        case "getSmallBasicData":
          return require("@/assets/groups/" + imagePath);
      }
    };

    const getMoreData = (id: number) => {
      const payload = {
        id,
        category: title.value,
      };
      store.dispatch("data/getMoreData", payload);
      store.dispatch("data/setCategory", title.value);
    };

    return {
      start,
      end,
      rightShift,
      leftShift,
      basicData,
      title,
      getImage,
      getMoreData,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  height: 270px;
  width: 200px;
  padding: 20px;
  margin: 20px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}

.title {
  display: flex;
  margin: 20px;
}

.navigate {
  display: flex;
}

.left-arrow {
  align-self: center;
  margin: 0 10px;
}
.right-arrow {
  align-self: center;
}

.item-booked {
  position: absolute;
  top: 0;
  right: 0;
}

.card-row {
  display: flex;
}

.card-inner-row {
  padding: 20px;
  display: contents;
}

.card-title {
  height: 30px;
}

.card-img-top {
  margin: 20px 5px;
  height: 100px;
}
</style>
