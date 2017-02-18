module.exports = function isIsraeliIdValid(id)
{
    var strId = String(id).trim();
    if (strId.length !== 9) {
        return false;
    }
    var counter = 0, rawVal, actualVal;
    for (var i = 0; i < strId.length; i++) {
        rawVal = Number(strId[i]) * ((i % 2) + 1);
        actualVal = rawVal > 9 ? (rawVal - 9) : rawVal;
        counter += actualVal;
    }
    return (counter % 10 === 0);
};
