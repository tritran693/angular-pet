import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() backgroundColor = "#ccc";
  @Input() progressColor = 'tomato';
  @Input() progress = 0;

  // order: constructor --> change --> init --> change, change, change.... (constructor and init is only called 1 time)
  constructor(){
    // console.log('constructor: ',{
    //   progress: this.progress,
    //   progressColor: this.progressColor,
    //   backgroundColor: this.backgroundColor
    // })
  }

  ngOnInit(): void {
    // console.log('init: ', {
    //   progress: this.progress,
    //   progressColor: this.progressColor,
    //   backgroundColor: this.backgroundColor
    // })
  }

  //can validate here
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes: ',changes);
    // console.log('change: ', {
    //   progress: this.progress,
    //   progressColor: this.progressColor,
    //   backgroundColor: this.backgroundColor
    // })

    if('progress' in changes){
      const pros = changes['progress'].currentValue;
      if(typeof pros !== 'number'){
        this.progress = 0;
      } else {
        this.progress = pros;
      }
    }
  }
}
