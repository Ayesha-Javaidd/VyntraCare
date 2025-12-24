# VYNTRA CARE — DETAILED SYSTEM REQUIREMENTS DOCUMENT
## (For Developer Use — Includes Subacute Module, EnCommerce, Admin, and PDF Extraction Tool)

---

### 1. CONTEXT / BACKGROUND

---

Vyntra Care is creating a unified, AI-powered medical supply ecosystem consisting of:
* **Subacute Supplies Management System** (for skilled nursing facilities and LTACs)
* **AI-driven e-commerce platform** for respiratory patients (CPAP, oxygen, sleep solutions)
* **Admin dashboard** for real-time oversight, analytics, trends, and operational control
* **Automated PDF extraction tool** that converts EMAR forms into structured CPT-code data

The platform must be modern, automated, highly reliable, and capable of scaling into a full medical supply and AI health-tech environment.

---

### 2. USER TYPES

---

**A. Facility Managers** (Subacute Supplies Portal)  
**B. E-Commerce Customers** (CPAP shoppers)  
**C. Admin** (You / Vyntra Care)  

Each user interacts with different modules with different objectives.

---

### 3. DETAILED PROBLEMS / PAIN POINTS & SYSTEM SOLUTIONS

---

#### A. Facility Managers

---

**PAIN POINTS:**
* Manual supply tracking creates errors and inconsistency.
* Facilities often overstock or run out of essential items.
* No historical usage trends to guide ordering.
* Ordering wrong items due to lack of visual guidance and catalog confusion.
* No centralized way to view invoices or past orders.
* Weekly reporting is inefficient and inconsistent across staff.

**SYSTEM SOLUTIONS REQUIRED:**

**1. QR-CODE WEEKLY INVENTORY WORKFLOW**
* Manager scans QR ® opens facility’s supply list with item images.
* Manager enters AVAILABLE QUANTITY per item (example: “2 boxes left”).
* System calculates:
    – Total used boxes
    – Remaining stock
    – Weekly usage
    – 8-week trend line for each item.
* Low-stock flags appear automatically when below reorder threshold.

**2. FACILITY DASHBOARD**
* Shows current stock levels, low-stock alerts, trend graphs, pending orders.
* Displays the facility's full usage history and reorder patterns.

**3. FACILITY-ONLY SUPPLY CATALOG**
* Separate from public e-commerce store.
* Contains facility-specific items (nasal cannulas, oxygen tubing, trach supplies, etc.).
* Bulk pricing and reorder quantities.
* Add-to-cart ® Submit order ® View status ® View invoices.

**4. INVOICE & ORDER HISTORY**
* Facility managers can view invoices easily.
* Admin may upload invoices or system generates them automatically.

**5. AUTOMATION LOGIC**
* Weekly reminders to update inventory.
* Auto snapshot logging of inventory and usage for audit purposes.
* Auto reorder suggestions based on historical usage patterns.

---

#### B. Admin (You / Vyntra Care)

---

**PAIN POINTS:**
* Lack of visibility across all facility operations.
* Manual calculations for usage and inventory.
* No integrated analytics for customer behavior or facility performance.
* Need a scalable, modern, automated platform.

**SYSTEM SOLUTIONS REQUIRED:**

**1. FULL VISIBILITY DASHBOARD**
* View stock levels, usage trends, facilities, and order activity.
* Admin can manage catalogs, thresholds, and pricing.

**2. ANALYTICS ENGINE**
* Customer behavior tracking (page views, popular items, abandoned carts).
* Facility usage predictions using trend analysis.
* Identify cost-saving opportunities for facilities.

**3. PLATFORM MANAGEMENT TOOLS**
* Add/remove items from facility catalog or e-commerce store.
* Adjust reorder thresholds.
* Control permissions and user roles.
* Export data (CSV, PDF).

**4. BILLING & FINANCIAL INSIGHTS**
* View invoices, revenue, restock costs, and profitability metrics.

---

#### C. E-Commerce Customers

---

**PAIN POINTS:**
* Don’t know which CPAP mask size fits them.
* Hard to trust typical online medical supply stores.
* Confusion due to too many options.
* Need expert guidance but most stores provide none.

**SYSTEM SOLUTIONS REQUIRED:**

**1. AI MASK SIZING & RECOMMENDATION TOOL**
* Face detection ® mask size ® recommended models.
* Users get instant confidence to complete purchase.

**2. HIGH-TRUST SHOPPING EXPERIENCE**
* Clean, medical, modern UI.
* Simple navigation.
* Quick access to respiratory education.

**3. PERSONALIZED SHOPPING FLOWS**
* AI chatbot for support.
* Bundles, alternative suggestions, compatibility guidance.

---

### 4. PDF EXTRACTION TOOL — REQUIREMENTS

---

**PURPOSE:** Convert EMAR forms into structured CPT-count data automatically.

**PAIN POINTS:**
* Facilities submit EMAR PDFs with checkmarks under each order category.
* Counting checkmarks manually is error-prone and slow.
* Each order corresponds to a CPT code, and must be counted separately.

**SYSTEM SOLUTIONS REQUIRED:**
* Upload PDF ® System extracts:
    – Each EMAR order section
    – Only checkmarks (ignore X marks)
    – Count checkmarks PER SECTION (not combined)
    – Output JSON:
```json
{
"Order A CPT94640": 6 units,
"Order B CPTE0480": 12 units
}

```

* Admin can review, edit, and export data.
* Connect output to inventory usage and billing workflows.
* Fast processing with minimal user involvement.

---

### 5. DEVELOPER IMPLEMENTATION QUESTIONS (ANSWERED)

---

**Q1. Should Subacute Supplies catalog be completely separate from e-commerce?** 
A: Yes. Different items, pricing, and access permissions. Facility-only.

**Q2. Should managers only see their own facility data?** 
A: Yes. Role-based permissions required.

**Q3. How should usage and low-stock thresholds be calculated?** 
A: Based on AVAILABLE QUANTITY input weekly and predefined reorder minimum levels.

**Q4. Should invoices be uploaded manually or auto-generated?** 
A: Eventually auto-generated, but allow manual upload initially.

**Q5. Should trend graphs show weekly or daily data?** 
A: Weekly, aggregated, 8-week rolling trend.

**Q6. How should the PDF extraction tool integrate?** 
A: Standalone module first ® export JSON ® later integrate directly into inventory/billing automations.

**Q7. Will Airtable still be used?** 
A: Optional for early phases. System should eventually replace Airtable.

**Q8. Which areas require AI?** 
A: E-commerce mask sizing, chatbot support, recommendation engine, and future billing automation.

---

### 6. SUMMARY

---

The Vyntra Care platform must solve core problems across three user types:

* **Facility Managers** ® automate inventory, reduce errors, streamline ordering
* **Admin** ® gain full visibility, analytics, automation, and control
* **E-Commerce Customers** ® receive trust, clarity, AI help, and an outstanding buying experience

Across all modules, the system must look and function as a premium, futuristic, AI-powered healthcare ecosystem.

---