import * as CONSTANTS from "./msgType.js";

function createJSONmessage(type, payload) {
    return {
        type: type,
        timestamp: Date.now(),
        payload: payload
    };
}

function createPromiseListener(toFireOn, timeout) {
    return new Promise((resolve, reject) => {
        const fn = (response) => {
            if (response.detail.success) {
                resolve(response.detail.payload);
            } else {
                reject(response.detail.payload);
            }
        }
        this.addEventListener(toFireOn, fn, {once: true});
        setTimeout(() => {
            this.removeEventListener(fn);
            reject(`${toFireOn} request timeout`);
        }, timeout);
    });
}

// TODO but what if server replies after timeout?

class PokerClientSocket extends WebSocket {
    constructor(...args) {
        super(...args);
        this.onmessage = (serverMessage) => {
            let response = JSON.parse(serverMessage.data);
            switch (response.type) {
                case CONSTANTS.CHAT_MSG:
                    // do stuff with chat here
                    break;
                case CONSTANTS.TABLE_SIT:
                    this.dispatchEvent(new CustomEvent('table_sit', {
                        detail: response
                    }));
                    break;
                case CONSTANTS.TABLE_STAND:
                    this.dispatchEvent(new CustomEvent('table_stand', {
                        detail: response
                    }));
                    break;
                    // todo below
                case CONSTANTS.TABLE_TIMER:
                    this.dispatchEvent(new CustomEvent('table_timer', {
                        detail: response.payload
                    }));
                    break;
                case CONSTANTS.PLAYER_ACTION:
                    this.dispatchEvent(new CustomEvent('player_action', {
                        detail: response.payload
                    }));
                    break;
                case CONSTANTS.PLAYER_SHOW:
                    this.dispatchEvent(new CustomEvent('player_show', {
                        detail: response.payload
                    }));
                    break;
                case CONSTANTS.HAND_RESULT:
                    this.dispatchEvent(new CustomEvent('hand_result', {
                        detail: response.payload
                    }));
                    break;
                default:
                    //
            }
        };
    }

    chat(msg) {
        const toSend = createJSONmessage(CONSTANTS.CHAT_MSG, 
            {message: msg, user_identity_token: "todo"});
        this.send(JSON.stringify(toSend));
    }

    // can promise chain
    sit(tableID, seatNum, timeout = 5000) {
        const toSend = createJSONmessage(CONSTANTS.TABLE_SIT, 
            {table_id: tableID, seat_num: seatNum, user_identity_token: "todo"});
        this.send(JSON.stringify(toSend));
        return createPromiseListener('table_sit', timeout);
    }

    // can promise chain
    stand(tableID, seatNum, timeout = 5000) {
        const toSend = createJSONmessage(CONSTANTS.TABLE_STAND,
            {table_id: tableID, seat_num: seatNum, user_identity_token: "todo"});
        this.send(JSON.stringify(toSend));
        return createPromiseListener('table_stand', timeout);
    }

    handAction(tableID, seatNum, timeout = 5000) {
        const toSend = createJSONmessage(CONSTANTS.HAND_ACTION,
            {table_id: tableID, seat_num: seatNum, action: action});
        this.send(JSON.stringify(toSend));
        // TODO
    }

}

export default PokerClientSocket;