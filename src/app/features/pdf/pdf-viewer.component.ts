import { Component } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
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

      window.open(this.pdfSrc, '_blank');
    
  }
  closeModal() {
    console.log('Close modal');
  }
  /**
   *
   */
  constructor(private sanitizer: DomSanitizer) {
   
    
  }
  ngOnInit(){
    this.pdfSrc=this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc) as string;
  }
}
