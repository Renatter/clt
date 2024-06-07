<template>
  <div class="relative">
    <Header></Header>
    <router-view></router-view>
    <div class="fixed bottom-[30px] right-[10px]">
      <img
        v-if="showChat && userId && role !== 'admin'"
        src="./assets/chat.png"
        alt=""
        @click="toggleChat"
      />
    </div>
    <div
      v-if="showChat && userId && role !== 'admin'"
      class="chat-box fixed bottom-[80px] right-[10px] p-[20px] bg-white shadow-lg rounded flex flex-col justify-between border-[1px] z-[999999]"
    >
      <div class="messages flex-1 overflow-y-auto">
        <div
          v-for="message in messages"
          :key="message.timestamp"
          :class="{
            'message admin-message': message.sender === 'admin',
            message: message.sender !== 'admin',
          }"
        >
          <p>
            <strong>{{ message.sender }}:</strong> {{ message.text }}
          </p>
          <p class="text-sm text-gray-500">
            {{ new Date(message.timestamp).toLocaleString() }}
          </p>
        </div>
      </div>
      <input
        v-model="newMessage"
        type="text"
        placeholder="Хабарлама"
        class="chat-input p-[10px] border rounded w-full mt-[10px]"
      />
      <button class="send-button" @click="sendMessage">
        Жіберу {{ role }}
      </button>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { ref, push, onValue } from "firebase/database";
import { dbase, auth, db } from "./firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default {
  components: {
    Header,
  },
  data() {
    return {
      showChat: false,
      newMessage: "",
      messages: [],
      userId: null,
      role: null,
    };
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const unsubscribeCart = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.userId = docSnap.data().email;
            this.role = docSnap.data().role;
            this.subscribeToMessages();
          } else {
            console.log("No such document!");
          }
        });

        // Save the unsubscribe functions to be used when the component is destroyed
        this.unsubscribeCart = unsubscribeCart;
      }
    });
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat;
    },

    sendMessage() {
      const messagesRef = ref(dbase, `${this.userId}`);
      push(messagesRef, {
        text: this.newMessage,
        timestamp: Date.now(),
        sender: this.userId,
      });
      this.newMessage = "";
    },

    subscribeToMessages() {
      const messagesRef = ref(dbase, `${this.userId}`);
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.messages = Object.values(data);
        } else {
          this.messages = [];
        }
      });
    },
  },
  beforeDestroy() {
    if (this.unsubscribeCart) {
      this.unsubscribeCart();
    }
  },
};
</script>

<style scoped>
.chat-box {
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
}
.chat-input {
  border: 1px solid #ccc;
  margin-top: 10px;
}
.messages {
  flex: 1;
  overflow-y: auto;
}
.message {
  margin-bottom: 10px;
}
.admin-message {
  background-color: #f1f1f1;
  border-left: 5px solid red;
  padding: 10px;
  border-radius: 5px;
}
.send-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}
.send-button:hover {
  background-color: #45a049;
}
</style>
