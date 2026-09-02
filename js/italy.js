const START_DATE = "2027-02-06";

const SEASON = [
  ["為什麼倒過來", "最後才米蘭，購物袋不用拖兩週", "羅馬進、米蘭出。Outlet 與金四角放最後兩天，2/21 託運就走。不是因為羅馬比較好玩，是行李。"],
  ["羅馬", "先到、週日梵蒂岡休", "2/7 週日落地，梵蒂岡休。2/8 週一進館。2/11 拉特朗條約休館，當天轉佛羅倫斯。英國 half-term 約 2/13–21，羅馬前半段還好。"],
  ["佛羅倫斯／威尼斯", "博物館＋水城淡季", "嘉年華 2/9 已結束，2/15 才到威尼斯，人較少、房較好訂。不要加五漁村、阿瑪菲。"],
  ["米蘭", "最後三晚：金四角＋Cenacolo＋Serravalle", "2/18 下午到、2/19 逛街與最後的晚餐、2/20 週六 Serravalle、2/21 早飛。袋子只過一晚。"],
  ["晚上", "16:30 是館關門，不是一天結束", "18:00 aperitivo、19:30 晚餐、21:00–21:30 夜走。"],
  ["不要加的", "嘉年華舞會、五漁村、為了省 4,500 拆兩張羅馬來回", "2/6 進羅馬已放棄嘉年華。"],
];

const COMPARE = [
  ["FCO → Termini", "Leonardo Express 約 32 分", "市區定價計程車約 €50"],
  ["羅馬 → 佛羅倫斯 SMN", "Frecciarossa 約 1 時 30 分", "A1 約 3 小時＋ZTL"],
  ["佛羅倫斯 → 威尼斯 S. Lucia", "Frecciarossa 約 2 時 05 分", "開車約 3 小時；島上沒車"],
  ["威尼斯 → 米蘭 Centrale", "Frecciarossa 約 2 時 25 分", "A4 約 2 時 45 分"],
  ["米蘭 → Serravalle", "官方接駁約 1 時 15–30 分（回程寫死）", "A7 約 1 時"],
  ["Centrale → MXP", "Malpensa Express 約 50 分", "計程車約 €95–115"],
];

const BOOKINGS = [
  "現在立刻：開腳商務。去程華航 2/6 TPE→FCO（你查 121,636／人）。先確認是直飛、且週六真的有飛（CI75 冬天常是週二／週日）。回程長榮 BR96 2/21 MXP→TPE（你查約 1,940 €／人），每天有。",
  "現在立刻：羅馬 2/7–11 包棟（能到 Termini 或 metro A）、佛羅倫斯 2/11–15、威尼斯 2/15–18、米蘭杜奧莫 2/18–21。",
  "約 2026/09 下旬：最後的晚餐 2/19。官方六人同一 slot。",
  "出發前 8–12 週：梵蒂岡 2/8 週一、競技場 2/9、烏菲茲 2/12、學院 2/13。梵蒂岡不要訂 2/7 週日、不要訂 2/11。",
  "開賣就訂：三段 Freccia（2/11 羅馬→佛羅倫斯、2/15 佛羅倫斯→威尼斯、2/18 威尼斯→米蘭）。",
  "出發前 7 天：Serravalle 2/20 接駁。週六人多，但袋子隔天就上飛機。",
  "出發前 3 天：核對 BR96、Cenacolo、Freccia。",
];

const CHECKS = [
  "護照有效期 > 6 個月、申根入境空白頁",
  "華航去程電子登機證（2/6 TPE→FCO；確認直飛）",
  "長榮 BR96 電子登機證（2/21 MXP）",
  "三段 Frecciarossa 電子票",
  "梵蒂岡 2/8、競技場 2/9 官方 QR",
  "烏菲茲 2/12、學院 2/13 官方 QR",
  "《最後的晚餐》2/19 確認信",
  "米蘭大教堂屋頂 QR",
  "Serravalle 接駁 2/20（回程時刻寫死）",
  "威尼斯 vaporetto 3 日卡",
  "Leonardo Express（抵達日）＋ Malpensa Express（起飛日）",
  "包棟確認函 4 段",
  "旅行保險單（含取消）",
  "國際雙幣卡＋歐元備用現金 €300",
  "轉換插頭 Type L／C、行動電源",
  "防水外套＋防滑靴",
  "薄羽絨、手套、小孩備用乾襪",
  "Trenitalia／華航／長榮／ACTV App 已登入",
  "大箱不超過 4 顆",
  "2/20 Outlet 袋當晚進託運；2/21 只拖箱子去機場",
  "2/21 06:15 鬧鐘；Centrale→MXP Express",
];

