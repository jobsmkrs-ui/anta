#!/usr/bin/env python3
"""
Generate 6 bilingual (Arabic + English) product brochures for AntA by MK Technologies.
Uses the Creative Flow HTML→PDF pipeline (Playwright via html2pdf-next.js).
"""

import json
import os
import subprocess
from pathlib import Path

# ----------------------------------------------------------------------------
# Product data — synced with the website src/lib/i18n.ts
# ----------------------------------------------------------------------------

PRODUCTS = [
    {
        "slug": "AntA-Care",
        "name_en": "AntA Care",
        "name_ar": "أنتا كير",
        "tagline_en": "Clinic and Medical Center Management",
        "tagline_ar": "إدارة العيادات والمراكز الطبية",
        "desc_en": (
            "A smart management system for clinics and medical centers that works 100% "
            "offline and stores patient data locally, with the option to work online as well. "
            "Host it on your own resources and give access to up to 6 locations free of charge."
        ),
        "desc_ar": (
            "نظام ذكي لإدارة العيادات والمراكز الطبية يعمل 100% بدون إنترنت ويحفظ بيانات المرضى محليًا، "
            "مع إمكانية العمل عبر الإنترنت أيضًا. يُستضاف على مواردك الخاصة ويتيح الوصول من 6 مواقع مجانًا."
        ),
        "features_en": [
            "Patient records with full visit history and diagnoses",
            "In-house pharmacy management",
            "Doctor commission rates",
            "Appointments and an integrated queue system",
            "Financial module and partner management",
            "Multiple roles and permissions",
            "Unlimited visits, patients, doctors, branches and storage — with no hidden fees",
        ],
        "features_ar": [
            "بيانات المرضى مع سجل الزيارات والتشخيصات",
            "إدارة الصيدلية الداخلية",
            "نسب عمولات الأطباء",
            "المواعيد ونظام الطابور المتكامل",
            "الوحدة المالية وإدارة الشركاء",
            "أدوار وصلاحيات متعددة",
            "زيارات ومرضى وأطباء وفروع ومساحة تخزين بلا حدود — وبدون رسوم خفية",
        ],
        "use_case_en": (
            "Built for clinics and medical centers that cannot afford downtime — rural practices, "
            "specialist centers, and multi-branch medical groups that need patient data, "
            "pharmacy, queues and finances in one locally-hosted system."
        ),
        "use_case_ar": (
            "مصمم للعيادات والمراكز الطبية التي لا تقبل توقف الأعمال — العيادات الريفية، "
            "المراكز المتخصصة، والمجموعات الطبية متعددة الفروع التي تحتاج بيانات المرضى والصيدلية "
            "والطوابير والمالية في نظام واحد مستضاف محليًا."
        ),
        "stats": [("100%", "Offline"), ("∞", "Patients"), ("6", "Locations"), ("0", "Hidden fees")],
    },
    {
        "slug": "AntA-Shop",
        "name_en": "AntA Shop",
        "name_ar": "أنتا شوب",
        "tagline_en": "POS and Retail Management",
        "tagline_ar": "نقاط البيع وإدارة التجزئة",
        "desc_en": (
            "Manage all your stores on one platform, from the cashier to the balance sheet. "
            "AntA Shop combines POS, purchasing, warehouses, accounting and analytics across "
            "every branch — with instant P&L and no per-user fees."
        ),
        "desc_ar": (
            "أدر جميع متاجرك على منصة واحدة، من الكاشير حتى الميزانية. يجمع أنتا شوب نقاط البيع "
            "والمشتريات والمخازن والمحاسبة والتحليلات عبر كل فرع — مع أرباح وخسائر فورية ودون رسوم لكل مستخدم."
        ),
        "features_en": [
            "Point of sale, purchasing, warehouses and inventory",
            "Multi-branch management",
            "Full accounting: instant P&L, income statement, cash flow, ledger and treasury",
            "Payroll, expenses and transfers",
            "Vendor and client management",
            "Promotions and loyalty programs",
            "Users and permissions",
            "Smart analytics and reports",
        ],
        "features_ar": [
            "نقطة البيع والمشتريات والمخازن والمخزون",
            "إدارة الفروع المتعددة",
            "محاسبة كاملة: الأرباح والخسائر الفورية، قائمة الدخل، التدفقات النقدية، دفتر الأستاذ، والخزينة",
            "الرواتب والمصروفات والتحويلات",
            "إدارة الموردين والعملاء",
            "العروض الترويجية وبرامج الولاء",
            "المستخدمون والصلاحيات",
            "تحليلات وتقارير ذكية",
        ],
        "use_case_en": (
            "For retail chains, multi-branch operators, and independent stores that want one "
            "system from cashier to ledger — with accounting that closes the books in real time "
            "and analytics that work without an internet connection."
        ),
        "use_case_ar": (
            "لسلاسل التجزئة والمشغلين متعددي الفروع والمتاجر المستقلة التي تريد نظامًا واحدًا من الكاشير "
            "إلى دفتر الأستاذ — مع محاسبة تغلق الدفاتر فوريًا وتحليلات تعمل دون اتصال بالإنترنت."
        ),
        "stats": [("1", "Platform"), ("∞", "Branches"), ("24/7", "P&L"), ("0", "Per-user fees")],
    },
    {
        "slug": "AntA-Fleet",
        "name_en": "AntA Fleet",
        "name_ar": "أنتا فليت",
        "tagline_en": "Fleet Management",
        "tagline_ar": "إدارة الأساطيل",
        "desc_en": (
            "Run company vehicles with full visibility and control. AntA Fleet automates reminders, "
            "escalations and reporting so no license, maintenance or document ever slips through "
            "the cracks again."
        ),
        "desc_ar": (
            "أدر سيارات الشركة برؤية كاملة وتحكم تام. يؤتمت أنتا فليت التذكيرات والتصعيد والتقارير، "
            "فلا تفوتك ترخيص أو صيانة أو مستند بعد الآن."
        ),
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
        "use_case_en": (
            "For logistics companies, delivery fleets, and any business operating more than a handful "
            "of vehicles — where missing a renewal, a maintenance window or a driver escalation "
            "directly costs money and reputation."
        ),
        "use_case_ar": (
            "لشركات النقل وأساطيل التسليم وأي عمل يدير أكثر من عدد قليل من المركبات — حيث تفويت "
            "تجديد أو نافذة صيانة أو تصعيد سائق يكلّف مباشرة في المال والسمعة."
        ),
        "stats": [("100%", "Visibility"), ("∞", "Vehicles"), ("24/7", "Alerts"), ("0", "Missed renewals")],
    },
    {
        "slug": "AntA-Home",
        "name_en": "AntA Home",
        "name_ar": "أنتا هوم",
        "tagline_en": "Smart Home Management",
        "tagline_ar": "إدارة المنزل الذكي",
        "desc_en": (
            "Manage your home like a well-run organization. AntA Home tracks staff, scheduled "
            "maintenance, warranties, stock, seasonal checklists and costs — all in one secure, "
            "locally-hosted place."
        ),
        "desc_ar": (
            "أدر منزلك كما تُدار المؤسسات المنظمة. يتتبع أنتا هوم العاملين والصيانة المجدولة "
            "والضمانات والمخزون والقوائم الموسمية والتكاليف — كل ذلك في مكان واحد آمن ومستضاف محليًا."
        ),
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
        "use_case_en": (
            "For households that operate at the scale of a small business — multiple staff, "
            "vehicles, appliances and recurring expenses — and want one resilient, private system "
            "to keep track of everything that keeps the home running."
        ),
        "use_case_ar": (
            "للمنازل التي تعمل بمقياس عمل صغير — موظفون ومركبات وأجهزة ومصروفات متكررة — وتريد "
            "نظامًا واحدًا مرنًا وخاصًا لتتبع كل ما يُبقي المنزل يعمل."
        ),
        "stats": [("1", "Household"), ("∞", "Staff & items"), ("365d", "Coverage"), ("0", "Missed warranties")],
    },
    {
        "slug": "AntA-Car",
        "name_en": "AntA Car",
        "name_ar": "أنتا كار",
        "tagline_en": "Private Car Management",
        "tagline_ar": "إدارة السيارات الخاصة",
        "desc_en": (
            "Your own interactive garage. AntA Car tracks maintenance, mileage, tires, batteries, "
            "violations and renewals across every vehicle you own — with cost reports that show what "
            "each car actually costs to run."
        ),
        "desc_ar": (
            "جراجك التفاعلي الخاص. يتتبع أنتا كار الصيانة وعدّاد الكيلومترات والإطارات والبطاريات "
            "والمخالفات والتجديدات لكل سيارة تملكها — مع تقارير تكاليف تكشف ما تكلفه كل سيارة فعلًا في التشغيل."
        ),
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
        "use_case_en": (
            "For individuals and families managing multiple vehicles — including drivers, summer "
            "and winter tire rotations, battery replacements, and renewals — who want one private "
            "garage that never forgets a date."
        ),
        "use_case_ar": (
            "للأفراد والعائلات التي تدير مركبات متعددة — بمن فيهم السائقون، وتبديل إطارات الصيف "
            "والشتاء، واستبدال البطاريات، والتجديدات — وتريد جراجًا خاصًا واحدًا لا ينسى موعدًا."
        ),
        "stats": [("∞", "Cars"), ("100%", "Track record"), ("0", "Missed renewals"), ("1", "Garage")],
    },
    {
        "slug": "AntA-HR",
        "name_en": "AntA HR",
        "name_ar": "أنتا إتش آر",
        "tagline_en": "HR Operations Solutions",
        "tagline_ar": "حلول عمليات الموارد البشرية",
        "desc_en": (
            "Works standalone or integrated with your current HRIS, covering the employee life cycle "
            "from job request to end of service. AntA HR handles documents, assets, renewals, ATS, "
            "onboarding, vacation planning and the digital archive — all in one workflow."
        ),
        "desc_ar": (
            "يعمل بشكل مستقل أو متكاملًا مع نظام الموارد البشرية الحالي، ويغطي دورة حياة الموظف من "
            "طلب الوظيفة حتى نهاية الخدمة. يدير أنتا إتش آر المستندات والأصول والتجديدات وتتبع المتقدمين "
            "والتهيئة ومخطط الإجازات والأرشيف الرقمي — كل ذلك في مسار عمل واحد."
        ),
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
        "use_case_en": (
            "For HR teams that want one workflow from job request to end of service — standalone "
            "or layered on top of an existing HRIS — without surrendering employee data to a "
            "foreign cloud or paying per-seat licenses for every employee."
        ),
        "use_case_ar": (
            "لفرق الموارد البشرية التي تريد مسار عمل واحد من طلب الوظيفة حتى نهاية الخدمة — مستقلًا "
            "أو مضافًا فوق نظام HRIS قائم — دون تسليم بيانات الموظفين لسحابة أجنبية أو دفع رسوم لكل مقعد لكل موظف."
        ),
        "stats": [("100%", "Life cycle"), ("∞", "Employees"), ("1", "Workflow"), ("0", "Cloud lock-in")],
    },
]

