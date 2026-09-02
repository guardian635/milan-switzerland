const START_DATE = "2027-02-08";

const SEASON = [
  ["米蘭", "先住三晚：金四角＋最後的晚餐＋Serravalle", "放棄嘉年華之後，米蘭不再只是過境。2/9 落地逛街、2/10 最後的晚餐與屋頂、2/11 週四去 Serravalle（平日比週六好走）。2/11 梵蒂岡休館，人在米蘭剛好。"],
  ["威尼斯", "嘉年華已結束，房價與人潮會掉", "官方 Carnevale 2027 到 2/9 止。你們 2/12 才到，街道沒有面具高峰，這是好事：vaporetto 較好走、包棟較好訂。二月水城仍冷、濕。白天約 07:20–17:40。"],
  ["佛羅倫斯", "博物館淡季", "烏菲茲、大衛、Oltrarno 工坊。不要加五漁村。2/11 已在米蘭過完梵蒂岡休館日。"],
  ["羅馬", "2/20 週六進梵蒂岡", "2/21、2/24 是週日／週三。梵蒂岡週日休，鎖定 2/20 週六。英國 half-term 約 2/13–21，羅馬前半段較擠。2/24 週三華航 CI76 冬天常見有班，仍要核對。"],
  ["逛街／Outlet", "米蘭是這次購物本體", "2/9 傍晚 Galleria＋Montenapoleone；2/10 金四角細走或 Corso Buenos Aires；2/11 Serravalle 整天。佛羅倫斯 Oltrarno、羅馬 Condotti／Corso 仍保留。Castel Romano 不必再去。"],
  ["不要加的", "五漁村、阿瑪菲、嘉年華舞會", "二月鄉間多半關。嘉年華已放棄，不要為了 2/9 閉幕硬插威尼斯。"],
  ["晚上", "16:30 是館關門，不是一天結束", "家庭預設 18:00 aperitivo、19:30 晚餐、21:00–21:30 夜走。米蘭 Navigli、威尼斯河岸、佛羅倫斯舊橋、羅馬特雷維外牆。"],
];

const COMPARE = [
  ["MXP → 杜奧莫", "Malpensa Express→Cadorna 約 37 分，或 Centrale 51 分轉地鐵", "計程車 45–70 分，定價約 €95–115"],
  ["米蘭 → Serravalle", "官方接駁約 1 時 15–30 分（來回票面寫死）", "A7 約 1 時"],
  ["米蘭 → 威尼斯 S. Lucia", "Frecciarossa 約 2 時 25 分", "A4 約 2 時 45 分；島上沒車"],
  ["威尼斯 → 佛羅倫斯 SMN", "Frecciarossa 約 2 時 05 分", "開車約 3 小時＋ZTL"],
  ["佛羅倫斯 → 羅馬 Termini", "Frecciarossa 約 1 時 30 分", "A1 約 3 小時"],
  ["羅馬 Termini → FCO", "Leonardo Express 約 32 分", "市區定價計程車約 €50"],
];

const BOOKINGS = [
  "現在立刻：開腳商務。去程長榮 BR95（2/8 23:10 TPE→MXP 06:50+1）。回程華航 CI76（2/24 週三 FCO→TPE，冬天常見週一／週三，仍要核對）。票價會隨日期變，先前 2/6 的報價不能直接套。",
  "現在立刻：米蘭 2/9–12 包棟，杜奧莫／金四角步行 10 分內。2/12 要去 Centrale 上 Freccia。",
  "現在立刻：威尼斯 2/12–15（嘉年華後，比 2/7 好訂）、佛羅倫斯 2/15–19、羅馬 2/19–24（5 晚，能到 Termini）。",
  "約 2026/09 下旬：最後的晚餐 2/10 下午場。官方 cenacolovinciano.org，六人同一 slot。",
  "出發前 8–12 週：烏菲茲 2/16、學院 2/17、梵蒂岡 2/20 週六、競技場 2/22。梵蒂岡不要訂 2/11、不要訂 2/21 週日。",
  "開賣就訂：三段 Freccia（2/12 米蘭→威尼斯、2/15 威尼斯→佛羅倫斯、2/19 佛羅倫斯→羅馬）。",
  "出發前 7 天：Serravalle 接駁 2/11 週四 9:00 或 9:30 班。平日。",
  "出發前 3 天：核對 CI76 2/24、Cenacolo、Freccia、防滑鞋。",
];

