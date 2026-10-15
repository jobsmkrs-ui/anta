#!/usr/bin/env python3
"""
Generate 14 separate-language PDFs (7 EN + 7 AR) for AntA by MK Technologies.
Each PDF is a single-language creative-flow document (no mixed EN+AR).
Uses Playwright via html2pdf-next.js.
"""

import os
import shutil
import subprocess
from pathlib import Path

# ----------------------------------------------------------------------------
# AntA Care content (rich, drawn from the marketing pack)
# ----------------------------------------------------------------------------

CARE = {
    "slug": "AntA-Care",
    "name": "AntA Care",
    "name_ar": "أنتا كير",
    "tagline_en": "Clinic and Medical Center Management",
    "tagline_ar": "إدارة العيادات والمراكز الطبية",
    "hero_en": "Your Time for Medicine,\nNot Paperwork.",
    "hero_ar": "وقتك للطبيب…\nوليس للأوراق.",
    "sub_en": "AntA Care is not just another clinic software. It is a complete ecosystem designed to reorganize how your clinic runs: less repeated admin work, a faster patient journey, and protected sensitive information.",
    "sub_ar": "أنتا كير ليست مجرد برنامج لإدارة العيادات. إنها منظومة كاملة صُممت لإعادة تنظيم طريقة عمل عيادتك: أعمال إدارية متكررة أقل، رحلة مريض أسرع، ومعلومات حساسة محمية.",
    "desc_en": "AntA Care is an Arabic-first smart ecosystem for clinics and medical centers. Complete patient records, organized appointments & queues, accurate invoicing, decision-ready reports, and role-based permissions that protect your data. It works 100% offline, stores patient data locally, and lets you host it on your own resources with access for up to 6 locations free of charge.",
    "desc_ar": "أنتا كير منظومة عربية ذكية أولًا للعيادات والمراكز الطبية. سجل مريض متكامل، مواعيد وطوابير منظمة، فواتير دقيقة، تقارير جاهزة للقرار، وصلاحيات قائمة على الدور تحمي بياناتك. يعمل 100% دون إنترنت، ويحفظ بيانات المرضى محليًا، ويُستضاف على مواردك الخاصة مع وصول لـ 6 مواقع مجانًا.",
    "philosophy_en": [
        ("Save", "the information"),
        ("Organize", "the operations"),
        ("Protect", "the data"),
        ("Speed up", "the patient journey"),
        ("Free", "the doctor's time"),
    ],
    "philosophy_ar": [
        ("احفظ", "المعلومات"),
        ("نظّم", "العمليات"),
        ("احمِ", "البيانات"),
        ("أسرّع", "رحلة المريض"),
        ("حرّر", "وقت الطبيب"),
    ],
    "philosophy_closing_en": "AntA Care doesn't promise your clinic will run itself. We promise something more realistic: work that is more organized, information that is easier to reach, data that is better protected, and time that is more valuable.",
    "philosophy_closing_ar": "أنتا كير لا تعدك بأن العيادة ستعمل وحدها… بل تعدك بشيء أكثر واقعية: أن تجعل العمل أكثر تنظيمًا، والمعلومات أكثر سهولة في الوصول، والبيانات أكثر حماية، والوقت أكثر قيمة.",
    "features_en": [
        "Complete patient file — visits, history, diagnoses, medications, labs, imaging",
        "Family linking for medically-related members",
        "Appointments and organized queue per exam room",
        "Accurate invoicing, treasury, and doctor commissions",
        "Role-based permissions that protect sensitive financial data",
        "Multi-branch management with branch-level identity",
        "Decision-ready reports with Excel export",
        "Arabic-first UI with full RTL; English kept for medical terms",
        "Unlimited visits, patients, doctors, branches and storage — no hidden fees",
    ],
    "features_ar": [
        "ملف مريض متكامل — زيارات، تاريخ مرضي، تشخيصات، أدوية، تحاليل وأشعة",
        "ربط أفراد الأسرة طبيًا عند الحاجة",
        "مواعيد وطابور منظم لكل غرفة كشف",
        "فواتير دقيقة، خزينة، وعمولات الأطباء",
        "صلاحيات قائمة على الدور تحمي البيانات المالية الحساسة",
        "إدارة متعددة الفروع بهوية كل فرع",
        "تقارير جاهزة للقرار مع تصدير Excel",
        "واجهة عربية أولًا بـ RTL كامل؛ الإنجليزية للمصطلحات الطبية",
        "زيارات ومرضى وأطباء وفروع ومساحة تخزين بلا حدود — دون رسوم خفية",
    ],
    "workflow_en": [
        "Registration",
        "Waiting",
        "Check-in",
        "Patient file",
        "Visit",
        "Prescription / procedure",
        "Billing",
        "Check-out",
    ],
    "workflow_ar": [
        "تسجيل",
        "انتظار",
        "دخول",
        "ملف المريض",
        "زيارة",
        "وصفة / إجراء",
        "حساب",
        "انتهاء الزيارة",
    ],
    "highlights_en": [
        ("One patient file, everything in one place", "Visits, history, diagnoses, medications, labs, imaging, procedures, notes, documents — doctors never start a visit from zero."),
        ('From "who\'s next?" to an organized queue', "Waiting patients, turn order, status, walk-ins, appointments and patient flow — all trackable in real time."),
        ("Arabic is the core experience, not a translation", "Full RTL, Arabic UI, fields, messages, reports and printing — with English kept for technical medical terms where it serves you best."),
        ("Your data belongs to you alone", "Local storage, role-based permissions, and sensitive financials visible only to authorized users — never shown just because the system has it."),
    ],
    "highlights_ar": [
        ("ملف مريض واحد، كل شيء في مكان واحد", "الزيارات، التاريخ، التشخيصات، الأدوية، التحاليل، الأشعة، الإجراءات، الملاحظات، المستندات — لا يبدأ الطبيب كل زيارة من الصفر."),
        ("من «مين بعده؟» إلى طابور منظم", "المرضى المنتظرون، ترتيب الأدوار، الحالة، القادمون بدون موعد، المواعيد، وحركة المرضى — كلها قابلة للمتابعة فوريًا."),
        ("العربية هي التجربة الأساسية، لا ترجمة ثانوية", "RTL كامل، واجهة وحقول ورسائل وتقارير وطباعة بالعربية — مع الإبقاء على الإنجليزية للمصطلحات الطبية التقنية حيثما أنفع."),
        ("بيانات عيادتك ملكك وحدك", "تخزين محلي، صلاحيات قائمة على الدور، ومعلومات مالية حساسة مرئية فقط للمستخدمين المخوّلين — لا تُعرض لمجرد أن النظام يملكها."),
    ],
    "stats_en": [
        ("100%", "Offline"),
        ("∞", "Patients & visits"),
        ("6", "Locations free"),
        ("0", "Hidden fees"),
    ],
    "stats_ar": [
        ("100%", "دون إنترنت"),
        ("∞", "مرضى وزيارات"),
        ("6", "مواقع مجانًا"),
        ("0", "رسوم خفية"),
    ],
}

# ----------------------------------------------------------------------------
# Other 5 products (concise brochures)
# ----------------------------------------------------------------------------

