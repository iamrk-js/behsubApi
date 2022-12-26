import { Component, OnInit } from '@angular/core';
import { PassangerService } from './passanger.service';
import { Ipassengers } from './passengers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passData: Ipassengers[] = [];
  currentPage: number = 1
  constructor(private passengerService: PassangerService) {

  }



  ngOnInit(): void {
    // this.passengerService.getPAssengerData(this.currentPage).subscribe((res: any) => {
    //   console.log(res);
    //   this.passData = res.data
    // })
    this.passengerService.currentPagedata$
    .subscribe((res: any) => {
        console.log(res);
        this.passData = res.data
      })  

  }

  onPrevClick() {
    if (this.currentPage > 1) {
      this.currentPage--
    } else {
      return
    }
    this.passengerService.getPAssengerData(this.currentPage).subscribe((res: any) => {
      console.log(res);
      this.passData = res.data
    })
  }

  onNextClick() {
    this.currentPage++;
    // this.passengerService.getPAssengerData(this.currentPage).subscribe((res: any) => {
    //   console.log(res);
    //   this.passData = res.data
    // })
    this.passengerService.getNext()
  }

}
