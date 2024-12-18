<script setup lang="ts">
import { ref } from "vue";
import { useWorkingConversationStore } from "../store/badConversation.store";

// const conversationStore = useConversationStore();
// const { conversation } = storeToRefs(useConversationStore());

// const conversationStore = useBadConversationStore();
// const conversationStore = useWorkingConversationStore();
const { messages } = storeToRefs(useWorkingConversationStore());

const newMessage = ref("");
const sendMessage = () => {
  messages.value.push({
    id: messages.value.length,
    text: newMessage.value,
  });
  newMessage.value = "";
};
</script>

<template>
  <div>
    <h1>Conversation</h1>
    <!-- <ClientOnly fallback="Loading..."> -->
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
    <!-- </ClientOnly> -->
    <input v-model="newMessage" @keyup.enter="sendMessage" />
  </div>
</template>
