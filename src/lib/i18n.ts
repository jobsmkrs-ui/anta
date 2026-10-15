"use client";

export type Lang = "en" | "ar";

export type Localized = { en: string; ar: string };

export interface ProductContent {
  id: string;
  slug: string;
  name: Localized;
  tagline: Localized;
  description: Localized;
  features: Localized[];
  icon: string;
  accent: string; // tailwind gradient classes
  signature: Localized; // "signature use case" shown on the flip side
}

export const BRAND = {
  companyName: { en: "MK Technologies", ar: "إم كيه تكنولوجيز" },
  fullCompanyName: {
    en: "Machine Knowledge Resilience Solutions",
    ar: "حلول المرونة المعرفية للآلات",
  },
  fullForm: {
    en: "Adaptive Network for Technology and Automation",
    ar: "الشبكة التكيّفية للتقنية والأتمتة",
  },
  productBrand: { en: "AntA", ar: "أنتا" },
  taglines: [
    { en: "Own your code. Own your data.", ar: "امتلك كودك. امتلك بياناتك." },
    {
      en: "Offline security. Online intelligence.",
      ar: "أمان بلا إنترنت، وذكاء عندما تريد.",
    },
    { en: "Smart systems that stay yours.", ar: "أنظمة ذكية تبقى ملكك." },
  ],
  banner: {
    en: "ALL IS ABOUT YOU, ALL IS AROUND YOU",
    ar: "كل شيء من أجلك، وكل شيء حولك",
    brand: { en: "AntA", ar: "أنتا" },
  },
  mission: {
    en: "To give businesses and individuals software they fully own: their code, their data and their operations, protected by offline security and empowered by online intelligence.",
    ar: "نمنح الشركات والأفراد برمجيات يملكونها بالكامل: الكود والبيانات والتشغيل، بحماية تعمل دون اتصال وذكاء متاح عند الحاجة عبر الإنترنت.",
  },
  vision: {
    en: "A region where every clinic, shop, fleet, HR team, home and rental business runs on resilient systems that never depend on someone else's servers to keep working.",
    ar: "أن تعمل كل عيادة ومتجر وأسطول وإدارة موارد بشرية ومنزل وأعمال إيجار على أنظمة مرنة لا تتوقف بتوقف الاتصال أو خوادم الغير.",
  },
  email: "anta.mkrs@gmail.com",
  phone: "+20 127 4444 001",
  whatsapp: "+20 127 4444 001",
};

export const NAV: { id: string; label: Localized }[] = [
  { id: "home", label: { en: "Home", ar: "الرئيسية" } },
  { id: "about", label: { en: "About", ar: "من نحن" } },
  { id: "solutions", label: { en: "Solutions", ar: "الحلول" } },
  { id: "spotlight", label: { en: "AntA Care", ar: "أنتا كير" } },
  { id: "gallery", label: { en: "Gallery", ar: "المعرض" } },
  { id: "why", label: { en: "Why AntA", ar: "لماذا أنتا" } },
  { id: "roadmap", label: { en: "Coming Soon", ar: "قريبًا" } },
  { id: "contact", label: { en: "Contact", ar: "تواصل" } },
];

export const HERO = {
  headline: { en: "Own your code. Own your data.", ar: "امتلك كودك. امتلك بياناتك." },
  headlineAccent: { en: "Own your data.", ar: "امتلك بياناتك." },
  sub: {
    en: "AntA by MK Technologies — smart management systems that run offline, stay secure, and get smarter online.",
    ar: "أنتا من إم كيه تكنولوجيز — أنظمة إدارة ذكية تعمل دون إنترنت، وتحمي بياناتك، وتزداد ذكاءً عند الاتصال.",
  },
  ctaPrimary: { en: "Explore Solutions", ar: "استكشف الحلول" },
  ctaSecondary: { en: "Request a Demo", ar: "اطلب عرضًا تجريبيًا" },
  ctaSpecs: { en: "Request Specs", ar: "اطلب المواصفات" },
  intro: {
    en: "Most software rents you your own business. AntA does the opposite — systems hosted on your resources, data stored locally, operations continuing when the internet doesn't. When you want intelligence, analytics and remote access, switch online. You decide.",
    ar: "معظم البرمجيات تؤجّر لك عملك نفسه. أنتا تفعل العكس — أنظمة مستضافة على مواردك، تخزّن بياناتك محليًا، وتواصل العمل حين ينقطع الإنترنت. وعندما تريد التحليلات الذكية والوصول عن بُعد، اتصل بالإنترنت. القرار قرارك.",
  },
  pillars: [
    {
      title: { en: "Own it", ar: "امتلكه" },
      body: {
        en: "Your code and your data stay yours. No vendor lock-in, no rental access, no surprises.",
        ar: "الكود والبيانات ملكك. لا اعتماد على مورّد، ولا وصول بالإيجار، ولا مفاجآت.",
      },
    },
    {
      title: { en: "Secure it", ar: "أمّنه" },
      body: {
        en: "Offline-first architecture keeps sensitive data on your premises — and out of someone else's cloud.",
        ar: "بنية تعمل دون اتصال تُبقي البيانات الحساسة داخل منشأتك — بعيدًا عن سحابة الغير.",
      },
    },
    {
      title: { en: "Grow it", ar: "نمّه" },
      body: {
        en: "Online intelligence adds analytics, reminders and integrations when you need them.",
        ar: "ذكاء عبر الإنترنت يضيف التحليلات والتذكيرات والتكامل وقت الحاجة.",
      },
    },
  ],
  marquee: [
    { en: "Works 100% offline", ar: "يعمل دون إنترنت" },
    { en: "Unlimited users", ar: "مستخدمون بلا حدود" },
    { en: "Up to 6 locations free", ar: "6 مواقع مجانًا" },
    { en: "No hidden fees", ar: "بلا رسوم خفية" },
    { en: "Built-in workflows", ar: "مسارات عمل مدمجة" },
    { en: "Built for the region", ar: "مصمم للمنطقة" },
    { en: "Arabic-first", ar: "العربية أولًا" },
    { en: "Owner-controlled", ar: "تحت سيطرة المالك" },
  ],
};

export const ABOUT = {
  tag: { en: "About", ar: "من نحن" },
  title: { en: "Resilient by design, owner-controlled by principle", ar: "مرنة بالتصميم، تحت سيطرة مالكها بمبدأ" },
  body1: {
    en: "MK Technologies, short for Machine Knowledge Resilience Solutions (Adaptive Network for Technology and Automation), exists to make business software resilient and owner-controlled. We believe organizations should never lose access to their systems or their data because of a connection, a subscription or a vendor decision. That belief shaped AntA: software that works offline, protects data locally and uses online intelligence only when you choose.",
    ar: "إم كيه تكنولوجيز، اختصارًا لحلول المرونة المعرفية للآلات (الشبكة التكيّفية للتقنية والأتمتة)، وُجدت لتجعل برمجيات الأعمال مرنة وتحت سيطرة مالكها. نؤمن بأن المؤسسات يجب ألا تفقد الوصول إلى أنظمتها أو بياناتها بسبب انقطاع اتصال أو اشتراك أو قرار مورّد. هذا الإيمان صاغ أنتا: برمجيات تعمل دون إنترنت، وتحمي البيانات محليًا، وتستخدم الذكاء عبر الإنترنت فقط عندما تختار.",
  },
  body2: {
    en: "From clinics and retail stores to vehicle fleets, HR departments, private homes and rental businesses, AntA turns day-to-day operations into organized, trackable and measurable workflows, with no hidden fees and no artificial limits. Every AntA solution runs locally first, then connects online when you want intelligence, remote access or integration — never the other way around.",
    ar: "من العيادات ومتاجر التجزئة إلى أساطيل المركبات وإدارات الموارد البشرية والمنازل الخاصة وأعمال الإيجار، تحوّل أنتا العمليات اليومية إلى مسارات عمل منظمة وقابلة للتتبع والقياس، دون رسوم خفية ودون حدود مصطنعة. كل حل أنتا يعمل محليًا أولًا، ثم يتصل بالإنترنت عندما تريد الذكاء أو الوصول عن بُعد أو التكامل — وليس العكس أبدًا.",
  },
  stats: [
    { value: "100%", label: { en: "Offline capable", ar: "يعمل دون إنترنت" } },
    { value: "6", label: { en: "Locations free", ar: "مواقع مجانًا" } },
    { value: "∞", label: { en: "Users & records", ar: "مستخدمون وسجلات" } },
    { value: "0", label: { en: "Hidden fees", ar: "رسوم خفية" } },
  ],
};

