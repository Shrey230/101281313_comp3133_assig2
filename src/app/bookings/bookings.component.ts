import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const q = gql`
  query GetBookings($user_id: String!) {
    getBookings(user_id: $user_id) {
      hotel_id
      booking_date
      booking_start
      booking_end
      user_id
    }
  }
`;

const getHotelNameQuerey = gql`
  query GetHotelNameById($hotel_id: String!) {
    getHotelNameById(hotel_id: $hotel_id) {
      hotel_name
    }
  }
`;

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  loading = true;
  user: any;

  dataSource = new MatTableDataSource(this.bookings);

  displayedColumns: string[] = [
    'hotel_name',
    'booking_date',
    'booking_start',
    'booking_end',
  ];
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    console.log('user id: ' + userId);

    this.apollo
      .query<any>({
        query: q,
        variables: {
          user_id: userId,
        },
      })
      .subscribe(({ data }) => {
        this.bookings = data.getBookings;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
