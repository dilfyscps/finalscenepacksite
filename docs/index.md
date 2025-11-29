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
    details: All Scenepack links - now wrapped like presents.
    link: /dilfyscps

  - icon: 🎄
    title: CVMSCPS
    details: All Scenepack links - now covered in snow!
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

  <div class="poster-card">
  <div class="poster-new-badge">NEW</div>
    <img src="/posters/heatedrivalry.png" alt="Heated Rivalry" class="poster-card-img">
    <div class="poster-card-body">
      <span class="poster-tag">TV SHOW</span>
      <h3 class="poster-card-title">Heated Rivalry</h3>
      <p class="poster-desc">Quality: 1080p, FPS: 23.976</p>
      <a href="/tvshows#heated-rivalry" target="_blank" class="poster-card-btn">Go to page</a>
    </div>
  </div>

    <div class="poster-card">
  <div class="poster-new-badge">NEW</div>
    <img src="/posters/strangerthings5.png" alt="Stranger Things 5" class="poster-card-img">
    <div class="poster-card-body">
      <span class="poster-tag">TV SHOW</span>
      <h3 class="poster-card-title">Stranger Things 5</h3>
      <p class="poster-desc">Quality: 1080p, FPS: 23.976</p>
      <a href="/tvshows#stranger-things-5" target="_blank" class="poster-card-btn">Go to page</a>
    </div>
  </div>

  <div class="poster-card">
  <div class="poster-new-badge">NEW</div>
    <img src="/posters/i love la.png" alt="I Love LA" class="poster-card-img">
    <div class="poster-card-body">
      <span class="poster-tag">TV SHOW</span>
      <h3 class="poster-card-title">I Love LA</h3>
      <p class="poster-desc">Quality: 1080p, FPS: 23.976</p>
      <a href="/tvshows#i-love-la" target="_blank" class="poster-card-btn">Go to page</a>
    </div>
  </div>

</div>


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // ============================
  // CURSOR GLOW
  // ============================
  const glow = document.createElement("div");
  glow.id = "cursor-glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.top = e.clientY + "px";
    glow.style.left = e.clientX + "px";
  });

  // ============================
  // SNOW
  // ============================
  const snow = document.createElement("div");
  snow.id = "snow-overlay";
  document.body.appendChild(snow);

  const SNOW_COUNT = 7;

  for (let i = 0; i < SNOW_COUNT; i++) {
    const f = document.createElement("div");
    f.className = "snowflake";
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = 4 + Math.random() * 6 + "s";
    f.style.animationDelay = Math.random() * 5 + "s";
    snow.appendChild(f);
  }

  // ============================
  // LIGHTS
  // ============================
  const lights = document.createElement("div");
  lights.id = "christmas-lights";
  document.body.appendChild(lights);

  for (let i = 0; i < 12; i++) {
    const bulb = document.createElement("div");
    bulb.classList.add("xmas-bulb");
    lights.appendChild(bulb);
  }
});
</script>
