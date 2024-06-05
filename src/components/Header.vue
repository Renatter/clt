<template>
  <div class="container">
    <div class="flex justify-between pt-[30px] items-center">
      <div class="burger-icon" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <router-link to="/">
        <h1 class="font-bold text-[30px]">ROSI</h1>
      </router-link>
      <div class="flex">
        <div v-if="role == null" class="flex">
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            @click="showLoginModal"
          >
            Кiру
          </button>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            @click="showRegisterModal"
          >
            Тiркелу
          </button>
        </div>
        <div class="flex justify-between">
          <div v-if="role == 'user'" class="flex">
            <router-link to="/basket">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[30px] ml-[15px]"
                viewBox="0 0 448 512"
              >
                <path
                  d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                />
              </svg>
            </router-link>
            <button
              @click="logout"
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-[10px]"
            >
              Шығу
            </button>
          </div>
          <div v-if="role === 'admin'">
            <router-link to="/admin">
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-[10px]"
              >
                Админ
              </button>
            </router-link>
            <button
              @click="logout"
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-[10px]"
            >
              Шығу
            </button>
          </div>
        </div>
        <div v-if="isChek">
          <a href="https://www.instagram.com/zhaanso">
            <i class="fa fa-instagram ml-[15px]" style="font-size: 36px"></i>
          </a>

          <a href="https://api.whatsapp.com/send?phone=87077302603">
            <i class="fa fa-whatsapp ml-[15px]" style="font-size: 36px"></i>
          </a>
        </div>
      </div>
    </div>
    <hr class="my-[20px] w-[100%]" />
    <div
      class="container flex justify-between pt-[20px] items-container"
      :class="{ show: isMenuOpen }"
    >
      <p
        v-for="i in items"
        :key="i.title"
        class="text-[20px] font-500 hover:text-[orange] cursor-pointer pb-[30px]"
      >
        <router-link :to="i.router">
          {{ i.title }}
        </router-link>
      </p>
      <div v-if="!isChek" class="flex w-[100px]">
        <a href="https://www.instagram.com/zhaanso">
          <i class="fa fa-instagram ml-[15px]" style="font-size: 36px"></i>
        </a>

        <a href="https://api.whatsapp.com/send?phone=87077302603">
          <i class="fa fa-whatsapp ml-[15px]" style="font-size: 36px"></i>
        </a>
      </div>
    </div>

    <div
      v-if="isLoginModalVisible"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white p-8 rounded shadow-md w-[500px] mx-[10px]">
        <h2 class="text-2xl mb-4">ROSI қош келдіңіз</h2>
        <form @submit.prevent="login">
          <div>
            <label
              for="login_email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Электронды почта</label
            >
            <input
              type="text"
              id="login_email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="loginEmail"
              placeholder="Электронды почтаңызды еңгізіңіз"
            />
          </div>
          <div class="mb-6">
            <label
              for="login_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Құпия сөз</label
            >
            <input
              v-model="loginPassword"
              type="password"
              id="login_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Құпия сөзді еңгізіңіз"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              @click="isLoginModalVisible = false"
              class="text-gray-500 hover:text-gray-700 mr-4"
            >
              Бас тарту
            </button>
            <button
              type="submit"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Кiру
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Register Modal -->
    <div
      v-if="isRegisterModalVisible"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white p-8 rounded shadow-md w-[500px] mx-[10px]">
        <h2 class="text-2xl mb-4">ROSI тiркелу</h2>
        <form @submit.prevent="handleSignUp">
          <div>
            <label
              for="register_email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Электронды почта
            </label>
            <input
              type="text"
              id="register_email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="registerEmail"
              placeholder="Электронды почтаңызды еңгізіңіз"
            />
          </div>
          <div class="mb-6">
            <label
              for="register_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Құпия сөз</label
            >
            <input
              v-model="registerPassword"
              type="password"
              id="register_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Құпия сөзді еңгізіңіз"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              @click="isRegisterModalVisible = false"
              class="text-gray-500 hover:text-gray-700 mr-4"
            >
              Бас тарту
            </button>
            <button
              type="submit"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Тiркелу
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
export default {
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      isChek: true,
      items: [
        { title: "Басты бет", router: "/" },
        { title: "Каталог", router: "catalogs" },
        { title: "Біз туралы", router: "about" },
        { title: "Жаналыктар", router: "news" },
        { title: "Контактілер", router: "contacts" },
      ],
      isMenuOpen: false,
      isLoginModalVisible: false,
      isRegisterModalVisible: false,
      isAuthenticated: false,
      role: null,
    };
  },

  methods: {
    checkScreenSize() {
      this.isChek = window.innerWidth >= 570;
    },
    async handleSignUp() {
      try {
        await createUserWithEmailAndPassword(
          auth,
          this.registerEmail + "@gmail.com",
          this.registerPassword
        );
        const currentUser = auth.currentUser;
        await setDoc(doc(db, "users", currentUser.uid), {
          email: this.registerEmail,
          password: this.registerPassword,
          role: "user",
        });
        this.isRegisterModalVisible = false;
        this.$router.push("/");
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
    async login() {
      try {
        await signInWithEmailAndPassword(
          auth,
          this.loginEmail + "@gmail.com",
          this.loginPassword
        );
        this.isLoginModalVisible = false;
      } catch (error) {
        console.log("Ошибка при входе пользователя:", error);
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    showRegisterModal() {
      this.isRegisterModalVisible = true;
    },
    logout() {
      auth.signOut();
      location.reload();
    },
    register() {
      // Handle registration logic here
      alert("Сәтті тіркелді");
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
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "users", user.uid);
        const unsubscribeCart = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.role = docSnap.data().role;
            console.log(this.role);
          } else {
            console.log("No such document!");
          }
        });
        this.unsubscribeCart = unsubscribeCart;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 12px;
  max-width: 1200px;
  margin: 0 auto;
}

.burger-icon {
  display: none;
  cursor: pointer;
}

.items-container {
  display: flex;
}

@media (max-width: 570px) {
  hr {
    display: none;
  }
  .input {
    display: none;
  }
  .burger-icon {
    display: block;
  }

  .items-container {
    display: none;
    flex-direction: column;
  }

  .items-container.show {
    display: flex;
  }

  .container > .flex {
    justify-content: space-between;
  }

  .container > .flex > form,
  .container > .flex > h1,
  .container > .flex > div {
  }
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}

.z-50 {
  z-index: 50;
}
</style>
