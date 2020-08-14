function widget(partNo, size) {
  this.partNo = partNo;
  this.size = size;
}

function FormFactor(material, widget) {
  this.material = material;
  this.widget = widget;
}

var widgetA = new widget(100, 'large');
var widgetB = new widget(101, 'small');

var formFactorA = new FormFactor('plastic', widgetA);
var formFactorB = new ForumFactor('metal', widgetB);