const TICKETS = [
  {
    id: "eva",
    must: true,
    when: "現在立刻",
    title: "開腳商務：華航去羅馬 ＋ 長榮回米蘭",
    standard: "去程你查 TWD 121,636／人（2/6 TPE→FCO）。回程 EUR 1,939.81／人（2/21 MXP→TPE，約 NT$69,800）。合計約 NT$191,400，接近華航羅馬來回 188,824，但最後可以在米蘭購物。兩個 PNR。",
    premium: {
      name: "去程華航商務／回程長榮皇家商務",
      rec: true,
      note: "去程夜航落地羅馬。回程 BR96 早班，商務可睡。拆票不能互用里程劃位。"
    }
  },
  {
    id: "hotel",
    must: true,
    when: "現在立刻",
    title: "住宿——四大兩小優先包棟",
    standard: "羅馬 4 晚＋佛羅倫斯 4＋威尼斯 3＋米蘭 3。米蘭住杜奧莫，2/21 早飛再地鐵去 Centrale。Booking 整套房或 Airbnb。",
    premium: {
      name: "米蘭 Park Hyatt；羅馬 Hassler 家庭套房",
      rec: true,
      note: "購物三晚住金四角旁邊。六人問套房或整層。"
    }
  },
  {
    id: "vatican",
    must: true,
    when: "出發前 8–12 週",
    title: "梵蒂岡　2/8（一）",
    standard: "2/7 週日休、2/11 拉特朗條約休。鎖定週一。museivaticani.va。",
    premium: { name: "官方早場", rec: true, note: "落地隔天，早場較空。" }
  },
  {
    id: "colosseo",
    must: true,
    when: "出發前 8 週",
    title: "競技場聯票　2/9（二）",
    standard: "colosseo.it。六人同一場。",
    premium: { name: "地下／競技場層", rec: true, note: "早賣完。" }
  },
  {
    id: "uffizi",
    must: true,
    when: "出發前 8 週",
    title: "烏菲茲　2/12　學院　2/13",
    standard: "官方。兩館不要同一天。",
    premium: null
  },
  {
    id: "supper",
    must: true,
    when: "約 2026/09 下旬",
    title: "《最後的晚餐》2/19",
    standard: "人已在米蘭。官方 15 分鐘、六人同一 slot。不要排 2/18 抵達當天早場。",
    premium: null
  },
  {
    id: "duomo-mi",
    must: true,
    when: "出發前 2–4 週",
    title: "米蘭大教堂屋頂　2/19",
    standard: "最後的晚餐之後走屋頂＋金四角。",
    premium: null
  },
  {
    id: "serravalle",
    must: true,
    when: "出發前 7 天",
    title: "Serravalle　2/20 週六",
    standard: "官方接駁 Centrale 9:00／9:30，回程寫死。週六人多，但袋子隔天托運。成人約 €25。",
    premium: { name: "Fidenza 較早回", rec: false, note: "品牌較少。有整天就 Serravalle。" }
  },
  {
    id: "freccia",
    must: true,
    when: "開賣就訂",
    title: "Frecciarossa 三段（由南往北）",
    standard: "2/11 羅馬→佛羅倫斯、2/15 佛羅倫斯→威尼斯、2/18 威尼斯→米蘭。",
    premium: { name: "Business", rec: false, note: "家庭意義不大。" }
  },
];
const DAYS = [
  {
    n: 1, city: "台北", title: "大年夜夜航，飛羅馬",
    stay: "華航機上過夜",
    cover: "photos/italy/rome-colosseum.jpg",
    rent: { yes: false, label: "不租車", reason: "出國日只處理桃園。" },
    hotel: { name: "機上", arrive: "次日清晨羅馬 FCO", checkIn: "—" },
    photos: [
      { src: "photos/italy/rome-colosseum.jpg", cap: "明天落地羅馬，不是米蘭" },
      { src: "photos/italy/frecciarossa.jpg", cap: "之後由南往北坐 Freccia" },
    ],
    transport: {
      mode: "飛機",
      detail: "華航 TPE→FCO（你查的 2/6 商務）。典型 CI75 約 23:25→07:15+1，以你訂到的那班為準。先確認週六是直飛。",
      drive: "不適用",
    },
    slots: [
      { t: "19:00", title: "離開台北市區", d: "大年夜塞車。華航在 T1，不是長榮 T2。" },
      { t: "20:30", title: "桃園 T1 報到", d: "起飛前 3 小時。大箱不超過 4 顆。" },
      { t: "23:00", title: "登機", d: "落地羅馬週日，梵蒂岡休，節奏可以慢。" },
      { t: "23:25", title: "起飛（以機票為準）", d: "CET＝台灣 −7。", buf: true },
    ],
  },
  {
    n: 2, city: "羅馬", title: "落地、特拉斯提弗列（梵蒂岡休）",
    stay: "Prati／metro A，連住 4 晚",
    cover: "photos/italy/rome-trastevere.jpg",
    rent: { yes: false, label: "不租車", reason: "Leonardo Express。週日梵蒂岡休，當恢復日。" },
    hotel: { name: "整套公寓，能到 Termini 或 metro A", arrive: "15:00 入住；先寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/rome-trastevere.jpg", cap: "特拉斯提弗列，週日晚上吃飯走路" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "路過萬神殿外觀即可" },
      { src: "photos/italy/rome-vatican.jpg", cap: "梵蒂岡明天再進" },
    ],
    transport: {
      mode: "Leonardo Express",
      detail: "FCO → Termini 約 32 分、每 15 分。六件箱出站叫車去公寓。",
      drive: "定價計程車約 €50。",
    },
    slots: [
      { t: "07:15", title: "FCO T3 抵達", d: "以你的航班為準。申根＋行李 60–90 分。" },
      { t: "09:00", title: "Leonardo Express", d: "不要在租車櫃台停留。", buf: true },
      { t: "10:00", title: "Termini 出站叫車", d: "不要石板路拖箱。" },
      { t: "11:00", title: "寄行李、午餐、短睡", d: "週日梵蒂岡休，禁止暴走。" },
      { t: "15:00", title: "入住", d: "鬧鐘設。傍晚再出門。" },
      { t: "16:30", title: "特拉斯提弗列散步", d: "萬神殿可路過外觀。" },
      { t: "18:00", title: "aperitivo", d: "Piazza Santa Maria。" },
      { t: "19:45", title: "晚餐（訂位）", d: "明天梵蒂岡 07:40。" },
      { t: "21:15", title: "河岸走回", d: "22:00 睡。" },
    ],
  },
  {
    n: 3, city: "羅馬", title: "梵蒂岡博物館＋西斯汀",
    stay: "羅馬第 2 晚　2/8 週一",
    cover: "photos/italy/rome-vatican.jpg",
    rent: { yes: false, label: "不租車", reason: "metro A 或走路。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-vatican.jpg", cap: "週一開館。2/11 休，所以必須今天或明天" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "下午不要再排遠" },
    ],
    transport: { mode: "步行／地鐵 A", detail: "Ottaviano／Cipro。入口 Viale Vaticano。", drive: "沒有停車場這回事。" },
    slots: [
      { t: "07:40", title: "出發", d: "肩、膝蓋住。六人同一時段。" },
      { t: "08:30", title: "梵蒂岡博物館", d: "先拉斐爾廳→西斯汀。" },
      { t: "11:30", title: "西斯汀", d: "禁拍。出來可進聖伯多祿，量力。" },
      { t: "13:30", title: "午餐", d: "不要加競技場。" },
      { t: "15:30", title: "聖天使堡外觀＋天使橋", d: "家庭走外觀就夠。" },
      { t: "17:30", title: "聖伯多祿廣場黃昏", d: "免費。" },
      { t: "19:00", title: "Prati 晚餐", d: "Via Cola di Rienzo。" },
      { t: "21:00", title: "回公寓", d: "明天競技場。" },
    ],
  },
  {
    n: 4, city: "羅馬", title: "競技場、廣場、帕拉提諾",
    stay: "羅馬第 3 晚　2/9 週二",
    cover: "photos/italy/rome-colosseum.jpg",
    rent: { yes: false, label: "不租車", reason: "metro B Colosseo。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-colosseum.jpg", cap: "官方聯票含廣場與帕拉提諾" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "下午不要再加長隊" },
    ],
    transport: { mode: "地鐵 B", detail: "時段提前 20 分。", drive: "ZTL。" },
    slots: [
      { t: "08:40", title: "競技場入場", d: "家庭 90 分。" },
      { t: "10:30", title: "廣場＋帕拉提諾", d: "同一張聯票。" },
      { t: "13:00", title: "午餐", d: "離開遺址再吃。" },
      { t: "15:00", title: "Campidoglio", d: "看古羅馬屋頂，免費。" },
      { t: "17:30", title: "競技場外牆夜燈", d: "不用門票。" },
      { t: "19:30", title: "Monti 晚餐", d: "競技場後面街區。" },
      { t: "21:15", title: "地鐵回", d: "21:30 到家。" },
    ],
  },
  {
    n: 5, city: "羅馬", title: "逛街：西班牙階梯、特雷維、萬神殿",
    stay: "羅馬第 4 晚　2/10 週三",
    cover: "photos/italy/rome-spanish.jpg",
    rent: { yes: false, label: "不租車", reason: "整天走路。大買留米蘭 Outlet。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-spanish.jpg", cap: "Via Condotti 櫥窗" },
      { src: "photos/italy/rome-trevi.jpg", cap: "特雷維改黃昏" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "萬神殿" },
    ],
    transport: { mode: "地鐵 A ＋步行", detail: "Spagna 站。", drive: "不需要。" },
    slots: [
      { t: "09:30", title: "西班牙階梯", d: "不要坐階梯吃東西。" },
      { t: "10:00", title: "Via Condotti 櫥窗", d: "旗艦看窗。折扣明天以後在米蘭。" },
      { t: "11:00", title: "Via del Corso", d: "平價、小孩衣服。" },
      { t: "12:30", title: "午餐", d: "離開 Corso 一條巷。" },
      { t: "14:30", title: "萬神殿", d: "看穹頂。" },
      { t: "16:00", title: "Piazza Navona", d: "坐著等天黑。" },
      { t: "17:40", title: "特雷維夜燈", d: "丟幣就走。" },
      { t: "19:30", title: "晚餐", d: "訂位。明天 2/11 梵蒂岡休，轉佛羅倫斯。" },
      { t: "21:00", title: "回公寓打包", d: "明天 Freccia。" },
    ],
  },
  {
    n: 6, city: "佛羅倫斯", title: "轉場（梵蒂岡這天休館）",
    stay: "Oltrarno／SMN，連住 4 晚　2/11 週四",
    cover: "photos/italy/florence-ponte.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 約 1 時 30 分。2/11 人在火車上，剛好避開梵蒂岡休館。" },
    hotel: { name: "整套公寓", arrive: "約 13:30–14:30", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "羅馬→佛羅倫斯約 1 時 30 分" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋，下午只走外觀" },
      { src: "photos/italy/florence-duomo.jpg", cap: "主教堂外觀" },
    ],
    transport: { mode: "Frecciarossa", detail: "Termini 約 10:00 → SMN 約 11:30。Oltrarno 過河叫車。", drive: "ZTL。" },
    slots: [
      { t: "09:00", title: "羅馬退房", d: "Termini 對號。" },
      { t: "10:00", title: "Freccia 往 SMN", d: "這段最短。" },
      { t: "11:40", title: "SMN 抵達", d: "計程車去公寓。" },
      { t: "13:00", title: "寄行李、午餐", d: "不進烏菲茲。" },
      { t: "16:00", title: "主教堂外觀＋舊橋", d: "建立方位。" },
      { t: "17:40", title: "舊橋黃昏", d: "二月日落約 17:40。" },
      { t: "18:30", title: "Santo Spirito aperitivo", d: "廣場坐。" },
      { t: "19:45", title: "Oltrarno 晚餐", d: "明天烏菲茲早場。" },
      { t: "21:15", title: "阿諾河夜走", d: "22:00 睡。" },
    ],
  },
  {
    n: 7, city: "佛羅倫斯", title: "烏菲茲",
    stay: "佛羅倫斯第 2 晚　2/12 週五",
    cover: "photos/italy/florence-uffizi.jpg",
    rent: { yes: false, label: "不租車", reason: "全步行。不要同一天加大衛。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-uffizi.jpg", cap: "波提切利在這裡，大衛不在" },
      { src: "photos/italy/florence-duomo.jpg", cap: "出來後看主教堂" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋黃昏" },
    ],
    transport: { mode: "步行", detail: "公寓到烏菲茲 10–20 分。", drive: "ZTL。" },
    slots: [
      { t: "08:40", title: "烏菲茲門口", d: "提前 15 分。" },
      { t: "09:00", title: "烏菲茲", d: "家庭 2.5 小時。" },
      { t: "12:00", title: "午餐", d: "走出走廊再吃。" },
      { t: "14:30", title: "主教堂內部或鐘樓", d: "圓頂 463 級，小孩可改鐘樓。" },
      { t: "16:30", title: "舊橋黃昏", d: "金鋪看就好。" },
      { t: "19:30", title: "晚餐", d: "南岸或聖十字。" },
      { t: "21:00", title: "主教堂夜燈", d: "22:00 回。" },
    ],
  },
  {
    n: 8, city: "佛羅倫斯", title: "大衛＋Oltrarno 工坊",
    stay: "佛羅倫斯第 3 晚　2/13 週六",
    cover: "photos/italy/florence-david.jpg",
    rent: { yes: false, label: "不租車", reason: "San Lorenzo 攤不要排。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-david.jpg", cap: "學院 Accademia" },
      { src: "photos/italy/florence-oltrarno.jpg", cap: "Santo Spirito 工坊" },
      { src: "photos/italy/florence-ponte.jpg", cap: "過舊橋去南岸" },
    ],
    transport: { mode: "步行", detail: "學院北岸，中午過河。", drive: "不需要。" },
    slots: [
      { t: "08:50", title: "學院", d: "約 90 分。" },
      { t: "11:00", title: "Mercato Centrale 二樓午餐", d: "戶外皮件攤不是工坊貨。" },
      { t: "13:30", title: "Via Tornabuoni 櫥窗", d: "40 分。" },
      { t: "15:00", title: "Oltrarno 工坊逛街", d: "皮件、紙品、金工。" },
      { t: "18:00", title: "Pitti 外觀", d: "Boboli 冬天約 16:30 關。" },
      { t: "19:30", title: "Oltrarno 晚餐", d: "袋先放回。" },
      { t: "21:00", title: "Santo Spirito 夜廣場", d: "22:00 回。" },
    ],
  },
  {
    n: 9, city: "佛羅倫斯", title: "情人節：錫耶納選配",
    stay: "佛羅倫斯第 4 晚　2/14 週日",
    cover: "photos/italy/siena.jpg",
    rent: { yes: false, label: "不租車", reason: "巴士約 1 時 15 分。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/siena.jpg", cap: "錫耶納 Campo" },
      { src: "photos/italy/florence-duomo.jpg", cap: "不出城就補圓頂" },
      { src: "photos/italy/florence-ponte.jpg", cap: "情人節舊橋" },
    ],
    transport: { mode: "巴士或步行", detail: "Tiemme／Flixbus。", drive: "ZTL。" },
    slots: [
      { t: "08:30", title: "選配 A：錫耶納", d: "Campo。16:30 前返。" },
      { t: "09:30", title: "選配 B：不出城", d: "圓頂／補買。" },
      { t: "17:30", title: "打包", d: "明天去威尼斯。" },
      { t: "19:30", title: "情人節晚餐（訂位）", d: "這晚餐廳滿。" },
      { t: "21:00", title: "舊橋夜走", d: "明天 10:00 SMN。" },
    ],
  },
  {
    n: 10, city: "威尼斯", title: "轉場水城（嘉年華已過）",
    stay: "Cannaregio／Dorsoduro，連住 3 晚　2/15 週一",
    cover: "photos/italy/venice-canal.jpg",
    rent: { yes: false, label: "不租車", reason: "島上沒車。嘉年華 2/9 已結束。" },
    hotel: { name: "vaporetto 站 5 分內整套", arrive: "約 14:00–15:00", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "佛羅倫斯→威尼斯約 2 時 05 分" },
      { src: "photos/italy/venice-sanmarco.jpg", cap: "聖馬可，沒有面具高峰" },
      { src: "photos/italy/venice-canal.jpg", cap: "大運河" },
    ],
    transport: { mode: "Frecciarossa ＋ vaporetto", detail: "SMN 約 10:25 → S. Lucia 約 12:30。先買 3 日卡。", drive: "島上沒車。" },
    slots: [
      { t: "09:20", title: "SMN 退房", d: "對號。" },
      { t: "10:25", title: "Freccia 往威尼斯", d: "約 2 小時。" },
      { t: "12:40", title: "vaporetto 去公寓", d: "不要抬箱過三座橋。" },
      { t: "14:00", title: "寄行李、午餐", d: "不排總督宮。" },
      { t: "16:00", title: "聖馬可外觀", d: "建立方位。" },
      { t: "18:00", title: "aperitivo", d: "離開廣場兩條街。" },
      { t: "19:30", title: "晚餐", d: "Cannaregio／Dorsoduro。" },
      { t: "21:00", title: "夜 vaporetto 回", d: "22:00 睡。" },
    ],
  },
  {
    n: 11, city: "威尼斯", title: "總督宮＋Mercerie",
    stay: "威尼斯第 2 晚　2/16 週二",
    cover: "photos/italy/venice-rialto.jpg",
    rent: { yes: false, label: "不租車", reason: "走路＋vaporetto。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/venice-sanmarco.jpg", cap: "總督宮" },
      { src: "photos/italy/venice-rialto.jpg", cap: "里亞托逛街" },
      { src: "photos/italy/venice-canal.jpg", cap: "1 號線看燈" },
    ],
    transport: { mode: "步行／vaporetto", detail: "Mercerie 約 15–20 分。", drive: "無法駕駛。" },
    slots: [
      { t: "09:00", title: "總督宮", d: "官方票。" },
      { t: "12:30", title: "午餐", d: "離開廣場。" },
      { t: "15:00", title: "Mercerie → 里亞托", d: "紙品、面具工坊。大買仍留米蘭。" },
      { t: "17:30", title: "vaporetto 1 號線", d: "天黑看燈。" },
      { t: "18:45", title: "Cannaregio aperitivo", d: "河邊。" },
      { t: "19:45", title: "晚餐", d: "避開英文套餐。" },
      { t: "21:15", title: "走回", d: "22:00 睡。" },
    ],
  },
  {
    n: 12, city: "威尼斯", title: "島上走或 Murano 選配",
    stay: "威尼斯第 3 晚　2/17 週三",
    cover: "photos/italy/venice-canal.jpg",
    rent: { yes: false, label: "不租車", reason: "單島即可。不要兩島。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/venice-canal.jpg", cap: "水城走就夠" },
      { src: "photos/italy/venice-sanmarco.jpg", cap: "或再走聖馬可" },
      { src: "photos/italy/venice-rialto.jpg", cap: "晚餐訂位" },
    ],
    transport: { mode: "vaporetto", detail: "3 日卡含穆拉諾。", drive: "無法駕駛。" },
    slots: [
      { t: "09:30", title: "選配 A：Murano 半日", d: "一家工坊。14:00 前回。" },
      { t: "10:00", title: "選配 B：Dorsoduro 走", d: "不進第二大館也沒關係。" },
      { t: "18:00", title: "打包", d: "明天 Freccia 去米蘭，開始購物段。" },
      { t: "19:30", title: "晚餐", d: "訂位。" },
      { t: "21:30", title: "回公寓", d: "明天 09:00 S. Lucia。" },
    ],
  },
  {
    n: 13, city: "米蘭", title: "轉場，金四角開始",
    stay: "杜奧莫／金四角，連住 3 晚　2/18 週四",
    cover: "photos/italy/milan-montenapoleone.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 直達 Centrale。購物三晚住杜奧莫。" },
    hotel: { name: "杜奧莫步行 10 分內整套", arrive: "約 14:00–15:00", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "威尼斯→米蘭約 2 時 25 分" },
      { src: "photos/galleria.jpg", cap: "迴廊，傍晚開始逛" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "金四角，袋子只從這裡帶回家" },
    ],
    transport: { mode: "Frecciarossa ＋地鐵", detail: "S. Lucia 約 10:35 → Centrale 約 13:00。地鐵或短程計程車去杜奧莫。", drive: "ZTL。" },
    slots: [
      { t: "08:20", title: "威尼斯退房", d: "vaporetto 去車站。" },
      { t: "10:35", title: "Freccia 往米蘭", d: "約 2 時 25 分。" },
      { t: "13:10", title: "Centrale → 杜奧莫", d: "寄行李。今天不當 Outlet 日。" },
      { t: "15:30", title: "迴廊＋Montenapoleone 櫥窗", d: "記店。大買明天進店、後天 Outlet。" },
      { t: "18:30", title: "金四角 aperitivo", d: "Cova 或附近。" },
      { t: "19:45", title: "晚餐", d: "迴廊／Brera。明天最後的晚餐早場或下午場。" },
      { t: "21:15", title: "杜奧莫夜燈", d: "22:00 睡。" },
    ],
  },
  {
    n: 14, city: "米蘭", title: "最後的晚餐、屋頂、金四角進店",
    stay: "米蘭第 2 晚　2/19 週五",
    cover: "photos/last-supper.jpg",
    rent: { yes: false, label: "不租車", reason: "步行＋地鐵。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/last-supper.jpg", cap: "15 分鐘，六人同一場" },
      { src: "photos/duomo-roof.jpg", cap: "屋頂選電梯" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "今天進店，過季留明天 Outlet" },
      { src: "photos/grazie.jpg", cap: "Santa Maria delle Grazie" },
    ],
    transport: { mode: "步行／地鐵", detail: "杜奧莫 → 感恩教堂約 20–25 分。", drive: "不需要。" },
    slots: [
      { t: "08:40", title: "出發感恩教堂", d: "場次以搶到的為準。上午場則屋頂下午。" },
      { t: "09:15", title: "《最後的晚餐》", d: "約 15 分。" },
      { t: "10:30", title: "大教堂內部＋屋頂", d: "電梯。" },
      { t: "13:00", title: "午餐", d: "迴廊。" },
      { t: "15:00", title: "金四角進店／Corso Buenos Aires", d: "旗艦今天買。平價走 Buenos Aires。不要兩條都爆走。" },
      { t: "18:00", title: "Brera aperitivo", d: "畫廊外觀即可。" },
      { t: "19:30", title: "Navigli 晚餐", d: "明天 Outlet 9:00 接駁，21:30 前回。" },
    ],
  },
  {
    n: 15, city: "米蘭", title: "Serravalle Outlet（袋子明天托運）",
    stay: "米蘭第 3 晚　2/20 週六",
    cover: "photos/centrale.jpg",
    rent: { yes: false, label: "不租車", reason: "官方接駁。明天 11:00 國際線，不要租車還車。" },
    hotel: { name: "續住；今晚收袋進託運", arrive: "接駁回程後回公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/centrale.jpg", cap: "接駁多半從 Centrale 出發" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "過季、折扣今天買" },
      { src: "photos/duomo.jpg", cap: "明天早飛，21:30 前要回杜奧莫公寓" },
    ],
    transport: {
      mode: "官方 Outlet 接駁",
      detail: "Centrale 9:00 或 9:30，約 1 時 15–30 分。回程 16:15／17:15 寫死。週六人多，但這是唯一「買完隔天就上飛機」的日子。成人約 €25。",
      drive: "A7 約 1 時。明天早飛不租。",
    },
    slots: [
      { t: "08:30", title: "Centrale 接駁點", d: "地鐵去車站。箱留公寓。" },
      { t: "09:00", title: "去 Serravalle", d: "先攻寫好的 4 個品牌。" },
      { t: "10:15", title: "開門", d: "冬末 saldi 可能還在。戶外，穿防寒。" },
      { t: "13:00", title: "午餐＋退稅", d: "Global Blue 現場做完。不要指望明天 MXP 再排。" },
      { t: "16:15", title: "票面回程", d: "17:15 也行。19:15 太晚。", buf: true },
      { t: "18:30", title: "回公寓收箱", d: "袋進託運。這就是「最後才買、不用拖兩週」。" },
      { t: "19:30", title: "杜奧莫附近晚餐", d: "不要再跑 Navigli。" },
      { t: "21:30", title: "睡覺", d: "06:15 起床。" },
    ],
  },
  {
    n: 16, city: "台北方向", title: "米蘭早班起飛",
    stay: "BR96 機上（2/22 清晨抵桃園）",
    cover: "photos/duomo.jpg",
    rent: { yes: false, label: "不租車", reason: "Centrale Express 是唯一正確答案。" },
    hotel: { name: "機上", arrive: "2/22 約 06:10 桃園 T2", checkIn: "—" },
    photos: [
      { src: "photos/centrale.jpg", cap: "Malpensa Express" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "購物袋已在託運裡" },
      { src: "photos/italy/rome-colosseum.jpg", cap: "這趟從羅馬開始" },
    ],
    transport: {
      mode: "Malpensa Express ＋ BR96",
      detail: "地鐵或短程車去 Centrale，約 07:00 Express → MXP 07:50。BR96 冬天約 11:00 起飛，TPE 2/22 06:10。長榮 T2。",
      drive: "誤火車才叫計程車，約 €95–115。",
    },
    slots: [
      { t: "06:15", title: "起床退房", d: "護照、登機證、水。Outlet 袋已在箱。" },
      { t: "06:40", title: "去 Centrale", d: "杜奧莫地鐵 M3 約 10 分。" },
      { t: "07:00", title: "Malpensa Express", d: "約 50 分。誤點下一班仍夠。", buf: true },
      { t: "08:10", title: "MXP T1 報到", d: "長榮。" },
      { t: "11:00", title: "BR96 起飛", d: "時區改回台灣。" },
      { t: "2/22 06:10", title: "桃園 T2", d: "長榮航廈。" },
    ],
  },
];