# ----------------------------------------------------------------------------
# HTML template (Creative Flow)
# ----------------------------------------------------------------------------

CSS = """
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
"""

COVER_BODY = """
<div class="cover">
  <div class="cover-top">
    <div class="cover-logo">A</div>
    <div class="cover-tag">
      <b>AntA by MK Technologies</b>
      Machine Knowledge Resilience Solutions
    </div>
  </div>
  <div class="cover-center">
    <span class="cover-pill">Product Brochure · {tagline_en} · {tagline_ar}</span>
    <h1 class="cover-title">
      {name_en}<br>
      <span class="accent">{name_ar}</span>
    </h1>
    <div class="cover-sub">{tagline_en}</div>
    <div class="cover-arabic">{tagline_ar}</div>
  </div>
  <div class="cover-bottom">
    <div class="cover-meta">
      <b>anta.mkrs@gmail.com</b><br>
      Built in Egypt · Designed for the MEA region
    </div>
    <div class="cover-edition">Edition 2026</div>
  </div>
</div>
"""

COVER_STYLE = """
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
.cover-top { position: relative; display: flex; justify-content: space-between; align-items: flex-start; }
.cover-logo {
  width: 56px; height: 56px; background: #faf6ee; border-radius: 14px;
  display: grid; place-items: center; color: var(--c-deep);
  font-weight: 900; font-size: 30px; font-family: 'Playfair Display', serif;
}
.cover-tag { font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(250,246,238,0.75); text-align: right; }
.cover-tag b { color: var(--c-amber); display: block; font-weight: 700; letter-spacing: 0.18em; }
.cover-center { position: relative; z-index: 2; }
.cover-pill {
  display: inline-block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--c-amber); border: 1px solid rgba(217,119,6,0.4); background: rgba(217,119,6,0.08);
  padding: 6px 14px; border-radius: 999px; margin-bottom: 22px;
}
.cover-title {
  font-family: 'Playfair Display', serif; font-size: 78px; line-height: 0.96;
  font-weight: 900; color: #faf6ee; letter-spacing: -0.02em; margin: 0;
}
.cover-title .accent { color: var(--c-amber); font-style: italic; font-weight: 400; }
.cover-sub {
  margin-top: 24px; font-size: 22px; line-height: 1.3; max-width: 540px;
  color: rgba(250,246,238,0.92); font-weight: 300;
}
.cover-arabic {
  direction: rtl; font-family: 'Noto Naskh Arabic', serif; font-size: 22px;
  line-height: 1.5; margin-top: 14px; color: rgba(250,246,238,0.7);
}
.cover-bottom {
  position: relative; z-index: 2; display: flex; justify-content: space-between;
  align-items: flex-end; border-top: 1px solid rgba(250,246,238,0.15); padding-top: 24px;
}
.cover-meta { font-size: 11px; color: rgba(250,246,238,0.7); letter-spacing: 0.06em; line-height: 1.6; }
.cover-meta b { color: #faf6ee; font-weight: 600; }
.cover-edition {
  font-family: 'Playfair Display', serif; font-size: 12px;
  letter-spacing: 0.25em; text-transform: uppercase; color: var(--c-amber);
}
"""

