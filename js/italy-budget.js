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
    id: "venice",
    place: "威尼斯 Cannaregio／Dorsoduro",
    nights: 3,
    inn: "2027-02-07",
    out: "2027-02-10",
    why: "D2–D4　嘉年華最後三天　這段最早沒房",
    apt: {
      name: "運河整套公寓（3 房／可住 6 人）",
      note: "嘉年華＋春節，聖馬可很貴很吵。優先 Cannaregio 或 Dorsoduro，vaporetto 站步行 5 分內。不要訂沒有電梯、要抬箱過橋的三樓。",
      night: 620, cur: "EUR",
      search: "Venice Cannaregio",
    },
    hotel3: {
      name: "4 星飯店 × 3 間",
      note: "嘉年華三間雙人房通常比一套公寓貴，還不能自己做早餐。",
      night: 380, cur: "EUR",
    },
    high: {
      name: "Gritti Palace／Danieli × 3　或　大運河 palazzo 整層",
      must: true,
      note: "必住如果衝畫面：Gritti 或 Danieli。六人不要硬開三間總統套房，問家庭套房或 palazzo 整層。",
      night: 1600, cur: "EUR",
      aptNight: 1400, aptCur: "EUR",
    },
  },
  {
    id: "florence",
    place: "佛羅倫斯 Oltrarno／SMN",
    nights: 4,
    inn: "2027-02-10",
    out: "2027-02-14",
    why: "D5–D8　烏菲茲／大衛／工坊逛街",
    apt: {
      name: "Oltrarno 或 SMN 步行 10 分整套（6 人、3 房）",
      note: "有廚房可自煮。Oltrarno 晚上較像生活區；拖行李從 SMN 過舊橋要算 20 分＋橋。ZTL，計程車可進。",
      night: 340, cur: "EUR",
      search: "Florence Oltrarno",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "SMN 或主教堂附近。三間加總通常仍比包棟貴。",
      night: 210, cur: "EUR",
    },
    high: {
      name: "Portrait Firenze／Hotel Savoy × 家庭套房",
      must: true,
      note: "Portrait 在舊橋旁。六人問 connecting 或整層，不要拆三棟。",
      night: 950, cur: "EUR",
      aptNight: 780, aptCur: "EUR",
    },
  },
  {
    id: "rome",
    place: "羅馬 Prati／特拉斯提弗列",
    nights: 7,
    inn: "2027-02-14",
    out: "2027-02-21",
    why: "D9–D15　梵蒂岡／競技場／逛街／2/21 FCO 早飛",
    apt: {
      name: "Prati 或 Termini 地鐵 15 分內整套（6 人、3 房）",
      note: "Prati 走梵蒂岡近。2/21 要去 Termini 搭 Leonardo Express，住太深的 Trastevere 早飛會痛。英國 half-term 重疊，早訂。",
      night: 390, cur: "EUR",
      search: "Rome Prati",
    },
    hotel3: {
      name: "4 星 × 3 間",
      note: "西班牙階梯／萬神殿一帶三間會很貴。",
      night: 250, cur: "EUR",
    },
    high: {
      name: "Hassler／Hotel de Russie × 家庭套房",
      must: true,
      note: "Hassler 在西班牙階梯頂。六人優先套房或兩間連通，不要三間總統。",
      night: 1200, cur: "EUR",
      aptNight: 900, aptCur: "EUR",
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
    name: "開腳　長榮 BR95 ＋ 華航 CI76　4 成人＋2 兒童（估兒童 75%）",
    std: { twd: 68000 * 4 + 51000 * 2, note: "兩段單程估。2/6 大年夜 TPE–MXP 旺季。回程 CI76 不是每天飛，2/21 週日要先對班表。拆票比來回套票貴一點。" },
    high: { twd: 180000 * 4 + 135000 * 2, note: "去程長榮商務＋回程華航商務。小孩也可改豪華經濟。" },
  },
  { group: "住宿", name: "威尼斯 3 晚（嘉年華）", stayId: "venice" },
  { group: "住宿", name: "佛羅倫斯 4 晚", stayId: "florence" },
  { group: "住宿", name: "羅馬 7 晚", stayId: "rome" },
  {
    group: "義大利交通",
    name: "Frecciarossa 三段　六人對號入座",
    std: { twd: twd(45 * 4 * 3 + 22 * 2 * 3, "EUR"), note: "2 等 Super Economy。米蘭→威尼斯、威尼斯→佛羅倫斯、佛羅倫斯→羅馬。小孩 4–14 常半價。" },
    high: { twd: twd(95 * 4 * 3 + 48 * 2 * 3, "EUR"), note: "Business。家庭意義不大，Standard 即可。" },
  },
  {
    group: "義大利交通",
    name: "機場快線、vaporetto、羅馬地鐵、Outlet 接駁",
    std: { twd: twd(15 * 6 + 14 * 6 + 45 * 6 + 25 * 6 + 20 * 6, "EUR"), note: "Malpensa Express 單程、Leonardo Express、威尼斯 3 日卡、羅馬 72h、Castel Romano 接駁（不去就刪）。" },
    high: { twd: twd(110 + 50 * 2 + 45 * 6 + 40 * 6 + 120, "EUR"), note: "MXP 計程車＋FCO 定價車＋vaporetto＋私人車去 Outlet" },
  },
  {
    group: "門票",
    name: "威尼斯總督宮＋聖馬可博物館",
    std: { twd: twd(30 * 4 + 15 * 2, "EUR"), note: "嘉年華街道免費。總督宮兒童減免依年齡。不要買黃牛面具舞會。" },
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
    std: { twd: twd(25 * 4 + 18 * 4 + 8 * 4, "EUR"), note: "官方 museivaticani.va、colosseo.it。小孩減免。2/15 梵蒂岡、2/16 競技場。" },
    high: { twd: twd(75 * 6 + 45 * 6, "EUR"), note: "官方導覽／早場。不要第三方 skip-the-line 黃牛。" },
  },
  {
    group: "門票",
    name: "聖天使堡（最後的晚餐這次不定）",
    std: { twd: twd(16 * 4 + 8 * 2, "EUR"), note: "開腳不住米蘭，Cenacolo／屋頂刪。聖天使堡兒童減免依年齡。" },
    high: { twd: twd(30 * 6, "EUR"), note: "加導覽。若堅持最後的晚餐，整條路線要改回米蘭飛。" },
  },
  {
    group: "餐食",
    name: "14 晚餐　包棟可自煮早餐",
    std: { twd: 145000, note: "公寓早餐＋披薩／食堂午餐＋部分晚餐。威尼斯嘉年華餐廳要訂。" },
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
