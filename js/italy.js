const START_DATE = "2027-02-06";

const SEASON = [
  ["威尼斯", "嘉年華最後三天，不是空城冬天", "官方 Carnevale 2027：1/23–2/9。街道面具高峰到油膩星期二 2/9 閉幕。2/6 最貴舞會你們在飛機上；2/7–9 仍是當地旺季，房價高、vaporetto 擠。二月水城冷、濕、偶有 acqua alta，不是夏天的明信片。白天約 07:20–17:40。"],
  ["佛羅倫斯", "博物館淡季，鄉間很多關", "烏菲茲、大衛、主教堂是重點。二月托斯卡尼酒莊、五漁村不要排。2/11 梵蒂岡休館，人在佛羅倫斯剛好。白天短，博物館 16:30 後開始收。"],
  ["羅馬", "城內淡季＋英國半學期尾", "競技場、梵蒂岡、萬神殿全年開（除註明日）。2/11 拉特朗條約梵蒂岡博物館休；2/14 週日也休。英國 half-term 約 2/13–21，羅馬會比較擠。二月冷雨，不是阿瑪菲天氣。"],
  ["米蘭", "進出門＋購物，不是第四座黃金城", "直飛 MXP 的正確用法：抵達當天把人送到威尼斯趕嘉年華；回程兩晚放大教堂、最後的晚餐、金四角、Serravalle。二月市區灰冷，不是雪國。"],
  ["逛街／Outlet", "市區走路每天都有；Outlet 要整天", "威尼斯 Mercerie、佛羅倫斯 Oltrarno 工坊、羅馬 Via Condotti／Corso 都嵌在日程裡。Serravalle 是戶外村，接駁往返約 1 時 15 分，2/20 專日。隔天早飛，大袋當天收進託運。"],
  ["不要加的", "五漁村、阿瑪菲、一日四城", "二月步道濕、店休、日照短。黃金四城均分＝六人冬天搬四次家。龐貝、錫耶納只當選配，不當作必去。"],
  ["晚上", "16:30 是博物館關門，不是一天結束", "二月日落約 17:30–17:45，烏菲茲／梵蒂岡／競技場這時關。街上、廣場、河岸、嘉年華反而剛亮燈。家庭預設 18:00 aperitivo、19:30 晚餐、21:00–21:30 夜走回公寓。不是夜店，也不要空白。"],
];

const COMPARE = [
  ["MXP → 米蘭 Centrale", "Malpensa Express 約 50 分", "計程車 45–70 分，市區定價約 €95–115"],
  ["米蘭 → 威尼斯 S. Lucia", "Frecciarossa 約 2 時 25 分", "A4 約 2 時 45 分＋ZTL；島上沒車"],
  ["威尼斯 → 佛羅倫斯 SMN", "Frecciarossa 約 2 時 05 分", "開車約 3 小時，入城 ZTL"],
  ["佛羅倫斯 → 羅馬 Termini", "Frecciarossa 約 1 時 30 分", "A1 約 3 小時，羅馬停車地獄"],
  ["羅馬 → 米蘭 Centrale", "Frecciarossa 約 3 時 10 分", "A1 約 5 小時，隔天早飛不划算"],
  ["米蘭 → Serravalle Outlet", "官方接駁約 1 時 15–30 分（來回票面寫死）", "A7 約 1 時；六人租車還車跟早飛打架"],
];

const BOOKINGS = [
  "現在立刻：長榮 BR95（2/6 23:10 TPE）／BR96（2/21 11:00 MXP）。冬天時刻表 2026/10/25–2027/3/26：去程 23:10→06:50+1，回程 11:00→06:10+1。2/6 是農曆大年夜，位子會先沒。",
  "現在立刻：威尼斯 2/7–2/10 包棟。嘉年華最後三天＋春節，Cannaregio／Dorsoduro 整套 6 人最早沒。不要聖馬可 noisefest。",
  "現在立刻：佛羅倫斯 2/10–14、羅馬 2/14–19、米蘭 Centrale 2/19–21 整套。羅馬重疊英國半學期。",
  "約 2026/09 下旬：最後的晚餐（2/19 下午場）官方 cenacolovinciano.org 季票制，中午義大利時間開賣。六人同一 slot，未滿 18 免費仍要預約。",
  "出發前 8–12 週：烏菲茲（2/11）、學院大衛（2/12）、梵蒂岡（2/15）、競技場（2/16）只走官方。梵蒂岡不要訂 2/11、不要訂 2/14 週日。",
  "開賣就訂：四段 Frecciarossa Super Economy（2/7 米蘭→威尼斯、2/10 威尼斯→佛羅倫斯、2/14 佛羅倫斯→羅馬、2/19 羅馬→米蘭）。通票划不來。",
  "出發前 2–4 週：米蘭大教堂屋頂、總督宮、威尼斯 vaporetto 3 日卡、Serravalle 接駁（2/20 9:00 或 9:30 班）。",
  "出發前 3 天：核對 BR96、Freccia 車廂、Cenacolo 確認信、防滑鞋、雨具。Trenitalia／Italo／長榮 App 登入。",
];

const CHECKS = [
  "護照有效期 > 6 個月、申根入境空白頁",
  "長榮電子登機證／會員卡（2/6 大年夜夜航）",
  "四段 Frecciarossa 電子票（六人對號）",
  "《最後的晚餐》確認信（2/19，姓名＝護照）",
  "烏菲茲、學院、梵蒂岡、競技場官方 QR",
  "總督宮／聖馬可若有訂",
  "威尼斯 vaporetto 3 日卡或 App",
  "Serravalle 接駁來回票（回程時刻寫死）",
  "包棟確認函 4 段（威尼斯最急）",
  "旅行保險單（含取消）",
  "國際雙幣卡＋歐元備用現金 €300",
  "轉換插頭 Type L／C、行動電源",
  "防水外套＋防滑靴（水城石頭橋會濕）",
  "薄羽絨、手套、小孩一套備用乾襪",
  "Trenitalia／Italo／長榮／ACTV App 已登入",
  "大箱不超過 4 顆；威尼斯橋上不拖六顆硬殼",
  "2/20 Outlet 購物袋能進託運，不要手提爆",
  "2/21 06:30 鬧鐘雙份；Centrale→MXP Express",
];

