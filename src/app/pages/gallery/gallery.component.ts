import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  allDetails:any;

  constructor(){}

  ngOnInit():void{
    this.getStudentDetails();
    
  }
  getStudentDetails(){
    // this.allDetails = JSON.parse(localStorage.getItem('student-data'));
    this.allDetails = JSON.parse(localStorage.getItem('form-data') ?? '[]');
    console.log("student-data:-",this.allDetails)
    
  }
}