export const PRODUCTS: ProductContent[] = [
  {
    id: "care",
    slug: "anta-care",
    name: { en: "AntA Care", ar: "أنتا كير" },
    tagline: {
      en: "Clinic and Medical Center Management",
      ar: "إدارة العيادات والمراكز الطبية",
    },
    description: {
      en: "An Arabic-first smart ecosystem for clinics and medical centers. AntA Care reorganizes how the clinic runs — less repeated admin work, a faster patient journey, and protected sensitive information. Complete patient records, organized appointments & queues, accurate invoicing, decision-ready reports, and role-based permissions that protect your data.",
      ar: "منظومة عربية ذكية أولًا للعيادات والمراكز الطبية. تُعيد أنتا كير تنظيم طريقة عمل العيادة — أعمال إدارية متكررة أقل، رحلة مريض أسرع، ومعلومات حساسة محمية. سجل مريض متكامل، مواعيد وطوابير منظمة، فواتير وحسابات دقيقة، تقارير جاهزة للقرار، وصلاحيات قائمة على الدور تحمي بياناتك.",
    },
    features: [
      { en: "Complete patient file — visits, history, diagnoses, medications, labs, imaging", ar: "ملف مريض متكامل — زيارات، تاريخ مرضي، تشخيصات، أدوية، تحاليل وأشعة" },
      { en: "Appointments and organized queue per exam room", ar: "مواعيد وطابور منظم لكل غرفة كشف" },
      { en: "Accurate invoicing, treasury, and doctor commissions", ar: "فواتير دقيقة، خزينة، وعمولات الأطباء" },
      { en: "Family linking for medically-related members", ar: "ربط أفراد الأسرة طبيًا عند الحاجة" },
      { en: "Multi-branch management with branch-level identity", ar: "إدارة متعددة الفروع بهوية كل فرع" },
      { en: "Role-based permissions that protect sensitive financial data", ar: "صلاحيات قائمة على الدور تحمي البيانات المالية الحساسة" },
      { en: "Decision-ready reports and Excel export", ar: "تقارير جاهزة للقرار وتصدير Excel" },
      { en: "Arabic-first UI with full RTL, English kept for medical terms", ar: "واجهة عربية أولًا بـ RTL كامل، الإنجليزية للمصطلحات الطبية" },
    ],
    icon: "stethoscope",
    accent: "from-emerald-400 to-teal-700",
    signature: {
      en: "Multi-branch clinic groups that need patient data, pharmacy, queues and finances in one locally-hosted system.",
      ar: "المجموعات الطبية متعددة الفروع التي تحتاج بيانات المرضى والصيدلية والطوابير والمالية في نظام واحد مستضاف محليًا.",
    },
  },
  {
    id: "shop",
    slug: "anta-shop",
    name: { en: "AntA Shop", ar: "أنتا شوب" },
    tagline: { en: "POS and Retail Management", ar: "نقاط البيع وإدارة التجزئة" },
    description: {
      en: "A clothing-retail ERP and POS in 8 connected modules — Purchases, Inventory (category → subcategory → brand → style → SKU), POS, Customers & Loyalty, Multi-Branch & Warehouses, Finance (auto journal entries that must balance), E-commerce site integration, and Reports. Multi-entity under one parent company, Egyptian Tax Authority (ETA) e-invoicing built in, 10 concurrent sessions on a single local server, no per-user fees.",
      ar: "نظام ERP وPOS ل تجزئة الملابس في 8 موديولات متصلة — المشتريات، المخزون (تصنيف ← فرعي ← ماركة ← ستايل ← SKU)، المبيعات ونقاط البيع، العملاء والولاء، الفروع والمخازن، الحسابات (قيود آلية يجب أن تتوازن)، ربط الموقع الإلكتروني، والتقارير. متعدد الكيانات تحت شركة أم، فواتير إلكترونية لمصلحة الضرائب (ETA)، 10 جلسات متزامنة على خادم محلي واحد، دون رسوم لكل مستخدم.",
    },
    features: [
      { en: "PUR — Purchases & suppliers: POs, receive notes, returns, supplier statements", ar: "PUR — المشتريات والموردين: أوامر شراء، مذكرات استلام، مرتجعات، كشوف موردين" },
      { en: "INV — Inventory hierarchy: Category → Subcategory → Brand → Style → SKU (color/size)", ar: "INV — هرمية المخزون: تصنيف ← فرعي ← ماركة ← ستايل ← SKU (لون/مقاس)" },
      { en: "POS — Sales & point of sale: cashier, returns, shifts, cash-up, e-invoices", ar: "POS — المبيعات ونقاط البيع: كاشير، مرتجعات، ورديات، ربط النقدية، فواتير إلكترونية" },
      { en: "CRM — Customers & loyalty programs with points, tiers and redemption", ar: "CRM — العملاء وبرامج الولاء بنقاط ودرجات واستبدال" },
      { en: "BR — Multi-branch & multi-warehouse with independent legal entities", ar: "BR — متعدد الفروع والمخازن بكيانات قانونية مستقلة" },
      { en: "FIN — Auto journal entries that must balance; P&L, ledger, treasury, trial balance", ar: "FIN — قيود محاسبية آلية يجب أن تتوازن؛ أ.خ، دفتر الأستاذ، الخزينة، ميزان المراجعة" },
      { en: "ECM — E-commerce site integration via JSON API (X-API-Key header)", ar: "ECM — ربط الموقع الإلكتروني عبر JSON API برأس X-API-Key" },
      { en: "RPT — Daily dashboard: sales, invoices, avg invoice, top 5 SKUs, low-stock alerts", ar: "RPT — لوحة يومية: مبيعات، فواتير، متوسط الفاتورة، أعلى 5 أصناف، تنبيهات حد إعادة الطلب" },
      { en: "ETA e-invoicing (Egyptian Tax Authority) with pending/rejected status tracking", ar: "فواتير إلكترونية لمصلحة الضرائب (ETA) مع متابعة الحالة معلّقة/مرفوضة" },
      { en: "RBAC + PIN overrides — Super Admin / Company Manager / Branch Manager / Cashier", ar: "صلاحيات + تجاوز بـ PIN — مدير عام / مدير شركة / مدير فرع / كاشير" },
      { en: "10 concurrent sessions on a local server (VPN access, no per-device install)", ar: "10 جلسات متزامنة على خادم محلي (وصول عبر VPN، دون تثبيت على الأجهزة)" },
    ],
    icon: "shopping-cart",
    accent: "from-teal-400 to-emerald-600",
    signature: {
      en: "Retail chains and multi-branch operators who want one cashier-to-ledger system with instant P&L.",
      ar: "سلاسل التجزئة والمشغلون متعددو الفروع الذين يريدون نظامًا واحدًا من الكاشير إلى دفتر الأستاذ مع أرباح وخسائر فورية.",
    },
  },
  {
    id: "fleet",
    slug: "anta-fleet",
    name: { en: "AntA Fleet", ar: "أنتا فليت" },
    tagline: { en: "Fleet Management", ar: "إدارة الأساطيل" },
    description: {
      en: "An integrated Fleet Management System (FMS) covering 11 core modules and 13 automated workflows — from Vehicle Master Cards and Driver Management through Workshop & Spare Parts, License & Document tracking, GPS Trip Reports, Traffic Violations, Fuel, Tyre & Battery, and an Executive Dashboard. Built for mixed fleets: personal, business, and transport vehicles with their driver workforce.",
      ar: "نظام إدارة أسطول متكامل (FMS) يغطي 11 موديول أساسي و 13 مسار عمل آلي — من بطاقة المركبة الرئيسية وإدارة السائقين عبر الورشة وقطع الغيار، تتبع التراخيص والمستندات، تقارير رحلات GPS، المخالفات، الوقود، الإطارات والبطاريات، ولوحة تنفيذية. مبني لأساطيل مختلطة: مركبات شخصية، أعمال، ونقل مع قوة سائقين.",
    },
    features: [
      { en: "Vehicle & Driver Master Cards with full specs, history and documents", ar: "بطاقة رئيسية للمركبة والسائق بمواصفات وتاريخ ومستندات كاملة" },
      { en: "Driver Assignment Orders + Daily Driver Check-in/Check-out", ar: "أوامر تعيين السائقين + تسجيل دخول/خروج يومي للسائق" },
      { en: "Maintenance & Workshop: request, reception, work order, handover, external maintenance", ar: "الصيانة والورشة: طلب، استقبال، أمر شغل، تسليم، صيانة خارجية" },
      { en: "Warehouse: item stock card, defective stock sales, spare parts dispatch authorization", ar: "المخازن: بطاقة صنف، بيع المخزون التالف، تصريح صرف قطع الغيار" },
      { en: "License & Document Management with expiry tracking and renewal workflows", ar: "إدارة التراخيص والمستندات مع تتبع الانتهاء ومسارات التجديد" },
      { en: "GPS Tracking & Trip Records with route, time and distance capture", ar: "تتبع GPS وسجلات الرحلات بالمسار والوقت والمسافة" },
      { en: "Traffic Violation Registry with driver/vehicle linkage and payment status", ar: "سجل المخالفات المرورية بربط السائق/المركبة وحالة السداد" },
      { en: "13 automated workflows (WF-01 to WF-13): license renewals, periodic maintenance, tyre/battery replacement, stock reorder, ratings, fuel anomaly, accident, training, govt inspection", ar: "13 مسار عمل آلي (WF-01 إلى WF-13): تجديد التراخيص، الصيانة الدورية، تبديل الإطارات/البطاريات، إعادة طلب المخزون، التقييمات، شذوذ الوقود، الحوادث، التدريب، الفحص الحكومي" },
      { en: "Executive Dashboard with operational cost reports per vehicle and fleet-wide", ar: "لوحة تنفيذية مع تقارير تكاليف تشغيل لكل مركبة وعلى مستوى الأسطول" },
      { en: "Driver Mobile App (APK) for trip ratings, feedback and check-in", ar: "تطبيق سائق للجوال (APK) للتقييمات والملاحظات وتسجيل الدخول" },
      { en: "Fuel, Accident, Tyre & Battery, Supplier, Driver Training & Competency modules", ar: "موديولات الوقود والحوادث والإطارات والبطاريات والموردين وتدريب السائقين" },
    ],
    icon: "truck",
    accent: "from-slate-400 to-slate-600",
    signature: {
      en: "Logistics and delivery fleets that can't afford to miss a renewal, a maintenance window, or a driver escalation.",
      ar: "أساطيل النقل والتسليم التي لا تقبل تفويت تجديد أو نافذة صيانة أو تصعيد سائق.",
    },
  },
  {
    id: "rental",
    slug: "anta-rental",
    name: { en: "AntA Rental Manager", ar: "أنتا رنتل مانجر" },
    tagline: { en: "Rental Units & Booking Management", ar: "إدارة الوحدات الإيجار والحجوزات" },
    description: {
      en: "A dual-mode Real Estate Management System. Mode 1 — Residential Compound Management: maintenance fund (revenues, expenses, balance), per-unit dues tracking (monthly/semi-annual/annual/incidental with auto-increment), late-payment alerts, polls & surveys, and a services directory. Mode 2 — Private Unit (Villa/Chalet) Management: multiple units under one account, hierarchical structure builder (rooms → contents), per-element warranty tracking, smart periodic maintenance with color-coded dashboard (red=late/yellow=soon/green=scheduled), expense analytics with pie/bar charts and period comparison. All data lives under the unit, not the person.",
      ar: "نظام إدارة عقارات ذكي بنمطين. النمط 1 — إدارة التجمع السكني: صندوق الصيانة (إيرادات، مصروفات، رصيد)، متابعة مستحقات الوحدات (شهري/نصف سنوي/سنوي/عارض مع زيادة تلقائية)، تنبيهات تأخر السداد، استطلاعات رأي، ودليل خدمات. النمط 2 — إدارة الوحدة الخاصة (فيلا/شاليه): وحدات متعددة تحت حساب واحد، منشئ هيكل هرمي (غرف ← محتويات)، تتبع ضمان لكل عنصر، صيانة دورية ذكية بلوحة ملونة (أحمر=متأخر/أصفر=قريب/أخضر=مجدول)، تحليلات مصروفات بمخططات دائرية/أعمدة ومقارنة فترات. كل البيانات مرتبطة بالوحدة لا بالشخص.",
    },
    features: [
      { en: "Two modes: Residential Compound OR Private Unit (Villa/Chalet)", ar: "نمطان: التجمع السكني أو الوحدة الخاصة (فيلا/شاليه)" },
      { en: "Maintenance fund: revenues + expenses + positive/negative balance tracking", ar: "صندوق الصيانة: إيرادات + مصروفات + رصيد موجب/سالب" },
      { en: "Per-unit dues (monthly/semi-annual/annual/incidental) with auto-increment", ar: "مستحقات لكل وحدة (شهري/نصف سنوي/سنوي/عارض) مع زيادة تلقائية" },
      { en: "Late-payment auto-alerts + owner/manager in-app notifications", ar: "تنبيهات تأخر سداد تلقائية + إشعارات داخل التطبيق للمالك/المدير" },
      { en: "Polls & surveys: target all / owners only / managers only", ar: "استطلاعات رأي: للكل / للملاك فقط / للمديرين فقط" },
      { en: "Services directory: restaurants, technicians, schools (Admin-managed)", ar: "دليل الخدمات: مطاعم، فنيون، مدارس (إدارة الأدمن)" },
      { en: "Hierarchical structure builder: rooms → contents with name/model/qty/install date", ar: "منشئ هيكل هرمي: غرف ← محتويات بالاسم/الموديل/الكمية/تاريخ التركيب" },
      { en: "Per-element warranty tracking with expiry alerts", ar: "تتبع ضمان لكل عنصر مع تنبيهات الانتهاء" },
      { en: "Smart periodic maintenance with color-coded dashboard (red/yellow/green)", ar: "صيانة دورية ذكية بلوحة ملونة (أحمر/أصفر/أخضر)" },
      { en: "Expense analytics: pie/bar charts, period comparison, top spending items", ar: "تحليلات المصروفات: مخططات دائرية/أعمدة، مقارنة فترات، أعلى بنود الإنفاق" },
      { en: "WhatsApp recovery code for password reset + Admin activate/deactivate", ar: "استعادة كلمة المرور بـ WhatsApp + تفعيل/تعطيل الأدمن للحسابات" },
    ],
    icon: "building",
    accent: "from-emerald-500 to-teal-800",
    signature: {
      en: "Short-term and long-term rental businesses — apartments, villas, offices, vacation homes — run end to end.",
      ar: "أعمال الإيجار القصيرة والطويلة الأجل — شقق، فيلات، مكاتب، بيوت مصيفية — تُدار من البداية للنهاية.",
    },
  },
  {
    id: "home",
    slug: "anta-home",
    name: { en: "AntA Home", ar: "أنتا هوم" },
    tagline: { en: "Smart Home Management", ar: "إدارة المنزل الذكي" },
    description: {
      en: "Manage your home like a well-run organization. AntA Home tracks staff, scheduled maintenance, warranties, stock, seasonal checklists and costs — all in one secure, locally-hosted place.",
      ar: "أدر منزلك كما تُدار المؤسسات المنظمة. يتتبع أنتا هوم العاملين والصيانة المجدولة والضمانات والمخزون والقوائم الموسمية والتكاليف — كل ذلك في مكان واحد آمن ومستضاف محليًا.",
    },
    features: [
      { en: "Household staff and employees", ar: "العاملون في المنزل" },
      { en: "Recurring and scheduled maintenance", ar: "الصيانة الدورية والمجدولة" },
      { en: "Device warranties", ar: "ضمانات الأجهزة" },
      { en: "Stock and storage", ar: "المخزون والتخزين" },
      { en: "Regular and seasonal checklists", ar: "قوائم المراجعة المعتادة والموسمية" },
      { en: "Cost tracking reports", ar: "تقارير تتبع التكاليف" },
      { en: "Smart maintenance and repair reporting", ar: "تقارير ذكية للصيانة والإصلاح" },
    ],
    icon: "home",
    accent: "from-zinc-400 to-zinc-600",
    signature: {
      en: "Households that operate at the scale of a small business — staff, vehicles, appliances, recurring expenses.",
      ar: "المنازل التي تعمل بمقياس عمل صغير — موظفون، مركبات، أجهزة، ومصروفات متكررة.",
    },
  },
  {
    id: "car",
    slug: "anta-car",
    name: { en: "AntA Car", ar: "أنتا كار" },
    tagline: { en: "Private Car Management", ar: "إدارة السيارات الخاصة" },
    description: {
      en: "Your own interactive garage. AntA Car tracks maintenance, mileage, tires, batteries, violations and renewals across every vehicle you own — with cost reports that show what each car actually costs to run.",
      ar: "جراجك التفاعلي الخاص. يتتبع أنتا كار الصيانة وعدّاد الكيلومترات والإطارات والبطاريات والمخالفات والتجديدات لكل سيارة تملكها — مع تقارير تكاليف تكشف ما تكلفه كل سيارة فعلًا في التشغيل.",
    },
    features: [
      { en: "Track and manage all your cars and assign drivers", ar: "تتبع وإدارة سياراتك وتعيين السائقين" },
      { en: "Maintenance, mileage (km) and GPS tracking", ar: "الصيانة وعدّاد الكيلومترات وتتبع GPS" },
      { en: "Tires and batteries", ar: "الإطارات والبطاريات" },
      { en: "Violations and license renewals", ar: "المخالفات وتجديد التراخيص" },
      { en: "Periodic maintenance", ar: "الصيانة الدورية" },
      { en: "Cost reports per vehicle", ar: "تقارير التكاليف لكل مركبة" },
    ],
    icon: "car",
    accent: "from-emerald-300 to-teal-500",
    signature: {
      en: "Individuals and families with multiple vehicles and drivers who want one private garage that never forgets a date.",
      ar: "الأفراد والعائلات بمركبات وسائقين متعددين الذين يريدون جراجًا خاصًا واحدًا لا ينسى موعدًا.",
    },
  },
  {
    id: "hr",
    slug: "anta-hr",
    name: { en: "AntA HR", ar: "أنتا إتش آر" },
    tagline: { en: "HR Operations Solutions", ar: "حلول عمليات الموارد البشرية" },
    description: {
      en: "A five-module HR operations suite covering the full employee life cycle. Document Creator (12 legal templates, Word/PDF export, bulk from Excel, bilingual Arabic/English RTL with Tafqit). Renewals Workflow (multi-level approvals L1–L5, delegation, escalation, probation, birthday emails, audit trail). Annual Leave Planner (10,000 employees, auto-distributes 59,236 transactions in 0.43s, blocked days register, 35% max-on-leave rule, 6-day consecutive guarantee). Employee Assets Book (6-stage lifecycle, multi-role clearance, auto-depreciation, SMTP notifications). MK Archive System (scanned documents inline, rules-driven checklist by gender × job title, 5-year external archive rule, document recall).",
      ar: "حزمة عمليات موارد بشرية من خمسة موديولات تغطي دورة حياة الموظف كاملة. منشئ المستندات (12 قالب قانوني، تصدير Word/PDF، توليد جماعي من Excel، ثنائي اللغة عربي/إنجليزي RTL مع التفقيط). مسار عمل التجديدات (موافقات متعددة المستويات L1–L5، تفويض، تصعيد، فترة اختبار، رسائل أعياد الميلاد، سجل تدقيق). مخطط الإجازات السنوية (10,000 موظف، يوزع 59,236 معاملة في 0.43 ثانية، سجل الأيام المحظورة، قاعدة 35% حد أعلى للإجازات، ضمان 6 أيام عمل متتالية). سجل أصول الموظفين (دورة حياة من 6 مراحل، تخليص متعدد الأدوار، إهلاك تلقائي، إشعارات SMTP). نظام الأرشيف (مستندات ممسوحة ضوئيًا، قائمة قواعد بالجنس × المسمى الوظيفي، قاعدة 5 سنوات للأرشيف الخارجي، استدعاء مستندات).",
    },
    features: [
      { en: "Document Creator: 12 legal templates + Word-like Template Builder + 31 system fields", ar: "منشئ المستندات: 12 قالب قانوني + منشئ قوالب شبيه Word + 31 حقل نظام" },
      { en: "Bulk document generation from Excel (one template, many employees, locked Word files)", ar: "توليد جماعي للمستندات من Excel (قالب واحد، موظفون كثيرون، ملفات Word محمية" },
      { en: "Renewals Workflow: multi-level approvals L1–L5, delegation, escalation, auto-reminders", ar: "مسار التجديدات: موافقات متعددة المستويات L1–L5، تفويض، تصعيد، تذكيرات تلقائية" },
      { en: "Probation workflow: pre-eval → final eval → improvements form → HR finalize", ar: "مسار فترة الاختبار: تقييم تمهيدي ← تقييم نهائي ← نموذج تحسينات ← إنهاء الموارد البشرية" },
      { en: "Birthday emails: daily scheduled, manual resend for missed days", ar: "رسائل أعياد الميلاد: مجدولة يوميًا، إعادة إرسال يدوية للأيام الفائتة" },
      { en: "Annual Leave Planner: 10,000 employees, 0.43s auto-distribute, Egyptian holidays", ar: "مخطط الإجازات السنوية: 10,000 موظف، توزيع آلي في 0.43 ثانية، أعياد مصرية" },
      { en: "Leave rules: 35% max on-leave, ≥6 consecutive working days, blocked-days register", ar: "قواعد الإجازات: حد أعلى 35%، ≥6 أيام عمل متتالية، سجل أيام محظورة" },
      { en: "Employee Assets Book: 6-stage lifecycle, multi-role clearance, auto-depreciation", ar: "سجل أصول الموظفين: دورة حياة 6 مراحل، تخليص متعدد الأدوار، إهلاك تلقائي" },
      { en: "Asset emails: clearance task, allocation approved, return confirmed — with SMTP presets", ar: "رسائل الأصول: مهمة التخليص، اعتماد التخصيص، تأكيد الاستلام — مع إعدادات SMTP جاهزة" },
      { en: "MK Archive: scanned documents inline, rules by gender × job title, 5-year rule", ar: "أرشيف أنتا: مستندات ممسوحة ضوئيًا، قواعد بالجنس × المسمى، قاعدة 5 سنوات" },
      { en: "Document Recall: collect one type for many employees into a dated folder + Excel report", ar: "استدعاء مستندات: جمع نوع واحد لعدة موظفين في مجلد مؤرخ + تقرير Excel" },
      { en: "Arabic-normalized search (hamza, taa marbuta, diacritics) + Tafqit (salaries in words)", ar: "بحث عربي مطبّع (همزة، تاء مربوطة، تشكيل) + تفقيط (الرواتب بالكلمات)" },
      { en: "5 roles: System Manager / HR Manager / Payroll Officer / HR Personnel / Mobile Manager", ar: "5 أدوار: مدير النظام / مدير الموارد البشرية / مسؤول الرواتب / موظف الموارد البشرية / مدير الجوال" },
    ],
    icon: "users",
    accent: "from-slate-300 to-emerald-500",
    signature: {
      en: "HR teams running contracts, leave, assets, documents and archives in one owner-controlled suite — without per-seat cloud lock-in.",
      ar: "فرق الموارد البشرية التي تدير العقود والإجازات والأصول والمستندات والأرشيف في حزمة واحدة تحت سيطرة المالك — دون احتجاز سحابي لكل مقعد.",
    },
  },
];

