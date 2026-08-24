const START_DATE = "2027-01-30";

const SEASON = [
  ["米蘭／科莫", "冬天城市，不是雪國", "一月底市區多半無厚雪，是冷、霧、偶爾下雨。科莫湖面灰藍，對面山頭可能有雪，但 Villa 花園多半關門、船班比夏天少很多。白天約 07:45–17:20。"],
  ["琉森／皮拉圖斯", "老城可能積雪，山頂是真冬天", "卡貝爾橋可能掛雪。皮拉圖斯齒軌與黃金環線冬季關閉，只能從 Kriens 坐纜車上去，山頂白雪。"],
  ["少女峰／茵特拉肯", "這才是雪景本體", "Jungfraujoch 全年冰雪，一月是真正的冰宮與冰川。山谷可能有雪或霜，瀑布會結冰。"],
  ["策馬特／馬特洪峰", "滑雪季的白色小鎮", "小鎮積雪、馬特洪峰全白。戈爾內格拉特正常開。五湖步道冬季不排。二月是旺季，住宿貴。"],
  ["冰河列車", "冬季最有名的那種白", "策馬特→聖莫里茲約 8 小時。Oberalp 峠、萊茵峽谷、Landwasser 高架橋都是雪原＋紅列車。這就是大家說的瑞士最有名景觀列車，冬天比夏天更像明信片。"],
  ["聖莫里茲／伯恩尼納", "高峰滑雪＋冰湖", "聖莫里茲湖可能結冰。隔天伯恩尼納翻過 2253 m，Lago Bianco 冬天是白的，下山到 Tirano 再回米蘭。"],
];

const COMPARE = [
  ["MXP → 米蘭市區", "Malpensa Express 37–51 分", "計程車 45–70 分（定價約 €95–115）"],
  ["米蘭 → 科莫", "Regionale 約 40 分", "開車 50–80 分，冬雨路滑不划算"],
  ["米蘭 → 琉森", "EuroCity 約 3 小時 10–25 分", "A2 約 3 小時＋vignette＋冬胎"],
  ["琉森 → 茵特拉肯", "Luzern–Interlaken Express 1 小時 50 分", "開車約 1 小時 15 分，錯過五湖車窗"],
  ["茵特拉肯 → 策馬特", "火車約 2 小時 17 分", "開到 Täsch 約 2 小時 20–45 分，鎮內禁車"],
  ["冰河列車 策馬特→聖莫里茲", "景觀列車約 7 小時 50 分（必定位）", "冬天 Furka 峠封路，自駕繞隧道也沒有車窗"],
  ["聖莫里茲 → 米蘭", "伯恩尼納＋Trenitalia 約 5.5–6.5 小時", "冬天阿爾卑斯山路不建議"],
];

const BOOKINGS = [
  "現在立刻：長榮 BR95（1/30 23:55 TPE）／BR96（2/12 11:15 MXP）。冬季班表可能微調，以航空公司為準。",
  "現在立刻：冰河列車座位。2/9 策馬特 07:50 或 08:50 開往聖莫里茲。STP 含車資，座位預約約 CHF 54，可提前 93 天訂（約 2026/11/08 開賣）。冬季一班難求，不要等。",
  "出發前 8–10 週：聖瑪利亞感恩教堂《最後的晚餐》（2/1）官方時段。",
  "出發前 6–8 週：飯店 6 間——米蘭 Duomo 3 晚、琉森 2 晚、茵特拉肯 2 晚、策馬特 2 晚、聖莫里茲 1 晚、米蘭 Centrale 2 晚。二月滑雪旺季，策馬特與聖莫里茲會貴。",
  "出發前 4 週：Swiss Travel Pass 8 日 2 等，2/3（D5）啟用到 2/10（D12，含伯恩尼納到 Tirano）。義大利段另買 Trenitalia。伯恩尼納景觀車也要預約座位。",
  "出發前 7–14 天：少女峰（2/6）先占位，當週看雲量可與轉場日對調。皮拉圖斯冬季只開 Kriens 纜車，不要買黃金環線。",
  "出發前 3 天：核對冰河列車確認信、防滑鞋、雪地墨鏡、發熱衣。SBB／長榮 App 登入。",
];

const CHECKS = [
  "護照有效期 > 6 個月、申根入境空白頁",
  "長榮電子登機證／會員卡",
  "瑞士通行證 QR 存在 SBB App",
  "《最後的晚餐》確認信（姓名須與護照一致）",
  "大教堂屋頂 QR",
  "少女峰預訂（皮拉圖斯改纜車，不買黃金環線）",
  "冰河列車座位確認函（2/9）＋伯恩尼納座位",
  "飯店確認函 6 間（含聖莫里茲）",
  "旅行保險單（高山與取消險）",
  "國際雙幣卡＋瑞士法郎備用現金 CHF 200",
  "轉換插頭 Type C／L、行動電源",
  "發熱衣＋薄羽絨＋防水外套（這次是真冬天）",
  "防滑靴、雪地墨鏡、防曬、止痛藥（少女峰 3454 m）",
  "手套、毛帽、羊毛襪",
  "SBB／Trenitalia／長榮 App 已登入",
];


