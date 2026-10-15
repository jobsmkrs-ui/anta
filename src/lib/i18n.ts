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
    ar: "حلول مرونة معرفة الآلات",
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
    en: "EVERYTHING IS ABOUT YOU, EVERYTHING IS AROUND YOU",
    ar: "كل شيء من أجلك، وكل شيء حولك",
    brand: { en: "AntA", ar: "أنتا" },
  },
  mission: {
    en: "To give businesses and individuals software they fully own: their code, their data and their operations, protected by offline security and empowered by online intelligence.",
    ar: "نمنح الشركات والأفراد برمجيات يملكونها بالكامل: شيفرتها وبياناتها وتشغيلها، محميةً بأمان يعمل دون اتصال، ومدعومةً بذكاء متاح عبر الإنترنت عند الحاجة.",
  },
  vision: {
    en: "A region where every clinic, shop, fleet, HR team, home and rental business runs on resilient systems that never depend on someone else's servers to keep working.",
    ar: "منطقة تعمل فيها كل عيادة ومتجر وأسطول وإدارة موارد بشرية ومنزل ونشاط تأجير على أنظمة مرنة، لا تعتمد على خوادم الآخرين لتواصل العمل.",
  },
  email: "anta.info@aol.com",
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
  { id: "contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export const HERO = {
  headline: { en: "Own your code. Own your data.", ar: "امتلك كودك. امتلك بياناتك." },
  headlineAccent: { en: "Own your data.", ar: "امتلك بياناتك." },
  sub: {
    en: "AntA by MK Technologies — smart management systems that run offline, stay secure, and get smarter online.",
    ar: "أنتا من إم كيه تكنولوجيز — أنظمة إدارة ذكية تعمل دون إنترنت، وتحمي بياناتك، وتزداد ذكاءً عند الاتصال بالإنترنت.",
  },
  ctaPrimary: { en: "Explore Solutions", ar: "استكشف الحلول" },
  ctaSecondary: { en: "Request a Demo", ar: "اطلب عرضًا تجريبيًا" },
  ctaSpecs: { en: "Request Specs", ar: "اطلب المواصفات" },
  intro: {
    en: "Most software rents your own business back to you. AntA does the opposite: systems hosted on your own infrastructure, data stored locally, and operations that keep running when the internet doesn't. When you want intelligence, analytics and remote access, switch online. You decide.",
    ar: "معظم البرمجيات تؤجّر لك عملك نفسه. أنتا تفعل العكس: أنظمة تُستضاف على بنيتك التحتية، وتُخزَّن بياناتها محليًا، وتواصل العمل حتى لو انقطع الإنترنت. وحين تريد التحليلات الذكية والوصول عن بُعد، فعّل الاتصال بالإنترنت. القرار قرارك.",
  },
  pillars: [
    {
      title: { en: "Own it", ar: "امتلكه" },
      body: {
        en: "Your code and your data stay yours. No vendor lock-in, no rental access, no surprises.",
        ar: "الكود والبيانات ملكك. لا ارتباط بمورّد واحد، ولا وصول بالإيجار، ولا مفاجآت.",
      },
    },
    {
      title: { en: "Secure it", ar: "أمّنه" },
      body: {
        en: "Offline-first architecture keeps sensitive data on your premises — and out of someone else's cloud.",
        ar: "بنية تعمل دون اتصال أولًا تُبقي البيانات الحساسة داخل منشأتك، بعيدًا عن سحابة الآخرين.",
      },
    },
    {
      title: { en: "Grow it", ar: "نمِّه" },
      body: {
        en: "Online intelligence adds analytics, reminders and integrations when you need them.",
        ar: "ذكاء متصل بالإنترنت يضيف التحليلات والتذكيرات والتكامل مع الأنظمة الأخرى عند الحاجة.",
      },
    },
  ],
  marquee: [
    { en: "Works 100% offline", ar: "يعمل 100% دون إنترنت" },
    { en: "Unlimited users", ar: "مستخدمون بلا حدود" },
    { en: "Up to 6 locations free", ar: "حتى 6 مواقع مجانًا" },
    { en: "No hidden fees", ar: "بلا رسوم خفية" },
    { en: "Built-in workflows", ar: "مسارات عمل مدمجة" },
    { en: "Built for the region", ar: "مصمَّم للمنطقة" },
    { en: "Arabic-first", ar: "العربية أولًا" },
    { en: "Owner-controlled", ar: "تحت سيطرة المالك" },
  ],
};

