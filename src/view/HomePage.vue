<template>
  <div class="b h-[100vh] relative">
    <div class="x">
      <h1 class="text-[40px]">Көктемгі көңіл-күй</h1>
      <p class="text-center">-20% жаңа коллекцияға</p>
      <button
        type="button"
        class="text-[20px] py-[20px] px-[30px] mt-[20px] me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 rounded-[20px] w-[100%]"
      >
        Каталог
      </button>
    </div>
  </div>
  <div
    class="container pt-[130px] pb-[30px] flex justify-between flex-wrap gap-[20px]"
  >
    <div class="relative max-w-[550px] h-[700px] border-[1px]">
      <img
        class="w-[100%] h-[100%] object-cover"
        src="../assets/i2.webp"
        alt=""
      />
      <div
        class="gl absolute bottom-[20px] mx-[0px] left-[70px] flex justify-between p-[20px] w-[70%]"
      >
        <h1>
          Послендний <br />
          шанс купить
        </h1>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Каталог
        </button>
      </div>
    </div>
    <div class="relative max-w-[550px] h-[700px] border-[1px]">
      <img
        class="w-[100%] h-[100%] object-cover"
        src="../assets/i2.webp"
        alt=""
      />
      <div
        class="gl absolute bottom-[20px] mx-[0px] left-[70px] flex justify-between p-[20px] w-[70%]"
      >
        <h1>
          Послендний <br />
          шанс купить
        </h1>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Каталог
        </button>
      </div>
    </div>
  </div>
  <div v-if="isSwiperVisible" class="pb-[30px]">
    <h1 class="text-center text-[30px] font-bold py-[30px]">
      Выбор покупателей
    </h1>
    <swiper
      :loop="true"
      :slides-per-view="5"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="i in items">
        <Card class="w-[300px]" :cardData="i" @card-clicked="openModal"></Card>
      </swiper-slide>
    </swiper>
  </div>
  <div v-else class="flex flex-wrap gap-[20px] justify-evenly cursor-pointer">
    <Card
      class="w-[170px]"
      :cardData="i"
      @card-clicked="openModal"
      v-for="i in items"
    ></Card>
  </div>
  <div
    class="container pt-[130px] pb-[30px] flex justify-between flex-wrap gap-[20px]"
  >
    <div class="relative max-w-[550px] h-[700px] border-[1px]">
      <img
        class="w-[100%] h-[100%] object-cover"
        src="../assets/item/SARAFAN.webp"
        alt=""
      />
      <div
        class="gl absolute bottom-[20px] mx-[0px] left-[70px] flex justify-between p-[20px] w-[70%]"
      >
        <h1 class="font-bold">
          Платья <br />
          и сарафаны
        </h1>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Каталог
        </button>
      </div>
    </div>
    <div class="relative max-w-[550px] h-[700px] border-[1px]">
      <img
        class="w-[100%] h-[100%] object-cover"
        src="../assets/item/c.webp"
        alt=""
      />
      <div
        class="gl absolute bottom-[20px] mx-[0px] left-[70px] flex items-center justify-between p-[20px] w-[70%]"
      >
        <h1 class="font-bold">Косютм</h1>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Каталог
        </button>
      </div>
    </div>
  </div>

  <div class="bg-[#F1EDE8] h-[190px]">
    <div class="container flex justify-between pt-[50px] flex-wrap">
      <div class="text">
        <h1 class="font-bold text-[30px]">Скидка за 10%</h1>
        <p class="text-[#636363] pt-[15px]">
          Узнайте первыми о новинках и скидках
        </p>
      </div>
      <div class="f">
        <i class="fa fa-instagram" style="font-size: 48px; color: #c5aa9a"></i>
        <i
          class="fa fa-telegram ml-[30px]"
          style="font-size: 48px; color: #c5aa9a"
        ></i>
      </div>
    </div>
  </div>
  <div>
    <Modal
      v-if="modalVisible"
      :cardData="selectedCardData"
      @close-modal="closeModal"
    >
      <h1>Modal Content</h1>
      <p>This is some content inside the modal.</p>
    </Modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { db } from "../firebase/firebase.js";
import "swiper/css";
import Modal from "../components/Modal.vue";
import Card from "../components/Card.vue";
import { collection, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      isSwiperVisible: true,
      modalVisible: false,
      selectedCardData: null,
      items: [],
    };
  },
  components: {
    Card,
    Swiper,
    SwiperSlide,
    Modal,
  },
  methods: {
    openModal(cardData) {
      this.selectedCardData = cardData;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    checkScreenSize() {
      this.isSwiperVisible = window.innerWidth >= 570;
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
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
.gl {
  background: rgba(255, 255, 255, 0.38);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.31);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.b {
  width: 100%;
  height: 100vh;
  display: flex; /* Добавлено для использования Flexbox */
  justify-content: center; /* Горизонтальное выравнивание по центру */
  align-items: center; /* Вертикальное выравнивание по центру */
  background-image: url("../assets/mat.png");
  background-size: cover; /* Масштабирование изображения до полного покрытия контейнера */
  background-position: center; /* Центрирование изображения */
  background-repeat: no-repeat; /* Избегание повторения изображения */
}

.x {
  background: rgba(255, 255, 255, 0.17);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 60px; /* Добавлено для отступов внутри элемента */
}
@media (max-width: 570px) {
  .x {
    margin: 0 12px 0 12px;
  }
  .b {
    background-image: url("../assets/scale_1200.png");
  }
  .x h1 {
    font-size: 20px;
  }
  .gl {
    width: 89%;
    left: 19px;
    padding: 10px;
  }
  .text {
    text-align: center;
  }
  .f {
    margin-left: 120px;
  }
}
</style>
