import "./styles.css";

var draw = SVG("drawing");

var polyline = draw
  .polyline("0,0 100,50 50,100")
  .fill("none")
  .stroke({ width: 5 });

polyline.animate(1000).plot([[0, 0], [100, 50], [50, 150]]);

polyline.click(function() {
  this.stroke({ color: "#f06" });
});
