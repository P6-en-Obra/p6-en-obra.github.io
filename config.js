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
    // Opción B: Formulario oficial de Hotmart Send (ID 4pukwOv, etiqueta ruta-cero-es,
    // confirmación simple con redirección a https://payhip.com/b/OI2bp).
    hotmartSendEmbedHtml: `
<form class="p6-send-form" klicksend-form-id="4pukwOv" autocomplete="on" method="post" action="https://handler.send.hotmart.com/subscription/4pukwOv?hotfeature=53">
  <div class="p6-send-form__fields">
    <label class="p6-send-form__label" for="p6-send-name">Nombre (opcional)</label>
    <input class="p6-send-form__input" type="text" autocomplete="given-name" name="first_name" id="p6-send-name" placeholder="Tu nombre">
    <label class="p6-send-form__label" for="p6-send-email">Correo electrónico *</label>
    <input class="p6-send-form__input" type="email" autocomplete="email" name="email" id="p6-send-email" placeholder="tu@correo.com" required>
  </div>
  <div class="p6-send-form__gdpr-text" klicksend-gdpr-text>
    Utilizaremos estos datos para enviarte Ruta Cero y contenidos técnicos de Primavera P6 en Obra. Puedes darte de baja en un clic al final de cada correo. <a href="https://hotmart.com/pt-br/legal/privacidade-de-dados/" target="_blank" rel="noopener">Política de privacidad Hotmart</a>.
  </div>
  <label class="p6-send-form__check" for="p6-send-gdpr">
    <input type="checkbox" name="gdpr" id="p6-send-gdpr" value="Acepto recibir los emails" required>
    <span>Acepto recibir los emails con la guía y novedades técnicas.</span>
  </label>
  <div style="position:absolute;left:-5000px;" aria-hidden="true">
    <input type="text" autocomplete="new-password" name="b_4pukwOv" tabindex="-1" value="">
  </div>
  <button class="p6-btn p6-btn--amarillo p6-send-form__submit" type="submit" klicksend-form-submit-id="4pukwOv">DESCARGAR RUTA CERO GRATIS</button>
  <p class="hotmart-send-box__note">PDF digital gratuito de 21 páginas. Al enviar pasarás directo a la descarga de Ruta Cero. Basado en Primavera P6 Professional v22. No incluye licencia de P6 ni clases en vivo. Material independiente sin afiliación con Oracle.</p>
</form>
`
  },

  // 3. GUÍAS TÉCNICAS (enlaces a tus artículos, PDFs o productos Hotmart)
  guias: {
    guia01Url: "https://payhip.com/P6enObra/blog/news/como-crear-una-curva-s-de-horas-hombre-en-primavera-p6-y-excel-guia-paso-a-paso",
    guia02Url: "https://payhip.com/P6enObra/blog/news/como-actualizar-un-cronograma-en-primavera-p6-guia-paso-a-paso",
    guia03Url: "https://payhip.com/P6enObra/blog/news/como-controlar-las-horas-hombre-con-primavera-p6-y-excel",
    guia04Url: "https://payhip.com/P6enObra/blog/news/como-reprogramar-un-cronograma-atrasado-en-primavera-p6"
  },

  // 4. CONTACTO Y PIE DE PÁGINA
  contacto: {
    email: "contacto.p6enobra@gmail.com",
    instagramUrl: "https://www.instagram.com/primaverap6enobra/",
    instagramHandle: "@primaverap6enobra"
  }
};
