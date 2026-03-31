// ==================== CONFIG / HELPERS ====================
const flagImages = {
    es: 'images/flag_es.png',
    ca: 'images/flag_ca.png',
    fr: 'images/flag_fr.png',
    en: 'images/flag_en.png'
};

const langTexts = {
    es: 'ES',
    ca: 'CAT',
    fr: 'FR',
    en: 'EN'
};

function updateLanguageIndicator(lang) {
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');

    if (currentFlag && currentLangText) {
        currentFlag.src = flagImages[lang] || flagImages.es;
        currentLangText.textContent = langTexts[lang] || 'ES';
    }
}

function showNotification(message) {
    if (!message) return;

    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: var(--gold);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Inject notification animations once
(function injectNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
})();

// ==================== TRANSLATIONS ====================
const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_servicios: "Servicios",
        nav_nosotros: "Sobre Nosotros",
        nav_empresas: "Empresas Asociadas",
        nav_legal: "Departamento Legal",
        nav_contacto: "Contacto",

        hero_title: "FA GRUP - Inmobiliaria en Barcelona",
        hero_slogan: "Siempre Contigo",
        hero_subtitle: "Tu inmobiliaria de confianza en Barcelona. Acompañamiento profesional y cercano en compra, venta y alquiler",
        btn_contact: "Contáctanos",

        intro_title: "¿Qué es FA GRUP?",
        intro_text: "FA GRUP es una inmobiliaria de Barcelona fundada en 2019, especializada en ofrecer un servicio integral en el sector inmobiliario. Acompañamos al cliente durante todas las etapas de compra, venta o alquiler con profesionalidad y cercanía. Como miembros de AICAT y AEPJ, nos distinguimos por nuestra atención personalizada, conocimiento del mercado local y un firme compromiso con la transparencia legal.",

        services_title: "Nuestros Servicios",
        service_inmobiliaria: "Inmobiliaria",
        service_inmobiliaria_desc: "Venta de pisos con asesoramiento profesional. Acompañamos a nuestros clientes en cada paso de la compra de su vivienda.",
        service_seguros: "Seguros",
        service_seguros_desc: "Protección y tranquilidad para tu hogar, vida y negocio. Asesoramiento personalizado y gestión integral de pólizas.",
        service_viajes: "Agencia de Viajes",
        service_viajes_desc: "Experiencias únicas, planificadas para ti. Organizamos tu viaje completo con atención profesional.",
        btn_more_info: "Más información",

        about_title: "Sobre Nosotros",
        about_text: "Somos una asesoría empresarial especializada en ofrecer soluciones integrales en las áreas fiscal, contable, laboral y estratégica. Nuestro objetivo es acompañar a empresas, autónomos y emprendedores en la gestión eficiente de su actividad, aportando claridad y un enfoque orientado a resultados.",
        btn_read_more: "Leer más",

        companies_title: "Empresas Asociadas",
        company_fa_asesoria: "FA Asesoría Global",
        company_fa_desc: "Servicios de abogados, asesoría legal y jurídica. Especialistas en derecho penal, laboral, familiar, civil y administrativo.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Empresas, cultura, turismo y negocios. Soluciones integrales para el desarrollo empresarial y cultural.",
        btn_visit_web: "Visitar web",

        contact_hero_title: "Especialistas que entienden el arte de Ventas",
        contact_question: "¿Buscas tu hogar ideal en Barcelona? Contáctanos y te acompañaremos en todo el proceso.",
        contact_phone: "Teléfono",
        contact_email: "Email",
        contact_address: "Dirección",
        btn_send_query: "Envíanos tu consulta",

        contact_hero_subtitle: "Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad",
        contact_info_title: "Información de Contacto",
        contact_phone_title: "Teléfono",
        contact_phone_hours: "Lunes a Viernes: 9:00 - 18:00",
        contact_email_title: "Email",
        contact_email_legal: "(Consultas legales)",
        contact_whatsapp_send: "Enviar mensaje",
        contact_whatsapp_desc: "Respuesta rápida y directa",
        contact_address_title: "Dirección",
        contact_form_title: "Envíanos tu Consulta",
        contact_form_name: "Nombre completo",
        contact_form_phone: "Teléfono",
        contact_form_service: "Servicio de interés",
        contact_form_select: "Selecciona un servicio",
        contact_form_message: "Mensaje",
        contact_privacy_info: "Responsable: FA GRUP. Finalidad: atender su consulta. Base jurídica: consentimiento y medidas precontractuales. Derechos: acceso, rectificación, supresión y demás derechos RGPD en fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "He leído y acepto la ",
        contact_consent_and: " y el ",
        contact_consent_error: "Debes aceptar la Política de Privacidad y el Aviso Legal para enviar el formulario.",
        contact_form_submit: "Enviar consulta",
        contact_map_title: "Nuestra Ubicación",

        cookie_title: "Política de cookies",
        cookie_message: "Usamos cookies técnicas necesarias y, solo con tu consentimiento, cookies de análisis o personalización.",
        cookie_accept: "Aceptar",
        cookie_reject: "Rechazar",
        cookie_config: "Ver politica de privacidad",

        testimonials_title: "¿Qué opinan de nosotros?",
        testimonial_1: "\"Atencion excelente y trato muy cercano. Nos ayudaron en todo el proceso de compra.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Profesionales y transparentes. Recomiendo FA GRUP al 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Gestion rapida y asesoramiento claro. Todo fue sencillo.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "Ver mas reseñas",

        social_title: "Síguenos en Redes Sociales",

        footer_slogan: "Soluciones integrales para empresas y particulares",
        footer_services: "Servicios",
        footer_company: "Empresa",
        footer_contact: "Contacto",
        footer_legal: "Aviso Legal",
        footer_privacy: "Política de Privacidad",
        footer_rights: "Todos los derechos reservados",

        legal_hero_title: "Departamento Legal",
        legal_hero_subtitle: "FA Asesoría Global - Asesoramiento jurídico integral",
        legal_intro_title: "Servicios del Departamento Legal",
        legal_intro_p1: "En FA Asesoría ofrecemos asesoramiento y representación jurídica integral en múltiples áreas del derecho. Nuestro equipo de profesionales especializados garantiza un servicio personalizado, eficaz y orientado a la protección de tus intereses.",
        legal_intro_p2: "Trabajamos con metodologías actualizadas, cumpliendo todas las normativas vigentes y garantizando un acompañamiento seguro, profesional y transparente en cada procedimiento.",
        legal_section1_title: "Derecho Penal, Laboral y de Familia",
        legal_section1_subtitle: "Defensa especializada y acompañamiento en procedimientos legales complejos",

        privacy_title: "Política de Privacidad",
        privacy_subtitle: "FA GRUP - Protección de Datos Personales",
        privacy_last_update: "Última actualización: 4 de febrero de 2026",
        privacy_section1_title: "1. Responsable del Tratamiento",
        privacy_section2_title: "2. Datos que Recopilamos",
        privacy_section3_title: "3. Finalidad del Tratamiento",
        privacy_section4_title: "4. Base Jurídica del Tratamiento",
        privacy_section5_title: "5. Destinatarios de los Datos",
        privacy_section6_title: "6. Conservación de los Datos",
        privacy_section7_title: "7. Derechos del Usuario",
        privacy_section8_title: "8. Seguridad de los Datos",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificaciones",
        privacy_section11_title: "11. Reclamaciones",
        privacy_section12_title: "12. Contacto",

        aviso_page_title: "Aviso Legal - FA GRUP",
        aviso_title: "Aviso Legal",
        aviso_subtitle: "Información legal y condiciones de uso del sitio web de FA GRUP",
        aviso_last_update: "Última actualización: 16 de marzo de 2026",
        aviso_section1_title: "1. Datos identificativos del titular del sitio web",
        aviso_section1_p1: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular del presente sitio web es:",
        aviso_holder_label: "Titular:",
        aviso_address_label: "Domicilio:",
        aviso_section2_title: "2. Objeto",
        aviso_section2_p1: "El presente aviso legal regula el acceso, navegación y uso del sitio web de FA GRUP, así como las responsabilidades derivadas de la utilización de sus contenidos (textos, imágenes, diseños, código, documentación y cualquier otro material).",
        aviso_section3_title: "3. Condiciones de uso",
        aviso_section3_p1: "El acceso a este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las disposiciones incluidas en este aviso legal.",
        aviso_section3_li1: "El usuario se compromete a hacer un uso adecuado y lícito del sitio web y sus contenidos.",
        aviso_section3_li2: "Queda prohibido realizar actividades ilícitas, fraudulentas o contrarias a la buena fe y al orden público.",
        aviso_section3_li3: "FA GRUP se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como este aviso legal.",
        aviso_section4_title: "4. Propiedad intelectual e industrial",
        aviso_section4_p1: "Todos los contenidos del sitio web (incluyendo, sin carácter limitativo, textos, fotografías, gráficos, iconos, software, diseño gráfico y códigos fuente) son titularidad de FA GRUP o de terceros que han autorizado su uso.",
        aviso_section4_p2: "Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, sin autorización expresa y por escrito del titular correspondiente.",
        aviso_section5_title: "5. Responsabilidad",
        aviso_section5_p1: "FA GRUP no garantiza la disponibilidad continua ni la ausencia de errores en el acceso al sitio web, si bien adoptará las medidas razonables para evitarlos, corregirlos o actualizarlos cuando proceda.",
        aviso_section5_p2: "FA GRUP no se hace responsable de los daños o perjuicios derivados del uso del sitio web, ni de actuaciones realizadas sobre la base de la información contenida en él.",
        aviso_section6_title: "6. Enlaces externos",
        aviso_section6_p1: "Este sitio web puede contener enlaces a páginas de terceros. FA GRUP no asume responsabilidad sobre los contenidos, políticas o prácticas de dichos sitios externos.",
        aviso_section7_title: "7. Protección de datos personales",
        aviso_section7_p1: "El tratamiento de los datos personales se realiza conforme a lo establecido en la normativa vigente y en nuestra ",
        aviso_privacy_link: "Política de Privacidad",
        aviso_section8_title: "8. Política de cookies",
        aviso_section8_p1: "Este sitio web utiliza cookies para mejorar la experiencia de navegación. Puede consultar más información en el apartado de cookies de nuestra ",
        aviso_section9_title: "9. Legislación aplicable y jurisdicción",
        aviso_section9_p1: "Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con este sitio web, las partes se someten a los juzgados y tribunales de Barcelona, salvo que la normativa aplicable disponga otra cosa.",
        aviso_section10_title: "10. Contacto",
        aviso_section10_p1: "Para cualquier consulta relacionada con este aviso legal, puede contactar con FA GRUP en:",
        aviso_email_label: "Email:",
        aviso_phone_label: "Teléfono:",
        aviso_contact_address_label: "Dirección:"
    },

    ca: {
        nav_inicio: "Inici",
        nav_servicios: "Serveis",
        nav_nosotros: "Sobre Nosaltres",
        nav_empresas: "Empreses Associades",
        nav_legal: "Departament Legal",
        nav_contacto: "Contacte",

        hero_title: "FA GRUP - Immobiliària a Barcelona",
        hero_slogan: "Sempre amb Tu",
        hero_subtitle: "La teva immobiliària de confiança a Barcelona. Acompanyament professional i proper en compra, venda i lloguer",
        btn_contact: "Contacta'ns",

        intro_title: "Què és FA GRUP?",
        intro_text: "FA GRUP és una immobiliària de Barcelona fundada el 2019, especialitzada en oferir un servei integral al sector immobiliari. Acompanyem el client durant totes les etapes de compra, venda o lloguer amb professionalitat i proximitat. Com a membres d'AICAT i AEPJ, ens distingim per la nostra atenció personalitzada, coneixement del mercat local i un ferm compromís amb la transparència legal.",

        services_title: "Els Nostres Serveis",
        service_inmobiliaria: "Immobiliària",
        service_inmobiliaria_desc: "Venda de pisos amb assessorament professional. Acompanyem els nostres clients en cada pas de la compra del seu habitatge.",
        service_seguros: "Assegurances",
        service_seguros_desc: "Protecció i tranquil·litat per a la teva llar, vida i negoci. Assessorament personalitzat i gestió integral de pòlisses.",
        service_viajes: "Agència de Viatges",
        service_viajes_desc: "Experiències úniques, planificades per a tu. Organitzem el teu viatge complet amb atenció professional.",
        btn_more_info: "Més informació",

        about_title: "Sobre Nosaltres",
        about_text: "Som una assessoria empresarial especialitzada en oferir solucions integrals en les àrees fiscal, comptable, laboral i estratègica. El nostre objectiu és acompanyar empreses, autònoms i emprenedors en la gestió eficient de la seva activitat, aportant claredat i un enfocament orientat a resultats.",
        btn_read_more: "Llegir més",

        companies_title: "Empreses Associades",
        company_fa_asesoria: "FA Assessoria Global",
        company_fa_desc: "Serveis d'advocats, assessoria legal i jurídica. Especialistes en dret penal, laboral, familiar, civil i administratiu.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Empreses, cultura, turisme i negocis. Solucions integrals per al desenvolupament empresarial i cultural.",
        btn_visit_web: "Visitar web",

        contact_hero_title: "Especialistes que entenen l'art de Vendes",
        contact_question: "Busques la teva llar ideal a Barcelona? Contacta'ns i t'acompanyarem en tot el procés.",
        contact_phone: "Telèfon",
        contact_email: "Correu electrònic",
        contact_address: "Adreça",
        btn_send_query: "Envia'ns la teva consulta",

        contact_hero_subtitle: "Estem aquí per ajudar-te. Contacta'ns i et respondrem al més aviat possible",
        contact_info_title: "Informació de Contacte",
        contact_phone_title: "Telèfon",
        contact_phone_hours: "Dilluns a Divendres: 9:00 - 18:00",
        contact_email_title: "Correu electrònic",
        contact_email_legal: "(Consultes legals)",
        contact_whatsapp_send: "Enviar missatge",
        contact_whatsapp_desc: "Resposta ràpida i directa",
        contact_address_title: "Adreça",
        contact_form_title: "Envia'ns la teva Consulta",
        contact_form_name: "Nom complet",
        contact_form_phone: "Telèfon",
        contact_form_service: "Servei d'interès",
        contact_form_select: "Selecciona un servei",
        contact_form_message: "Missatge",
        contact_privacy_info: "Responsable: FA GRUP. Finalitat: atendre la teva consulta. Base jurídica: consentiment i mesures precontractuals. Drets: accés, rectificació, supressió i resta de drets RGPD a fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "He llegit i accepto la ",
        contact_consent_and: " i l' ",
        contact_consent_error: "Has d'acceptar la Política de Privacitat i l'Avís Legal per enviar el formulari.",
        contact_form_submit: "Enviar consulta",
        contact_map_title: "La nostra Ubicació",

        cookie_title: "Política de cookies",
        cookie_message: "Fem servir cookies tècniques necessàries i, només amb el teu consentiment, cookies d'anàlisi o personalització.",
        cookie_accept: "Acceptar",
        cookie_reject: "Rebutjar",
        cookie_config: "Veure politica de privacitat",

        testimonials_title: "Que opinen de nosaltres?",
        testimonial_1: "\"Atencio excel.lent i tracte molt proper. Ens van ajudar en tot el proces de compra.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Professionals i transparents. Recomano FA GRUP al 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Gestio rapida i assessorament clar. Tot va ser senzill.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "Veure mes ressenyes",

        social_title: "Segueix-nos a les Xarxes Socials",

        footer_slogan: "Solucions integrals per a empreses i particulars",
        footer_services: "Serveis",
        footer_company: "Empresa",
        footer_contact: "Contacte",
        footer_legal: "Avís Legal",
        footer_privacy: "Política de Privacitat",
        footer_rights: "Tots els drets reservats",

        legal_hero_title: "Departament Legal",
        legal_hero_subtitle: "FA Assessoria Global - Assessorament jurídic integral",
        legal_intro_title: "Serveis del Departament Legal",
        legal_intro_p1: "A FA Assessoria oferim assessorament i representació jurídica integral en múltiples àrees del dret. El nostre equip de professionals especialitzats garanteix un servei personalitzat, eficaç i orientat a la protecció dels teus interessos.",
        legal_intro_p2: "Treballem amb metodologies actualitzades, complint totes les normatives vigents i garantint un acompanyament segur, professional i transparent en cada procediment.",
        legal_section1_title: "Dret Penal, Laboral i de Família",
        legal_section1_subtitle: "Defensa especialitzada i acompanyament en procediments legals complexos",

        privacy_title: "Política de Privacitat",
        privacy_subtitle: "FA GRUP - Protecció de Dades Personals",
        privacy_last_update: "Última actualització: 4 de febrer de 2026",
        privacy_section1_title: "1. Responsable del Tractament",
        privacy_section2_title: "2. Dades que Recopilem",
        privacy_section3_title: "3. Finalitat del Tractament",
        privacy_section4_title: "4. Base Jurídica del Tractament",
        privacy_section5_title: "5. Destinataris de les Dades",
        privacy_section6_title: "6. Conservació de les Dades",
        privacy_section7_title: "7. Drets de l'Usuari",
        privacy_section8_title: "8. Seguretat de les Dades",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificacions",
        privacy_section11_title: "11. Reclamacions",
        privacy_section12_title: "12. Contacte",

        aviso_page_title: "Avís Legal - FA GRUP",
        aviso_title: "Avís Legal",
        aviso_subtitle: "Informació legal i condicions d'ús del lloc web de FA GRUP",
        aviso_last_update: "Darrera actualització: 16 de març de 2026",
        aviso_section1_title: "1. Dades identificatives del titular del lloc web",
        aviso_section1_p1: "En compliment de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa que el titular d'aquest lloc web és:",
        aviso_holder_label: "Titular:",
        aviso_address_label: "Domicili:",
        aviso_section2_title: "2. Objecte",
        aviso_section2_p1: "Aquest avís legal regula l'accés, la navegació i l'ús del lloc web de FA GRUP, així com les responsabilitats derivades de la utilització dels seus continguts (textos, imatges, dissenys, codi, documentació i qualsevol altre material).",
        aviso_section3_title: "3. Condicions d'ús",
        aviso_section3_p1: "L'accés a aquest lloc web atribueix la condició d'usuari i implica l'acceptació plena i sense reserves de les disposicions incloses en aquest avís legal.",
        aviso_section3_li1: "L'usuari es compromet a fer un ús adequat i lícit del lloc web i dels seus continguts.",
        aviso_section3_li2: "Queden prohibides les activitats il·lícites, fraudulentes o contràries a la bona fe i a l'ordre públic.",
        aviso_section3_li3: "FA GRUP es reserva el dret de modificar, en qualsevol moment i sense avís previ, la presentació i configuració del lloc web, així com aquest avís legal.",
        aviso_section4_title: "4. Propietat intel·lectual i industrial",
        aviso_section4_p1: "Tots els continguts del lloc web (incloent-hi, sense caràcter limitatiu, textos, fotografies, gràfics, icones, programari, disseny gràfic i codis font) són titularitat de FA GRUP o de tercers que n'han autoritzat l'ús.",
        aviso_section4_p2: "Queda prohibida la reproducció, distribució, comunicació pública, transformació o qualsevol altra forma d'explotació, total o parcial, sense autorització expressa i per escrit del titular corresponent.",
        aviso_section5_title: "5. Responsabilitat",
        aviso_section5_p1: "FA GRUP no garanteix la disponibilitat contínua ni l'absència d'errors en l'accés al lloc web, tot i que adoptarà les mesures raonables per evitar-los, corregir-los o actualitzar-los quan correspongui.",
        aviso_section5_p2: "FA GRUP no es fa responsable dels danys o perjudicis derivats de l'ús del lloc web, ni d'actuacions realitzades sobre la base de la informació que hi consta.",
        aviso_section6_title: "6. Enllaços externs",
        aviso_section6_p1: "Aquest lloc web pot contenir enllaços a pàgines de tercers. FA GRUP no assumeix responsabilitat sobre els continguts, polítiques o pràctiques d'aquests llocs externs.",
        aviso_section7_title: "7. Protecció de dades personals",
        aviso_section7_p1: "El tractament de les dades personals es realitza d'acord amb la normativa vigent i amb la nostra ",
        aviso_privacy_link: "Política de Privacitat",
        aviso_section8_title: "8. Política de cookies",
        aviso_section8_p1: "Aquest lloc web utilitza cookies per millorar l'experiència de navegació. Podeu consultar més informació a l'apartat de cookies de la nostra ",
        aviso_section9_title: "9. Legislació aplicable i jurisdicció",
        aviso_section9_p1: "Les presents condicions es regeixen per la legislació espanyola. Per resoldre qualsevol controvèrsia que pugui sorgir en relació amb aquest lloc web, les parts se sotmeten als jutjats i tribunals de Barcelona, excepte que la normativa aplicable disposi una altra cosa.",
        aviso_section10_title: "10. Contacte",
        aviso_section10_p1: "Per a qualsevol consulta relacionada amb aquest avís legal, podeu contactar amb FA GRUP a:",
        aviso_email_label: "Email:",
        aviso_phone_label: "Telèfon:",
        aviso_contact_address_label: "Adreça:"
    },

    fr: {
        nav_inicio: "Accueil",
        nav_servicios: "Services",
        nav_nosotros: "À Propos",
        nav_empresas: "Entreprises Associées",
        nav_legal: "Département Juridique",
        nav_contacto: "Contact",

        hero_title: "FA GRUP - Agence Immobilière à Barcelone",
        hero_slogan: "Toujours avec Vous",
        hero_subtitle: "Votre agence immobilière de confiance à Barcelone. Accompagnement professionnel et proche pour l'achat, la vente et la location",
        btn_contact: "Contactez-nous",

        intro_title: "Qu'est-ce que FA GRUP?",
        intro_text: "FA GRUP est une agence immobilière de Barcelone fondée en 2019, spécialisée dans l'offre d'un service intégral dans le secteur immobilier. Nous accompagnons le client pendant toutes les étapes d'achat, de vente ou de location avec professionnalisme et proximité. En tant que membres de l'AICAT et de l'AEPJ, nous nous distinguons par notre attention personnalisée, notre connaissance du marché local et un engagement ferme envers la transparence légale.",

        services_title: "Nos Services",
        service_inmobiliaria: "Immobilier",
        service_inmobiliaria_desc: "Vente d'appartements avec conseil professionnel. Nous accompagnons nos clients à chaque étape de l'achat de leur logement.",
        service_seguros: "Assurances",
        service_seguros_desc: "Protection et tranquillité pour votre maison, vie et entreprise. Conseil personnalisé et gestion intégrale des polices.",
        service_viajes: "Agence de Voyages",
        service_viajes_desc: "Expériences uniques, planifiées pour vous. Nous organisons votre voyage complet avec une attention professionnelle.",
        btn_more_info: "Plus d'informations",

        about_title: "À Propos de Nous",
        about_text: "Nous sommes un cabinet de conseil spécialisé dans l'offre de solutions intégrales dans les domaines fiscal, comptable, du travail et stratégique. Notre objectif est d'accompagner les entreprises, les indépendants et les entrepreneurs dans la gestion efficace de leur activité, en apportant clarté et une approche orientée résultats.",
        btn_read_more: "En savoir plus",

        companies_title: "Entreprises Associées",
        company_fa_asesoria: "FA Conseil Global",
        company_fa_desc: "Services d'avocats, conseil juridique. Spécialistes en droit pénal, du travail, de la famille, civil et administratif.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Entreprises, culture, tourisme et affaires. Solutions intégrales pour le développement entrepreneurial et culturel.",
        btn_visit_web: "Visiter le site",

        contact_hero_title: "Spécialistes qui comprennent l'art de la Vente",
        contact_question: "Vous cherchez votre logement idéal à Barcelone? Contactez-nous et nous vous accompagnerons tout au long du processus.",
        contact_phone: "Téléphone",
        contact_email: "Email",
        contact_address: "Adresse",
        btn_send_query: "Envoyez-nous votre demande",

        contact_hero_subtitle: "Nous sommes là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais",
        contact_info_title: "Informations de Contact",
        contact_phone_title: "Téléphone",
        contact_phone_hours: "Lundi à Vendredi : 9h00 - 18h00",
        contact_email_title: "Email",
        contact_email_legal: "(Consultations juridiques)",
        contact_whatsapp_send: "Envoyer un message",
        contact_whatsapp_desc: "Réponse rapide et directe",
        contact_address_title: "Adresse",
        contact_form_title: "Envoyez-nous votre Demande",
        contact_form_name: "Nom complet",
        contact_form_phone: "Téléphone",
        contact_form_service: "Service d'intérêt",
        contact_form_select: "Sélectionnez un service",
        contact_form_message: "Message",
        contact_privacy_info: "Responsable : FA GRUP. Finalité : répondre à votre demande. Base juridique : consentement et mesures précontractuelles. Droits : accès, rectification, suppression et autres droits RGPD à fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "J'ai lu et j'accepte la ",
        contact_consent_and: " et les ",
        contact_consent_error: "Vous devez accepter la Politique de Confidentialité et les Mentions Légales pour envoyer le formulaire.",
        contact_form_submit: "Envoyer la demande",
        contact_map_title: "Notre Emplacement",

        cookie_title: "Politique de cookies",
        cookie_message: "Nous utilisons des cookies techniques nécessaires et, uniquement avec votre consentement, des cookies d'analyse ou de personnalisation.",
        cookie_accept: "Accepter",
        cookie_reject: "Refuser",
        cookie_config: "Voir la politique de confidentialite",

        testimonials_title: "Que pensent-ils de nous?",
        testimonial_1: "\"Service excellent et tres proche. Ils nous ont aides a chaque etape.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Professionnels et transparents. Je recommande FA GRUP a 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Gestion rapide et conseils clairs. Tout a ete simple.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "Voir plus d'avis",

        social_title: "Suivez-nous sur les Réseaux Sociaux",

        footer_slogan: "Solutions intégrales pour entreprises et particuliers",
        footer_services: "Services",
        footer_company: "Entreprise",
        footer_contact: "Contact",
        footer_legal: "Mentions Légales",
        footer_privacy: "Politique de Confidentialité",
        footer_rights: "Tous droits réservés",

        legal_hero_title: "Département Juridique",
        legal_hero_subtitle: "FA Conseil Global - Conseil juridique intégral",
        legal_intro_title: "Services du Département Juridique",
        legal_intro_p1: "Chez FA Conseil, nous offrons un conseil et une représentation juridique intégrale dans plusieurs domaines du droit. Notre équipe de professionnels spécialisés garantit un service personnalisé, efficace et orienté vers la protection de vos intérêts.",
        legal_intro_p2: "Nous travaillons avec des méthodologies actualisées, en respectant toutes les réglementations en vigueur et en garantissant un accompagnement sûr, professionnel et transparent à chaque procédure.",
        legal_section1_title: "Droit Pénal, du Travail et de la Famille",
        legal_section1_subtitle: "Défense spécialisée et accompagnement dans les procédures juridiques complexes",

        privacy_title: "Politique de Confidentialité",
        privacy_subtitle: "FA GRUP - Protection des Données Personnelles",
        privacy_last_update: "Dernière mise à jour : 4 février 2026",
        privacy_section1_title: "1. Responsable du Traitement",
        privacy_section2_title: "2. Données que Nous Collectons",
        privacy_section3_title: "3. Finalité du Traitement",
        privacy_section4_title: "4. Base Juridique du Traitement",
        privacy_section5_title: "5. Destinataires des Données",
        privacy_section6_title: "6. Conservation des Données",
        privacy_section7_title: "7. Droits de l'Utilisateur",
        privacy_section8_title: "8. Sécurité des Données",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Réclamations",
        privacy_section12_title: "12. Contact",

        aviso_page_title: "Mentions Légales - FA GRUP",
        aviso_title: "Mentions Légales",
        aviso_subtitle: "Informations légales et conditions d'utilisation du site web de FA GRUP",
        aviso_last_update: "Dernière mise à jour : 16 mars 2026",
        aviso_section1_title: "1. Données d'identification du titulaire du site web",
        aviso_section1_p1: "Conformément à la Loi 34/2002 du 11 juillet relative aux Services de la Société de l'Information et au Commerce Électronique (LSSI-CE), il est indiqué que le titulaire du présent site web est :",
        aviso_holder_label: "Titulaire :",
        aviso_address_label: "Adresse :",
        aviso_section2_title: "2. Objet",
        aviso_section2_p1: "Les présentes mentions légales régissent l'accès, la navigation et l'utilisation du site web de FA GRUP, ainsi que les responsabilités découlant de l'utilisation de ses contenus (textes, images, designs, code, documentation et tout autre matériel).",
        aviso_section3_title: "3. Conditions d'utilisation",
        aviso_section3_p1: "L'accès à ce site web confère la qualité d'utilisateur et implique l'acceptation pleine et entière des dispositions incluses dans les présentes mentions légales.",
        aviso_section3_li1: "L'utilisateur s'engage à faire un usage approprié et licite du site web et de ses contenus.",
        aviso_section3_li2: "Il est interdit de réaliser des activités illicites, frauduleuses ou contraires à la bonne foi et à l'ordre public.",
        aviso_section3_li3: "FA GRUP se réserve le droit de modifier, à tout moment et sans préavis, la présentation et la configuration du site web, ainsi que les présentes mentions légales.",
        aviso_section4_title: "4. Propriété intellectuelle et industrielle",
        aviso_section4_p1: "Tous les contenus du site web (y compris, sans limitation, textes, photographies, graphiques, icônes, logiciels, design graphique et code source) sont la propriété de FA GRUP ou de tiers ayant autorisé leur utilisation.",
        aviso_section4_p2: "La reproduction, distribution, communication publique, transformation ou toute autre forme d'exploitation, totale ou partielle, est interdite sans autorisation expresse et écrite du titulaire correspondant.",
        aviso_section5_title: "5. Responsabilité",
        aviso_section5_p1: "FA GRUP ne garantit pas la disponibilité continue ni l'absence d'erreurs dans l'accès au site web, bien qu'elle adopte des mesures raisonnables pour les éviter, les corriger ou les mettre à jour lorsque cela est nécessaire.",
        aviso_section5_p2: "FA GRUP ne saurait être tenue responsable des dommages ou préjudices découlant de l'utilisation du site web, ni des actions réalisées sur la base des informations qui y figurent.",
        aviso_section6_title: "6. Liens externes",
        aviso_section6_p1: "Ce site web peut contenir des liens vers des pages de tiers. FA GRUP n'assume aucune responsabilité concernant les contenus, politiques ou pratiques de ces sites externes.",
        aviso_section7_title: "7. Protection des données personnelles",
        aviso_section7_p1: "Le traitement des données personnelles est effectué conformément à la réglementation en vigueur et à notre ",
        aviso_privacy_link: "Politique de Confidentialité",
        aviso_section8_title: "8. Politique de cookies",
        aviso_section8_p1: "Ce site web utilise des cookies pour améliorer l'expérience de navigation. Vous pouvez consulter plus d'informations dans la section cookies de notre ",
        aviso_section9_title: "9. Législation applicable et juridiction",
        aviso_section9_p1: "Les présentes conditions sont régies par la législation espagnole. Pour la résolution de tout litige pouvant survenir en relation avec ce site web, les parties se soumettent aux tribunaux de Barcelone, sauf disposition contraire de la réglementation applicable.",
        aviso_section10_title: "10. Contact",
        aviso_section10_p1: "Pour toute question relative aux présentes mentions légales, vous pouvez contacter FA GRUP à :",
        aviso_email_label: "Email :",
        aviso_phone_label: "Téléphone :",
        aviso_contact_address_label: "Adresse :"
    },

    en: {
        nav_inicio: "Home",
        nav_servicios: "Services",
        nav_nosotros: "About Us",
        nav_empresas: "Associated Companies",
        nav_legal: "Legal Department",
        nav_contacto: "Contact",

        hero_title: "FA GRUP - Real Estate in Barcelona",
        hero_slogan: "Always with You",
        hero_subtitle: "Your trusted real estate agency in Barcelona. Professional and close support in buying, selling and renting",
        btn_contact: "Contact Us",

        intro_title: "What is FA GRUP?",
        intro_text: "FA GRUP is a Barcelona real estate agency founded in 2019, specialized in offering a comprehensive service in the real estate sector. We accompany clients through all stages of buying, selling or renting with professionalism and proximity. As members of AICAT and AEPJ, we distinguish ourselves by our personalized attention, knowledge of the local market and a strong commitment to legal transparency.",

        services_title: "Our Services",
        service_inmobiliaria: "Real Estate",
        service_inmobiliaria_desc: "Sale of apartments with professional advice. We accompany our clients at every step of purchasing their home.",
        service_seguros: "Insurance",
        service_seguros_desc: "Protection and peace of mind for your home, life and business. Personalized advice and comprehensive policy management.",
        service_viajes: "Travel Agency",
        service_viajes_desc: "Unique experiences, planned for you. We organize your complete trip with professional attention.",
        btn_more_info: "More information",

        about_title: "About Us",
        about_text: "We are a business consultancy specialized in offering comprehensive solutions in the fiscal, accounting, labor and strategic areas. Our goal is to accompany companies, self-employed and entrepreneurs in the efficient management of their activity, providing clarity and a results-oriented approach.",
        btn_read_more: "Read more",

        companies_title: "Associated Companies",
        company_fa_asesoria: "FA Global Advisory",
        company_fa_desc: "Lawyers services, legal and juridical advisory. Specialists in criminal, labor, family, civil and administrative law.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Companies, culture, tourism and business. Comprehensive solutions for business and cultural development.",
        btn_visit_web: "Visit website",

        contact_hero_title: "Specialists who understand the art of Sales",
        contact_question: "Looking for your ideal home in Barcelona? Contact us and we will accompany you throughout the process.",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_address: "Address",
        btn_send_query: "Send us your inquiry",

        contact_hero_subtitle: "We are here to help you. Contact us and we will respond as soon as possible",
        contact_info_title: "Contact Information",
        contact_phone_title: "Phone",
        contact_phone_hours: "Monday to Friday: 9:00 AM - 6:00 PM",
        contact_email_title: "Email",
        contact_email_legal: "(Legal inquiries)",
        contact_whatsapp_send: "Send message",
        contact_whatsapp_desc: "Fast and direct response",
        contact_address_title: "Address",
        contact_form_title: "Send us your Inquiry",
        contact_form_name: "Full name",
        contact_form_phone: "Phone",
        contact_form_service: "Service of interest",
        contact_form_select: "Select a service",
        contact_form_message: "Message",
        contact_privacy_info: "Controller: FA GRUP. Purpose: to respond to your inquiry. Legal basis: consent and pre-contractual measures. Rights: access, rectification, erasure and other GDPR rights at fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "I have read and accept the ",
        contact_consent_and: " and the ",
        contact_consent_error: "You must accept the Privacy Policy and Legal Notice before submitting the form.",
        contact_form_submit: "Submit inquiry",
        contact_map_title: "Our Location",

        cookie_title: "Cookie Policy",
        cookie_message: "We use necessary technical cookies and, only with your consent, analytics or personalization cookies.",
        cookie_accept: "Accept",
        cookie_reject: "Reject",
        cookie_config: "View privacy policy",

        testimonials_title: "What do clients think about us?",
        testimonial_1: "\"Excellent service and very close attention. They helped us throughout the purchase.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Professional and transparent. I recommend FA GRUP 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Fast handling and clear guidance. Everything was easy.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "See more reviews",

        social_title: "Follow us on Social Networks",

        footer_slogan: "Comprehensive solutions for companies and individuals",
        footer_services: "Services",
        footer_company: "Company",
        footer_contact: "Contact",
        footer_legal: "Legal Notice",
        footer_privacy: "Privacy Policy",
        footer_rights: "All rights reserved",

        legal_hero_title: "Legal Department",
        legal_hero_subtitle: "FA Global Advisory - Comprehensive legal counsel",
        legal_intro_title: "Legal Department Services",
        legal_intro_p1: "At FA Advisory we offer comprehensive legal advice and representation in multiple areas of law. Our team of specialized professionals guarantees a personalized, effective service oriented to the protection of your interests.",
        legal_intro_p2: "We work with updated methodologies, complying with all current regulations and guaranteeing safe, professional and transparent support in every procedure.",
        legal_section1_title: "Criminal, Labor and Family Law",
        legal_section1_subtitle: "Specialized defense and support in complex legal procedures",

        privacy_title: "Privacy Policy",
        privacy_subtitle: "FA GRUP - Personal Data Protection",
        privacy_last_update: "Last update: February 4, 2026",
        privacy_section1_title: "1. Data Controller",
        privacy_section2_title: "2. Data We Collect",
        privacy_section3_title: "3. Purpose of Processing",
        privacy_section4_title: "4. Legal Basis for Processing",
        privacy_section5_title: "5. Data Recipients",
        privacy_section6_title: "6. Data Retention",
        privacy_section7_title: "7. User Rights",
        privacy_section8_title: "8. Data Security",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Complaints",
        privacy_section12_title: "12. Contact",

        aviso_page_title: "Legal Notice - FA GRUP",
        aviso_title: "Legal Notice",
        aviso_subtitle: "Legal information and terms of use of FA GRUP's website",
        aviso_last_update: "Last update: March 16, 2026",
        aviso_section1_title: "1. Identification details of the website owner",
        aviso_section1_p1: "In compliance with Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), it is stated that the owner of this website is:",
        aviso_holder_label: "Owner:",
        aviso_address_label: "Address:",
        aviso_section2_title: "2. Purpose",
        aviso_section2_p1: "This legal notice regulates access to, browsing of and use of FA GRUP's website, as well as responsibilities arising from the use of its contents (texts, images, designs, code, documentation and any other material).",
        aviso_section3_title: "3. Terms of use",
        aviso_section3_p1: "Access to this website grants user status and implies full and unreserved acceptance of the provisions included in this legal notice.",
        aviso_section3_li1: "The user undertakes to make appropriate and lawful use of the website and its contents.",
        aviso_section3_li2: "Unlawful, fraudulent activities or those contrary to good faith and public order are prohibited.",
        aviso_section3_li3: "FA GRUP reserves the right to modify, at any time and without prior notice, the presentation and configuration of the website, as well as this legal notice.",
        aviso_section4_title: "4. Intellectual and industrial property",
        aviso_section4_p1: "All website contents (including, but not limited to, texts, photographs, graphics, icons, software, graphic design and source code) are owned by FA GRUP or by third parties who have authorized their use.",
        aviso_section4_p2: "Reproduction, distribution, public communication, transformation or any other form of exploitation, in whole or in part, is prohibited without express written authorization from the corresponding owner.",
        aviso_section5_title: "5. Liability",
        aviso_section5_p1: "FA GRUP does not guarantee continuous availability or the absence of errors in website access, although it will adopt reasonable measures to avoid, correct or update them when appropriate.",
        aviso_section5_p2: "FA GRUP is not responsible for damages arising from the use of the website, or from actions taken based on the information contained therein.",
        aviso_section6_title: "6. External links",
        aviso_section6_p1: "This website may contain links to third-party pages. FA GRUP assumes no responsibility for the contents, policies or practices of such external sites.",
        aviso_section7_title: "7. Personal data protection",
        aviso_section7_p1: "Personal data processing is carried out in accordance with applicable regulations and our ",
        aviso_privacy_link: "Privacy Policy",
        aviso_section8_title: "8. Cookie policy",
        aviso_section8_p1: "This website uses cookies to improve the browsing experience. You can find more information in the cookies section of our ",
        aviso_section9_title: "9. Applicable law and jurisdiction",
        aviso_section9_p1: "These terms are governed by Spanish law. For the resolution of any dispute that may arise in relation to this website, the parties submit to the courts of Barcelona, unless applicable regulations provide otherwise.",
        aviso_section10_title: "10. Contact",
        aviso_section10_p1: "For any query related to this legal notice, you can contact FA GRUP at:",
        aviso_email_label: "Email:",
        aviso_phone_label: "Phone:",
        aviso_contact_address_label: "Address:"
    }
};

