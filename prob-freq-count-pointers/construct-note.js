// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const messageFreq = {};
    const lettersFreq = {};

    // frequency counter for letters
    for (let char of letters) {
        lettersFreq[char] = lettersFreq[char] + 1 || 1;
    }

    // frequency counter for message
    for (let char of message) {
        messageFreq[char] = messageFreq[char] + 1 || 1;
    }

    for (let char in messageFreq) {
        if (!lettersFreq[char]) {
            return false;
        }
        if (messageFreq[char] > lettersFreq[char]) {
            return false;
        }
    }
    return true;
}
