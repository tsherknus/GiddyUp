import {Component, OnInit} from "@angular/core";
import {DemoService} from "./demo.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  test: any;

  ngOnInit() {
    this.demoService.testMethod().subscribe(
      test => { this.test = test;
        console.log(test);
      }
    );
  }

  changeDynamically() {
    console.log(this.test)
  }
}