const ROUTE = [
  ["D1 2/6", "台北夜航→羅馬 FCO"],
  ["D2–5", "羅馬（梵蒂岡 2/8）"],
  ["D6–9", "佛羅倫斯＋工坊"],
  ["D10–12", "威尼斯（嘉年華後）"],
  ["D13–15", "米蘭金四角＋Serravalle"],
  ["D16 2/21", "MXP BR96 飛桃園"],
];
const WEEK = ["日", "一", "二", "三", "四", "五", "六"];

function addDays(iso, n) {
  const d = new Date(iso + "T12:00:00");
  d.setDate(d.getDate() + n);
  return d;
}
function fmtDate(d) {
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}（${WEEK[d.getDay()]}）`;
}

function render() {
  const start = START_DATE;
  document.getElementById("start-date").value = START_DATE;
  document.getElementById("stats").innerHTML = [
    ["出發", "2027.02.06"],
    ["地面", "14 晚"],
    ["住宿", "4 段包棟"],
    ["回程", "米蘭 MXP"],
  ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  const sg = document.getElementById("season-grid");
  if (sg) {
    sg.innerHTML = SEASON.map(([place, tag, body]) => `
      <article class="season-card">
        <p class="tag">${tag}</p>
        <h3>${place}</h3>
        <p>${body}</p>
      </article>`).join("");
  }

  const tg = document.getElementById("ticket-list");
  if (tg) {
    tg.innerHTML = TICKETS.map((tk) => `
      <article class="ticket ${tk.must ? "must" : ""} ${tk.premium ? "has-premium" : ""}">
        <p class="when">${tk.must ? "必訂" : "建議"}　·　${tk.when}</p>
        <h3>${tk.title}</h3>
        <p>${tk.standard}</p>
        ${tk.premium ? `<div class="premium ${tk.premium.rec ? "rec" : ""}"><strong>高級艙等：${tk.premium.name}</strong><p>${tk.premium.note}</p></div>` : ""}
      </article>`).join("");
  }

  document.getElementById("route-line").innerHTML = ROUTE.map(
    ([d, t]) => `<li><b>${d}</b>${t}</li>`
  ).join("");

  document.getElementById("compare-body").innerHTML = COMPARE.map(
    (r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`
  ).join("");

  document.getElementById("booking-list").innerHTML = BOOKINGS.map((b) => `<li>${b}</li>`).join("");

  const saved = JSON.parse(localStorage.getItem("j-check-italy") || "{}");
  document.getElementById("check-grid").innerHTML = CHECKS.map((c, i) => `
    <label><input type="checkbox" data-i="${i}" ${saved[i] ? "checked" : ""} />${c}</label>
  `).join("");

  const rail = document.getElementById("day-rail");
  const list = document.getElementById("day-list");
  rail.innerHTML = "";
  list.innerHTML = "";

  DAYS.forEach((day, idx) => {
    const dateLabel = start ? fmtDate(addDays(start, idx)) : `第 ${day.n} 天`;
    const a = document.createElement("a");
    a.href = `#day-${day.n}`;
    a.innerHTML = `D${day.n}<small>${day.city}</small>`;
    a.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach((d) => d.classList.remove("open"));
      const target = document.getElementById(`day-${day.n}`);
      if (target) {
        target.classList.add("open");
        target.querySelector(".day-summary").setAttribute("aria-expanded", "true");
      }
    });
    rail.appendChild(a);

    const el = document.createElement("article");
    el.className = "day" + (idx === 1 ? " open" : "");
    el.id = `day-${day.n}`;
    el.innerHTML = `
      <button class="day-summary" type="button" aria-expanded="${idx === 1}">
        <img class="day-thumb" src="${day.cover}" alt="${day.title}" onerror="this.onerror=null;this.src='photos/duomo.jpg'" />
        <div class="day-meta">
          <h3>D${day.n}　${day.city}　${day.title}</h3>
          <p>${dateLabel}　·　${day.stay}</p>
        </div>
        <div class="pills">
          <span class="pill ${day.rent.yes ? "ok" : "no"}">${day.rent.label}</span>
          <span class="pill hotel">飯店 ${day.hotel.checkIn === "已入住" || day.hotel.checkIn === "—" ? day.hotel.arrive : day.hotel.checkIn + " 入住"}</span>
        </div>
      </button>
      <div class="day-body">
        <div class="day-grid">
          <div>
            <div class="photos">
              ${day.photos.map((p) => `
                <figure>
                  <img src="${p.src}" alt="${p.cap}" data-cap="${p.cap}" onerror="this.onerror=null;this.src='photos/duomo.jpg'" />
                  <figcaption>${p.cap}</figcaption>
                </figure>`).join("")}
            </div>
            <ol class="timeline">
              ${day.slots.map((s) => `
                <li class="${s.buf ? "buf" : ""}">
                  <time>${s.t}</time>
                  <div>
                    <div class="tl-title">${s.title}</div>
                    <div class="tl-detail">${s.d}</div>
                  </div>
                </li>`).join("")}
            </ol>
          </div>
          <aside>
            <div class="transport-box">
              <h4>交通　／　要不要租車</h4>
              <dl class="kv">
                <dt>裁決</dt><dd><strong>${day.rent.label}</strong></dd>
                <dt>大眾運輸</dt><dd>${day.transport.detail}</dd>
                <dt>若開車</dt><dd>${day.transport.drive}</dd>
              </dl>
              <p class="reason">${day.rent.reason}</p>
            </div>
            <div class="hotel-box">
              <h4>飯店抵達</h4>
              <dl class="kv">
                <dt>住宿</dt><dd>${day.hotel.name}</dd>
                <dt>抵達／入住</dt><dd>${day.hotel.arrive}</dd>
                <dt>標準 check-in</dt><dd>${day.hotel.checkIn}</dd>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    `;
    el.querySelector(".day-summary").addEventListener("click", () => {
      const open = el.classList.toggle("open");
      el.querySelector(".day-summary").setAttribute("aria-expanded", open);
    });
    list.appendChild(el);
  });

  bindLightbox();
}

