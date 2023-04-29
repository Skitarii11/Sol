import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Create a new scene
const scene = new THREE.Scene();

// Add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.z = 150;
camera.position.y = -100;


// Create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Add a light
const light = new THREE.PointLight(0xffffff, 1, 0);
light.position.set(0, 0, 0);
scene.add(light);

// Create celestial objects
const sunTexture = new THREE.TextureLoader().load("./public/sun.jpg");
const sun = new THREE.Mesh(new THREE.SphereGeometry(23, 32, 32), new THREE.MeshBasicMaterial({ map: sunTexture }));
scene.add(sun);

const mercuryTexture = new THREE.TextureLoader().load("./public/2k_mercury.jpg");
const mercury = new THREE.Mesh(new THREE.SphereGeometry(2.2, 32, 32), new THREE.MeshBasicMaterial({ map: mercuryTexture }));
scene.add(mercury);

const venusTexture = new THREE.TextureLoader().load("./public/2k_venus.jpg");
const venus = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshBasicMaterial({ map: venusTexture }));
scene.add(venus);

const earthTexture = new THREE.TextureLoader().load("./public/world.jpg");
const earth = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshBasicMaterial({ map: earthTexture }));
scene.add(earth);

const jupiTexture = new THREE.TextureLoader().load("./public/2k_jupiter.jpg");
const jupiter = new THREE.Mesh(new THREE.SphereGeometry(9, 32, 32), new THREE.MeshBasicMaterial({ map: jupiTexture }));
scene.add(jupiter);

const marsTexture = new THREE.TextureLoader().load("./public/2k_mars.jpg");
const mars = new THREE.Mesh(new THREE.SphereGeometry(2.5, 32, 32), new THREE.MeshBasicMaterial({ map: marsTexture }));
scene.add(mars);

const saturnTexture = new THREE.TextureLoader().load("./public/2k_saturn.jpg");
const saturn = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshBasicMaterial({ map: saturnTexture }));
scene.add(saturn);
const ringGeometry = new THREE.RingGeometry(6, 10, 64);
const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.rotation.x = Math.PI / 2;
saturn.add(ring);

const uraTexture = new THREE.TextureLoader().load("./public/2k_uranus.jpg");
const uranus = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshBasicMaterial({ map: uraTexture }));
scene.add(uranus);

const nepTexture = new THREE.TextureLoader().load("./public/2k_neptune.jpg");
const neptune = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshBasicMaterial({ map: nepTexture }));
scene.add(neptune);

// Define Mercury orbit
const mercuryOrbit = new THREE.EllipseCurve(0, 0, 38, 36, 0, 2 * Math.PI, false, 0);
const mercuryOrbitPoints = mercuryOrbit.getPoints(50);
const mercuryOrbitGeometry = new THREE.BufferGeometry().setFromPoints(mercuryOrbitPoints);
const mercuryOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
const mercuryOrbitLine = new THREE.Line(mercuryOrbitGeometry, mercuryOrbitMaterial);
scene.add(mercuryOrbitLine);

// Define Venus orbit
const venusOrbit = new THREE.EllipseCurve(0, 0, 55, 50, 0, 2 * Math.PI, false, 0);
const venusOrbitPoints = venusOrbit.getPoints(50);
const venusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(venusOrbitPoints);
const venusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
const venusOrbitLine = new THREE.Line(venusOrbitGeometry, venusOrbitMaterial);
scene.add(venusOrbitLine);

// Define Mars orbit
const marsOrbit = new THREE.EllipseCurve(0, 0, 87, 76, 0, 2 * Math.PI, false, 0);
const marsOrbitPoints = marsOrbit.getPoints(50);
const marsOrbitGeometry = new THREE.BufferGeometry().setFromPoints(marsOrbitPoints);
const marsOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
const marsOrbitLine = new THREE.Line(marsOrbitGeometry, marsOrbitMaterial);
scene.add(marsOrbitLine);

