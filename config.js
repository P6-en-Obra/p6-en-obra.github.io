/**
 * =========================================================================
 * CONFIGURACIÓN PERSONALIZABLE DE HOTMART — PRIMAVERA P6 EN OBRA (ES)
 * =========================================================================
 * Edita únicamente los valores de este archivo para cambiar enlaces de
 * checkout de Hotmart, precios, cupos disponibles, enlaces de las Guías
 * Técnicas o el código embebido de Hotmart Send para Ruta Cero.
 * No necesitas tocar index.html ni styles.css.
 */
window.P6_HOTMART_CONFIG = {
  // 1. LIBRO COMPLETO + KIT EXCEL v5 (Checkout Hotmart)
  libro: {
    urlCheckout: "https://pay.hotmart.com/R108267470I",
    precioActual: "$29.900 CLP",
    precioAntes: "$39.900 CLP",
    cuposTexto: "Primeras 20 compras · Quedan 19 de 20 cupos",
    textoBoton: "COMPRAR LIBRO + KIT EN HOTMART"
  },

  // 2. RUTA CERO GRATIS (PDF 21 páginas)
  rutaCero: {
    // Opción A: URL directa a tu página/checkout gratis de Ruta Cero en Hotmart
    urlDescarga: "https://payhip.com/b/OI2bp",
    textoBoton: "DESCARGAR RUTA CERO GRATIS",
    // Opción B: Si usas el formulario embebido de Hotmart Send, pega aquí el
    // código HTML (<form> o <script>...</script>) entre comillas invertidas.
    // Si lo dejas vacío (""), se muestra el botón directo con urlDescarga.
    hotmartSendEmbedHtml: ""
  },

  // 3. GUÍAS TÉCNICAS (enlaces a tus artículos, PDFs o productos Hotmart)
  guias: {
    guia01Url: "https://payhip.com/P6enObra/blog/news",
    guia02Url: "https://payhip.com/P6enObra/blog/news",
    guia03Url: "https://payhip.com/P6enObra/blog/news",
    guia04Url: "https://payhip.com/P6enObra/blog/news"
  },

  // 4. CONTACTO Y PIE DE PÁGINA
  contacto: {
    email: "contacto.p6enobra@gmail.com",
    instagramUrl: "https://www.instagram.com/primaverap6enobra/",
    instagramHandle: "@primaverap6enobra"
  }
};