function bindLightbox() {
  const box = document.getElementById("lightbox");
  const img = box.querySelector("img");
  const p = box.querySelector("p");
  document.querySelectorAll(".photos img").forEach((el) => {
    el.addEventListener("click", () => {
      img.src = el.src;
      img.alt = el.alt;
      p.textContent = el.dataset.cap || el.alt;
      box.hidden = false;
    });
  });
  box.querySelector(".lb-close").onclick = () => { box.hidden = true; };
  box.onclick = (e) => { if (e.target === box) box.hidden = true; };
}

function loadCredits() {
  fetch("photos/italy-credits.json")
    .then((r) => r.ok ? r.json() : [])
    .then((rows) => {
      const ul = document.getElementById("credit-list");
      if (!rows.length) {
        ul.innerHTML = "<li>照片來自 Wikimedia Commons，授權見各檔案頁。米蘭圖與瑞士頁共用。</li>";
        return;
      }
      ul.innerHTML = rows.map((c) => {
        const artist = (c.artist || "").replace(/<[^>]+>/g, "");
        return `<li><a href="${c.commons}" target="_blank" rel="noopener">${c.file}</a>　${c.license || ""}　${artist}</li>`;
      }).join("") + "<li>米蘭大教堂、迴廊、最後的晚餐等與瑞士頁共用，見 photos/credits.json。</li>";
    })
    .catch(() => {
      document.getElementById("credit-list").innerHTML = "<li>Wikimedia Commons</li>";
    });
}

