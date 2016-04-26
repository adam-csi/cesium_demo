var viewer = new Cesium.Viewer('cesiumContainer');
var scene = viewer.scene;

var div = document.createElement('DIV');
div.className = 'divider';
toolbar.appendChild(div);
unction createTooltip(frameDiv) {

        var tooltip = function(frameDiv) {

            var div = document.createElement('DIV');
            div.className = "twipsy right";

            var arrow = document.createElement('DIV');
            arrow.className = "twipsy-arrow";
            div.appendChild(arrow);

            var title = document.createElement('DIV');
            title.className = "twipsy-inner";
            div.appendChild(title);

            this._div = div;
            this._title = title;

            // add to frame div and display coordinates
            frameDiv.appendChild(div);
        }

        tooltip.prototype.setVisible = function(visible) {
            this._div.style.display = visible ? 'block' : 'none';
        }

        tooltip.prototype.showAt = function(position, message) {
            if(position && message) {
                this.setVisible(true);
                this._title.innerHTML = message;
                this._div.style.left = position.x + 10 + "px";
                this._div.style.top = (position.y - this._div.clientHeight / 2) + "px";
            }
        }

        return new tooltip(frameDiv);
    }
