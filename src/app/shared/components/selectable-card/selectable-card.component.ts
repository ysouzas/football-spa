import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-selectable-card",
  templateUrl: "./selectable-card.component.html",
  styleUrls: ["./selectable-card.component.css"],
})
export class SelectableCardComponent implements OnInit {
  selected = false;

  @Output() newItemEvent = new EventEmitter<string>();

  @Input()
  name: string = "";

  @Input()
  score: number = 0.0;

  @Input()
  id: string = "";

  constructor() {}

  ngOnInit() {}

  onSelectCard() {
    this.selected = !this.selected;
    this.newItemEvent.emit(this.id);
  }
}
