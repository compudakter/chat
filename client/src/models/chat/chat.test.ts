import { init } from "@rematch/core";
import { models, RootModel } from "..";

describe("chat model", () => {
  it("Setup active chat room", async () => {
    const store = init<RootModel>({
      models,
    });
    await store.dispatch.chat.sendActiveRoom(1);
    const activeChatRoom = store.getState().chat.activeRoom;
    expect(activeChatRoom).toEqual(1);
  });
});
