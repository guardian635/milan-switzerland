const FX = { EUR: 36, asOf: "2026-08-24" };
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
    id: "rome",
    place: "羅馬 Prati／metro A",
    nights: 5,
    inn: "2027-02-07",
    out: "2027-02-12",
    why: "D2–D6　梵蒂岡 2/8、競技場、天空之城 2/10、龐貝 2/11",
    apt: {
      name: "Prati 或 metro A 整套（6 人、3 房）",
      note: "落地 Leonardo Express 到 Termini。2/12 轉佛羅倫斯，住太深的 Trastevere 搬箱會痛。問清：瞬熱熱水或 boiler 公升數、暖氣時段、電梯是否先走半層。",
      night: 390, cur: "EUR",
      search: "Rome Prati",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "西班牙階梯一帶三間會很貴。",
      night: 250, cur: "EUR",
    },
    high: {
      name: "Hassler／Hotel de Russie × 家庭套房",
      must: true,
      note: "六人問套房或兩間連通。",
      night: 1200, cur: "EUR",
      aptNight: 900, aptCur: "EUR",
    },
  },
  {
    id: "florence",
    place: "佛羅倫斯 Oltrarno／SMN",
    nights: 3,
    inn: "2027-02-12",
    out: "2027-02-15",
    why: "D7–D9　烏菲茲／大衛／工坊。錫耶納刪掉。",
    apt: {
      name: "Oltrarno 或 SMN 步行 10 分整套（6 人、3 房）",
      note: "有廚房。Oltrarno 過河叫計程車（可進 ZTL）。同樣問熱水、暖氣、電梯。",
      night: 340, cur: "EUR",
      search: "Florence Oltrarno",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "三間加總通常比包棟貴。",
      night: 210, cur: "EUR",
    },
    high: {
      name: "Portrait Firenze／Hotel Savoy × 家庭套房",
      must: true,
      note: "六人問 connecting 或整層。",
      night: 950, cur: "EUR",
      aptNight: 780, aptCur: "EUR",
    },
  },
  {
    id: "venice",
    place: "威尼斯 Cannaregio／Dorsoduro",
    nights: 3,
    inn: "2027-02-15",
    out: "2027-02-18",
    why: "D10–D12　嘉年華後的水城",
    apt: {
      name: "運河整套公寓（3 房／6 人）",
      note: "嘉年華已過，較好訂。最近碼頭 5 分內（進出用水上計程車）、盡量有電梯且不要先走半層。問熱水 boiler 與暖氣時段，帶小孩冬天很關鍵。",
      night: 380, cur: "EUR",
      search: "Venice Cannaregio",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "三間通常比包棟貴。",
      night: 280, cur: "EUR",
    },
    high: {
      name: "Gritti／Danieli 家庭套房或 palazzo 整層",
      must: true,
      note: "不要硬開三間總統。",
      night: 1400, cur: "EUR",
      aptNight: 1100, aptCur: "EUR",
    },
  },
  {
    id: "milan",
    place: "米蘭 Duomo／金四角",
    nights: 3,
    inn: "2027-02-18",
    out: "2027-02-21",
    why: "D13–D15　金四角、最後的晚餐、Serravalle、2/21 早飛",
    apt: {
      name: "杜奧莫／Montenapoleone 整套（3 房／6 人）",
      note: "最後才逛街，袋子隔天托運。2/21 07:00 van 樓下接去 MXP，要能停車的門牌、少階梯。不要訂太靠 Navigli。",
      night: 360, cur: "EUR",
      search: "Milan Duomo",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "Spadari／NH 等級。三間加總通常比包棟貴。",
      night: 220, cur: "EUR",
    },
    high: {
      name: "Park Hyatt × 家庭套房　或　杜奧莫景觀整層",
      must: true,
      note: "金四角旁邊。六人問套房或整層。",
      night: 1200, cur: "EUR",
      aptNight: 850, aptCur: "EUR",
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
    name: "開腳　華航去羅馬 ＋ 長榮回米蘭　4 成人＋2 兒童（估兒童 75%）",
    std: { twd: 62000 * 4 + 46500 * 2, note: "兩段單程經濟艙估。2/6 大年夜去程仍旺。" },
    high: { twd: (121636 + 69833) * 4 + Math.round((121636 + 69833) * 0.75) * 2, note: "你查的商務：去程羅馬 121,636＋回程米蘭 1,939.81€（約 69,833）。合計約 191,469／成人。" },
  },
  { group: "住宿", name: "羅馬 5 晚", stayId: "rome" },
  { group: "住宿", name: "佛羅倫斯 3 晚", stayId: "florence" },
  { group: "住宿", name: "威尼斯 3 晚", stayId: "venice" },
  { group: "住宿", name: "米蘭 3 晚（最後才逛街）", stayId: "milan" },
  {
    group: "義大利交通",
    name: "Frecciarossa　羅馬⇄拿坡里＋三段北上　六人對號",
    std: { twd: twd(45 * 4 * 5 + 22 * 2 * 5, "EUR"), note: "2 等 Super Economy。2/11 羅馬⇄拿坡里、2/12 羅馬→佛羅倫斯、2/15 佛羅倫斯→威尼斯、2/18 威尼斯→米蘭。" },
    high: { twd: twd(95 * 4 * 5 + 48 * 2 * 5, "EUR"), note: "Business。家庭意義不大，Standard 即可。" },
  },
  {
    group: "義大利交通",
    name: "天空之城　羅馬包車 van 一日",
    std: { twd: twd(420 + 5 * 6, "EUR"), note: "7–8 人座一日約 €400–450。公寓樓下上車，直達吊橋停車場。回程可停奧爾維耶托大教堂外觀。門票約 €5。" },
    high: { twd: twd(550 + 5 * 6, "EUR"), note: "含中英司機＋等待。" },
  },
  {
    group: "義大利交通",
    name: "威尼斯進出水上計程車（帶大箱）",
    std: { twd: twd(130 * 2, "EUR"), note: "2/15 進、2/18 出。6 人＋四箱一艘，估 €130／趟。島上觀光仍用 vaporetto 3 日卡。" },
    high: { twd: twd(180 * 2, "EUR"), note: "指定碼頭、私人船。" },
  },
  {
    group: "義大利交通",
    name: "Leonardo Express、vaporetto 3 日、羅馬地鐵、Outlet 接駁、MXP 包車",
    std: { twd: twd(14 * 6 + 45 * 6 + 25 * 6 + 25 * 4 + 10 * 2 + 130, "EUR"), note: "進羅馬仍坐 Leonardo Express。2/21 杜奧莫 van 直送 MXP T1 估 €130。不出 Centrale 擠地鐵。" },
    high: { twd: twd(50 * 2 + 45 * 6 + 40 * 6 + 180 + 160, "EUR"), note: "FCO 定價車＋Outlet 私人車＋MXP 賓士 van" },
  },
  {
    group: "門票",
    name: "威尼斯總督宮＋聖馬可博物館",
    std: { twd: twd(30 * 4 + 15 * 2, "EUR"), note: "街道免費。總督宮兒童減免依年齡。" },
    high: { twd: twd(85 * 6, "EUR"), note: "含導覽。Il Ballo del Doge 等舞會 €800 起，不列入家庭行程。" },
  },
  {
    group: "門票",
    name: "烏菲茲＋學院（大衛）",
    std: { twd: twd(29 * 4 + 20 * 4, "EUR"), note: "官方提前票。義大利／歐盟未滿 18 常免費但仍要預約。兩館不要同一天。" },
    high: { twd: twd(70 * 6, "EUR"), note: "官方小團導覽。Vasari 走廊另計、二月不一定開。" },
  },
  {
    group: "門票",
    name: "梵蒂岡博物館＋競技場聯票",
    std: { twd: twd(25 * 4 + 18 * 4 + 8 * 4, "EUR"), note: "官方。2/8 梵蒂岡週一、2/9 競技場。" },
    high: { twd: twd(75 * 6 + 45 * 6, "EUR"), note: "官方導覽／早場。不要第三方 skip-the-line 黃牛。" },
  },
  {
    group: "門票",
    name: "龐貝遺址＋拿坡里⇄遺址包車",
    std: { twd: twd(18 * 4 + 120, "EUR"), note: "官方 pompeiisites.org。成人約 €18，歐盟未滿 18 常免費仍要預約。Napoli Centrale 預叫 van／兩台計程車，不要 Circumvesuviana。" },
    high: { twd: twd(55 * 6 + 180, "EUR"), note: "導覽＋司機在入口等。" },
  },
  {
    group: "門票",
    name: "最後的晚餐＋米蘭大教堂屋頂＋聖天使堡",
    std: { twd: twd(15 * 4 + 20 * 6 + 16 * 4, "EUR"), note: "Cenacolo 未滿 18 免費仍要預約。屋頂選電梯。" },
    high: { twd: twd(15 * 4 + 45 * 6 + 30 * 6, "EUR"), note: "加導覽／快速通道" },
  },
  {
    group: "餐食",
    name: "14 晚餐　包棟可自煮早餐",
    std: { twd: 145000, note: "公寓早餐＋部分晚餐。2/14 情人節在佛羅倫斯要訂位。" },
    high: { twd: 360000, note: "幾乎每餐餐廳。不含 €800 舞會。" },
  },
  {
    group: "其他",
    name: "保險、SIM、雜支、緩衝、退稅",
    std: { twd: 32000, note: "六人旅平險＋兩張歐遊卡。Outlet 購物另計，不列入。" },
    high: { twd: 90000, note: "取消險＋私人接送＋行李運送" },
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
      <p>開腳經濟艙（春節旺季）＋ Freccia 2 等＋整套公寓</p>
    </article>
    <article class="high">
      <p class="tag">全部最高等 · 必住 ×3 間</p>
      <h3>NT$${highSum.toLocaleString("zh-Hant")}</h3>
      <p>六人合計　每人約 NT$${per6high.toLocaleString("zh-Hant")}</p>
      <p>商務艙拆票＋Freccia Business＋宮殿三間。不含嘉年華舞會。</p>
    </article>
    <article>
      <p class="tag">住宿怎麼分比較便宜</p>
      <h3>包棟贏三間飯店</h3>
      <p>14 晚整套約 NT$${hotelApt.toLocaleString("zh-Hant")}</p>
      <p>普通飯店 ×3 約 NT$${hotel3.toLocaleString("zh-Hant")}</p>
      <p>必住 ×3 約 NT$${hotelHi.toLocaleString("zh-Hant")}</p>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHotels();
  renderBudget();
});
