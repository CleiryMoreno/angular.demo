import { Component } from '@angular/core';
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'],
})
export class PdfViewerComponent {
  pdfSrc = '/assets/dummy.pdf'; 
  zoom = 1.0;
  zoomIn() {
    this.zoom += 0.2;
  }
  zoomOut() {
    if (this.zoom > 0.4) {
      this.zoom -= 0.2;
    }
  }
  download(type: string) {
    if (type === 'pdf') {
      window.open(this.pdfSrc, '_blank');
    } else if (type === 'excel') {
      alert('Download Excel functionality not implemented.');
    }
  }
  closeModal() {
    console.log('Close modal');
  }
}
