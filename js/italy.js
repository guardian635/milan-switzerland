const START_DATE = "2027-02-06";

const SEASON = [
  ["為什麼倒過來", "最後才米蘭，購物袋不用拖兩週", "羅馬進、米蘭出。Outlet 與金四角放最後兩天，2/21 託運就走。不是因為羅馬比較好玩，是行李。"],
  ["羅馬", "四晚：梵蒂岡、競技場、龐貝", "2/7 落地梵蒂岡休。2/8 梵蒂岡、2/9 競技場、2/10 龐貝＋拿坡里當日回。天空之城拿掉，多的一晚給佛羅倫斯去比薩。"],
  ["佛羅倫斯", "四晚：烏菲茲、比薩、大衛", "2/11 轉場、2/12 烏菲茲、2/13 比薩斜塔、2/14 情人節大衛＋Oltrarno。錫耶納仍刪。"],
  ["米蘭", "最後三晚：金四角＋Cenacolo＋Serravalle", "2/18 下午到、2/19 逛街與最後的晚餐、2/20 週六 Serravalle、2/21 早飛。袋子只過一晚。"],
  ["晚上", "16:30 是館關門，不是一天結束", "18:00 aperitivo、19:30 晚餐、21:00–21:30 夜走。"],
  ["不要加的", "嘉年華舞會、五漁村、為了省 4,500 拆兩張羅馬來回", "2/6 進羅馬已放棄嘉年華。"],
];

const COMPARE = [
  ["FCO → Termini", "Leonardo Express 約 32 分（採用）", "定價計程車約 €50；六人加箱通常兩台"],
  ["羅馬 → 龐貝／拿坡里", "Freccia 約 1 時 10 分（採用）", "拿坡里出站兩台計程車去遺址。不要 Circumvesuviana"],
  ["羅馬 → 佛羅倫斯 SMN", "Frecciarossa 約 1 時 30 分（採用）", "A1 約 3 小時＋ZTL，不自己開"],
  ["佛羅倫斯 → 比薩", "Regionale 約 1 時–1 時 15 分（採用）", "出站兩台計程車去斜塔約 10 分"],
  ["佛羅倫斯 → 威尼斯 S. Lucia", "Frecciarossa 約 2 時 05 分（採用）", "島上沒車"],
  ["S. Lucia → 公寓（帶大箱）", "vaporetto 有大箱限制", "水上計程車＝威尼斯的計程車，車站碼頭現場叫"],
  ["威尼斯 → 米蘭 Centrale", "Frecciarossa 約 2 時 25 分（採用）", "A4 約 2 時 45 分，不自己開"],
  ["米蘭 → Serravalle", "官方接駁約 1 時 15–30 分（回程寫死）", "這天箱留公寓，接駁即可"],
  ["杜奧莫 → MXP T1", "地鐵搬四箱不要", "Free Now／兩台計程車約 50 分。Uber 在米蘭是 Black／Van，更貴"],
];

const BOOKINGS = [
  "現在立刻：開腳商務。去程華航 2/6 TPE→FCO（你查 121,636／人）。先確認是直飛、且週六真的有飛（CI75 冬天常是週二／週日）。回程長榮 BR96 2/21 MXP→TPE（你查約 1,940 €／人），每天有。冬令班次目前 11:00，以機票為準。",
  "現在立刻：羅馬 2/7–11 包棟（4 晚，能到 Termini）、佛羅倫斯 2/11–15（4 晚）、威尼斯 2/15–18、米蘭杜奧莫 2/18–21。訂房必問：瞬熱熱水或 boiler 公升數、暖氣每天開幾小時、電梯是否先走半層、六人加大箱進不進得去。威尼斯問最近碼頭。",
  "約 2026/09 下旬：最後的晚餐 2/19。官方 Vivaticket 六人同一 slot，放票日當天搶。搶不到立刻訂 GetYourGuide／Viator 含票英文導覽，不要黃牛、不要等到出發。",
  "出發前 8–12 週：梵蒂岡 2/8 週一、競技場 2/9、龐貝 2/10、烏菲茲 2/12、學院 2/14。梵蒂岡不要訂 2/7、不要訂 2/11。",
  "開賣就訂：Freccia 2/10 羅馬⇄拿坡里、2/11 羅馬→佛羅倫斯、2/15 佛羅倫斯→威尼斯、2/18 威尼斯→米蘭。2/13 佛羅倫斯⇄比薩買 Regionale 即可，不必 Freccia。",
  "出發前下載：Free Now、itTaxi。義大利沒有便宜 UberX。六人加箱預設兩台白色計程車。",
  "出發前 7 天：Serravalle 2/20 接駁。週六人多，但袋子隔天就上飛機。Outlet 做市區退稅；MXP 仍要海關 Otello 感應。",
  "出發前 3 天：核對 BR96、Cenacolo、Freccia、披薩訂位（50 Kalò 或 Starita，不要排 Da Michele）。登塔若要爬，opapisa.it 時段票。",
];