export const SPOTLIGHT = {
  tag: { en: "Spotlight · AntA Care", ar: "تحت المجهر · أنتا كير" },
  title: {
    en: "Your Time for Medicine, Not Paperwork.",
    ar: "وقتك للطبيب… وليس للأوراق.",
  },
  subtitle: {
    en: "AntA Care is not just another clinic software. It is a complete ecosystem designed to reorganize how your clinic runs: less repeated admin work, a faster patient journey, and protected sensitive information.",
    ar: "أنتا كير ليست مجرد برنامج لإدارة العيادات. إنها منظومة كاملة صُممت لإعادة تنظيم طريقة عمل عيادتك: أعمال إدارية متكررة أقل، رحلة مريض أسرع، ومعلومات حساسة محمية.",
  },
  philosophy: {
    title: { en: "Five words summarize AntA Care", ar: "خمس كلمات تلخص أنتا كير" },
    items: [
      { word: { en: "Save", ar: "احفظ" }, target: { en: "the information", ar: "المعلومات" } },
      { word: { en: "Organize", ar: "نظّم" }, target: { en: "the operations", ar: "العمليات" } },
      { word: { en: "Protect", ar: "احمِ" }, target: { en: "the data", ar: "البيانات" } },
      { word: { en: "Speed up", ar: "أسرّع" }, target: { en: "the patient journey", ar: "رحلة المريض" } },
      { word: { en: "Free", ar: "حرّر" }, target: { en: "the doctor's time", ar: "وقت الطبيب" } },
    ],
    closing: {
      en: "AntA Care doesn't promise your clinic will run itself. We promise something more realistic: work that is more organized, information that is easier to reach, data that is better protected, and time that is more valuable.",
      ar: "أنتا كير لا تعدك بأن العيادة ستعمل وحدها… بل تعدك بشيء أكثر واقعية: أن تجعل العمل أكثر تنظيمًا، والمعلومات أكثر سهولة في الوصول، والبيانات أكثر حماية، والوقت أكثر قيمة.",
    },
  },
  workflow: {
    title: { en: "The patient journey, end to end", ar: "رحلة المريض، من البداية للنهاية" },
    subtitle: {
      en: "A clear path: registration → waiting → check-in → patient file → visit → prescription/procedure → billing → check-out. Every step feeds the next.",
      ar: "مسار واضح: تسجيل → انتظار → دخول → ملف المريض → زيارة → وصفة/إجراء → حساب → انتهاء الزيارة. كل خطوة تغذّي التالية.",
    },
    steps: [
      { en: "Registration", ar: "تسجيل" },
      { en: "Waiting", ar: "انتظار" },
      { en: "Check-in", ar: "دخول" },
      { en: "Patient file", ar: "ملف المريض" },
      { en: "Visit", ar: "زيارة" },
      { en: "Prescription / procedure", ar: "وصفة / إجراء" },
      { en: "Billing", ar: "حساب" },
      { en: "Check-out", ar: "انتهاء الزيارة" },
    ],
  },
  highlights: {
    title: { en: "What changes with AntA Care", ar: "ما الذي يتغير مع أنتا كير" },
    items: [
      {
        title: { en: "One patient file, everything in one place", ar: "ملف مريض واحد، كل شيء في مكان واحد" },
        body: {
          en: "Visits, history, diagnoses, medications, labs, imaging, procedures, notes, documents — doctors never start a visit from zero.",
          ar: "الزيارات، التاريخ، التشخيصات، الأدوية، التحاليل، الأشعة، الإجراءات، الملاحظات، المستندات — لا يبدأ الطبيب كل زيارة من الصفر.",
        },
      },
      {
        title: { en: "From \"who's next?\" to an organized queue", ar: 'من "مين بعده؟" إلى طابور منظم' },
        body: {
          en: "Waiting patients, turn order, status, walk-ins, appointments and patient flow — all trackable in real time.",
          ar: "المرضى المنتظرون، ترتيب الأدوار، الحالة، القادمون بدون موعد، المواعيد، وحركة المرضى — كلها قابلة للمتابعة فوريًا.",
        },
      },
      {
        title: { en: "Arabic is the core experience, not a translation", ar: "العربية هي التجربة الأساسية، لا ترجمة ثانوية" },
        body: {
          en: "Full RTL, Arabic UI, fields, messages, reports and printing — with English kept for technical medical terms where it serves you best.",
          ar: "RTL كامل، واجهة وحقول ورسائل وتقارير وطباعة بالعربية — مع الإبقاء على الإنجليزية للمصطلحات الطبية التقنية حيثما أنفع.",
        },
      },
      {
        title: { en: "Your data belongs to you alone", ar: "بيانات عيادتك ملكك وحدك" },
        body: {
          en: "Local storage, role-based permissions, and sensitive financials visible only to authorized users — never shown just because the system has it.",
          ar: "تخزين محلي، صلاحيات قائمة على الدور، ومعلومات مالية حساسة مرئية فقط للمستخدمين المخوّلين — لا تُعرض لمجرد أن النظام يملكها.",
        },
      },
    ],
  },
  cta: { en: "Start now — organize your clinic", ar: "ابدأ الآن — نظّم عيادتك" },
};

