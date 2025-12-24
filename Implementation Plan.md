# Implementation Plan - Vyntra Care

Vyntra Care is an AI-powered healthcare supply ecosystem. This plan outlines the steps to build the Admin, Facility, and Customer modules, following the Apple Health design aesthetic.

## User Review Required

> [!IMPORTANT]
> The current boilerplate uses a dark theme. I will be transitioning the entire UI to a light, Apple Health–inspired aesthetic (white/off-white backgrounds, soft gradients, rounded corners).
> Anonymous checkout is required for customers. I will implement this by allowing orders to be placed without a registered user account, identifying them by email.

## Proposed Changes

### 1. Database & Authentication (Supabase)

*   **Schema**: Implement the ERD in Supabase, including `users`, `facility`, `product`, `order`, `cart`, `payment`, and a new `price_buckets` table for catalog assignment.
*   **RLS Policies**:
    *   `users`: Users can read/write their own data. Admins can read all.
    *   `facility`: Facility managers can see only their facility. Admins can see all.
    *   `product`: Everyone can read public products. Facility-only products restricted to facility managers and admins.
    *   `order`: Customers can see their own orders (by email/id). Facility managers can see facility orders. Admins can see all.
*   **Auth**: Set up Supabase Auth for Admin and Facility Managers. Customers will use anonymous/email-based tracking.

### 2. Design System (Apple Health Aesthetic)

*   Update [globals.css](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/globals.css) with a refined color palette (blues, teals, muted greens, white/off-white).
*   Create reusable Tailwind components: `Card`, `Button`, `Input`, `Dropdown`, `Table` with Apple-like styling.

### 3. Admin Module

*   **[MODIFY] [layout.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/admin/layout.tsx)**: Implement the universal Admin Sidebar.
*   **[MODIFY] [page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/admin/dashboard/page.tsx)**: Redesign Admin Dashboard with global metrics, revenue dropdown, and order history ("Invoice" instead of status).
*   **[NEW] [products/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/admin/products/page.tsx)**: Manage Products (CRUD, Pricing Buckets).
*   **[NEW] [facilities/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/admin/facilities/page.tsx)**: View self-registered facilities and their usage.
*   **[NEW] [catalog/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/admin/catalog/page.tsx)**: Catalog Assignment visually grouped by price buckets.

### 4. Facility Manager Module

*   **[NEW] [layout.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/facility/layout.tsx)**: Implement the universal Facility Sidebar.
*   **[MODIFY] [page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/facility/dashboard/page.tsx)**: Facility Dashboard (Stock, Alerts, usage trends).
*   **[NEW] [inventory/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/facility/inventory/page.tsx)**: QR-based inventory update flow.
*   **[NEW] [products/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/facility/products/page.tsx)**: Facility-only product catalog.

### 5. Customer Module

*   **[MODIFY] [page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/page.tsx)**: Landing page with trust-driven design and Facility Registration.
*   **[NEW] [shop/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/shop/page.tsx)**: Anonymous e-commerce product listing.
*   **[NEW] [shop/sizing/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/shop/sizing/page.tsx)**: AI Mask Sizing Tool interface.

### 6. PDF → CPT Extraction Tool

*   **[NEW] [admin/pdf-extraction/page.tsx](file:///c:/Users/Hassan/Desktop/vyntra-care/src/app/admin/pdf-extraction/page.tsx)**: Standalone tool for PDF processing.

## Verification Plan

### Automated Tests
*   Run `npm run build` to ensure no build errors.
*   Supabase RLS testing: Verify that facility data is isolated.

### Manual Verification
*   **Admin Flow**: Test product creation, price bucket assignment, and revenue filtering.
*   **Facility Flow**: Mock a QR scan to test the inventory update flow and usage calculation.
*   **Customer Flow**: Test anonymous checkout and order tracking.
*   **PDF Extraction**: Upload a sample EMAR PDF and verify CPT counts.