OTHERS = [
    {
        "slug": "AntA-Shop",
        "name": "AntA Shop", "name_ar": "أنتا شوب",
        "tagline_en": "POS and Retail Management", "tagline_ar": "نقاط البيع وإدارة التجزئة",
        "hero_en": "From cashier to balance sheet — in one platform.",
        "hero_ar": "من الكاشير إلى الميزانية — في منصة واحدة.",
        "sub_en": "Manage all your stores on one platform, with instant P&L across every branch.",
        "sub_ar": "أدر جميع متاجرك على منصة واحدة، مع أرباح وخسائر فورية عبر كل فرع.",
        "desc_en": "AntA Shop combines POS, purchasing, warehouses, accounting, payroll and analytics across every branch — with instant P&L, no per-user fees, and offline-first architecture that keeps working when the internet doesn't.",
        "desc_ar": "يجمع أنتا شوب نقاط البيع والمشتريات والمخازن والمحاسبة والرواتب والتحليلات عبر كل فرع — مع أرباح وخسائر فورية، ودون رسوم لكل مستخدم، وبنية تعمل أولًا دون إنترنت تواصل العمل حين ينقطع الاتصال.",
        "features_en": [
            "Point of sale, purchasing, warehouses and inventory",
            "Multi-branch management with branch-level analytics",
            "Full accounting: instant P&L, income statement, cash flow, ledger and treasury",
            "Payroll, expenses and transfers",
            "Vendor and client management",
            "Promotions and loyalty programs",
            "Users and permissions",
            "Smart analytics and reports",
        ],
        "features_ar": [
            "نقطة البيع والمشتريات والمخازن والمخزون",
            "إدارة الفروع المتعددة مع تحليلات لكل فرع",
            "محاسبة كاملة: الأرباح والخسائر الفورية، قائمة الدخل، التدفقات النقدية، دفتر الأستاذ، والخزينة",
            "الرواتب والمصروفات والتحويلات",
            "إدارة الموردين والعملاء",
            "العروض الترويجية وبرامج الولاء",
            "المستخدمون والصلاحيات",
            "تحليلات وتقارير ذكية",
        ],
        "stats_en": [("1", "Platform"), ("∞", "Branches"), ("24/7", "P&L"), ("0", "Per-user fees")],
        "stats_ar": [("1", "منصة"), ("∞", "فروع"), ("24/7", "أ.خ"), ("0", "رسوم لكل مستخدم")],
    },
    {
        "slug": "AntA-Fleet",
        "name": "AntA Fleet", "name_ar": "أنتا فليت",
        "tagline_en": "Fleet Management", "tagline_ar": "إدارة الأساطيل",
        "hero_en": "Every vehicle, driver and workshop under control.",
        "hero_ar": "كل مركبة وسائق وورشة تحت السيطرة.",
        "sub_en": "Run company vehicles with full visibility — and never miss a renewal again.",
        "sub_ar": "أدر سيارات الشركة برؤية كاملة — ولا تفوتك تجديد بعد الآن.",
        "desc_en": "AntA Fleet automates reminders, escalations and reporting so no license, maintenance or document ever slips through the cracks. Complete maintenance module, workshop operations, spare parts, GPS tracking, driver portals and cost reports per vehicle and across the fleet.",
        "desc_ar": "يؤتمت أنتا فليت التذكيرات والتصعيد والتقارير، فلا تفوتك ترخيص أو صيانة أو مستند بعد الآن. وحدة صيانة كاملة، عمليات الورش، قطع الغيار، تتبع GPS، بوابات السائقين، وتقارير تكاليف لكل مركبة ولمجموع الأسطول.",
        "features_en": [
            "Daily operations management",
            "Driver and employee portals with feedback and ratings",
            "Automated escalations",
            "GPS tracking",
            "Complete maintenance module, workshop operations and warehouses",
            "Damaged and spare parts section",
            "Reminders and workflows for license expiry, renewals and maintenance",
            "Cost reports per vehicle and across the fleet",
        ],
        "features_ar": [
            "إدارة العمليات اليومية",
            "بوابات للسائقين والموظفين مع التقييمات وآراء المستخدمين",
            "تصعيد تلقائي",
            "تتبع GPS",
            "وحدة صيانة كاملة وعمليات الورش والمخازن",
            "قسم التلفيات وقطع الغيار",
            "تذكيرات ومسارات عمل لانتهاء التراخيص وتجديدها والصيانة",
            "تقارير تكاليف لكل مركبة ولمجموع الأسطول",
        ],
        "stats_en": [("100%", "Visibility"), ("∞", "Vehicles"), ("24/7", "Alerts"), ("0", "Missed renewals")],
        "stats_ar": [("100%", "رؤية كاملة"), ("∞", "مركبات"), ("24/7", "تنبيهات"), ("0", "تجديدات فائتة")],
    },
    {
        "slug": "AntA-Home",
        "name": "AntA Home", "name_ar": "أنتا هوم",
        "tagline_en": "Smart Home Management", "tagline_ar": "إدارة المنزل الذكي",
        "hero_en": "Manage your home like a well-run organization.",
        "hero_ar": "أدر منزلك كما تُدار المؤسسات المنظمة.",
        "sub_en": "Staff, maintenance, warranties, stock, seasonal checklists and costs — in one secure, locally-hosted place.",
        "sub_ar": "العاملون، الصيانة، الضمانات، المخزون، القوائم الموسمية، والتكاليف — في مكان واحد آمن ومستضاف محليًا.",
        "desc_en": "AntA Home tracks staff, scheduled maintenance, warranties, stock, seasonal checklists and costs — all in one secure, locally-hosted place. Resilient by design: keeps working without internet, keeps data on your premises, switches online when you want analytics.",
        "desc_ar": "يتتبع أنتا هوم العاملين والصيانة المجدولة والضمانات والمخزون والقوائم الموسمية والتكاليف — كل ذلك في مكان واحد آمن ومستضاف محليًا. مرن بالتصميم: يواصل العمل دون إنترنت، ويبقي البيانات داخل منشأتك، ويتصل بالإنترنت عندما تريد التحليلات.",
        "features_en": [
            "Household staff and employees",
            "Recurring and scheduled maintenance",
            "Device warranties",
            "Stock and storage",
            "Regular and seasonal checklists",
            "Cost tracking reports",
            "Smart maintenance and repair reporting",
        ],
        "features_ar": [
            "العاملون في المنزل",
            "الصيانة الدورية والمجدولة",
            "ضمانات الأجهزة",
            "المخزون والتخزين",
            "قوائم المراجعة المعتادة والموسمية",
            "تقارير تتبع التكاليف",
            "تقارير ذكية للصيانة والإصلاح",
        ],
        "stats_en": [("1", "Household"), ("∞", "Staff & items"), ("365d", "Coverage"), ("0", "Missed warranties")],
        "stats_ar": [("1", "منزل"), ("∞", "موظفون وعناصر"), ("365", "يوم تغطية"), ("0", "ضمانات فائتة")],
    },
    {
        "slug": "AntA-Car",
        "name": "AntA Car", "name_ar": "أنتا كار",
        "tagline_en": "Private Car Management", "tagline_ar": "إدارة السيارات الخاصة",
        "hero_en": "Your own interactive garage.",
        "hero_ar": "جراجك التفاعلي الخاص.",
        "sub_en": "Maintenance, mileage, tires, batteries, violations and renewals — across every car you own.",
        "sub_ar": "الصيانة، الكيلومترات، الإطارات، البطاريات، المخالفات، والتجديدات — لكل سيارة تملكها.",
        "desc_en": "AntA Car tracks maintenance, mileage, tires, batteries, violations and renewals across every vehicle you own — with cost reports that show what each car actually costs to run. Your private garage, always up to date.",
        "desc_ar": "يتتبع أنتا كار الصيانة وعدّاد الكيلومترات والإطارات والبطاريات والمخالفات والتجديدات لكل سيارة تملكها — مع تقارير تكاليف تكشف ما تكلفه كل سيارة فعلًا في التشغيل. جراجك الخاص، محدّث دائمًا.",
        "features_en": [
            "Track and manage all your cars and assign drivers",
            "Maintenance, mileage (km) and GPS tracking",
            "Tires and batteries",
            "Violations and license renewals",
            "Periodic maintenance",
            "Cost reports per vehicle",
        ],
        "features_ar": [
            "تتبع وإدارة سياراتك وتعيين السائقين",
            "الصيانة وعدّاد الكيلومترات وتتبع GPS",
            "الإطارات والبطاريات",
            "المخالفات وتجديد التراخيص",
            "الصيانة الدورية",
            "تقارير التكاليف لكل مركبة",
        ],
        "stats_en": [("∞", "Cars"), ("100%", "Track record"), ("0", "Missed renewals"), ("1", "Garage")],
        "stats_ar": [("∞", "سيارات"), ("100%", "سجل متابعة"), ("0", "تجديدات فائتة"), ("1", "جراج")],
    },
    {
        "slug": "AntA-HR",
        "name": "AntA HR", "name_ar": "أنتا إتش آر",
        "tagline_en": "HR Operations Solutions", "tagline_ar": "حلول عمليات الموارد البشرية",
        "hero_en": "From job request to end of service — one workflow.",
        "hero_ar": "من طلب الوظيفة حتى نهاية الخدمة — مسار عمل واحد.",
        "sub_en": "Standalone or integrated with your current HRIS, covering the employee life cycle.",
        "sub_ar": "مستقل أو متكامل مع نظام الموارد البشرية الحالي، ويغطي دورة حياة الموظف.",
        "desc_en": "AntA HR handles documents, assets, renewals, ATS, onboarding, vacation planning and the digital archive — all in one workflow. Owner-controlled: data stays on your premises, no per-seat licenses for every employee.",
        "desc_ar": "يدير أنتا إتش آر المستندات والأصول والتجديدات وتتبع المتقدمين والتهيئة ومخطط الإجازات والأرشيف الرقمي — كل ذلك في مسار عمل واحد. تحت سيطرة المالك: تبقى البيانات داخل منشأتك، دون رسوم لكل مقعد لكل موظف.",
        "features_en": [
            "Document Creator",
            "Employee Assets Book",
            "Renewal workflows",
            "Workplace Hub",
            "Applicant Tracking System (ATS), hiring and onboarding",
            "Employee Digital Archive",
            "Vacation planner, communications and document management",
        ],
        "features_ar": [
            "منشئ المستندات (Document Creator)",
            "سجل أصول الموظفين (Employee Assets Book)",
            "مسارات عمل التجديدات",
            "مركز بيئة العمل (Workplace Hub)",
            "نظام تتبع المتقدمين (ATS) والتوظيف والتهيئة",
            "الأرشيف الرقمي للموظفين",
            "مخطط الإجازات والتواصل وإدارة المستندات",
        ],
        "stats_en": [("100%", "Life cycle"), ("∞", "Employees"), ("1", "Workflow"), ("0", "Cloud lock-in")],
        "stats_ar": [("100%", "دورة الحياة"), ("∞", "موظفون"), ("1", "مسار عمل"), ("0", "احتجاز سحابي")],
    },
    {
        "slug": "AntA-Rental",
        "name": "AntA Rental Manager", "name_ar": "أنتا رنتل مانجر",
        "tagline_en": "Rental Units & Booking Management", "tagline_ar": "إدارة الوحدات الإيجار والحجوزات",
        "hero_en": "Every unit. Every booking. Every renewal — under your control.",
        "hero_ar": "كل وحدة، كل حجز، كل تجديد — تحت سيطرتك.",
        "sub_en": "Handle rental units for short or long stays, end to end — one owner-controlled system.",
        "sub_ar": "أدر وحدات الإيجار للإقامات القصيرة أو الطويلة من البداية للنهاية — نظام واحد تحت سيطرة المالك.",
        "desc_en": "AntA Rental Manager covers booking, check-in and check-out, payments, maintenance, closure lists, utilities, renewals and contracts, communications, and reports — one owner-controlled system for apartments, villas, offices, vacation homes and any rental business. Works offline-first, data stays on your premises.",
        "desc_ar": "يغطي أنتا رنتل مانجر الحجز، تسجيل الدخول والخروج، المدفوعات، الصيانة، قوائم الإغلاق، المرافق، التجديدات والعقود، التواصل، والتقارير — نظام واحد تحت سيطرة المالك للشقق والفيلات والمكاتب والبيوت المصيفية وأي عمل إيجار. يعمل أولًا دون إنترنت، وتبقى البيانات داخل منشأتك.",
        "features_en": [
            "Rental units for short-term or long-term stays",
            "Booking solution with availability calendar",
            "Check-in and check-out management",
            "Payments, deposits, and outstanding balances",
            "Maintenance requests and scheduling",
            "Closure lists and unit status tracking",
            "Utilities management (water, electricity, internet)",
            "Renewals and contracts management",
            "Communications with tenants and owners",
            "Reports and analytics across units and periods",
        ],
        "features_ar": [
            "وحدات إيجار للإقامات القصيرة أو الطويلة",
            "حل حجز مع تقويم التوفر",
            "إدارة تسجيل الدخول والخروج",
            "المدفوعات، التأمينات، والأرصدة المستحقة",
            "طلبات الصيانة والجدولة",
            "قوائم الإغلاق وتتبع حالة الوحدة",
            "إدارة المرافق (ماء، كهرباء، إنترنت)",
            "إدارة التجديدات والعقود",
            "تواصل مع المستأجرين والمالكين",
            "تقارير وتحليلات عبر الوحدات والفترات",
        ],
        "stats_en": [("∞", "Units"), ("24/7", "Bookings"), ("100%", "Track record"), ("0", "Missed renewals")],
        "stats_ar": [("∞", "وحدات"), ("24/7", "حجوزات"), ("100%", "سجل متابعة"), ("0", "تجديدات فائتة")],
    },
]

