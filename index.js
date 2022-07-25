import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Sprite19 from "./Sprite19/Sprite19.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import Sprite21 from "./Sprite21/Sprite21.js";
import Sprite22 from "./Sprite22/Sprite22.js";
import Sprite23 from "./Sprite23/Sprite23.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -194,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: 16,
    y: 54,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 4
  }),
  Sprite3: new Sprite3({
    x: -3.3954254356554703,
    y: -160.53749382251465,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 2
  }),
  Sprite4: new Sprite4({
    x: -127.35794453625965,
    y: 154.6423790685254,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 5
  }),
  Sprite5: new Sprite5({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sprite6: new Sprite6({
    x: -1.6511986744764044,
    y: 10.629680433740958,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 7
  }),
  Sprite7: new Sprite7({
    x: -61.67761369435702,
    y: 153.54506097819868,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 8
  }),
  Sprite8: new Sprite8({
    x: -67.3987853135845,
    y: 59.52968863282436,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 3
  }),
  Sprite9: new Sprite9({
    x: 29,
    y: 29,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 20
  }),
  Sprite10: new Sprite10({
    x: -132,
    y: -16,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 9
  }),
  Sprite11: new Sprite11({
    x: -7.8442403185525365,
    y: -19.276733988890108,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 10
  }),
  Sprite12: new Sprite12({
    x: 8.763114233400328,
    y: 150.75023146775087,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: false,
    layerOrder: 11
  }),
  Sprite13: new Sprite13({
    x: 2,
    y: -40,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Sprite14: new Sprite14({
    x: -61,
    y: 27,
    direction: 90,
    costumeNumber: 2,
    size: 20,
    visible: false,
    layerOrder: 13
  }),
  Sprite15: new Sprite15({
    x: 77.5744202221024,
    y: 151.38549750264966,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 14
  }),
  Sprite16: new Sprite16({
    x: -8.746444530676449,
    y: 58.18021693684879,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 15
  }),
  Sprite17: new Sprite17({
    x: -128.05352140649612,
    y: -14.75086624925629,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 16
  }),
  Sprite18: new Sprite18({
    x: 7.185424238138729,
    y: -17.077622057137678,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 17
  }),
  Sprite19: new Sprite19({
    x: 66.4134203742017,
    y: -160.79961916035018,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 18
  }),
  Sprite20: new Sprite20({
    x: -6,
    y: -25,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Sprite21: new Sprite21({
    x: 22,
    y: -16,
    direction: 90,
    costumeNumber: 14,
    size: 66,
    visible: false,
    layerOrder: 21
  }),
  Sprite22: new Sprite22({
    x: 143.38932576266814,
    y: -159.36062751647057,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true,
    layerOrder: 22
  }),
  Sprite23: new Sprite23({
    x: -36.64489433671295,
    y: 37.39274677273095,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: true,
    layerOrder: 23
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
