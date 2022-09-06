export const fetchChatInfo = async (chatId: number) => {
  const chatInfo = await fetch(`/chatinfo${chatId}`);
  if (!chatInfo.ok) {
    throw Error("error");
  }
  return await chatInfo.json();
};