BODY_STYLE = """
.main-content { padding: 56px 56px 50px 56px; }
.section-tag {
  display: inline-block; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--c-amber); border: 1px solid rgba(217,119,6,0.35); background: rgba(217,119,6,0.06);
  padding: 4px 12px; border-radius: 999px;
}
.section-title {
  font-family: 'Playfair Display', serif; font-size: 30px; line-height: 1.15;
  font-weight: 900; color: var(--c-deep); margin: 12px 0 6px 0;
}
.section-title-ar {
  direction: rtl; font-family: 'Noto Naskh Arabic', serif; font-size: 22px;
  font-weight: 700; color: var(--c-brand); margin-top: 0;
}
.divider { height: 3px; width: 56px; background: var(--c-amber); margin: 14px 0 18px 0; border-radius: 2px; }
.body-text { font-size: 14.5px; line-height: 1.7; color: var(--c-ink); margin-bottom: 12px; }
.body-text-ar {
  direction: rtl; font-family: 'Noto Naskh Arabic', serif; font-size: 15px; line-height: 1.85;
  color: var(--c-ink); text-align: right; margin-bottom: 14px;
}
.chapter-header { break-after: avoid; break-inside: avoid; margin-top: 28px; }
.chapter-header:first-child { margin-top: 0; }

.stats-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
  margin-top: 18px; break-inside: avoid;
}
.stat {
  border: 1px solid var(--c-line); background: white; border-radius: 12px;
  padding: 14px 10px; text-align: center;
}
.stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; color: var(--c-amber); line-height: 1; }
.stat-label { margin-top: 4px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); }

.feature-list {
  margin-top: 16px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
}
.feature-col {
  border: 1px solid var(--c-line); background: white; border-radius: 14px; padding: 16px 18px;
}
.feature-col h3 { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--c-amber); margin: 0 0 12px 0; font-weight: 700; }
.feature-col.ar { direction: rtl; text-align: right; font-family: 'Noto Naskh Arabic', serif; }
.feature-item {
  position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 13.5px; line-height: 1.55; color: var(--c-ink);
}
.feature-item::before {
  content: ''; position: absolute; left: 0; top: 7px;
  width: 9px; height: 9px; border-radius: 50%; background: var(--c-amber);
}
.feature-col.ar .feature-item { padding-left: 0; padding-right: 22px; font-size: 14px; line-height: 1.8; }
.feature-col.ar .feature-item::before { left: auto; right: 0; }

.callout {
  margin-top: 18px;
  border-left: 4px solid var(--c-amber);
  background: rgba(217,119,6,0.06);
  padding: 16px 20px;
  border-radius: 0 12px 12px 0;
}
.callout h4 { margin: 0 0 4px 0; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--c-amber); font-weight: 700; }
.callout p { margin: 0; font-size: 13.5px; line-height: 1.65; color: var(--c-ink); }
.callout.ar { direction: rtl; text-align: right; border-left: none; border-right: 4px solid var(--c-amber); border-radius: 12px 0 0 12px; font-family: 'Noto Naskh Arabic', serif; }
.callout.ar p { font-size: 14.5px; line-height: 1.85; }
"""