# ----------------------------------------------------------------------------
# Company Profile content (separate EN + AR)
# ----------------------------------------------------------------------------

PROFILE = {
    "hero_en": "Own your code.\nOwn your data.",
    "hero_ar": "امتلك كودك.\nامتلك بياناتك.",
    "sub_en": "AntA by MK Technologies — smart management systems that run offline, stay secure, and get smarter online.",
    "sub_ar": "أنتا من إم كيه تكنولوجيز — أنظمة إدارة ذكية تعمل دون إنترنت، وتحمي بياناتك، وتزداد ذكاءً عند الاتصال.",
    "title_en": "Company Profile",
    "title_ar": "الملف التعريفي",
    "sections_en": [
        ("01 · About",
         "Resilient by design, owner-controlled by principle",
         [
             "MK Technologies, short for Machine Knowledge Resilience Solutions, exists to make business software resilient and owner-controlled. We believe organizations should never lose access to their systems or their data because of a connection, a subscription or a vendor decision. That belief shaped AntA: software that works offline, protects data locally and uses online intelligence only when you choose.",
             "From medical centers and retail stores to vehicle fleets, HR departments and private homes, AntA turns day-to-day operations into organized, trackable and measurable workflows — with no hidden fees and no artificial limits. Every AntA solution runs locally first, then connects online when you want intelligence, remote access or integration — never the other way around.",
         ]),
        ("02 · Mission & Vision",
         "Why we exist, and where we're going",
         [
             "Mission: To give businesses and individuals software they fully own: their code, their data and their operations, protected by offline security and empowered by online intelligence.",
             "Vision: A region where every clinic, shop, fleet, HR team and home runs on resilient systems that never depend on someone else's servers to keep working.",
         ]),
        ("03 · What Makes AntA Different",
         "Six principles, one operating system",
         [
             "Ownership — your code, your data, your control. No vendor lock-in, no rental access, no surprises.",
             "Offline-first security — systems run 100% offline and store data locally on your premises.",
             "Online intelligence — optional online mode for smart analytics, remote access and integrations.",
             "Local hosting — host on your own resources, with access for up to 6 locations free of charge.",
             "No hidden fees — unlimited users, visits, patients, branches and storage where applicable.",
             "Built for the region — designed with Egyptian and MEA business realities in mind.",
         ]),
        ("04 · Solutions at a Glance",
         "One suite. Every operation.",
         [
             "AntA Care — Clinic and Medical Center Management. Patient records, in-house pharmacy, doctor commissions, appointments, queue, financial module and partner management — all offline.",
             "AntA Shop — POS and Retail Management. Multi-branch POS, full accounting, instant P&L, payroll, loyalty programs and analytics across every branch.",
             "AntA Fleet — Fleet Management. Daily operations, driver portals, GPS tracking, complete maintenance module, spare parts and automated license-renewal reminders.",
             "AntA Home — Smart Home Management. Staff, scheduled maintenance, warranties, stock, seasonal checklists and cost tracking in one secure place.",
             "AntA Car — Private Car Management. Maintenance, mileage, tires, batteries, violations and renewals across every vehicle you own.",
             "AntA HR — HR Operations Solutions. Document Creator, Employee Assets Book, ATS, vacation planner and digital archive — full employee life cycle.",
         ]),
        ("05 · Coming Soon",
         "What we're building next",
         [
             "Job Evaluation Tool — structure and grade roles objectively.",
             "Compensation & Benefits Portal — salary structure, grading, increases and promotions.",
             "Performance Evaluation Tool — measurable employee performance.",
             "Budget and Forecast Tool — planning and forward-looking finance.",
             "Social Insurance Management — Form 2 calculation and monthly breakdown tracking.",
             "HR ROI and Metrics Dashboard — quantified HR impact.",
         ]),
    ],
    "sections_ar": [
        ("01 · من نحن",
         "مرنة بالتصميم، تحت سيطرة مالكها بمبدأ",
         [
             "إم كيه تكنولوجيز، اختصارًا لحلول المرونة المعرفية للآلات، وُجدت لتجعل برمجيات الأعمال مرنة وتحت سيطرة مالكها. نؤمن بأن المؤسسات يجب ألا تفقد الوصول إلى أنظمتها أو بياناتها بسبب انقطاع اتصال أو اشتراك أو قرار مورّد. هذا الإيمان صاغ أنتا: برمجيات تعمل دون إنترنت، وتحمي البيانات محليًا، وتستخدم الذكاء عبر الإنترنت فقط عندما تختار.",
             "من المراكز الطبية ومتاجر التجزئة إلى أساطيل المركبات وإدارات الموارد البشرية والمنازل الخاصة، تحوّل أنتا العمليات اليومية إلى مسارات عمل منظمة وقابلة للتتبع والقياس — دون رسوم خفية ودون حدود مصطنعة. كل حل أنتا يعمل محليًا أولًا، ثم يتصل بالإنترنت عندما تريد الذكاء أو الوصول عن بُعد أو التكامل — وليس العكس أبدًا.",
         ]),
        ("02 · الرسالة والرؤية",
         "لماذا وُجدنا، وإلى أين نمضي",
         [
             "الرسالة: نمنح الشركات والأفراد برمجيات يملكونها بالكامل: الكود والبيانات والتشغيل، بحماية تعمل دون اتصال وذكاء متاح عند الحاجة عبر الإنترنت.",
             "الرؤية: أن تعمل كل عيادة ومتجر وأسطول وإدارة موارد بشرية ومنزل على أنظمة مرنة لا تتوقف بتوقف الاتصال أو خوادم الغير.",
         ]),
        ("03 · ما يميز أنتا",
         "ستة مبادئ، نظام تشغيل واحد",
         [
             "الملكية — الكود والبيانات والتحكم كلها لك. لا اعتماد على مورّد، ولا وصول بالإيجار، ولا مفاجآت.",
             "أمان يبدأ دون اتصال — تعمل الأنظمة بنسبة 100% بدون إنترنت وتخزّن البيانات محليًا داخل منشأتك.",
             "ذكاء عبر الإنترنت عند الطلب — وضع اختياري للتحليلات الذكية والوصول عن بُعد والتكامل.",
             "استضافة محلية — على مواردك الخاصة، مع إتاحة الوصول لـ 6 مواقع مجانًا.",
             "بلا رسوم خفية — مستخدمون وزيارات ومرضى وفروع ومساحة تخزين غير محدودة حيثما ينطبق.",
             "مصمم للمنطقة — يراعي واقع الأعمال في مصر ومنطقة الشرق الأوسط وأفريقيا.",
         ]),
        ("04 · حلولنا بنظرة سريعة",
         "مجموعة واحدة. كل العمليات.",
         [
             "أنتا كير — إدارة العيادات والمراكز الطبية. بيانات المرضى، الصيدلية الداخلية، عمولات الأطباء، المواعيد، الطابور، الوحدة المالية وإدارة الشركاء — كل ذلك دون إنترنت.",
             "أنتا شوب — نقاط البيع وإدارة التجزئة. نقاط بيع متعددة الفروع، محاسبة كاملة، أرباح وخسائر فورية، رواتب، برامج ولاء، وتحليلات عبر كل فرع.",
             "أنتا فليت — إدارة الأساطيل. العمليات اليومية، بوابات السائقين، تتبع GPS، وحدة صيانة كاملة، قطع غيار، وتذكيرات تلقائية لتجديد التراخيص.",
             "أنتا هوم — إدارة المنزل الذكي. العاملون، الصيانة المجدولة، الضمانات، المخزون، القوائم الموسمية، وتتبع التكاليف في مكان آمن واحد.",
             "أنتا كار — إدارة السيارات الخاصة. الصيانة، الكيلومترات، الإطارات، البطاريات، المخالفات، والتجديدات لكل سيارة تملكها.",
             "أنتا إتش آر — حلول عمليات الموارد البشرية. منشئ المستندات، سجل أصول الموظفين، تتبع المتقدمين، مخطط الإجازات، والأرشيف الرقمي — دورة حياة الموظف كاملة.",
         ]),
        ("05 · قريبًا",
         "ما نبنيه تاليًا",
         [
             "أداة تقييم الوظائف — هيكلة وتدريج الأدوار بموضوعية.",
             "بوابة التعويضات والمزايا — هيكل الرواتب والدرجات والزيادات والترقيات.",
             "أداة تقييم الأداء — قياس أداء الموظفين.",
             "أداة الموازنة والتنبؤ — تخطيط وتمويل استشرافي.",
             "إدارة التأمينات الاجتماعية — حساب نموذج 2 ومتابعة التفاصيل الشهرية.",
             "لوحة مؤشرات العائد على الاستثمار في الموارد البشرية — أثر الموارد البشرية مُقاس.",
         ]),
    ],
}

