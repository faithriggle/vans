import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AuthenticationResponse } from '../authResponse';

@Component({
  selector: 'vans-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm) {
    console.log("button clicked");
    console.log(data.value);

    this.auth.signup(data.value.email, data.value.password).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/mens-new-and-popular-arrivals'])
      },
      error => {
        console.log(error);
      }
    )

    data.reset();
  }
}
