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
            this.dispatchEvent(new CustomEvent(response.type, {
                detail: response
            }));
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

// TODO how do i execute and have a single global from multiple imports

export default PokerClientSocket;