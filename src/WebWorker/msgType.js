const CHAT_MSG = 0x80;

// server to client only
const TABLE_ACCEPT = 0x01;
const TABLE_DECLINE = 0x02;
const TABLE_EXIT = 0x03;
const TABLE_TIMER = 0x04;
const PLAYER_ACTION = 0x05;
const PLAYER_SHOW = 0x06;
const HAND_RESULT = 0x07;

// client to server only
const TABLE_SIT = 0x21;
const TABLE_STAND = 0x22;
const HAND_ACTION = 0x23;

export {
    CHAT_MSG, 
    TABLE_ACCEPT, 
    TABLE_DECLINE, 
    TABLE_EXIT, 
    TABLE_TIMER, 
    PLAYER_ACTION, 
    PLAYER_SHOW, 
    HAND_RESULT,
    TABLE_SIT, 
    TABLE_STAND, 
    HAND_ACTION
};