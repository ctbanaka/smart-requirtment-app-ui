import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.css']
})
export class DialogbodyComponent {
  disableSelect = new FormControl(false);


alertWithSuccess(){
  Swal.fire("APPROVED.." ,'approved successfully ', 'success')
}

}
