const FX = { CHF: 39, EUR: 36, asOf: "2026-08-24" };
const PARTY = { adults: 4, children: 2, hotelRooms: 3 };

function twd(amount, cur) {
  if (cur === "TWD") return Math.round(amount);
  return Math.round(amount * FX[cur]);
}
function money(amount, cur) {
  const n = Math.round(amount);
  const local = cur === "TWD" ? `NT$${n.toLocaleString("zh-Hant")}` : `${cur} ${n.toLocaleString("zh-Hant")}`;
  if (cur === "TWD") return local;
  return `${local}（約 NT$${twd(amount, cur).toLocaleString("zh-Hant")}）`;
}
function bookingApt(ss, checkin, checkout) {
  const q = new URLSearchParams({
    ss, checkin, checkout,
    group_adults: String(PARTY.adults),
    group_children: String(PARTY.children),
    age: "8",
    no_rooms: "1",
    lang: "zh-tw",
    selected_currency: "TWD",
    nflt: "privacy_type=3",
  });
  q.append("age", "10");
  return `https://www.booking.com/searchresults.zh-tw.html?${q}`;
}
function bookingHotelSearch(ss, checkin, checkout) {
  const q = new URLSearchParams({
    ss, checkin, checkout,
    group_adults: String(PARTY.adults),
    group_children: String(PARTY.children),
    age: "8",
    no_rooms: String(PARTY.hotelRooms),
    lang: "zh-tw",
    selected_currency: "TWD",
  });
  q.append("age", "10");
  return `https://www.booking.com/searchresults.zh-tw.html?${q}`;
}
function airbnbSearch(place, checkin, checkout) {
  const q = new URLSearchParams({
    checkin, checkout,
    adults: String(PARTY.adults),
    children: String(PARTY.children),
  });
  return `https://www.airbnb.com.tw/s/${encodeURIComponent(place)}/homes?${q}`;
}