const TICKETS = [
  {
    id: "hotel",
    must: true,
    when: "現在立刻（二月滑雪旺季）",
    title: "住宿——四大兩小優先包棟／整套",
    standard: "6 人不要開三間雙人房。米蘭、琉森、茵特拉肯、策馬特、米蘭車站用 Booking／Airbnb 搜「整套房、6 人」。聖莫里茲只住一晚，包棟常有最短入住，改家庭房即可。",
    premium: {
      name: "策馬特整套 3 房最急",
      rec: true,
      note: "滑雪季三間 4 星會比一棟公寓貴一截。不要訂一週 CHF 3 萬起的超豪 chalet。必住若要 Zermatterhof／Badrutt，問家庭套房或兩間連通，不要硬開三間。"
    }
  },
  {
    id: "gex-ex",
    must: true,
    when: "現在查官網；尊爵艙比 2 等早開",
    title: "冰河列車 Excellence（只有你要坐高級艙才現在訂）",
    standard: "2 等／1 等座位要等到 2026/11/08（2/9 前 93 天，台灣時間約早上 8:00 開搶）。現在訂不到普通座位。",
    premium: {
      name: "Excellence Class 尊爵艙　2/9 08:52 PE 902",
      rec: true,
      note: "約 CHF 540／人，含餐酒、保證窗邊。必須搭配 STP 1 等。冬季只有 08:52 這班有。官網 glacierexpress.ch 現在或 10 月可訂整季尊爵艙。不定尊爵艙就先不要買通行證。"
    }
  },
  {
    id: "eva",
    must: true,
    when: "現在立刻",
    title: "長榮 BR95／BR96 機票",
    standard: "經濟艙來回。1/30 23:55 TPE→MXP、2/12 11:15 MXP→TPE。冬季班表以官網為準。",
    premium: {
      name: "皇家商務艙（Royal Laurel）／豪華經濟艙",
      rec: true,
      note: "這段是 13 小時 40 分夜航＋早班回程。J 人建議至少去程升豪華經濟艙或商務，落地米蘭比較走得動。商務有平躺床、優先登機與兩件托運。"
    }
  },
  {
    id: "gex",
    must: true,
    when: "2026/11/08 前後開訂（出發前 93 天）",
    title: "冰河列車 Glacier Express 座位　2/9 策馬特→聖莫里茲",
    standard: "Swiss Travel Pass 已含車資，但仍要另訂座位，2 等／1 等預約都是約 CHF 54。冬季班次：07:50→15:37 或 08:52→16:37。不定位等於上不了車。",
    premium: {
      name: "Excellence Class（冰河列車最高艙）",
      rec: true,
      note: "預約約 CHF 540／人，必須持 1 等車票或 STP 1 等。含車上套餐、酒、保證窗邊。冬季只有 08:52 那班（PE 902）有 Excellence。若要坐這個，通行證請直接買 8 日 1 等（約 CHF 697，不要買 2 等再後悔）。"
    }
  },
  {
    id: "stp",
    must: true,
    when: "出發前 4 週可，想坐 Excellence 就現在",
    title: "Swiss Travel Pass 8 日　2/3–2/10",
    standard: "2 等約 CHF 439。含瑞士火車、巴士、船，伯恩尼納到 Tirano 也含。少女峰頂段仍要另付（有折扣）。",
    premium: {
      name: "1 等通行證",
      rec: true,
      note: "8 日 1 等約 CHF 697。冰河列車／伯恩尼納 1 等車廂較空、窗大。若訂 Excellence，沒有 1 等票會被拒。J 人二選一：全程 2 等，或一開始就買 1 等＋Excellence，不要混。"
    }
  },
  {
    id: "supper",
    must: true,
    when: "約 2026/09 下旬開賣（季票制，不是現在）",
    title: "《最後的晚餐》2/1",
    standard: "官方 cenacolovinciano.org／lastsupper.shop 每季開一次，通常中午義大利時間 12:00，幾小時內賣完。1–3 月檔依往例約 9 月下旬開。實名制、不能改名。現在官網還沒有 2027 年 2 月。",
    premium: null
  },
  {
    id: "bernina",
    must: true,
    when: "與冰河列車同一週訂",
    title: "伯恩尼納景觀列車　2/10 聖莫里茲→Tirano",
    standard: "STP 含車資，景觀車廂要另訂座位（約 CHF 16–32）。不想訂也可搭每小時普通列車，車窗比較普通。",
    premium: {
      name: "伯恩尼納 1 等景觀車廂",
      rec: false,
      note: "若 STP 已買 1 等，這段直接坐 1 等景觀車。沒有 Excellence，但 1 等窗邊值得訂。"
    }
  },
  {
    id: "jungfrau",
    must: true,
    when: "出發前 7–14 天（看雲量可改期）",
    title: "少女峰 Jungfraujoch　2/6",
    standard: "STP 對頂段約 25% 折扣，仍要另買山票。建議先在官網鎖早班。",
    premium: {
      name: "早鳥／指定車廂（無商務艙）",
      rec: false,
      note: "沒有商務艙。有時有 Good Morning 早班較便宜。重點是早上去，一月雲海低、雪最多。"
    }
  },
  {
    id: "duomo",
    must: true,
    when: "出發前 2–4 週",
    title: "米蘭大教堂屋頂　2/1",
    standard: "屋頂＋教堂套票，選電梯較省腳。沒有艙等。",
    premium: null
  },
  {
    id: "ec",
    must: false,
    when: "出發前 1–2 週",
    title: "米蘭→琉森 EuroCity　2/3",
    standard: "義大利段要買票（STP 只含瑞士段）。可不定位，但國際列車建議定位。",
    premium: {
      name: "EuroCity 1 等",
      rec: false,
      note: "較安靜、行李空間大。若 STP 是 1 等，瑞士段自動 1 等；義大利段記得買 1 等。"
    }
  },
];