// Define Jupiter orbit
const jupiOrbit = new THREE.EllipseCurve(0, 0, 135, 125, 0, 2 * Math.PI, false, 0);
const jupiOrbitPoints = jupiOrbit.getPoints(50);
const jupiOrbitGeometry = new THREE.BufferGeometry().setFromPoints(jupiOrbitPoints);
const jupiOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xfff000 });
const jupiOrbitLine = new THREE.Line(jupiOrbitGeometry, jupiOrbitMaterial);
scene.add(jupiOrbitLine);

// Define Saturn orbit
const satOrbit = new THREE.EllipseCurve(0, 0, 167, 148, 0, 2 * Math.PI, false, 0);
const satOrbitPoints = satOrbit.getPoints(50);
const satOrbitGeometry = new THREE.BufferGeometry().setFromPoints(satOrbitPoints);
const satOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xfff0f0 });
const satOrbitLine = new THREE.Line(satOrbitGeometry, satOrbitMaterial);
scene.add(satOrbitLine);

// Define Uranus orbit
const uraOrbit = new THREE.EllipseCurve(0, 0, 200, 177, 0, 2 * Math.PI, false, 0);
const uraOrbitPoints = uraOrbit.getPoints(50);
const uraOrbitGeometry = new THREE.BufferGeometry().setFromPoints(uraOrbitPoints);
const uraOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xff00f0 });
const uraOrbitLine = new THREE.Line(uraOrbitGeometry, uraOrbitMaterial);
scene.add(uraOrbitLine);

// Define Neptune orbit
const nepOrbit = new THREE.EllipseCurve(0, 0, 235, 207, 0, 2 * Math.PI, false, 0);
const nepOrbitPoints = nepOrbit.getPoints(50);
const nepOrbitGeometry = new THREE.BufferGeometry().setFromPoints(nepOrbitPoints);
const nepOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const nepOrbitLine = new THREE.Line(nepOrbitGeometry, nepOrbitMaterial);
scene.add(nepOrbitLine);


// Define Earth orbits
const earthOrbit = new THREE.EllipseCurve(0, 0, 70, 62, 0, 2 * Math.PI, false, 0);
const earthOrbitPoints = earthOrbit.getPoints(50);
const earthOrbitGeometry = new THREE.BufferGeometry().setFromPoints(earthOrbitPoints);
const earthOrbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const earthOrbitLine = new THREE.Line(earthOrbitGeometry, earthOrbitMaterial);
scene.add(earthOrbitLine);

// Create inner asteroid belt
const asteroidBelt = new THREE.Group();
scene.add(asteroidBelt);

const asteroidBeltTexture = new THREE.TextureLoader().load("./public/asteroid.jpg");
const asteroidCount = 700;
const asteroidDistanceRange = { min: 92, max: 114 };
const asteroidSizeRange = { min: 0.2, max: 1 };
const asteroidGeometry = new THREE.SphereGeometry(1, 8, 8);
const asteroidMaterial = new THREE.MeshBasicMaterial({ map: asteroidBeltTexture });

const asteroidOrbit = new THREE.EllipseCurve(
    0, 0,
    (asteroidDistanceRange.max + asteroidDistanceRange.min) / 2, 
    (asteroidDistanceRange.max - asteroidDistanceRange.min) / 2,
    0, 2 * Math.PI,
    false, 
    0
);
const asteroidOrbitPoints = asteroidOrbit.getPoints(asteroidCount);


for (let i = 0; i < asteroidCount; i++) {
    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
    const distance = Math.random() * (asteroidDistanceRange.max - asteroidDistanceRange.min) + asteroidDistanceRange.min;
    const angle = Math.random() * 2 * Math.PI;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    asteroid.position.set(x, y, 0);
    asteroid.scale.setScalar(Math.random() * (asteroidSizeRange.max - asteroidSizeRange.min) + asteroidSizeRange.min);
    asteroidBelt.add(asteroid);
}