// ==================== LANGUAGE ====================
function changeLanguage(lang) {
    const t = translations[lang] || translations.es;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguageIndicator(lang);

    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (!t[key]) return;

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t[key];
        } else {
            element.textContent = t[key];
        }
    });

    const messages = {
        es: '🇪🇸 Idioma cambiado a Español',
        ca: '🇨🇦 Idioma canviat a Català',
        fr: '🇫🇷 Langue changée en Français',
        en: '🇬🇧 Language changed to English'
    };

    showNotification(messages[lang] || messages.es);
}

function setLang(lang) {
    changeLanguage(lang);

    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.classList.remove('show');
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.classList.toggle('show');
    }
}

// ==================== COOKIE CONSENT ====================
function initCookieConsent() {
    const modal = document.getElementById('cookie-consent-modal');
    if (!modal) return;

    const acceptButton = document.getElementById('cookie-accept');
    const rejectButton = document.getElementById('cookie-reject');
    const configButton = document.getElementById('cookie-config');
    const savedConsent = localStorage.getItem('cookieConsent');

    const hideModal = () => {
        modal.classList.remove('is-visible');
        document.body.classList.remove('cookie-modal-open');
    };

    if (!savedConsent) {
        modal.classList.add('is-visible');
        document.body.classList.add('cookie-modal-open');
        if (acceptButton) acceptButton.focus();
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            hideModal();
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            hideModal();
        });
    }

    if (configButton) {
        configButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'configured');
            hideModal();
        });
    }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== NAVBAR ====================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    updateNavbar();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a[href]');

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ==================== HERO CAROUSEL ====================
let currentSlide = 0;
let slides = [];
let indicators = [];
let heroContent = null;
let heroInterval = null;