const DAYS = [
  {
    n: 1,
    city: "台北",
    title: "桃園出發夜航",
    stay: "長榮 BR95 機上過夜",
    cover: "photos/centrale.jpg",
    rent: { yes: false, label: "不租車", reason: "出國日只處理機場。台灣本島用機場捷運或預排接送，不要自己開去桃園再棄車。" },
    hotel: { name: "機上", arrive: "次日 07:35 米蘭", checkIn: "—" },
    photos: [
      { src: "photos/centrale.jpg", cap: "明天會用到的米蘭中央車站（先記在腦子裡）" },
    ],
    transport: {
      mode: "飛機",
      detail: "EVA BR95　TPE 23:55 → MXP T1 07:35+1　約 13 小時 40 分",
      drive: "不適用",
    },
    slots: [
      { t: "19:00", title: "離開台北市區", d: "若住市區，預留塞車。機場捷運到 T2 約 35–50 分。" },
      { t: "20:55", title: "桃園 T2 報到", d: "長程建議起飛前 3 小時到。托運額度先量過。" },
      { t: "23:20", title: "登機", d: "緩衝 10 分。座位盡量靠窗睡。" },
      { t: "23:55", title: "BR95 起飛", d: "1/30 是冬天，時差 CET＝台灣 −7 小時。飛行中改時區。", buf: true },
    ],
  },
  {
    n: 2,
    city: "米蘭",
    title: "落地、寄行李、大教堂廣場",
    stay: "杜奧莫廣場附近，連住 3 晚",
    cover: "photos/duomo.jpg",
    rent: { yes: false, label: "不租車", reason: "落地疲勞＋ZTL。Malpensa Express 準點、便宜、不用找路。" },
    hotel: { name: "杜奧莫區（建議 Room Mate Giulia 等級）", arrive: "15:00 正式入住；10:30 先寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/duomo.jpg", cap: "米蘭大教堂 Piazza del Duomo" },
      { src: "photos/galleria.jpg", cap: "艾曼紐二世迴廊" },
      { src: "photos/centrale.jpg", cap: "若改停 Centrale 再轉地鐵，中央車站大廳" },
    ],
    transport: {
      mode: "Malpensa Express",
      detail: "MXP T1 → Milano Cadorna 約 37 分（去杜奧莫較順）或 Centrale 51 分。單程約 €15。",
      drive: "計程車 45–70 分，市區定價約 €95–115。J 人不划算。",
    },
    slots: [
      { t: "07:35", title: "MXP T1 抵達", d: "申根入境＋行李，備 50–90 分。" },
      { t: "08:40", title: "出關緩衝", d: "買水、換錢只換當天歐元。不要在機場租車櫃台停留。", buf: true },
      { t: "09:13", title: "Malpensa Express", d: "去 Cadorna。每 30 分一班，錯過就搭下一班，不要改計程車。" },
      { t: "09:50", title: "Cadorna 轉地鐵 M1", d: "兩站到 Duomo。大行李尖峰請改步行或計程車 €12 內。" },
      { t: "10:30", title: "飯店寄行李", d: "check-in 通常 15:00。先卸袋再走路。" },
      { t: "11:00", title: "大教堂廣場外觀", d: "今天不排屋頂，只建立方位：教堂、迴廊、維多里奧埃曼努埃萊二世拱廊。" },
      { t: "12:30", title: "午餐", d: "迴廊附近坐下來吃，落地日禁止暴走。" },
      { t: "15:00", title: "飯店入住", d: "洗澡、短睡 40 分。鬧鐘務必設。" },
      { t: "16:30", title: "迴廊＋ identikit 廣場再走一圈", d: "日落前拍照。屋頂留明天。" },
      { t: "19:00", title: "晚餐後早睡", d: "明天 09:15《最後的晚餐》。" },
    ],
  },
  {
    n: 3,
    city: "米蘭",
    title: "最後的晚餐、大教堂屋頂、城堡",
    stay: "杜奧莫區第 2 晚",
    cover: "photos/last-supper.jpg",
    rent: { yes: false, label: "不租車", reason: "今天全是步行＋地鐵。開進布雷拉等於找罰單。" },
    hotel: { name: "續住杜奧莫區", arrive: "已在飯店", checkIn: "已入住" },
    photos: [
      { src: "photos/last-supper.jpg", cap: "達文西《最後的晚餐》（聖瑪利亞感恩教堂）" },
      { src: "photos/grazie.jpg", cap: "Santa Maria delle Grazie 教堂外觀" },
      { src: "photos/duomo-roof.jpg", cap: "大教堂屋頂雕塑林" },
      { src: "photos/sforza.jpg", cap: "斯福爾扎城堡" },
    ],
    transport: {
      mode: "步行／地鐵",
      detail: "杜奧莫 → 感恩教堂地鐵＋步行約 20–25 分；城堡再 15 分。",
      drive: "不需要。市區停車 €3–5／小時。",
    },
    slots: [
      { t: "08:00", title: "早餐", d: "清淡。護照影本與預約確認放同一夾。" },
      { t: "08:40", title: "出發去感恩教堂", d: "09:15 場次，08:55 要在門口。" },
      { t: "09:15", title: "《最後的晚餐》", d: "只能看約 15 分鐘。禁止自拍棒。出來後看教堂迴廊。" },
      { t: "10:10", title: "回杜奧莫", d: "地鐵或計程車。屋頂時段建議 10:45–12:30。" },
      { t: "10:45", title: "大教堂內部＋屋頂", d: "電梯較省腳；步行屋頂多 20 分。預留安檢。" },
      { t: "13:00", title: "午餐", d: "迴廊或附近小館，不要排網紅店。" },
      { t: "14:30", title: "斯福爾扎城堡", d: "庭院免費；米開朗基羅 Pietà Rondanini 若開門再進。" },
      { t: "16:30", title: "布雷拉區散步", d: "畫廊外觀即可，除非你預留門票。" },
      { t: "19:00", title: "Navigli 晚餐", d: "運河區日落後氣氛好，22:00 前回飯店。" },
    ],
  },
  {
    n: 4,
    city: "科莫湖",
    title: "科莫湖冬日來回（船班少、天黑早）",
    stay: "杜奧莫區第 3 晚　2/2 週二",
    cover: "photos/como.jpg",
    rent: { yes: false, label: "不租車", reason: "冬天更不要租車：湖岸濕滑。火車 40 分。" },
    hotel: { name: "續住米蘭，當晚 19:00 前回到飯店", arrive: "19:00 回飯店", checkIn: "已入住" },
    photos: [
      { src: "photos/como.jpg", cap: "從湖上看到的貝拉喬 Bellagio" },
      { src: "photos/navigli.jpg", cap: "若提早回米蘭，晚間可再走 Navigli 運河" },
    ],
    transport: {
      mode: "火車＋遊船",
      detail: "Milano Centrale → Como S. Giovanni 約 40 分。Como → Bellagio 船班約 45–60 分。Varenna → 米蘭約 1 小時 05 分。",
      drive: "米蘭→科莫 50–80 分；湖岸自駕還要找停車與渡輪排隊。",
    },
    slots: [
      { t: "07:40", title: "飯店出發", d: "地鐵到 Centrale，預留 15 分找月台。" },
      { t: "08:43", title: "Regionale 往 Como S. Giovanni", d: "約 09:23 到。票可當天車站買或 App。" },
      { t: "09:40", title: "科莫碼頭", d: "冬季船班明顯減少，以當天時刻為準。Villa 花園多半關門。" },
      { t: "10:10", title: "船班往 Bellagio", d: "一月是灰湖＋對岸山頭積雪，不是夏天明信片。若停航，改科莫鎮散步，不要硬等。" },
      { t: "11:15", title: "貝拉喬午餐與散步", d: "天黑約 17:20，14:30 前要決定回程船。" },
      { t: "15:00", title: "轉船或水上計程車去 Varenna", d: "對岸小鎮，拍照角度更好。" },
      { t: "16:30", title: "瓦倫納停留", d: "湖岸步道 30 分。不要再加第三鎮。" },
      { t: "17:43", title: "Varenna-Esino → Milano Centrale", d: "約 1 小時 05 分。誤點緩衝搭下一班。" },
      { t: "19:00", title: "回到飯店", d: "明天要退房去瑞士，今晚收拾、只留隨身。" },
    ],
  },
  {
    n: 5,
    city: "琉森",
    title: "米蘭 → 琉森，教堂橋與獅子紀念碑",
    stay: "琉森湖畔／老城，連住 2 晚　STP 第 1 天（2/3）",
    cover: "photos/chapel.jpg",
    rent: { yes: false, label: "不租車", reason: "EuroCity 直達、風景在車窗。自駕要義大利過路費、瑞士 vignette、米蘭還車，划不來。" },
    hotel: { name: "琉森老城或湖畔（Hotel des Balances 等級）", arrive: "15:00 入住；13:50 可先寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/chapel.jpg", cap: "卡貝爾橋 Kapellbrücke 與水塔" },
      { src: "photos/lion.jpg", cap: "獅子紀念碑" },
      { src: "photos/lucerne-lake.jpg", cap: "琉森湖" },
    ],
    transport: {
      mode: "EuroCity 火車",
      detail: "Milano Centrale 10:10 左右 EC → Luzern，約 3 小時 10–25 分。STP 今日啟用：瑞士段含，義大利段（米蘭→Chiasso）另買。",
      drive: "A8/A9/A2 約 3 小時，過境與停車另計。",
    },
    slots: [
      { t: "09:00", title: "米蘭飯店退房", d: "行李直接帶去 Centrale。checkout 前確認瑞士飯店地址。" },
      { t: "09:40", title: "Centrale 找月台", d: "EC 需對號入座。預留 15 分。" },
      { t: "10:10", title: "EuroCity 開往 Luzern", d: "過境瑞士護照可能抽查。右側靠窗看湖。" },
      { t: "13:25", title: "琉森車站抵達", d: "步行 8–12 分到老城飯店。" },
      { t: "13:50", title: "寄行李", d: "check-in 未到先卸袋。" },
      { t: "14:10", title: "卡貝爾橋＋水塔外觀", d: "橋上三角畫是重點，不要只在橋頭自拍。" },
      { t: "15:00", title: "飯店入住", d: "放下護照影本。" },
      { t: "16:00", title: "獅子紀念碑", d: "步行 10 分。看完走回湖岸。" },
      { t: "18:30", title: "湖畔晚餐", d: "明天皮拉圖斯要早，21:30 睡。" },
    ],
  },
  {
    n: 6,
    city: "琉森",
    title: "皮拉圖斯山（冬季只開纜車）",
    stay: "琉森第 2 晚　STP 第 2 天　2/4 週四",
    cover: "photos/pilatus.jpg",
    rent: { yes: false, label: "不租車", reason: "冬季齒軌與遊船黃金環線關閉，只能 Kriens 纜車。開車到山腳還是要坐纜車。" },
    hotel: { name: "續住琉森", arrive: "已在飯店", checkIn: "已入住" },
    photos: [
      { src: "photos/pilatus.jpg", cap: "從琉森望向皮拉圖斯山（冬天山頂是雪）" },
      { src: "photos/lucerne-lake.jpg", cap: "琉森湖，冬季船班少" },
      { src: "photos/chapel.jpg", cap: "下山後再走卡貝爾橋，橋上可能有雪" },
    ],
    transport: {
      mode: "巴士＋纜車",
      detail: "琉森→Kriens 巴士約 15 分，gondola＋Dragon Ride 到頂約 30 分。冬季末班下山約 16:00–16:30，務必核對當日時刻。STP 含纜車。",
      drive: "開到 Kriens 仍要搭纜車。不要買黃金環線套票，那是夏天的。",
    },
    slots: [
      { t: "08:40", title: "巴士去 Kriens", d: "不要去 Alpnachstad，齒軌一月不開。" },
      { t: "09:15", title: "纜車上山", d: "gondola 到 Fräkmüntegg，再 Dragon Ride 到頂。山頂是真雪。" },
      { t: "10:00", title: "皮拉圖斯山頂", d: "步道可能結冰，穿防滑靴。午餐在山上，13:30 前開始下山。" },
      { t: "14:00", title: "纜車下山回琉森", d: "冬季天黑約 17:15，不要卡末班。" },
      { t: "15:30", title: "老城／卡貝爾橋", d: "補雪景照。不要再加里吉山。" },
      { t: "19:00", title: "晚餐", d: "明天轉場，今晚打包。" },
    ],
  },
  {
    n: 7,
    city: "茵特拉肯",
    title: "黃金列車轉場，兩湖之間",
    stay: "茵特拉肯 Ost 附近，連住 2 晚　STP 第 3 天　2/5 週五",
    cover: "photos/interlaken.jpg",
    rent: { yes: false, label: "不租車", reason: "Luzern–Interlaken Express 1 小時 50 分是這趟第二該坐的車窗（第一是冰河列車）。" },
    hotel: { name: "Interlaken Ost 步行 8 分內", arrive: "15:00 入住；14:10 寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/interlaken.jpg", cap: "茵特拉肯，一月山谷可能有雪" },
      { src: "photos/grindelwald.jpg", cap: "格林德瓦，明天 Eiger Express 起點" },
    ],
    transport: {
      mode: "Luzern–Interlaken Express",
      detail: "琉森 12:06 → Interlaken Ost 13:56，約 1 小時 50 分。STP 全含。冬季準點，車窗是雪湖。",
      drive: "約 1 小時 15 分，Brünig 可能積雪。",
    },
    slots: [
      { t: "09:00", title: "琉森咖啡", d: "轉場日不爬山。" },
      { t: "11:30", title: "退房", d: "步行到車站。" },
      { t: "12:06", title: "黃金列車發車", d: "往茵特拉肯方向坐右側。湖面可能有薄冰。" },
      { t: "13:56", title: "Interlaken Ost", d: "出站即兩湖之間。" },
      { t: "14:10", title: "寄行李", d: "check-in 15:00。" },
      { t: "15:00", title: "飯店入住", d: "確認明天少女峰早班與雲量。" },
      { t: "16:00", title: "湖岸或 Höheweg", d: "Harder Kulm 冬季時刻較短，不硬上。" },
      { t: "19:00", title: "晚餐後早睡", d: "2/6 少女峰是這趟雪景核心。" },
    ],
  },
  {
    n: 8,
    city: "少女峰",
    title: "Jungfraujoch　這天就是雪景",
    stay: "茵特拉肯第 2 晚　STP 第 4 天　2/6 週六",
    cover: "photos/jungfrau.jpg",
    rent: { yes: false, label: "不租車", reason: "車開到格林德瓦就停了。3454 m 只有齒軌。" },
    hotel: { name: "續住茵特拉肯", arrive: "約 16:00 回飯店（冬日較早下山）", checkIn: "已入住" },
    photos: [
      { src: "photos/jungfrau.jpg", cap: "少女峰鞍部、Sphinx、阿萊奇冰川" },
      { src: "photos/grindelwald.jpg", cap: "格林德瓦，一月是滑雪村" },
    ],
    transport: {
      mode: "火車＋Eiger Express＋齒軌",
      detail: "Ost → Grindelwald Terminal → Eiger Express → 頂，單程約 2 小時 10 分。STP 頂段約 25% 折扣，山票要另買。",
      drive: "Interlaken→Grindelwald 約 25 分，之後必須轉纜車。",
    },
    slots: [
      { t: "07:10", title: "出發", d: "冬日日出約 07:50，早班仍最穩。墨鏡、手套、止痛藥。" },
      { t: "07:35", title: "Ost → Grindelwald Terminal", d: "約 30–35 分。" },
      { t: "08:20", title: "Eiger Express", d: "到 Eigergletscher 轉齒軌。" },
      { t: "09:30", title: "Jungfraujoch 3454 m", d: "一月是真冰雪：冰宮、冰川、Sphinx。待 2 小時，動作放慢。" },
      { t: "12:00", title: "下山", d: "可經 Kleine Scheidegg。若取消，改勞特布倫能看冰瀑，不要空等。" },
      { t: "15:30", title: "回 Ost", d: "天 17:15 黑。晚餐清淡。" },
    ],
  },
  {
    n: 9,
    city: "策馬特",
    title: "轉場到馬特洪峰腳下",
    stay: "策馬特車站步行 5 分，連住 2 晚　STP 第 5 天　2/7 週日",
    cover: "photos/zermatt.jpg",
    rent: { yes: false, label: "不租車（鎮內禁車）", reason: "自駕只能停 Täsch。滑雪季停車更慘。" },
    hotel: { name: "策馬特車站附近，盡量要峰景窗", arrive: "15:00 入住；11:50 可寄行李", checkIn: "15:00" },
    photos: [
      { src: "photos/zermatt.jpg", cap: "策馬特黃昏，馬特洪峰在盡頭（滑雪季積雪）" },
      { src: "photos/matterhorn.jpg", cap: "馬特洪峰，一月全白" },
      { src: "photos/lauterbrunnen.jpg", cap: "若 2/6 少女峰取消，今天上午改去勞特布倫能看冰瀑，下午再轉場" },
    ],
    transport: {
      mode: "火車（Spiez–Visp–Zermatt）",
      detail: "Interlaken Ost 09:08 左右 → Zermatt 約 11:25，約 2 小時 17 分。STP 全含。",
      drive: "開到 Täsch 約 2 小時 20–45 分，再轉 12 分火車。",
    },
    slots: [
      { t: "08:20", title: "茵特拉肯退房", d: "少女峰若改今天補，改搭 13:00 以後的車去策馬特。" },
      { t: "09:08", title: "往策馬特", d: "Visp 轉 Matterhorn Gotthard Bahn。" },
      { t: "11:25", title: "策馬特抵達", d: "雪地＋坡，大行李用電瓶車。" },
      { t: "11:50", title: "寄行李", d: "先看峰有沒有露出來。" },
      { t: "15:00", title: "飯店入住", d: "滑雪旺季，窗景房要早訂。" },
      { t: "16:30", title: "小鎮定位", d: "Gornergrat 車站明天用。17:15 天黑。" },
    ],
  },
  {
    n: 10,
    city: "策馬特",
    title: "戈爾內格拉特看全白馬特洪峰",
    stay: "策馬特第 2 晚　STP 第 6 天　2/8 週一",
    cover: "photos/gornergrat.jpg",
    rent: { yes: false, label: "不租車", reason: "齒軌是唯一上 3089 m 看峰正面的方法。" },
    hotel: { name: "續住策馬特", arrive: "下午回飯店", checkIn: "已入住" },
    photos: [
      { src: "photos/gornergrat.jpg", cap: "戈爾內格拉特齒軌與馬特洪峰" },
      { src: "photos/matterhorn.jpg", cap: "馬特洪峰冬日" },
    ],
    transport: {
      mode: "Gornergrat Bahn",
      detail: "策馬特 08:48 → Gornergrat 09:22，約 33 分。STP 多半含或大幅折扣。無商務艙，有時有 1 等車廂。",
      drive: "無法駕駛。",
    },
    slots: [
      { t: "08:20", title: "車站排隊", d: "冬日早班較清。上山右側看峰。" },
      { t: "08:48", title: "Gornergrat Bahn", d: "Stellisee 五湖步道冬季不排，不要下車亂走雪坡。" },
      { t: "09:22", title: "山頂 3089 m", d: "全白馬特洪峰。待到 11:30，風大就縮短。" },
      { t: "12:30", title: "下山回鎮", d: "今晚打包，只留過夜包。明天冰河列車要很早。" },
      { t: "16:30", title: "黃昏再看峰", d: "天很快黑。核對明天 07:50 或 08:52 座位車廂。" },
    ],
  },
  {
    n: 11,
    city: "聖莫里茲",
    title: "冰河列車全日　策馬特→聖莫里茲",
    stay: "聖莫里茲車站附近 1 晚　STP 第 7 天　2/9 週二",
    cover: "photos/glacier.jpg",
    rent: { yes: false, label: "不租車", reason: "這就是冰河列車存在的理由。冬天 Furka 峠封路，開車既看不到也更慢。" },
    hotel: { name: "聖莫里茲車站步行 8 分內（Laudinella / Steinbock 等級）", arrive: "約 16:10–17:10 入住（看哪一班）", checkIn: "15:00，可先寄行李" },
    photos: [
      { src: "photos/glacier.jpg", cap: "冰河列車在阿爾卑斯雪原" },
      { src: "photos/oberalp.jpg", cap: "Oberalp 峠附近，冬天全白" },
      { src: "photos/landwasser.jpg", cap: "Landwasser 高架橋，過 Chur 之後" },
      { src: "photos/stmoritz.jpg", cap: "聖莫里茲湖，一月可能結冰" },
    ],
    transport: {
      mode: "Glacier Express",
      detail: "冬季：07:50→15:37（PE 920，較早、無 Excellence）或 08:52→16:37（PE 902，有 Excellence）。全程約 7 小時 50 分。STP 含車資，座位必訂 CHF 54；Excellence CHF 540＋必須 STP 1 等。",
      drive: "冬天不建議。Oberalp 公路常關閉。",
    },
    slots: [
      { t: "06:50", title: "退房、車站", d: "若坐 07:50 班，06:50 就要在月台。行李可辦 Glacier Express 行李服務，或自己帶上置物區。" },
      { t: "07:50", title: "PE 920 發車（建議早班）", d: "J 人預設這班：15:37 到，天還沒全黑。萊茵峽谷坐右側；過 Chur 後 Landwasser 換左側。" },
      { t: "08:52", title: "備選 PE 902 Excellence", d: "若已買 Excellence，改搭這班，16:37 到。車上用餐，不要自己準備大餐。" },
      { t: "11:00", title: "Oberalp 峠", d: "車窗全是雪原。這段就是冰河列車的名字由來（沿冰川河谷，不是開上冰川）。" },
      { t: "13:30", title: "萊茵峽谷 Ruinaulta", d: "右側。午餐在車上（Excellence 含；2 等可預訂餐或自備）。" },
      { t: "15:37", title: "聖莫里茲抵達（早班）", d: "步行到飯店。滑雪旺季，15:00 後入住通常沒問題。" },
      { t: "16:30", title: "湖邊短走", d: "天 17:15 黑。不要排滑雪。早睡，明天還要翻伯恩尼納。" },
    ],
  },
  {
    n: 12,
    city: "米蘭",
    title: "伯恩尼納出阿爾卑斯，回米蘭",
    stay: "米蘭 Centrale 附近，連住 2 晚　STP 第 8 天　2/10 週三",
    cover: "photos/bernina.jpg",
    rent: { yes: false, label: "不租車", reason: "伯恩尼納是世界遺產鐵道。Tirano 之後才進義大利普通火車。" },
    hotel: { name: "Milano Centrale 步行 5 分", arrive: "約 16:30–17:30 入住", checkIn: "15:00，晚到沒關係" },
    photos: [
      { src: "photos/bernina.jpg", cap: "伯恩尼納鐵路與 Lago Bianco（冬天是白雪／冰湖）" },
      { src: "photos/stmoritz.jpg", cap: "早上離開聖莫里茲" },
      { src: "photos/centrale.jpg", cap: "傍晚米蘭中央車站" },
    ],
    transport: {
      mode: "Bernina Express 或普通 RhB＋Trenitalia",
      detail: "聖莫里茲→Tirano 景觀車約 2 小時 15 分（STP 含，座位另訂）。Tirano→Milano Centrale 義大利區域車約 2.5 小時，STP 不含，要買 Trenitalia。全程 5.5–6.5 小時。",
      drive: "冬天山路不建議。",
    },
    slots: [
      { t: "08:20", title: "退房", d: "車站買／出示伯恩尼納座位。" },
      { t: "08:48", title: "景觀列車往 Tirano", d: "若沒訂到 Express，搭 08:48 左右普通列車，風景同一條線。Lago Bianco 一月是白的。" },
      { t: "11:15", title: "Tirano 抵達", d: "義大利。出站轉 Trenitalia，預留 30 分。" },
      { t: "12:00", title: "Tirano → Milano Centrale", d: "約 2.5 小時。這段要另買票。" },
      { t: "15:00", title: "緩衝／誤點", d: "冬日山區可能慢。下一班也接受。" },
      { t: "16:30", title: "米蘭中央車站", d: "步行到飯店。不要再排景點。" },
      { t: "19:30", title: "晚餐、早睡", d: "明天是備飛日，不是玩樂日。" },
    ],
  },
  {
    n: 13,
    city: "米蘭",
    title: "備飛日，不排遠程",
    stay: "Centrale 第 2 晚　2/11 週四",
    cover: "photos/galleria.jpg",
    rent: { yes: false, label: "不租車", reason: "明天 11:15 國際線。這天只准走路或地鐵。" },
    hotel: { name: "續住 Milano Centrale", arrive: "已在飯店", checkIn: "已入住" },
    photos: [
      { src: "photos/galleria.jpg", cap: "迴廊補買伴手禮" },
      { src: "photos/duomo.jpg", cap: "杜奧莫快閃可以，Navigli 太遠" },
      { src: "photos/centrale.jpg", cap: "晚上回到車站飯店" },
    ],
    transport: {
      mode: "地鐵／步行",
      detail: "Centrale → Duomo 地鐵約 10 分。",
      drive: "不要租車還車。",
    },
    slots: [
      { t: "09:30", title: "晚起", d: "行李先鎖。核對 BR96、護照、液體。" },
      { t: "11:00", title: "杜奧莫／迴廊", d: "地鐵來回。21:00 前必須回飯店。" },
      { t: "15:00", title: "伴手禮", d: "車站 Eataly 或迴廊，不要再開發新區域。" },
      { t: "20:30", title: "睡覺", d: "06:15 起床。鬧鐘雙份。" },
    ],
  },
  {
    n: 14,
    city: "台北方向",
    title: "米蘭早班起飛",
    stay: "BR96 機上（2/13 清晨抵桃園）",
    cover: "photos/duomo.jpg",
    rent: { yes: false, label: "不租車", reason: "Centrale 07:03 Express 是唯一正確答案。" },
    hotel: { name: "機上", arrive: "2/13 06:05 桃園 T2", checkIn: "—" },
    photos: [
      { src: "photos/duomo.jpg", cap: "米蘭" },
      { src: "photos/glacier.jpg", cap: "這趟真正帶走的畫面：冰河列車雪景" },
    ],
    transport: {
      mode: "Malpensa Express ＋ BR96",
      detail: "Centrale 07:03 → MXP 07:54。BR96 11:15 起飛，TPE 2/13 06:05。冬天時差 CET＝台灣 −7。",
      drive: "只有誤火車才叫計程車，約 €95–115。",
    },
    slots: [
      { t: "06:15", title: "起床退房", d: "護照、登機證、水。" },
      { t: "06:30", title: "步行 Centrale", d: "5–8 分。" },
      { t: "07:03", title: "Malpensa Express", d: "07:54 到 T1。誤點改 07:25 班仍夠。" },
      { t: "08:10", title: "MXP T1 報到", d: "長榮。瑞士刀、液體托運。" },
      { t: "11:15", title: "BR96 起飛", d: "時區改回台灣。" },
      { t: "2/13 06:05", title: "桃園 T2", d: "第 15 天清晨到家。" },
    ],
  },
];