document.getElementById("check-grid").addEventListener("change", (e) => {
  if (e.target.matches("input[type=checkbox]")) {
    const saved = JSON.parse(localStorage.getItem("j-check-italy") || "{}");
    saved[e.target.dataset.i] = e.target.checked;
    localStorage.setItem("j-check-italy", JSON.stringify(saved));
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") document.getElementById("lightbox").hidden = true;
});

const heroCycle = [
  ["photos/italy/venice-sanmarco.jpg", "威尼斯聖馬可廣場"],
  ["photos/last-supper.jpg", "最後的晚餐"],
  ["photos/italy/florence-duomo.jpg", "佛羅倫斯主教堂"],
  ["photos/italy/rome-colosseum.jpg", "羅馬競技場"],
  ["photos/italy/rome-spanish.jpg", "西班牙階梯"],
  ["photos/italy/rome-vatican.jpg", "梵蒂岡聖伯多祿"],
];
let heroI = 0;
setInterval(() => {
  heroI = (heroI + 1) % heroCycle.length;
  const img = document.getElementById("hero-img");
  img.src = heroCycle[heroI][0];
  img.alt = heroCycle[heroI][1];
  const cap = img.parentElement.querySelector("figcaption");
  if (cap) cap.textContent = heroCycle[heroI][1] + "　·　Wikimedia Commons 實拍";
}, 7000);

render();
loadCredits();
