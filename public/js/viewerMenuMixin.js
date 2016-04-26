/*global define*/
define([
        '../../Core/defined',
        '../../Core/defineProperties',
        '../../Core/DeveloperError',
        'MenuMixin'
    ], function(
        defined,
        defineProperties,
        DeveloperError,
        MenuMixin) {
    'use strict';

    /**
     * A mixin which adds the CesiumMenu widget to the Viewer widget.
     * Rather than being called directly, this function is normally passed as
     * a parameter to {@link Viewer#extend}, as shown in the example below.
     * @exports viewerMenuMixin
     *
     * @param {Viewer} viewer The viewer instance.
     *
     * @exception {DeveloperError} viewer is required.
     *
     * @demo {@link http://cesiumjs.org/Cesium/Apps/Sandcastle/index.html?src=Cesium%20Menu.html|Cesium Sandcastle Cesium Menu Demo}
     *
     * @example
     * var viewer = new Cesium.Viewer('cesiumContainer');
     * viewer.extend(Cesium.viewerMenuMixin);
     */
    function viewerCesiumMenuMixin(viewer) {
        if (!defined(viewer)) {
            throw new DeveloperError('viewer is required.');
        }

        var cesiumMenuContainer = document.createElement('div');
        cesiumMenuContainer.className = 'cesium-viewer-cesiumMenuContainer';
        viewer.container.appendChild(cesiumMenuContainer);
        var cesiumMenu = new CesiumMenu(cesiumMenuContainer, viewer.scene);

        defineProperties(viewer, {
            cesiumMenu : {
                get : function() {
                    return cesiumMenu;
                }
            }
        });

        viewer.scene.postRender.addEventListener(function() {
            viewer.cesiumMenu.viewModel.update();
        });
    }

    return viewerMenuMixin;
});