const TICKETS = [
  {
    id: "hotel",
    must: true,
    when: "現在立刻（嘉年華＋春節）",
    title: "住宿——四大兩小優先包棟／整套",
    standard: "威尼斯 3 晚最先沒。接著佛羅倫斯 4、羅馬 5、米蘭車站 2。Booking 整套房 privacy_type=3，或 Airbnb 整套。不要開三間雙人房。",
    premium: {
      name: "威尼斯運河 palazzo 整層最急",
      rec: true,
      note: "嘉年華 Gritti／Danieli 三間是另一個預算。家庭優先 Cannaregio 整套；要必住就問家庭套房，不要拆三棟。"
    }
  },
  {
    id: "eva",
    must: true,
    when: "現在立刻",
    title: "長榮 BR95／BR96 機票",
    standard: "經濟艙來回。冬天班表：2/6 23:10 TPE→MXP 06:50+1；2/21 11:00 MXP→TPE 06:10+1。大年夜旺季。",
    premium: {
      name: "皇家商務艙／豪華經濟艙",
      rec: true,
      note: "去程 14 小時 40 分夜航，落地還要趕威尼斯火車。J 人建議至少去程豪華經濟或商務。回程早班商務可睡。"
    }
  },
  {
    id: "supper",
    must: true,
    when: "約 2026/09 下旬開賣（季票制）",
    title: "《最後的晚餐》2/19 下午",
    standard: "官方 cenacolovinciano.org／lastsupper.shop。15 分鐘一場，實名、不能改名。六人同一時段。現在還沒有 2027 年 2 月。",
    premium: null
  },
  {
    id: "vatican",
    must: true,
    when: "出發前 8–12 週　官方",
    title: "梵蒂岡博物館＋西斯汀　2/15（一）",
    standard: "museivaticani.va。2/11 拉特朗條約休館、2/14 週日休（二月最後週日是 2/28）。鎖定週一。未滿 6 歲免費，6–18 減免，都要預約。",
    premium: {
      name: "官方早場／小團",
      rec: true,
      note: "沒有商務艙。官方早餐場較空。不要買街口 skip-the-line。"
    }
  },
  {
    id: "colosseo",
    must: true,
    when: "出發前 8 週　官方",
    title: "競技場＋古羅馬廣場＋帕拉提諾　2/16",
    standard: "colosseo.it 或 Coopculture。Full Experience 含地下／競技場層看當季開放。六人同一場。",
    premium: {
      name: "地下層／競技場層時段",
      rec: true,
      note: "比普通入場早賣完。沒有艙等，只有時段。"
    }
  },
  {
    id: "uffizi",
    must: true,
    when: "出發前 8 週　官方 tickets.uffizi.it",
    title: "烏菲茲　2/11　學院大衛　2/12",
    standard: "烏菲茲提前票約 €29（含 €4 預約）。未滿 18 常免費仍要預約。兩館不要同一天。大衛在學院，不在烏菲茲。",
    premium: {
      name: "官方導覽；下午票較便宜",
      rec: false,
      note: "16:00 後烏菲茲較便宜，但冬天關門早，家庭還是上午場。"
    }
  },
  {
    id: "freccia",
    must: true,
    when: "開賣就訂 Super Economy",
    title: "Frecciarossa 四段　對號入座",
    standard: "Trenitalia 或 Italo。2/7 米蘭→威尼斯、2/10 威尼斯→佛羅倫斯、2/14 佛羅倫斯→羅馬、2/19 羅馬→米蘭。散在兩週，買連續通票划不來。",
    premium: {
      name: "Business／Executive",
      rec: false,
      note: "商務艙對家庭六人意義不大。Standard 對號、有行李架就夠。真要升級只升羅馬→米蘭那三段小時。"
    }
  },
  {
    id: "venice-pass",
    must: true,
    when: "出發前 2 週",
    title: "vaporetto 3 日卡＋總督宮",
    standard: "ACTV 3 日約 €45／人（6 歲以上多半全票）。 overnight 旅客通常免當日入場稅，由公寓登記。總督宮 palazzoducale.visitmuve.it。",
    premium: null
  },
  {
    id: "outlet",
    must: false,
    when: "出發前 7 天",
    title: "Serravalle 接駁　2/20",
    standard: "McArthurGlen 官方 Zani／Frigerio。Centrale 9:00 或 9:30，回程票面寫死。成人約 €25、4–12 歲約 €10。不想去就改市區 Corso。",
    premium: {
      name: "改 Fidenza Village（較早回）",
      rec: false,
      note: "Piazza Repubblica 9:45 去、17:00 回，成人約 €10。比較小、隔天早飛較不趕。"
    }
  },
  {
    id: "duomo-mi",
    must: true,
    when: "出發前 2–4 週",
    title: "米蘭大教堂屋頂　2/19",
    standard: "duomomilano.it 屋頂＋教堂，選電梯。2/19 傍晚再走迴廊與 Montenapoleone 櫥窗。",
    premium: null
  },
];