export const GALLERY = {
  tag: { en: "Gallery", ar: "المعرض" },
  title: { en: "The AntA suite, in pixels", ar: "مجموعة أنتا، بالصور" },
  subtitle: {
    en: "Visual promises from across the AntA suite — AntA Care social campaign plus branded visuals for Shop, Fleet, Rental Manager, Home, Car, and HR. Filter by product to focus.",
    ar: "وعود بصرية من مجموعة أنتا — حملة أنتا كير على وسائل التواصل بالإضافة إلى صور للعلامة لأنظمة شوب وفليت ورنتل مانجر وهوم وكار وإتش آر. صفِّ حسب المنتج للتركيز.",
  },
  filterAll: { en: "All", ar: "الكل" },
};

// Image catalog — each entry has product id + src + label
export const GALLERY_IMAGES: {
  src: string;
  productId: string;
  label: Localized;
}[] = [
  // AntA Care (10 — from social campaign)
  { src: "/marketing/ANTA-Care-Post-EN-02.png", productId: "care", label: { en: "Doctor time", ar: "وقت الطبيب" } },
  { src: "/marketing/ANTA-Care-Post-EN-04.png", productId: "care", label: { en: "Patient file", ar: "ملف المريض" } },
  { src: "/marketing/ANTA-Care-Post-EN-06.png", productId: "care", label: { en: "Queue", ar: "الطابور" } },
  { src: "/marketing/ANTA-Care-Post-EN-08.png", productId: "care", label: { en: "Prescriptions", ar: "الوصفات" } },
  { src: "/marketing/ANTA-Care-Post-EN-10.png", productId: "care", label: { en: "Privacy", ar: "الخصوصية" } },
  { src: "/marketing/ANTA-Care-Post-EN-12.png", productId: "care", label: { en: "Treasury", ar: "الخزينة" } },
  { src: "/marketing/ANTA-Care-Post-EN-14.png", productId: "care", label: { en: "Multi-branch", ar: "متعدد الفروع" } },
  { src: "/marketing/ANTA-Care-Post-EN-16.png", productId: "care", label: { en: "Data control", ar: "السيطرة على البيانات" } },
  { src: "/marketing/ANTA-Care-Post-EN-18.png", productId: "care", label: { en: "Patient journey", ar: "رحلة المريض" } },
  { src: "/marketing/ANTA-Care-Post-EN-20.png", productId: "care", label: { en: "Philosophy", ar: "الفلسفة" } },
  // Other 6 products — branded visuals
  { src: "/marketing/AntA-shop-campaign.png", productId: "shop", label: { en: "Clothing retail ERP", ar: "ERP لتجزئة الملابس" } },
  { src: "/marketing/AntA-fleet-campaign.png", productId: "fleet", label: { en: "Fleet operations", ar: "عمليات الأسطول" } },
  { src: "/marketing/AntA-rental-campaign.png", productId: "rental", label: { en: "Rental properties", ar: "العقارات الإيجارية" } },
  { src: "/marketing/AntA-home-campaign.png", productId: "home", label: { en: "Smart home", ar: "المنزل الذكي" } },
  { src: "/marketing/AntA-car-campaign.png", productId: "car", label: { en: "Private garage", ar: "الجراج الخاص" } },
  // AntA HR — 12 real screenshots extracted from the 5 HR presentations:
  // Annual Leave Planner, Renewals Workflow, Employee Assets Book, HR Document Creator, MK Archive System
  { src: "/marketing/AntA-HR-leave-01-calendar.png", productId: "hr", label: { en: "Leave Planner — Calendar", ar: "مخطط الإجازات — التقويم" } },
  { src: "/marketing/AntA-HR-leave-02-dashboard.png", productId: "hr", label: { en: "Leave Planner — Dashboard", ar: "مخطط الإجازات — اللوحة" } },
  { src: "/marketing/AntA-HR-leave-03-policy.png", productId: "hr", label: { en: "Leave Planner — Policy rules", ar: "مخطط الإجازات — قواعد السياسة" } },
  { src: "/marketing/AntA-HR-renewals-01-admin.png", productId: "hr", label: { en: "Renewals — Admin dashboard", ar: "التجديدات — لوحة الأدمن" } },
  { src: "/marketing/AntA-HR-renewals-02-config.png", productId: "hr", label: { en: "Renewals — Workflow config", ar: "التجديدات — إعداد المسار" } },
  { src: "/marketing/AntA-HR-assets-01-dashboard.png", productId: "hr", label: { en: "Assets Book — Dashboard", ar: "سجل الأصول — اللوحة" } },
  { src: "/marketing/AntA-HR-assets-02-overview.png", productId: "hr", label: { en: "Assets Book — Lifecycle overview", ar: "سجل الأصول — نظرة دورة الحياة" } },
  { src: "/marketing/AntA-HR-assets-03-clearance.png", productId: "hr", label: { en: "Assets Book — Multi-role clearance", ar: "سجل الأصول — تخليص متعدد الأدوار" } },
  { src: "/marketing/AntA-HR-docs-01-overview.png", productId: "hr", label: { en: "Document Creator — 10 sections", ar: "منشئ المستندات — 10 أقسام" } },
  { src: "/marketing/AntA-HR-docs-02-template-builder.png", productId: "hr", label: { en: "Document Creator — Template Builder", ar: "منشئ المستندات — منشئ القوالب" } },
  { src: "/marketing/AntA-HR-archive-01-overview.png", productId: "hr", label: { en: "Archive System — Overview", ar: "نظام الأرشيف — نظرة عامة" } },
  { src: "/marketing/AntA-HR-archive-02-scanned-docs.png", productId: "hr", label: { en: "Archive System — Scanned documents", ar: "نظام الأرشيف — المستندات الممسوحة" } },
];