# ----------------------------------------------------------------------------
# CSS — shared, with language-aware typography
# ----------------------------------------------------------------------------

SHARED_CSS = """
@page { size: 720px 1020px; margin: 0; }
:root {
  --c-bg: #faf6ee;
  --c-deep: #0c3a36;
  --c-brand: #15564f;
  --c-amber: #d97706;
  --c-ink: #1f2937;
  --c-muted: #6b7280;
  --c-line: #e7d9c0;
}
* { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
html, body {
  margin: 0; padding: 0; width: 720px;
  background: var(--c-bg);
  color: var(--c-ink);
  font-family: 'Inter', 'Noto Naskh Arabic', sans-serif;
  font-size: 15px; line-height: 1.6;
}
@media screen {
  html { display: flex; justify-content: center; background: #2a2418; height: auto; }
  body { margin: 24px auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3); }
}

/* Cover */
.cover {
  width: 720px; height: 1020px; box-sizing: border-box; break-after: page;
  overflow: hidden; position: relative;
  background: linear-gradient(160deg, #0c3a36 0%, #15564f 60%, #1a6258 100%);
  color: #faf6ee;
  padding: 70px 60px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.cover::before {
  content: ''; position: absolute; top: -120px; right: -120px;
  width: 380px; height: 380px; border-radius: 50%;
  background: radial-gradient(circle, rgba(217,119,6,0.35) 0%, transparent 70%);
}
.cover::after {
  content: ''; position: absolute; bottom: -100px; left: -100px;
  width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(21,86,79,0.5) 0%, transparent 70%);
}
.cover-top { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: flex-start; }
.cover-logo {
  width: 80px; height: 80px; background: #faf6ee; border-radius: 18px;
  display: grid; place-items: center; padding: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18);
}
.cover-logo img { width: 100%; height: 100%; object-fit: contain; }
.cover-tag { font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(250,246,238,0.75); text-align: right; max-width: 260px; }
.cover-tag b { color: var(--c-amber); display: block; font-weight: 700; letter-spacing: 0.18em; margin-bottom: 4px; }
.cover-center { position: relative; z-index: 2; }
.cover-pill {
  display: inline-block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--c-amber); border: 1px solid rgba(217,119,6,0.4); background: rgba(217,119,6,0.08);
  padding: 6px 14px; border-radius: 999px; margin-bottom: 22px;
}
.cover-title {
  font-family: 'Playfair Display', serif; font-size: 84px; line-height: 0.96;
  font-weight: 900; color: #faf6ee; letter-spacing: -0.02em; margin: 0; white-space: pre-line;
}
.cover-title .accent { color: var(--c-amber); font-style: italic; font-weight: 400; }
.cover-sub { margin-top: 28px; font-size: 22px; line-height: 1.35; max-width: 540px; color: rgba(250,246,238,0.92); font-weight: 300; }
.cover-bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid rgba(250,246,238,0.15); padding-top: 24px; }
.cover-meta { font-size: 11px; color: rgba(250,246,238,0.7); letter-spacing: 0.06em; line-height: 1.7; }
.cover-meta b { color: #faf6ee; font-weight: 600; }
.cover-edition { font-family: 'Playfair Display', serif; font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--c-amber); }

/* RTL Arabic overrides */
[dir="rtl"] .cover { text-align: right; }
[dir="rtl"] .cover-tag { text-align: left; }
[dir="rtl"] .cover-title { font-family: 'Noto Naskh Arabic', serif; font-size: 64px; line-height: 1.25; }
[dir="rtl"] .cover-sub, [dir="rtl"] .body-text, [dir="rtl"] .section-title, [dir="rtl"] .ending-headline { font-family: 'Noto Naskh Arabic', serif; }
[dir="rtl"] .cover-sub { font-size: 22px; line-height: 1.5; }

/* Body */
.main-content { padding: 60px 56px 50px 56px; }
.section-tag {
  display: inline-block; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--c-amber); border: 1px solid rgba(217,119,6,0.35); background: rgba(217,119,6,0.06);
  padding: 4px 12px; border-radius: 999px;
}
.section-title { font-family: 'Playfair Display', serif; font-size: 32px; line-height: 1.15; font-weight: 900; color: var(--c-deep); margin: 14px 0 6px 0; }
.divider { height: 3px; width: 56px; background: var(--c-amber); margin: 14px 0 18px 0; border-radius: 2px; }
.body-text { font-size: 14.5px; line-height: 1.7; color: var(--c-ink); margin-bottom: 14px; }
.chapter-header { break-after: avoid; break-inside: avoid; margin-top: 28px; }
.chapter-header:first-child { margin-top: 0; }

/* Feature list */
.feature-list { margin-top: 16px; }
.feature-item { position: relative; padding-left: 24px; margin-bottom: 10px; font-size: 14px; line-height: 1.6; color: var(--c-ink); }
.feature-item::before { content: ''; position: absolute; left: 0; top: 8px; width: 10px; height: 10px; border-radius: 50%; background: var(--c-amber); }
[dir="rtl"] .feature-item { padding-left: 0; padding-right: 24px; font-size: 14.5px; line-height: 1.85; }
[dir="rtl"] .feature-item::before { left: auto; right: 0; }

/* Stats grid */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 20px; break-inside: avoid; }
.stat { border: 1px solid var(--c-line); background: white; border-radius: 12px; padding: 14px 10px; text-align: center; }
.stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; color: var(--c-amber); line-height: 1; }
.stat-label { margin-top: 4px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); }
[dir="rtl"] .stat-label { text-transform: none; letter-spacing: 0.04em; }
[dir="rtl"] .stat-num { font-family: 'Noto Naskh Arabic', serif; }

/* Before/after table */
.bna-grid { margin-top: 16px; display: grid; gap: 10px; }
.bna-row { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--c-line); border-radius: 12px; overflow: hidden; break-inside: avoid; }
.bna-cell { padding: 12px 14px; font-size: 13px; line-height: 1.55; }
.bna-before { background: rgba(220, 38, 38, 0.05); color: var(--c-ink); }
.bna-after { background: rgba(21, 86, 79, 0.06); color: var(--c-deep); font-weight: 500; }
.bna-label { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700; margin-bottom: 4px; }
.bna-before .bna-label { color: #b91c1c; }
.bna-after .bna-label { color: var(--c-brand); }
[dir="rtl"] .bna-cell, [dir="rtl"] .bna-row { text-align: right; }

/* Workflow steps */
.workflow-grid { margin-top: 18px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.workflow-step { border: 1px solid var(--c-line); background: white; border-radius: 12px; padding: 14px 12px; position: relative; break-inside: avoid; }
.workflow-num { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: var(--c-amber); line-height: 1; }
.workflow-text { margin-top: 6px; font-size: 12.5px; line-height: 1.45; color: var(--c-ink); }
[dir="rtl"] .workflow-text { font-size: 13.5px; line-height: 1.7; }
[dir="rtl"] .workflow-num { font-family: 'Noto Naskh Arabic', serif; }

/* Roles */
.roles-grid { margin-top: 16px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.role-card { border: 1px solid var(--c-line); background: white; border-radius: 12px; padding: 14px 16px; break-inside: avoid; }
.role-name { font-weight: 800; font-size: 14px; color: var(--c-deep); }
.role-desc { margin-top: 4px; font-size: 12px; line-height: 1.55; color: var(--c-muted); }
[dir="rtl"] .role-name, [dir="rtl"] .role-desc { text-align: right; }
[dir="rtl"] .role-name { font-size: 14.5px; }
[dir="rtl"] .role-desc { font-size: 13px; line-height: 1.8; }

/* Philosophy */
.philosophy-grid { margin-top: 18px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; break-inside: avoid; }
.philosophy-card { border: 1px solid var(--c-line); background: white; border-radius: 14px; padding: 14px 10px; text-align: center; position: relative; break-inside: avoid; }
.philosophy-num { font-family: 'Playfair Display', serif; font-size: 11px; font-weight: 700; color: var(--c-amber); letter-spacing: 0.2em; }
.philosophy-word { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: var(--c-deep); line-height: 1; margin-top: 6px; }
.philosophy-target { margin-top: 4px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); }
[dir="rtl"] .philosophy-word { font-family: 'Noto Naskh Arabic', serif; font-size: 22px; font-weight: 700; }
[dir="rtl"] .philosophy-target { text-transform: none; letter-spacing: 0.04em; font-size: 11px; line-height: 1.5; }

/* Highlights */
.highlights-grid { margin-top: 16px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.highlight-card { border: 1px solid var(--c-line); background: white; border-radius: 14px; padding: 16px 18px; break-inside: avoid; position: relative; }
.highlight-card::before { content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: 3px; background: var(--c-amber); border-radius: 14px 0 0 14px; }
[dir="rtl"] .highlight-card::before { left: auto; right: 0; border-radius: 0 14px 14px 0; }
[dir="rtl"] .highlight-card { text-align: right; }
.highlight-title { font-weight: 800; font-size: 14px; color: var(--c-deep); padding-left: 12px; }
[dir="rtl"] .highlight-title { padding-left: 0; padding-right: 12px; font-size: 14.5px; }
.highlight-body { margin-top: 6px; font-size: 12px; line-height: 1.6; color: var(--c-muted); padding-left: 12px; }
[dir="rtl"] .highlight-body { padding-left: 0; padding-right: 12px; font-size: 13px; line-height: 1.85; }

/* Ending */
.ending {
  width: 720px; height: 1020px; box-sizing: border-box; break-before: page;
  overflow: hidden; position: relative;
  background: linear-gradient(165deg, #0c3a36 0%, #15564f 100%);
  color: #faf6ee;
  padding: 80px 60px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.ending::before {
  content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 500px; height: 500px; border-radius: 50%;
  background: radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 65%);
}
.ending-top { position: relative; z-index: 2; }
.ending-pill {
  display: inline-block; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--c-amber); border: 1px solid rgba(217,119,6,0.4); background: rgba(217,119,6,0.08);
  padding: 6px 14px; border-radius: 999px;
}
.ending-headline { font-family: 'Playfair Display', serif; font-size: 60px; line-height: 1.05; font-weight: 900; margin-top: 24px; letter-spacing: -0.01em; }
.ending-headline .accent { color: var(--c-amber); font-style: italic; font-weight: 400; }
[dir="rtl"] .ending-headline { font-size: 48px; line-height: 1.3; font-weight: 700; }
.ending-bottom { position: relative; z-index: 2; border-top: 1px solid rgba(250,246,238,0.15); padding-top: 24px; }
.ending-email { font-size: 22px; font-weight: 600; color: #faf6ee; }
.ending-website { font-size: 13px; color: rgba(250,246,238,0.65); margin-top: 6px; }
.ending-edition { font-family: 'Playfair Display', serif; font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--c-amber); margin-top: 14px; }
[dir="rtl"] .ending-website, [dir="rtl"] .ending-email { text-align: right; }
"""

