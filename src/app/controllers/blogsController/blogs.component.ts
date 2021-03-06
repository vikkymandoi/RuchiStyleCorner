import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/modal/blogs';
import { TestService } from 'src/app/service/Test.service';
import { EncryptDecrypt } from 'src/app/utils/EncryptDecrypt';

@Component({
  selector: 'blogs-control',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  loadingApp = true;
  blogsListMap: Map<string, Blogs[]>;

  constructor(private testService: TestService,
              private router: Router, private location: Location,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.testService.getBlogsMap().then(data => {
      this.blogsListMap = data;
    });
  }
  asIsOrder(a, b) {
    return 1;
  }
  navigateToBlog(blog: Blogs) {
    const encd = new EncryptDecrypt();
    const encryptedMsg2 = encd.encrypterRc4(JSON.stringify(blog), 'VrajendraMandloi');
    this.router.navigate(['/blogs',  encryptedMsg2 ], { relativeTo: this.activatedRoute.parent });
  }
}
