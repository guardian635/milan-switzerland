const FX = { CHF: 39, EUR: 36, asOf: "2026-08-24" };

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
function bookingHotel(slug, checkin, checkout) {
  const q = new URLSearchParams({
    checkin, checkout, group_adults: "2", no_rooms: "1",
    lang: "zh-tw", selected_currency: "TWD",
  });
  return `https://www.booking.com/hotel/${slug}.html?${q}`;
}
function bookingSearch(ss, checkin, checkout) {
  const q = new URLSearchParams({
    ss, checkin, checkout, group_adults: "2", no_rooms: "1",
    lang: "zh-tw", selected_currency: "TWD",
  });
  return `https://www.booking.com/searchresults.zh-tw.html?${q}`;
}

const STAYS = [
  {
    id: "milan-duomo",
    place: "米蘭 Duomo",
    nights: 3,
    inn: "2027-01-31",
    out: "2027-02-03",
    why: "D2–D4　大教堂／最後的晚餐",
    std: {
      name: "Hotel Spadari al Duomo",
      stars: "4★",
      note: "杜奧莫步行 3 分，中檔設計旅店，台灣旅客常住。",
      slug: "it/spadari-al-duomo",
      night: 220, cur: "EUR",
    },
    high: {
      name: "Park Hyatt Milano",
      stars: "5★ 必住",
      must: true,
      note: "杜奧莫廣場正隔壁，打開窗就是大教堂。這段義大利唯一值得衝的五星。",
      slug: "it/park-hyatt-milano",
      night: 1200, cur: "EUR",
    },
  },
  {
    id: "lucerne",
    place: "琉森",
    nights: 2,
    inn: "2027-02-03",
    out: "2027-02-05",
    why: "D5–D6　卡貝爾橋／皮拉圖斯",
    std: {
      name: "Hotel des Alpes",
      stars: "4★",
      note: "車站與教堂橋之間，位置對，房型普通。",
      slug: "ch/desalpes",
      night: 280, cur: "CHF",
    },
    high: {
      name: "Hotel des Balances",
      stars: "4★ 必住",
      must: true,
      note: "河岸、卡貝爾橋正對面。打開窗就是明信片，比五星宮殿更該住。",
      slug: "ch/desbalances",
      night: 450, cur: "CHF",
    },
  },
  {
    id: "interlaken",
    place: "茵特拉肯",
    nights: 2,
    inn: "2027-02-05",
    out: "2027-02-07",
    why: "D7–D8　少女峰基地",
    std: {
      name: "Hotel Interlaken",
      stars: "4★",
      note: "Ost 車站可走，中檔、乾淨、冬天好找。",
      slug: "ch/hotel-interlaken",
      night: 260, cur: "CHF",
    },
    high: {
      name: "Victoria-Jungfrau Grand Hotel & Spa",
      stars: "5★ 必住",
      must: true,
      note: "茵特拉肯地標。Höheweg 正中、正對少女峰。這區不去住這間就少了畫面。",
      slug: "ch/victoria-jungfrau-grand-spa",
      night: 850, cur: "CHF",
    },
  },
  {
    id: "zermatt",
    place: "策馬特",
    nights: 2,
    inn: "2027-02-07",
    out: "2027-02-09",
    why: "D9–D10　馬特洪峰　滑雪旺季",
    std: {
      name: "Hotel Walliserhof",
      stars: "4★",
      note: "車站步行可到，滑雪季中檔已經不便宜。",
      slug: "ch/walliserhof",
      night: 480, cur: "CHF",
    },
    high: {
      name: "Grand Hotel Zermatterhof",
      stars: "5★ 必住",
      must: true,
      note: "1879 開業的策馬特宮殿，教堂廣場、峰景。二月高檔。備選 Mont Cervin Palace。",
      slug: "ch/grand-zermatterhof",
      night: 1500, cur: "CHF",
    },
  },
  {
    id: "stmoritz",
    place: "聖莫里茲",
    nights: 1,
    inn: "2027-02-09",
    out: "2027-02-10",
    why: "D11　冰河列車終點　天黑前要能走到",
    std: {
      name: "Hotel Laudinella",
      stars: "4★",
      note: "湖邊、相對好訂，車站需步行或短程接駁。",
      slug: "ch/laudinella",
      night: 380, cur: "CHF",
    },
    high: {
      name: "Badrutt's Palace Hotel",
      stars: "5★ 必住",
      must: true,
      note: "聖莫里茲發明冬季度假的那一家。冰河列車下車後的收尾該在這裡。確認有車站接駁。",
      slug: "ch/badrutt-s-palace-st-moritz",
      night: 2200, cur: "CHF",
    },
  },
  {
    id: "milan-centrale",
    place: "米蘭 Centrale",
    nights: 2,
    inn: "2027-02-10",
    out: "2027-02-12",
    why: "D12–D13　備飛，2/12 06:30 出門",
    std: {
      name: "Hotel Berna",
      stars: "4★",
      note: "中央車站正對面，拖行李零距離。J 人備飛首選中檔。",
      slug: "it/berna",
      night: 190, cur: "EUR",
    },
    high: {
      name: "Excelsior Hotel Gallia",
      stars: "5★ 必住",
      must: true,
      note: "車站連通的宮殿飯店。最後兩晚不必為了面子住到杜奧莫再趕車。",
      slug: "it/excelsiorhotelgalliamilan",
      night: 620, cur: "EUR",
    },
  },
];

