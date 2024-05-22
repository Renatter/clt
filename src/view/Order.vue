<template>
  <div class="container">
    <h1 class="text-[20px] font-bold text-[orange]">Тапсырыстар</h1>
    <div
      v-for="i in item"
      :key="i.id"
      @click="openModal(i)"
      class="border-[1px] w-[200px] bg-[orange] text-[white] p-[20px] rounded-[15px] cursor-pointer"
    >
      <h1>{{ i.name }}</h1>
      <p>{{ i.city }}</p>
      <p>{{ i.phone }}</p>
      <p>{{ i.price }} тг</p>
    </div>
  </div>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>
        Аты: <span class="text-[red]">{{ selectedItem.name }}</span>
      </h2>
      <p>
        Қала: <span class="text-[red]">{{ selectedItem.city }}</span>
      </p>
      <div class="flex">
        <p>
          Адрес:
          <span class="text-[red] mr-[10px]">{{ selectedItem.addres }}</span>
        </p>
        <p>
          Подъезд:
          <span class="text-[red] mr-[10px]">{{ selectedItem.podezd }}</span>
        </p>
        <p>
          Кв: <span class="text-[red] mr-[10px]">{{ selectedItem.kv }}</span>
        </p>
      </div>
      <p>
        Номер: <span class="text-[red]">{{ selectedItem.phone }}</span>
      </p>
      <div class="flex" v-for="i in selectedItem.cart">
        <img :src="i.img" class="w-[130px]" alt="" />
        <div class="ml-[20px]">
          <div class="text-[30px]">{{ i.title }}</div>
          <div class="text-[20px] text-[#7d7d7d]">{{ i.tip }}</div>
          <div class="text-[20px]">
            Размер: <span class="text-[red]">{{ i.size }}</span>
          </div>
          <div class="text-[20px]">
            Бағасы: <span class="text-[red]"> {{ i.price }} тг</span>
          </div>
        </div>
      </div>
      <div class="pt-[15px]">
        <button
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full"
          @click="showModal = false"
        >
          Жабу
        </button>
        <button
          @click="deleteItem(selectedItem.name)"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
        >
          Жiберу
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
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
import { storage, db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      item: [],
      showModal: false,
      selectedItem: {},
    };
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
      this.showModal = true;
    },
    async deleteItem(itemName) {
      const querySnapshot = await getDocs(
        query(collection(db, "basket"), where("name", "==", itemName))
      );

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      location.reload();
    },
  },
  created() {
    const pizzaQuery = query(
      collection(db, "basket"),
      where("order", "==", true)
    );
    onSnapshot(pizzaQuery, (querySnapshot) => {
      this.item = [];
      querySnapshot.forEach((doc) => {
        this.item.push(doc.data());
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемненный фон */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
