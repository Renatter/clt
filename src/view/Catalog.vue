<template>
  <div class="c flex">
    <div class="border-[1px] border-[blue] rounded-[10px] w-[300px] p-[15px]">
      <h1 class="text-[20px] font-bold">Киiмдер</h1>
      <div class="flex items-center mb-4" v-for="i in clothes" :key="i">
        <input
          :id="i"
          type="checkbox"
          :value="i"
          @change="filterByClothes(i)"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          :for="i"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ i }} ({{ getCount(i, "clothes") }})</label
        >
      </div>
      <h1 class="text-[20px] font-bold">Аяқ-киім</h1>
      <div class="flex items-center mb-4" v-for="i in shoes" :key="i">
        <input
          :id="i"
          type="checkbox"
          :value="i"
          @change="filterByClothes(i)"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          :for="i"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ i }} ({{ getCount(i, "shoes") }})</label
        >
      </div>
      <h1 class="text-[20px] font-bold">Аксессуарлар</h1>
      <div class="flex items-center mb-4" v-for="i in accs" :key="i">
        <input
          :id="i"
          type="checkbox"
          :value="i"
          @change="filterByClothes(i)"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          :for="i"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ i }} ({{ getCount(i, "accs") }})</label
        >
      </div>
    </div>
    <div class="w-[100%] ml-[30px] cl">
      <div class="flex flex-wrap gap-[10px] justify-between p-[20px]">
        <Card
          class="w-[200px]"
          v-for="i in filteredItems"
          :cardData="i"
          @card-clicked="openModal"
        ></Card>
      </div>
    </div>
  </div>
  <div v-if="ineer()">
    <button
      @click="oModal"
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      Фильтр
    </button>
    <div class="flex flex-wrap gap-[10px] justify-between px-[20px]">
      <Card
        class="w-[150px]"
        v-for="i in filteredItems"
        :cardData="i"
        @card-clicked="openModal"
      ></Card>
    </div>
    <div v-if="isModalVisible" class="modal" @click="cModal">
      <div class="modal-content" @click.stop>
        <h1 class="text-[20px] font-bold">Киiмдер</h1>
        <div class="flex items-center mb-4" v-for="i in clothes" :key="i">
          <input
            :id="'modal-' + i"
            type="checkbox"
            :value="i"
            @change="filterByClothes(i)"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            :for="'modal-' + i"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ i }} ({{ getCount(i, "clothes") }})</label
          >
        </div>
        <h1 class="text-[20px] font-bold">Аяқ-киім</h1>
        <div class="flex items-center mb-4" v-for="i in shoes" :key="i">
          <input
            :id="'modal-' + i"
            type="checkbox"
            :value="i"
            @change="filterByClothes(i)"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            :for="'modal-' + i"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ i }} ({{ getCount(i, "shoes") }})</label
          >
        </div>
        <h1 class="text-[20px] font-bold">Аксессуарлар</h1>
        <div class="flex items-center mb-4" v-for="i in accs" :key="i">
          <input
            :id="'modal-' + i"
            type="checkbox"
            :value="i"
            @change="filterByClothes(i)"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            :for="'modal-' + i"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ i }} ({{ getCount(i, "accs") }})</label
          >
        </div>

        <button @click="cModal" class="close-button">Жабу</button>
      </div>
    </div>
  </div>
  <Modal
    v-if="modalVisible"
    :cardData="selectedCardData"
    @close-modal="closeModal"
  >
    <h1>Modal Content</h1>
    <p>This is some content inside the modal.</p>
  </Modal>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Modal from "../components/Modal.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      clothes: [
        "Футболка",
        "Шалбар",
        "Юбка",
        "Костюм",
        "Худи",
        "Джемпер",
        "Куртка",
      ],
      shoes: ["Балетки", "Ботинки", "Сапоги", "Туфли", "Кроссовки"],
      accs: ["шашқа арналған аксессуарлар", "сумка", "Очки", "Ремни", "Шарф"],
      isModalVisible: false,
      items: [],
      filteredItems: [],
      modalVisible: false,
    };
  },
  methods: {
    openModal(cardData) {
      this.selectedCardData = cardData;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    ineer() {
      return window.innerWidth < 570 ? true : false;
    },
    oModal() {
      if (window.innerWidth < 570) {
        this.isModalVisible = true;
      }
    },
    cModal() {
      this.isModalVisible = false;
    },
    filterByClothes(category) {
      this.filteredItems = this.items.filter((item) =>
        item.tip.includes(category)
      );
    },
    getCount(category, type) {
      return this.items.filter((item) => {
        if (type === "clothes")
          return item.tip.includes(category) && this.clothes.includes(category);
        if (type === "shoes")
          return item.tip.includes(category) && this.shoes.includes(category);
        if (type === "accs")
          return item.tip.includes(category) && this.accs.includes(category);
      }).length;
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      this.items.push(doc.data());
    });
    this.filteredItems = this.items;
  },
};
</script>

<style lang="scss" scoped>
.c {
  max-width: 1200px;
  margin: 0 auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
.close-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
@media (max-width: 570px) {
  .c {
    display: none;
  }
}
</style>
