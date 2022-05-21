import * as THREE from 'three';

import Experience from '../Experience.js';

import Environment from './Environment.js';
import Floor from './Floor.js';
import Frame from './Frame.js';
import Gamen from './Gamen.js';

export default class World {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;

    this.floor = new Floor();
    this.environment = new Environment();

    this.debug = this.experience.debug;
    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('world');
    }

    // 物性
    this.floorWidth = this.floor.geometry.parameters.width;
    this.floorHeight = this.floor.geometry.parameters.height;
    this.gamenWidth = 1;
    this.gamenHeight = 2;

    /**
     *
     * 画面
     *
     */
    // this.setTopLeftGamens();
    this.setBottomLeftGamens();
    // this.setCenterTopGamens();
    // this.setCenterFrontGamens();

    /**
     * テスト!!!
     */
    this.debugParams = {};

    this.frame = new Frame();

    /**
     * Debug
     */
    if (this.debug.active) {
      // this.debugFolder
      //   .add(this.debugParams, 'gLsPower')
      //   .min(0)
      //   .max(100)
      //   .step(0.1)
      //   .name('groundLightsPower');
    }
  }

  /**
   * 左上隅
   */
  setTopLeftGamens() {
    this.groupTopLeftCorner = new THREE.Group();

    this.gamenTopLeftOne = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth / 2,
      this.floorHeight / 4 - this.gamenWidth * 3 - this.gamenWidth / 2,
      Math.PI,
      'purple',
      'magenta'
    );
    this.gamenTopLeftTwo = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth * 1.5,
      this.floorHeight / 4 - this.gamenWidth * 3 - this.gamenWidth / 2,
      Math.PI,
      'purple',
      'magenta'
    );
    this.gamenTopLeftThree = new Gamen(
      -this.floorWidth / 2 + this.floorWidth / 5 - this.floorWidth / 50,
      this.floorHeight / 4 - this.gamenWidth * 3,
      Math.PI * 0.5,
      'purple',
      'magenta'
    );
    this.gamenTopLeftFour = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth,
      this.floorHeight / 4 - this.gamenWidth * 3,
      Math.PI * 0.5,
      'purple',
      'magenta'
    );
    this.gamenTopLeftFive = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth * 2,
      this.floorHeight / 4 - this.gamenWidth * 3,
      Math.PI * 0.5,
      'purple',
      'magenta'
    );

    this.groupTopLeftCorner.add(
      this.gamenTopLeftOne.mesh,
      this.gamenTopLeftTwo.mesh,
      this.gamenTopLeftThree.mesh,
      this.gamenTopLeftFour.mesh,
      this.gamenTopLeftFive.mesh
    );
    this.scene.add(this.groupTopLeftCorner);
  }

  /**
   * 左下隅
   */
  setBottomLeftGamens() {
    this.groupBottomLeftCorner = new THREE.Group();

    this.gamenBottomLeftOne = new Gamen(
      -this.floorWidth / 2 + this.floorWidth / 5 - this.floorWidth / 50,
      this.floorHeight / 4 - this.gamenWidth,
      Math.PI * 0.5,
      'orange',
      'green'
    );
    this.gamenBottomLeftTwo = new Gamen(
      -this.floorWidth / 2 + this.floorWidth / 5 - this.floorWidth / 50,
      this.floorHeight / 4,
      Math.PI * 0.5,
      'orange',
      'green'
    );
    this.gamenBottomLeftThree = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth / 2+0.05,
      this.floorHeight / 4 + this.gamenWidth / 2+0.0045,
      Math.PI,
      'orange',
      'green'
    );
    ////////////////
    this.gamenBottomLeftThree2 = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth / 2 +
        0.0514,
      this.floorHeight / 4 + this.gamenWidth / 2 + 0.0950,
      Math.PI,
      'orange',
      'green'
    );
    ///////////////////

    this.groupBottomLeftCorner.add(
      this.gamenBottomLeftOne.mesh,
      this.gamenBottomLeftTwo.mesh,
      this.gamenBottomLeftThree.mesh,
      this.gamenBottomLeftThree2.mesh
    );
    this.scene.add(this.groupBottomLeftCorner);
  }

  /**
   * 中上
   */
  setCenterTopGamens() {
    this.groupCenterTop = new THREE.Group();

    this.gamenCenterTopOne = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth * 3,
      this.floorHeight / 4 - this.gamenWidth * 3 - this.gamenWidth / 2,
      Math.PI * 0.5,
      'red',
      'blue'
    );
    this.gamengamenCenterTopTwo = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth / 2 +
        this.gamenWidth * 3,
      this.floorHeight / 4 -
        this.gamenWidth * 3 -
        this.gamenWidth / 2 -
        this.gamenWidth / 2,
      Math.PI,
      'red',
      'blue'
    );
    this.gamengamenCenterTopThree = new Gamen(
      -this.floorWidth / 2 +
        this.floorWidth / 5 -
        this.floorWidth / 50 +
        this.gamenWidth * 1.5 +
        this.gamenWidth * 3,
      this.floorHeight / 4 -
        this.gamenWidth * 3 -
        this.gamenWidth / 2 -
        this.gamenWidth / 2,
      Math.PI,
      'red',
      'blue'
    );

    this.groupCenterTop.add(
      this.gamenCenterTopOne.mesh,
      this.gamengamenCenterTopTwo.mesh,
      this.gamengamenCenterTopThree.mesh
    );
    this.scene.add(this.groupCenterTop);
  }

  /**
   * 中前
   */
  setCenterFrontGamens() {
    this.groupCenterFront = new THREE.Group();

    this.gamenCenterFrontOne = new Gamen(
      this.gamenWidth / 2,
      this.gamenWidth,
      0
    );
    this.gamenCenterFrontTwo = new Gamen(
      this.gamenWidth * 1.5,
      this.gamenWidth,
      Math.PI
    );

    this.groupCenterFront.add(
      this.gamenCenterFrontOne.mesh,
      this.gamenCenterFrontTwo.mesh
    );
    this.scene.add(this.groupCenterFront);

    // I am bad at maths.
    this.groupCenterFront.position.set(-0.707, 0, -0.293);

    //

    this.groupCenterFrontRotated = new THREE.Group();

    this.gamenCenterFrontRotatedOne = new Gamen(
      this.gamenWidth / 2,
      this.gamenWidth,
      Math.PI
    );
    this.gamenCenterFrontRotatedTwo = new Gamen(
      this.gamenWidth * 1.5,
      this.gamenWidth,
      Math.PI
    );

    this.groupCenterFrontRotated.add(
      this.gamenCenterFrontRotatedOne.mesh,
      this.gamenCenterFrontRotatedTwo.mesh
    );
    this.scene.add(this.groupCenterFrontRotated);

    this.groupCenterFrontRotated.rotateY(-Math.PI * 0.25);
  }

  update() {}
}