/** 2 成人、1 間雙人房。金額為該列總價（已乘人數或房晚）。 */
const BUDGET_ROWS = [
  {
    group: "機票",
    name: "長榮 BR95／BR96 來回 ×2 人",
    std: { n: 55000, cur: "TWD", q: 2, note: "經濟艙，1 月歐洲線參考（官網曾見約 3.6–6.9 萬）" },
    high: { n: 163000, cur: "TWD", q: 2, note: "皇家商務艙，EVA 官網 2027/01 商務來回約 16.3 萬／人" },
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
    name: "Swiss Travel Pass 8 日 ×2",
    std: { n: 439, cur: "CHF", q: 2, note: "2 等。含瑞士段火車／船／伯恩尼納到 Tirano" },
    high: { n: 697, cur: "CHF", q: 2, note: "1 等。坐冰河列車 Excellence 一定要這個" },
  },
  {
    group: "瑞士交通",
    name: "冰河列車座位 2/9 ×2",
    std: { n: 54, cur: "CHF", q: 2, note: "2 等座位預約。車資已在 STP" },
    high: { n: 540, cur: "CHF", q: 2, note: "Excellence 尊爵艙，含餐酒、保證窗邊" },
  },
  {
    group: "瑞士交通",
    name: "伯恩尼納景觀車廂 2/10 ×2",
    std: { n: 20, cur: "CHF", q: 2, note: "2 等景觀座位。也可改搭普通列車省這筆" },
    high: { n: 32, cur: "CHF", q: 2, note: "1 等景觀座位。車資已在 STP 1 等" },
  },
  {
    group: "門票",
    name: "少女峰來回 ×2",
    std: { n: 160, cur: "CHF", q: 2, note: "持 STP 約 25% 折扣後的冬季參考" },
    high: { n: 200, cur: "CHF", q: 2, note: "山頂沒有商務艙；含山上熱餐／咖啡" },
  },
  {
    group: "門票",
    name: "最後的晚餐＋大教堂屋頂 ×2",
    std: { n: 45, cur: "EUR", q: 2, note: "Cenacolo €15＋屋頂套票約 €30" },
    high: { n: 90, cur: "EUR", q: 2, note: "官方票＋導覽／快速通道，仍無商務艙" },
  },
  {
    group: "義大利交通",
    name: "機場快線、科莫、EuroCity 義大利段、Tirano→米蘭 ×2",
    std: { n: 90, cur: "EUR", q: 2, note: "2 等點對點" },
    high: { n: 180, cur: "EUR", q: 2, note: "1 等＋必要時計程車，不含自駕" },
  },
  {
    group: "餐食",
    name: "12 天餐（D2–D13）×2 人",
    std: { n: 62000, cur: "TWD", q: 1, note: "義大利約 €50／人／日、瑞士約 CHF 80／人／日" },
    high: { n: 155000, cur: "TWD", q: 1, note: "Fine dining／山頂餐廳。Excellence 午餐已含在冰河列車" },
  },
  {
    group: "其他",
    name: "保險、SIM、雜支、緩衝",
    std: { n: 13000, cur: "TWD", q: 1, note: "兩人合計，含基本旅平險" },
    high: { n: 44000, cur: "TWD", q: 1, note: "取消險＋高山＋私人接送緩衝" },
  },
];

function stayAmount(stay, tier) {
  const h = stay[tier];
  return twd(h.night * stay.nights, h.cur);
}

function rowAmount(row, tier) {
  if (row.stayId) {
    const stay = STAYS.find((s) => s.id === row.stayId);
    return stayAmount(stay, tier);
  }
  const cell = row[tier];
  return twd(cell.n * (cell.q || 1), cell.cur);
}

function rowNote(row, tier) {
  if (row.stayId) {
    const stay = STAYS.find((s) => s.id === row.stayId);
    const h = stay[tier];
    return `${h.name}　${stay.nights} 晚 × ${money(h.night, h.cur).split("（")[0].trim()}／晚`;
  }
  return row[tier].note;
}

