<template>
  <div class="container">
    <div class="bg-white mt-[30px] p-[30px] rounded-[20px]">
      <h1 class="text-[#1F2937] font-bold text-[30px] mb-[25px]">
        {{ item.title }}
      </h1>
      <img :src="item.img" alt="" class="rounded-[20px]" height="500px" />
      <p class="text-[22px] mt-[20px] text-[#9b9999]">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  getDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      id: this.$route.params.id,
      item: {},
    };
  },
  async created() {
    const q = query(collection(db, "news"), where("title", "==", this.id));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.item = doc.data();
        console.log(this.item);
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
@media (max-width: 570px) {
  h1 {
   font-size: 15px;
  }
  p{
    font-size: 15px;
  }
}</style>