export const ABOUT = {
  tag: { en: "About", ar: "من نحن" },
  title: { en: "Resilient by design, owner-controlled by principle", ar: "مرنة بالتصميم، وبيد مالكها بالمبدأ" },
  body1: {
    en: "MK Technologies, short for Machine Knowledge Resilience Solutions, exists to make business software resilient and owner-controlled. We believe organizations should never lose access to their systems or their data because of a lost connection, a lapsed subscription or a vendor's decision. That belief shaped AntA, the Adaptive Network for Technology and Automation: software that works offline, protects data locally and uses online intelligence only when you choose.",
    ar: "تأسست إم كيه تكنولوجيز، وهي اختصار لـ«حلول مرونة معرفة الآلات»، لتجعل برمجيات الأعمال مرنة وتحت سيطرة مالكها. نؤمن بأن المؤسسات يجب ألا تفقد وصولها إلى أنظمتها أو بياناتها بسبب انقطاع الاتصال أو انتهاء اشتراك أو قرار من مورّد. ومن هذا الإيمان وُلدت أنتا (الشبكة التكيّفية للتقنية والأتمتة): برمجيات تعمل دون إنترنت، وتحمي البيانات محليًا، ولا تستخدم الذكاء عبر الإنترنت إلا عندما تختار أنت.",
  },
  body2: {
    en: "From clinics and retail stores to vehicle fleets, HR departments, private homes and rental businesses, AntA turns day-to-day operations into organized, trackable and measurable workflows, with no hidden fees and no artificial limits. Every AntA solution runs locally first, then connects online when you want intelligence, remote access or integration — never the other way around.",
    ar: "من العيادات ومتاجر التجزئة إلى أساطيل المركبات وإدارات الموارد البشرية والمنازل الخاصة وأنشطة التأجير، تحوّل أنتا العمليات اليومية إلى مسارات عمل منظمة وقابلة للتتبع والقياس، دون رسوم خفية ودون قيود مصطنعة. يعمل كل حل من حلول أنتا محليًا أولًا، ثم يتصل بالإنترنت عندما تريد الذكاء أو الوصول عن بُعد أو التكامل مع أنظمة أخرى — وليس العكس أبدًا.",
  },
  stats: [
    { value: "100%", label: { en: "Offline capable", ar: "يعمل دون اتصال" } },
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
      en: "An Arabic-first smart ecosystem for clinics and medical centers. AntA Care rethinks how a clinic runs: less repetitive admin work, a faster patient journey and protected sensitive information. It brings together complete patient records, organized appointments and queues, accurate invoicing, decision-ready reports, and role-based permissions that protect your data.",
      ar: "منظومة ذكية للعيادات والمراكز الطبية، عربية أولًا. تعيد أنتا كير تنظيم سير العمل في العيادة: عمل إداري متكرر أقل، ورحلة مريض أسرع، ومعلومات حساسة محمية. تجمع بين سجل مريض متكامل، ومواعيد وطابور منظمين، وفواتير دقيقة، وتقارير جاهزة لدعم القرار، وصلاحيات قائمة على الأدوار تحمي بياناتك.",
    },
    features: [
      { en: "Complete patient file — visits, history, diagnoses, medications, labs, imaging", ar: "ملف مريض متكامل — الزيارات والتاريخ المرضي والتشخيصات والأدوية والتحاليل والأشعة" },
      { en: "Appointments and organized queue per exam room", ar: "مواعيد وطابور منظم لكل غرفة كشف" },
      { en: "Accurate invoicing, treasury, and doctor commissions", ar: "فواتير دقيقة وخزينة وعمولات أطباء" },
      { en: "Family linking for medically related members", ar: "ربط أفراد الأسرة طبيًا عند الحاجة" },
      { en: "Multi-branch management with branch-level identity", ar: "إدارة متعددة الفروع مع هوية مستقلة لكل فرع" },
      { en: "Role-based permissions that protect sensitive financial data", ar: "صلاحيات قائمة على الأدوار تحمي البيانات المالية الحساسة" },
      { en: "Decision-ready reports and Excel export", ar: "تقارير جاهزة لدعم القرار وتصدير إلى Excel" },
      { en: "Arabic-first UI with full RTL support, English kept for medical terms", ar: "واجهة عربية أولًا بدعم كامل للكتابة من اليمين لليسار، مع الإبقاء على الإنجليزية للمصطلحات الطبية" },
    ],
    icon: "stethoscope",
    accent: "from-emerald-400 to-teal-700",
    signature: {
      en: "Multi-branch clinic groups that need patient data, pharmacy, queues and finances in one locally hosted system.",
      ar: "المجموعات الطبية متعددة الفروع التي تحتاج بيانات المرضى والصيدلية والطابور والحسابات المالية في نظام واحد مستضاف محليًا.",
    },
  },
  {
    id: "shop",
    slug: "anta-shop",
    name: { en: "AntA Shop", ar: "أنتا شوب" },
    tagline: { en: "POS and Retail Management", ar: "نقاط البيع وإدارة التجزئة" },
    description: {
      en: "A clothing-retail ERP and POS built from 8 connected modules: Purchases, Inventory (category → subcategory → brand → style → SKU), POS, Customers & Loyalty, Multi-Branch & Warehouses, Finance (automatic journal entries that always balance), E-commerce Integration and Reports. Multi-entity support under one parent company, built-in Egyptian Tax Authority (ETA) e-invoicing, 10 concurrent sessions on a single local server, and no per-user fees.",
      ar: "نظام ERP ونقاط بيع لتجزئة الملابس يضم 8 وحدات متكاملة: المشتريات، والمخزون (الفئة ← الفئة الفرعية ← العلامة التجارية ← الطراز ← SKU)، ونقاط البيع، والعملاء والولاء، والفروع والمخازن، والحسابات (قيود يومية آلية متوازنة دائمًا)، وربط المتجر الإلكتروني، والتقارير. يدعم تعدد الكيانات القانونية تحت شركة أم، ويتضمن الفوترة الإلكترونية لمصلحة الضرائب المصرية (ETA)، و10 جلسات متزامنة على خادم محلي واحد، دون رسوم لكل مستخدم.",
    },
    features: [
      { en: "PUR — Purchases & suppliers: POs, receive notes, returns, supplier statements", ar: "PUR — المشتريات والموردون: أوامر الشراء، إذونات الاستلام، المرتجعات، كشوف حساب الموردين" },
      { en: "INV — Inventory hierarchy: Category → Subcategory → Brand → Style → SKU (color/size)", ar: "INV — هيكل المخزون الهرمي: الفئة ← الفئة الفرعية ← العلامة التجارية ← الطراز ← SKU (اللون/المقاس)" },
      { en: "POS — Sales & point of sale: cashier, returns, shifts, cash-up, e-invoices", ar: "POS — المبيعات ونقاط البيع: الكاشير، المرتجعات، الورديات، تسوية النقدية، الفواتير الإلكترونية" },
      { en: "CRM — Customers & loyalty programs with points, tiers and redemption", ar: "CRM — العملاء وبرامج الولاء: نقاط ومستويات واستبدال للنقاط" },
      { en: "BR — Multi-branch & multi-warehouse with independent legal entities", ar: "BR — فروع ومخازن متعددة بكيانات قانونية مستقلة" },
      { en: "FIN — Auto journal entries that must balance; P&L, ledger, treasury, trial balance", ar: "FIN — قيود يومية آلية متوازنة دائمًا؛ قائمة الدخل (الأرباح والخسائر)، دفتر الأستاذ، الخزينة، ميزان المراجعة" },
      { en: "ECM — E-commerce site integration via JSON API (X-API-Key header)", ar: "ECM — ربط المتجر الإلكتروني عبر JSON API (ترويسة X-API-Key)" },
      { en: "RPT — Daily dashboard: sales, invoices, average invoice, top 5 SKUs, low-stock alerts", ar: "RPT — لوحة يومية: المبيعات، الفواتير، متوسط الفاتورة، أعلى 5 أصناف، تنبيهات نقص المخزون" },
      { en: "ETA e-invoicing (Egyptian Tax Authority) with pending/rejected status tracking", ar: "الفوترة الإلكترونية لمصلحة الضرائب المصرية (ETA) مع متابعة حالة الفاتورة: معلّقة / مرفوضة" },
      { en: "RBAC + PIN overrides — Super Admin / Company Manager / Branch Manager / Cashier", ar: "الصلاحيات حسب الدور + تجاوز برقم PIN — مدير عام النظام / مدير الشركة / مدير الفرع / كاشير" },
      { en: "10 concurrent sessions on a local server (VPN access, no per-device install)", ar: "10 جلسات متزامنة على خادم محلي (وصول عبر VPN، دون تثبيت على كل جهاز)" },
    ],
    icon: "shopping-cart",
    accent: "from-teal-400 to-emerald-600",
    signature: {
      en: "Retail chains and multi-branch operators who want one cashier-to-ledger system with instant P&L.",
      ar: "سلاسل التجزئة والمشغّلون متعددو الفروع الذين يريدون نظامًا واحدًا يربط الكاشير بدفتر الأستاذ، مع تقرير أرباح وخسائر فوري.",
    },
  },
  {
    id: "fleet",
    slug: "anta-fleet",
    name: { en: "AntA Fleet", ar: "أنتا فليت" },
    tagline: { en: "Fleet Management", ar: "إدارة الأساطيل" },
    description: {
      en: "An integrated Fleet Management System (FMS) covering 11 core modules and 13 automated workflows — from Vehicle Master Cards and Driver Management to Workshop & Spare Parts, License & Document Tracking, GPS Trip Reports, Traffic Violations, Fuel, Tire & Battery, and an Executive Dashboard. Built for mixed fleets: personal, business and transport vehicles, together with their drivers.",
      ar: "نظام متكامل لإدارة الأسطول (FMS) يغطي 11 وحدة أساسية و13 مسار عمل آليًا — بدءًا من بطاقة المركبة الرئيسية وإدارة السائقين، مرورًا بالورشة وقطع الغيار، وتتبع التراخيص والمستندات، وتقارير رحلات GPS، والمخالفات المرورية، والوقود، والإطارات والبطاريات، وصولًا إلى لوحة المؤشرات التنفيذية. مصمَّم للأساطيل المختلطة: المركبات الشخصية ومركبات الأعمال ومركبات النقل مع طاقم سائقيها.",
    },
    features: [
      { en: "Vehicle & Driver Master Cards with full specs, history and documents", ar: "بطاقة رئيسية لكل مركبة وسائق تضم المواصفات الكاملة والتاريخ والمستندات" },
      { en: "Driver Assignment Orders + Daily Driver Check-in/Check-out", ar: "أوامر تكليف السائقين + تسجيل حضور وانصراف يومي للسائق" },
      { en: "Maintenance & Workshop: request, reception, work order, handover, external maintenance", ar: "الصيانة والورشة: طلب الصيانة، الاستقبال، أمر الشغل، التسليم، الصيانة الخارجية" },
      { en: "Warehouse: item stock card, defective stock sales, spare parts dispatch authorization", ar: "المخازن: بطاقة الصنف، بيع المخزون التالف، إذن صرف قطع الغيار" },
      { en: "License & Document Management with expiry tracking and renewal workflows", ar: "إدارة التراخيص والمستندات مع تتبع تواريخ الانتهاء ومسارات التجديد" },
      { en: "GPS Tracking & Trip Records with route, time and distance capture", ar: "تتبع GPS وسجلات الرحلات مع تسجيل المسار والوقت والمسافة" },
      { en: "Traffic Violation Registry with driver/vehicle linkage and payment status", ar: "سجل المخالفات المرورية مع ربطها بالسائق والمركبة ومتابعة حالة السداد" },
      { en: "13 automated workflows (WF-01 to WF-13): license renewals, periodic maintenance, tire/battery replacement, stock reorder, ratings, fuel anomaly, accident, training, government inspection", ar: "13 مسار عمل آليًا (WF-01 إلى WF-13): تجديد التراخيص، الصيانة الدورية، استبدال الإطارات والبطاريات، إعادة طلب المخزون، التقييمات، رصد الشذوذ في استهلاك الوقود، الحوادث، التدريب، التفتيش الحكومي" },
      { en: "Executive Dashboard with operational cost reports per vehicle and fleet-wide", ar: "لوحة تنفيذية بتقارير تكاليف التشغيل لكل مركبة وعلى مستوى الأسطول" },
      { en: "Driver Mobile App (APK) for trip ratings, feedback and check-in", ar: "تطبيق جوال للسائق (APK) لتقييم الرحلات وإرسال الملاحظات وتسجيل الحضور" },
      { en: "Fuel, Accident, Tire & Battery, Supplier, and Driver Training & Competency modules", ar: "وحدات الوقود والحوادث والإطارات والبطاريات والموردين وتدريب السائقين وكفاءتهم" },
    ],
    icon: "truck",
    accent: "from-slate-400 to-slate-600",
    signature: {
      en: "Logistics and delivery fleets that can't afford to miss a renewal, a maintenance window, or a driver escalation.",
      ar: "أساطيل النقل والتوصيل التي لا تحتمل تفويت تجديد أو موعد صيانة أو تصعيدًا يخص أحد السائقين.",
    },
  },
  {
    id: "rental",
    slug: "anta-rental",
    name: { en: "AntA Rental Manager", ar: "أنتا رينتال مانجر" },
    tagline: { en: "Rental Units & Booking Management", ar: "إدارة الوحدات الإيجارية والحجوزات" },
    description: {
      en: "A dual-mode property management system. Mode 1 — Residential Compound Management: maintenance fund (revenues, expenses, balance), per-unit dues tracking (monthly, semi-annual, annual or one-off, with automatic increments), late-payment alerts, polls and surveys, and a services directory. Mode 2 — Private Unit (Villa/Chalet) Management: multiple units under one account, a hierarchical structure builder (rooms → contents), per-item warranty tracking, smart periodic maintenance with a color-coded dashboard (red = overdue, yellow = due soon, green = scheduled), and expense analytics with pie/bar charts and period comparison. All data lives under the unit, not the person.",
      ar: "نظام ذكي لإدارة العقارات بنمطين. النمط الأول — إدارة التجمع السكني: صندوق الصيانة (الإيرادات والمصروفات والرصيد)، ومتابعة مستحقات كل وحدة (شهرية أو نصف سنوية أو سنوية أو غير دورية، مع زيادة تلقائية)، وتنبيهات التأخر في السداد، واستطلاعات الرأي، ودليل الخدمات. النمط الثاني — إدارة الوحدة الخاصة (فيلا/شاليه): وحدات متعددة تحت حساب واحد، ومنشئ هيكل هرمي (الغرف ← المحتويات)، وتتبع الضمان لكل عنصر، وصيانة دورية ذكية بلوحة ملونة (أحمر = متأخر، أصفر = قريب، أخضر = مجدول)، وتحليلات للمصروفات بمخططات دائرية وأعمدة ومقارنة بين الفترات. جميع البيانات مرتبطة بالوحدة لا بالشخص.",
    },
    features: [
      { en: "Two modes: Residential Compound OR Private Unit (Villa/Chalet)", ar: "نمطان: التجمع السكني أو الوحدة الخاصة (فيلا/شاليه)" },
      { en: "Maintenance fund: revenues + expenses + positive/negative balance tracking", ar: "صندوق الصيانة: الإيرادات والمصروفات ومتابعة الرصيد (موجب/سالب)" },
      { en: "Per-unit dues (monthly/semi-annual/annual/one-off) with automatic increments", ar: "مستحقات لكل وحدة (شهرية/نصف سنوية/سنوية/غير دورية) مع زيادة تلقائية" },
      { en: "Late-payment auto-alerts + owner/manager in-app notifications", ar: "تنبيهات تلقائية بالتأخر في السداد + إشعارات داخل التطبيق للمالك/المدير" },
      { en: "Polls & surveys: target all / owners only / managers only", ar: "استطلاعات رأي: موجَّهة للجميع / للملاك فقط / للمديرين فقط" },
      { en: "Services directory: restaurants, technicians, schools (Admin-managed)", ar: "دليل الخدمات: مطاعم، فنيون، مدارس (يديره المسؤول)" },
      { en: "Hierarchical structure builder: rooms → contents with name/model/qty/install date", ar: "منشئ هيكل هرمي: الغرف ← المحتويات بالاسم والموديل والكمية وتاريخ التركيب" },
      { en: "Per-item warranty tracking with expiry alerts", ar: "تتبع الضمان لكل عنصر مع تنبيهات قرب الانتهاء" },
      { en: "Smart periodic maintenance with color-coded dashboard (red/yellow/green)", ar: "صيانة دورية ذكية بلوحة ملونة (أحمر/أصفر/أخضر)" },
      { en: "Expense analytics: pie/bar charts, period comparison, top spending items", ar: "تحليلات المصروفات: مخططات دائرية وأعمدة، مقارنة بين الفترات، أعلى بنود الإنفاق" },
      { en: "WhatsApp recovery code for password reset + Admin activate/deactivate", ar: "استعادة كلمة المرور برمز يصل عبر واتساب + تفعيل/تعطيل الحسابات بواسطة المسؤول" },
    ],
    icon: "building",
    accent: "from-emerald-500 to-teal-800",
    signature: {
      en: "Short-term and long-term rental businesses — apartments, villas, offices, vacation homes — run end to end.",
      ar: "أنشطة التأجير قصيرة وطويلة الأجل — شقق وفيلات ومكاتب وبيوت للمصيف — تُدار من البداية إلى النهاية.",
    },
  },
  {
    id: "home",
    slug: "anta-home",
    name: { en: "AntA Home", ar: "أنتا هوم" },
    tagline: { en: "Smart Home Management", ar: "إدارة المنزل الذكي" },
    description: {
      en: "Manage your home like a well-run organization. AntA Home tracks staff, scheduled maintenance, warranties, stock, seasonal checklists and costs — all in one secure, locally hosted place.",
      ar: "أدر منزلك كما تُدار المؤسسات الناجحة. تتابع أنتا هوم العاملين بالمنزل والصيانة المجدولة والضمانات والمخزون وقوائم المراجعة الموسمية والتكاليف — كل ذلك في مكان واحد آمن ومستضاف محليًا.",
    },
    features: [
      { en: "Household staff and employees", ar: "طاقم العاملين بالمنزل" },
      { en: "Recurring and scheduled maintenance", ar: "الصيانة الدورية والمجدولة" },
      { en: "Device warranties", ar: "ضمانات الأجهزة" },
      { en: "Stock and storage", ar: "المخزون والتخزين" },
      { en: "Regular and seasonal checklists", ar: "قوائم مراجعة دورية وموسمية" },
      { en: "Cost tracking reports", ar: "تقارير تتبع التكاليف" },
      { en: "Smart maintenance and repair reporting", ar: "تقارير ذكية للصيانة والإصلاح" },
    ],
    icon: "home",
    accent: "from-zinc-400 to-zinc-600",
    signature: {
      en: "Households that operate at the scale of a small business — staff, vehicles, appliances, recurring expenses.",
      ar: "الأسر التي تدير منزلها بحجم نشاط تجاري صغير — عاملون ومركبات وأجهزة ومصروفات متكررة.",
    },
  },
  {
    id: "car",
    slug: "anta-car",
    name: { en: "AntA Car", ar: "أنتا كار" },
    tagline: { en: "Private Car Management", ar: "إدارة السيارات الخاصة" },
    description: {
      en: "Your own interactive garage. AntA Car tracks maintenance, mileage, tires, batteries, violations and renewals across every vehicle you own — with cost reports that show what each car actually costs to run.",
      ar: "مرآبك الخاص التفاعلي. تتابع أنتا كار الصيانة وقراءات عدّاد الكيلومترات والإطارات والبطاريات والمخالفات والتجديدات لكل سيارة تملكها — مع تقارير تكاليف تكشف كم تكلّفك كل سيارة فعليًا في التشغيل.",
    },
    features: [
      { en: "Track and manage all your cars and assign drivers", ar: "متابعة جميع سياراتك وإدارتها وتعيين السائقين" },
      { en: "Maintenance, mileage (km) and GPS tracking", ar: "الصيانة وقراءات العدّاد (بالكيلومتر) وتتبع GPS" },
      { en: "Tires and batteries", ar: "الإطارات والبطاريات" },
      { en: "Violations and license renewals", ar: "المخالفات وتجديد التراخيص" },
      { en: "Periodic maintenance", ar: "الصيانة الدورية" },
      { en: "Cost reports per vehicle", ar: "تقارير التكاليف لكل سيارة" },
    ],
    icon: "car",
    accent: "from-emerald-300 to-teal-500",
    signature: {
      en: "Individuals and families with multiple vehicles and drivers who want one private garage that never forgets a date.",
      ar: "الأفراد والأسر الذين يملكون عدة سيارات ويستعينون بعدة سائقين ويريدون مرآبًا خاصًا واحدًا لا ينسى أي موعد.",
    },
  },
  {
    id: "hr",
    slug: "anta-hr",
    name: { en: "AntA HR", ar: "أنتا إتش آر" },
    tagline: { en: "HR Operations Solutions", ar: "حلول تشغيل الموارد البشرية" },
    description: {
      en: "A five-module HR operations suite covering the full employee life cycle. Document Creator (12 legal templates, Word/PDF export, bulk generation from Excel, bilingual Arabic/English RTL with Tafqit). Renewals Workflow (multi-level approvals L1–L5, delegation, escalation, probation, birthday emails, audit trail). Annual Leave Planner (10,000 employees, auto-distributes 59,236 transactions in 0.43 seconds, blocked-days register, 35% max-on-leave rule, 6-consecutive-day guarantee). Employee Assets Book (6-stage lifecycle, multi-role clearance, auto-depreciation, SMTP notifications). MK Archive System (inline scanned documents, rules-driven checklist by gender × job title, 5-year external archive rule, document recall).",
      ar: "حزمة متكاملة لتشغيل الموارد البشرية من خمس وحدات تغطي دورة حياة الموظف كاملة. منشئ المستندات (12 قالبًا قانونيًا، تصدير إلى Word وPDF، إنشاء جماعي من Excel، ثنائي اللغة عربي/إنجليزي بدعم الكتابة من اليمين لليسار مع التفقيط). مسار التجديدات (موافقات متعددة المستويات من L1 إلى L5، تفويض، تصعيد، فترة الاختبار، رسائل أعياد الميلاد، سجل تدقيق). مخطط الإجازات السنوية (10,000 موظف، يوزّع 59,236 معاملة في 0.43 ثانية، سجل الأيام المحظورة، قاعدة حد أقصى 35% من الموظفين في الإجازة، وضمان 6 أيام عمل متتالية). سجل أصول الموظفين (دورة حياة من 6 مراحل، إخلاء طرف متعدد الأدوار، إهلاك تلقائي، إشعارات SMTP). نظام أرشيف MK (مستندات ممسوحة ضوئيًا تُعرض داخل النظام، قائمة مستندات مطلوبة وفق قواعد بحسب الجنس × المسمى الوظيفي، قاعدة الأرشيف الخارجي بعد 5 سنوات، واستدعاء المستندات).",
    },
    features: [
      { en: "Document Creator: 12 legal templates + Word-like Template Builder + 31 system fields", ar: "منشئ المستندات: 12 قالبًا قانونيًا + منشئ قوالب بواجهة شبيهة بـ Word + 31 حقلًا من حقول النظام" },
      { en: "Bulk document generation from Excel (one template, many employees, locked Word files)", ar: "إنشاء جماعي للمستندات من Excel (قالب واحد لعدة موظفين، وملفات Word محمية)" },
      { en: "Renewals Workflow: multi-level approvals L1–L5, delegation, escalation, auto-reminders", ar: "مسار التجديدات: موافقات متعددة المستويات L1–L5، تفويض، تصعيد، تذكيرات تلقائية" },
      { en: "Probation workflow: pre-eval → final eval → improvements form → HR finalize", ar: "مسار فترة الاختبار: تقييم مبدئي ← تقييم نهائي ← نموذج التحسين ← اعتماد الموارد البشرية" },
      { en: "Birthday emails: daily scheduled, manual resend for missed days", ar: "رسائل أعياد الميلاد: مجدولة يوميًا، مع إعادة إرسال يدوي للأيام الفائتة" },
      { en: "Annual Leave Planner: 10,000 employees, 0.43s auto-distribute, Egyptian holidays", ar: "مخطط الإجازات السنوية: 10,000 موظف، توزيع آلي في 0.43 ثانية، مع مراعاة الإجازات الرسمية المصرية" },
      { en: "Leave rules: 35% max on-leave, ≥6 consecutive working days, blocked-days register", ar: "قواعد الإجازات: حد أقصى 35% من الموظفين في الإجازة، و6 أيام عمل متتالية على الأقل، وسجل الأيام المحظورة" },
      { en: "Employee Assets Book: 6-stage lifecycle, multi-role clearance, auto-depreciation", ar: "سجل أصول الموظفين: دورة حياة من 6 مراحل، إخلاء طرف متعدد الأدوار، إهلاك تلقائي" },
      { en: "Asset emails: clearance task, allocation approved, return confirmed — with SMTP presets", ar: "رسائل الأصول: مهمة إخلاء الطرف، اعتماد التخصيص، تأكيد الإرجاع — مع إعدادات SMTP جاهزة" },
      { en: "MK Archive: scanned documents inline, rules by gender × job title, 5-year rule", ar: "أرشيف MK: مستندات ممسوحة ضوئيًا تُعرض داخل النظام، قواعد حسب الجنس × المسمى الوظيفي، قاعدة الـ5 سنوات" },
      { en: "Document Recall: collect one type for many employees into a dated folder + Excel report", ar: "استدعاء المستندات: جمع نوع واحد من المستندات لعدة موظفين في مجلد مؤرَّخ + تقرير Excel" },
      { en: "Arabic-normalized search (hamza, taa marbuta, diacritics) + Tafqit (salaries in words)", ar: "بحث عربي مُطبَّع (يتجاهل الفروق في الهمزات والتاء المربوطة والتشكيل) + التفقيط (كتابة الرواتب بالحروف)" },
      { en: "5 roles: System Manager / HR Manager / Payroll Officer / HR Personnel / Mobile Manager", ar: "5 أدوار: مدير النظام / مدير الموارد البشرية / مسؤول الرواتب / أخصائي الموارد البشرية / مدير تطبيق الجوال" },
    ],
    icon: "users",
    accent: "from-slate-300 to-emerald-500",
    signature: {
      en: "HR teams running contracts, leave, assets, documents and archives in one owner-controlled suite — without per-seat cloud lock-in.",
      ar: "فرق الموارد البشرية التي تدير العقود والإجازات والأصول والمستندات والأرشيف في حزمة واحدة تحت سيطرة المالك — دون الارتهان لاشتراكات سحابية تُحتسب لكل مستخدم.",
    },
  },
];

