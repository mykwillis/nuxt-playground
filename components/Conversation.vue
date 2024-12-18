<script setup lang="ts">
import { ref } from "vue";
import { useConversationStore } from "../store/conversation.store";

const conversationStore = useConversationStore();

const newMessage = ref("");
const sendMessage = () => {
  conversationStore.messages.push({
    id: conversationStore.messages.length,
    text: newMessage.value,
  });
  newMessage.value = "";
};
</script>

<template>
  <div>
    <h1>Conversation</h1>
    <ClientOnly fallback="Loading...">
      <ul>
        <li v-for="message in conversationStore.messages" :key="message.id">
          {{ message.text }}
        </li>
      </ul>
    </ClientOnly>
    <input v-model="newMessage" @keyup.enter="sendMessage" />
  </div>
</template>
