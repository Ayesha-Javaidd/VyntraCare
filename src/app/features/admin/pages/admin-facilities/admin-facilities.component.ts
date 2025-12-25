import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/ui/data-table/data-table.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import { HeaderComponent } from "../../../../shared/components/layout/header/header.component";

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

@Component({
  standalone: true,
  selector: 'app-admin-facilities',
  imports: [CommonModule, DataTableComponent, FiltersComponent, HeaderComponent],
  templateUrl: './admin-facilities.component.html',
  styleUrls: ['./admin-facilities.component.css'],
})
export class AdminFacilitiesComponent implements OnInit {
  /* =======================
     Data
  ======================= */

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
  ];

  /* =======================
     DataTable Columns
  ======================= */

  facilityColumns: TableColumn[] = [
    {
      key: 'name',
      label: 'Facility',
      type: 'text',
    },
    {
      key: 'managerName',
      label: 'Manager',
      type: 'text',
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        Active: 'bg-green-100 text-green-800',
        Suspended: 'bg-red-100 text-red-800',
        Maintenance: 'bg-yellow-100 text-yellow-800',
        Inactive: 'bg-gray-100 text-gray-800',
      },
    },
    {
      key: 'location',
      label: 'Location',
      type: 'text',
    },
    {
      key: 'orders',
      label: 'Orders',
      type: 'text',
    },
  ];

  /* =======================
     Filters Config
  ======================= */

  facilityFilters = [
    {
      key: 'status',
      label: 'Status',
      options: ['Active', 'Suspended', 'Maintenance', 'Inactive'],
    },
  ];

  /* =======================
     State
  ======================= */

  filteredFacilities: Facility[] = [];
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.filteredFacilities = [...this.facilities];
  }

  /* =======================
     Filters Logic
  ======================= */

  onFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const status = filters['status'];

    this.filteredFacilities = this.facilities.filter((f) => {
      const matchesSearch =
        f.name.toLowerCase().includes(search) ||
        f.managerName.toLowerCase().includes(search) ||
        f.location.toLowerCase().includes(search) ||
        f.facilityId.toLowerCase().includes(search);

      const matchesStatus = !status || f.status === status;

      return matchesSearch && matchesStatus;
    });

    this.currentPage = 1;
  }

  /* =======================
     Actions
  ======================= */

  addNewFacility() {
    alert('Add New Facility');
  }

  viewDetails(facility: Facility) {
    alert(`Viewing ${facility.name}\nEmail: ${facility.email}`);
  }

  editFacility(facility: Facility) {
    alert(`Editing ${facility.name}`);
  }

  toggleStatus(facility: Facility) {
    facility.status = facility.status === 'Active' ? 'Suspended' : 'Active';
  }
}
