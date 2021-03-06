import * as THREE from 'three';

import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Debug from './Utils/Debug.js';

import Camera from './Camera.js';
import Renderer from './Renderer.js';

import World from './World/World.js';

let instance = null;

export default class Experience {
  constructor(canvas) {
    // Singleton pattern
    if (instance) {
      return instance;
    }

    instance = this;

    // Global access for dev console usage
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.debug = new Debug();

    this.sizes = new Sizes();
    this.time = new Time();

    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();

    const axesHelper = new THREE.AxesHelper(5);
    // this.scene.add(axesHelper);

    // Sizes' resize event
    this.sizes.on('resized', () => {
      this.resize();
    });

    // Time's tick event
    this.time.on('tick', () => {
      this.update();
    });

    /**
     * Mouse
     */
    this.mouse = new THREE.Vector2();
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.mouse.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });

    // 世界の始まり
    this.world = new World();
  }

  resize() {
    // Listen to the resize event and then propagate to the other classes
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }

  destroy() {
    // Remove every event listener
    this.sizes.off('resize');
    this.time.off('tick');

    // Traverse the whole scene and dispose everything properly
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        for (const key in child.material) {
          const value = child.material[key];

          if (value && typeof value.dispose === 'function') {
            value.dispose();
          }
        }
      }
    });

    this.camera.controls.dispose();
    this.renderer.instance.dispose();

    if (this.debug.active) {
      this.debug.ui.destroy();
    }

    // ... remove the canvas, more event listeners etc.
  }
}
