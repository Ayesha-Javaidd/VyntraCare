import { Routes } from '@angular/router';

// Layouts
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FacilityLayoutComponent } from './layouts/facility-layout/facility-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// Public pages
import { HomeComponent } from './features/public/pages/home/home.component';
import { AboutComponent } from './features/public/pages/about/about.component';
import { AiVisionComponent } from './features/public/pages/ai-vision/ai-vision.component';
import { ComplianceComponent } from './features/public/pages/compliance/compliance.component';
import { ContactComponent } from './features/public/pages/contact/contact.component';
import { HelpComponent } from './features/public/pages/help/help.component';
import { PrivacyComponent } from './features/public/pages/privacy/privacy.component';
import { ReturnsComponent } from './features/public/pages/returns/returns.component';
import { ShippingComponent } from './features/public/pages/shipping/shipping.component';
import { TermsComponent } from './features/public/pages/terms/terms.component';
import { ShopComponent } from './features/public/pages/shop/shop.component';
import { ShopCheckoutComponent } from './features/public/pages/shop-checkout/shop-checkout.component';
import { ShopSizingComponent } from './features/public/pages/shop-sizing/shop-sizing.component';

// Admin pages
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminCatalogComponent } from './features/admin/pages/admin-catalog/admin-catalog.component';
import { AdminFacilitiesComponent } from './features/admin/pages/admin-facilities/admin-facilities.component';
import { AdminOrdersComponent } from './features/admin/pages/admin-orders/admin-orders.component';
import { AdminPdfExtractionComponent } from './features/admin/pages/admin-pdf-extraction/admin-pdf-extraction.component';
import { AdminProductsComponent } from './features/admin/pages/admin-products/admin-products.component';

// Facility pages
import { FacilityDashboardComponent } from './features/facility/pages/facility-dashboard/facility-dashboard.component';
import { FacilityInventoryComponent } from './features/facility/pages/facility-inventory/facility-inventory.component';
import { FacilityOrdersComponent } from './features/facility/pages/facility-orders/facility-orders.component';
import { FacilityProductsComponent } from './features/facility/pages/facility-products/facility-products.component';
import { FacilityRegisterComponent } from './features/facility/pages/facility-register/facility-register.component';

// Auth pages
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';

export const routes: Routes = [
  // Public routes
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'ai-vision', component: AiVisionComponent },
      { path: 'compliance', component: ComplianceComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'help', component: HelpComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'returns', component: ReturnsComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shop/checkout', component: ShopCheckoutComponent },
      { path: 'shop/sizing', component: ShopSizingComponent },
    ],
  },

  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'catalog', component: AdminCatalogComponent },
      { path: 'facilities', component: AdminFacilitiesComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: 'pdf-extraction', component: AdminPdfExtractionComponent },
      { path: 'products', component: AdminProductsComponent },
    ],
  },

  // Facility routes
  {
    path: 'facility',
    component: FacilityLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: FacilityDashboardComponent },
      { path: 'inventory', component: FacilityInventoryComponent },
      { path: 'orders', component: FacilityOrdersComponent },
      { path: 'products', component: FacilityProductsComponent },
      { path: 'register', component: FacilityRegisterComponent },
    ],
  },

  // Auth routes
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  // fallback
  { path: '**', redirectTo: '' },
];