const STAYS = [
  {
    id: "milan-duomo",
    place: "米蘭 Duomo",
    nights: 3,
    inn: "2027-01-31",
    out: "2027-02-03",
    why: "D2–D4　大教堂／最後的晚餐",
    apt: {
      name: "杜奧莫整套公寓（3 房／可住 6 人）",
      note: "Booking／Airbnb 整套房。有廚房，早餐自己做。比開三間 4 星便宜約一半。",
      night: 380, cur: "EUR",
      search: "Milan Duomo",
    },
    hotel3: {
      name: "4 星飯店 × 3 間",
      note: "例如 Spadari／NH。六人要三間雙人房，單價看起來不貴，乘 3 就貴。",
      night: 220, cur: "EUR",
    },
    high: {
      name: "Park Hyatt × 3 間　或　杜奧莫景觀整層",
      must: true,
      note: "必住如果衝畫面：Park Hyatt 大教堂隔壁。包棟豪華公寓（Duomo view）仍比三間 Park Hyatt 便宜。",
      night: 1200, cur: "EUR",
      aptNight: 850, aptCur: "EUR",
    },
  },
  {
    id: "lucerne",
    place: "琉森",
    nights: 2,
    inn: "2027-02-03",
    out: "2027-02-05",
    why: "D5–D6　卡貝爾橋／皮拉圖斯",
    apt: {
      name: "老城整套公寓（可住 6 人）",
      note: "優先車站或教堂橋步行 10 分內。Airbnb 老城 penthouse 選擇不少。",
      night: 420, cur: "CHF",
      search: "Lucerne",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "Hotel des Alpes 等級，位置好但要三間。",
      night: 280, cur: "CHF",
    },
    high: {
      name: "Hotel des Balances × 3　必住河岸",
      must: true,
      note: "卡貝爾橋對面。若 Balances 沒有三間連通，改訂河岸整棟／整層，不要為了必住拆成三棟不同飯店。",
      night: 450, cur: "CHF",
      aptNight: 750, aptCur: "CHF",
    },
  },
  {
    id: "interlaken",
    place: "茵特拉肯",
    nights: 2,
    inn: "2027-02-05",
    out: "2027-02-07",
    why: "D7–D8　少女峰基地",
    apt: {
      name: "Ost／West 車站附近整套（6 人、3 房）",
      note: "Airbnb 上 6 人家庭公寓很多，走路到 Ost 最重要。有廚房可做隔天少女峰早餐。",
      night: 380, cur: "CHF",
      search: "Interlaken",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "Hotel Interlaken 等級。",
      night: 260, cur: "CHF",
    },
    high: {
      name: "Victoria-Jungfrau × 3　必住地標",
      must: true,
      note: "茵特拉肯地標。家庭可問 connecting rooms。豪華包棟仍通常比三間 Victoria 便宜。",
      night: 850, cur: "CHF",
      aptNight: 650, aptCur: "CHF",
    },
  },
  {
    id: "zermatt",
    place: "策馬特",
    nights: 2,
    inn: "2027-02-07",
    out: "2027-02-09",
    why: "D9–D10　馬特洪峰　滑雪旺季　最該包棟",
    apt: {
      name: "3 房公寓／小木屋整套（6 人）",
      note: "滑雪季飯店三間會爆。Chez Nous 這類 6 人公寓一週約 CHF 6,000–7,300，折合兩晚仍比三間 4 星划算。不要訂週租制的超豪 chalet（一週 CHF 3–9 萬，那是另一個世界）。",
      night: 700, cur: "CHF",
      search: "Zermatt",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "Walliserhof 等級，三間乘起來就比包棟貴。",
      night: 480, cur: "CHF",
    },
    high: {
      name: "Zermatterhof × 3　必住宮殿",
      must: true,
      note: "1879 宮殿。三間在旺季極貴。若要豪：選可住 6 人的整層公寓／chalet（非員工配膳那檔），不要三間總統套房。",
      night: 1500, cur: "CHF",
      aptNight: 1400, aptCur: "CHF",
    },
  },
  {
    id: "stmoritz",
    place: "聖莫里茲",
    nights: 1,
    inn: "2027-02-09",
    out: "2027-02-10",
    why: "D11　冰河列車終點　只住一晚",
    apt: {
      name: "整套公寓（若允許一晚）",
      note: "一晚包棟常被最短入住＋清潔費吃掉。若 Airbnb 最短 3–7 晚，改訂兩間家庭房或一間 6 人公寓式飯店。",
      night: 800, cur: "CHF",
      search: "St. Moritz",
    },
    hotel3: {
      name: "4 星家庭房 × 2～3",
      note: "Laudinella 等級。一晚拆三間不划算，優先兩間可加床的家庭房。",
      night: 380, cur: "CHF",
    },
    high: {
      name: "Badrutt's Palace　必住",
      must: true,
      note: "聖莫里茲就是這家。一晚不要開三間，問家庭套房或兩間 connecting。車站接駁要先講。",
      night: 2200, cur: "CHF",
      aptNight: 1200, aptCur: "CHF",
    },
  },
  {
    id: "milan-centrale",
    place: "米蘭 Centrale",
    nights: 2,
    inn: "2027-02-10",
    out: "2027-02-12",
    why: "D12–D13　備飛，2/12 06:30 出門",
    apt: {
      name: "中央車站整套公寓（6 人）",
      note: "拖六件行李，車站 5–8 分內是硬條件。Airbnb／Booking 整套都有。",
      night: 280, cur: "EUR",
      search: "Milano Centrale",
    },
    hotel3: {
      name: "Hotel Berna × 3",
      note: "車站對面，備飛穩。三間加總仍比包棟貴。",
      night: 190, cur: "EUR",
    },
    high: {
      name: "Excelsior Gallia × 家庭套房／兩間",
      must: true,
      note: "車站連通宮殿。六人優先套房或兩間，不必硬開三間。",
      night: 620, cur: "EUR",
      aptNight: 500, aptCur: "EUR",
    },
  },
];

