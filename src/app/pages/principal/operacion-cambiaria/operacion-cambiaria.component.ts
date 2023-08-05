import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-operacion-cambiaria',
  templateUrl: './operacion-cambiaria.component.html',
  styleUrls: ['./operacion-cambiaria.component.scss']
})
export class OperacionCambiariaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
