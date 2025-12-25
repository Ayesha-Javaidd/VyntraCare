// admin-facilities.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../../shared/components/ui/table/table.component';
import { FormsModule } from '@angular/forms';

interface Facility {
  id: number;
  facilityId: string;
  name: string;
  managerName: string;
  status: 'Active' | 'Suspended' | 'Maintenance' | 'Inactive';
  location: string;
  orders: number;
  email: string;
  phone: string;
  established: string;
}

interface FilterOption {
  label: string;
  value: string;
}

@Component({
  standalone: true,
  selector: 'app-admin-facilities',
  imports: [CommonModule, TableComponent, FormsModule],
  templateUrl: './admin-facilities.component.html',
  styleUrls: ['./admin-facilities.component.css'],
})
export class AdminFacilitiesComponent {
  breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Facilities', link: '/facilities' },
  ];

  facilities: Facility[] = [
    {
      id: 1,
      facilityId: 'FAC001',
      name: 'Sunrise Care Center',
      managerName: 'Alice Johnson',
      status: 'Active',
      location: 'New York',
      orders: 120,
      email: 'alice@sunrisecare.com',
      phone: '+1 555 123 4567',
      established: '2020-05-15',
    },
    {
      id: 2,
      facilityId: 'FAC002',
      name: 'Greenfield Health',
      managerName: 'Bob Smith',
      status: 'Maintenance',
      location: 'Los Angeles',
      orders: 75,
      email: 'bob@greenfield.com',
      phone: '+1 555 987 6543',
      established: '2018-11-30',
    },
    {
      id: 3,
      facilityId: 'FAC003',
      name: 'Riverbank Clinic',
      managerName: 'Carol Lee',
      status: 'Suspended',
      location: 'Chicago',
      orders: 200,
      email: 'carol@riverbank.com',
      phone: '+1 555 456 7890',
      established: '2022-01-10',
    },
    {
      id: 4,
      facilityId: 'FAC004',
      name: 'Lakeside Hospital',
      managerName: 'David Kim',
      status: 'Active',
      location: 'Seattle',
      orders: 150,
      email: 'david@lakeside.com',
      phone: '+1 555 321 6549',
      established: '2019-07-20',
    },
    {
      id: 5,
      facilityId: 'FAC005',
      name: 'Mountainview Clinic',
      managerName: 'Eva Martinez',
      status: 'Inactive',
      location: 'Denver',
      orders: 60,
      email: 'eva@mountainview.com',
      phone: '+1 555 987 1122',
      established: '2021-03-05',
    },
    {
      id: 6,
      facilityId: 'FAC006',
      name: 'City Center Hospital',
      managerName: 'Frank Wilson',
      status: 'Active',
      location: 'Boston',
      orders: 250,
      email: 'frank@citycenter.com',
      phone: '+1 555 654 9870',
      established: '2017-09-12',
    },
    {
      id: 7,
      facilityId: 'FAC007',
      name: 'Harborview Health',
      managerName: 'Grace Liu',
      status: 'Maintenance',
      location: 'San Francisco',
      orders: 95,
      email: 'grace@harborview.com',
      phone: '+1 555 112 3344',
      established: '2020-12-01',
    },
    {
      id: 8,
      facilityId: 'FAC008',
      name: 'Sunset Clinic',
      managerName: 'Henry Adams',
      status: 'Active',
      location: 'Miami',
      orders: 180,
      email: 'henry@sunsetclinic.com',
      phone: '+1 555 223 4455',
      established: '2019-04-18',
    },
    {
      id: 9,
      facilityId: 'FAC009',
      name: 'Cedar Grove Hospital',
      managerName: 'Irene Lopez',
      status: 'Suspended',
      location: 'Houston',
      orders: 130,
      email: 'irene@cedargrove.com',
      phone: '+1 555 998 7766',
      established: '2016-08-25',
    },
    {
      id: 10,
      facilityId: 'FAC010',
      name: 'Pinehill Health Center',
      managerName: 'Jack Thompson',
      status: 'Active',
      location: 'Austin',
      orders: 210,
      email: 'jack@pinehill.com',
      phone: '+1 555 334 5566',
      established: '2018-02-14',
    },
  ];

  facilityHeaders = [
    'FACILITY NAME',
    'MANAGER NAME',
    'STATUS',
    'LOCATION',
    'NO. OF ORDERS',
    'ACTIONS',
  ];

  statusOptions: FilterOption[] = [
    { label: 'All Status', value: 'all' },
    { label: 'Active', value: 'Active' },
    { label: 'Suspended', value: 'Suspended' },
    { label: 'Maintenance', value: 'Maintenance' },
    { label: 'Inactive', value: 'Inactive' },
  ];

  sortOptions: FilterOption[] = [
    { label: 'Most Orders', value: 'most-orders' },
    { label: 'Name (A-Z)', value: 'name-asc' },
    { label: 'Name (Z-A)', value: 'name-desc' },
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ];

  selectedStatus: string = 'all';
  selectedSort: string = 'most-orders';
  searchQuery: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;

  constructor() {
    this.updatePagination();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Active':
        return 'fas fa-circle-check text-green-600';
      case 'Suspended':
        return 'fas fa-circle-pause text-red-600';
      case 'Maintenance':
        return 'fas fa-tools text-yellow-600';
      case 'Inactive':
        return 'fas fa-circle-xmark text-gray-600';
      default:
        return 'fas fa-circle-question text-gray-600';
    }
  }

  get filteredFacilities(): Facility[] {
    let filtered = [...this.facilities];

    if (this.searchQuery) {
      filtered = filtered.filter(
        (f) =>
          f.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          f.managerName
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          f.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          f.facilityId.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter((f) => f.status === this.selectedStatus);
    }

    switch (this.selectedSort) {
      case 'most-orders':
        filtered.sort((a, b) => b.orders - a.orders);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        filtered.sort(
          (a, b) =>
            new Date(b.established).getTime() -
            new Date(a.established).getTime()
        );
        break;
      case 'oldest':
        filtered.sort(
          (a, b) =>
            new Date(a.established).getTime() -
            new Date(b.established).getTime()
        );
        break;
    }

    return filtered;
  }

  get paginatedFacilities(): Facility[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredFacilities.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  private updatePagination() {
    this.totalPages = Math.ceil(
      this.filteredFacilities.length / this.itemsPerPage
    );
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  // In AdminFacilitiesComponent

  // Total Orders across all facilities
  get totalOrders(): number {
    if (!this.facilities || this.facilities.length === 0) return 0;
    return this.facilities.reduce((sum, f) => sum + f.orders, 0);
  }

  // Average Orders per Facility
  get avgOrders(): number {
    if (!this.facilities || this.facilities.length === 0) return 0;
    return Math.round(this.totalOrders / this.facilities.length);
  }
  // Total number of active facilities
  get activeFacilitiesCount(): number {
    return this.facilities.filter((f) => f.status === 'Active').length;
  }

  // Computed end index for pagination
  get paginationEnd(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.filteredFacilities.length
    );
  }

  get pageNumbers(): number[] {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(maxPagesToShow / 2)
    );
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  }

  addNewFacility() {
    alert('Add New Facility functionality here.');
  }
  editFacility(f: Facility) {
    alert(`Editing facility: ${f.name}`);
  }
  viewDetails(f: Facility) {
    alert(`Viewing ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}`);
  }

  toggleStatus(f: Facility) {
    f.status = f.status === 'Active' ? 'Suspended' : 'Active';
    alert(`Changed status of ${f.name} to ${f.status}`);
  }

  resetFilters() {
    this.selectedStatus = 'all';
    this.selectedSort = 'most-orders';
    this.searchQuery = '';
    this.currentPage = 1;
    this.updatePagination();
  }

  onFilterChange() {
    this.currentPage = 1;
    this.updatePagination();
  }
}
