import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'grid-view-export-root',
  templateUrl: './grid-view-export.component.html',
  styleUrls: ['./grid-view-export.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
})
export class GridViewExportComponent {
  products: Product[];

  selectedProducts: Product[];

  constructor(private productService: ProductService) {}

  cols: any[];

  exportColumns: any[];

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  exportPdf() {
    debugger;
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My Team Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
    // @ts-ignore
    (doc as any).autoTable(this.exportColumns, this.products);
    doc.save('products.pdf');
  }
}