const DAYS = [
  {
    n: 1,
    city: "台北",
    title: "大年夜夜航，飛米蘭",
    stay: "長榮 BR95 機上過夜",
    cover: "photos/centrale.jpg",
    rent: { yes: false, label: "不租車", reason: "出國日只處理桃園。不要自己開去機場再棄車。" },
    hotel: { name: "機上", arrive: "次日 06:50 米蘭 MXP", checkIn: "—" },
    photos: [
      { src: "photos/centrale.jpg", cap: "明天會用到的米蘭中央車站" },
      { src: "photos/italy/frecciarossa.jpg", cap: "明天要趕的 Frecciarossa，先記在腦子裡" },
    ],
    transport: {
      mode: "飛機",
      detail: "EVA BR95　TPE T2 23:10 → MXP T1 06:50+1　約 14 小時 40 分（2026/10/25–2027/3/26 冬天班表）",
      drive: "不適用",
    },
    slots: [
      { t: "18:30", title: "離開台北市區", d: "大年夜塞車。機場捷運到 T2 預留 50–70 分。" },
      { t: "20:10", title: "桃園 T2 報到", d: "長程＋春節，起飛前 3 小時到。托運量過，大箱不超過 4 顆。" },
      { t: "22:40", title: "登機", d: "去程盡量靠窗睡。落地還要趕威尼斯。" },
      { t: "23:10", title: "BR95 起飛", d: "2/6 是農曆春節。時差 CET＝台灣 −7。飛行中改時區。威尼斯最貴舞會在你們頭上。", buf: true },
    ],
  },
  {
    n: 2,
    city: "威尼斯",
    title: "落地轉火車，趕上嘉年華",
    stay: "Cannaregio／Dorsoduro，連住 3 晚",
    cover: "photos/italy/venice-sanmarco.jpg",
    rent: { yes: false, label: "不租車", reason: "島上沒車。MXP→Centrale→Freccia→S. Lucia→vaporetto 是同一條走廊。" },
    hotel: { name: "威尼斯整套公寓（vaporetto 站 5 分內）", arrive: "約 15:30–16:30 入住；先寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/venice-sanmarco.jpg", cap: "聖馬可廣場，嘉年華主舞台" },
      { src: "photos/italy/venice-carnival.jpg", cap: "嘉年華面具，2/7–9 街道仍有盛裝" },
      { src: "photos/italy/venice-canal.jpg", cap: "大運河，vaporetto 就是公車" },
    ],
    transport: {
      mode: "Malpensa Express ＋ Frecciarossa ＋ vaporetto",
      detail: "MXP→Centrale 約 50 分。Freccia 米蘭→威尼斯 S. Lucia 約 2 時 25 分。不要搶 8 點車，10:35 左右那班才像一家人剛下長途。",
      drive: "計程車 MXP→Centrale 約 €95–115。之後仍要上火車。島上沒車。",
    },
    slots: [
      { t: "06:50", title: "MXP T1 抵達", d: "申根入境＋行李，備 60–90 分。春節班機人多。" },
      { t: "08:20", title: "出關緩衝", d: "只換當天歐元。不要在租車櫃台停留。", buf: true },
      { t: "08:53", title: "Malpensa Express → Centrale", d: "每 30 分一班。去 Centrale 不是 Cadorna（今天要轉 Freccia）。" },
      { t: "09:50", title: "Centrale 找月台", d: "對號入座。六人＋箱預留 20 分。誤點搭下一班 Freccia，不要改開車。" },
      { t: "10:35", title: "Frecciarossa 往 Venezia S. Lucia", d: "約 13:00–13:10 到島上車站。Standard 即可。" },
      { t: "13:15", title: "vaporetto 去公寓", d: "先買 3 日卡。大箱不要走三座橋。水上計程車六人很貴，箱多才考慮。" },
      { t: "14:00", title: "寄行李／短躺", d: "落地日禁止暴走。check-in 15:00。" },
      { t: "16:30", title: "聖馬可廣場看嘉年華", d: "建立方位：廣場、鐘樓外觀、面具人。不要排總督宮。天很快黑，人還在，這不是收工時間。" },
      { t: "18:00", title: "廣場附近 aperitivo", d: "Spritz＋小食。離開 Florian／廣場正面兩條街。落地日用坐的比再暴走好。" },
      { t: "19:30", title: "晚餐", d: "義大利廚房多半 19:30 才認真開。18:00 去會撞上觀光套餐。Cannaregio／Dorsoduro。" },
      { t: "21:00", title: "嘉年華夜場", d: "面具晚上更好看。聖馬可或大運河 vaporetto 回程。22:15 睡——時差在，但不要 16:30 關機。" },
    ],
  },
  {
    n: 3,
    city: "威尼斯",
    title: "嘉年華平日＋Mercerie 逛街",
    stay: "威尼斯第 2 晚　2/8 週一",
    cover: "photos/italy/venice-carnival.jpg",
    rent: { yes: false, label: "不租車", reason: "今天全是走路＋vaporetto。Murano 玻璃島不排。" },
    hotel: { name: "續住威尼斯公寓", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/venice-carnival.jpg", cap: "平日盛裝仍在，比週六好走" },
      { src: "photos/italy/venice-rialto.jpg", cap: "里亞托橋，下午逛街走這裡" },
      { src: "photos/italy/venice-sanmarco.jpg", cap: "總督宮在廣場南側，要官方票" },
    ],
    transport: {
      mode: "步行／vaporetto",
      detail: "聖馬可→里亞托沿 Mercerie 約 15–20 分。ACTV 3 日卡含 vaporetto，不含水上計程車。",
      drive: "無法駕駛。",
    },
    slots: [
      { t: "09:00", title: "總督宮（若已訂）", d: "沒訂就改廣場＋聖馬可博物館。安檢慢，預留。" },
      { t: "11:30", title: "廣場看裝扮", d: "拍照、讓小孩看面具。不要買 €800 舞會。" },
      { t: "13:00", title: "午餐", d: "離開廣場兩條街，菜單有價格的小館。觀光區會宰。" },
      { t: "15:00", title: "Mercerie → 里亞托逛街", d: "這才是威尼斯逛街：紙品、面具工坊、窗。Castello／Cannaregio 比較不擠。" },
      { t: "17:30", title: "大運河 vaporetto 1 號線", d: "當觀光船。二月約 17:40 天黑，船上反而看燈。坐到底再換回程，不要中途亂下。" },
      { t: "18:45", title: "Cannaregio aperitivo", d: "Fondamenta 河邊。比聖馬可便宜、坐得下六人。" },
      { t: "19:45", title: "晚餐", d: "Cicchetti 或坐下來。避開只有英文套餐的店。" },
      { t: "21:15", title: "再回聖馬可看夜場盛裝", d: "平日仍有面具。22:00 前 vaporetto 回公寓。" },
    ],
  },
  {
    n: 4,
    city: "威尼斯",
    title: "油膩星期二，嘉年華閉幕",
    stay: "威尼斯第 3 晚　2/9 週二",
    cover: "photos/italy/venice-rialto.jpg",
    rent: { yes: false, label: "不租車", reason: "閉幕日廣場最滿。箱不要先搬。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/venice-sanmarco.jpg", cap: "Martedì Grasso 閉幕主場在聖馬可" },
      { src: "photos/italy/venice-carnival.jpg", cap: "遊行與盛裝，官方活動看到傍晚" },
      { src: "photos/italy/venice-canal.jpg", cap: "不要再加 Murano，明天要搬佛羅倫斯" },
    ],
    transport: {
      mode: "步行／vaporetto",
      detail: "整天島內。閉幕人潮，預留多一倍走路時間。",
      drive: "無法駕駛。",
    },
    slots: [
      { t: "09:30", title: "聖馬可閉幕活動", d: "官方節目到下午。Flight of the Lion 近年常因安全取消，不要當成必看。" },
      { t: "12:00", title: "午餐＋離開廣場", d: "人最多的時候。改走 Dorsoduro 或 Cannaregio。" },
      { t: "15:00", title: "再看一輪盛裝", d: "閉幕日下午到晚上都有活動。不要 17:00 回公寓打包當一天結束。" },
      { t: "17:30", title: "Martedì Grasso 傍晚", d: "官方節目看到天黑。廣場風大，手套＋熱飲。這晚才是嘉年華句點。" },
      { t: "19:30", title: "閉幕晚餐（訂位）", d: "這晚餐廳滿。大箱晚餐前先收回公寓，吃完再出門。" },
      { t: "21:00", title: "最後一圈嘉年華", d: "22:00 回。明天 09:00 要在 S. Lucia，晚上仍要出門，不是空白。" },
    ],
  },
  {
    n: 5,
    city: "佛羅倫斯",
    title: "Freccia 轉場，舊橋定位",
    stay: "Oltrarno／SMN，連住 4 晚　2/10 週三",
    cover: "photos/italy/florence-ponte.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 約 2 時 05 分。佛羅倫斯 ZTL，開進去罰單。" },
    hotel: { name: "整套公寓，SMN 步行 10 分或 Oltrarno", arrive: "約 14:00–15:00 入住", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "Frecciarossa，威尼斯→佛羅倫斯約 2 小時" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋 Ponte Vecchio，下午只走外觀" },
      { src: "photos/italy/florence-duomo.jpg", cap: "主教堂，今天不排圓頂" },
    ],
    transport: {
      mode: "vaporetto ＋ Frecciarossa",
      detail: "公寓→S. Lucia 預留 40 分。Freccia 約 10:25→12:30 到 SMN。Italo 也可以，同一走廊。",
      drive: "開車約 3 小時＋ZTL。六件行李不划算。",
    },
    slots: [
      { t: "08:20", title: "退房、vaporetto 去車站", d: "橋＋階梯，叫水上計程車只在箱真的搬不動時。" },
      { t: "09:40", title: "S. Lucia 月台", d: "對號。去程看右側波河平原，沒有阿爾卑斯。" },
      { t: "10:25", title: "Freccia 往 Firenze SMN", d: "約 2 時 05 分。Standard。" },
      { t: "12:35", title: "SMN 抵達", d: "出站即中心。Oltrarno 要過河，計程車可進 ZTL。" },
      { t: "13:30", title: "寄行李、午餐", d: "轉場日不進烏菲茲。" },
      { t: "15:30", title: "主教堂外觀＋舊橋", d: "建立方位。圓頂、烏菲茲留明天後天。" },
      { t: "17:40", title: "舊橋黃昏", d: "二月日落約 17:40。河燈亮起。這段 20 分，不要回公寓躺平。" },
      { t: "18:30", title: "Santo Spirito aperitivo", d: "工坊多半關了，廣場改喝酒坐著。六人戶外要加外套。" },
      { t: "19:45", title: "Oltrarno 晚餐", d: "trattoria 約 19:30 開。明天烏菲茲早場，吃完走河岸。" },
      { t: "21:15", title: "阿諾河夜走", d: "舊橋到聖三一橋來回約 20 分。22:00 睡。" },
    ],
  },
  {
    n: 6,
    city: "佛羅倫斯",
    title: "烏菲茲（梵蒂岡這天休館）",
    stay: "佛羅倫斯第 2 晚　2/11 週四",
    cover: "photos/italy/florence-uffizi.jpg",
    rent: { yes: false, label: "不租車", reason: "全步行。2/11 人在佛羅倫斯，剛好避開梵蒂岡休館。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-uffizi.jpg", cap: "烏菲茲，波提切利在這裡，大衛不在" },
      { src: "photos/italy/florence-duomo.jpg", cap: "出來後看主教堂，不排圓頂" },
      { src: "photos/italy/florence-ponte.jpg", cap: "舊橋，烏菲茲走廊從上面過河" },
    ],
    transport: {
      mode: "步行",
      detail: "公寓到烏菲茲 10–20 分。不要同一天加大衛。",
      drive: "ZTL。",
    },
    slots: [
      { t: "08:40", title: "烏菲茲門口", d: "官方時段提前 15 分。護照。未滿 18 免費仍要票。" },
      { t: "09:00", title: "烏菲茲", d: "波提切利《維納斯的誕生》、達文西、拉斐爾。家庭抓 2.5 小時，不要全館打卡。" },
      { t: "12:00", title: "午餐", d: "走出走廊再吃。館內咖啡貴。" },
      { t: "14:30", title: "主教堂內部或鐘樓", d: "圓頂爬梯 463 級，帶小孩可改鐘樓或只看外觀。" },
      { t: "16:30", title: "舊橋黃昏", d: "金鋪觀光價，看就好。皮件去 Oltrarno 工坊，不要在橋上買。" },
      { t: "17:50", title: "Piazzale Michelangelo 夜景（選）", d: "計程車來回約 40 分＋停留。六人兩台車。不想上山就河岸走，一樣有燈。" },
      { t: "19:30", title: "晚餐", d: "南岸或聖十字附近。家庭 19:30 剛剛好。" },
      { t: "21:00", title: "主教堂廣場夜燈", d: "外觀免費。22:00 回。明天學院早場。" },
    ],
  },
  {
    n: 7,
    city: "佛羅倫斯",
    title: "大衛＋Oltrarno 工坊逛街",
    stay: "佛羅倫斯第 3 晚　2/12 週五",
    cover: "photos/italy/florence-david.jpg",
    rent: { yes: false, label: "不租車", reason: "學院到 Oltrarno 過河走路。San Lorenzo 皮件攤不要排。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/florence-david.jpg", cap: "米開朗基羅《大衛》，在學院 Accademia" },
      { src: "photos/italy/florence-oltrarno.jpg", cap: "Oltrarno Santo Spirito，工坊在這一帶" },
      { src: "photos/italy/florence-ponte.jpg", cap: "過舊橋去南岸逛街" },
    ],
    transport: {
      mode: "步行",
      detail: "學院在北岸。中午過河。Via Tornabuoni 當櫥窗，不強迫買。",
      drive: "不需要。",
    },
    slots: [
      { t: "08:50", title: "學院 Accademia", d: "大衛在這裡，不在烏菲茲。官方票。約 90 分夠。" },
      { t: "11:00", title: "Mercato Centrale 二樓午餐", d: "吃中飯可以。戶外 San Lorenzo 皮件攤多數不是工坊貨，不要在那買「義大利皮」。" },
      { t: "13:30", title: "Via Tornabuoni 櫥窗", d: "Gucci／Ferragamo 旗艦，散步 40 分。" },
      { t: "15:00", title: "Oltrarno 工坊逛街", d: "Via Maggio、Borgo San Jacopo、Santo Spirito：皮件、紙品、金工。這才是佛羅倫斯逛街日。" },
      { t: "18:00", title: "Pitti 外觀", d: "Boboli 冬天約 16:30 關，晚上進不了園。只看廣場與宮殿牆。" },
      { t: "19:30", title: "Oltrarno 晚餐", d: "逛街袋先放回公寓再出門。Santo Spirito／San Frediano。" },
      { t: "21:00", title: "Santo Spirito 夜廣場", d: "當地晚上在這裡坐。22:00 回。明天錫耶納選配或再走一天。" },
    ],
  },
  {
    n: 8,
    city: "佛羅倫斯",
    title: "錫耶納選配，或再走一天",
    stay: "佛羅倫斯第 4 晚　2/13 週六",
    cover: "photos/italy/siena.jpg",
    rent: { yes: false, label: "不租車", reason: "錫耶納巴士約 1 時 15 分。二月鄉間很多關，不要排酒莊五日遊。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/siena.jpg", cap: "錫耶納 Campo 廣場，巴士日遊" },
      { src: "photos/italy/florence-duomo.jpg", cap: "不出城就補主教堂圓頂或 Boboli" },
      { src: "photos/italy/florence-oltrarno.jpg", cap: "或把昨天沒走完的工坊走完" },
    ],
    transport: {
      mode: "巴士（選配）或步行",
      detail: "Flixbus／Tiemme 佛羅倫斯→錫耶納約 1 時 15 分。冬天末班提早核對。不出城就走路。",
      drive: "ZTL 兩座城都不划算。",
    },
    slots: [
      { t: "08:30", title: "選配 A：巴士去錫耶納", d: "Campo 廣場、大教堂外觀。二月不是賽馬季。16:30 前返程。" },
      { t: "09:30", title: "選配 B：不出城", d: "圓頂／Boboli／補買工坊。不要臨時加五漁村。" },
      { t: "17:30", title: "回到佛羅倫斯公寓", d: "錫耶納巴士或市區收工。先卸貨、把明天箱子收好。" },
      { t: "19:15", title: "最後一晚佛羅倫斯晚餐", d: "吃過的街區即可，不開新地圖。" },
      { t: "20:45", title: "舊橋＋河岸夜走", d: "這座城晚上就是橋和燈。21:45 回。明天 10:00 要在 SMN。" },
    ],
  },
  {
    n: 9,
    city: "羅馬",
    title: "轉場羅馬，特拉斯提弗列走走",
    stay: "Prati／Trastevere，連住 5 晚　2/14 週日情人節",
    cover: "photos/italy/rome-trastevere.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 約 1 時 30 分。羅馬 ZTL＋週日。梵蒂岡週日休，今天不當參觀日。" },
    hotel: { name: "整套公寓", arrive: "約 13:30–14:30 入住", checkIn: "15:00" },
    photos: [
      { src: "photos/italy/frecciarossa.jpg", cap: "佛羅倫斯→羅馬約 1 時 30 分" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "特拉斯提弗列，週日晚上吃飯走路" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "若還有腳，路過萬神殿外觀" },
    ],
    transport: {
      mode: "Frecciarossa",
      detail: "SMN 約 10:25 → Roma Termini 約 11:55。Prati 改 metro A；Trastevere 改電車 8。",
      drive: "A1 約 3 小時＋週日限行。不要。",
    },
    slots: [
      { t: "09:20", title: "SMN 退房", d: "對號 Freccia。" },
      { t: "10:25", title: "往 Roma Termini", d: "約 1 時 30 分。這是四段裡最短的。" },
      { t: "12:10", title: "計程車或地鐵去公寓", d: "六件箱在 Termini 不要走 25 分石板路。" },
      { t: "13:30", title: "寄行李、午餐", d: "週日梵蒂岡休、Porta Portese 跳蚤市場早上已過且剛搬完不要去。" },
      { t: "16:00", title: "特拉斯提弗列散步", d: "情人節人多。當移動日。萬神殿可路過外觀，不要排裡面。" },
      { t: "18:00", title: "Piazza Santa Maria aperitivo", d: "廣場邊坐。情人節要早佔座。這就是羅馬晚上，不是 16:00 回房。" },
      { t: "19:45", title: "Trastevere 晚餐（訂位）", d: "19:30–20:00 開廚。巷子裡比河岸第一排實在。" },
      { t: "21:15", title: "河岸走一段再回", d: "電車或走路。明天梵蒂岡 07:40 出門，22:00 睡。" },
    ],
  },
  {
    n: 10,
    city: "羅馬",
    title: "梵蒂岡博物館＋西斯汀",
    stay: "羅馬第 2 晚　2/15 週一",
    cover: "photos/italy/rome-vatican.jpg",
    rent: { yes: false, label: "不租車", reason: "Prati 走路或 metro A。安檢只能走。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-vatican.jpg", cap: "聖伯多祿廣場；博物館從北側進" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "下午不要再排遠，回河岸休息" },
    ],
    transport: {
      mode: "步行／地鐵 A",
      detail: "Ottaviano 或 Cipro 站。官方入口在 Viale Vaticano，不是聖伯多祿正面。",
      drive: "梵蒂岡沒有停車場這回事。",
    },
    slots: [
      { t: "07:40", title: "出發", d: "肩、膝要蓋住。護照＋QR。六人同一時段。" },
      { t: "08:30", title: "梵蒂岡博物館", d: "地圖先走拉斐爾廳→西斯汀，不要在希臘羅馬廳耗光子彈。" },
      { t: "11:30", title: "西斯汀禮拜堂", d: "禁拍。出來可進聖伯多祿大殿（安檢另排，量力）。" },
      { t: "13:30", title: "午餐（梵蒂岡外）", d: "不要加競技場。吃完可以走去聖天使堡，不是回公寓關機。" },
      { t: "15:30", title: "聖天使堡外觀＋天使橋", d: "二月進堡可選。家庭走外觀＋橋上天使就夠。" },
      { t: "17:30", title: "聖伯多祿廣場黃昏", d: "免費、圍欄外。圓頂燈亮。博物館已關，廣場沒關。" },
      { t: "19:00", title: "Prati 晚餐", d: "Via Cola di Rienzo 一帶，吃完可買水與明天早餐。" },
      { t: "21:00", title: "回公寓", d: "明天競技場早場。今晚走到 21:00，不是 13:30 收工。" },
    ],
  },
  {
    n: 11,
    city: "羅馬",
    title: "競技場、廣場、帕拉提諾",
    stay: "羅馬第 3 晚　2/16 週二",
    cover: "photos/italy/rome-colosseum.jpg",
    rent: { yes: false, label: "不租車", reason: "metro B Colosseo。遺址內全走。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-colosseum.jpg", cap: "競技場，官方聯票含廣場與帕拉提諾" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "下午不要再加萬神殿長隊，留 2/17" },
    ],
    transport: {
      mode: "地鐵 B",
      detail: "Colosseo 站出站即到。安檢慢，時段提前 20 分。",
      drive: "ZTL。",
    },
    slots: [
      { t: "08:40", title: "競技場入場", d: "官方 Full Experience 看當季開放層。家庭 90 分。" },
      { t: "10:30", title: "古羅馬廣場＋帕拉提諾", d: "同一張聯票。走主道，不要每塊石頭解說。" },
      { t: "13:00", title: "午餐", d: "離開遺址再吃。山上風大，小孩帽子。" },
      { t: "15:00", title: "Campidoglio 卡比托利歐", d: "米開朗基羅廣場看古羅馬屋頂，免費。不要 15:30 回房躺平。" },
      { t: "17:30", title: "競技場外牆夜燈", d: "Via dei Fori Imperiali。晚上外牆亮著，不用門票。這才是羅馬晚上該做的。" },
      { t: "19:30", title: "Monti 晚餐", d: "競技場後面街區，比 Termini 好。" },
      { t: "21:15", title: "地鐵回公寓", d: "石板路已走一天，21:30 到家即可。" },
    ],
  },
  {
    n: 12,
    city: "羅馬",
    title: "西班牙階梯逛街＋萬神殿特雷維",
    stay: "羅馬第 4 晚　2/17 週三",
    cover: "photos/italy/rome-spanish.jpg",
    rent: { yes: false, label: "不租車", reason: "今天是羅馬逛街日。全部走路。" },
    hotel: { name: "續住", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/rome-spanish.jpg", cap: "西班牙階梯，下面就是 Via Condotti" },
      { src: "photos/italy/rome-trevi.jpg", cap: "特雷維，路過丟幣，不排隊兩小時" },
      { src: "photos/italy/rome-pantheon.jpg", cap: "萬神殿，二月通常免預約或現場短排" },
    ],
    transport: {
      mode: "地鐵 A ＋步行",
      detail: "Spagna 站出站即階梯。Condotti→Corso→特雷維→萬神殿一條線。",
      drive: "不需要。",
    },
    slots: [
      { t: "09:30", title: "西班牙階梯", d: "拍照 20 分。不要坐階梯吃東西（罰款）。" },
      { t: "10:00", title: "Via Condotti 櫥窗", d: "Gucci／Prada／Bulgari。這是櫥窗，不是折扣場。" },
      { t: "11:00", title: "Via del Corso 平價街", d: "連鎖、鞋、小孩衣服。家庭真正能買的在這裡。" },
      { t: "12:30", title: "午餐", d: "離開 Corso 一條巷。" },
      { t: "14:30", title: "萬神殿", d: "看穹頂。特雷維改黃昏再去，下午那裡最擠最難看。" },
      { t: "16:00", title: "Piazza Navona", d: "四河噴泉。坐下來喝一杯，等天黑。" },
      { t: "17:40", title: "特雷維夜燈", d: "比下午好拍，人還是多。丟幣就走。這是晚上行程，不是 16:30 收工。" },
      { t: "19:30", title: "萬神殿／Navona 附近晚餐", d: "訂位。看菜單價格，觀光第一排會貴。" },
      { t: "21:00", title: "巷子夜走 20 分", d: "21:30 回。龐貝若要去是明天，不要今晚加那不勒斯。" },
    ],
  },
  {
    n: 13,
    city: "羅馬",
    title: "緩衝日：博爾蓋塞或龐貝",
    stay: "羅馬第 5 晚　2/18 週四",
    cover: "photos/italy/pompeii.jpg",
    rent: { yes: false, label: "不租車", reason: "龐貝用 Freccia 到那不勒斯再轉。博爾蓋塞在公園，預約。" },
    hotel: { name: "續住；今晚打包", arrive: "已在公寓", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/pompeii.jpg", cap: "選配龐貝。二月較空，但是整天" },
      { src: "photos/italy/rome-vatican.jpg", cap: "不出城可改博爾蓋塞或聖伯多祿圓頂" },
      { src: "photos/italy/rome-trastevere.jpg", cap: "什麼都不加也可以，明天要去米蘭" },
    ],
    transport: {
      mode: "Freccia（龐貝）或公交（博爾蓋塞）",
      detail: "Roma Termini→Napoli Centrale 約 1 時 10 分，再 Circumvesuviana／Campania Express 到 Pompei。整天。不出城：博爾蓋塞要預約。",
      drive: "那不勒斯開車＋遺址停車不建議。",
    },
    slots: [
      { t: "07:40", title: "選配 A：龐貝日遊", d: "早班 Freccia。遺址風大，穿靴。16:00 前返那不勒斯。小孩吃不消就不要去。" },
      { t: "09:00", title: "選配 B：博爾蓋塞", d: "兩小時一場，必預約。公園可野餐。" },
      { t: "09:30", title: "選配 C：放空", d: "補買、洗衣、小孩睡覺。J 人允許空白日。" },
      { t: "18:30", title: "回羅馬後的晚上", d: "龐貝組約 19:00 進得了城，Termini 附近簡單吃。不出城組 18:00 就可出門。" },
      { t: "19:30", title: "最後一晚羅馬晚餐", d: "Trastevere 或住家附近。打包晚餐前做完。" },
      { t: "21:00", title: "夜走（不出城才加）", d: "西班牙階梯夜燈或河岸。龐貝組吃完就睡。明天 08:20 退房。" },
    ],
  },
  {
    n: 14,
    city: "米蘭",
    title: "回米蘭、最後的晚餐、金四角",
    stay: "Centrale 附近，連住 2 晚　2/19 週五",
    cover: "photos/last-supper.jpg",
    rent: { yes: false, label: "不租車", reason: "Freccia 直達 Centrale。ZTL。明天 Outlet 坐接駁。" },
    hotel: { name: "Centrale 步行 8 分整套", arrive: "約 13:00 先寄行李；15:00 入住", checkIn: "15:00" },
    photos: [
      { src: "photos/last-supper.jpg", cap: "達文西《最後的晚餐》，2/19 下午場" },
      { src: "photos/grazie.jpg", cap: "Santa Maria delle Grazie" },
      { src: "photos/galleria.jpg", cap: "艾曼紐二世迴廊，傍晚櫥窗" },
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "Via Montenapoleone 金四角街道，走路 90 分" },
    ],
    transport: {
      mode: "Frecciarossa ＋地鐵",
      detail: "Roma Termini 約 09:00 → Milano Centrale 約 12:10（約 3 時 10 分）。感恩教堂地鐵＋步行 20 分。",
      drive: "A1 約 5 小時，隔天早飛＋Outlet 更亂。",
    },
    slots: [
      { t: "08:20", title: "羅馬退房", d: "Termini 對號。這段最長，可升 Standard 前段座位。" },
      { t: "09:00", title: "Freccia 往米蘭", d: "約 12:10 到 Centrale。" },
      { t: "12:30", title: "寄行李、簡單午餐", d: "公寓未入住先卸箱。" },
      { t: "14:40", title: "感恩教堂門口", d: "下午場（例 15:00）。只能看約 15 分。姓名＝護照。" },
      { t: "15:00", title: "《最後的晚餐》", d: "出來看教堂迴廊。回杜奧莫。" },
      { t: "16:15", title: "大教堂屋頂（電梯）", d: "若腳累改只看廣場。屋頂 2/19 比備飛日穩。" },
      { t: "17:30", title: "迴廊＋Montenapoleone 櫥窗", d: "Galleria → Via della Spiga → Montenapoleone。這是市區逛街，不是 Outlet。櫥窗晚上亮著。" },
      { t: "19:00", title: "Navigli aperitivo", d: "地鐵 Porta Genova。運河區晚上才開始。六人戶外加外套。腳累就改迴廊附近坐。" },
      { t: "20:30", title: "Navigli 晚餐", d: "21:45 地鐵回 Centrale。明天 Outlet 9:00，所以走到這裡停，不是 16:15 停。" },
    ],
  },
  {
    n: 15,
    city: "米蘭",
    title: "Serravalle Outlet 整天",
    stay: "Centrale 第 2 晚　2/20 週六",
    cover: "photos/italy/milan-montenapoleone.jpg",
    rent: { yes: false, label: "不租車", reason: "官方接駁來回票面寫死。六人租車還車跟明天 11:00 班機打架。" },
    hotel: { name: "續住 Centrale；今晚收 Outlet 袋進託運", arrive: "接駁回程後回飯店", checkIn: "已入住" },
    photos: [
      { src: "photos/italy/milan-montenapoleone.jpg", cap: "不出城就改走金四角／Corso Buenos Aires" },
      { src: "photos/galleria.jpg", cap: "備案：Rinascente 與迴廊半日" },
      { src: "photos/duomo.jpg", cap: "明天早飛，今晚 21:00 前要回車站公寓" },
    ],
    transport: {
      mode: "官方 Outlet 接駁",
      detail: "Zani／Frigerio：Centrale 9:00 或 9:30 → Serravalle 約 1 時 15–30 分。回程 16:15／17:15／19:15 票面寫死，錯過等下一班。成人約 €25、4–12 歲約 €10。戶外村，穿防寒。",
      drive: "A7 約 1 時。六人明天早飛不租。",
    },
    slots: [
      { t: "08:30", title: "Centrale 接駁點", d: "票印的站點（Piazza IV Novembre 或 Cairoli）。非退、非轉讓。" },
      { t: "09:00", title: "去 Serravalle", d: "10:00–20:00 營業。先攻事先寫好的 4 個品牌，不要 230 店全逛。" },
      { t: "10:15", title: "Outlet 開門", d: "二月可能還有冬末 saldi。戶外、週六人最多。小孩熱食＋室內休息區。" },
      { t: "13:00", title: "午餐在村內", d: "Global Blue 退稅在現場做完。大袋不要拖到明天手提。" },
      { t: "16:15", title: "搭票面回程", d: "建議 16:15 或 17:15 班。19:15 太晚，明天 06:30 起床。", buf: true },
      { t: "18:30", title: "回公寓收箱", d: "購物進託運。核對 BR96、液體、瑞士刀。" },
      { t: "19:30", title: "Centrale 附近晚餐", d: "不要再跑 Navigli。Eataly 或車站 10 分內。明天 06:15 起床。" },
      { t: "21:30", title: "睡覺", d: "不出城備案：白天金四角／Buenos Aires，晚上一樣在車站附近吃。Fidenza 17:00 回，晚餐更從容。" },
    ],
  },
  {
    n: 16,
    city: "台北方向",
    title: "米蘭早班起飛",
    stay: "BR96 機上（2/22 清晨抵桃園）",
    cover: "photos/duomo.jpg",
    rent: { yes: false, label: "不租車", reason: "Centrale 07:00 左右 Express 是唯一正確答案。" },
    hotel: { name: "機上", arrive: "2/22 06:10 桃園 T2", checkIn: "—" },
    photos: [
      { src: "photos/centrale.jpg", cap: "中央車站，Malpensa Express" },
      { src: "photos/duomo.jpg", cap: "米蘭，進出門不是主菜" },
      { src: "photos/italy/venice-carnival.jpg", cap: "這趟真正要帶走的：嘉年華最後三天" },
    ],
    transport: {
      mode: "Malpensa Express ＋ BR96",
      detail: "Centrale 約 07:00 → MXP 約 07:50。BR96 冬天 11:00 起飛，TPE 2/22 06:10。CET＝台灣 −7。",
      drive: "只有誤火車才叫計程車，約 €95–115。",
    },
    slots: [
      { t: "06:15", title: "起床退房", d: "護照、登機證、水。Outlet 袋已在託運箱。" },
      { t: "06:35", title: "步行 Centrale", d: "5–8 分。" },
      { t: "07:00", title: "Malpensa Express", d: "約 50 分到 T1。誤點下一班仍夠 11:00。", buf: true },
      { t: "08:10", title: "MXP T1 報到", d: "長榮。退稅若昨天沒做完，機場櫃檯人多別指望。" },
      { t: "11:00", title: "BR96 起飛", d: "時區改回台灣。" },
      { t: "2/22 06:10", title: "桃園 T2", d: "第 17 天清晨到家。" },
    ],
  },
];

const ROUTE = [
  ["D1 2/6", "台北大年夜夜航"],
  ["D2–4", "威尼斯嘉年華 2/7–9"],
  ["D5–8", "佛羅倫斯＋工坊逛街"],
  ["D9–13", "羅馬（梵蒂岡避開 2/11）"],
  ["D14 2/19", "米蘭最後的晚餐＋金四角"],
  ["D15 2/20", "Serravalle Outlet"],
  ["D16 2/21", "MXP 11:00 起飛"],
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
    ["嘉年華", "2/7–9"],
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
  ["photos/italy/venice-carnival.jpg", "威尼斯嘉年華"],
  ["photos/italy/florence-duomo.jpg", "佛羅倫斯主教堂"],
  ["photos/italy/rome-colosseum.jpg", "羅馬競技場"],
  ["photos/last-supper.jpg", "最後的晚餐"],
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
