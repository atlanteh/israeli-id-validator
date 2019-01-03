module.exports = function isIsraeliIdValid(id)
{
    let strId = String(id).trim();
    if (strId.length > 9) {
        return false;
    }
    if (strId.length < 9) {
        while (strId.length < 9) strId = "0" + strId;
    }
    let counter = 0, rawVal, actualVal;
    for (let i = 0; i < strId.length; i++) {
        rawVal = Number(strId[i]) * ((i % 2) + 1);
        actualVal = rawVal > 9 ? (rawVal - 9) : rawVal;
        counter += actualVal;
    }
    return (counter % 10 === 0);
};
