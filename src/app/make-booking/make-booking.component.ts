import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const m = gql`
  mutation AddBooking(
    $hotel_id: String!
    $booking_date: String!
    $booking_start: String!
    $booking_end: String!
    $user_id: String!
  ) {
    addBooking(
      hotel_id: $hotel_id
      booking_date: $booking_date
      booking_start: $booking_start
      booking_end: $booking_end
      user_id: $user_id
    ) {
      _id
    }
  }
`;

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css'],
})
export class MakeBookingComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const startDate = form.value.checkInDate;
    const endDate = form.value.checkOutDate;
    const user_id = localStorage.getItem('user_id');
    const today = new Date();
    const date = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear();


      this.apollo
        .mutate<any>({
          mutation: m,
          variables: {
            hotel_id: '',
            booking_date: String(date),
            booking_start: String(startDate),
            booking_end: String(endDate),
            user_id: user_id,
          },
        })
        .subscribe(({ data }) => {

        });
        console.log("test " + String(startDate));
  }
}
