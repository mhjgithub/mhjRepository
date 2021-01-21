// بسم‌الله‌الرحمن‌الرحیم
// ________________________________________________________________________________________________ توابع کمکی
MT = 10e6;
BT = 10e9;
function TsPrecondition() {
    return Precondition = (TheHistoryData.Buy_CountI + TheHistoryData.Sell_CountI > 30 && VolumeMa90 * Close > 0.5 * BT);
}