// Create Kuiper belt
const asteroidBelt2 = new THREE.Group();
scene.add(asteroidBelt2);

const asteroidCount2 = 8000;
const asteroidDistanceRange2 = { min: 250, max: 600 };
const asteroidSizeRange2 = { min: 0.2, max: 1.5 };
const asteroidGeometry2 = new THREE.SphereGeometry(1, 8, 8);
const asteroidMaterial2 = new THREE.MeshBasicMaterial({ map: asteroidBeltTexture });

const asteroidOrbit2 = new THREE.EllipseCurve(
    0, 0,
    (asteroidDistanceRange2.max + asteroidDistanceRange2.min) / 2, 
    (asteroidDistanceRange2.max - asteroidDistanceRange2.min) / 2,
    0, 2 * Math.PI,
    false, 
    0
);
const asteroidOrbitPoints2 = asteroidOrbit2.getPoints(asteroidCount2);


for (let i = 0; i < asteroidCount2; i++) {
    const asteroid2 = new THREE.Mesh(asteroidGeometry2, asteroidMaterial2);
    const distance2 = Math.random() * (asteroidDistanceRange2.max - asteroidDistanceRange2.min) + asteroidDistanceRange2.min;
    const angle = Math.random() * 2 * Math.PI;
    const x = Math.cos(angle) * distance2;
    const y = Math.sin(angle) * distance2;
    asteroid2.position.set(x, y, 0);
    asteroid2.scale.setScalar(Math.random() * (asteroidSizeRange2.max - asteroidSizeRange2.min) + asteroidSizeRange2.min);
    asteroidBelt2.add(asteroid2);
}


// Add orbit control
const controls = new OrbitControls(camera, renderer.domElement);

// Add scene background
const spaceTexture = new THREE.TextureLoader().load("./public/space.jpg");
scene.background = spaceTexture;

// Create constructor for infographic

function info(text) {
    var textInfo = document.createElement("div");
    textInfo.style.position = "absolute";
    textInfo.style.left = "30px";
    textInfo.style.width = "250px";
    textInfo.style.height = "350px";
    textInfo.style.backgroundColor = "transparent";
    textInfo.style.color = "white";
    textInfo.style.textAlign = "center";
    textInfo.style.border = "30px solid black";
    textInfo.style.borderImage = "url('./public/border.png') 250 250 stretch";
    textInfo.style.borderImageSlice = "250";
    textInfo.style.padding = "10px";
    textInfo.style.display = "none";
    textInfo.innerHTML = text;
    return textInfo;
}

// Info for sun
var sunInfo = new info("The Sun is a hot, nearly perfect sphere of plasma at the center of our solar system. It produces energy through nuclear fusion and is the most important source of energy for our planet. Its activity affects our climate and weather patterns, and it is a subject of fascination for astronomers.");

// Add the info to the document
document.body.appendChild(sunInfo);

// info for mercury
var mercuryInfo = new info("Mercury is the smallest planet in our solar system, closest to the Sun. It has a rocky surface, extreme temperature variations, a large iron core, and a weak magnetic field. Space missions have provided more information about it.");
document.body.appendChild(mercuryInfo);

// info for venus
var venusInfo = new info("Venus is the second planet from the Sun and similar in size to Earth. It has a thick, toxic atmosphere causing extreme surface temperatures, volcanic activity, and retrograde rotation. It is one of the brightest objects in the sky and has been known since ancient times.");
document.body.appendChild(venusInfo);

// info for earth
var earthInfo = new info("Earth is the third planet from the Sun and the only known planet with life. It has diverse ecosystems, protective atmosphere, magnetic field, and is habitable.");
document.body.appendChild(earthInfo);

