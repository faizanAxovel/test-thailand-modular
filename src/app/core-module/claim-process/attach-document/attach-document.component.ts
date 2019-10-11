import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { docTypes } from 'src/app/shared/mockup/mockup';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attach-document',
  templateUrl: './attach-document.component.html',
  styleUrls: ['./attach-document.component.scss']
})
export class AttachDocumentComponent implements OnInit, OnDestroy {
  docTypes: any[];
  activatedScreen: any;
  totalFiles = {};
  isError: boolean;
  error = {
    sizeError: 'File size must be less than 10MB.',
    maxFile: 'You can Upload Max 10 file.'
  };
  errText: string;
  isFileAttached: boolean;
  constructor(
    private sharedService: SharedService,
    private localStorage: LocalStorageService,
    private activated: ActivatedRoute,
    private detectChange: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.docTypes = docTypes;
    // set empty object for file
    for (const doc of this.docTypes) {
      this.totalFiles[doc.docCode] = [];
    }
    this.sharedService.calcProgress(8);
    const files = this.localStorage.getSelectedData('files');
    if (files) {
      this.isFileAttached = true;
      this.totalFiles = files;
    }
    // fragment 
    this.activated.fragment.subscribe(
      (res: any) => {
        this.isError = false;
        window.scrollTo(0, 0);
        if (!res) {
          res = 'Receipt';
        }
        const screen = this.activated.snapshot.queryParams['screen'];
        this.activatedScreen = res;
        if (this.totalFiles[this.activatedScreen].length === 0) {
          this.isFileAttached = false;
        }
      }
    );
  }

  onChange(target, code) {
    const files = target.files;
    this.isFileAttached = true;
    this.isError = false;
    for (const file of files) {
      const totalFiles = this.sharedService.toFileArray(this.totalFiles);
      if (totalFiles.length + files.length > 10) {
        this.isError = true;
        this.errText = this.error.maxFile;
        break;
      }
      if (file.size >= (10 * 1024 * 1024)) {
        this.isError = true;
        this.errText = this.error.sizeError;
        if (this.totalFiles[this.activatedScreen].length === 0) {
          this.isFileAttached = false;
        }
        continue;
      }
      if (file.size > (7 * 100 * 1024) && file.size < (10 * 1024 * 1024)) {
        this.sharedService.compress(file).subscribe(
          (res: any) => {
            const read = new FileReader();
            read.addEventListener('load', () => {
              this.totalFiles[code].push({
                url: read.result,
                name: res.name.split('.')[0] + '.jpg',
                size: res.b.size,
                type: res.b.type,
              });
              this.detectChange.detectChanges();
              this.localStorage.setSelectedData('files', this.totalFiles);
            });
            read.readAsDataURL(res.b);
          }
        );
        continue;
      }
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.totalFiles[code].push({
          url: reader.result,
          name: file.name.split('.')[0] + '.jpg',
          size: file.size,
          type: file.type,
        });
        this.localStorage.setSelectedData('files', this.totalFiles);
      });
      reader.readAsDataURL(file);
    }
  }


  reviewClaim(index) {
    if (this.docTypes.length - 1 === index) {
      this.sharedService._router.navigate(['/review-claim']);
    } else {
      this.sharedService._router.navigateByUrl('/claim-process/attach-document?screen=' + (index + 2) + '#' + this.docTypes[index + 1].docCode);
    }
  }
  ngOnDestroy() {
    this.detectChange.detach();
  }
}
