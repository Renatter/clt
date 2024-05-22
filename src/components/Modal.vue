<template>
  <div class="modal">
    <div class="modal-content my-[20px]">
      <span class="close" @click="closeModal">&times;</span>
      <!-- Display card data in the modal -->
      <div v-if="cardData" class="m flex pt-[40px]">
        <img class="rounded-[10px] w-[350px]" :src="cardData.img" alt="" />
        <div class="ml-[20px]">
          <h1 class="sss text-[40px] pt-[20px] font-bold">
            {{ cardData.title }}
          </h1>
          <p class="text-[gray] text-[25px]">{{ cardData.tip }}</p>
          <p class="text-[20px] text-[#F93C00]">{{ cardData.price }} ТГ</p>
          <div class="flex gap-[10px] items-center flex-wrap">
            <p>Өлшемі</p>
            <p
              v-for="size in cardData.Size"
              :key="size"
              @click="selectSize(size)"
              class="p-[5px] ml-[5px] border-[1px] border-[black] cursor-pointer"
              :class="{
                'p-[5px] ml-[5px] border-[1px] border-[black] bg-[black] text-[white]':
                  size === selectedSize,
              }"
            >
              {{ size }}
            </p>
          </div>
          <button
            @click="addToCart"
            type="button"
            class="w-[100%] mt-[30px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Сатып алу
          </button>
        </div>
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
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";
export default {
  props: ["cardData"],
  data() {
    return {
      selectedSize: null,
      currentUser: null,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    buy() {
      const buy = {
        title: this.cardData.title,
        tip: this.cardData.tip,
        img: this.cardData.img,
        price: this.cardData.price,
        size: this.selectedSize,
      };
      console.log(buy);
      this.closeModal();
    },
    async addToCart() {
      if (this.currentUser) {
        const docRef = doc(db, "basket", `${this.currentUser}`);

        const itemCard = {
          title: this.cardData.title,
          tip: this.cardData.tip,
          img: this.cardData.img,
          price: this.cardData.price,
          size: this.selectedSize,
        };

        try {
          const docSnap = await getDoc(docRef);
          let updatedCart = [];

          if (docSnap.exists()) {
            const existingCart = docSnap.data().cart || [];
            const itemExists = existingCart.some(
              (item) => item.title === itemCard.title
            );

            if (itemExists) {
              // Item already exists, show a message or handle it as needed
              alert("Ондай өнім себетте бар");
              return;
            }

            updatedCart = [...existingCart, itemCard];
          } else {
            updatedCart = [itemCard];
          }

          const updatedCartData = {
            order: false,
            cart: updatedCart,
          };

          await setDoc(docRef, updatedCartData);

          console.log("Өнім қосылды", newCartItem);
        } catch (error) {
          console.error("Ошибка при добавлении товара в корзину:", error);
        }
      }
      alert("Өнім қосылды");
    },
  },
  created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user.uid;
        const userDocRef = doc(db, "users", this.currentUser);

        onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.userProfile = doc.data();
          } else {
            console.log("Документ не существует!");
          }
        });
      }
    });
  },
};
</script>

<style>
/* Modal styles */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  border-radius: 15px;
  background-color: white;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 800px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 48px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
@media (max-width: 740px) {
  .m {
    display: block;
  }
  .sss {
    font-size: 20px;
  }
  .m img {
    height: 137px;
    width: 150px;
    background-size: cover;
  }
}
</style>