function updateHeroContentVisibility(index) {
    if (!heroContent) return;

    // Show content only on first slide to match your current JS logic
    if (index === 0) {
        heroContent.style.opacity = '1';
        heroContent.style.visibility = 'visible';
    } else {
        heroContent.style.opacity = '0';
        heroContent.style.visibility = 'hidden';
    }
}

function goToSlide(slideIndex) {
    if (!slides.length || !indicators.length) return;

    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    if (slides[slideIndex]) slides[slideIndex].classList.add('active');
    if (indicators[slideIndex]) indicators[slideIndex].classList.add('active');

    currentSlide = slideIndex;
    updateHeroContentVisibility(slideIndex);
}

function nextSlide() {
    if (!slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

function initHeroCarousel() {
    slides = Array.from(document.querySelectorAll('.carousel-slide'));
    indicators = Array.from(document.querySelectorAll('.indicator'));
    heroContent = document.querySelector('.hero-content');

    if (!slides.length || !indicators.length) return;

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            if (heroInterval) {
                clearInterval(heroInterval);
                heroInterval = setInterval(nextSlide, 5000);
            }
        });
    });

    goToSlide(0);
    heroInterval = setInterval(nextSlide, 5000);
}

// expose for inline onclick in HTML
window.goToSlide = goToSlide;

