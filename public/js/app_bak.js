var rectangle;
var worldRectangle;
var polyline;

// scene.primitives.add(new Cesium.RectanglePrimitive({
//     rectangle : Cesium.Rectangle.fromDegrees(-100.0, 20.0, -90.0, 30.0),
//     material : Cesium.Material.fromType('Dot')
// }));
// var instance = new Cesium.GeometryInstance({
//     geometry: new Cesium.RectangleGeometry({
//         rectangle: Cesium.Rectangle.fromDegrees(-100.0, 30.0, -90.0, 40.0)
//     }),
//     id: 'my rectangle',
//     attributes: {
//         fabric: {
//             type: 'Image',
//             uniforms: {
//                 image: '../img/06 - lceOAtI.jpg'
//             }
//         }
//     }
// });
// var viewportQuad = new Cesium.ViewportQuad(new Cesium.BoundingRectangle(0, 0, 80, 40));
// viewportQuad.material.uniforms.color = new Cesium.Color(1.0, 0.0, 0.0, 1.0);

// new Cesium.Material.fromType('Image')
// demo.material.uniforms.image = new Cesium.Image('../img/06 - lceOAtI.jpg');
// new Cesium.ToggleButtonViewModel(command, options


function applyImageMaterial(primitive, scene) {
    primitive.appearance.material = new Cesium.Material({
        fabric: {
            type: 'Image',
            uniforms: {
                image: '../img/06 - lceOAtI.jpg'
            }
        }
    });
}

// <div class="cesium-widget-errorPanel-content">
//     <div class="cesium-widget-errorPanel-header" ></div>
//         <div class="cesium-widget-errorPanel-scroll" style="max-height: 754px;">
//             <div class="cesium-widget-errorPanel-message">
//             </div>
//         </div>
//     <div class="cesium-widget-errorPanel-buttonPanel">
//         <button type="button" class="cesium-button"> OK </button>
//     </div>
// </div>

// // Create a typical CzmlDataSource.
// var dataSource1 = new Cesium.CzmlDataSource();
// dataSource1.load('../../SampleData/simple.czml');
//
// // Add a checkbox at the top.
// document.getElementById('toolbar').innerHTML =
//     '<label><input type="checkbox" id="showCheckbox" /> Show CZML</label>';
//
// var checkbox = document.getElementById('showCheckbox');
// checkbox.addEventListener('change', function() {
//     // Checkbox state changed.
//     if (checkbox.checked) {
//         // Show if not shown.
//         if (!scene.dataSources.contains(dataSource1)) {
//             scene.dataSources.add(dataSource1);
//         }
//     } else {
//         // Hide if currently shown.
//         if (scene.dataSources.contains(dataSource1)) {
//             scene.dataSources.remove(dataSource1);
//         }
//     }
// }, false);