export const WHY = {
  tag: { en: "Why AntA", ar: "لماذا أنتا" },
  title: { en: "Built for the region. Designed for ownership.", ar: "مصمم للمنطقة. مبني على الملكية." },
  subtitle: {
    en: "Six reasons organizations choose AntA over rented, cloud-only software.",
    ar: "ستة أسباب تدفع المؤسسات لاختيار أنتا بدلًا من البرمجيات المؤجّرة والسحابية فقط.",
  },
  reasons: [
    {
      title: { en: "Works 100% offline", ar: "يعمل 100% دون إنترنت" },
      body: {
        en: "AntA systems run locally on your own resources. The internet can drop, subscriptions can lapse, vendors can change — your operations keep going.",
        ar: "تعمل أنظمة أنتا محليًا على مواردك. قد ينقطع الإنترنت أو تنتهي الاشتراكات أو يتغير المورّد — وعملياتك تستمر.",
      },
    },
    {
      title: { en: "Unlimited users, patients, visits, branches and storage", ar: "مستخدمون ومرضى وزيارات وفروع وتخزين بلا حدود" },
      body: {
        en: "No per-seat pricing. No artificial caps. AntA scales with your organization, not with your invoice.",
        ar: "بلا تسعير لكل مقعد. بلا حدود مصطنعة. تنمو أنتا مع مؤسستك، لا مع فاتورتك.",
      },
    },
    {
      title: { en: "Up to 6 locations free of charge", ar: "حتى 6 مواقع مجانًا" },
      body: {
        en: "Host AntA on your own resources and grant access to up to six locations at no additional cost. Branch out without billing out.",
        ar: "استضف أنتا على مواردك وامنح الوصول لستة مواقع دون تكلفة إضافية. توسّع في الفروع دون توسيع الفواتير.",
      },
    },
    {
      title: { en: "No hidden fees", ar: "بلا رسوم خفية" },
      body: {
        en: 'The price you agree to is the price you pay. No setup surprises, no premium modules, no "contact sales" walls in front of features.',
        ar: 'السعر الذي تتفق عليه هو ما تدفع. بلا مفاجآت تركيب، ولا وحدات مميزة، ولا جدران "تواصل مع المبيعات" أمام الميزات.',
      },
    },
    {
      title: { en: "Built-in workflows, reminders and reports", ar: "مسارات عمل وتذكيرات وتقارير مدمجة" },
      body: {
        en: "Reminders, renewals, escalations and approvals are part of the platform. You don't buy them, configure them from scratch or wait for a vendor to add them.",
        ar: "التذكيرات والتجديدات والتصعيد والاعتمادات جزء من المنصة. لا تشتريها، ولا تضبطها من الصفر، ولا تنتظر المورّد ليضيفها.",
      },
    },
    {
      title: { en: "Built for the region", ar: "مصمم للمنطقة" },
      body: {
        en: "Arabic-first UI with full RTL, designed with Egyptian and MEA business realities in mind — workflows, currencies, social insurance, language and operations that match how the region actually works.",
        ar: "واجهة عربية أولًا بـ RTL كامل، مصمم مع واقع الأعمال في مصر ومنطقة الشرق الأوسط وأفريقيا — مسارات عمل وعملات وتأمينات اجتماعية ولغة وعمليات تتناسب مع كيفية عمل المنطقة فعلًا.",
      },
    },
  ],
};