# ----------------------------------------------------------------------------
# Builder functions
# ----------------------------------------------------------------------------

LOGO_PATH = "/home/z/my-project/public/anta-logo.png"
# Make a copy next to the HTML files so relative path works in Playwright
LOGO_COPY = "anta-logo.png"

HEAD = """<!DOCTYPE html>
<html lang="{lang}" dir="{dir}">
<head>
  <meta charset="UTF-8">
  <title>{title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet">
  <style>{css}</style>
</head>
<body>
"""

FOOT = """
</body>
</html>
"""


def build_care_html(lang: str) -> str:
    is_ar = lang == "ar"
    dir_attr = "rtl" if is_ar else "ltr"
    css = SHARED_CSS

    if is_ar:
        pill = "بروشور المنتج · منظومة إدارة العيادات"
        title_attr = f"{CARE['name_ar']} · بروشور"
        hero = CARE["hero_ar"]
        sub = CARE["sub_ar"]
        desc = CARE["desc_ar"]
        tagline = CARE["tagline_ar"]
        features = CARE["features_ar"]
        workflow = CARE["workflow_ar"]
        philosophy = CARE["philosophy_ar"]
        philosophy_closing = CARE["philosophy_closing_ar"]
        highlights = CARE["highlights_ar"]
        stats = CARE["stats_ar"]
        cta = "ابدأ الآن — نظّم عيادتك"
        cta_sub = "اطلب مواصفات أنتا كير الكاملة — وسنشاركها معك عبر البريد قريبًا."
        sec_overview = "نظرة عامة"
        sec_features = "المزايا"
        sec_philosophy = "خمس كلمات تلخص أنتا كير"
        sec_workflow = "رحلة المريض"
        sec_highlights = "ما الذي يتغير مع أنتا كير"
        sec_why = "لماذا أنتا"
        why_body = "يُستضاف أنتا كير على مواردك الخاصة ويواصل العمل حين ينقطع الإنترنت. وعندما تحتاج التحليلات أو الوصول عن بُعد أو التكامل، اتصل بالإنترنت — بشروطك، وليس كشرط لأن يعمل النظام أصلًا."
        edition = f"{CARE['name_ar']} · بروشور · إصدار 2026"
        meta_brand = "صُنع في مصر · صُمم للمنطقة"
        company_full = "إم كيه تكنولوجيز — حلول المرونة المعرفية للآلات"
        cta_button = "اطلب المواصفات"
    else:
        pill = "Product Brochure · Clinic Management Ecosystem"
        title_attr = f"{CARE['name']} · Brochure"
        hero = CARE["hero_en"]
        sub = CARE["sub_en"]
        desc = CARE["desc_en"]
        tagline = CARE["tagline_en"]
        features = CARE["features_en"]
        workflow = CARE["workflow_en"]
        philosophy = CARE["philosophy_en"]
        philosophy_closing = CARE["philosophy_closing_en"]
        highlights = CARE["highlights_en"]
        stats = CARE["stats_en"]
        cta = "Start now — organize your clinic"
        cta_sub = "Request the full AntA Care specifications — we'll share them by email shortly."
        sec_overview = "Overview"
        sec_features = "Features"
        sec_philosophy = "Five words summarize AntA Care"
        sec_workflow = "The patient journey"
        sec_highlights = "What changes with AntA Care"
        sec_why = "Why AntA"
        why_body = "AntA Care is hosted on your own resources and keeps working when the internet doesn't. When you need analytics, remote access or integration, switch online — on your terms, never as a condition of the software working at all."
        edition = f"{CARE['name']} · Brochure · Edition 2026"
        meta_brand = "Built in Egypt · Designed for the MEA region"
        company_full = "MK Technologies — Machine Knowledge Resilience Solutions"
        cta_button = "Request specs"

    stats_html = "<div class='stats-grid'>" + "".join(
        f"<div class='stat'><div class='stat-num'>{v}</div><div class='stat-label'>{l}</div></div>"
        for v, l in stats
    ) + "</div>"

    features_html = "".join(f"<div class='feature-item'>{f}</div>" for f in features)
    workflow_html = "".join(
        f"<div class='workflow-step'><div class='workflow-num'>{i+1:02d}</div><div class='workflow-text'>{s}</div></div>"
        for i, s in enumerate(workflow)
    )
    # Philosophy as 5-column grid
    philosophy_html = "".join(
        f"<div class='philosophy-card'><div class='philosophy-num'>{i+1:02d}</div>"
        f"<div class='philosophy-word'>{w}</div>"
        f"<div class='philosophy-target'>{t}</div></div>"
        for i, (w, t) in enumerate(philosophy)
    )
    # Highlights as 2-col grid
    highlights_html = "".join(
        f"<div class='highlight-card'><div class='highlight-title'>{t}</div>"
        f"<div class='highlight-body'>{b}</div></div>"
        for t, b in highlights
    )

    cover = f"""
<div class="cover">
  <div class="cover-top">
    <div class="cover-logo"><img src="{LOGO_COPY}" alt="AntA"></div>
    <div class="cover-tag"><b>AntA · by MK Technologies</b>{tagline}</div>
  </div>
  <div class="cover-center">
    <span class="cover-pill">{pill}</span>
    <h1 class="cover-title">{hero}</h1>
    <div class="cover-sub">{sub}</div>
  </div>
  <div class="cover-bottom">
    <div class="cover-meta">
      <b>anta.mkrs@gmail.com</b><br>{meta_brand}
    </div>
    <div class="cover-edition">{"إصدار 2026" if is_ar else "Edition 2026"}</div>
  </div>
</div>
"""

    body = f"""
<div class="main-content">

  <div class="chapter-header">
    <span class="section-tag">01 · {sec_overview}</span>
    <h2 class="section-title">{hero.replace(chr(10), '<br>')}</h2>
    <div class="divider"></div>
  </div>
  <p class="body-text">{desc}</p>
  {stats_html}

  <div class="chapter-header">
    <span class="section-tag">02 · {sec_philosophy}</span>
    <h2 class="section-title">{"خمس كلمات" if is_ar else "Five words"}</h2>
    <div class="divider"></div>
  </div>
  <div class="philosophy-grid">{philosophy_html}</div>
  <p class="body-text" style="font-style: italic; margin-top: 18px;">{philosophy_closing}</p>

  <div class="chapter-header">
    <span class="section-tag">03 · {sec_features}</span>
    <h2 class="section-title">{"كل ما تحتاجه عيادتك، مدمج" if is_ar else "Everything your clinic needs, built in"}</h2>
    <div class="divider"></div>
  </div>
  <div class="feature-list">{features_html}</div>

  <div class="chapter-header">
    <span class="section-tag">04 · {sec_workflow}</span>
    <h2 class="section-title">{"مسار طبيعي واحد" if is_ar else "One natural path"}</h2>
    <div class="divider"></div>
  </div>
  <p class="body-text">{"مسار واضح: تسجيل → انتظار → دخول → ملف المريض → زيارة → وصفة/إجراء → حساب → انتهاء الزيارة. كل خطوة تغذّي التالية." if is_ar else "A clear path: registration → waiting → check-in → patient file → visit → prescription/procedure → billing → check-out. Every step feeds the next."}</p>
  <div class="workflow-grid">{workflow_html}</div>

  <div class="chapter-header">
    <span class="section-tag">05 · {sec_highlights}</span>
    <h2 class="section-title">{"ما الذي يتغير مع أنتا كير" if is_ar else "What changes with AntA Care"}</h2>
    <div class="divider"></div>
  </div>
  <div class="highlights-grid">{highlights_html}</div>

  <div class="chapter-header">
    <span class="section-tag">06 · {sec_why}</span>
    <h2 class="section-title">{"أمان بلا إنترنت، وذكاء عند الطلب" if is_ar else "Offline security. Online intelligence."}</h2>
    <div class="divider"></div>
  </div>
  <p class="body-text">{why_body}</p>

</div>
"""

    ending = f"""
<div class="ending">
  <div class="ending-top">
    <span class="ending-pill">{"لنتحدث" if is_ar else "Let's talk"}</span>
    <h2 class="ending-headline">{cta}</h2>
    <div style="margin-top: 18px; font-size: 18px; line-height: 1.5; color: rgba(250,246,238,0.85); {'font-family: Noto Naskh Arabic, serif;' if is_ar else ''}">{cta_sub}</div>
    <div style="margin-top: 24px;">
      <span style="display: inline-block; padding: 10px 22px; background: var(--c-amber); color: white; border-radius: 999px; font-weight: 700; font-size: 14px; letter-spacing: 0.08em;">{cta_button}</span>
    </div>
  </div>
  <div class="ending-bottom">
    <div class="ending-email">anta.mkrs@gmail.com</div>
    <div class="ending-website">{company_full}</div>
    <div class="ending-edition">{edition}</div>
  </div>
</div>
"""

    return HEAD.format(lang=lang, dir=dir_attr, title=title_attr, css=css) + cover + body + ending + FOOT