const CHECKS = [
  "護照有效期 > 6 個月、申根入境空白頁",
  "長榮 BR95 電子登機證（2/8 夜航）",
  "華航 CI76 電子登機證（2/24 FCO；先確認週三有班）",
  "三段 Frecciarossa 電子票",
  "《最後的晚餐》確認信（2/10，姓名＝護照）",
  "烏菲茲、學院、梵蒂岡、競技場官方 QR",
  "米蘭大教堂屋頂 QR",
  "Serravalle 接駁來回票（2/11，回程時刻寫死）",
  "威尼斯 vaporetto 3 日卡",
  "Leonardo Express 2/24",
  "包棟確認函 4 段（米蘭、威尼斯、佛羅倫斯、羅馬）",
  "旅行保險單（含取消）",
  "國際雙幣卡＋歐元備用現金 €300",
  "轉換插頭 Type L／C、行動電源",
  "防水外套＋防滑靴",
  "薄羽絨、手套、小孩備用乾襪",
  "Trenitalia／長榮／華航／ACTV App 已登入",
  "大箱不超過 4 顆",
  "2/11 Outlet 袋當晚可進箱；2/12 還要上火車",
  "2/24 06:45 鬧鐘；Termini→Leonardo Express→FCO T3",
];

const TICKETS = [
  {
    id: "hotel",
    must: true,
    when: "現在立刻",
    title: "住宿——四大兩小優先包棟／整套",
    standard: "米蘭 3 晚（杜奧莫／金四角）＋威尼斯 3＋佛羅倫斯 4＋羅馬 5。Booking 整套房或 Airbnb。米蘭不要訂太靠 Navigli，2/12 要去 Centrale。",
    premium: {
      name: "米蘭 Park Hyatt／金四角整層；威尼斯 palazzo",
      rec: true,
      note: "購物三晚住杜奧莫旁邊最省腳。六人問家庭套房或整層，不要三棟。"
    }
  },
  {
    id: "eva",
    must: true,
    when: "現在立刻",
    title: "開腳：長榮 BR95 進米蘭 ＋ 華航 CI76 出羅馬",
    standard: "去程 BR95 2/8（一）23:10 TPE→MXP 06:50+1，每天有。回程 CI76 2/24（三）FCO，冬天常見週一／週三 11:00 左右→TPE 次日清晨。2/8 仍在春節週，商務價會變，以官網為準。",
    premium: {
      name: "去程長榮商務／回程華航商務",
      rec: true,
      note: "去程夜航落地還要逛街，商務有感。回程早班商務可睡。兩張單程、兩個 PNR。"
    }
  },
  {
    id: "supper",
    must: true,
    when: "約 2026/09 下旬開賣",
    title: "《最後的晚餐》2/10 下午",
    standard: "官方 cenacolovinciano.org。15 分鐘、實名、六人同一場。這次住米蘭，排得進，不要用 2/9 落地日去賭。",
    premium: null
  },
  {
    id: "duomo-mi",
    must: true,
    when: "出發前 2–4 週",
    title: "米蘭大教堂屋頂　2/10 或 2/9 下午",
    standard: "duomomilano.it 屋頂選電梯。2/9 落地若太累，改 2/10 最後的晚餐之後。",
    premium: null
  },
  {
    id: "serravalle",
    must: true,
    when: "出發前 7 天",
    title: "Serravalle 接駁　2/11 週四",
    standard: "McArthurGlen 官方 Zani／Frigerio。Centrale 9:00 或 9:30，回程票面寫死。成人約 €25、4–12 歲約 €10。平日比週六好。大袋當晚收進箱，隔天還要上火車去威尼斯——買得動再買。",
    premium: {
      name: "改 Fidenza（較早回）",
      rec: false,
      note: "較小、17:00 前回得了。品牌比 Serravalle 少。這次有整天，預設 Serravalle。"
    }
  },
  {
    id: "vatican",
    must: true,
    when: "出發前 8–12 週　官方",
    title: "梵蒂岡博物館＋西斯汀　2/20（六）",
    standard: "museivaticani.va。2/11 休（人在米蘭 Outlet）。2/21 週日休。鎖定週六。未滿 18 減免仍要預約。",
    premium: {
      name: "官方早場",
      rec: true,
      note: "週六仍會擠（half-term）。早場較空。"
    }
  },
  {
    id: "colosseo",
    must: true,
    when: "出發前 8 週",
    title: "競技場聯票　2/22（一）",
    standard: "colosseo.it。六人同一場。Full Experience 看當季開放層。",
    premium: {
      name: "地下／競技場層時段",
      rec: true,
      note: "早賣完。沒有艙等。"
    }
  },
  {
    id: "uffizi",
    must: true,
    when: "出發前 8 週",
    title: "烏菲茲　2/16　學院大衛　2/17",
    standard: "官方 tickets.uffizi.it。兩館不要同一天。未滿 18 常免費仍要預約。",
    premium: null
  },
  {
    id: "freccia",
    must: true,
    when: "開賣就訂",
    title: "Frecciarossa 三段",
    standard: "2/12 米蘭→威尼斯、2/15 威尼斯→佛羅倫斯、2/19 佛羅倫斯→羅馬。Standard 對號。",
    premium: {
      name: "Business",
      rec: false,
      note: "家庭六人意義不大。"
    }
  },
  {
    id: "fco",
    must: true,
    when: "出發前 1–2 週",
    title: "Leonardo Express　2/24 Termini→FCO",
    standard: "約 32 分。CI76 約 11:00：07:20 Termini 上車。華航 T3，桃園下 T1。",
    premium: null
  },
];
const DAYS = [
  {
    n: 1, city: "台北", title: "春節連假夜航，飛米蘭",
    stay: "長榮 BR95 機上過夜",
    cover: "photos/centrale.jpg",
    rent: { yes: false, label: "不租車", reason: "出國日只處理桃園。" },
    hotel: { name: "機上", arrive: "次日 06:50 米蘭 MXP", checkIn: "—" },
    photos: [
      { src: "photos/centrale.jpg", cap: "明天會用到的米蘭中央車站" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "後天開始的金四角逛街，不是過境" },
    ],
    transport: {
      mode: "飛機",
      detail: "EVA BR95　TPE T2 23:10 → MXP T1 06:50+1　約 14 小時 40 分。2/8 週一，每天有飛。",
      drive: "不適用",
    },
    slots: [
      { t: "18:30", title: "離開台北市區", d: "春節連假第三天，仍可能塞。機場捷運預留 50 分。" },
      { t: "20:10", title: "桃園 T2 報到", d: "商務艙仍建議起飛前 3 小時。托運不超過 4 顆大箱。" },
      { t: "22:40", title: "登機", d: "落地要逛街，去程商務有感。" },
      { t: "23:10", title: "BR95 起飛", d: "CET＝台灣 −7。飛行中改時區。", buf: true },
    ],
  },
  {
    n: 2, city: "米蘭", title: "落地、杜奧莫、金四角櫥窗",
    stay: "杜奧莫／金四角整套，連住 3 晚",
    cover: "photos/duomo.jpg",
    rent: { yes: false, label: "不租車", reason: "落地疲勞＋ZTL。Express 到 Cadorna 再轉地鐵最順金四角。" },
    hotel: { name: "杜奧莫或 Montenapoleone 步行 10 分內", arrive: "15:00 入住；10:30 先寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/duomo.jpg", cap: "大教堂廣場，今天只走外觀" },
      { src: "photos/galleria.jpg", cap: "艾曼紐二世迴廊" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "Via Montenapoleone，落地日先櫥窗" },
    ],
    transport: {
      mode: "Malpensa Express",
      detail: "MXP T1 → Cadorna 約 37 分（去杜奧莫較順）或 Centrale 51 分。單程約 €15。",
      drive: "計程車 45–70 分，約 €95–115。",
    },
    slots: [
      { t: "06:50", title: "MXP T1 抵達", d: "申根＋行李，備 60–90 分。今天不住威尼斯，節奏可以慢。" },
      { t: "08:20", title: "出關緩衝", d: "只換當天歐元。不要在租車櫃台停留。", buf: true },
      { t: "09:00", title: "Malpensa Express → Cadorna", d: "轉地鐵 M1 兩站到 Duomo。大箱尖峰改計程車 €12 內。" },
      { t: "10:30", title: "飯店寄行李", d: "check-in 15:00。先卸袋。" },
      { t: "11:00", title: "大教堂廣場＋迴廊", d: "今天不排屋頂。建立方位。" },
      { t: "12:30", title: "午餐", d: "迴廊附近坐下來，落地日禁止暴走。" },
      { t: "15:00", title: "入住、短睡 40 分", d: "鬧鐘務必設。這是逛街日不是睡覺日。" },
      { t: "16:30", title: "Galleria → Montenapoleone 櫥窗", d: "Via della Spiga、Via Sant'Andrea 走完一圈。落地日只看窗、記要買的店，大買留 Serravalle。" },
      { t: "18:30", title: "金四角 aperitivo", d: "Cova 或附近。六人要坐。" },
      { t: "19:45", title: "晚餐", d: "Brera 或迴廊附近。不要跑 Navigli，明天最後的晚餐要早。" },
      { t: "21:15", title: "杜奧莫夜燈走回", d: "22:00 睡。" },
    ],
  },
  {
    n: 3, city: "米蘭", title: "最後的晚餐、屋頂、金四角細走",
    stay: "米蘭第 2 晚　2/10 週三",
    cover: "photos/last-supper.jpg",
    rent: { yes: false, label: "不租車", reason: "步行＋地鐵。開進布雷拉等於找罰單。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/last-supper.jpg", cap: "達文西《最後的晚餐》，15 分鐘" },
      { src: "photos/grazie.jpg", cap: "Santa Maria delle Grazie" },
      { src: "photos/duomo-roof.jpg", cap: "大教堂屋頂" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "金四角，今天可以進店" },
    ],
    transport: {
      mode: "步行／地鐵",
      detail: "杜奧莫 → 感恩教堂地鐵＋步行約 20–25 分。",
      drive: "不需要。",
    },
    slots: [
      { t: "08:00", title: "早餐", d: "護照影本與 Cenacolo 確認放同一夾。" },
      { t: "08:40", title: "出發感恩教堂", d: "場次以你搶到的下午／上午為準。這裡寫上午場；若是下午就把屋頂對調。" },
      { t: "09:15", title: "《最後的晚餐》", d: "約 15 分。禁止自拍棒。出來看教堂迴廊。" },
      { t: "10:30", title: "大教堂內部＋屋頂電梯", d: "預留安檢。腳累只看內部。" },
      { t: "13:00", title: "午餐", d: "迴廊。" },
      { t: "15:00", title: "金四角進店／Corso Buenos Aires", d: "要買旗艦今天買。平價連鎖走 Corso Buenos Aires（地鐵 Porta Venezia）。不要兩條都走完。" },
      { t: "18:00", title: "Brera aperitivo", d: "畫廊外觀即可。" },
      { t: "19:30", title: "Navigli 晚餐", d: "運河區晚上才開始。22:00 前地鐵回。明天 Outlet 9:00 接駁。" },
    ],
  },
  {
    n: 4, city: "米蘭", title: "Serravalle Outlet 整天（平日）",
    stay: "米蘭第 3 晚　2/11 週四",
    cover: "photos/italy/milan-montenapoleone.jpg",
    rent: { yes: false, label: "不租車", reason: "官方接駁來回寫死。明天還要上火車去威尼斯，不要租車還車。" },
    hotel: { name: "續住；今晚收 Outlet 袋", arrive: "接駁回程後回公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "市區旗艦買過的，Outlet 找過季" },
      { src: "photos/centrale.jpg", cap: "接駁多半從 Centrale 出發" },
      { src: "photos/galleria.jpg", cap: "不想去 Outlet 就改迴廊／Rinascente 半日" },
    ],
    transport: {
      mode: "官方 Outlet 接駁",
      detail: "Zani／Frigerio：Centrale 9:00 或 9:30 → Serravalle 約 1 時 15–30 分。回程 16:15／17:15 票面寫死。成人約 €25。戶外村，穿防寒。2/11 週四比週六人少。",
      drive: "A7 約 1 時。明天 Freccia，不租。",
    },
    slots: [
      { t: "08:30", title: "Centrale 接駁點", d: "票印的站（Piazza IV Novembre 或 Cairoli）。地鐵去車站，箱留公寓。" },
      { t: "09:00", title: "去 Serravalle", d: "先攻寫好的 4 個品牌。230 店不要全逛。" },
      { t: "10:15", title: "Outlet 開門", d: "二月可能還有冬末 saldi。小孩找室內休息區。" },
      { t: "13:00", title: "午餐在村內", d: "Global Blue 現場做完。" },
      { t: "16:15", title: "搭票面回程", d: "建議 16:15 或 17:15。19:15 太晚，明天還要搬威尼斯。", buf: true },
      { t: "18:30", title: "回公寓收箱", d: "大袋能進託運的進託運。明天 Freccia 行李架有限，不要再爆買。" },
      { t: "19:30", title: "杜奧莫附近晚餐", d: "不要再跑 Navigli。21:30 睡。" },
    ],
  },
  {
    n: 5, city: "威尼斯", title: "Freccia 轉場，水城定位",
    stay: "Cannaregio／Dorsoduro，連住 3 晚　2/12 週五",
    cover: "photos/italy/venice-canal.jpg",
    rent: { yes: false, label: "不租車", reason: "島上沒車。嘉年華已過，人會少一截。" },
    hotel: { name: "vaporetto 站 5 分內整套", arrive: "約 14:00–15:00 入住", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "米蘭→威尼斯約 2 時 25 分" },
      { src: "photos/italy/venice-sanmarco.jpg", cap: "聖馬可，沒有嘉年華高峰" },
      { src: "photos/italy/venice-canal.jpg", cap: "大運河，vaporetto 就是公車" },
    ],
    transport: {
      mode: "Frecciarossa ＋ vaporetto",
      detail: "Centrale 約 10:35 → Venezia S. Lucia 約 13:00。出站 vaporetto。先買 3 日卡。",
      drive: "島上沒車。",
    },
    slots: [
      { t: "09:00", title: "米蘭退房", d: "地鐵或計程車去 Centrale。Outlet 袋已在箱裡。" },
      { t: "10:35", title: "Freccia 往威尼斯", d: "約 2 時 25 分。Standard 對號。" },
      { t: "13:10", title: "S. Lucia → vaporetto", d: "大箱不要走三座橋。" },
      { t: "14:00", title: "寄行李、午餐", d: "轉場日不排總督宮。" },
      { t: "16:00", title: "聖馬可外觀＋廣場", d: "沒有面具人潮。建立方位。" },
      { t: "18:00", title: "aperitivo", d: "離開廣場兩條街。" },
      { t: "19:30", title: "晚餐", d: "Cannaregio／Dorsoduro。" },
      { t: "21:00", title: "大運河夜 vaporetto 回", d: "22:00 睡。" },
    ],
  },
  {
    n: 6, city: "威尼斯", title: "總督宮＋Mercerie 逛街",
    stay: "威尼斯第 2 晚　2/13 週六",
    cover: "photos/italy/venice-rialto.jpg",
    rent: { yes: false, label: "不租車", reason: "走路＋vaporetto。Murano 今天不排，留給明天選配。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/venice-sanmarco.jpg", cap: "總督宮在廣場南側" },
      { src: "photos/italy/venice-rialto.jpg", cap: "里亞托，下午逛街" },
      { src: "photos/italy/venice-canal.jpg", cap: "1 號線當觀光船" },
    ],
    transport: { mode: "步行／vaporetto", detail: "聖馬可→里亞托沿 Mercerie 約 15–20 分。", drive: "無法駕駛。" },
    slots: [
      { t: "09:00", title: "總督宮", d: "官方票。沒訂就改聖馬可博物館。" },
      { t: "12:30", title: "午餐", d: "離開廣場兩條街。" },
      { t: "15:00", title: "Mercerie → 里亞托逛街", d: "紙品、面具工坊。Castello 比較不擠。" },
      { t: "17:30", title: "vaporetto 1 號線", d: "天黑看燈。" },
      { t: "18:45", title: "Cannaregio aperitivo", d: "河邊。" },
      { t: "19:45", title: "晚餐", d: "避開英文套餐。" },
      { t: "21:15", title: "夜走回公寓", d: "明天情人節，訂位要有。" },
    ],
  },
  {
    n: 7, city: "威尼斯", title: "情人節：島上走或 Murano 選配",
    stay: "威尼斯第 3 晚　2/14 週日",
    cover: "photos/italy/venice-canal.jpg",
    rent: { yes: false, label: "不租車", reason: "Murano 坐 vaporetto。不要加布拉諾＋穆拉諾兩島，冬天船冷。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/venice-canal.jpg", cap: "情人節在水城走就夠" },
      { src: "photos/italy/venice-sanmarco.jpg", cap: "或再走聖馬可一圈" },
      { src: "photos/italy/venice-rialto.jpg", cap: "晚餐訂位" },
    ],
    transport: { mode: "vaporetto", detail: "3 日卡含穆拉諾。選配單島。", drive: "無法駕駛。" },
    slots: [
      { t: "09:30", title: "選配 A：Murano 半日", d: "看一家工坊就夠。觀光玻璃很貴。14:00 前回來。" },
      { t: "10:00", title: "選配 B：Dorsoduro／學院外圍走", d: "不進第二個大館也沒關係。" },
      { t: "15:00", title: "回島下午茶", d: "情人節人多，坐下就要點東西。" },
      { t: "18:00", title: "打包", d: "明天 Freccia 去佛羅倫斯。大箱晚餐前收。" },
      { t: "19:30", title: "情人節晚餐（訂位）", d: "這晚餐廳滿。" },
      { t: "21:30", title: "回公寓", d: "明天 09:00 前要在 S. Lucia。" },
    ],
  },
  {
    n: 8, city: "佛羅倫斯", title: "Freccia 轉場，舊橋定位",
    stay: "Oltrarno／SMN，連住 4 晚　2/15 週一",
    cover: "photos/italy/florence-ponte.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 約 2 時 05 分。ZTL。" },
    hotel: { name: "整套公寓", arrive: "約 14:00–15:00", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "威尼斯→佛羅倫斯約 2 小時" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋，下午只走外觀" },
      { src: "photos/italy/florence-duomo.jpg", cap: "主教堂，今天不排圓頂" },
    ],
    transport: {
      mode: "vaporetto ＋ Frecciarossa",
      detail: "S. Lucia 約 10:25 → Firenze SMN 約 12:30。",
      drive: "ZTL。",
    },
    slots: [
      { t: "08:20", title: "退房、vaporetto 去車站", d: "橋＋階梯。" },
      { t: "10:25", title: "Freccia 往 SMN", d: "約 2 時 05 分。" },
      { t: "12:40", title: "SMN 抵達", d: "Oltrarno 過河叫計程車（可進 ZTL）。" },
      { t: "13:30", title: "寄行李、午餐", d: "不進烏菲茲。" },
      { t: "16:00", title: "主教堂外觀＋舊橋", d: "建立方位。" },
      { t: "17:40", title: "舊橋黃昏", d: "二月日落約 17:40。" },
      { t: "18:30", title: "Santo Spirito aperitivo", d: "工坊多半關了，廣場坐。" },
      { t: "19:45", title: "Oltrarno 晚餐", d: "明天烏菲茲早場。" },
      { t: "21:15", title: "阿諾河夜走", d: "22:00 睡。" },
    ],
  },
  {
    n: 9, city: "佛羅倫斯", title: "烏菲茲",
    stay: "佛羅倫斯第 2 晚　2/16 週二",
    cover: "photos/italy/florence-uffizi.jpg",
    rent: { yes: false, label: "不租車", reason: "全步行。不要同一天加大衛。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-uffizi.jpg", cap: "烏菲茲，波提切利在這裡" },
      { src: "photos/italy/florence-duomo.jpg", cap: "出來後看主教堂" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋黃昏" },
    ],
    transport: { mode: "步行", detail: "公寓到烏菲茲 10–20 分。", drive: "ZTL。" },
    slots: [
      { t: "08:40", title: "烏菲茲門口", d: "官方時段提前 15 分。" },
      { t: "09:00", title: "烏菲茲", d: "家庭抓 2.5 小時。波提切利、達文西、拉斐爾。" },
      { t: "12:00", title: "午餐", d: "走出走廊再吃。" },
      { t: "14:30", title: "主教堂內部或鐘樓", d: "圓頂 463 級，帶小孩可改鐘樓。" },
      { t: "16:30", title: "舊橋黃昏", d: "金鋪看就好。" },
      { t: "17:50", title: "Piazzale Michelangelo 夜景（選）", d: "六人兩台計程車。" },
      { t: "19:30", title: "晚餐", d: "南岸或聖十字。" },
      { t: "21:00", title: "主教堂廣場夜燈", d: "22:00 回。" },
    ],
  },
  {
    n: 10, city: "佛羅倫斯", title: "大衛＋Oltrarno 工坊逛街",
    stay: "佛羅倫斯第 3 晚　2/17 週三",
    cover: "photos/italy/florence-david.jpg",
    rent: { yes: false, label: "不租車", reason: "San Lorenzo 皮件攤不要排。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-david.jpg", cap: "大衛在學院，不在烏菲茲" },
      { src: "photos/italy/florence-oltrarno.jpg", cap: "Santo Spirito，工坊在這一帶" },
      { src: "photos/italy/florence-ponte.jpg", cap: "過舊橋去南岸" },
    ],
    transport: { mode: "步行", detail: "學院在北岸，中午過河。", drive: "不需要。" },
    slots: [
      { t: "08:50", title: "學院 Accademia", d: "約 90 分。" },
      { t: "11:00", title: "Mercato Centrale 二樓午餐", d: "戶外皮件攤多數不是工坊貨。" },
      { t: "13:30", title: "Via Tornabuoni 櫥窗", d: "40 分。" },
      { t: "15:00", title: "Oltrarno 工坊逛街", d: "皮件、紙品、金工。這才是佛羅倫斯逛街日。" },
      { t: "18:00", title: "Pitti 外觀", d: "Boboli 冬天約 16:30 關。" },
      { t: "19:30", title: "Oltrarno 晚餐", d: "袋先放回公寓。" },
      { t: "21:00", title: "Santo Spirito 夜廣場", d: "22:00 回。" },
    ],
  },
  {
    n: 11, city: "佛羅倫斯", title: "錫耶納選配，或再走一天",
    stay: "佛羅倫斯第 4 晚　2/18 週四",
    cover: "photos/italy/siena.jpg",
    rent: { yes: false, label: "不租車", reason: "錫耶納巴士約 1 時 15 分。不要排酒莊五日遊。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/siena.jpg", cap: "錫耶納 Campo" },
      { src: "photos/italy/florence-duomo.jpg", cap: "不出城就補圓頂" },
      { src: "photos/italy/florence-oltrarno.jpg", cap: "或把工坊走完" },
    ],
    transport: { mode: "巴士（選配）或步行", detail: "Tiemme／Flixbus 約 1 時 15 分。", drive: "ZTL 兩座城。" },
    slots: [
      { t: "08:30", title: "選配 A：錫耶納", d: "Campo、大教堂外觀。16:30 前返程。" },
      { t: "09:30", title: "選配 B：不出城", d: "圓頂／Boboli／補買。" },
      { t: "17:30", title: "回公寓打包", d: "明天 Freccia 去羅馬。" },
      { t: "19:15", title: "最後一晚佛羅倫斯晚餐", d: "不開新地圖。" },
      { t: "20:45", title: "舊橋夜走", d: "21:45 回。明天 10:00 SMN。" },
    ],
  },
  {
    n: 12, city: "羅馬", title: "轉場羅馬，特拉斯提弗列",
    stay: "Prati／Termini 地鐵 15 分，連住 5 晚　2/19 週五",
    cover: "photos/italy/rome-trastevere.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 約 1 時 30 分。週五梵蒂岡不排，留給明天週六。" },
    hotel: { name: "整套公寓", arrive: "約 13:30–14:30", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "佛羅倫斯→羅馬約 1 時 30 分" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "特拉斯提弗列，晚上吃飯走路" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "路過萬神殿外觀即可" },
    ],
    transport: {
      mode: "Frecciarossa",
      detail: "SMN 約 10:25 → Roma Termini 約 11:55。六件箱出站叫車。",
      drive: "不要。",
    },
    slots: [
      { t: "09:20", title: "SMN 退房", d: "對號 Freccia。" },
      { t: "10:25", title: "往 Termini", d: "約 1 時 30 分。" },
      { t: "12:10", title: "計程車去公寓", d: "不要石板路拖 25 分。" },
      { t: "13:30", title: "寄行李、午餐", d: "明天梵蒂岡早場，今天當移動日。" },
      { t: "16:00", title: "特拉斯提弗列散步", d: "萬神殿可路過外觀。" },
      { t: "18:00", title: "Piazza Santa Maria aperitivo", d: "週五晚上要早佔座。" },
      { t: "19:45", title: "Trastevere 晚餐（訂位）", d: "巷子裡比河岸第一排實在。" },
      { t: "21:15", title: "河岸走回", d: "明天 07:40 出門梵蒂岡。22:00 睡。" },
    ],
  },
  {
    n: 13, city: "羅馬", title: "梵蒂岡博物館＋西斯汀",
    stay: "羅馬第 2 晚　2/20 週六",
    cover: "photos/italy/rome-vatican.jpg",
    rent: { yes: false, label: "不租車", reason: "Prati 走路或 metro A。週六仍會擠。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-vatican.jpg", cap: "聖伯多祿廣場；博物館從北側進" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "下午不要再排遠" },
    ],
    transport: { mode: "步行／地鐵 A", detail: "Ottaviano 或 Cipro。入口在 Viale Vaticano。", drive: "沒有停車場這回事。" },
    slots: [
      { t: "07:40", title: "出發", d: "肩、膝蓋住。六人同一時段。週六 half-term，早場重要。" },
      { t: "08:30", title: "梵蒂岡博物館", d: "先拉斐爾廳→西斯汀。" },
      { t: "11:30", title: "西斯汀", d: "禁拍。出來可進聖伯多祿大殿，量力。" },
      { t: "13:30", title: "午餐（梵蒂岡外）", d: "不要加競技場。" },
      { t: "15:30", title: "聖天使堡外觀＋天使橋", d: "家庭走外觀就夠。" },
      { t: "17:30", title: "聖伯多祿廣場黃昏", d: "免費、圍欄外。" },
      { t: "19:00", title: "Prati 晚餐", d: "Via Cola di Rienzo。" },
      { t: "21:00", title: "回公寓", d: "明天週日梵蒂岡休，改逛街。" },
    ],
  },
  {
    n: 14, city: "羅馬", title: "週日逛街：西班牙階梯、特雷維、萬神殿",
    stay: "羅馬第 3 晚　2/21 週日",
    cover: "photos/italy/rome-spanish.jpg",
    rent: { yes: false, label: "不租車", reason: "梵蒂岡週日休。整天走路逛街。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-spanish.jpg", cap: "西班牙階梯，下面 Via Condotti" },
      { src: "photos/italy/rome-trevi.jpg", cap: "特雷維改黃昏" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "萬神殿" },
    ],
    transport: { mode: "地鐵 A ＋步行", detail: "Spagna 站。Porta Portese 跳蚤是週日早上，剛住進來可去；不想擠就跳過。", drive: "不需要。" },
    slots: [
      { t: "09:30", title: "西班牙階梯", d: "不要坐階梯吃東西（罰款）。" },
      { t: "10:00", title: "Via Condotti 櫥窗", d: "旗艦。折扣在米蘭 Outlet 已買過就看窗。" },
      { t: "11:00", title: "Via del Corso", d: "平價連鎖、小孩衣服。" },
      { t: "12:30", title: "午餐", d: "離開 Corso 一條巷。" },
      { t: "14:30", title: "萬神殿", d: "看穹頂。" },
      { t: "16:00", title: "Piazza Navona", d: "坐下來等天黑。" },
      { t: "17:40", title: "特雷維夜燈", d: "丟幣就走。" },
      { t: "19:30", title: "晚餐", d: "Navona／萬神殿附近，訂位。" },
      { t: "21:00", title: "巷子夜走 20 分", d: "21:30 回。明天競技場。" },
    ],
  },
  {
    n: 15, city: "羅馬", title: "競技場、廣場、帕拉提諾",
    stay: "羅馬第 4 晚　2/22 週一",
    cover: "photos/italy/rome-colosseum.jpg",
    rent: { yes: false, label: "不租車", reason: "metro B Colosseo。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-colosseum.jpg", cap: "競技場，官方聯票含廣場與帕拉提諾" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "下午不要再加長隊" },
    ],
    transport: { mode: "地鐵 B", detail: "Colosseo 站。時段提前 20 分。", drive: "ZTL。" },
    slots: [
      { t: "08:40", title: "競技場入場", d: "家庭 90 分。" },
      { t: "10:30", title: "古羅馬廣場＋帕拉提諾", d: "同一張聯票。" },
      { t: "13:00", title: "午餐", d: "離開遺址再吃。" },
      { t: "15:00", title: "Campidoglio 卡比托利歐", d: "看古羅馬屋頂，免費。" },
      { t: "17:30", title: "競技場外牆夜燈", d: "Via dei Fori Imperiali。不用門票。" },
      { t: "19:30", title: "Monti 晚餐", d: "競技場後面街區。" },
      { t: "21:15", title: "地鐵回", d: "21:30 到家。" },
    ],
  },
  {
    n: 16, city: "羅馬", title: "緩衝：龐貝或聖天使堡",
    stay: "羅馬第 5 晚　2/23 週二",
    cover: "photos/italy/pompeii.jpg",
    rent: { yes: false, label: "不租車", reason: "龐貝用 Freccia 到那不勒斯。明天早飛，不要租車。" },
    hotel: { name: "續住；今晚收箱", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/pompeii.jpg", cap: "選配龐貝，整天" },
      { src: "photos/italy/rome-vatican.jpg", cap: "不出城可進聖天使堡內部" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "最後一晚羅馬" },
    ],
    transport: {
      mode: "Freccia（龐貝）或步行",
      detail: "Termini→Napoli 約 1 時 10 分。不出城：聖天使堡內部或 Borghese（要預約）。",
      drive: "不建議。",
    },
    slots: [
      { t: "07:40", title: "選配 A：龐貝", d: "早班 Freccia。16:00 前返那不勒斯。小孩吃不消就不要去。" },
      { t: "09:30", title: "選配 B：聖天使堡內部／Borghese", d: "Borghese 兩小時一場必預約。" },
      { t: "09:30", title: "選配 C：放空", d: "補買、洗衣。J 人允許空白日。" },
      { t: "18:00", title: "打包", d: "明天 06:45 起床。Outlet 若在米蘭已買，這裡少買。" },
      { t: "19:30", title: "最後一晚羅馬晚餐", d: "住家附近。" },
      { t: "21:00", title: "早睡", d: "龐貝組吃完就睡。" },
    ],
  },
  {
    n: 17, city: "台北方向", title: "羅馬 FCO 早班起飛",
    stay: "CI76 機上（2/25 清晨抵桃園）",
    cover: "photos/italy/rome-colosseum.jpg",
    rent: { yes: false, label: "不租車", reason: "Leonardo Express 是唯一正確答案。" },
    hotel: { name: "機上", arrive: "2/25 約 05:40 桃園 T1", checkIn: "—" },
    photos: [
      { src: "photos/italy/rome-colosseum.jpg", cap: "羅馬，從這裡飛回家" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "這趟先買的是米蘭" },
      { src: "photos/italy/venice-canal.jpg", cap: "威尼斯改成嘉年華之後的水城" },
    ],
    transport: {
      mode: "Leonardo Express ＋ 華航 CI76",
      detail: "Termini 約 07:20 → FCO 約 07:52。CI76 預設 2/24 週三 11:00 FCO T3 → TPE 05:40+1。冬天常見週一／週三，仍要核對。華航桃園下 T1。",
      drive: "定價計程車約 €50，塞車不穩。",
    },
    slots: [
      { t: "06:45", title: "起床退房", d: "護照、登機證、水。" },
      { t: "07:10", title: "到 Termini", d: "地鐵或預排計程車。" },
      { t: "07:20", title: "Leonardo Express", d: "約 32 分。誤點下一班仍夠。", buf: true },
      { t: "08:05", title: "FCO T3 報到", d: "華航。" },
      { t: "11:00", title: "CI76 起飛（核對班表）", d: "時區改回台灣。" },
      { t: "2/25 05:40", title: "桃園 T1", d: "不是長榮 T2。" },
    ],
  },
];

const ROUTE = [
  ["D1 2/8", "台北夜航 BR95→MXP"],
  ["D2–4", "米蘭：金四角＋Cenacolo＋Serravalle"],
  ["D5–7", "威尼斯（嘉年華後）"],
  ["D8–11", "佛羅倫斯＋工坊"],
  ["D12–16", "羅馬 5 晚（梵蒂岡 2/20 週六）"],
  ["D17 2/24", "FCO CI76 飛桃園"],
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
    ["出發", "2027.02.08"],
    ["地面", "15 晚"],
    ["住宿", "4 段包棟"],
    ["回程", "羅馬 FCO"],
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
  ["photos/italy/milan-montenapoleone.jpg", "米蘭金四角"],
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