export const ROADMAP = {
  tag: { en: "Coming Soon", ar: "قريبًا" },
  title: { en: "What we're building next", ar: "ما نبنيه تاليًا" },
  subtitle: {
    en: "Roadmap modules for AntA HR and beyond — designed to plug into the same resilient, owner-controlled core.",
    ar: "وحدات خرائط الطريق لأنظمة الموارد البشرية وغيرها — مصممة لتتصل بنفس النواة المرنة تحت سيطرة المالك.",
  },
  items: [
    { en: "Job Evaluation Tool", ar: "أداة تقييم الوظائف" },
    {
      en: "Compensation and Benefits Management Portal: benefits, salary structure, grading, increases and promotions",
      ar: "بوابة إدارة التعويضات والمزايا: المزايا وهيكل الرواتب والدرجات والزيادات والترقيات",
    },
    { en: "Performance Evaluation Tool", ar: "أداة تقييم الأداء" },
    { en: "Budget and Forecast Tool", ar: "أداة الموازنة والتنبؤ" },
    {
      en: "Social Insurance Management Solution, including Form 2 calculation and monthly breakdown tracking",
      ar: "حل إدارة التأمينات الاجتماعية، يشمل حساب نموذج 2 ومتابعة التفاصيل الشهرية",
    },
    { en: "HR ROI and Metrics Dashboard", ar: "لوحة مؤشرات العائد على الاستثمار في الموارد البشرية" },
  ],
};