def build_other_html(p: dict, lang: str) -> str:
    is_ar = lang == "ar"
    dir_attr = "rtl" if is_ar else "ltr"
    css = SHARED_CSS

    if is_ar:
        pill = "بروشور المنتج"
        title_attr = f"{p['name_ar']} · بروشور"
        hero = p["hero_ar"]
        sub = p["sub_ar"]
        desc = p["desc_ar"]
        tagline = p["tagline_ar"]
        features = p["features_ar"]
        stats = p["stats_ar"]
        cta = "امتلك عملياتك"
        sec_overview = "نظرة عامة"
        sec_features = "المزايا"
        sec_why = "لماذا أنتا"
        why_body = f"يُستضاف {p['name_ar']} على مواردك الخاصة ويواصل العمل حين ينقطع الإنترنت. وعندما تحتاج التحليلات أو الوصول عن بُعد أو التكامل، اتصل بالإنترنت — بشروطك، وليس كشرط لأن يعمل النظام أصلًا."
        edition = f"{p['name_ar']} · بروشور · إصدار 2026"
    else:
        pill = "Product Brochure"
        title_attr = f"{p['name']} · Brochure"
        hero = p["hero_en"]
        sub = p["sub_en"]
        desc = p["desc_en"]
        tagline = p["tagline_en"]
        features = p["features_en"]
        stats = p["stats_en"]
        cta = "Own your operations"
        sec_overview = "Overview"
        sec_features = "Features"
        sec_why = "Why AntA"
        why_body = f"{p['name']} is hosted on your own resources and keeps working when the internet doesn't. When you need analytics, remote access or integration, switch online — on your terms, never as a condition of the software working at all."
        edition = f"{p['name']} · Brochure · Edition 2026"

    stats_html = "<div class='stats-grid'>" + "".join(
        f"<div class='stat'><div class='stat-num'>{v}</div><div class='stat-label'>{l}</div></div>"
        for v, l in stats
    ) + "</div>"
    features_html = "".join(f"<div class='feature-item'>{f}</div>" for f in features)

    cover = f"""
<div class="cover">
  <div class="cover-top">
    <div class="cover-logo"><img src="{LOGO_COPY}" alt="AntA"></div>
    <div class="cover-tag"><b>AntA · by MK Technologies</b>{tagline}</div>
  </div>
  <div class="cover-center">
    <span class="cover-pill">{pill}</span>
    <h1 class="cover-title">{hero}</h1>
    <div class="cover-sub">{sub}</div>
  </div>
  <div class="cover-bottom">
    <div class="cover-meta">
      <b>anta.mkrs@gmail.com</b><br>
      {"صُنع في مصر · صُمم للمنطقة" if is_ar else "Built in Egypt · Designed for the MEA region"}
    </div>
    <div class="cover-edition">{"إصدار 2026" if is_ar else "Edition 2026"}</div>
  </div>
</div>
"""

    body = f"""
<div class="main-content">

  <div class="chapter-header">
    <span class="section-tag">01 · {sec_overview}</span>
    <h2 class="section-title">{hero}</h2>
    <div class="divider"></div>
  </div>
  <p class="body-text">{desc}</p>
  {stats_html}

  <div class="chapter-header">
    <span class="section-tag">02 · {sec_features}</span>
    <h2 class="section-title">{"كل شيء مدمج، لا شيء مؤجّر" if is_ar else "Everything built in, nothing rented"}</h2>
    <div class="divider"></div>
  </div>
  <p class="body-text">{"كل قدرة أدناه جزء من المنصة افتراضيًا — لا وحدات مميزة، ولا رسوم فتح لكل مستخدم. استضافة محلية، تحكم كامل، ووصول غير محدود حيثما ينطبق." if is_ar else "Every capability below is part of the platform by default — no premium modules, no per-user unlock fees. Local hosting, full control, and unlimited usage where applicable."}</p>
  <div class="feature-list">{features_html}</div>

  <div class="chapter-header">
    <span class="section-tag">03 · {sec_why}</span>
    <h2 class="section-title">{"أمان بلا إنترنت، وذكاء عند الطلب" if is_ar else "Offline security. Online intelligence."}</h2>
    <div class="divider"></div>
  </div>
  <p class="body-text">{why_body}</p>

</div>
"""

    ending = f"""
<div class="ending">
  <div class="ending-top">
    <span class="ending-pill">{"لنتحدث" if is_ar else "Let's talk"}</span>
    <h2 class="ending-headline">{cta}<span class="accent">{" مع " + p['name_ar'] if is_ar else " with " + p['name']}</span></h2>
  </div>
  <div class="ending-bottom">
    <div class="ending-email">anta.mkrs@gmail.com</div>
    <div class="ending-website">{"إم كيه تكنولوجيز — حلول المرونة المعرفية للآلات" if is_ar else "MK Technologies — Machine Knowledge Resilience Solutions"}</div>
    <div class="ending-edition">{edition}</div>
  </div>
</div>
"""

    return HEAD.format(lang=lang, dir=dir_attr, title=title_attr, css=css) + cover + body + ending + FOOT


