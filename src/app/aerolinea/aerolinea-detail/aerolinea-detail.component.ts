import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';
import { Aerolinea } from '../aerolinea';

@Component({
  selector: 'app-aerolinea-detail',
  templateUrl: './aerolinea-detail.component.html',
  styleUrls: ['./aerolinea-detail.component.css'],
  standalone: false
})
export class AerolineaDetailComponent implements OnInit {
  aerolinea!: Aerolinea;

  constructor(
    private route: ActivatedRoute,
    private aerolineaService: AerolineaService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.aerolineaService.getAerolinea(id).subscribe(aerolinea => this.aerolinea = aerolinea);
    }
  }
}