export const CONTACT = {
  tag: { en: "Contact", ar: "تواصل" },
  title: { en: "Let's talk.", ar: "لنتحدث." },
  body: {
    en: "Tell us about your clinic, store, fleet, HR team, rental business or home, and we'll show you how AntA fits.",
    ar: "أخبرنا عن عيادتك أو متجرك أو أسطولك أو فريق الموارد البشرية أو عمل الإيجار أو منزلك، وسنريك كيف تناسبك أنتا.",
  },
  emailLabel: { en: "Email us", ar: "راسلنا" },
  phoneLabel: { en: "Call us", ar: "اتصل بنا" },
  formName: { en: "Name", ar: "الاسم" },
  formCompany: { en: "Company", ar: "الشركة" },
  formEmail: { en: "Email", ar: "البريد" },
  formSolution: { en: "Solution of interest", ar: "الحل المهتم به" },
  solutionsPlaceholder: { en: "Select a solution", ar: "اختر حلًا" },
  formMessage: { en: "Message", ar: "الرسالة" },
  formSubmit: { en: "Send message", ar: "أرسل الرسالة" },
  formSuccess: {
    en: "Thanks — we'll reply by email within one business day.",
    ar: "شكرًا — سنرد عبر البريد خلال يوم عمل واحد.",
  },
};

export const SPECS = {
  navButton: { en: "Request Specs", ar: "اطلب المواصفات" },
  footerButton: { en: "Request Product Specs", ar: "اطلب مواصفات المنتج" },
  title: { en: "Request Product Specs", ar: "اطلب مواصفات المنتج" },
  subtitle: {
    en: "Tell us a bit about you and which AntA product interests you. Our team will share the full product specifications with you by email shortly.",
    ar: "أخبرنا قليلًا عنك وعن منتج أنتا الذي يهمك. سيشارك فريقنا مواصفات المنتج الكاملة معك عبر البريد قريبًا.",
  },
  productLabel: { en: "Product of interest", ar: "المنتج المهتم به" },
  productPlaceholder: { en: "Select a product", ar: "اختر منتجًا" },
  generalInquiry: { en: "General inquiry", ar: "استفسار عام" },
  nameLabel: { en: "Full name", ar: "الاسم الكامل" },
  namePlaceholder: { en: "Your name", ar: "اسمك" },
  emailLabel: { en: "Email", ar: "البريد الإلكتروني" },
  emailPlaceholder: { en: "you@company.com", ar: "you@company.com" },
  companyLabel: { en: "Company", ar: "الشركة" },
  companyPlaceholder: { en: "Company name", ar: "اسم الشركة" },
  phoneLabel: { en: "Phone number", ar: "رقم الهاتف" },
  phonePlaceholder: { en: "+20 …", ar: "+20 …" },
  contactMethodLabel: {
    en: "Preferred way to be contacted",
    ar: "الطريقة المفضلة للتواصل معك",
  },
  contactMethods: [
    { id: "email", label: { en: "Email", ar: "بريد إلكتروني" } },
    { id: "whatsapp", label: { en: "WhatsApp", ar: "واتساب" } },
    { id: "phone", label: { en: "Phone call", ar: "مكالمة هاتفية" } },
  ],
  submit: { en: "Submit request", ar: "أرسل الطلب" },
  successTitle: { en: "Thank you!", ar: "شكرًا لك!" },
  successBody: {
    en: "Your request has been received. The full product specifications will be shared with you via email shortly.",
    ar: "تم استلام طلبك. ستُشارك معك مواصفات المنتج الكاملة عبر البريد الإلكتروني قريبًا.",
  },
  successContact: {
    en: "We'll reach out via your preferred contact method.",
    ar: "سنتواصل معك عبر طريقة التواصل المفضلة لديك.",
  },
  close: { en: "Close", ar: "إغلاق" },
  another: { en: "Submit another request", ar: "أرسل طلبًا آخر" },
  requiredNote: {
    en: "All fields are required.",
    ar: "جميع الحقول مطلوبة.",
  },
};

export const FOOTER = {
  tagline: {
    en: "Own your code. Own your data. Offline security with online intelligence.",
    ar: "امتلك كودك. امتلك بياناتك. أمان بلا إنترنت، وذكاء عند الطلب.",
  },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  quickLinks: { en: "Quick Links", ar: "روابط سريعة" },
  solutions: { en: "Solutions", ar: "الحلول" },
  getInTouch: { en: "Get in touch", ar: "تواصل معنا" },
  specsCtaTitle: { en: "Need the full specs?", ar: "تحتاج المواصفات الكاملة؟" },
  specsCtaBody: {
    en: "Request product specifications for any AntA solution — our team will share them with you via email shortly.",
    ar: "اطلب مواصفات أي حل من حلول أنتا — وسيشاركها فريقنا معك عبر البريد قريبًا.",
  },
};

// ============================================================
// FITNESS-STUDIO REDESIGN — additional copy
// ============================================================

export const HERO_FIT = {
  // Brand attitude — replaces some HERO copy
  badge: { en: "OFFLINE-FIRST · OWNER-CONTROLLED · ARABIC-FIRST", ar: "يعمل أولًا دون إنترنت · تحت سيطرة المالك · عربي أولًا" },
  attitude: {
    en: "Built for those who refuse to rent their own business.",
    ar: "لمن يرفض أن يؤجّر عمله نفسه.",
  },
  reel: {
    playLabel: { en: "Play brand reel", ar: "شغّل شريط العلامة" },
    muted: { en: "Muted", ar: "صامت" },
    unmute: { en: "Tap to unmute", ar: "اضغط لتشغيل الصوت" },
  },
  teamStripTitle: { en: "The AntA Suite · 7 Specialists", ar: "مجموعة أنتا · 7 اختصاصيين" },
  teamStripHint: {
    en: "Scroll to curriculum ↓",
    ar: "مرّر للمنهج ↓",
  },
};