function aptTotal(stay) {
  return twd(stay.apt.night * stay.nights, stay.apt.cur);
}
function hotel3Total(stay) {
  return twd(stay.hotel3.night * stay.nights * PARTY.hotelRooms, stay.hotel3.cur);
}
function highHotelTotal(stay) {
  return twd(stay.high.night * stay.nights * PARTY.hotelRooms, stay.high.cur);
}
function highAptTotal(stay) {
  return twd((stay.high.aptNight || stay.high.night) * stay.nights, stay.high.aptCur || stay.high.cur);
}

const BUDGET_ROWS = [
  {
    group: "機票",
    name: "長榮來回　4 成人＋2 兒童（估兒童 75%）",
    std: { twd: 55000 * 4 + 41250 * 2, note: "經濟艙。兒童若滿 12 歲改全票，再加約 2.8 萬" },
    high: { twd: 163000 * 4 + 122250 * 2, note: "皇家商務艙。小孩商務很貴，也可大人商務、小孩豪華經濟" },
  },
  {
    group: "住宿",
    name: "米蘭 Duomo 3 晚",
    stayId: "milan-duomo",
  },
  {
    group: "住宿",
    name: "琉森 2 晚",
    stayId: "lucerne",
  },
  {
    group: "住宿",
    name: "茵特拉肯 2 晚",
    stayId: "interlaken",
  },
  {
    group: "住宿",
    name: "策馬特 2 晚",
    stayId: "zermatt",
  },
  {
    group: "住宿",
    name: "聖莫里茲 1 晚",
    stayId: "stmoritz",
  },
  {
    group: "住宿",
    name: "米蘭 Centrale 2 晚",
    stayId: "milan-centrale",
  },
  {
    group: "瑞士交通",
    name: "Swiss Travel Pass 8 日　只要 4 張成人",
    std: { twd: twd(439 * 4, "CHF"), note: "2 等 ×4。6–15 歲小孩持免費 Family Card，未滿 6 歲不用票" },
    high: { twd: twd(697 * 4, "CHF"), note: "1 等 ×4。小孩 Family Card 仍免費（跟成人同一車廂等級）" },
  },
  {
    group: "瑞士交通",
    name: "冰河列車座位 2/9　6 人都要訂",
    std: { twd: twd(54 * 6, "CHF"), note: "2 等座位 CHF 54 ×6。小孩也要定位" },
    high: { twd: twd(540 * 6, "CHF"), note: "Excellence ×6 很貴。可改 4 成人 Excellence＋2 小孩 1 等座位" },
  },
  {
    group: "瑞士交通",
    name: "伯恩尼納景觀座位 2/10 ×6",
    std: { twd: twd(20 * 6, "CHF"), note: "2 等景觀。也可搭普通列車省這筆" },
    high: { twd: twd(32 * 6, "CHF"), note: "1 等景觀座位" },
  },
  {
    group: "門票",
    name: "少女峰來回　4 大人＋2 小孩",
    std: { twd: twd(160 * 4 + 80 * 2, "CHF"), note: "STP 折扣後參考。小孩半價估" },
    high: { twd: twd(200 * 4 + 100 * 2, "CHF"), note: "含山上餐。山頂沒有商務艙" },
  },
  {
    group: "門票",
    name: "最後的晚餐＋大教堂屋頂",
    std: { twd: twd(15 * 4 + 30 * 6, "EUR"), note: "Cenacolo 未滿 18 免費但仍要預約；屋頂 6 人" },
    high: { twd: twd(15 * 4 + 45 * 6, "EUR"), note: "加導覽／快速通道" },
  },
  {
    group: "義大利交通",
    name: "機場快線、科莫、EuroCity 義大利段、Tirano→米蘭",
    std: { twd: twd(80 * 4 + 40 * 2, "EUR"), note: "2 等。小孩義大利火車通常有折扣" },
    high: { twd: twd(160 * 4 + 80 * 2, "EUR"), note: "1 等＋必要計程車（六件行李）" },
  },
  {
    group: "餐食",
    name: "12 天餐　包棟可自煮早餐",
    std: { twd: 125000, note: "公寓自煮早餐＋部分晚餐。瑞士外食仍貴" },
    high: { twd: 320000, note: "幾乎每餐餐廳。Excellence 當天午餐已含在車票" },
  },
  {
    group: "其他",
    name: "保險、SIM、雜支、緩衝",
    std: { twd: 28000, note: "六人旅平險＋兩張歐遊卡" },
    high: { twd: 80000, note: "取消險＋高山＋私人接送" },
  },
];

