import { createModel } from "@rematch/core";
import { RootModel } from "..";
import { fetchChatInfo } from "../../service/chat";
import { ChatState, Member } from "../../types/chat";
import { MessageData } from "../../types/message";

export const chat = createModel<RootModel>()({
  state: {} as ChatState,
  reducers: {
    sendActiveRoom(state, id: number) {
      const newState = { ...state, activeRoom: id };
      return newState;
    },
    sendRoomInfo(state, payload:{id: number,messages:MessageData[],members:Member[]}) {
      const {id,members,messages} = payload
      const newState = { ...state, activeRoom: id };
      return newState;
    },
  },
  effects: (dispatch)=>({
    async initializeChatRoom(id:number,state){
      try{
        const chatInfo = await fetchChatInfo(id);
        this.sendActiveRoom(id)
      }catch(err){

      }
      

    }
  })
});