export const CURRICULUM = {
  tag: { en: "Curriculum", ar: "المنهج" },
  title: {
    en: "Organized by what you actually run.",
    ar: "منظّم بحسب ما تشغّله فعلًا.",
  },
  subtitle: {
    en: "Seven AntA systems, grouped by the goal they serve — not by departmental boundaries.",
    ar: "سبعة أنظمة من أنتا، مجمّعة بالهدف الذي تخدمه — لا بحدود الإدارات.",
  },
  groups: [
    {
      id: "healthcare",
      title: { en: "Healthcare", ar: "الرعاية الصحية" },
      desc: {
        en: "Clinics and medical centers — patient journey, pharmacy, queue, treasury, multi-branch.",
        ar: "العيادات والمراكز الطبية — رحلة المريض، الصيدلية، الطابور، الخزينة، متعدد الفروع.",
      },
      productIds: ["care"],
    },
    {
      id: "commerce",
      title: { en: "Commerce & Logistics", ar: "التجارة واللوجستيات" },
      desc: {
        en: "POS, retail, multi-branch accounting, fleet operations, GPS tracking, workshops and warehouses.",
        ar: "نقاط البيع، التجزئة، محاسبة متعددة الفروع، عمليات الأسطول، تتبع GPS، الورش والمخازن.",
      },
      productIds: ["shop", "fleet"],
    },
    {
      id: "rentals",
      title: { en: "Rentals & Properties", ar: "الإيجار والعقارات" },
      desc: {
        en: "Short-term or long-term rental units — bookings, check-in/out, payments, maintenance, contracts, utilities.",
        ar: "وحدات إيجار قصيرة وطويلة الأجل — الحجوزات، تسجيل الدخول/الخروج، المدفوعات، الصيانة، العقود، المرافق.",
      },
      productIds: ["rental"],
    },
    {
      id: "people",
      title: { en: "People & Places", ar: "الأفراد والأماكن" },
      desc: {
        en: "HR life cycle, smart home operations, private car management — staff, assets, renewals, maintenance.",
        ar: "دورة الموارد البشرية، تشغيل المنزل الذكي، إدارة السيارات الخاصة — الموظفون، الأصول، التجديدات، الصيانة.",
      },
      productIds: ["hr", "home", "car"],
    },
  ],
  flipHint: {
    en: "Hover (or tap) a card to flip it.",
    ar: "مرّر فوق البطاقة (أو انقر) لقلبها.",
  },
  signature: { en: "Signature use case", ar: "حالة الاستخدام المميزة" },
  requestCta: { en: "Request specs", ar: "اطلب المواصفات" },
};

export const COACHES = {
  tag: { en: "Product Specialists", ar: "اختصاصيو المنتجات" },
  title: {
    en: "Built like coaches. Owned by you.",
    ar: "بنيت كالمدربين. وملكك أنت.",
  },
  subtitle: {
    en: "Each AntA system carries a sharp specialty and a signature use case. Hover any card to see its certifications — the features that earn it a spot on the team.",
    ar: "كل نظام من أنتا يحمل تخصصًا حادًا وحالة استخدام مميزة. مرّر فوق أي بطاقة لرؤية شهاداتها — المزايا التي تستحق بها مكانها في الفريق.",
  },
};

export const MEMBER_STORIES = {
  tag: { en: "Transformations", ar: "تحولات" },
  title: {
    en: "What changes when you own the system.",
    ar: "ما الذي يتغير عندما تملك النظام.",
  },
  subtitle: {
    en: "Real before-and-after pairs from the field — scattered paper to organized data, manual accounts to auto-computed commissions, missed renewals to automated reminders.",
    ar: "أزواج حقيقية قبل وبعد من الميدان — من الورق المتفرق إلى البيانات المنظمة، ومن الحسابات اليدوية إلى العمولات المحسوبة تلقائيًا، ومن التجديدات الفائتة إلى التذكيرات المؤتمتة.",
  },
  dragHint: {
    en: "Drag to swipe ← →",
    ar: "اسحب للتنقل ← →",
  },
  items: [
    {
      before: { en: "Scattered paper files and manual searching", ar: "ملفات ورقية متفرقة وبحث يدوي" },
      after: { en: "An organized digital file opened from the visit screen", ar: "ملف رقمي منظم يُفتح من شاشة الزيارة" },
      tag: { en: "AntA Care", ar: "أنتا كير" },
    },
    {
      before: { en: "Relying on what the patient remembers", ar: "الاعتماد على ما يتذكره المريض" },
      after: { en: "Visit and test history saved and linked to the file", ar: "تاريخ الزيارات والفحوصات محفوظ ومرتبط بالملف" },
      tag: { en: "AntA Care", ar: "أنتا كير" },
    },
    {
      before: { en: "An unmanaged waiting queue", ar: "طابور انتظار غير منظم" },
      after: { en: "A queue per exam room and one-tap next-patient call", ar: "طابور لكل غرفة كشف واستدعاء المريض التالي بضغطة" },
      tag: { en: "AntA Care", ar: "أنتا كير" },
    },
    {
      before: { en: "Doctor accounts exposed or late", ar: "حسابات الأطباء مكشوفة أو متأخرة" },
      after: { en: "Commissions and profits auto-computed and protected", ar: "عمولات وأرباح محسوبة تلقائيًا ومحمية بالصلاحيات" },
      tag: { en: "AntA Care", ar: "أنتا كير" },
    },
    {
      before: { en: "Reports manually compiled at month-end", ar: "تقارير تُجمَّع يدويًا في نهاية الشهر" },
      after: { en: "Branch-level analytics and printable reports ready", ar: "تحليلات وتقارير قابلة للطباعة جاهزة لكل فرع" },
      tag: { en: "AntA Shop", ar: "أنتا شوب" },
    },
    {
      before: { en: "Licenses expiring, maintenance missed", ar: "تراخيص تنتهي وصيانة فائتة" },
      after: { en: "Automated reminders, escalations and cost reports", ar: "تذكيرات وتصعيد وتقارير تكاليف مؤتمتة" },
      tag: { en: "AntA Fleet", ar: "أنتا فليت" },
    },
    {
      before: { en: "Rental units tracked across scattered spreadsheets", ar: "وحدات إيجار تُتابع في جداول متفرقة" },
      after: { en: "Bookings, check-in/out, contracts, utilities — one system", ar: "حجوزات، تسجيل دخول/خروج، عقود، مرافق — نظام واحد" },
      tag: { en: "AntA Rental Manager", ar: "أنتا رنتل مانجر" },
    },
    {
      before: { en: "Employee files in folders and drawers", ar: "ملفات الموظفين في أدرة وأدراج" },
      after: { en: "Digital archive, ATS, vacation planner, renewals", ar: "أرشيف رقمي، تتبع متقدم، مخطط إجازات، تجديدات" },
      tag: { en: "AntA HR", ar: "أنتا إتش آر" },
    },
  ],
};

export const STICKY_CTA = {
  label: { en: "Book a Demo", ar: "احجز عرضًا تجريبيًا" },
  hint: {
    en: "Free · 6 locations · No hidden fees",
    ar: "مجاني · 6 مواقع · بلا رسوم خفية",
  },
};

export const BRAND_BANNER_FIT = {
  // Tagline above the bold banner line
  pretitle: { en: "ANTHA MANIFESTO", ar: "بيان أنتا" },
  banner: {
    en: "ALL IS ABOUT YOU, ALL IS AROUND YOU",
    ar: "كل شيء من أجلك، وكل شيء حولك",
  },
  brand: { en: "AntA", ar: "أنتا" },
  post: {
    en: "Own the code. Own the data. Own the operations.",
    ar: "امتلك الكود. امتلك البيانات. امتلك العمليات.",
  },
};

