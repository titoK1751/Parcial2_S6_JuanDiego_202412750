import { Component, OnInit } from '@angular/core';
import { AerolineaService } from '../aerolinea.service';
import { Aerolinea } from '../aerolinea';

@Component({
  selector: 'app-aerolinea-list',
  templateUrl: './aerolinea-list.component.html',
  styleUrls: ['./aerolinea-list.component.css'],
  standalone: false
})
export class AerolineaListComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];
  selected: Boolean = false;
  selectedAerolinea!: Aerolinea;

  constructor(private aerolineaService: AerolineaService) { }

  ngOnInit() {
    this.getAerolineas();
  }

  getAerolineas(): void{
    this.aerolineaService.getAerolineas().subscribe(aerolineas => {this.aerolineas = aerolineas});
  }

  onSelected(aerolinea: Aerolinea): void{
    this.selected = true;
    this.selectedAerolinea = aerolinea;
  }

}