def build_profile_html(lang: str) -> str:
    is_ar = lang == "ar"
    dir_attr = "rtl" if is_ar else "ltr"
    css = SHARED_CSS

    if is_ar:
        pill = "الملف التعريفي"
        title_attr = "إم كيه تكنولوجيز · الملف التعريفي"
        hero = PROFILE["hero_ar"]
        sub = PROFILE["sub_ar"]
        title_card = PROFILE["title_ar"]
        sections = PROFILE["sections_ar"]
        ending_h = "جاهز لتملك عملياتك؟"
        ending_sub = "راسلنا على anta.mkrs@gmail.com واحجز عرضًا تجريبيًا."
        edition = "الملف التعريفي · إصدار 2026"
        meta_brand = "صُنع في مصر · صُمم للمنطقة"
    else:
        pill = "Company Profile"
        title_attr = "MK Technologies · Company Profile"
        hero = PROFILE["hero_en"]
        sub = PROFILE["sub_en"]
        title_card = PROFILE["title_en"]
        sections = PROFILE["sections_en"]
        ending_h = "Ready to own your operations?"
        ending_sub = "Write to us at anta.mkrs@gmail.com and book a demo."
        edition = "Company Profile · Edition 2026"
        meta_brand = "Built in Egypt · Designed for the MEA region"

    # Replace newlines in hero with <br>
    hero_html = hero.replace("\n", "<br>")

    cover = f"""
<div class="cover">
  <div class="cover-top">
    <div class="cover-logo"><img src="{LOGO_COPY}" alt="AntA"></div>
    <div class="cover-tag"><b>AntA · by MK Technologies</b>{"حلول المرونة المعرفية للآلات" if is_ar else "Machine Knowledge Resilience Solutions"}</div>
  </div>
  <div class="cover-center">
    <span class="cover-pill">{pill}</span>
    <h1 class="cover-title">{hero_html}</h1>
    <div class="cover-sub">{sub}</div>
  </div>
  <div class="cover-bottom">
    <div class="cover-meta">
      <b>anta.mkrs@gmail.com</b><br>{meta_brand}
    </div>
    <div class="cover-edition">{"إصدار 2026" if is_ar else "Edition 2026"}</div>
  </div>
</div>
"""

    body = "<div class='main-content'>"
    for tag, title, paragraphs in sections:
        body += f"""
  <div class="chapter-header">
    <span class="section-tag">{tag}</span>
    <h2 class="section-title">{title}</h2>
    <div class="divider"></div>
  </div>
"""
        for p in paragraphs:
            body += f"<p class='body-text'>{p}</p>"
    body += "</div>"

    ending = f"""
<div class="ending">
  <div class="ending-top">
    <span class="ending-pill">{"لنتحدث" if is_ar else "Let's talk"}</span>
    <h2 class="ending-headline">{ending_h}</h2>
    <div style="margin-top: 18px; font-size: 18px; line-height: 1.5; color: rgba(250,246,238,0.85); {'font-family: Noto Naskh Arabic, serif;' if is_ar else ''}">{ending_sub}</div>
  </div>
  <div class="ending-bottom">
    <div class="ending-email">anta.mkrs@gmail.com</div>
    <div class="ending-website">{"إم كيه تكنولوجيز — حلول المرونة المعرفية للآلات" if is_ar else "MK Technologies — Machine Knowledge Resilience Solutions"}</div>
    <div class="ending-edition">{edition}</div>
  </div>
</div>
"""

    return HEAD.format(lang=lang, dir=dir_attr, title=title_attr, css=css) + cover + body + ending + FOOT


