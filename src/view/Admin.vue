<template>
  <div class="container px-[20px]">
    <div class="flex gap-[10px] mb-[30px]">
      <router-link to="/addItem">
        <img src="../assets/addIcon.png" width="50px" alt="" />
      </router-link>
      <router-link to="/order">
        <img src="../assets/order.png" width="50px" alt="" />
      </router-link>
      <router-link to="/AddNews">
        <img src="../assets/news.png" width="50px" alt="" />
      </router-link>
      <router-link to="/chatAdmin">
        <img src="../assets/chat.png" width="50px" alt="" />
      </router-link>
    </div>
    <div class="flex flex-wrap gap-[20px] justify-between">
      <div v-for="i in items">
        <Card class="w-[200px] h-" :cardData="i"></Card>
        <button
          @click="deleteItem(i.title)"
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[100%] mt-[10px]"
        >
          Жоюу
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  onSnapshot,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async deleteItem(i) {
      const querySnapshot = await getDocs(
        query(collection(db, "items"), where("title", "==", i))
      );

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        window.location.reload();
      });
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      this.items.push(doc.data());
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
