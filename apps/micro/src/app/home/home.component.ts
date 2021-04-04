import { Component } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  price;
  mode;
  widgets: Widget[];

  reCalculateTotal(mode, widgets, widget) {
    this.widgets = this.updateWidgets(mode, widgets, widget);
    this.getTotalPrice(widgets);
    // return this.widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

  updateWidgets(mode: string, widgets, widget) {
    switch (mode) {
      case 'create':
        return this.addWidget(widgets, widget);
      // const newWidget = Object.assign({}, widget, { id: uuidv4() });
      // this.widgets = [...this.widgets, newWidget];
      // break;
      case 'update':
        return this.updateWidget(widgets, widget);
      // this.widgets = this.widgets.map(_widget => widget.id === _widget.id
      //   ? Object.assign({}, widget) : _widget);
      // break;
      case 'delete':
        return this.deleteWidget(widgets, widget);
      // this.widgets = this.widgets.filter(_widget => widget.id !== _widget.id);
      // break;
      default:
        break;
    }
  }

  addWidget(widgets, widget) {
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return (widgets = [...widgets, newWidget]);
  }

  updateWidget(widgets, widget) {
    return (widgets = widgets.map((_widget) =>
      widget.id === _widget.id ? Object.assign({}, widget) : _widget
    ));
  }

  deleteWidget(widgets, widget) {
    return (widgets = widgets.filter((_widget) => widget.id !== _widget.id));
  }
}
