<template>
  <div class="container px-[10px]">
    <h1 class="text-[purple] text-[20px] font-bold">Товар қосу</h1>
    <div>
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Аты
      </label>
      <input
        type="text"
        v-model="carts.title"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Аты"
        required
      />
    </div>
    <p class="w-[100px] mb-[10px]">Сурет</p>
    <div class="flex">
      <input @change="onFileChange" id="dropzone-file" type="file" />
      <button v-if="file" class="btn ml-[25px] w-[100%]" @click="uploadImage()">
        <span
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Сурет косу</span
        >
      </button>
    </div>
    <div class="button-group mt-[15px]">
      <button
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="showCategory('clothes')"
      >
        Киiмдер
      </button>
      <button
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="showCategory('shoes')"
      >
        Аяқ-киім
      </button>
      <button
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="showCategory('accs')"
      >
        Аксессуарлар
      </button>
    </div>

    <div v-if="category === 'clothes'" class="button-group">
      <button
        v-for="item in clothes"
        :key="item"
        class="mr-[15px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        @click="selectItem(item)"
      >
        {{ item }}
      </button>
    </div>

    <div v-if="category === 'shoes'" class="button-group">
      <button
        v-for="item in shoes"
        :key="item"
        class="mr-[15px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        @click="selectItem(item)"
      >
        {{ item }}
      </button>
    </div>

    <div v-if="category === 'accs'" class="button-group">
      <button
        v-for="item in accs"
        :key="item"
        class="mr-[15px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        @click="selectItem(item)"
      >
        {{ item }}
      </button>
    </div>
    <div v-if="carts.tip" class="mt-[15px]">
      <p class="text-[purple] text-[18px] font-bold">{{ carts.tip }}</p>
    </div>
    <div>
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Багасы
      </label>
      <input
        v-model="carts.price"
        type="number"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Багасы"
        required
      />
    </div>
    <button
      @click="save"
      type="button"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-[30px]"
    >
      Косу
    </button>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  data() {
    return {
      category: "",
      selectedItem: null,
      clothes: [
        "Футболка",
        "Шалбар",
        "Юбка",
        "Костюм",
        "Худи",
        "Джемпер",
        "Куртка",
      ],
      imageUrls: [],
      shoes: ["Балетки", "Ботинки", "Сапоги", "Туфли", "Кроссовки"],
      accs: ["шашқа арналған аксессуарлар", "сумка", "Очки", "Ремни", "Шарф"],
      file: null,
      carts: {
        title: "",
        img: "",
        price: 0,
        Size: null,
        tip: "",
      },
    };
  },
  methods: {
    showCategory(category) {
      this.category = category;
      this.selectedItem = null;
      if (this.category === "clothes") {
        this.carts.Size = ["40", "48", "50", "45", "37"];
      }
      if (this.category === "shoes") {
        this.carts.Size = ["40", "48", "50", "45", "37"];
      }
      if (this.category === "accs") {
        this.carts.Size = "1шт";
      }
    },
    async uploadImage() {
      const storageRef = ref(
        storage,
        `images/${this.carts.title}/${this.file.name}`
      );
      await uploadBytes(storageRef, this.file);
      const downloadUrl = await getDownloadURL(storageRef);

      this.imageUrls.push(downloadUrl);
      this.carts.img = this.imageUrls[0];
      this.file = null;
    },
    onFileChange(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },

    selectItem(item) {
      this.carts.tip = item;
    },
    async save() {
      const docRef = await addDoc(collection(db, "items"), this.carts);
      alert("Оним косылды");
      this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
