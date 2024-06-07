<template>
  <div class="container">
    <h2>Хабарламалар тізімі</h2>
    <ul>
      <li v-for="(user, userId) in users" :key="userId" class="user-card">
        <h3 @click="showMessagesModal(userId)" style="cursor: pointer">
          {{ userId }}
        </h3>
      </li>
    </ul>
    <div v-if="selectedUserId" class="modal" @click="closeMessagesModal">
      <div class="modal-content mx-[30px]" @click.stop>
        <span class="close" @click="closeMessagesModal">&times;</span>
        <h2>{{ selectedUserId }}</h2>
        <ul class="message-list">
          <li
            v-for="message in selectedUserMessages"
            :key="message.timestamp"
            :class="[
              'message-item',
              { 'admin-message': message.sender === 'admin' },
            ]"
          >
            <strong>{{ message.sender }}:</strong> {{ message.text }}
            <p class="text-sm text-gray-500">
              {{ new Date(message.timestamp).toLocaleString() }}
            </p>
          </li>
        </ul>
        <div class="input-container">
          <input
            v-model="adminMessage"
            type="text"
            placeholder="Введите сообщение"
          />
          <button @click="sendAdminMessage">Жіберу</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onValue, push, off } from "firebase/database";
import { dbase } from "../firebase/firebase"; // Подключите вашу Firebase базу данных

export default {
  data() {
    return {
      users: {}, // Объект для хранения данных пользователей и их сообщений
      selectedUserId: null,
      selectedUserMessages: [],
      adminMessage: "",
    };
  },
  created() {
    this.fetchUsersAndMessages();
  },
  methods: {
    fetchUsersAndMessages() {
      const usersRef = ref(dbase); // Ссылка на корень базы данных
      onValue(usersRef, (snapshot) => {
        this.users = snapshot.val();
      });
    },
    showMessagesModal(userId) {
      this.selectedUserId = userId;
      this.listenForMessages(userId);
    },
    listenForMessages(userId) {
      const messagesRef = ref(dbase, `${userId}`);
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        this.selectedUserMessages = data ? Object.values(data) : [];
      });
    },
    closeMessagesModal() {
      this.selectedUserId = null;
      this.selectedUserMessages = [];
      off(ref(dbase, this.selectedUserId)); // Отключаем наблюдатель при закрытии модального окна
    },
    sendAdminMessage() {
      if (this.adminMessage.trim() !== "") {
        const messagesRef = ref(dbase, `${this.selectedUserId}`);
        push(messagesRef, {
          text: this.adminMessage,
          timestamp: Date.now(),
          sender: "admin",
        });
        this.adminMessage = ""; // Очистка input после отправки
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.user-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card h3 {
  margin-bottom: 10px;
  cursor: pointer;
}

.message-list {
  padding: 0;
  margin: 0;
}

.message-item {
  list-style-type: none;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
}

.admin-message {
  background-color: #e3f2fd; /* Цвет фона для сообщений от админа */
  font-weight: bold;
}

/* Модальное окно */
.modal {
  display: block; /* Меняем на block */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;

  border: 1px solid #888;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.input-container {
  display: flex;
  margin-top: 20px;
}

.input-container input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-container button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.input-container button:hover {
  background-color: #0056b3;
}
</style>
