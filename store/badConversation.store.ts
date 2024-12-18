export const useWorkingConversationStore = defineStore(
  "workingconversation",
  () => {
    const initialStore = {
      messages: ref([] as { id: number; text: string }[]),
    };

    const store = toRefs(
      useSessionStorage("conversation", initialStore, { initOnMounted: true })
        .value
    );

    // Object.keys(store).forEach((k) => {
    //   const key = k as keyof typeof store;
    //   store[key] = skipHydrate(store[key]);
    // });

    return {
      ...store,
    };
  }
);