// ==================== TESTIMONIALS ====================
function initTestimonialsCarousel() {
    const testimonialSlides = document.querySelectorAll('.testimonials-slide');
    const testimonialIndicators = document.querySelectorAll('.testimonials-indicator');

    if (!testimonialSlides.length || !testimonialIndicators.length) return;

    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonialSlides.forEach((slide) => slide.classList.remove('active'));
        testimonialIndicators.forEach((indicator) => indicator.classList.remove('active'));

        testimonialSlides[index].classList.add('active');
        testimonialIndicators[index].classList.add('active');
    };

    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    };

    let testimonialInterval = setInterval(nextTestimonial, 6000);

    testimonialIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(nextTestimonial, 6000);
        });
    });
}

// ==================== EMPRESAS CAROUSEL ====================
function initCompaniesCarousel() {
    const gridWrapper = document.querySelector('.companies-grid-wrapper');
    const cards = document.querySelectorAll('.company-card');
    const leftBtn = document.querySelector('.companies-arrow.left');
    const rightBtn = document.querySelector('.companies-arrow.right');

    if (!gridWrapper || !leftBtn || !rightBtn || !cards.length) return;

    let currentIndex = 0;

    function scrollToCard(index) {
        if (!cards[index]) return;

        const wrapperWidth = gridWrapper.offsetWidth;
        const cardWidth = cards[index].offsetWidth;
        const cardOffset = cards[index].offsetLeft;
        const scrollLeft = cardOffset - (wrapperWidth - cardWidth) / 2;

        gridWrapper.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });

        currentIndex = index;
        updateArrows();
    }

    function updateArrows() {
        leftBtn.disabled = currentIndex === 0;
        rightBtn.disabled = currentIndex === cards.length - 1;
    }

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) scrollToCard(currentIndex - 1);
    });

    rightBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
    });

    window.addEventListener('resize', () => scrollToCard(currentIndex));
    scrollToCard(0);
}

