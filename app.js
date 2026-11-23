/* =========================================================================
   P6 en Obra — Lógica de página (config Hotmart + Signature Move + Hero Depth)
   El motor ScrollCraft (engine/scrollcraft.js) permanece intacto.
   ========================================================================= */
(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Aplicar configuración personalizable de Hotmart (config.js) */
  function applyHotmartConfig() {
    const cfg = window.P6_HOTMART_CONFIG;
    if (!cfg) return;

    const links = {
      "libro-checkout": cfg.libro && cfg.libro.urlCheckout,
      "ruta-cero-descarga": cfg.rutaCero && cfg.rutaCero.urlDescarga,
      "guia-01": cfg.guias && cfg.guias.guia01Url,
      "guia-02": cfg.guias && cfg.guias.guia02Url,
      "guia-03": cfg.guias && cfg.guias.guia03Url,
      "guia-04": cfg.guias && cfg.guias.guia04Url,
      "instagram": cfg.contacto && cfg.contacto.instagramUrl,
      "email": cfg.contacto && cfg.contacto.email ? "mailto:" + cfg.contacto.email : ""
    };

    document.querySelectorAll("[data-p6-link]").forEach(function (el) {
      const key = el.getAttribute("data-p6-link");
      if (links[key]) {
        el.setAttribute("href", links[key]);
      }
    });

    const texts = {
      "libro-precio-actual": cfg.libro && cfg.libro.precioActual,
      "libro-precio-antes": cfg.libro && cfg.libro.precioAntes,
      "libro-cupos": cfg.libro && cfg.libro.cuposTexto,
      "libro-cta": cfg.libro && cfg.libro.textoBoton,
      "ruta-cero-cta": cfg.rutaCero && cfg.rutaCero.textoBoton,
      "contacto-email": cfg.contacto && cfg.contacto.email,
      "contacto-ig": cfg.contacto && cfg.contacto.instagramHandle
    };

    document.querySelectorAll("[data-p6-text]").forEach(function (el) {
      const key = el.getAttribute("data-p6-text");
      if (texts[key]) {
        el.textContent = texts[key];
      }
    });

    const embedSlot = document.getElementById("hotmart-send-slot");
    if (embedSlot && cfg.rutaCero && cfg.rutaCero.hotmartSendEmbedHtml && cfg.rutaCero.hotmartSendEmbedHtml.trim() !== "") {
      embedSlot.innerHTML = cfg.rutaCero.hotmartSendEmbedHtml;
      const sendForm = embedSlot.querySelector("form[klicksend-form-id]");
      if (sendForm && window.location.search) {
        try {
          const pageParams = new URLSearchParams(window.location.search);
          const formUrl = new URL(sendForm.action);
          pageParams.forEach(function (val, key) {
            if (!formUrl.searchParams.has(key)) formUrl.searchParams.set(key, val);
          });
          sendForm.action = formUrl.toString();
        } catch (_) {}
      }
    }
  }

  /* 2. Signature Move: Auditoría de Corte en Vivo (Retained Logic vs Progress Override) */
  function initAuditSignatureMove() {
    const act = document.getElementById("metodo");
    const sheet = document.getElementById("audit-sheet");
    const btnOverride = document.getElementById("btn-override");
    const btnRetained = document.getElementById("btn-retained");
    const metricVal = document.getElementById("audit-finish-day");
    const metricSub = document.getElementById("audit-finish-note");
    const barLabel = document.getElementById("bar-pruebas-label");

    if (!act || !sheet || !btnOverride || !btnRetained) return;

    let manualLock = false;
    let currentMode = "override";

    function setMode(mode) {
      if (currentMode === mode) return;
      currentMode = mode;
      const isReal = mode === "retained";
      sheet.classList.toggle("is-real", isReal);
      btnOverride.setAttribute("aria-pressed", String(!isReal));
      btnRetained.setAttribute("aria-pressed", String(isReal));

      if (isReal) {
        metricVal.textContent = "Día 24 (+10 días reales)";
        metricSub.textContent = "Retained Logic respeta la secuencia Fin-Inicio pendiente tras la Data Date.";
        barLabel.textContent = "Pruebas (10 d reales)";
      } else {
        metricVal.textContent = "Día 14 (entrega aparente)";
        metricSub.textContent = "Progress Override ignora el vínculo pendiente y solapa la actividad sin frentes.";
        barLabel.textContent = "Pruebas (solape falso)";
      }
    }

    btnOverride.addEventListener("click", function () {
      manualLock = true;
      setMode("override");
    });

    btnRetained.addEventListener("click", function () {
      manualLock = true;
      setMode("retained");
    });

    if (reducedMotion) {
      setMode("retained");
      return;
    }

    let lastP = -1;
    function syncFromScroll() {
      if (!manualLock) {
        const raw = parseFloat(getComputedStyle(act).getPropertyValue("--sc-p")) || 0;
        if (Math.abs(raw - lastP) > 0.01) {
          lastP = raw;
          setMode(raw >= 0.42 ? "retained" : "override");
        }
      }
      requestAnimationFrame(syncFromScroll);
    }
    requestAnimationFrame(syncFromScroll);
  }

  /* 3. Profundidad dimensional por planos en el Hero (desktop) */
  function initHeroDepth() {
    if (reducedMotion) return;
    const hero = document.getElementById("inicio");
    const bgPlane = hero && hero.querySelector(".hero-plane-bg");
    const gridPlane = hero && hero.querySelector(".hero-plane-grid");
    const objPlane = hero && hero.querySelector(".hero-objects");
    if (!hero || !bgPlane || !gridPlane || !objPlane) return;

    let ticking = false;
    function updateHero() {
      ticking = false;
      if (window.innerWidth <= 860) {
        bgPlane.style.transform = "";
        gridPlane.style.transform = "";
        objPlane.style.transform = "";
        return;
      }
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0) return;
      const scrolled = Math.max(0, -rect.top);
      const clamped = Math.min(scrolled, rect.height);
      bgPlane.style.transform = "translate3d(0," + (clamped * 0.26).toFixed(1) + "px,0) scale(" + (1 + clamped * 0.00012).toFixed(4) + ")";
      gridPlane.style.transform = "translate3d(0," + (clamped * 0.14).toFixed(1) + "px,0)";
      objPlane.style.transform = "translate3d(0," + (-clamped * 0.11).toFixed(1) + "px,0)";
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHero);
      }
    }, { passive: true });
    window.addEventListener("resize", updateHero, { passive: true });
  }

  /* 4. Pestaña activa en barra de expediente */
  function initNavHighlight() {
    const links = Array.from(document.querySelectorAll(".dossier-tabs a"));
    const targets = links
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || targets.length === 0) return;

    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        links.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === id);
        });
      });
    }, { rootMargin: "-35% 0px -50% 0px" });

    targets.forEach(function (t) { obs.observe(t); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyHotmartConfig();
    if (window.ScrollCraft && typeof window.ScrollCraft.mount === "function") {
      window.ScrollCraft.mount(document.body);
    }
    initAuditSignatureMove();
    initHeroDepth();
    initNavHighlight();
  });
})();