ENDING_BODY = """
<div class="ending">
  <div class="ending-top">
    <span class="ending-pill">Let's talk · لنتحدث</span>
    <h2 class="ending-headline">
      Own your operations<br>
      <span class="accent">with {name_en}</span>
    </h2>
    <div class="ending-ar">
      امتلك عملياتك مع {name_ar}
    </div>
  </div>
  <div class="ending-bottom">
    <div class="ending-email">anta.mkrs@gmail.com</div>
    <div class="ending-website">MK Technologies — Machine Knowledge Resilience Solutions</div>
    <div class="ending-edition">{name_en} Brochure · Edition 2026</div>
  </div>
</div>
"""

ENDING_STYLE = """
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
.ending-headline {
  font-family: 'Playfair Display', serif; font-size: 56px; line-height: 1.05;
  font-weight: 900; margin-top: 24px; letter-spacing: -0.01em;
}
.ending-headline .accent { color: var(--c-amber); font-style: italic; font-weight: 400; }
.ending-ar {
  direction: rtl; font-family: 'Noto Naskh Arabic', serif; font-size: 28px;
  line-height: 1.4; margin-top: 16px; color: rgba(250,246,238,0.85);
}
.ending-bottom { position: relative; z-index: 2; border-top: 1px solid rgba(250,246,238,0.15); padding-top: 24px; }
.ending-email { font-size: 22px; font-weight: 600; color: #faf6ee; }
.ending-website { font-size: 13px; color: rgba(250,246,238,0.65); margin-top: 6px; }
.ending-edition {
  font-family: 'Playfair Display', serif; font-size: 12px;
  letter-spacing: 0.25em; text-transform: uppercase; color: var(--c-amber); margin-top: 14px;
}
"""

