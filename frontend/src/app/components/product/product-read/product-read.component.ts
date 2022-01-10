import { ProductReadDataSource } from './product-read-datasource';

import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from './../../../product/product.model';


import { ProductService } from './../product.service';


import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit, AfterViewInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductReadDataSource;


  

  constructor(
    private ProductService: ProductService
  ) {
    this.dataSource = new ProductReadDataSource();
   }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products =>{
      this.products = products;
      console.log(products);
      
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
