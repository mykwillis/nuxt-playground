import { skipHydrate } from "pinia";

export const useConversationStore = defineStore("conversation", () => {
  const localStorage = useSessionStorage<{
    messages: { id: number; text: string }[];
  }>("conversation", {
    messages: [] as { id: number; text: string }[],
  });

  const messages = computed({
    get: () => localStorage.value.messages,
    set: (value) => (localStorage.value.messages = value),
  });

  return {
    messages: skipHydrate(messages),
  };
});