const ROUTE = [
  ["D1 1/30", "台北夜航"],
  ["D2–4", "米蘭＋科莫冬日"],
  ["D5–6", "琉森／皮拉圖斯雪頂"],
  ["D7–8", "茵特拉肯／少女峰"],
  ["D9–10", "策馬特／馬特洪峰"],
  ["D11 2/9", "冰河列車→聖莫里茲"],
  ["D12 2/10", "伯恩尼納→米蘭"],
  ["D13–14", "備飛、MXP 起飛"],
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
    ["出發", "2027.01.30"],
    ["風景", "隆冬雪景"],
    ["飯店", "6 間"],
    ["冰河列車", "2/9"],
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

  const saved = JSON.parse(localStorage.getItem("j-check") || "{}");
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
        <img class="day-thumb" src="${day.cover}" alt="${day.title}" />
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
                  <img src="${p.src}" alt="${p.cap}" data-cap="${p.cap}" />
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
  fetch("photos/credits.json")
    .then((r) => r.ok ? r.json() : [])
    .then((rows) => {
      const ul = document.getElementById("credit-list");
      if (!rows.length) {
        ul.innerHTML = "<li>照片來自 Wikimedia Commons，授權見各檔案頁。</li>";
        return;
      }
      ul.innerHTML = rows.map((c) => {
        const artist = (c.artist || "").replace(/<[^>]+>/g, "");
        return `<li><a href="${c.commons}" target="_blank" rel="noopener">${c.file}</a>　${c.license || ""}　${artist}</li>`;
      }).join("");
    })
    .catch(() => {
      document.getElementById("credit-list").innerHTML = "<li>Wikimedia Commons</li>";
    });
}

document.getElementById("check-grid").addEventListener("change", (e) => {
  if (e.target.matches("input[type=checkbox]")) {
    const saved = JSON.parse(localStorage.getItem("j-check") || "{}");
    saved[e.target.dataset.i] = e.target.checked;
    localStorage.setItem("j-check", JSON.stringify(saved));
  }
});

document.getElementById("start-date").addEventListener("change", render);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") document.getElementById("lightbox").hidden = true;
});

const heroCycle = [
  ["photos/glacier.jpg", "冰河列車"],
  ["photos/landwasser.jpg", "Landwasser 高架橋"],
  ["photos/jungfrau.jpg", "少女峰雪景"],
  ["photos/matterhorn.jpg", "馬特洪峰"],
  ["photos/duomo.jpg", "米蘭大教堂"],
  ["photos/chapel.jpg", "琉森卡貝爾橋"],
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