// info for mars
var marsInfo = new info("Mars is the fourth planet from the Sun, known as the Red Planet due to its appearance. It has a thin atmosphere, deserts, volcanoes, and a canyon system. It is home to the largest mountain in our solar system, Olympus Mons. Mars has been studied for its potential to support life.");
document.body.appendChild(marsInfo);

// info for jupiter
var jupiterInfo = new info("Jupiter is the largest planet in our solar system and the fifth from the Sun. It is a gas giant with a banded appearance, 79+ moons, and a faint ring system. Jupiter has a strong magnetic field and intense radiation belts, and it is of great interest to astronomers.");
document.body.appendChild(jupiterInfo);

// info for saturn
var saturnInfo = new info("Saturn is the sixth planet from the Sun and the second largest in our solar system. It has a prominent ring system, thick hydrogen-helium atmosphere, and 82+ moons including Titan with a dense atmosphere. Saturn has a magnetic field and intense radiation belts, and it is studied by space missions.");
document.body.appendChild(saturnInfo);

// info for uranus
var uranusInfo = new info("Uranus is the seventh planet from the Sun and the third largest in our solar system. It is an ice giant with a blue-green color, complex ring system, and at least 27 moons. Uranus has a tilted axis of rotation and an unusual magnetic field. It has been explored by space missions and remains an object of scientific interest.");
document.body.appendChild(uranusInfo);

// info for neptune
var neptuneInfo = new info("Neptune is the eighth planet from the Sun and the fourth largest in our solar system. It is an ice giant with a deep blue color, complex ring system, and at least 14 moons. Neptune has a strong magnetic field and the strongest winds in the solar system. It has been explored by Voyager 2 and remains an object of scientific interest.");
document.body.appendChild(neptuneInfo);

// Create a Three.js event listener to detect when the object is clicked
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// adding text class to infographics
sunInfo.classList.add("text");
mercuryInfo.classList.add("text");
venusInfo.classList.add("text");
earthInfo.classList.add("text");
marsInfo.classList.add("text");
jupiterInfo.classList.add("text");
saturnInfo.classList.add("text");
uranusInfo.classList.add("text");
neptuneInfo.classList.add("text");

function fadeOut(element) {
    let opacity = 1;
    const interval = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(interval);
        element.style.display = "none";
      } else {
        opacity -= 0.05;
        element.style.opacity = opacity;
      }
    }, 50);
  }
  
  function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += 0.05;
        element.style.opacity = opacity;
      }
    }, 50);
  }

function onClick(event) {
    // hide all text elements before showing the new one
    const textElements = document.querySelectorAll(".text");
    textElements.forEach((el) => {
      el.style.display = "none";
      el.style.opacity = "0";
    });
  
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
  
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);
  
    for (let i = 0; i < intersects.length; i++) {
      const object = intersects[i].object;
      if (object === sun) {
        // show or hide the text element depending on its current display state
        if (sunInfo.style.display === "none") {
          sunInfo.style.display = "block";
          fadeIn(sunInfo);
        } else {
          fadeOut(sunInfo);
        }
      }
      if (object === mercury) {
        if (mercuryInfo.style.display === "none") {
          mercuryInfo.style.display = "block";
          fadeIn(mercuryInfo);
        } else {
          fadeOut(mercuryInfo);
        }
      }
      if (object === venus) {
        if (venusInfo.style.display === "none") {
          venusInfo.style.display = "block";
          fadeIn(venusInfo);
        } else {
          fadeOut(venusInfo);
        }
      }
      if (object === earth) {
        if (earthInfo.style.display === "none") {
          earthInfo.style.display = "block";
          fadeIn(earthInfo);
        } else {
          fadeOut(earthInfo);
        }
      }
      if (object === mars) {
        if (marsInfo.style.display === "none") {
          marsInfo.style.display = "block";
          fadeIn(marsInfo);
        } else {
          fadeOut(marsInfo);
        }
      }
      if (object === jupiter) {
        if (jupiterInfo.style.display === "none") {
          jupiterInfo.style.display = "block";
          fadeIn(jupiterInfo);
        } else {
          fadeOut(jupiterInfo);
        }
      }
      if (object === saturn) {
        if (saturnInfo.style.display === "none") {
          saturnInfo.style.display = "block";
          fadeIn(saturnInfo);
        } else {
          fadeOut(saturnInfo);
        }
      }
      if (object === uranus) {
        if (uranusInfo.style.display === "none") {
          uranusInfo.style.display = "block";
          fadeIn(uranusInfo);
        } else {
          fadeOut(uranusInfo);
        }
      }
      if (object === neptune) {
        if (neptuneInfo.style.display === "none") {
          neptuneInfo.style.display = "block";
          fadeIn(neptuneInfo);
        } else {
          fadeOut(neptuneInfo);
        }
      }
    }
  }