function createButtons(scene) {
    function toggleRectangleVisibility() {
        rectangle.show = true;
        worldRectangle.show = false;
        polyline.show = false;
    }

    function toggleWorldRectangleVisibility() {
        worldRectangle.show = true;
        rectangle.show = false;
        polyline.show = false;
    }

    function togglePolylineVisibility() {
        polyline.show = true;
        worldRectangle.show = false;
        rectangle.show = false;
    }

    document.addToolbarMenu([{
        text : 'Common materials'
    }, {
        text : 'Color',
        onselect : function() {
            toggleRectangleVisibility();
            applyColorMaterial(rectangle, scene);
            scene.highlight(applyColorMaterial);
        }
    }, {
        text : 'Image',
        onselect : function() {
            toggleRectangleVisibility();
            applyImageMaterial(rectangle, scene);
            scene.highlight(applyImageMaterial);
        }
    }]);

    document.addToolbarMenu([{
        text : 'Procedural textures'
    }, {
        text : 'Checkerboard',
        onselect : function() {
            toggleRectangleVisibility();
            applyCheckerboardMaterial(rectangle, scene);
            scene.highlight(applyCheckerboardMaterial);
        }
    }, {
        text : 'Dot',
        onselect : function() {
            toggleRectangleVisibility();
            applyDotMaterial(rectangle, scene);
            scene.highlight(applyDotMaterial);
        }
    }, {
        text : 'Grid',
        onselect : function() {
            toggleRectangleVisibility(rectangle, worldRectangle);
            applyGridMaterial(rectangle, scene);
            scene.highlight(applyGridMaterial);
        }
    }, {
        text : 'Stripe',
        onselect : function() {
            toggleRectangleVisibility();
            applyStripeMaterial(rectangle, scene);
            scene.highlight(applyStripeMaterial);
        }
    }]);

    document.addToolbarMenu([{
        text : 'Base materials'
    }, {
        text : 'Alpha Map',
        onselect : function() {
            toggleRectangleVisibility();
            applyAlphaMapMaterial(rectangle, scene);
            scene.highlight(applyAlphaMapMaterial);
        }
    }, {
        text : 'Bump Map',
        onselect : function() {
            toggleRectangleVisibility();
            applyBumpMapMaterial(rectangle, scene);
            scene.highlight(applyBumpMapMaterial);
        }
    }, {
        text : 'Diffuse',
        onselect : function() {
            toggleRectangleVisibility();
            applyDiffuseMaterial(rectangle, scene);
            scene.highlight(applyDiffuseMaterial);
        }
    }, {
        text : 'Emission Map',
        onselect : function() {
            toggleRectangleVisibility();
            applyEmissionMapMaterial(rectangle, scene);
            scene.highlight(applyEmissionMapMaterial);
        }
    }, {
        text : 'Normal Map',
        onselect : function() {
            toggleRectangleVisibility();
            applyNormalMapMaterial(rectangle, scene);
            scene.highlight(applyNormalMapMaterial);
        }
    }, {
        text : 'Specular Map',
        onselect : function() {
            toggleRectangleVisibility();
            applySpecularMapMaterial(rectangle, scene);
            scene.highlight(applySpecularMapMaterial);
        }
    }]);

    document.addToolbarMenu([{
        text : 'Misc materials'
    }, {
        text : 'Rim Lighting',
        onselect : function() {
            toggleWorldRectangleVisibility();
            applyRimLightingMaterial(worldRectangle, scene);
            scene.highlight(applyRimLightingMaterial);
        }
    }, {
        text : 'Water',
        onselect : function() {
            toggleWorldRectangleVisibility();
            applyWaterMaterial(worldRectangle, scene);
            scene.highlight(applyWaterMaterial);
        }
    }]);

    document.addToolbarMenu([{
        text : 'Example composite materials'
    }, {
        text : 'Composite Example',
        onselect : function() {
            toggleWorldRectangleVisibility();
            applyCompositeMaterial(worldRectangle, scene);
            scene.highlight(applyCompositeMaterial);
        }
    }]);

    document.addToolbarMenu([{
        text : 'Polyline materials'
    }, {
        text : 'Polyline Arrow',
        onselect : function() {
            togglePolylineVisibility();
            applyPolylineArrowMaterial(polyline, scene);
            scene.highlight(applyPolylineArrowMaterial);
        }
    }, {
        text : 'Polyline Glow',
        onselect : function() {
            togglePolylineVisibility();
            applyPolylineGlowMaterial(polyline, scene);
            scene.highlight(applyPolylineGlowMaterial);
        }
    }, {
        text : 'Polyline Outline',
        onselect : function() {
            togglePolylineVisibility();
            applyPolylineOutlineMaterial(polyline, scene);
            scene.highlight(applyPolylineOutlineMaterial);
        }
    }]);

    document.getElementById('toolbar').style.width = '10%';
}

function createPrimitives(scene) {
    rectangle = scene.primitives.add(new Cesium.Primitive({
        geometryInstances : new Cesium.GeometryInstance({
            geometry : new Cesium.RectangleGeometry({
                rectangle : Cesium.Rectangle.fromDegrees(-120.0, 20.0, -60.0, 40.0),
                vertexFormat : Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
            })
        }),
        appearance : new Cesium.EllipsoidSurfaceAppearance({
            aboveGround : false
        })
    }));

    worldRectangle = scene.primitives.add(new Cesium.Primitive({
        geometryInstances : new Cesium.GeometryInstance({
            geometry : new Cesium.RectangleGeometry({
                rectangle : Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
                vertexFormat : Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
            })
        }),
        appearance : new Cesium.EllipsoidSurfaceAppearance({
            aboveGround : false
        }),
        show : false
    }));

    var polylines = scene.primitives.add(new Cesium.PolylineCollection());
    polyline = polylines.add({
        positions : Cesium.PolylinePipeline.generateCartesianArc({
            positions : Cesium.Cartesian3.fromDegreesArray([-110.0, 42.0,
                                                            -85.0, 36.0,
                                                            -100.0, 25.0,
                                                            -77.0, 12.0])
        }),
        width : 10.0,
        show : false
    });
}

var viewer = new Cesium.Viewer('cesiumContainer', {
    clock: new Cesium.Clock({
        startTime: new Cesium.JulianDate.fromDate(new Date()),
        shouldAnimate: false,
        currentTime: new Cesium.JulianDate.fromDate(new Date())
    }),
});

var scene = viewer.scene;

viewer.dataSources.add(Cesium.CzmlDataSource.load('data/CA_stations.czml'));

var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function(movement) {
            var picked = scene.pick(movement.position)
            var pickedId = picked.id.id;
            console.log(picked.primitive.position)
        },
    Cesium.ScreenSpaceEventType.LEFT_CLICK);

createPrimitives(scene);
createButtons(scene);
