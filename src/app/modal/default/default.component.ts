import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  panelOpenState = false;
  selectDrop = false
  selectDrop2 = false
  selectBusiness=false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DefaultComponent>,
    private dialog: MatDialog
  ) {
    // this.modalData = data;
    // console.log(modalData)
    dialogRef.disableClose= true ;
  }

  ngOnInit(): void {
   
    
  }

  addChildtask(){
    this.dialog
    .open(DefaultComponent, {
      data: {
        type: 'createchildtask',
        data: '',
        filterData: '',
      },
    })
    .afterClosed()
    .subscribe((result) => {});
  }

  selectProjectCatagory(){
    this.selectDrop=!this.selectDrop
  }
  selectBusinessType(){
    this.selectBusiness=!this.selectBusiness
  }
  selectProjectCatagory2(){
    this.selectDrop2=!this.selectDrop2
  }

}