HEAD = """
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <title>{name_en} Brochure — AntA by MK Technologies</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet">
  <style>
{css}
{cover_style}
{body_style}
{ending_style}
  </style>
</head>
<body>
"""

FOOT = """
</body>
</html>
"""


def build_html(p: dict) -> str:
    # Stats HTML
    stats_html = "<div class='stats-grid'>" + "".join(
        f"<div class='stat'><div class='stat-num'>{v}</div><div class='stat-label'>{l}</div></div>"
        for v, l in p["stats"]
    ) + "</div>"

    # Features (English column)
    features_en_html = "".join(
        f"<div class='feature-item'>{f}</div>" for f in p["features_en"]
    )
    features_ar_html = "".join(
        f"<div class='feature-item'>{f}</div>" for f in p["features_ar"]
    )

    html_parts = [
        HEAD.format(
            name_en=p["name_en"],
            css=CSS,
            cover_style=COVER_STYLE,
            body_style=BODY_STYLE,
            ending_style=ENDING_STYLE,
        ),
        COVER_BODY.format(**p),
        "<div class='main-content'>",

        # Section 1: Overview
        "<div class='chapter-header'>"
        "<span class='section-tag'>01 · Overview · نظرة عامة</span>"
        f"<h2 class='section-title'>{p['name_en']} — {p['tagline_en']}</h2>"
        f"<h3 class='section-title-ar'>{p['name_ar']} — {p['tagline_ar']}</h3>"
        "<div class='divider'></div>"
        "</div>",
        f"<p class='body-text'>{p['desc_en']}</p>",
        f"<p class='body-text-ar'>{p['desc_ar']}</p>",
        stats_html,

        # Section 2: Features
        "<div class='chapter-header'>"
        "<span class='section-tag'>02 · Features · المزايا</span>"
        "<h2 class='section-title'>Everything built in, nothing rented</h2>"
        "<h3 class='section-title-ar'>كل شيء مدمج، لا شيء مؤجّر</h3>"
        "<div class='divider'></div>"
        "</div>",
        f"<p class='body-text'>Every {p['name_en']} capability below is part of the platform by default — no premium modules, no per-user unlock fees. Local hosting, full control, and unlimited usage where applicable.</p>",
        f"<div class='feature-list'>"
        f"<div class='feature-col en'><h3>Features</h3>{features_en_html}</div>"
        f"<div class='feature-col ar'><h3>المزايا</h3>{features_ar_html}</div>"
        f"</div>",

        # Section 3: Use case
        "<div class='chapter-header'>"
        "<span class='section-tag'>03 · Use Case · حالة الاستخدام</span>"
        "<h2 class='section-title'>Who it's for</h2>"
        "<h3 class='section-title-ar'>لمن صُمم</h3>"
        "<div class='divider'></div>"
        "</div>",
        f"<div class='callout'><h4>Use case</h4><p>{p['use_case_en']}</p></div>",
        f"<div class='callout ar'><h4>حالة الاستخدام</h4><p>{p['use_case_ar']}</p></div>",

        # Section 4: Why AntA (closing)
        "<div class='chapter-header'>"
        "<span class='section-tag'>04 · Why AntA · لماذا أنتا</span>"
        "<h2 class='section-title'>Offline security. Online intelligence.</h2>"
        "<h3 class='section-title-ar'>أمان بلا إنترنت، وذكاء عند الطلب.</h3>"
        "<div class='divider'></div>"
        "</div>",
        f"<p class='body-text'>{p['name_en']} is hosted on your own resources and keeps working when the internet doesn't. When you need analytics, remote access or integration, switch online — on your terms, never as a condition of the software working at all.</p>",
        f"<p class='body-text-ar'>يُستضاف {p['name_ar']} على مواردك الخاصة ويواصل العمل حين ينقطع الإنترنت. وعندما تحتاج التحليلات أو الوصول عن بُعد أو التكامل، اتصل بالإنترنت — بشروطك، وليس كشرط لأن يعمل النظام أصلًا.</p>",

        "</div>",  # /main-content

        ENDING_BODY.format(**p),
        FOOT,
    ]
    return "\n".join(html_parts)