document.addEventListener("mousemove", onMouseMove, false);
document.addEventListener("click", onClick, false);


// Create animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update planet positions
    const time = Date.now() * 0.0005;

    // Update inner asteroid belt
    const asteroidBeltAngle = time * 0.25;
    asteroidBelt.rotation.z = asteroidBeltAngle;

    // Update Kuiper belt
    const asteroidBeltAngle2 = time * 0.1;
    asteroidBelt2.rotation.z = asteroidBeltAngle2;

    // Mercury
    const mercuryAngle = time * 0.6;
    const mercuryX = Math.cos(mercuryAngle) * 38;
    const mercuryY = Math.sin(mercuryAngle) * 36;
    mercury.position.x = mercuryX;
    mercury.position.y = mercuryY;

    // Venus
    const venusAngle = time * 0.3;
    const venusX = Math.cos(venusAngle) * 55;
    const venusY = Math.sin(venusAngle) * 50;
    venus.position.x = venusX;
    venus.position.y = venusY;
    venus.rotation.y += 0.02;

    // Earth
    const earthAngle = time * 0.5;
    const earthX = Math.cos(earthAngle) * 70;
    const earthY = Math.sin(earthAngle) * 62;
    earth.position.x = earthX;
    earth.position.y = earthY;
    earth.rotation.y += 0.03;

    // Mars
    const marsAngle = time * 0.4;
    const marsX = Math.cos(marsAngle) * 87;
    const marsY = Math.sin(marsAngle) * 76;
    mars.position.x = marsX;
    mars.position.y = marsY;
    mars.rotation.y += 0.02;

    // Jupiter
    const jupiAngle = time * 0.24;
    const jupiX= Math.cos(jupiAngle) * 135;
    const jupiY= Math.sin(jupiAngle) * 125;
    jupiter.position.x = jupiX;
    jupiter.position.y = jupiY;
    jupiter.rotation.y += 0.01;

    // Saturn
    const saturnAngle = time * 0.2;
    const saturnX = Math.cos(saturnAngle) * 167;
    const saturnY = Math.sin(saturnAngle) * 148;
    saturn.position.x = saturnX;
    saturn.position.y = saturnY;
    saturn.rotation.y += 0.01;
    ring.rotation.x +=0.01;

    //Uranus
    const uranusAngle = time * 0.16;
    const uranusX = Math.cos(uranusAngle) * 200;
    const uranusY = Math.sin(uranusAngle) * 177;
    uranus.position.x = uranusX;
    uranus.position.y = uranusY;
    uranus.rotation.y += 0.01;

    //Neptune
    const neptuneAngle = time * 0.1;
    const neptuneX = Math.cos(neptuneAngle) * 235;
    const neptuneY = Math.sin(neptuneAngle) * 207;
    neptune.position.x = neptuneX;
    neptune.position.y = neptuneY;
    neptune.rotation.y += 0.01;

    //Sun
    sun.rotation.y += 0.01;
    sun.rotation.x += 0.02;

    // Render the scene
    renderer.render(scene, camera);
    controls.update();
}

animate();
