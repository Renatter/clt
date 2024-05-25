<template>
  <div v-if="order === false" class="container">
    <h1 class="text-[30px]">Себет {{}}</h1>
    <div
      v-if="isSwiperVisible"
      v-for="i in items"
      class="pb-[15px] flex border-t-[1px] justify-between py-[9px] border-b-[2px] items-start mx-[20px]"
    >
      <img class="w-[150px] rounded-[10px]" :src="i.img" alt="" />
      <div class="ml-[30px]">
        <h1 class="text-[30px]">{{ i.title }}</h1>
        <p class="text-[20px]">
          Тип: <span class="text-[#4f4f4f]">{{ i.tip }}</span>
        </p>
        <p class="text-[20px]">
          Тип: <span class="text-[#4f4f4f]">{{ i.size }}</span>
        </p>
      </div>
      <div>
        <p class="text-[30px]">
          Бағасы: <span class="text-[red]">{{ i.price }} тг</span>
        </p>
        <button
          @click="deleteItem(i)"
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[100%] mt-[80px]"
        >
          Жою
        </button>
      </div>
    </div>
    <div v-else>
      <div
        v-for="i in items"
        class="pb-[15px] flex border-t-[1px] py-[9px] border-b-[2px] items-start mx-[20px]"
      >
        <img class="w-[100px] rounded-[10px]" :src="i.img" alt="" />
        <div class="ml-[30px]">
          <h1 class="text-[20px]">{{ i.title }}</h1>
          <p class="text-[20px]">
            Тип: <span class="text-[#4f4f4f]">{{ i.tip }}</span>
          </p>
          <p class="text-[20px]">
            Тип: <span class="text-[#4f4f4f]">{{ i.size }}</span>
          </p>
          <p class="">
            Бағасы: <span class="text-[red]">{{ i.price }} тг</span>
          </p>
          <button
            @click="deleteItem(i)"
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[200px]"
          >
            Жою
          </button>
        </div>
      </div>
    </div>
    <div
      class="total-price-container flex justify-between pt-[20px] text-center"
    >
      <h2 class="text-[20px] font-bold">
        Жалпы баға: <span class="text-[red]">{{ totalPrice }} тг</span>
      </h2>
      <button
        @click="showModal = true"
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Сатып алу
      </button>
    </div>
  </div>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <div class="flex gap-[10px]">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Аты</label
          >
          <input
            v-model="name"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Аты"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Фамилия</label
          >
          <input
            v-model="lname"
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Фамилия"
            required
          />
        </div>
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-[5px]"
          >Кала</label
        >
        <input
          v-model="city"
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Кала"
          required
        />
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-[5px]"
          >Телефон</label
        >
        <input
          v-model="phone"
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Телефон"
          required
        />
      </div>
      <div class="flex gap-[10px] pt-[10px]">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Адресс</label
          >
          <input
            v-model="address"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Адресс"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Подъезд</label
          >
          <input
            v-model="podezd"
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Подъезд"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Кв</label
          >
          <input
            v-model="kv"
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Кв"
            required
          />
        </div>
      </div>

      <div class="flex pt-[15px]">
        <button
          @click="showModal = false"
          type="button"
          class="w-[100%] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Болдырмау
        </button>
        <button
          @click="send"
          type="button"
          class="w-[100%] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Тапсырыс беру
        </button>
      </div>
    </div>
  </div>
  <div v-if="order" class="container pt-[300px]">
    <div class="">
      <div class="t relative">
        <h1 class="text-[30px] font-bold text-center">
          Тапсырыс қабылданды тауарды күтіңіз
        </h1>
        <button
          @click="cancelOrder"
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 absolute right-[45%]"
        >
          Бас тарту
        </button>
      </div>
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
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      items: [],
      order: false,
      isSwiperVisible: true,
      showModal: false,
      currentUser: null,
      name: "",
      lname: "",
      city: "",
      phone: "",
      address: "",
      podezd: "",
      kv: "",
    };
  },
  methods: {
    async send() {
      if (this.currentUser) {
        const docRef = doc(db, "basket", this.currentUser.uid);
        await updateDoc(docRef, {
          name: this.name,
          lname: this.lname,
          addres: this.address,
          phone: this.phone,
          city: this.city,
          podezd: this.podezd,
          price: this.totalPrice,
          kv: this.kv,
          order: true,
        });
        this.closeModal();
      }
    },
    checkScreenSize() {
      this.isSwiperVisible = window.innerWidth >= 570;
    },
    openModal() {
      this.showModal = true; // Показываем модальное окно при клике на кнопку
    },
    closeModal() {
      this.showModal = false; // Закрываем модальное окно
    },
    async cancelOrder() {
      if (this.currentUser) {
        const docRef = doc(db, "basket", `${this.currentUser.uid}`);
        await updateDoc(docRef, {
          order: false,
        });
      }
    },
    async deleteItem(item) {
      try {
        const cartDocRef = doc(db, "basket", this.currentUser.uid);

        // Get the current cart data
        const cartDoc = await getDoc(cartDocRef);
        const currentCart = cartDoc.exists() ? cartDoc.data().cart : [];

        // Find the index of the item to be deleted in the current cart
        const index = currentCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (index !== -1) {
          // Remove the item from the current cart array
          currentCart.splice(index, 1);

          // Update the cart document with the modified cart array
          await updateDoc(cartDocRef, { cart: currentCart });
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },
  },
  computed: {
    totalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
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
    try {
      // Проверка аутентификации пользователя
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          this.currentUser = user;
          const docRef = doc(db, "basket", this.currentUser.uid);

          const unsubscribe = onSnapshot(docRef, (docSnap) => {
            try {
              if (docSnap.exists()) {
                this.items = docSnap.data().cart;
                this.order = docSnap.data().order;
              } else {
                console.log("No such document!");
              }
            } catch (error) {
              console.error("Error processing document snapshot:", error);
            }
          });

          this.unsubscribe = unsubscribe;
        }
      });
    } catch (error) {
      console.error("Error in created function:", error);
    }
    console.log(this.items);
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.abs {
  position: absolute;
  right: 50%;
  bottom: 50%;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
@media (max-width: 570px) {
  .t button {
    right: 35%;
  }
}
</style>
