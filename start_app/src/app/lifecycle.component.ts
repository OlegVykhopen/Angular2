import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, SimpleChanges, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngAfterViewChecked():void {
    this.log("ngAfterViewChecked");
  }

  ngAfterContentChecked():void {
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit():void {
    this.log("ngAfterViewInit");
  }

  ngOnDestroy():void {
    this.log("ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.log("ngOnChanges");
    console.log(changes);
  }

  ngDoCheck():void {
    this.log("ngDoCheck");
  }

  ngAfterContentInit():void {
    this.log("ngAfterContentInit");
  }

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  private log(hook: string){
      console.log(hook);
  }

}