export const SPOTLIGHT = {
  tag: { en: "Spotlight · AntA Care", ar: "تحت المجهر · أنتا كير" },
  title: {
    en: "Your Time for Medicine, Not Paperwork.",
    ar: "وقتك للطب… وليس للأوراق.",
  },
  subtitle: {
    en: "AntA Care is more than clinic software. It is a complete ecosystem designed to reorganize how your clinic runs: less repetitive admin work, a faster patient journey, and protected sensitive information.",
    ar: "أنتا كير ليست مجرد برنامج لإدارة العيادات، بل منظومة متكاملة صُمّمت لإعادة تنظيم سير العمل في عيادتك: عمل إداري متكرر أقل، ورحلة مريض أسرع، ومعلومات حساسة محمية.",
  },
  philosophy: {
    title: { en: "Five verbs that define AntA Care", ar: "خمسة أفعال تلخّص أنتا كير" },
    items: [
      { word: { en: "Save", ar: "احفظ" }, target: { en: "the information", ar: "المعلومات" } },
      { word: { en: "Organize", ar: "نظّم" }, target: { en: "the operations", ar: "العمليات" } },
      { word: { en: "Protect", ar: "احمِ" }, target: { en: "the data", ar: "البيانات" } },
      { word: { en: "Speed up", ar: "سرّع" }, target: { en: "the patient journey", ar: "رحلة المريض" } },
      { word: { en: "Free", ar: "حرّر" }, target: { en: "the doctor's time", ar: "وقت الطبيب" } },
    ],
    closing: {
      en: "AntA Care doesn't promise your clinic will run itself. We promise something more realistic: work that is more organized, information that is easier to reach, data that is better protected, and time that is more valuable.",
      ar: "أنتا كير لا تعدك بأن عيادتك ستدير نفسها، لكنها تعدك بما هو أكثر واقعية: عمل أكثر تنظيمًا، ومعلومات أسهل في الوصول إليها، وبيانات أفضل حماية، ووقت أعلى قيمة.",
    },
  },
  workflow: {
    title: { en: "The patient journey, end to end", ar: "رحلة المريض من البداية إلى النهاية" },
    subtitle: {
      en: "A clear path: registration → waiting → check-in → patient file → visit → prescription/procedure → billing → check-out. Every step feeds the next.",
      ar: "مسار واضح: التسجيل ← الانتظار ← الدخول للكشف ← ملف المريض ← الزيارة ← الوصفة أو الإجراء ← المحاسبة ← إنهاء الزيارة. كل خطوة تغذّي التي تليها.",
    },
    steps: [
      { en: "Registration", ar: "التسجيل" },
      { en: "Waiting", ar: "الانتظار" },
      { en: "Check-in", ar: "الدخول للكشف" },
      { en: "Patient file", ar: "ملف المريض" },
      { en: "Visit", ar: "الزيارة" },
      { en: "Prescription / procedure", ar: "الوصفة / الإجراء" },
      { en: "Billing", ar: "المحاسبة" },
      { en: "Check-out", ar: "إنهاء الزيارة" },
    ],
  },
  highlights: {
    title: { en: "What changes with AntA Care", ar: "ما الذي يتغير مع أنتا كير" },
    items: [
      {
        title: { en: "One patient file, everything in one place", ar: "ملف مريض واحد، وكل شيء في مكان واحد" },
        body: {
          en: "Visits, history, diagnoses, medications, labs, imaging, procedures, notes, documents — doctors never start a visit from zero.",
          ar: "الزيارات والتاريخ المرضي والتشخيصات والأدوية والتحاليل والأشعة والإجراءات والملاحظات والمستندات — فلا يبدأ الطبيب أي زيارة من الصفر.",
        },
      },
      {
        title: { en: "From \"who's next?\" to an organized queue", ar: "من سؤال «مَن التالي؟» إلى طابور منظم" },
        body: {
          en: "Waiting patients, turn order, status, walk-ins, appointments and patient flow — all trackable in real time.",
          ar: "المرضى المنتظرون وترتيب الأدوار والحالة والحضور دون موعد والمواعيد وحركة المرضى — كلها قابلة للمتابعة لحظة بلحظة.",
        },
      },
      {
        title: { en: "Arabic is the core experience, not a translation", ar: "العربية هي أصل التجربة، لا مجرد ترجمة" },
        body: {
          en: "Full RTL, Arabic UI, fields, messages, reports and printing — with English kept for technical medical terms where it serves you best.",
          ar: "دعم كامل للكتابة من اليمين لليسار، وواجهة وحقول ورسائل وتقارير وطباعة بالعربية — مع الإبقاء على الإنجليزية للمصطلحات الطبية الفنية حيث يكون ذلك أنفع لك.",
        },
      },
      {
        title: { en: "Your data belongs to you alone", ar: "بيانات عيادتك ملكك وحدك" },
        body: {
          en: "Local storage, role-based permissions, and sensitive financials visible only to authorized users — never shown just because the system has it.",
          ar: "تخزين محلي، وصلاحيات قائمة على الأدوار، وبيانات مالية حساسة لا يراها إلا المستخدمون المخوَّلون — فلا تُعرض لمجرد أن النظام يحتفظ بها.",
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
    en: "Visual highlights from across the AntA suite — the AntA Care social campaign plus branded visuals for Shop, Fleet, Rental Manager, Home, Car, and HR. Filter by product to focus.",
    ar: "لمحات بصرية من مجموعة أنتا — حملة أنتا كير على وسائل التواصل الاجتماعي، إضافة إلى مواد بصرية لأنظمة أنتا شوب وفليت ورينتال مانجر وهوم وكار وإتش آر. اختر منتجًا لعرض صوره فقط.",
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
  { src: "/marketing/ANTA-Care-Post-EN-14.png", productId: "care", label: { en: "Multi-branch", ar: "تعدد الفروع" } },
  { src: "/marketing/ANTA-Care-Post-EN-16.png", productId: "care", label: { en: "Data control", ar: "التحكم في البيانات" } },
  { src: "/marketing/ANTA-Care-Post-EN-18.png", productId: "care", label: { en: "Patient journey", ar: "رحلة المريض" } },
  { src: "/marketing/ANTA-Care-Post-EN-20.png", productId: "care", label: { en: "Philosophy", ar: "الفلسفة" } },
  // Other 6 products — branded visuals
  { src: "/marketing/AntA-shop-campaign.png", productId: "shop", label: { en: "Clothing retail ERP", ar: "نظام ERP لتجزئة الملابس" } },
  { src: "/marketing/AntA-fleet-campaign.png", productId: "fleet", label: { en: "Fleet operations", ar: "عمليات الأسطول" } },
  { src: "/marketing/AntA-rental-campaign.png", productId: "rental", label: { en: "Rental properties", ar: "العقارات الإيجارية" } },
  { src: "/marketing/AntA-home-campaign.png", productId: "home", label: { en: "Smart home", ar: "المنزل الذكي" } },
  { src: "/marketing/AntA-car-campaign.png", productId: "car", label: { en: "Private garage", ar: "المرآب الخاص" } },
  // AntA HR — 12 real screenshots extracted from the 5 HR presentations:
  // Annual Leave Planner, Renewals Workflow, Employee Assets Book, HR Document Creator, MK Archive System
  { src: "/marketing/AntA-HR-leave-01-calendar.png", productId: "hr", label: { en: "Leave Planner — Calendar", ar: "مخطط الإجازات — التقويم" } },
  { src: "/marketing/AntA-HR-leave-02-dashboard.png", productId: "hr", label: { en: "Leave Planner — Dashboard", ar: "مخطط الإجازات — لوحة المؤشرات" } },
  { src: "/marketing/AntA-HR-leave-03-policy.png", productId: "hr", label: { en: "Leave Planner — Policy rules", ar: "مخطط الإجازات — قواعد السياسة" } },
  { src: "/marketing/AntA-HR-renewals-01-admin.png", productId: "hr", label: { en: "Renewals — Admin dashboard", ar: "التجديدات — لوحة المسؤول" } },
  { src: "/marketing/AntA-HR-renewals-02-config.png", productId: "hr", label: { en: "Renewals — Workflow config", ar: "التجديدات — إعداد مسار العمل" } },
  { src: "/marketing/AntA-HR-assets-01-dashboard.png", productId: "hr", label: { en: "Assets Book — Dashboard", ar: "سجل الأصول — لوحة المؤشرات" } },
  { src: "/marketing/AntA-HR-assets-02-overview.png", productId: "hr", label: { en: "Assets Book — Lifecycle overview", ar: "سجل الأصول — نظرة عامة على دورة الحياة" } },
  { src: "/marketing/AntA-HR-assets-03-clearance.png", productId: "hr", label: { en: "Assets Book — Multi-role clearance", ar: "سجل الأصول — إخلاء طرف متعدد الأدوار" } },
  { src: "/marketing/AntA-HR-docs-01-overview.png", productId: "hr", label: { en: "Document Creator — 10 sections", ar: "منشئ المستندات — 10 أقسام" } },
  { src: "/marketing/AntA-HR-docs-02-template-builder.png", productId: "hr", label: { en: "Document Creator — Template Builder", ar: "منشئ المستندات — منشئ القوالب" } },
  { src: "/marketing/AntA-HR-archive-01-overview.png", productId: "hr", label: { en: "Archive System — Overview", ar: "نظام الأرشيف — نظرة عامة" } },
  { src: "/marketing/AntA-HR-archive-02-scanned-docs.png", productId: "hr", label: { en: "Archive System — Scanned documents", ar: "نظام الأرشيف — المستندات الممسوحة ضوئيًا" } },
];

export const WHY = {
  tag: { en: "Why AntA", ar: "لماذا أنتا" },
  title: { en: "Built for the region. Designed for ownership.", ar: "مصمَّم للمنطقة. مبنيّ على الملكية." },
  subtitle: {
    en: "Six reasons organizations choose AntA over rented, cloud-only software.",
    ar: "ستة أسباب تدفع المؤسسات إلى اختيار أنتا بدلًا من البرمجيات المؤجَّرة التي تعتمد على السحابة فقط.",
  },
  reasons: [
    {
      title: { en: "Works 100% offline", ar: "يعمل 100% دون إنترنت" },
      body: {
        en: "AntA systems run locally on your own resources. The internet can drop, subscriptions can lapse, vendors can change — your operations keep going.",
        ar: "تعمل أنظمة أنتا محليًا على مواردك الخاصة. قد ينقطع الإنترنت أو ينتهي الاشتراك أو يتغير المورّد — وتستمر عملياتك دون توقف.",
      },
    },
    {
      title: { en: "Unlimited users, patients, visits and storage", ar: "مستخدمون ومرضى وزيارات ومساحة تخزين بلا حدود" },
      body: {
        en: "No per-seat pricing. No artificial caps. AntA scales with your organization, not with your invoice.",
        ar: "بلا تسعير لكل مستخدم. بلا قيود مصطنعة. تنمو أنتا مع مؤسستك، لا مع فاتورتك.",
      },
    },
    {
      title: { en: "Up to 6 locations free of charge", ar: "حتى 6 مواقع مجانًا" },
      body: {
        en: "Host AntA on your own infrastructure and give up to six locations access at no additional cost. Branch out without billing out.",
        ar: "استضف أنتا على مواردك الخاصة وامنح الوصول إلى ستة مواقع دون أي تكلفة إضافية. توسّع في الفروع دون أن تتوسع الفواتير.",
      },
    },
    {
      title: { en: "No hidden fees", ar: "بلا رسوم خفية" },
      body: {
        en: 'The price you agree to is the price you pay. No setup surprises, no premium modules, no "contact sales" walls in front of features.',
        ar: 'السعر الذي تتفق عليه هو ما تدفعه. لا مفاجآت عند التركيب، ولا وحدات مميزة بمقابل إضافي، ولا حواجز «تواصل مع المبيعات» أمام المزايا.',
      },
    },
    {
      title: { en: "Built-in workflows, reminders and reports", ar: "مسارات عمل وتذكيرات وتقارير مدمجة" },
      body: {
        en: "Reminders, renewals, escalations and approvals are part of the platform. You don't buy them, configure them from scratch or wait for a vendor to add them.",
        ar: "التذكيرات والتجديدات والتصعيد والموافقات جزء من المنصة. لا تحتاج إلى شرائها أو إعدادها من الصفر، ولا إلى انتظار المورّد ليضيفها.",
      },
    },
    {
      title: { en: "Built for the region", ar: "مصمَّم للمنطقة" },
      body: {
        en: "Arabic-first UI with full RTL support, designed around Egyptian and MEA business realities — workflows, currencies, social insurance, language and operations that match how the region actually works.",
        ar: "واجهة عربية أولًا بدعم كامل للكتابة من اليمين لليسار، مصمَّمة وفق واقع الأعمال في مصر ومنطقة الشرق الأوسط وأفريقيا — مسارات عمل وعملات وتأمينات اجتماعية ولغة وعمليات تتوافق مع طريقة العمل الفعلية في المنطقة.",
      },
    },
  ],
};

export const ROADMAP = {
  tag: { en: "Coming Soon", ar: "قريبًا" },
  title: { en: "What we're building next", ar: "ما نبنيه تاليًا" },
  subtitle: {
    en: "Upcoming modules for AntA HR and beyond — designed to plug into the same resilient, owner-controlled core.",
    ar: "وحدات قادمة لأنظمة أنتا للموارد البشرية وما بعدها — مصمَّمة لتتصل بالنواة المرنة نفسها الخاضعة لسيطرة المالك.",
  },
  items: [
    { en: "Job Evaluation Tool", ar: "أداة تقييم الوظائف" },
    {
      en: "Compensation and Benefits Management Portal: benefits, salary structure, grading, increases and promotions",
      ar: "بوابة إدارة التعويضات والمزايا: المزايا وهيكل الرواتب والدرجات الوظيفية والزيادات والترقيات",
    },
    { en: "Performance Evaluation Tool", ar: "أداة تقييم الأداء" },
    { en: "Budget and Forecast Tool", ar: "أداة الموازنات والتوقعات المالية" },
    {
      en: "Social Insurance Management Solution, including Form 2 calculation and monthly breakdown tracking",
      ar: "حل إدارة التأمينات الاجتماعية، يشمل احتساب نموذج 2 ومتابعة التوزيع الشهري",
    },
    { en: "HR ROI and Metrics Dashboard", ar: "لوحة مؤشرات الموارد البشرية والعائد على الاستثمار" },
  ],
};

export const CONTACT = {
  tag: { en: "Contact", ar: "تواصل معنا" },
  title: { en: "Let's talk.", ar: "لنتحدث." },
  body: {
    en: "Tell us about your clinic, store, fleet, HR team, rental business or home, and we'll show you how AntA fits.",
    ar: "أخبرنا عن عيادتك أو متجرك أو أسطولك أو فريق الموارد البشرية لديك أو نشاط التأجير أو منزلك، وسنوضح لك كيف تناسبك أنتا.",
  },
  emailLabel: { en: "Email us", ar: "راسلنا" },
  phoneLabel: { en: "Call us", ar: "اتصل بنا" },
  formName: { en: "Name", ar: "الاسم" },
  formCompany: { en: "Company", ar: "الشركة" },
  formEmail: { en: "Email", ar: "البريد الإلكتروني" },
  formSolution: { en: "Solution of interest", ar: "الحل الذي يهمك" },
  solutionsPlaceholder: { en: "Select a solution", ar: "اختر حلًا" },
  formMessage: { en: "Message", ar: "الرسالة" },
  formSubmit: { en: "Send message", ar: "إرسال الرسالة" },
  formSuccess: {
    en: "Thanks — we'll reply by email within one business day.",
    ar: "شكرًا لك — سنرد عليك عبر البريد الإلكتروني خلال يوم عمل واحد.",
  },
};

export const SPECS = {
  navButton: { en: "Request Specs", ar: "اطلب المواصفات" },
  footerButton: { en: "Request Product Specs", ar: "اطلب مواصفات المنتج" },
  title: { en: "Request Product Specs", ar: "اطلب مواصفات المنتج" },
  subtitle: {
    en: "Tell us a bit about you and which AntA product interests you. Our team will share the full product specifications with you by email shortly.",
    ar: "أخبرنا قليلًا عنك وعن منتج أنتا الذي يهمك، وسيرسل لك فريقنا المواصفات الكاملة للمنتج عبر البريد الإلكتروني قريبًا.",
  },
  productLabel: { en: "Product of interest", ar: "المنتج الذي يهمك" },
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
    ar: "طريقة التواصل المفضلة لديك",
  },
  contactMethods: [
    { id: "email", label: { en: "Email", ar: "بريد إلكتروني" } },
    { id: "whatsapp", label: { en: "WhatsApp", ar: "واتساب" } },
    { id: "phone", label: { en: "Phone call", ar: "مكالمة هاتفية" } },
  ],
  submit: { en: "Submit request", ar: "إرسال الطلب" },
  successTitle: { en: "Thank you!", ar: "شكرًا لك!" },
  successBody: {
    en: "Your request has been received. The full product specifications will be shared with you via email shortly.",
    ar: "تم استلام طلبك. سنرسل إليك مواصفات المنتج الكاملة عبر البريد الإلكتروني قريبًا.",
  },
  successContact: {
    en: "We'll reach out via your preferred contact method.",
    ar: "سنتواصل معك عبر طريقة التواصل المفضلة لديك.",
  },
  close: { en: "Close", ar: "إغلاق" },
  another: { en: "Submit another request", ar: "إرسال طلب آخر" },
  requiredNote: {
    en: "All fields are required.",
    ar: "جميع الحقول مطلوبة.",
  },
};

export const FOOTER = {
  tagline: {
    en: "Own your code. Own your data. Offline security with online intelligence.",
    ar: "امتلك كودك. امتلك بياناتك. أمان بلا إنترنت، وذكاء عندما تريد.",
  },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  quickLinks: { en: "Quick Links", ar: "روابط سريعة" },
  solutions: { en: "Solutions", ar: "الحلول" },
  getInTouch: { en: "Get in touch", ar: "تواصل معنا" },
  specsCtaTitle: { en: "Need the full specs?", ar: "هل تحتاج إلى المواصفات الكاملة؟" },
  specsCtaBody: {
    en: "Request product specifications for any AntA solution — our team will share them with you via email shortly.",
    ar: "اطلب مواصفات أي حل من حلول أنتا، وسيرسلها لك فريقنا عبر البريد الإلكتروني قريبًا.",
  },
};

// ============================================================
// FITNESS-STUDIO REDESIGN — additional copy
// ============================================================

export const HERO_FIT = {
  // Brand attitude — replaces some HERO copy
  badge: { en: "OFFLINE-FIRST · OWNER-CONTROLLED · ARABIC-FIRST", ar: "دون إنترنت أولًا · تحت سيطرة المالك · عربي أولًا" },
  attitude: {
    en: "Built for owners who refuse to rent the systems that run their business.",
    ar: "صُمّمت لأصحاب الأعمال الذين يرفضون استئجار الأنظمة التي تدير أعمالهم.",
  },
  reel: {
    playLabel: { en: "Play brand reel", ar: "شاهد فيديو العلامة" },
    muted: { en: "Muted", ar: "صامت" },
    unmute: { en: "Tap to unmute", ar: "اضغط لتشغيل الصوت" },
  },
  teamStripTitle: { en: "The AntA Suite · 7 Solutions", ar: "مجموعة أنتا · 7 حلول متخصصة" },
  teamStripHint: {
    en: "Scroll to explore ↓",
    ar: "اكتشف المزيد ↓",
  },
};

export const CURRICULUM = {
  tag: { en: "Solutions by Goal", ar: "الحلول حسب الهدف" },
  title: {
    en: "Organized by what you actually run.",
    ar: "مرتّبة بحسب ما تديره فعلًا.",
  },
  subtitle: {
    en: "Seven AntA systems, grouped by the goal they serve — not by departmental boundaries.",
    ar: "سبعة أنظمة من أنتا، مصنّفة بحسب الهدف الذي تخدمه — لا بحسب حدود الإدارات.",
  },
  groups: [
    {
      id: "healthcare",
      title: { en: "Healthcare", ar: "الرعاية الصحية" },
      desc: {
        en: "Clinics and medical centers — patient journey, pharmacy, queue, treasury, multi-branch.",
        ar: "العيادات والمراكز الطبية — رحلة المريض والصيدلية والطابور والخزينة وتعدد الفروع.",
      },
      productIds: ["care"],
    },
    {
      id: "commerce",
      title: { en: "Commerce & Logistics", ar: "التجارة والخدمات اللوجستية" },
      desc: {
        en: "POS, retail, multi-branch accounting, fleet operations, GPS tracking, workshops and warehouses.",
        ar: "نقاط البيع والتجزئة والمحاسبة متعددة الفروع وعمليات الأسطول وتتبع GPS والورش والمخازن.",
      },
      productIds: ["shop", "fleet"],
    },
    {
      id: "rentals",
      title: { en: "Rentals & Properties", ar: "التأجير والعقارات" },
      desc: {
        en: "Short-term or long-term rental units — bookings, check-in/out, payments, maintenance, contracts, utilities.",
        ar: "وحدات إيجارية قصيرة وطويلة الأجل — الحجوزات والدخول والخروج والمدفوعات والصيانة والعقود والمرافق.",
      },
      productIds: ["rental"],
    },
    {
      id: "people",
      title: { en: "People & Places", ar: "الأفراد والأماكن" },
      desc: {
        en: "HR life cycle, smart home operations, private car management — staff, assets, renewals, maintenance.",
        ar: "دورة حياة الموارد البشرية وتشغيل المنزل الذكي وإدارة السيارات الخاصة — الموظفون والأصول والتجديدات والصيانة.",
      },
      productIds: ["hr", "home", "car"],
    },
  ],
  flipHint: {
    en: "Hover (or tap) a card to flip it.",
    ar: "مرّر المؤشر فوق البطاقة (أو انقر عليها) لقلبها.",
  },
  signature: { en: "Signature use case", ar: "حالة الاستخدام المميزة" },
  requestCta: { en: "Request specs", ar: "اطلب المواصفات" },
};

export const COACHES = {
  tag: { en: "Specialist Solutions", ar: "حلول متخصصة" },
  title: {
    en: "Each one a specialist. All of them yours.",
    ar: "كل حل متخصص في مجاله. وكلها ملكك.",
  },
  subtitle: {
    en: "Each AntA system has a clear specialty and a signature use case. Hover over any card to see its key features.",
    ar: "لكل نظام من أنتا تخصص واضح وحالة استخدام مميزة. مرّر المؤشر فوق أي بطاقة لاستعراض أبرز مزاياه.",
  },
};

export const MEMBER_STORIES = {
  tag: { en: "Before & After", ar: "قبل وبعد" },
  title: {
    en: "What changes when you own the system.",
    ar: "ماذا يتغير عندما تملك نظامك.",
  },
  subtitle: {
    en: "Real before-and-after pairs from the field — from scattered paper to organized data, from manual accounts to auto-computed commissions, from missed renewals to automated reminders.",
    ar: "مقارنات حقيقية من الميدان بين الوضع قبل أنتا وبعدها — من الأوراق المتناثرة إلى بيانات منظمة، ومن الحسابات اليدوية إلى عمولات تُحتسب تلقائيًا، ومن التجديدات الفائتة إلى تذكيرات آلية.",
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
      after: { en: "A queue per exam room and one-tap next-patient call", ar: "طابور لكل غرفة كشف واستدعاء المريض التالي بضغطة واحدة" },
      tag: { en: "AntA Care", ar: "أنتا كير" },
    },
    {
      before: { en: "Doctor commissions calculated late or visible to everyone", ar: "حسابات الأطباء تتأخر أو يطّلع عليها الجميع" },
      after: { en: "Commissions and profits auto-computed and protected", ar: "عمولات وأرباح تُحتسب تلقائيًا وتحميها الصلاحيات" },
      tag: { en: "AntA Care", ar: "أنتا كير" },
    },
    {
      before: { en: "Reports manually compiled at month-end", ar: "تقارير تُجمَّع يدويًا في نهاية الشهر" },
      after: { en: "Branch-level analytics and printable reports ready", ar: "تحليلات على مستوى كل فرع وتقارير قابلة للطباعة جاهزة دائمًا" },
      tag: { en: "AntA Shop", ar: "أنتا شوب" },
    },
    {
      before: { en: "Licenses expiring, maintenance missed", ar: "تراخيص تنتهي دون تجديد وصيانة تفوت مواعيدها" },
      after: { en: "Automated reminders, escalations and cost reports", ar: "تذكيرات وتصعيد وتقارير تكاليف آلية" },
      tag: { en: "AntA Fleet", ar: "أنتا فليت" },
    },
    {
      before: { en: "Rental units tracked across scattered spreadsheets", ar: "وحدات إيجارية تُتابع عبر جداول بيانات متفرقة" },
      after: { en: "Bookings, check-in/out, contracts, utilities — one system", ar: "الحجوزات والدخول والخروج والعقود والمرافق — في نظام واحد" },
      tag: { en: "AntA Rental Manager", ar: "أنتا رينتال مانجر" },
    },
    {
      before: { en: "Employee files in folders and drawers", ar: "ملفات الموظفين في مجلدات وأدراج" },
      after: { en: "Digital archive, applicant tracking, leave planner, renewals", ar: "أرشيف رقمي، ونظام تتبع المتقدمين للوظائف، ومخطط إجازات، وتجديدات" },
      tag: { en: "AntA HR", ar: "أنتا إتش آر" },
    },
  ],
};

export const STICKY_CTA = {
  label: { en: "Book a Demo", ar: "احجز عرضًا تجريبيًا" },
  hint: {
    en: "Up to 6 locations free · No hidden fees",
    ar: "حتى 6 مواقع مجانًا · بلا رسوم خفية",
  },
};

export const BRAND_BANNER_FIT = {
  // Tagline above the bold banner line
  pretitle: { en: "ANTA MANIFESTO", ar: "بيان أنتا" },
  banner: {
    en: "EVERYTHING IS ABOUT YOU, EVERYTHING IS AROUND YOU",
    ar: "كل شيء من أجلك، وكل شيء حولك",
  },
  brand: { en: "AntA", ar: "أنتا" },
  post: {
    en: "Own the code. Own the data. Own the operations.",
    ar: "امتلك الكود. امتلك البيانات. امتلك العمليات.",
  },
};
