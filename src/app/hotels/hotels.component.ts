import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MakeBookingComponent } from '../make-booking/make-booking.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[] = [];

  displayedColumns: string[] = [
    'hotel_name',
    'street',
    'city',
    'postal_code',
    'price',
    'email',
    'add_booking',
  ];

  dataSource = new MatTableDataSource(this.hotels);
  constructor(private apollo: Apollo, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
          {
            getHotels {
              _id
              hotel_name
              street
              city
              postal_code
              price
              email
            }
          }
        `,
      })
      .subscribe(({data}) => {
        this.hotels = data && data.getHotels;
      });
  }

  onBookingClick(){
    const dialogRef = this.dialog.open(MakeBookingComponent)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