function rowStd(row) {
  if (row.stayId) return aptTotal(STAYS.find((s) => s.id === row.stayId));
  return row.std.twd;
}
function rowHigh(row) {
  if (row.stayId) return highHotelTotal(STAYS.find((s) => s.id === row.stayId));
  return row.high.twd;
}
function rowStdNote(row) {
  if (row.stayId) {
    const s = STAYS.find((x) => x.id === row.stayId);
    return `${s.apt.name}　${s.nights} 晚 × ${money(s.apt.night, s.apt.cur).split("（")[0].trim()}／套`;
  }
  return row.std.note;
}
function rowHighNote(row) {
  if (row.stayId) {
    const s = STAYS.find((x) => x.id === row.stayId);
    return `${s.high.name}　${s.nights} 晚 × 3 間 × ${money(s.high.night, s.high.cur).split("（")[0].trim()}`;
  }
  return row.high.note;
}

function renderHotels() {
  const el = document.getElementById("hotel-list");
  if (!el) return;
  el.innerHTML = STAYS.map((s) => {
    const apt = aptTotal(s);
    const h3 = hotel3Total(s);
    const hi = highHotelTotal(s);
    const hiApt = highAptTotal(s);
    return `
      <article class="stay-card">
        <header>
          <p class="tag">${s.nights} 晚　${s.inn} → ${s.out}　四大兩小</p>
          <h3>${s.place}</h3>
          <p>${s.why}</p>
        </header>
        <div class="stay-pair stay-triple">
          <div class="stay-opt">
            <p class="tier">普通 · 包棟／整套（建議）</p>
            <h4>${s.apt.name}</h4>
            <p>${s.apt.note}</p>
            <p class="price">參考 ${money(s.apt.night, s.apt.cur)}／套／晚<br/>${s.nights} 晚約 NT$${apt.toLocaleString("zh-Hant")}<br/>六人分擔每晚約 NT$${Math.round(twd(s.apt.night, s.apt.cur) / 6).toLocaleString("zh-Hant")}</p>
            <a class="book-btn" href="${bookingApt(s.apt.search, s.inn, s.out)}" target="_blank" rel="noopener">Booking 整套房</a>
            <a class="book-btn ghost" href="${airbnbSearch(s.apt.search, s.inn, s.out)}" target="_blank" rel="noopener">Airbnb 整套房</a>
          </div>
          <div class="stay-opt mid">
            <p class="tier">對照 · 普通飯店 × 3 間</p>
            <h4>${s.hotel3.name}</h4>
            <p>${s.hotel3.note}</p>
            <p class="price">參考 ${money(s.hotel3.night, s.hotel3.cur)}／間／晚 × 3<br/>${s.nights} 晚約 NT$${h3.toLocaleString("zh-Hant")}<br/>比包棟貴約 NT$${(h3 - apt).toLocaleString("zh-Hant")}</p>
            <a class="book-btn" href="${bookingHotelSearch(s.place, s.inn, s.out)}" target="_blank" rel="noopener">Booking 3 間房</a>
          </div>
          <div class="stay-opt high">
            <p class="tier">最高等 · 必住</p>
            <h4>${s.high.name}</h4>
            <p>${s.high.note}</p>
            <p class="price">三間必住 ${s.nights} 晚約 NT$${hi.toLocaleString("zh-Hant")}<br/>若改豪華包棟約 NT$${hiApt.toLocaleString("zh-Hant")}</p>
            <a class="book-btn gold" href="${bookingHotelSearch(s.place, s.inn, s.out)}" target="_blank" rel="noopener">Booking 必住／家庭套房</a>
            <a class="book-btn ghost goldg" href="${airbnbSearch(s.apt.search, s.inn, s.out)}" target="_blank" rel="noopener">Airbnb 豪華整套</a>
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderBudget() {
  const body = document.getElementById("budget-body");
  const foot = document.getElementById("budget-foot");
  const summary = document.getElementById("budget-summary");
  if (!body) return;

  let stdSum = 0;
  let highSum = 0;
  let lastGroup = "";
  body.innerHTML = BUDGET_ROWS.map((row) => {
    const s = rowStd(row);
    const h = rowHigh(row);
    stdSum += s;
    highSum += h;
    const groupCell = row.group !== lastGroup ? row.group : "";
    lastGroup = row.group;
    return `<tr>
      <td class="g">${groupCell}</td>
      <td>${row.name}</td>
      <td><strong>NT$${s.toLocaleString("zh-Hant")}</strong><div class="sub">${rowStdNote(row)}</div></td>
      <td class="hi"><strong>NT$${h.toLocaleString("zh-Hant")}</strong><div class="sub">${rowHighNote(row)}</div></td>
    </tr>`;
  }).join("");

  const per6std = Math.round(stdSum / 6);
  const per6high = Math.round(highSum / 6);
  const hotelApt = STAYS.reduce((a, s) => a + aptTotal(s), 0);
  const hotel3 = STAYS.reduce((a, s) => a + hotel3Total(s), 0);
  const hotelHi = STAYS.reduce((a, s) => a + highHotelTotal(s), 0);

  foot.innerHTML = `<tr>
    <th></th>
    <th>六人合計</th>
    <th>NT$${stdSum.toLocaleString("zh-Hant")}</th>
    <th class="hi">NT$${highSum.toLocaleString("zh-Hant")}</th>
  </tr>
  <tr>
    <th></th>
    <th>六人平均分擔</th>
    <th>NT$${per6std.toLocaleString("zh-Hant")}</th>
    <th class="hi">NT$${per6high.toLocaleString("zh-Hant")}</th>
  </tr>`;

  summary.innerHTML = `
    <article>
      <p class="tag">普通 · 包棟分擔</p>
      <h3>NT$${stdSum.toLocaleString("zh-Hant")}</h3>
      <p>六人合計　每人約 NT$${per6std.toLocaleString("zh-Hant")}</p>
      <p>經濟艙＋STP 2 等（小孩免費）＋整套公寓</p>
    </article>
    <article class="high">
      <p class="tag">全部最高等 · 必住 ×3 間</p>
      <h3>NT$${highSum.toLocaleString("zh-Hant")}</h3>
      <p>六人合計　每人約 NT$${per6high.toLocaleString("zh-Hant")}</p>
      <p>商務艙＋STP 1 等＋Excellence＋宮殿三間</p>
    </article>
    <article>
      <p class="tag">住宿怎麼分比較便宜</p>
      <h3>包棟贏三間飯店</h3>
      <p>12 晚整套約 NT$${hotelApt.toLocaleString("zh-Hant")}</p>
      <p>普通飯店 ×3 約 NT$${hotel3.toLocaleString("zh-Hant")}</p>
      <p>必住 ×3 約 NT$${hotelHi.toLocaleString("zh-Hant")}</p>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHotels();
  renderBudget();
});