const CHECKS = [
  "護照有效期 > 6 個月、申根入境空白頁",
  "華航去程電子登機證（2/6 TPE→FCO；確認直飛）",
  "長榮 BR96 電子登機證（2/21 MXP）",
  "Frecciarossa：2/10 羅馬⇄拿坡里、2/11 羅馬→佛羅倫斯、2/15 佛羅倫斯→威尼斯、2/18 威尼斯→米蘭",
  "Free Now＋itTaxi 已登入（不是台灣那種 UberX）",
  "2/10 拿坡里車站兩台計程車去龐貝（禁止 Circumvesuviana）",
  "2/13 佛羅倫斯⇄比薩 Regionale",
  "2/21 06:50 兩台計程車或 Free Now 去 MXP T1",
  "梵蒂岡 2/8、競技場 2/9 官方 QR",
  "龐貝 2/10 官方票 pompeiisites.org",
  "烏菲茲 2/12、學院 2/14 官方 QR",
  "《最後的晚餐》2/19 官方或含票導覽確認信",
  "米蘭大教堂屋頂 QR",
  "Serravalle 接駁 2/20（回程時刻寫死）",
  "威尼斯 vaporetto 3 日卡（島上觀光，不帶大箱）",
  "Leonardo Express（抵達日）",
  "MXP 海關 Otello：Outlet 退稅條要感應，否則款會被扣回",
  "包棟確認函 4 段（熱水／暖氣／電梯／威尼斯碼頭已問）",
  "旅行保險單（含取消）",
  "國際雙幣卡＋歐元備用現金 €300",
  "轉換插頭 Type L／C、行動電源",
  "防水外套＋防滑靴",
  "薄羽絨、手套、小孩備用乾襪",
  "Trenitalia／華航／長榮／ACTV／Free Now／itTaxi App 已登入",
  "大箱不超過 4 顆",
  "2/20 Outlet 袋當晚進託運；2/21 只拖箱子去機場",
  "2/21 06:30 鬧鐘；06:50 兩台計程車去 MXP；先 Otello 再報到",
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
    standard: "羅馬 4 晚＋佛羅倫斯 4＋威尼斯 3＋米蘭 3。Booking 整套房或 Airbnb。冬天必問：瞬熱熱水或 boiler 公升數（50–80L 六人會洗到冷水）、暖氣每天開幾小時、電梯尺寸、是否先走半層。",
    premium: {
      name: "米蘭 Park Hyatt；羅馬 Hassler 家庭套房",
      rec: true,
      note: "購物三晚住金四角旁邊。六人問套房或整層。飯店熱水暖氣通常比老公寓穩。"
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
    id: "pompeii",
    must: true,
    when: "出發前 2–4 週",
    title: "龐貝＋拿坡里　2/10",
    standard: "官方 pompeiisites.org。Freccia 羅馬⇄拿坡里約 1 時 10 分。Napoli Centrale 出站叫兩台計程車去 Pompei Scavi（約 30–40 分）。禁止 Circumvesuviana。披薩訂 50 Kalò 或 Starita。不要加阿瑪菲。",
    premium: null
  },
  {
    id: "uffizi",
    must: true,
    when: "出發前 8 週",
    title: "烏菲茲　2/12　學院　2/14",
    standard: "官方。兩館不要同一天。情人節大衛要早訂。",
    premium: null
  },
  {
    id: "pisa",
    must: true,
    when: "出發前 2–7 天",
    title: "比薩斜塔　2/13",
    standard: "佛羅倫斯 SMN→Pisa Centrale Regionale 約 1 時–1 時 15 分，當日來回。廣場外觀免費。登塔 251 級、沒電梯，要 opapisa.it 時段票，小孩可只在下面拍。不要再加錫耶納。",
    premium: { name: "登塔時段票", rec: false, note: "六人同一場。只為照片可不爬。" }
  },
  {
    id: "supper",
    must: true,
    when: "約 2026/09 下旬",
    title: "《最後的晚餐》2/19",
    standard: "官方 Vivaticket 每季放票，六人同一 slot 接近秒殺。放票日當天搶。不要排 2/18 抵達當天早場。",
    premium: { name: "GetYourGuide／Viator 含票英文導覽", rec: true, note: "官方沒搶到立刻訂正規團，不要第三方黃牛。15 分鐘仍是那幅畫。" }
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
    title: "Frecciarossa　羅馬⇄拿坡里＋三段北上",
    standard: "2/10 羅馬⇄拿坡里當日來回、2/11 羅馬→佛羅倫斯、2/15 佛羅倫斯→威尼斯、2/18 威尼斯→米蘭。城際仍坐火車。",
    premium: { name: "Business", rec: false, note: "家庭意義不大。" }
  },
  {
    id: "taxiapp",
    must: true,
    when: "出發前下載",
    title: "叫車 App：Free Now／itTaxi",
    standard: "義大利沒有台灣那種便宜 UberX。羅馬、米蘭：Free Now 叫白色計程車最穩；Uber 多半是 Black／Van，更貴。佛羅倫斯幾乎只有 Uber Black，用 Free Now 或車站排班。拿坡里用車站排班或 Free Now。威尼斯沒有車。六人加四箱預設兩台車。",
    premium: { name: "Uber Van（羅馬／米蘭）", rec: false, note: "偶爾一台能塞六人。比兩台白計程車貴，不當預設。" }
  },
  {
    id: "watertaxi",
    must: false,
    when: "當天現場",
    title: "威尼斯水上計程車　進出帶大箱時",
    standard: "這是威尼斯的計程車，不是預包一日遊。S. Lucia 碼頭現場叫。六人四箱比 vaporetto 合理。島上觀光三天仍用 3 日卡。",
    premium: null
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
      detail: "FCO → Termini 約 32 分、每 15 分。六件箱出站叫兩台計程車去公寓。",
      drive: "定價約 €50／台；六人兩台。",
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
    n: 5, city: "龐貝／拿坡里", title: "龐貝遺址＋拿坡里披薩",
    stay: "羅馬第 4 晚　2/10 週三　當晚回羅馬打包",
    cover: "photos/italy/pompeii.jpg",
    rent: { yes: false, label: "不自駕 · 計程車", reason: "羅馬→拿坡里 Freccia 比開車快。遺址這段車站叫兩台計程車，禁止 Circumvesuviana。" },
    hotel: { name: "續住羅馬；今晚打包", arrive: "傍晚 Freccia 回 Termini", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/pompeii.jpg", cap: "龐貝，二月較空但風大" },
      { src: "photos/italy/naples.jpg", cap: "拿坡里灣與維蘇威，下午吃披薩短走" },
      { src: "photos/italy/frecciarossa.jpg", cap: "羅馬⇄拿坡里約 1 時 10 分" },
    ],
    transport: {
      mode: "Frecciarossa ＋ 兩台計程車",
      detail: "Termini→Napoli Centrale 約 1 時 10 分。出站排班或 Free Now 兩台計程車到 Pompei Scavi（約 30–40 分）。不要 Circumvesuviana。傍晚 Freccia 回羅馬。",
      drive: "不從羅馬開車。A1 約 2 時 15 分，比火車慢。",
    },
    slots: [
      { t: "07:00", title: "Termini 早班 Freccia", d: "對號。帶水、帽子、防滑靴。大箱留羅馬。" },
      { t: "08:20", title: "拿坡里出站叫兩台計程車", d: "直達遺址入口。現場排班或 Free Now。" },
      { t: "09:10", title: "龐貝遺址", d: "官方票。家庭 2.5–3 小時，選一條線走。冬天約 15:30 趕人。" },
      { t: "12:30", title: "計程車回拿坡里，訂位披薩", d: "50 Kalò 或 Starita。不要排 Da Michele。" },
      { t: "14:30", title: "拿坡里老城短走", d: "不要加卡布里、阿瑪菲。" },
      { t: "16:30", title: "Freccia 回羅馬", d: "約 1 時 10 分。誤點下一班。", buf: true },
      { t: "18:30", title: "Termini 兩台計程車回公寓", d: "簡單晚餐、打包。明天轉佛羅倫斯。" },
      { t: "21:00", title: "早睡", d: "明天退房。" },
    ],
  },
  {
    n: 6, city: "佛羅倫斯", title: "轉場，舊橋定位",
    stay: "Oltrarno／SMN，連住 4 晚　2/11 週四",
    cover: "photos/italy/florence-ponte.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 約 1 時 30 分。ZTL。出站兩台計程車。" },
    hotel: { name: "整套公寓", arrive: "約 13:30–14:30", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "羅馬→佛羅倫斯約 1 時 30 分" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋，下午只走外觀" },
      { src: "photos/italy/florence-duomo.jpg", cap: "主教堂外觀" },
    ],
    transport: { mode: "Frecciarossa ＋ 計程車", detail: "Termini 約 10:00 → SMN 約 11:30。Oltrarno 過河叫兩台計程車（可進 ZTL）。2/11 梵蒂岡休，當轉場日正好。", drive: "ZTL。不自己開。" },
    slots: [
      { t: "09:00", title: "羅馬退房", d: "Termini 對號。昨天龐貝若誤點，改 11:00 那班。" },
      { t: "10:00", title: "Freccia 往 SMN", d: "這段最短。" },
      { t: "11:40", title: "SMN 抵達", d: "兩台計程車去公寓。" },
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
    rent: { yes: false, label: "不租車", reason: "全步行。不要同一天加大衛、也不要同一天去比薩。" },
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
      { t: "21:00", title: "主教堂夜燈", d: "22:00 回。明天比薩早班。" },
    ],
  },
  {
    n: 8, city: "比薩", title: "斜塔外觀，當晚回佛羅倫斯",
    stay: "佛羅倫斯第 3 晚　2/13 週六",
    cover: "photos/italy/pisa.jpg",
    rent: { yes: false, label: "不租車", reason: "Regionale 約 1 時。出站兩台計程車去廣場。" },
    hotel: { name: "續住佛羅倫斯", arrive: "傍晚火車回 SMN", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/pisa.jpg", cap: "比薩斜塔與主教堂，廣場外觀免費" },
      { src: "photos/italy/frecciarossa.jpg", cap: "其實這段是 Regionale，約 1 時" },
      { src: "photos/italy/florence-ponte.jpg", cap: "當晚回佛羅倫斯睡" },
    ],
    transport: {
      mode: "Regionale ＋ 計程車",
      detail: "SMN→Pisa Centrale 約 1 時–1 時 15 分，班次密。出站兩台計程車約 10 分到奇蹟廣場；晴天可走 25 分。不要 Autolinee 一日遊塞錫耶納。",
      drive: "不自己開。回程同一條火車。",
    },
    slots: [
      { t: "08:10", title: "SMN 區域火車", d: "大箱留公寓。對號與否看車種，以 App 為準。" },
      { t: "09:25", title: "Pisa Centrale", d: "兩台計程車去 Piazza dei Miracoli。" },
      { t: "09:45", title: "斜塔廣場外觀", d: "拍照 60–90 分就夠。登塔 251 級沒電梯，要 opapisa.it 時段；小孩可只在下面。" },
      { t: "12:00", title: "廣場午餐", d: "觀光價，吃完就走。" },
      { t: "13:30", title: "火車回佛羅倫斯", d: "誤點下一班。", buf: true },
      { t: "15:00", title: "SMN 回公寓休息", d: "不要再加錫耶納。" },
      { t: "19:30", title: "晚餐", d: "明天情人節大衛，早訂。" },
      { t: "21:00", title: "早點回", d: "連續移動，小孩會累。" },
    ],
  },
  {
    n: 9, city: "佛羅倫斯", title: "情人節：大衛＋Oltrarno（不是空白日）",
    stay: "佛羅倫斯第 4 晚　2/14 週日",
    cover: "photos/italy/florence-david.jpg",
    rent: { yes: false, label: "不租車", reason: "錫耶納刪掉。今天把大衛與工坊做完。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-david.jpg", cap: "學院 Accademia，情人節早訂" },
      { src: "photos/italy/florence-oltrarno.jpg", cap: "Santo Spirito 工坊" },
      { src: "photos/italy/florence-ponte.jpg", cap: "情人節舊橋夜走" },
    ],
    transport: { mode: "步行", detail: "學院北岸，中午過河。", drive: "不需要。" },
    slots: [
      { t: "08:50", title: "學院 Accademia", d: "大衛。週日情人節要早訂時段。" },
      { t: "11:00", title: "Mercato Centrale 二樓午餐", d: "戶外皮件攤不是工坊貨。" },
      { t: "13:30", title: "Via Tornabuoni 櫥窗", d: "40 分。" },
      { t: "15:00", title: "Oltrarno 工坊逛街", d: "皮件、紙品、金工。小件可買。" },
      { t: "18:00", title: "打包", d: "明天去威尼斯。" },
      { t: "19:30", title: "情人節晚餐（訂位）", d: "這晚餐廳滿。Oltrarno。" },
      { t: "21:00", title: "舊橋夜走", d: "明天 10:00 SMN。" },
    ],
  },
  {
    n: 10, city: "威尼斯", title: "轉場水城（嘉年華已過）",
    stay: "Cannaregio／Dorsoduro，連住 3 晚　2/15 週一",
    cover: "photos/italy/venice-canal.jpg",
    rent: { yes: false, label: "不自駕 · 計程車", reason: "島上沒車。大箱在車站碼頭叫水上計程車（威尼斯的計程車）。" },
    hotel: { name: "碼頭 5 分內整套；有電梯更好", arrive: "約 14:00–15:00", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "佛羅倫斯→威尼斯約 2 時 05 分" },
      { src: "photos/italy/venice-sanmarco.jpg", cap: "聖馬可，沒有面具高峰" },
      { src: "photos/italy/venice-canal.jpg", cap: "大運河" },
    ],
    transport: { mode: "Frecciarossa ＋ 水上計程車", detail: "SMN 約 10:25 → S. Lucia 約 12:30。出站碼頭現場叫水上計程車（六人可能要兩艘，看船型）。vaporetto 3 日卡留給後面兩天觀光。", drive: "島上沒車。沒有 Uber。" },
    slots: [
      { t: "09:20", title: "SMN 退房", d: "對號。" },
      { t: "10:25", title: "Freccia 往威尼斯", d: "約 2 小時。" },
      { t: "12:40", title: "碼頭叫水上計程車", d: "現場叫，不是預包一日。不要抬四箱擠 vaporetto。" },
      { t: "14:00", title: "寄行李、午餐", d: "不排總督宮。" },
      { t: "16:00", title: "聖馬可外觀", d: "建立方位。現在可以買 vaporetto 3 日卡。" },
      { t: "18:00", title: "aperitivo", d: "離開廣場兩條街。" },
      { t: "19:30", title: "晚餐", d: "Cannaregio／Dorsoduro。" },
      { t: "21:00", title: "走回或 vaporetto（不帶箱）", d: "22:00 睡。" },
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
      { t: "21:30", title: "回公寓", d: "明天碼頭叫水上計程車去 S. Lucia，約 08:15。" },
    ],
  },
  {
    n: 13, city: "米蘭", title: "轉場，金四角開始",
    stay: "杜奧莫／金四角，連住 3 晚　2/18 週四",
    cover: "photos/italy/milan-montenapoleone.jpg",
    rent: { yes: false, label: "不自駕", reason: "Freccia 直達 Centrale。購物三晚住杜奧莫。大箱出站叫計程車。" },
    hotel: { name: "杜奧莫步行 10 分內整套", arrive: "約 14:00–15:00", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "威尼斯→米蘭約 2 時 25 分" },
      { src: "photos/galleria.jpg", cap: "迴廊，傍晚開始逛" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "金四角，袋子只從這裡帶回家" },
    ],
    transport: { mode: "水上計程車 ＋ Frecciarossa ＋計程車", detail: "公寓碼頭現場叫船到 S. Lucia，約 10:35 Freccia → Centrale 約 13:00。出站 Free Now／兩台計程車去杜奧莫，不要地鐵搬四箱。", drive: "ZTL。不自己開。" },
    slots: [
      { t: "08:15", title: "碼頭叫水上計程車去車站", d: "大箱上船。不要 vaporetto。" },
      { t: "10:35", title: "Freccia 往米蘭", d: "約 2 時 25 分。" },
      { t: "13:10", title: "Centrale → 杜奧莫", d: "兩台計程車或 Free Now。寄行李。今天不當 Outlet 日。" },
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
      { t: "08:40", title: "出發感恩教堂", d: "場次以官方或含票導覽為準。上午場則屋頂下午。" },
      { t: "09:15", title: "《最後的晚餐》", d: "約 15 分。六人同一 slot。" },
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
    rent: { yes: false, label: "不自駕", reason: "官方接駁。明天早飛，不要租車還車。" },
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
      { t: "13:00", title: "午餐＋市區退稅", d: "Global Blue 現場做。明天 MXP 還要海關 Otello 感應，沒蓋章款會被扣回。" },
      { t: "16:15", title: "票面回程", d: "17:15 也行。19:15 太晚。", buf: true },
      { t: "18:30", title: "回公寓收箱", d: "袋進託運。這就是「最後才買、不用拖兩週」。" },
      { t: "19:30", title: "杜奧莫附近晚餐", d: "不要再跑 Navigli。" },
      { t: "21:30", title: "睡覺", d: "06:30 起床。06:50 叫兩台計程車。" },
    ],
  },
  {
    n: 16, city: "台北方向", title: "米蘭早班起飛",
    stay: "BR96 機上（2/22 清晨抵桃園）",
    cover: "photos/duomo.jpg",
    rent: { yes: false, label: "不自駕 · 計程車", reason: "四箱不要擠地鐵。Free Now 或兩台計程車直送 T1。米蘭 Uber 是 Black／Van，通常更貴。" },
    hotel: { name: "機上", arrive: "2/22 約 06:10 桃園 T2", checkIn: "—" },
    photos: [
      { src: "photos/centrale.jpg", cap: "備用：叫不到車才改 Cadorna Express" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "購物袋已在託運裡" },
      { src: "photos/italy/rome-colosseum.jpg", cap: "這趟從羅馬開始" },
    ],
    transport: {
      mode: "計程車 ＋ BR96",
      detail: "06:50 杜奧莫 Free Now 或兩台白色計程車，高速約 50 分到 MXP T1。冬令 BR96 目前 11:00，以機票為準。TPE 2/22 約 06:10，長榮 T2。叫不到車才改 Cadorna Malpensa Express（約 37 分）。",
      drive: "不租還車。",
    },
    slots: [
      { t: "06:30", title: "起床退房", d: "護照、登機證、退稅單、水。Outlet 袋已在箱。" },
      { t: "06:50", title: "兩台計程車上樓", d: "Free Now 預先叫。不要地鐵 M3。", buf: true },
      { t: "07:50", title: "MXP T1 下車", d: "先海關 Otello 感應退稅條，再去長榮報到。8–9 點退稅常排隊。" },
      { t: "08:30", title: "報到＋托運", d: "國際線商務也要留時間。退稅沒感應，款會被扣回外加罰金。" },
      { t: "11:00", title: "BR96 起飛", d: "以機票時刻為準。時區改回台灣。" },
      { t: "2/22 06:10", title: "桃園 T2", d: "長榮航廈。" },
    ],
  },
];

const ROUTE = [
  ["D1 2/6", "台北夜航→羅馬 FCO"],
  ["D2–5", "羅馬 4 晚（梵蒂岡 2/8、競技場、2/10 龐貝）"],
  ["D6–9", "佛羅倫斯 4 晚（烏菲茲、2/13 比薩、大衛）"],
  ["D10–12", "威尼斯（嘉年華後）"],
  ["D13–15", "米蘭金四角＋Serravalle"],
  ["D16 2/21", "計程車 → MXP BR96"],
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
  ["photos/italy/pisa.jpg", "比薩斜塔"],
  ["photos/italy/naples.jpg", "拿坡里灣與維蘇威"],
  ["photos/italy/pompeii.jpg", "龐貝廣場"],
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
