import * as CONSTANTS from "./msgType.js";

let toBackend = new WebSocket('wss://TODO');

function createJSONmessage(type, payload) {
    return {
        type: type,
        timestamp: Date.now(),
        payload: payload
    };
}

function clientSendChat() {
    let msg = createJSONmessage(CONSTANTS.CHAT_MSG, 
        {message: "todo"});
    toBackend.send(JSON.stringify(msg));
}

function clientSitTable() {
    let msg = createJSONmessage(CONSTANTS.TABLE_SIT, 
        {table_id: "todo", user_identity_token: "todo"});
    toBackend.send(JSON.stringify(msg));
}

function clientStandTable() {
    let msg = createJSONmessage(CONSTANTS.TABLE_STAND,
        {table_id: "todo"});
    toBackend.send(JSON.stringify(msg));
}

function clientHandAction() {
    let msg = createJSONmessage(CONSTANTS.HAND_ACTION,
        {table_id: "todo"});
    toBackend.send(JSON.stringify(msg));
}

// how can i promisify above actions???

toBackend.onmessage = (e) => {
    let backendResponse = JSON.parse(e.data);
    switch (backendResponse.type) {
        case CONSTANTS.CHAT_MSG:
            //
            break;
        case CONSTANTS.TABLE_ACCEPT:
            //
            break;
        case CONSTANTS.TABLE_DECLINE:
            //
            break;
        case CONSTANTS.TABLE_EXIT:
            //
            break;
        case CONSTANTS.TABLE_TIMER:
            //
            break;
        case CONSTANTS.PLAYER_ACTION:
            //
            break;
        case CONSTANTS.PLAYER_SHOW:
            //
            break;
        case CONSTANTS.HAND_RESULT:
            //
            break;
        default:
            //
    }
};