def main():
    scripts_dir = Path("/home/z/my-project/scripts")
    pdf_skill_dir = Path("/home/z/my-project/skills/pdf")
    html2pdf = pdf_skill_dir / "scripts" / "html2pdf-next.js"
    validator = pdf_skill_dir / "scripts" / "poster_validate.py"

    # Output to /home/z/my-project/download/brochures/ — copied to public/brochures later
    out_dir = Path("/home/z/my-project/download/brochures")
    out_dir.mkdir(parents=True, exist_ok=True)

    for p in PRODUCTS:
        slug = p["slug"]
        html_path = scripts_dir / f"brochure-{slug}.html"
        pdf_path = out_dir / f"{slug}-Brochure.pdf"

        # Build HTML
        html = build_html(p)
        html_path.write_text(html, encoding="utf-8")
        print(f"[{slug}] Wrote {html_path}")

        # Validate HTML
        v = subprocess.run(
            ["python3", str(validator), "check-html", str(html_path)],
            capture_output=True, text=True,
        )
        if v.returncode != 0:
            print(f"[{slug}] Validator errors:")
            print(v.stdout)
            print(v.stderr)

        # Render PDF
        r = subprocess.run(
            ["node", str(html2pdf), str(html_path),
             "--output", str(pdf_path),
             "--width", "720px",
             "--height", "1020px"],
            capture_output=True, text=True,
        )
        if r.returncode != 0:
            print(f"[{slug}] Render FAILED:")
            print(r.stdout)
            print(r.stderr)
        else:
            size_kb = pdf_path.stat().st_size // 1024
            print(f"[{slug}] PDF OK  →  {pdf_path}  ({size_kb} KB)")

    # Also copy the company profile
    cp_html = scripts_dir / "company-profile.html"
    cp_pdf = out_dir.parent / "MK-Technologies-Company-Profile.pdf"
    if cp_html.exists():
        r = subprocess.run(
            ["node", str(html2pdf), str(cp_html),
             "--output", str(cp_pdf),
             "--width", "720px",
             "--height", "1020px"],
            capture_output=True, text=True,
        )
        if r.returncode != 0:
            print(f"[company-profile] Render FAILED:")
            print(r.stdout); print(r.stderr)
        else:
            size_kb = cp_pdf.stat().st_size // 1024
            print(f"[company-profile] PDF OK  →  {cp_pdf}  ({size_kb} KB)")


if __name__ == "__main__":
    main()
