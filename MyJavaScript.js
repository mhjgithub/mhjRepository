// بسم‌الله‌الرحمن‌الرحیم
// فرمول‌هاوپالایه‌های‌محمدحسین
// ________________________________________________________________________________________________ توابع کمکی
MT = 10e6;
BT = 10e9;
function TsPrecondition() {
    return Precondition = (TheHistoryData.Buy_CountI + TheHistoryData.Sell_CountI > 30 && [is5] * Close > 0.5 * BT);
}
function TsPreconditionMatch() { // جزییات شرایط‌مسابقه‌بورسی
    bish_az_50000_Volume = Volume > 50000;
    Queuee_Buy = ((pd1A) == MaximumDayLimit && (qd1A) != 0);
    Taqaza_KamtarAz_Miangin_Mah = (qd1A) < GetVolumeMa30(); // sar_khati_az_miangin_se_mahe_kamtar_bashad = (qd1A) < [is5] ;
    Volume_BozorgtarAz_Mabna = Volume > VolumeMABNA;

    // شرایط مسابقه بورسی جمع بندی
    shart_Mosabeqe = Queuee_Buy ?
        Taqaza_KamtarAz_Miangin_Mah && Volume_BozorgtarAz_Mabna && bish_az_50000_Volume :
        bish_az_50000_Volume;
    return shart_Mosabeqe;
}
function GetTextEmojiByTickerSituation() {
    e = "";
    j = (pl) < MaximumDayLimit ? "😞" : "";
    j += (pl) < MaximumDayLimit * 0.99 ? "😞" : "";
    j += (pl) < MaximumDayLimit * 0.975 ? "😞" : "";
    e += LastCy < 0 ? "🤢" : j; // 🤢🤢🤢🤢

    e += (pl) > Close ? "✔" : "";
    e += (pl) > Open ? "✔" : "";
    e += LastCy > 0 ? "✔" : "";

    e += Volume > 1.3 * [is5] ? "🥶" : "";
    // e +=  "";
    e = Ccy < 0 ? "😈" : e; // 😡😈😈👹👹😈😈😈😡

    (cfield2) = e; //  (cfield0) = e!="" ? e : (cfield0);
    return e;
}
//  ____________رشته و آرایه
function Number2String(n) {
    //(Math.round(n)).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false}) // return n > 9 ? "" + n: "0" + n;
    n = Math.round(n);
    m = Math.abs(n);
    return m > 99 ? "" + n : m > 9 ? "  " + n : "    " + n;
}
// ________________________________________________________________________________________________ نمادهای خاص
function TsSpecialTickersWithHighCapabilityOfOscillation() { //   نمادهای ده درصدی
    // LastCy > 5 && LastCy < 10;
    return 100 * (MaximumDayLimit - Cy) / Cy > 5;
}
function TsBlocks() {
    return Symbol.indexOf("2") != -1 && Symbol.indexOf("3") == -1 && Symbol.indexOf("4") == -1 && Symbol.indexOf("5") == -1 && Symbol.indexOf("6") == -1 && Symbol.indexOf("7") == -1 && Symbol.indexOf("8") == -1 && Symbol.indexOf("9") == -1 && Symbol.indexOf("0") == -1 && Symbol.indexOf("1") == -1 && Symbol.indexOf("اشاد2") == -1 && Symbol.indexOf("گندم2") == -1 && Symbol.indexOf("انرژي2") == -1; // بلوک‌ها *
}
function TsBlocksAndPriority() {
    return Symbol[Symbol.length - 1] == 'ح' || (Symbol.indexOf("2") != -1 && Symbol.indexOf("3") == -1 && Symbol.indexOf("4") == -1 && Symbol.indexOf("5") == -1 && Symbol.indexOf("6") == -1 && Symbol.indexOf("7") == -1 && Symbol.indexOf("8") == -1 && Symbol.indexOf("9") == -1 && Symbol.indexOf("0") == -1 && Symbol.indexOf("1") == -1 && Symbol.indexOf("اشاد2") == -1 && Symbol.indexOf("گندم2") == -1 && Symbol.indexOf("انرژي2") == -1); // بلوک‌ها و حق تقدم‌ها *
}
function TsWatchList(list) {
    // list = `
    // ونوين-ت
    // پكوير-ت
    // كاما-ت
    // كروي-ت
    // تماوند-ت
    // فروي-ت
    // شپترو-ت
    // سمگا-ت
    // حريل-ت
    // شاروم-ت
    // شكربن-ت

    // `;
    list = list.replace(/-ت/g, "");
    list = list.replace(/ک/g, "ك");
    list = list.replace(/ی/g, "ي");
    list = list.replace(/\\r/g, "");
    list = list.replace(/\r/g, "");

    list2 = list.split("\n");
    TheList = false;
    for (i = 0; i < list2.length; i++)
        TheList = TheList || Symbol == list2[i];
    return TheList;
    //_____________________________________________
    // OldList = Symbol == "وبيمه" || Symbol == "خصدرا" || Symbol == "فنرژي" || Symbol == "پلاست" || Symbol == "تاصيكو" || Symbol == "كهرام" || Symbol == "ما" || Symbol == "سفارود" || Symbol == "وكوثر" || Symbol == "وقوام" || Symbol == "آرمان" || Symbol == "آرمانح" || Symbol == "كچيني" || Symbol == "تملي702" || Symbol == "بخاور" || Symbol == "خساپا" || Symbol == "بترانس" || Symbol == "فسا" || Symbol == "وبيمه" || Symbol == "بساما" || Symbol == "ودي" || Symbol == "تاصيكو" || Symbol == "غشهداب" || Symbol == "دسانكو" || Symbol == "دانا" || Symbol == "وگستر" || Symbol == "وپاسار" || Symbol == "شزنگ" || Symbol.includes("صايتل");
    //_____________________________________________
    // SarmaiegozariOstani = Name.search("استان" != -1);
}
// ________________________________________________________________________________________________ بنیادی
// ____________ درآمد
function GetEpsTotalText() {
    return Math.round(TotalShares * Income / BT) + " BT درآمد کل";
}
function TsEpsTotalHigh() {
    return TotalShares * Income > 20 * 1000e9;
}
function GetDaramad_Kol() {
    return Daramad_Kol = TotalShares * Income;
}
//  ____________ارزش بازار
function TsArzesh_Bazaar_Kuchak() {
    return Arzesh_Bazaar_Kuchak = Arzesh_Bazaar < 1000 * BT; //  > 5000*BT
}
function TsArzeshBazaarBozorg() {
    return Arzesh_Bazaar_Bozorg = GetArzesh_Bazaar() > 20000 * BT; //  > 5000*BT ;
}
function GetArzesh_Bazaar() {
    return Arzesh_Bazaar = TotalShares * Close;
}
// ____________ پالایه
function TsdaramadAali() {
    return daramadAali = IncomeRatio < 10 && IncomeRatio > 0;
}
function TsDaramad_khoob() {
    return daramad_khoob = IncomeRatio < 10 && IncomeRatio > 0;
}
function TsDaramad_Mamuli() {
    return daramad_Mamuli = IncomeRatio < 20 && IncomeRatio > 0;
}
function TsZianDeh() {
    return ZianDeh = GetDaramad_Kol() < 0 * BT;
}
function TsDaramad_Kol_Kuchak() {
    return Daramad_Kol_Kuchak = GetDaramad_Kol() < 30 * BT && GetDaramad_Kol() > 0 * BT;
}
function TsDaramadKolBozorg() {
    return Daramad_Kol_Bozorg = GetDaramad_Kol() > 3000 * BT; //(cfield0) = Math.round(GetDaramad_Kol() );;
}
function TsBozorg_va_Bonyadi1() {
    return Bozorg_va_Bonyadi = TsDaramad_khoob() && TsArzeshBazaarBozorg();
}
function TsBozorg_va_Bonyadi2() {
    return Bozorg_va_Bonyadi = TsDaramad_khoob() && TsArzeshDadosetadBala();
}
function TsBozorg_va_Bonyadi3() {
    return Bozorg_va_Bonyadi = TsDaramad_khoob() && TsDaramadKolBozorg();
}
function TsBozorg_va_Bonyadi4() {
    return Bozorg_va_Bonyadi = TsDaramad_khoob() && TsArzeshDadosetadBala() && TsDaramadKolBozorg();
}
// ________________________________________________________________________________________________ حجم
function GetVolume() {
    return Volume = Volume > 0 ? Volume : 1;
}
function GetVolumeRatioMonth() {
    return Volume_Perc_Month = 100 * GetVolume() / [is5];
}
function GetVolumeRatioBazaar() {
    return Volume_Perc_Bazaar = 100 * GetVolume() / TotalShares;
}
function GetVolumeMa30() { //  پیدا کردن میانگین حجم تقریبی ماه و شرایط مسابقه
    // تنظیمات میانگین‌گیری
    Shomare_Ruzha = 25;

    // میانگین‌گیری
    VolumeMaah = Volume;
    j = 1;
    for (i = 0; i < Shomare_Ruzha; i++)
        if (typeof[ih][i].QTotTran5J != "undefined" && [ih][i].QTotTran5J != 0) //if (typeof[ih] != "undefined" && typeof[ih][i] != "undefined" && )
        {
            VolumeMaah += [ih][i].QTotTran5J;
            j++;
        }
    VolumeMaah /= j;
    //
    VolumeMaah = Math.min(VolumeMaah, [is5]);
    return VolumeMaah;
}
function GetArzeshDadOSetad() {
    return Arzesh_DadOSetad = [is5] * Close;
}
// _____ پالایه
function TsLowVolume() {
    return (GetVolumeRatioMonth() < 30 || GetVolumeRatioBazaar() < 1) && TsPrecondition(); // حجم کم;
}
function TsHighVolume() {
    return (GetVolumeRatioMonth() > 700 || GetVolumeRatioBazaar() > 250) && TsPrecondition(); // حجم بسیار;
}
function TsVolumeHigh() {
    return VolumeHigh = GetVolumeRatioMonth() > 500 || GetVolumeRatioBazaar() > 350;
}
function TsValueWhales2() {
    return Value > 20e10; // برای وسط بازار;
}
function TsValueWhales1() {
    return Value > 50e10; // برای وسط بازار;
}
function TsValueWhales() {
    Value > 200e10;
    Value > 300e10;
    return Value > 100e10;
}
function TsVolumeHigh2() {
    return Volume_High = Volume > 1.5 * [is5] && Value > 20e10;
}
function TsVolumeVeryHigh() {
    return VolumeVeryHigh = Volume > 1.7 * [is5] && Value > 50e10;
}
function TsArzeshDadosetadBala() {
    return Arzesh_DadOSetad_Bala = GetArzeshDadOSetad() > 50 * BT;
}
function TsOfteZaidajmeHigh() {
    // OfteHigh = Close < 0.85 * [is13]; // قیمت میانگین آخرین روز
    OfteHigh = Close < 0.99 * Cy; // قیمت میانگین آخرین روز
    return TsVolumeHigh2() && OfteHigh;
}
// ________________________________________________________________________________________________  حقیقی
function GetEachNeutralVolumeSell() {
    Nat_sell_shomar = TheHistoryData.Sell_CountI > 0 ? TheHistoryData.Sell_CountI : 1;
    Nat_avg_vol_sell = TheHistoryData.Sell_I_Volume / Nat_sell_shomar;
    return Nat_avg_vol_sell;
}
function GetEachNeutralVolumeBuy() {
    Nat_buy_shomar = TheHistoryData.Buy_CountI > 0 ? TheHistoryData.Buy_CountI : 1;
    EachNeutralVolumeBuy = TheHistoryData.Buy_I_Volume / Nat_buy_shomar;
    return EachNeutralVolumeBuy;
}
function GetNeutralVolume() {
    Nat_avg_vol = GetEachNeutralVolumeBuy() - GetEachNeutralVolumeSell();
    Nat_All_Vol = Nat_avg_vol > 0 ? Nat_avg_vol * TheHistoryData.Buy_CountI : Nat_avg_vol * TheHistoryData.Sell_CountI;
    return Nat_All_Vol;
}
function GetNeutralValue() {
    return Nat_Rial = Close * GetNeutralVolume();
}
function GetNeutralRatioToday() {
    return Nat_Perc = 100 * GetNeutralVolume() / GetVolume();
}
function GetNeutralRatioMonth() {
    return Nat_Perc_Month = 100 * GetNeutralVolume() / [is5];
}
function GetNeutralRatioBazaar() {
    return Nat_Perc_Bazaar = 100 * GetNeutralVolume() / TotalShares; // 100 beacause its small value
}
function GetEachNeutralValue() {
    return Nat_Rial_Each = (Close * (GetEachNeutralVolumeBuy() - GetEachNeutralVolumeSell())); // Math.round
}
function GetEachNeutralBuyMa90() {
    return miangin_sarane_3mah_haqiqi_Buy = Close * [is50] / [is58];
}
function GetNeutralBuyVolumeEach3Month() {
    NeutralBuyVolumeEach3Month = [is50] / [is58];
    return NeutralBuyVolumeEach3Month;
}
function GetNeutralBuyVolumeEachRatioTo3Month() {
    NeutralBuyVolumeEachRatioTo3Month = 100 * GetEachNeutralVolumeBuy() / GetNeutralBuyVolumeEach3Month();
    return NeutralBuyVolumeEachRatioTo3Month;
}
function GetNeutralSellVolumeEach3Month() {
    NeutralSellVolumeEach3Month = [is70] / [is78];
    // [is70] میانگین حجم فروش حقیقی در 3 ماه گذشته
    // [is78] میانگین تعداد فروشنده حقیقی در 3 ماه گذشته
    return NeutralSellVolumeEach3Month;
}
function GetNeutralSellVolumeEachRatioTo3Month() {
    NeutralSellVolumeEachRatioTo3Month = 100 * GetEachNeutralVolumeSell() / GetNeutralSellVolumeEach3Month();
    // [is74] میانگین حجم فروش حقوقی در 3 ماه گذشته
    return NeutralSellVolumeEachRatioTo3Month;
}
function GetNeutralText() {
    // (cfield0) = Math.round( GetNeutralSellVolumeEachRatioTo3Month());
    // (cfield2) = Math.round( GetNeutralBuyVolumeEachRatioTo3Month());
    return "" + Math.round(GetNeutralValue() / BT) + "BT(" + Math.round(GetNeutralRatioToday()) + "%)" + Math.round(GetEachNeutralValue() / MT) + "MT(" + Math.round(GetNeutralRatioBazaar()) + "%)" + "(" + Math.round(GetNeutralRatioMonth()) + "%)"; // N(N%)NE(NM%)(NB%);
    //+ '<span style="color:blue">' + Math.round(GetSupplyDemandRatioMonth()) + "%M)" + '</span>'
}
// _____ پالایه
function TsStrongNeutralSell() { // خالی کردن؟
    return (Ccy > 2 || LastCy > 2) && GetNeutralRatioToday() < -20 && GetNeutralValue() < -500000; // مثبت و فروش بسیار حقیقی*;
}
function TsNeutralPowerSell۲() {
    return ((GetNeutralRatioMonth() < -150 && GetNeutralRatioToday() < -50 && GetNeutralValue() < -200 * MT) || GetEachNeutralValue() < -7 * MT || GetNeutralValue() < -3000 * MT || GetNeutralRatioMonth() < -250 || GetNeutralRatioToday() < -90 || GetNeutralRatioBazaar() < -50) && (GetNeutralRatioMonth() < -25 && GetEachNeutralValue() < -5 * MT && TsPrecondition());
}
function TsNeutralPowerSell3() { // نمادهای سنگین برای دیدن گروه ها
    return GetNeutralRatioMonth() < -25 && GetNeutralValue() < -350 * MT;
}
function TsNeutralWhaleSell1() {
    return GetNeutralValue() < -10 * BT;
}
function TsNeutralWhaleSell2() {
    return GetNeutralValue() < -50 * BT;
}
function TsNeutralWhale1() {
    return GetNeutralValue() > 10 * BT;
}
function TsNeutralWhale2() {
    return GetNeutralValue() > 20 * BT;
}
function TsNeutralWhale3() {
    return GetNeutralValue() > 50 * BT;
}
function TsNeutralPowerBuy۲() {
    return ((GetNeutralRatioMonth() > 100 && GetNeutralRatioToday() > 30 && GetNeutralValue() > BT) || GetEachNeutralValue() > 45 * MT || GetNeutralValue() > 15 * BT || GetNeutralRatioMonth() > 250 || GetNeutralRatioToday() > 90 || GetNeutralRatioBazaar() > 35) && (GetNeutralRatioMonth() > 1 && GetEachNeutralValue() > 5 * MT && TsPrecondition()); // خرید نیرومند حقیقی *;
}
function TsNeutralPowerBuy() {
    return ((GetNeutralRatioMonth() > 150 && GetNeutralRatioToday() > 50 && GetNeutralValue() > 200 * MT) || GetEachNeutralValue() > 7 * MT || GetNeutralValue() > 3 * BT || GetNeutralRatioMonth() > 250 || GetNeutralRatioToday() > 90 || GetNeutralRatioBazaar() > 50) && (GetNeutralRatioMonth() > 25 && Nat_MRial_Each > 5 * MT && TsPrecondition());
}
function TsNeutralPowerBuy۳() {
    return (GetEachNeutralValue() > 7 * MT || GetNeutralValue() > 3 * BT || GetNeutralRatioMonth() > 250 || GetNeutralRatioToday() > 90 || GetNeutralRatioBazaar() > 50)
     && (GetNeutralRatioMonth() > 25 && GetEachNeutralValue() > 5 * MT && TsPrecondition());
}
function TsNeutralPowerBuy4() {
    return (GetNeutralRatioMonth() > 100 && GetNeutralRatioToday() > 25 && GetNeutralValue() > 50 * MT && GetNeutralRatioBazaar() > 10);
}
function TsNeutralPowerBuyBigCompanies() {
    return GetNeutralValue() > 3.5 * BT && GetNeutralRatioMonth() > 25;
}
function TsNeutralPowerSell() {
    return ((GetNeutralRatioMonth() < -100 && GetNeutralRatioToday() < -30 && GetNeutralValue() < -1 * BT) || GetEachNeutralValue() < -45 * MT || GetNeutralValue() < -15 * BT || GetNeutralRatioMonth() < -250 || GetNeutralRatioToday() < -90 || GetNeutralRatioBazaar() < -35) && (GetNeutralRatioMonth() < -1 && GetEachNeutralValue() < -5 * MT && TsPrecondition()); // فروش نیرومند حقیقی *;
}
function TsJuridical2Nerutral() {
    return GetJuridicalRatioToday() > 20 && GetNeutralRatioToday() < -20 && Ccy > 0 && Value > 300e6; // حقیقی به حقوقی*;
}
function TsNeutral2Juridical() {
    return GetJuridicalRatioToday() < -20 && GetNeutralRatioToday() > 20 && Ccy < 0 && Value > 300e6; // حقوقی به حقیقی *;
}
// ________________________________________________________________________________________________  حقوقی
function GetJuridicalVolume() {
    return Jur_All_Vol = TheHistoryData.Buy_N_Volume - TheHistoryData.Sell_N_Volume;
}
function GetJuridicalValue() {
    return Jur_Rial = Close * (GetJuridicalVolume());
}
function GetJuridicalRatioToday() {
    return Jur_Perc = 100 * GetJuridicalVolume() / GetVolume();
}
function GetJuridicalRatioMonth() {
    return Jur_Perc_Month = 100 * GetJuridicalVolume() / [is5];
}
function GetJuridicalRatioBazaar() {
    return Jur_Perc_Bazaar = 100 * GetJuridicalVolume() * 100 / TotalShares;
}
function GetJuridicalBuyMa90() {
    return miangin_Buy_hoquqi_3mah = Close * ([is54] - [is74]);
}
function GetJuridicalSellVolumeRatioTo3Month() {
    JuridicalSellVolumeRatioTo3Month = 100 * TheHistoryData.Sell_N_Volume / [is74];
    // [is50] میانگین حجم خرید حقیقی در 3 ماه گذشته
    // [is58] میانگین تعداد خریدار حقیقی در 3 ماه گذشته
    return JuridicalSellVolumeRatioTo3Month;
}
function GetJuridicalText() {
    return "" + Math.round(GetJuridicalValue() / BT) + "BT(" + Math.round(GetJuridicalRatioToday()) + "%)" + "(" + Math.round(GetJuridicalRatioBazaar()) + "%)" + "(" + Math.round(GetJuridicalRatioMonth()) + "%)"; // J(J%)(JM%)(JB%);
}
// _____ پالایه
function TsJuridicalPowerfulBuy() {
    return ((GetJuridicalRatioMonth() > 100 && GetJuridicalRatioToday() > 30 && GetJuridicalValue() > 1 * BT) || GetJuridicalValue() > 15 * BT || GetJuridicalRatioMonth() > 250 || GetJuridicalRatioToday() > 90 || GetJuridicalRatioBazaar() > 35) && (GetJuridicalRatioMonth() > 1 && TsPrecondition()); // خرید نیرومند حقوقی *;
}
function TsJuridicalPowerfulSell() {
    return ((GetJuridicalRatioMonth() < -100 && GetJuridicalRatioToday() < -30 && GetJuridicalValue() < -1 * BT) || GetJuridicalValue() < -15 * BT || GetJuridicalRatioMonth() < -250 || GetJuridicalRatioToday() < -90 || GetJuridicalRatioBazaar() < -35) && (GetJuridicalRatioMonth() < -1 && TsPrecondition()); // فروش نیرومند حقوقی *;
}
function JuridicalPowerfullBuy1() {
    return ((GetJuridicalRatioMonth() > 100 && GetJuridicalRatioToday() > 30 && GetJuridicalValue() > 100 * MT) || GetJuridicalValue() > 1500 * MT || GetJuridicalRatioMonth() > 250 || GetJuridicalRatioToday() > 90 || GetJuridicalRatioBazaar() > 35); // && (GetJuridicalRatioMonth() > 1 && TsPrecondition() );
}
function JuridicalPowerfullBuy2() {
    return (GetJuridicalRatioMonth() > 100 && GetJuridicalRatioToday() > 30 && GetJuridicalValue() > 1000 * MT) && TsPrecondition();
}
function JuridicalPowerfullBuy3() {
    return Jur_All_Vol * (pl) > 100e9;
}
function JuridicalWhale1() {
    return GetJuridicalValue() > 10 * BT;
}
function JuridicalWhale2() {
    return GetJuridicalValue() > 30 * BT;
}
function JuridicalWhale3() {
    return GetJuridicalValue() > 50 * BT;
}
function JuridicalPowerfullSell() {
    // GetJuridicalRatioMonth() < -500;
    // GetJuridicalRatioBazaar() < -50;
    // TheHistoryData.Sell_N_Volume * Close > 50e9;
    return ((GetJuridicalRatioMonth() < -100 && GetJuridicalRatioToday() < -30 && GetJuridicalValue() < -100 * MT) || GetJuridicalValue() < -1.5 * BT || GetJuridicalRatioMonth() < -250 || GetJuridicalRatioToday() < -90 || GetJuridicalRatioBazaar() < -35); // && (GetJuridicalRatioMonth() < -1 && TsPrecondition() );
}
function JuridicalWhaleSell1() {
    return GetJuridicalValue() < -100 * BT;
}
function JuridicalWhaleSell2() {
    return GetJuridicalValue() < -25 * BT;
}
function JuridicalWhaleSell3() {
    return GetJuridicalValue() < -10 * BT;
}
// _______________________________________________________________________________________________  حقیقی حقوقی
function GetNjVolume() {
    return Nat_Jur_All_Vol = GetNeutralVolume() + GetJuridicalVolume();
}
function GetNjValue() {
    return Nat_Jur_Rial = (GetNjVolume()) * Close;
}
function GetNjRatioToday() {
    return Nat_Jur_Perc = 100 * (GetNjVolume()) / GetVolume();
}
function GetNjRatioMonth() {
    return Nat_Jur_Perc_Month = 100 * (GetNjVolume()) / [is5];
}
function GetNjRatioBazaar() {
    return Nat_Jur_Perc_Bazaar = 100 * GetNjVolume() * 100 / TotalShares;
}
function GetNjText() {
    return "" + Math.round(GetNjValue() / BT) + "BT(" + Math.round(GetNjRatioToday()) + "%)" + Math.round(GetJuridicalRatioBazaar()) + "(" + Math.round(GetNjRatioMonth()) + "%)" + Math.round(GetSupplyDemandRatioBazaar()) + "%{" + Math.round(GetSupplyDemandRatioMonth()) + "%}"; // Nj(Nj%)NjM%(NjB)SD{SDB%}
}
// _____ پالایه
function TsNjPowerfulBuy() {
    return ((GetNjRatioMonth() > 100 && GetNjRatioToday() > 30 && Nat_Jur_MRial > 1000) || Nat_Jur_MRial > 15000 || GetNjRatioMonth() > 250 || GetNjRatioToday() > 90 || GetNjRatioBazaar() > 35) && (GetNjRatioMonth() > 1 && TsPrecondition()); // ورود پول بسیار *;
}
function TsNjPowerfulSell() {
    return ((GetNjRatioMonth() < -100 && GetNjRatioToday() < -30 && Nat_Jur_MRial < -1000) || Nat_Jur_MRial < -15000 || GetNjRatioMonth() < -250 || GetNjRatioToday() < -90 || GetNjRatioBazaar() < -35) && (GetNjRatioMonth() < -1 && TsPrecondition()); // خروج پول بسیار *;
}
function TsNjNotHighNotLow() {
    return NjLight = (GetNeutralRatioMonth() > -10 && GetNeutralRatioMonth() < 10) && (GetJuridicalRatioMonth() >  - 10 && GetJuridicalRatioMonth() < 10);
}
function TsNjBothBuy() {
    NHigh = GetNeutralValue() > 10 * BT;
    JSellNot = GetNeutralRatioMonth() > 0 && (GetJuridicalRatioMonth() > 0 ? true : GetNeutralRatioMonth() > 10 * -GetJuridicalRatioMonth());
    NJKhoob = NHigh || JSellNot;
    return NJKhoob;
}
function GetEachNeutralSellMa90() {
    return miangin_sarane_3mah_haqiqi_forush = Close * [is70] / [is78];
}
function TsNjBuy() { // مسابقه هفتگی981027 //نتایج متوسط
    Match981027 = GetEachNeutralVolumeBuy() * Close < GetEachNeutralSellMa90()
         && GetEachNeutralVolumeSell() * Close > GetEachNeutralBuyMa90()
         && GetJuridicalBuyMa90() > 0
         && GetNjRatioMonth() > 0
         && GetNeutralRatioMonth() > 0
         && GetJuridicalRatioMonth() > 0;
    return Match981027;
}
function TsNjBuy_2() { // مسابقه هفتگی981027 پایه // نتایج متوسط
    Match981027 = GetEachNeutralVolumeBuy() * Close > GetEachNeutralBuyMa90()
         && GetEachNeutralVolumeSell() * Close < GetEachNeutralSellMa90()
         && GetJuridicalBuyMa90() > 0
         && GetNjRatioMonth() > 0
         && GetNeutralRatioMonth() > 0
         && GetJuridicalRatioMonth() > 0;
    return Match981027_2;
}
function tsNJX0() {
    return ((GetJuridicalRatioToday() > 5 && GetNeutralRatioToday() > 5)
         || (GetNjRatioToday() > 40)
         || (GetNeutralRatioToday() > 50 && GetNjRatioToday() > 0)
         || (GetJuridicalRatioToday() > 20 && GetNjRatioToday() > 0))
     && TsPrecondition();
}
function tsNjX1() {
    return GetNjRatioMonth() > 70
     && Value > 10e9
     && TsPrecondition();
}
function TsNeutralBuyJuridicalNotSell() {
    return GetNeutralBuyVolumeEachRatioTo3Month() > 100 && GetNeutralSellVolumeEachRatioTo3Month() < 50 && GetJuridicalSellVolumeRatioTo3Month() < 100;
}
function BuyNjHeavyMosbat() {
    return GetNeutralRatioToday() > 0 && GetJuridicalRatioToday() > 0 && LastCy > 2 + Ccy; //&& (pl)==(ph);
}
// ________________________________________________________________________________________________ عرضه و تقاضا
function GetSupplyDemandValue() {
    return Supply_Demand = ((((qd1A) * (pd1A)) + ((qd2A) * (pd2A)) + ((qd3A) * (pd3A))) - (((po1A) * (qo1A)) + ((po2A) * (qo2A)) + ((po3A) * (qo3A))));
}
function GetSupplyDemandRatioToday() {
    return SupplyDemandPercentToday = VQueue = 100 * GetSupplyDemandValue() / Value;
}
function TsBuyingAbility() {
    return filter_of_ability = GetSupplyDemandRatioToday() < 300 && GetSupplyDemandRatioToday() > 100;
}
function GetSupplyDemandRatioMonth() {
    return Supply_Demand_Perc_Month = (100 * GetSupplyDemandValue() / Close) / [is5];
}
function GetSupplyDemandRatioMonth2() {
    return Supply_Demand_Perc_Month = 100 * (qd1A) / GetVolumeMa30();
}
function GetSupplyDemandRatioBazaar() {
    return Supply_Demand_Bazzar = 100 * (GetSupplyDemandValue() / Close) / TotalShares;
}
function BuyQueueDays() {
    if (Low != 0 && Low >= MaximumDayLimit * 0.99) {
        Days = 1;
        for (n = 1; n <= 20; n++) {
            Low = [ih][n].PriceMin;
            High = [ih][n].PriceMax;
            CY = [ih][n].PriceYesterday;
            if (Low != 0 && Low >= High * 0.99 && Low >= CY * 1.009) {
                Days++;
            }
        }
    } else
        Days = 0;
    return Days;
}
function GetSupplyEachValue() {
    return Supply_Demand_each_sell_value = (qo1A) * (po1A) / (zo1A);
}
function GetDemandEachValue() {
    return Supply_Demand_each_buy_value = (qd1A) * (pd1A) / (zd1A);
}
function GetSupplyDemandText2() {
    str = "" + Math.round(GetSupplyDemandRatioToday()) + "%D - " + Math.round(GetSupplyDemandRatioBazaar()) + "%B {" + Math.round(GetSupplyDemandRatioMonth()) + "%M}"
         + "__" + Math.round(GetDemandEachValue() / MT) + "/" + Math.round(GetSupplyEachValue() / MT)
         + " MT__" + Math.round(GetSupplyDemandValue() / BT) + " BT";
    return str;
}
function GetSupplyDemandText() {
    if (BuyQueueDays() >= 1 && BuyQueueDays() <= 10)
        strDays = '<span style="background-color: #FFFF00">' + '[' + BuyQueueDays() + 'Days]' + '</span>';
    else
        strDays = '<span style="color:green">' + '[' + BuyQueueDays() + 'Days]' + '</span>';
    if (GetSupplyDemandRatioToday() < 600 && GetSupplyDemandRatioToday() > 20)
        sreVQueue = '<span style="background-color: #FFFF00">' + Math.round(GetSupplyDemandRatioToday()) + "% " + '</span>';
    else
        sreVQueue = '<span style="color:red">' + Math.round(GetSupplyDemandRatioToday()) + "% " + '</span>';
    //
    str = strDays + sreVQueue + Math.round(GetSupplyDemandValue() / BT) + "BT("
         + '<span style="color:blue">' + Math.round(GetSupplyDemandRatioMonth()) + "%M)" + '</span>' + "{" + Math.round(GetSupplyDemandRatioBazaar()) + "%B}";
    return str;
}
// _____ پالایه
function TsQueueQeireQabeleBuy() {
    return GetSupplyDemandRatioToday() > 2000 && BuyQueueDays() > 0;
}
function TsQueueQabeleBuy() {
    return GetSupplyDemandRatioToday() > 10 && GetSupplyDemandRatioToday() < 200;
}
function TsQueueQabeleBuy1() { //  صف خرید قابل خرید کم حجم
    return Low > MaximumDayLimit * 0.995 && GetSupplyDemandRatioMonth() < 100 && GetVolumeRatioMonth() < 100;
}
function TsNearBuyQueue() { //   نزدیک سقف روز
    return NearBuyQueue = LastCy > 4.5 && LastCy < 4.95;
}
function TsNoSellQueue() {
    return NoSellQueue = (pl) != MinimumDayLimit;
}
function TsNoBuyQueue() {
    return NoBuyQueue = (pl) != MaximumDayLimit;
}
function TsQueueNot() {
    return QueueNot = TsNoBuyQueue() && TsNoSellQueue();
}
function TsTomorrowQueue() { //######################################
    return Mamooli = GetSupplyDemandRatioToday() < 400 && GetSupplyDemandRatioToday() > 100 && BuyQueueDays() >= 2 && BuyQueueDays() <= 5;
}
function TsTomorrowQueue1() { // سرخطی
    return (pl) == MaximumDayLimit && GetSupplyDemandRatioMonth() <= 100 && GetSupplyDemandRatioMonth() >= 40 && Ccy > 4 && (pl) == MaximumDayLimit && Value > 1 * BT;
}
function TsTomorrowQueueBaaz() {
    return BazeBaaz = GetSupplyDemandRatioToday() < 600 && GetSupplyDemandRatioToday() > 20 && BuyQueueDays() >= 1 && BuyQueueDays() <= 10;
}
function TsTomorrowQueueBaazBaaz() {
    return BuyQueueDays() >= 1; // && BuyQueueDays() <= 6;
}
function TsLHigh() { //  پایین‌ترین بالا
    return LHigh = (100 * (Close - Low) / Close) < 1 && Ccy > 2.5; //  LHigh = Low > Cy  ;
}
function TsLHigh() {
    LHigh = (100 * (Low - Cy) / Cy) > 1;
    // (cfield0) = Math.round( ( 100 * (Low-Cy)/Cy) );
    return LHigh;
}
function TsLcyHigh() { // مسابقه 990829 // برای پایه این ۱۰ میلیارد نبود و اون ۴٫۵ // نتیجه بد نبود ولی خوب هم نبود. مانند مسابقه ۹۹۰۸۰۲ نیست.
    return TsPreconditionMatch() && (100 * (Low - Cy) / Cy) > 4.5 && GetSupplyDemandValue() > 10 * BT;
}
function TsQueueSimple() {
    return (pd1A) == MaximumDayLimit && (qd1A) != 0; // صف خرید;
}
function TsQueueSmall() {
    return BuyQueueLight = GetSupplyDemandRatioMonth() >= 15 && GetSupplyDemandRatioMonth() <= 50;
}
function TsQueueSmall2() {
    return BuyQueueLight = GetSupplyDemandRatioMonth() >= 30 && GetSupplyDemandRatioMonth() <= 120;
}
function TsQueueSimple4() {
    return BuyQueueHeavy = (pl) == MaximumDayLimit; //&&  GetSupplyDemandRatioMonth() >=10;
}
function TsQueueSimple3() {
    return BuyQueue = GetSupplyDemandRatioMonth() >= 10;
}
function TsQueueSimple2() {
    return BuyQueue = (pl) >= MaximumDayLimit * 0.99;
}
function TsTomorrowQueue2() { //   // 990822 // وارد رایانه شده
    // TsPreconditionMatch() && TsQueueSimple3() && GetNeutralSellVolumeEachRatioTo3Month() < 70 && GetJuridicalSellVolumeRatioTo3Month() < 70;
    return TsPreconditionMatch() && TsQueueSimple4() && GetNeutralSellVolumeEachRatioTo3Month() < 100 && GetJuridicalSellVolumeRatioTo3Month() < 100;
}
function TsQueue_Buy_va_Volume_High() { //   صف خرید و حجم زیاد
    return Queue_Buy_va_Volume_High = (pl) == MaximumDayLimit && Value > 100e9;
}
function TsQueueLowVolume() {
    return (pd1A) == MaximumDayLimit && (qd1A) != 0 && Value > 1 * [is1]; // صف خرید و حجم بسیار;
}
function TsPowerfulSupply1() { // صف خرید سنگین
    return GetSupplyDemandRatioBazaar() > 100;
}
function TsPowerfulSupply() {
    return GetSupplyDemandRatioToday() < -10 && GetSupplyDemandValue() < -40040 * BT; // نیرومندترین عرضه حال حاضر *;
}
function TsPowerfulDemand2() {
    return (GetSupplyDemandRatioMonth() > 400 || GetSupplyDemandRatioBazaar() > 400) && GetSupplyDemandValue() > 500 * MT && [is5] * Close > 0.5 * BT;
}
function TsPowerfulDemand3() {
    return GetSupplyDemandRatioMonth() > 300 && GetSupplyDemandValue() / Value > 6;
}
function TsDemandWhale1() {
    return GetSupplyDemandValue() > 50 * BT;
}
function TsDemandWhale2() {
    return GetSupplyDemandValue() > 100 * BT;
}
function TsDemandWhale3() {
    return GetSupplyDemandValue() > 150 * BT;
}
function TsPowerfulDemand4() {
    return GetSupplyDemandRatioMonth() > 60 && GetSupplyDemandRatioMonth() < 110;
}
function TsPowerfulDemand5() {
    return GetSupplyDemandRatioMonth() > 15 && GetSupplyDemandRatioMonth() < 50;
}
function TsPowerfulDemand6() {
    return GetSupplyDemandRatioMonth() > 70 && GetSupplyDemandRatioMonth() < 125;
}
function TsPowerfulDemand7() {
    return (GetSupplyDemandRatioMonth() > 200 || GetSupplyDemandRatioBazaar() > 100) && GetSupplyDemandValue() > 1 * BT && [is5] * Close > 0.5e10;
}
function TsPowerfulDemandEachBuyer() { // میانگین سفارش هر کد بالا
    return (GetSupplyDemandRatioMonth() < 40 && GetSupplyDemandValue() > 1 * BT) && GetDemandEachValue() > 50 * MT; // (GetSupplyDemandRatioMonth() >30 && GetSupplyDemandRatioBazaar() > 30 && GetSupplyDemandValue()> 10e9)  && GetDemandEachValue()  > 250*MT;
}
function TsPowerfulDemand() {
    return GetSupplyDemandRatioToday() > 10 && GetSupplyDemandValue() > 40 * BT; //نیرومندترین تقاضای کنونی بازار *;
}
function TsSupplyWhale3() {
    return GetSupplyDemandValue() < -40 * BT && LastCy < -1.8;
}
function TsSupplyWhale2() {
    return GetSupplyDemandValue() < -70 * BT && LastCy < -1.8;
}
function TsSupplyWhale1() {
    return GetSupplyDemandValue() < -100 * BT && LastCy < -1.8;
}
function TsSmallSupplyEachSeller() { // میانگین سفارش هر کد پایین
    return (GetSupplyDemandRatioMonth() < -30 && GetSupplyDemandRatioBazaar() < -30 && GetSupplyDemandValue() < -1 * BT) && GetSupplyEachValue() > 25 * MT;
}
function TsPowerfulSupply() { //سفارشهای‌نیرومندفروش*
    return (GetSupplyDemandRatioMonth() < -100 || GetSupplyDemandRatioBazaar() < -100) && GetSupplyDemandValue() < -1 * BT && [is5] * Close > 0.5 * BT;
}
function TsSmallSupply() { // صف‌های سبک
    return GetSupplyDemandRatioMonth() > -10 && LastCy < -2.8 && GetNeutralRatioMonth() > 0;
}
function TsSmallSupply2() { // صف‌های سبک
    return GetSupplyDemandRatioMonth() < 0 && GetSupplyDemandRatioMonth() > -5 && LastCy < -2.9;
}
// ________________________________________________________________________________________________ روند
function TsDailyRiseWithPowerfulBuy() {
    Candle1 = Ccy > 0 && Cy > 0 && LastCy > 0;
    Nj1 = GetNeutralRatioToday() > 0 && GetJuridicalRatioToday() >= 0;
    Volume1 = GetVolume() > 2 * [is5];
    return Candle1 && Nj1 && Volume1; // هنوز روند دارند;
}
function TsRange3() {
    return Ccy < -3 && LastCy > 0; // رنج مثبت *;
}
function TsRange() {
    return TsPrecondition() && LastCy > 2.7;
}
function TsRange2() {
    return TsPrecondition() && LastCy > 5 + Ccy;
}
function TsQueueeMojadad() { // ___________________________________________ صف خرید شدن مجدد // 990912 // بد
    pop = 100 * (Open - Cy) / Cy;
    pmp = 100 * (Low - Cy) / Cy;
    maxRisePossible = 100 * (MaximumDayLimit - Cy) / Cy;
    oft = maxRisePossible / 10;
    QueueeMojadad = (LastCy > (maxRisePossible - oft)) && (pop > (maxRisePossible - oft)) && (pmp < maxRisePossible) && (pmp > maxRisePossible / 3);
    return QueueeMojadad && GetNeutralRatioMonth() > -15 && GetJuridicalRatioMonth() >  - 15; // && TsPreconditionMatch();
}
function TsQueue_foroosh_be_Buy() { //   امروز صف فروش داشته‌اند و اکنون صف خریدند
    return Queue_foroosh_be_Buy = Low == MinimumDayLimit && (pl) == MaximumDayLimit;
}
function TsNavasan_10darsad_va_mosbat() { //   نوسان ده درصدی داشته‌اند و اکنون مثبت هستند
    return navasan_10darsad_va_mosbat = Low == MinimumDayLimit && High == MaximumDayLimit && LastCy > 2 && TsPrecondition() && Ccy < 2.5;
}
function LastCHigh() { //  اختلاف میان پایانی و آخرین
    return LastCHighVar = Ccy < 2 && LastCy > 3 && LastCy < 4.9;
}
function LastCHigh1() {
    return LastCHighVar = Ccy < 1 && LastCy > 4.8;
}
function LastCHigh2() {
    return LastCHighVar = 100 * ((pl) - Low) / Close > 2;
}
function LastCHigh3() {
    return LastCHighVar = LastCy - Ccy > 2 && 100 * ((pl) - MinimumDayLimit) / Close > 2 && 100 * ((pl) - Low) / Close > 2;
}
function TsSlowPowerfulRise() {
    return LastCy > 2 && Ccy > 0 && LastCy > Ccy + 2 && Low > Cy && Value > 1 * BT;
}
function TsFalling() { //   پایانی و آخرین
    return LastCy < -2.85 && LastCy > -3.15;
}
function LastCHigh4() {
    return Akharin_BozorgtarAz_Payany = LastCy - Ccy > 1;
}
function TsSlowRising() {
    return LastCy > 2.85 && LastCy < 3.15 && GetVolumeRatioMonth() > 50 && GetVolumeRatioMonth() < 200;
}
function TsBuyQueueNjLight() {
    return TsPreconditionMatch() && NjLight && TsQueueSimple3();
}
function TsLHighastAndNotSeller() {
    return TsPreconditionMatch() && Ccy > 1 && LastCy > Ccy && GetNeutralRatioMonth() > 0 && GetNjRatioToday() > 0 && GetJuridicalRatioMonth() > 0;
}
function TsLcyLowLastHigh() { //990921مسابقه//  // افتضاح
    return TsPreconditionMatch() && Low < MaximumDayLimit && (pl) >= MaximumDayLimit * 0.99 && Close > MaximumDayLimit * 0.97 && GetSupplyDemandRatioMonth() > 1 && Value > 1 * BT && GetSupplyDemandRatioMonth() < 25 && GetVolumeRatioMonth() < 200; // && GetNeutralRatioMonth() > -20 && GetJuridicalRatioMonth() >-10   ;
;
}
function TsTaaaaaaaaaaaarkibi() {
    return TsPreconditionMatch() && (TsNjBothBuy()) && (LastCHigh4() || TsQueueSmall2() || TsVolumeHigh());
}
function TsTaaaaaaaaaaaarkibi2() { // ۹۹۰۹۲۶ // افتضاح! آخر شدم!
    // Low>0.995 * MaximumDayLimit && GetSupplyDemandRatioMonth() <10; // for buy
    SupplyDemandPercToday = 100 * GetSupplyDemandValue() / Value;
    Low >= 0.96 * MaximumDayLimit && SupplyDemandPercToday <= 10; // ۹۹۰۹۲۶ پایه
    return Low >= 0.95 * MaximumDayLimit && SupplyDemandPercToday <= 10; // ۹۹۰۹۲۶ هفتگی;
}
// ________________________________________________________________________________________________ کف‌یابی
function Llv(Days) {
    for (i = 0, low = Cy; i <= (Days); i++) {
        if ([ih][i].PriceYesterday != "undefined") {
            low = Math.min(low, [ih][i].PriceYesterday);
        }
    }
    return low;
}
function TsLlv1() {
    return llv(59) == Cy && Ccy > 0 && GetVolume() > [is5]; // چندین روز منفی و سپس حجم بسیار و مثبت خوب // رشد از کف *;
}
function TsLlv2() {
    return llv(59) == Cy && Ccy < -3 && GetVolumeRatioMonth() < 100; // کف‌یابی // چندین روز منفی و حجم کم و منفی زیاد;
}
// ____ کف یک روزه
function TsDailyFallButPowerfulBuy() {
    return (GetNeutralRatioBazaar() > 25 || GetJuridicalRatioBazaar() > 25 || GetNjRatioBazaar() > 40 || GetVolumeRatioMonth() > 600) && (TsPrecondition() && Ccy < -2); // منفی و اتفاق مثبت;
}
function TsDailyFallButPowerfulBuy2() {
    return (GetNeutralRatioBazaar() < -25 || GetJuridicalRatioBazaar() <  - 25 || GetNjRatioBazaar() <  - 40 || GetVolumeRatioMonth() < 33) && TsPrecondition() && Ccy < -2; // منفی و اتفاق منفی;
}
function TsFallRiseChangeAndVolume() {
    return Ccy < -2.5 && Value > 2 * [is1] && Ccy < LastCy - 1; // حجم بالا در منفی و آخرین بالاتر *;
}
// ____ ایده
function TsLlvIdeas____________________________________() {
    // امروز منفی بسیار باشد و کف دوره‌ای هم باشد و شیب افت اخیر هم بسیار باشد
    // چند روز منفی و خرید اندک حقیقی و فزایش اندک حجم و سایه ی بالا نو و سایه ی پایین کم
    return null;
}
// ________________________________________________________________________________________________ فیلدهای نمایشی
(cfield0) = GetNeutralText(); // (cfield0) = Neutral.Text();
(cfield1) = GetJuridicalText(); // (cfield1) = Juridical.Text();  // (cfield1) = Math.round( GetJuridicalSellVolumeRatioTo3Month());
(cfield2) = GetNjText(); // Nj.Text
(cfield2) = GetSupplyDemandText2();
(cfield2) = GetSupplyDemandText(); // (cfield2) = SupplyDemand.Text(); //
(cfield2) = GetTextEmojiByTickerSituation();
(cfield0) = GetEpsTotalText();
// ________________________________________________________________________________________________ آبجکت کردن تابع ها برای پابلیک شدن آنها
// Neutral = {};
// Neutral.Text = GetNeutralText;
// Juridical = {};
// Juridical.Text = GetJuridicalText;
// Nj = {};
// Nj.Text = GetNjText;
// SupplyDemand = {};
// SupplyDemand.Text = GetSupplyDemandText;
