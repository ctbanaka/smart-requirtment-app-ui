import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialogbodynegotiate',
  templateUrl: './dialogbodynegotiate.component.html',
  styleUrls: ['./dialogbodynegotiate.component.css']
})
export class DialogbodynegotiateComponent {

  disableSelect = new FormControl(false);

  alertWithSuccess(){
    Swal.fire("Negotiated.." , 'success')
  }
}
