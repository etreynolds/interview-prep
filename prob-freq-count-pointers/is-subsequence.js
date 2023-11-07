// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1idx = 0;
    let str2idx = 0;

    if (!str1) return true;
    while (str2idx < str2.length) {
        if (str2[str2idx] === str1[str1idx]) {
            str1idx += 1;
        }
        if (str1idx === str1.length) return true;
        str2idx += 1;
    }
    return false;
}
