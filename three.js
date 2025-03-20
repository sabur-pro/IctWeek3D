var scene, camera, renderer, plane;
function init() {
  (renderer = new THREE.WebGLRenderer({ antialias: !0 })).setSize(
    window.innerWidth,
    window.innerHeight
  ),
    renderer.setClearColor(0x000000),
    document.getElementById("canvas").appendChild(renderer.domElement),
    ((scene = new THREE.Scene()).fog = new THREE.FogExp2(0x000000, 0.0025)),
    ((camera = new THREE.PerspectiveCamera(
      95,
      window.innerWidth / window.innerHeight,
      10,
      1e4
    )).position.z = 500),
    (camera.position.x = 0),
    (camera.position.y = 50),
    scene.add(camera),
    (plane = new THREE.Object3D()),
    scene.add(plane),
    (bigDots = 50);
  for (var e = [], a = 0; a < bigDots; a++) {
    var n = Math.acos((2 * a) / bigDots - 1),
      t = Math.sqrt(bigDots * Math.PI) * n;
    (bigDotGeometry = new THREE.CubeGeometry(25, 25, 25)),
      ((e = new THREE.Mesh(
        bigDotGeometry,
        new THREE.MeshStandardMaterial({
          color: 0x00D8FF,
          emissive: 0x00D8FF,
          side: THREE.BackSide,
          transparent: !0,
          opacity: 0.9,
          metalness: 1,
          roughness: 0.95,
          shading: THREE.SmoothShading,
        })
      )).position.y = 400 * Math.random() * Math.sin(t) * Math.sin(n)),
      (e.position.x = 570 * Math.cos(t) * Math.sin(n)),
      (e.position.z = 150 * Math.cos(n)),
      (e.scale.y = 0.001),
      (e.scale.x = 0.001),
      (e.scale.z = Math.floor(8 * Math.random() + 2)),
      plane.add(e),
      TweenMax.to(plane.children[a].material, 1, {
        opacity: 0.5,
        roughness: 0.95,
      }),
      TweenMax.to(plane.children[a].scale, 1, {
        y: 8,
        x: 8,
        z: Math.floor(7 * Math.random() + 2),
        ease: Sine.easeInOut,
      }),
      Math.floor(10 * Math.random()),
      TweenMax.fromTo(
        plane.children[a].position,
        20,
        {
          y: 370 * Math.random() * Math.sin(t) * Math.sin(n),
          x: 550 * Math.cos(t) * Math.sin(n),
          z: 150 * Math.cos(n),
        },
        {
          y: 370 * Math.random() * Math.sin(t) * Math.sin(n) - 10,
          z: 150 * Math.cos(n),
          repeat: -1,
          repeatDelay: Math.floor(2 * Math.random()) + 0.5,
          yoyo: !0,
          ease: Linear.easeNone,
        }
      ),
      TweenMax.to(plane.children[a].rotation, 1, { x: 0.001, y: 0.001 });
  }
  new THREE.DirectionalLight(16777215, 0.3).position.set(1, 1, -1e3),
    new THREE.DirectionalLight(16777215, 0.1).position.set(-600, 1, 1e3);
  var o = new THREE.DirectionalLight(16777215, 0.3);
  o.position.set(300, -400, 500), scene.add(o);
  var i = new THREE.PointLight(7040624, 2, 9e3);
  i.position.set(300, 500, 100), scene.add(i);
  var r = new THREE.PointLight(7040624, 1, 9e3);
  r.position.set(1, 1, 0), scene.add(r);
}
function onWindowResize() {
  (camera.aspect = window.innerWidth / window.innerHeight),
    camera.updateProjectionMatrix(),
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function setupEventListeners() {
  window.addEventListener("load", onWindowResize);
}
function draw() {
  requestAnimationFrame(draw), renderer.render(scene, camera);
}
$(window).resize(function () {
  onWindowResize();
});
var wid = $(window).width();
$(function () {
  init(),
    draw(),
    900 < wid
      ? $.scrollify({
          section: ".panel",
          interstitialSection: "",
          easing: "easeOutQuart",
          scrollSpeed: 1e3,
          scrollbars: !1,
          setHeights: !0,
          before: function (e, a) {
            var n = a[e].attr("data-section-name");
            $(".pagination .active").removeClass("active"),
              $(".pagination")
                .find('a[href="#' + n + '"]')
                .addClass("active"),
              "welcome" === n &&
                (function () {
                  TweenMax.to(plane.position, 1, {
                    x: 1,
                    y: 1,
                    ease: Power2.easeOut,
                  });
                  for (var e = 0; e < plane.children.length; e++)
                    if (e <= 50) {
                      var a = Math.acos((2 * e) / 50 - 1),
                        n = Math.sqrt(50 * Math.PI) * a;
                      TweenMax.to(plane.children[e].material, 1, {
                        opacity: 0.6,
                        roughness: 0.95,
                      }),
                        TweenMax.to(plane.children[e].scale, 1, {
                          y: 8,
                          x: 8,
                          z: Math.floor(7 * Math.random() + 2),
                          ease: Sine.easeInOut,
                        }),
                        TweenMax.fromTo(
                          plane.children[e].position,
                          20,
                          {
                            y: 370 * Math.random() * Math.sin(n) * Math.sin(a),
                            x: 570 * Math.cos(n) * Math.sin(a),
                            z: 150 * Math.cos(a),
                          },
                          {
                            y:
                              370 * Math.random() * Math.sin(n) * Math.sin(a) -
                              10,
                            z: 150 * Math.cos(a),
                            repeat: -1,
                            repeatDelay: Math.floor(1 * Math.random(e) + 0.5),
                            yoyo: !0,
                            ease: Linear.easeNone,
                          }
                        ),
                        TweenMax.to(plane.children[e].rotation, 1, {
                          x: 0,
                          y: 0,
                        });
                    }
                })(),
              "sectionOne" === n &&
                (function () {
                  TweenMax.to(plane.position, 1, {
                    x: 200,
                    z: -50,
                    y: 50,
                    ease: Power2.easeOut,
                  });
                  for (var e = 0; e < plane.children.length; e++)
                    26 < e &&
                      (TweenMax.to(plane.children[e].material, 1.5, {
                        opacity: 0,
                        ease: Sine.easeIn,
                      }),
                      TweenMax.to(plane.children[e].scale, 1.5, {
                        x: 1e-4,
                        y: 1e-4,
                        z: 1e-4,
                        ease: Power2.easeIn,
                      })),
                      e <= 26 &&
                        TweenMax.to(plane.children[e].material, 1.5, {
                          opacity: 1,
                          ease: Power2.easeIn,
                          roughness: 0.1,
                        }),
                      TweenMax.to(plane.children[1].position, 2, {
                        y: 100,
                        x: 180,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[1].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[1].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        autoAlpha: 0,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[2].position, 2, {
                        y: 100,
                        x: 180,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[2].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[2].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[3].position, 2, {
                        y: 100,
                        x: 100,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[3].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[3].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[4].position, 2, {
                        y: 100,
                        x: 100,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[4].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[4].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[5].position, 2, {
                        y: 100,
                        x: 260,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[5].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[5].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[6].position, 2, {
                        y: 100,
                        x: 260,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[6].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[6].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[7].position, 2, {
                        y: 2,
                        x: 100,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[7].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[7].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[8].position, 2, {
                        y: 2,
                        x: 100,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[8].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[8].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[9].position, 2, {
                        y: 2,
                        x: 180,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[9].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[9].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[10].position, 2, {
                        y: 2,
                        x: 180,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[10].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[10].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[11].position, 2, {
                        y: 2,
                        x: 260,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[11].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[11].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[12].position, 2, {
                        y: 2,
                        x: 260,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[12].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[12].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[13].position, 2, {
                        y: -100,
                        x: 100,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[13].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[13].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[14].position, 2, {
                        y: -100,
                        x: 100,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[14].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[14].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[15].position, 2, {
                        y: -100,
                        x: 180,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[15].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[15].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[16].position, 2, {
                        y: -100,
                        x: 180,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[16].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[16].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[17].position, 2, {
                        y: -100,
                        x: 260,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[17].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[17].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[0].position, 2, {
                        y: -100,
                        x: 260,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[0].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[0].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[18].position, 2, {
                        y: -100,
                        x: 100,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[18].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[18].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[19].position, 2, {
                        y: -100,
                        x: 180,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[19].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[19].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[20].position, 2, {
                        y: -100,
                        x: 260,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[20].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[20].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[21].position, 2, {
                        y: 100,
                        x: 100,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[21].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[21].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[22].position, 2, {
                        y: 100,
                        x: 180,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[22].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[22].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[23].position, 2, {
                        y: 100,
                        x: 260,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[23].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[23].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[24].position, 2, {
                        y: 2,
                        x: 100,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[24].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[24].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[25].position, 2, {
                        y: 2,
                        x: 180,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[25].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[25].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[26].position, 2, {
                        y: 2,
                        x: 260,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[26].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[26].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      });
                })(),
              "sectionTwo" === n &&
                (function () {
                  TweenMax.to(plane.position, 1, {
                    x: 1,
                    z: 1,
                    ease: Power2.easeOut,
                  });
                  for (var e = 0; e < plane.children.length; e++) {
                    var a = Math.acos((2 * e) / 50 - 1),
                      n = Math.sqrt(50 * Math.PI) * a;
                    TweenMax.to(plane.children[e].material, 1, {
                      opacity: 0.3,
                      roughness: 0.95,
                    }),
                      TweenMax.to(plane.children[e].scale, 1, {
                        y: 10,
                        x: 10,
                        z: Math.floor(8 * Math.random() + 2),
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[e].position, 2, {
                        y: 800 * Math.random() * Math.sin(n) * Math.sin(a),
                        x: 850 * Math.cos(n) * Math.sin(a),
                        z: 50 * Math.cos(a),
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[e].rotation, 1, {
                        x: 0,
                        y: 0,
                      });
                  }
                })(),
              "sectionThree" === n &&
                (function () {
                  TweenMax.to(plane.position, 1, {
                    x: 200,
                    z: -50,
                    y: 50,
                    ease: Power2.easeOut,
                  });
                  for (var e = 0; e < plane.children.length; e++)
                    26 < e &&
                      (TweenMax.to(plane.children[e].material, 1.5, {
                        opacity: 0,
                        ease: Sine.easeIn,
                      }),
                      TweenMax.to(plane.children[e].scale, 1.5, {
                        x: 1e-4,
                        y: 1e-4,
                        z: 1e-4,
                        ease: Power2.easeIn,
                      })),
                      e <= 26 &&
                        TweenMax.to(plane.children[e].material, 1.5, {
                          opacity: 1,
                          ease: Power2.easeIn,
                          roughness: 0.1,
                        }),
                      TweenMax.to(plane.children[1].position, 2, {
                        y: 100,
                        x: 180,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[1].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[1].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        autoAlpha: 0,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[2].position, 2, {
                        y: 100,
                        x: 180,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[2].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[2].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[3].position, 2, {
                        y: 100,
                        x: 100,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[3].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[3].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[4].position, 2, {
                        y: 100,
                        x: 100,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[4].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[4].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[5].position, 2, {
                        y: 100,
                        x: 260,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[5].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[5].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[6].position, 2, {
                        y: 100,
                        x: 260,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[6].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[6].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[7].position, 2, {
                        y: 2,
                        x: 100,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[7].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[7].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[8].position, 2, {
                        y: 2,
                        x: 100,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[8].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[8].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[9].position, 2, {
                        y: 2,
                        x: 180,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[9].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[9].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[10].position, 2, {
                        y: 2,
                        x: 180,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[10].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[10].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[11].position, 2, {
                        y: 2,
                        x: 260,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[11].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[11].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[12].position, 2, {
                        y: 2,
                        x: 260,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[12].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[12].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[13].position, 2, {
                        y: -100,
                        x: 100,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[13].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[13].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[14].position, 2, {
                        y: -100,
                        x: 100,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[14].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[14].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[15].position, 2, {
                        y: -100,
                        x: 180,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[15].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[15].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[16].position, 2, {
                        y: -100,
                        x: 180,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[16].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[16].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[17].position, 2, {
                        y: -100,
                        x: 260,
                        z: 100,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[17].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[17].rotation, 500, {
                        y: -360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[0].position, 2, {
                        y: -100,
                        x: 260,
                        z: 180,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[0].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[0].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[18].position, 2, {
                        y: -100,
                        x: 100,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[18].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[18].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[19].position, 2, {
                        y: -100,
                        x: 180,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[19].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[19].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[20].position, 2, {
                        y: -100,
                        x: 260,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[20].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[20].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[21].position, 2, {
                        y: 100,
                        x: 100,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[21].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[21].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[22].position, 2, {
                        y: 100,
                        x: 180,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[22].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[22].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[23].position, 2, {
                        y: 100,
                        x: 260,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[23].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[23].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[24].position, 2, {
                        y: 2,
                        x: 100,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[24].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[24].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[25].position, 2, {
                        y: 2,
                        x: 180,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[25].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[25].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      }),
                      TweenMax.to(plane.children[26].position, 2, {
                        y: 2,
                        x: 260,
                        z: 260,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[26].scale, 2, {
                        y: 4,
                        x: 4,
                        z: 4,
                        ease: Power2.easeOut,
                      }),
                      TweenMax.to(plane.children[26].rotation, 500, {
                        y: 360,
                        repeat: -1,
                        ease: Linear.easeNone,
                      });
                })();
          },
          afterRender: function () {
            var e = document.getElementById("response"),
              a =
                (TweenMax.to(e, 0, { opacity: 1, ease: Power2.easeOut }),
                '<ul class="pagination justify-content-end">'),
              n = "";
            $(".panel").each(function (e) {
              (n = ""),
                0 === e && (n = "active"),
                (a +=
                  '<li><a class="' +
                  n +
                  '" href="#' +
                  $(this).attr("data-section-name") +
                  '">' +
                  $(this).attr("data-section-name").charAt(0).toUpperCase() +
                  $(this).attr("data-section-name").slice(1) +
                  "</a></li>");
            }),
              (a += "</ul>"),
              $(".header").append(a),
              $(".pagination a").on("click", $.scrollify.move);
          },
        })
      : $.scrollify.disable();
});
