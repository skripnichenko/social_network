const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    newMessageBody: '',
    messagesData: [
        { id: 1, message: 'Hi', },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'Whats news?', },
        { id: 4, message: 'Ok', },
        { id: 5, message: 'Haha', }
    ],
    dialogsData: [
        { id: 1, name: 'Sasha', },
        { id: 2, name: 'Dima', },
        { id: 3, name: 'Sveta', },
        { id: 4, name: 'Pasha', },
        { id: 5, name: 'Artem', }
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:{
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: action.newMessageBody}]
            };
            
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;