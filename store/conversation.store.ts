/**
 * Working Conversation store using SessionStorage.
 */
export const useConversationStore = defineStore("conversation", () => {
  const conversation = useSessionStorage(
    "conversation",
    {
      messages: [] as {
        id: number;
        text: string;
      }[],
    },
    { initOnMounted: true }
  );

  const messages = computed({
    get: () => conversation.value.messages,
    set: (value) => (conversation.value.messages = value),
  });

  return {
    messages,
  };
});
