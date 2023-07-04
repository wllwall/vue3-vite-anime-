<template>
  <main>
    <!-- <TheWelcome /> -->
    home
    <div class="play-list">
      <div @click="gotoDetail(item)" class="card" v-for="(item, index) in videoList" :key="index">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </main>
</template>
<script  lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";

export default defineComponent({
  setup() {
    const disabled = ref<boolean>(true);
    const checked1 = ref<boolean>(false);
    const checked2 = ref<boolean>(false);
    type DataItem ={
      title: string;
      code: number;
    }
    const videoList: DataItem[] = [
      {
        code: 0,
        title: "Ant Design Title 1",
      },
      { code: 1, title: "Ant Design Title 2" },
      { code: 2, title: "Ant Design Title 3" },
      { code: 3, title: "Ant Design Title 4" },
    ];
    // const videoList = ref<Array>([{ code: "1", link: "", imgurl: "" },{ code: "1", link: "", imgurl: "" }]);
    const toggleDisabled = () => {
      disabled.value = !disabled.value;
    };
    const router = useRouter();
    const gotoDetail = (item: any) => {
      let query = {};
      router.push("/detail");
      // this.$router.push({ path: "/detail", query: query });
    };
    //反应数据
    const state = reactive({
      username: "",
      password: "",
    });
    return {
      disabled,
      checked1,
      checked2,
      toggleDisabled,
      videoList,
      gotoDetail,
      state,
    };
  },
});
</script>

<style lang="less" scoped>
.play-list {
  .card {
    width: 160px;
    height: 100px;
    border: red 1px solid;
    margin-bottom: 16px;
    cursor: pointer;
  }
}
</style>