# ----------------------------------------------------------------------------
# Main
# ----------------------------------------------------------------------------

def main():
    scripts_dir = Path("/home/z/my-project/scripts")
    html2pdf = Path("/home/z/my-project/skills/pdf/scripts/html2pdf-next.js")
    logo_src = Path(LOGO_PATH)

    # Output PDFs go to (NOT mirrored to public/ — these are delivered by email):
    #   /home/z/my-project/download/MK-Technologies-Company-Profile-{EN,AR}.pdf
    #   /home/z/my-project/download/brochures-en/AntA-*-Brochure-EN.pdf
    #   /home/z/my-project/download/brochures-ar/AntA-*-Brochure-AR.pdf

    # Clean old download dir from previous iteration
    new_dl = Path("/home/z/my-project/download")
    if new_dl.exists():
        shutil.rmtree(new_dl)
    (new_dl / "brochures-en").mkdir(parents=True, exist_ok=True)
    (new_dl / "brochures-ar").mkdir(parents=True, exist_ok=True)

    # Also clean any old PDFs from public/ (no longer openly downloadable)
    public = Path("/home/z/my-project/public")
    for old in [
        public / "MK-Technologies-Company-Profile.pdf",
        public / "MK-Technologies-Company-Profile-EN.pdf",
        public / "MK-Technologies-Company-Profile-AR.pdf",
        public / "brochures",
        public / "brochures-en",
        public / "brochures-ar",
    ]:
        if old.exists():
            if old.is_file():
                old.unlink()
            else:
                shutil.rmtree(old)

    targets = []

    # Company profile × 2 langs
    for lang, suffix in [("en", "EN"), ("ar", "AR")]:
        html = build_profile_html(lang)
        html_path = scripts_dir / f"company-profile-{suffix}.html"
        html_path.write_text(html, encoding="utf-8")
        # Copy logo next to HTML so relative path works
        shutil.copy(logo_src, scripts_dir / LOGO_COPY)
        pdf_path = new_dl / f"MK-Technologies-Company-Profile-{suffix}.pdf"
        targets.append((lang, html_path, pdf_path, f"Company Profile {suffix}"))

    # Care (rich content)
    for lang, suffix in [("en", "EN"), ("ar", "AR")]:
        html = build_care_html(lang)
        html_path = scripts_dir / f"brochure-AntA-Care-{suffix}.html"
        html_path.write_text(html, encoding="utf-8")
        shutil.copy(logo_src, scripts_dir / LOGO_COPY)
        pdf_path = new_dl / f"brochures-{suffix.lower()}" / f"AntA-Care-Brochure-{suffix}.pdf"
        targets.append((lang, html_path, pdf_path, f"AntA Care {suffix}"))

    # Other 5 products × 2 langs
    for p in OTHERS:
        for lang, suffix in [("en", "EN"), ("ar", "AR")]:
            html = build_other_html(p, lang)
            html_path = scripts_dir / f"brochure-{p['slug']}-{suffix}.html"
            html_path.write_text(html, encoding="utf-8")
            shutil.copy(logo_src, scripts_dir / LOGO_COPY)
            pdf_path = new_dl / f"brochures-{suffix.lower()}" / f"{p['slug']}-Brochure-{suffix}.pdf"
            targets.append((lang, html_path, pdf_path, f"{p['name']} {suffix}"))

    # Render each
    for lang, html_path, pdf_path, label in targets:
        r = subprocess.run(
            ["node", str(html2pdf), str(html_path),
             "--output", str(pdf_path),
             "--width", "720px",
             "--height", "1020px"],
            capture_output=True, text=True,
        )
        if r.returncode != 0:
            print(f"[{label}] RENDER FAILED")
            print(r.stdout[-2000:])
            print(r.stderr[-2000:])
            continue
        size_kb = pdf_path.stat().st_size // 1024
        print(f"[{label}] PDF OK  →  {pdf_path}  ({size_kb} KB)")

    # PDFs are NOT mirrored to public/ — they live only in /home/z/my-project/download/
    # and are delivered by email after someone submits the Request Specs form.
    print()
    print("Done. PDFs are in /home/z/my-project/download/ (delivered by email on request).")


if __name__ == "__main__":
    main()
