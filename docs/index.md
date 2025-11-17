---
layout: home
hero:
  name: DILFYSCPS CVMSCPS
  text: ❄️ Official Scenepack Directory ❄️
  tagline: Your favorite website for high-quality Male Scenepacks
  image:
  actions:
    - theme: brand
      text: 🎁 Affiliates
      link: /affiliates/
      
features:
  - icon: 🎅
    title: DILFYSCPS
    details: All Scenepack links — now wrapped like presents.
    link: /dilfyscps

  - icon: 🎄
    title: CVMSCPS
    details: Still cooking… Santa is working on it!
    link: /cvmscps
---
<div id="christmas-lights"></div>
<div id="snow-overlay"></div>
<div class="xmas-divider"></div>

<!-- ============================= -->
<!--    COMMONNINJA COMPONENT     -->
<!-- ============================= -->

<div class="commonninja_component pid-12568156-ec21-4816-aa2e-a9d076e969db"></div>


<h1 style="text-align: center; margin-top: 1rem;"> RECENT SCENEPACKS </h1>


<div class="poster-grid">

  <!-- Boots -->
  <div class="poster-card">
  <div class="poster-new-badge">NEW</div>
    <img src="/posters/boots.png" alt="Boots" class="poster-card-img">
    <div class="poster-card-body">
      <span class="poster-tag">TV SHOW</span>
      <h3 class="poster-card-title">Boots</h3>
      <p class="poster-desc">Quality: 1080p, FPS: 23.976</p>
      <a href="https://mega.nz/folder/pGozlaQa#7Ffjmmhi6_quSZEy05OvyQ" target="_blank" class="poster-card-btn">Open Mega</a>
    </div>
  </div>

  <!-- Olympo -->
  <div class="poster-card">
  <div class="poster-new-badge">NEW</div>
    <img src="/posters/Olympo.png" alt="Olympo" class="poster-card-img">
    <div class="poster-card-body">
      <span class="poster-tag">TV SHOW</span>
      <h3 class="poster-card-title">Olympo</h3>
      <p class="poster-desc">Quality: 1080p, FPS: 23.976</p>
      <a href="https://mega.nz/folder/oOIXSb5K#dNly5zIUQsdxZ20OEQt3Sg" target="_blank" class="poster-card-btn">Open Mega</a>
    </div>
  </div>

</div>


<script>
// Cursor Glow
const glow = document.createElement("div");
glow.id = "cursor-glow";
document.body.appendChild(glow);
document.addEventListener("mousemove", e => {
  glow.style.top = e.clientY + "px";
  glow.style.left = e.clientX + "px";
});

// Snow — FEWER FLAKES
const snow = document.createElement("div");
snow.id = "snow-overlay";
document.body.appendChild(snow);

const SNOW_COUNT = 7; // ← change this number to control how many fall

for (let i = 0; i < SNOW_COUNT; i++) {
  const f = document.createElement("div");
  f.className = "snowflake";

  // random horizontal placement
  f.style.left = Math.random() * 100 + "vw";

  // random fall speed
  f.style.animationDuration = (4 + Math.random() * 6) + "s";

  // random stagger delay
  f.style.animationDelay = (Math.random() * 5) + "s";

  snow.appendChild(f);
}

// Lights
const lights = document.createElement("div");
lights.id = "christmas-lights";
document.body.appendChild(lights);
for (let i = 0; i < 12; i++) {
  const bulb = document.createElement("div");
  bulb.classList.add("xmas-bulb");
  lights.appendChild(bulb);
}
</script>
