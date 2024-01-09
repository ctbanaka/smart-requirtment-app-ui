import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialogbodyreject',
  templateUrl: './dialogbodyreject.component.html',
  styleUrls: ['./dialogbodyreject.component.css']
})
export class DialogbodyrejectComponent {
  disableSelect = new FormControl(false);

  alertWithSuccess(){
    Swal.fire("Rejected.." ,"Tom Holland's profile has been rejected  ", 'success')
  }


}