// ==================== FACEBOOK VIDEO AUTOPLAY ====================
function initFacebookVideoAutoplay() {
    const fbVideoSection = document.querySelector('.about-video-absolute-fullwidth');
    const fbIframe = fbVideoSection ? fbVideoSection.querySelector('iframe') : null;
    if (!fbVideoSection || !fbIframe) return;

    let hasPlayed = false;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasPlayed) {
                let src = fbIframe.getAttribute('src') || '';
                if (!src.includes('autoplay=1')) {
                    src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
                    fbIframe.setAttribute('src', src);
                }
                hasPlayed = true;
                obs.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(fbVideoSection);
}

// ==================== SMOOTH ANCHORS ====================
function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ==================== FORM VALIDATION ====================
function initContactFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const mensaje = document.getElementById('mensaje')?.value.trim() || '';
        const privacyConsent = document.getElementById('privacy-consent');
        const selectedLang = localStorage.getItem('selectedLanguage') || 'es';
        const t = translations[selectedLang] || translations.es;

        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }

        if (!privacyConsent || !privacyConsent.checked) {
            alert(t.contact_consent_error || 'Debes aceptar la Política de Privacidad y el Aviso Legal para enviar el formulario.');
            return;
        }

        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollReveal() {
    const animateElements = document.querySelectorAll('.service-card, .company-card, .feature-card, .legal-card, .scroll-reveal');
    if (!animateElements.length) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ==================== GLOBAL EVENTS ====================
document.addEventListener('click', (event) => {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && !languageSelector.contains(event.target)) {
        languageSelector.classList.remove('show');
    }
});

// expose for inline HTML handlers
window.toggleDropdown = toggleDropdown;
window.setLang = setLang;

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    initMobileMenu();
    initNavbarScroll();
    initHeroCarousel();
    initTestimonialsCarousel();
    initCompaniesCarousel();
    initFacebookVideoAutoplay();
    initSmoothAnchors();
    initContactFormValidation();
    initScrollReveal();
    setActiveNavLink();

    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    updateLanguageIndicator(savedLang);

    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }
});