function renderHotels() {
  const el = document.getElementById("hotel-list");
  if (!el) return;
  el.innerHTML = STAYS.map((s) => {
    const stdTotal = stayAmount(s, "std");
    const highTotal = stayAmount(s, "high");
    return `
      <article class="stay-card">
        <header>
          <p class="tag">${s.nights} 晚　${s.inn} → ${s.out}</p>
          <h3>${s.place}</h3>
          <p>${s.why}</p>
        </header>
        <div class="stay-pair">
          <div class="stay-opt">
            <p class="tier">普通</p>
            <h4>${s.std.name} <small>${s.std.stars}</small></h4>
            <p>${s.std.note}</p>
            <p class="price">參考 ${money(s.std.night, s.std.cur)}／晚<br/>${s.nights} 晚約 NT$${stdTotal.toLocaleString("zh-Hant")}</p>
            <a class="book-btn" href="${bookingHotel(s.std.slug, s.inn, s.out)}" target="_blank" rel="noopener">在 Booking 開即時價</a>
          </div>
          <div class="stay-opt high">
            <p class="tier">${s.high.must ? "必住 · 最高等" : "最高等"}</p>
            <h4>${s.high.name} <small>${s.high.stars}</small></h4>
            <p>${s.high.note}</p>
            <p class="price">參考 ${money(s.high.night, s.high.cur)}／晚<br/>${s.nights} 晚約 NT$${highTotal.toLocaleString("zh-Hant")}</p>
            <a class="book-btn gold" href="${bookingHotel(s.high.slug, s.inn, s.out)}" target="_blank" rel="noopener">在 Booking 開即時價</a>
          </div>
        </div>
        <p class="search-alt"><a href="${bookingSearch(s.place, s.inn, s.out)}" target="_blank" rel="noopener">或在 Booking 搜尋「${s.place}」同一日期，看全部可訂房</a></p>
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
    const s = rowAmount(row, "std");
    const h = rowAmount(row, "high");
    stdSum += s;
    highSum += h;
    const groupCell = row.group !== lastGroup ? row.group : "";
    lastGroup = row.group;
    return `<tr>
      <td class="g">${groupCell}</td>
      <td>${row.name}</td>
      <td><strong>NT$${s.toLocaleString("zh-Hant")}</strong><div class="sub">${rowNote(row, "std")}</div></td>
      <td class="hi"><strong>NT$${h.toLocaleString("zh-Hant")}</strong><div class="sub">${rowNote(row, "high")}</div></td>
    </tr>`;
  }).join("");

  const diff = highSum - stdSum;
  foot.innerHTML = `<tr>
    <th></th>
    <th>兩人 1 房合計</th>
    <th>NT$${stdSum.toLocaleString("zh-Hant")}</th>
    <th class="hi">NT$${highSum.toLocaleString("zh-Hant")}</th>
  </tr>
  <tr>
    <th></th>
    <th>每人分攤</th>
    <th>NT$${Math.round(stdSum / 2).toLocaleString("zh-Hant")}</th>
    <th class="hi">NT$${Math.round(highSum / 2).toLocaleString("zh-Hant")}</th>
  </tr>`;

  const hotelStd = STAYS.reduce((a, s) => a + stayAmount(s, "std"), 0);
  const hotelHigh = STAYS.reduce((a, s) => a + stayAmount(s, "high"), 0);

  summary.innerHTML = `
    <article>
      <p class="tag">普通方案</p>
      <h3>NT$${stdSum.toLocaleString("zh-Hant")}</h3>
      <p>兩人 1 房　每人約 NT$${Math.round(stdSum / 2).toLocaleString("zh-Hant")}</p>
      <p>經濟艙＋STP 2 等＋冰河列車 2 等座位＋4 星</p>
    </article>
    <article class="high">
      <p class="tag">全部最高等</p>
      <h3>NT$${highSum.toLocaleString("zh-Hant")}</h3>
      <p>兩人 1 房　每人約 NT$${Math.round(highSum / 2).toLocaleString("zh-Hant")}</p>
      <p>皇家商務＋STP 1 等＋Excellence＋必住宮殿。比普通多 NT$${diff.toLocaleString("zh-Hant")}</p>
    </article>
    <article>
      <p class="tag">差額最大的兩塊</p>
      <h3>機票＋飯店</h3>
      <p>商務艙兩人多約 NT$${((163000 - 55000) * 2).toLocaleString("zh-Hant")}</p>
      <p>必住飯店 12 晚多約 NT$${(hotelHigh - hotelStd).toLocaleString("zh-Hant")}（一間房）</p>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHotels();
  renderBudget();
});
