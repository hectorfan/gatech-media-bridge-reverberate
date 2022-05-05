var entries = [];
var tunnels_particle = [];
var tunnels_ripple = [];
var tunnels_string = [];
var tunnels_flower = [];
var particles = [];
var ripples = [];
var strings = [];
var flowers = [];
var covers = [];
var imageName;
var img;
var imgIndexEntry = 0;
var imgIndexCover = 0;
var imgIndexTunnel_1 = 0;
var imgIndexTunnel_2 = 0;
var imgIndexTunnel_3 = 0;
var imgIndexTunnel_4 = 0;
var imgIndexTunnelOut_1 = 217;
var imgIndexTunnelOut_2 = 217;
var imgIndexTunnelOut_3 = 217;
var imgIndexTunnelOut_4 = 217;
var imgIndexAct_1 = 0;
var imgIndexAct_2 = 0;
var imgIndexAct_3 = 0;
var imgIndexAct_4 = 0;

var tile1 = { x: '41', y: '41' };
var tile2 = { x: '647', y: '41' };
var tile3 = { x: '1253', y: '41' };
var tile4 = { x: '1859', y: '41' };
var tile5 = { x: '2465', y: '41' };

var ifTunnel_1 = false;
var ifTunnel_2 = false;
var ifTunnel_3 = false;
var ifTunnel_4 = false;

var ifTunnelOut_1 = false;
var ifTunnelOut_2 = false;
var ifTunnelOut_3 = false;
var ifTunnelOut_4 = false;

var ifActAni_1 = false;
var ifActAni_2 = false;
var ifActAni_3 = false;
var ifActAni_4 = false;

var idle;
var ifIdle_1 = true;
var ifIdle_2 = true;
var ifIdle_3 = true;
var ifIdle_4 = true;
var transMusic;
var particleMusic;
var rippleMusic;
var stringMusic;
var flowerMusic;


function preload() {
  idle = loadSound('audio/IdleMusic.mp3');
  transMusic = loadSound('audio/Transition_music.m4a');
  particleMusic = loadSound('audio/particle.m4a');
  rippleMusic = loadSound('audio/ripple.m4a');
  stringMusic = loadSound('audio/string.m4a');
  flowerMusic = loadSound('audio/flower.m4a');

  for (var i = 0; i <= 599; i++) {
    entries[i] = loadImage('images/entry_animation/entry' + String(i).padStart(4, '0') + '.png');
  }

  for (var i = 0; i <= 185; i++) {
    covers[i] = loadImage('images/cover/cover_' + i + '.png');
  }
  // imageName = entry0001.png;
  // img = loadImage('images/entry_animation/entry' + String(1).padStart(5, '0') + '.png');
  // entries[0] = loadImage('images/entry_animation/entry0001.png');
}

function setup() {
  for (var i = 0; i <= 217; i++) {
    tunnels_particle[i] = loadImage('images/tunnel_particle/tunnel_particle_' + i + '.png');
  }

  for (var i = 0; i <= 217; i++) {
    tunnels_ripple[i] = loadImage('images/tunnel_ripple/tunnel_ripple_' + i + '.png');
  }

  for (var i = 0; i <= 217; i++) {
    tunnels_string[i] = loadImage('images/tunnel_string/tunnel_string_' + i + '.png');
  }

  for (var i = 0; i <= 217; i++) {
    tunnels_flower[i] = loadImage('images/tunnel_flower/tunnel_flower_' + i + '.png');
  }

  for (var i = 0; i <= 59; i++) {
    particles[i] = loadImage('images/particle/particle_' + i + '.png');
  }

  for (var i = 0; i <= 119; i++) {
    ripples[i] = loadImage('images/ripple/ripple_' + i + '.png');
  }

  for (var i = 0; i <= 159; i++) {
    strings[i] = loadImage('images/string/string_' + i + '.png');
  }

  for (var i = 0; i <= 129; i++) {
    flowers[i] = loadImage('images/flower/flower_' + i + '.png');
  }

  idle.loop();
  idle.setVolume(0.7);
  particleMusic.loop();
  particleMusic.setVolume(0);
  rippleMusic.loop();
  rippleMusic.setVolume(0);
  stringMusic.loop();
  stringMusic.setVolume(0);
  flowerMusic.loop();
  flowerMusic.setVolume(0);

  createCanvas(3072, 1280);
  background(0);
}

function draw() {

  // var i = 1;
  // console.log(String(i).padStart(5, '0'));

  // text = 'images/entry_animation/entry' + String(1).padStart(5, '0') + '.png';
  // console.log(text);

  moveFrameEntry();
  if (ifIdle_1 == true) {
    Entry(tile1.x, tile1.y);
  }

  if (ifIdle_2 == true) {
    Entry(tile2.x, tile2.y);
  }

  if (ifIdle_3 == true) {
    Entry(tile3.x, tile3.y);
  }

  if (ifIdle_4 == true) {
    Entry(tile4.x, tile4.y);
  }

  moveFrameCover();
  Cover(tile5.x, tile5.y);

  /////////////tile 1
  if (ifTunnel_1 == true) {
    moveFrameTunnel_1();
    tunnel_1(tile1.x, tile1.y);
  }

  if (ifActAni_1 == true) {
    moveFrameAct_1();
    act_1(tile1.x, tile1.y);
  }

  if (ifTunnelOut_1 == true){
    moveFrameTunnelOut_1();
    tunnelOut_1(tile1.x, tile1.y);
  }

  /////////////tile 2
  if (ifTunnel_2 == true) {
    moveFrameTunnel_2();
    tunnel_2(tile2.x, tile2.y);
  }

  if (ifActAni_2 == true) {
    moveFrameAct_2();
    act_2(tile2.x, tile2.y);
  }

  if (ifTunnelOut_2 == true){
    moveFrameTunnelOut_2();
    tunnelOut_2(tile2.x, tile2.y);
  }

  /////////////tile 3
  if (ifTunnel_3 == true) {
    moveFrameTunnel_3();
    tunnel_3(tile3.x, tile3.y);
  }

  if (ifActAni_3 == true) {
    moveFrameAct_3();
    act_3(tile3.x, tile3.y);
  }

  if (ifTunnelOut_3 == true){
    moveFrameTunnelOut_3();
    tunnelOut_3(tile3.x, tile3.y);
  }

  /////////////tile 4
  if (ifTunnel_4 == true) {
    moveFrameTunnel_4();
    tunnel_4(tile4.x, tile4.y);
  }

  if (ifActAni_4 == true) {
    moveFrameAct_4();
    act_4(tile4.x, tile4.y);
  }

  if (ifTunnelOut_4 == true){
    moveFrameTunnelOut_4();
    tunnelOut_4(tile4.x, tile4.y);
  }

  // moveFrameActAni_1();
  // act_1(tile1.x, tile1.y);

  // if (ifIdle){
  //   idle.play();
  // }
}



////////////////////////functions////////////////////////
function moveFrameEntry() {
  imgIndexEntry++;
  if (imgIndexEntry > 599) {
    imgIndexEntry = 0;
  }
}

function Entry(entry_x, entry_y) {
  image(entries[imgIndexEntry], entry_x, entry_y);
  // ifIdle = true;
}

function moveFrameCover() {
  imgIndexCover++;
  if (imgIndexCover > 185) {
    imgIndexCover = 0;
  }
}

function Cover(cover_x, cover_y) {
  image(covers[imgIndexCover], cover_x, cover_y);
  // ifIdle = true;
}

///////////tile 1
function moveFrameTunnel_1() {
  imgIndexTunnel_1++;
  if (imgIndexTunnel_1 > 217) {
    imgIndexTunnel_1 = 0;
    ifTunnel_1 = false;
    ifActAni_1 = true;
  }
}

function tunnel_1(tunnel_1_x, tunnel_1_y) {
  image(tunnels_particle[imgIndexTunnel_1], tunnel_1_x, tunnel_1_y);
}

function moveFrameTunnelOut_1() {
  imgIndexTunnelOut_1--;
  if (imgIndexTunnelOut_1 < 0) {
    imgIndexTunnelOut_1 = 217;
    ifIdle_1 = true;
    ifTunnelOut_1 = false;
  }
}

function tunnelOut_1(tunnelOut_1_x, tunnelOut_1_y) {
  image(tunnels_particle[imgIndexTunnelOut_1], tunnelOut_1_x, tunnelOut_1_y);
}

function moveFrameAct_1() {
  imgIndexAct_1++;
  if (imgIndexAct_1 > 59) {
    imgIndexAct_1 = 0;
  }
}

function act_1(act_1_x, act_1_y) {
  image(particles[imgIndexAct_1], act_1_x, act_1_y);
  particleMusic.setVolume(1.0);
}

///////////tile 2
function moveFrameTunnel_2() {
  imgIndexTunnel_2++;
  if (imgIndexTunnel_2 > 217) {
    imgIndexTunnel_2 = 0;
    ifTunnel_2 = false;
    ifActAni_2 = true;
  }
}

function tunnel_2(tunnel_2_x, tunnel_2_y) {
  image(tunnels_ripple[imgIndexTunnel_2], tunnel_2_x, tunnel_2_y);
}

function moveFrameTunnelOut_2() {
  imgIndexTunnelOut_2--;
  if (imgIndexTunnelOut_2 < 0) {
    imgIndexTunnelOut_2 = 217;
    ifIdle_2 = true;
    ifTunnelOut_2 = false;
  }
}

function tunnelOut_2(tunnelOut_2_x, tunnelOut_2_y) {
  image(tunnels_ripple[imgIndexTunnelOut_2], tunnelOut_2_x, tunnelOut_2_y);
}

function moveFrameAct_2() {
  imgIndexAct_2++;
  if (imgIndexAct_2 > 119) {
    imgIndexAct_2 = 0;
  }
}

function act_2(act_2_x, act_2_y) {
  image(ripples[imgIndexAct_2], act_2_x, act_2_y);
  rippleMusic.setVolume(1.0);
}

////////tile 3
function moveFrameTunnel_3() {
  imgIndexTunnel_3++;
  if (imgIndexTunnel_3 > 217) {
    imgIndexTunnel_3 = 0;
    ifTunnel_3 = false;
    ifActAni_3 = true;
  }
}

function tunnel_3(tunnel_3_x, tunnel_3_y) {
  image(tunnels_string[imgIndexTunnel_3], tunnel_3_x, tunnel_3_y);
}

function moveFrameTunnelOut_3() {
  imgIndexTunnelOut_3--;
  if (imgIndexTunnelOut_3 < 0) {
    imgIndexTunnelOut_3 = 217;
    ifIdle_3 = true;
    ifTunnelOut_3 = false;
  }
}

function tunnelOut_3(tunnelOut_3_x, tunnelOut_3_y) {
  image(tunnels_string[imgIndexTunnelOut_3], tunnelOut_3_x, tunnelOut_3_y);
}

function moveFrameAct_3() {
  imgIndexAct_3++;
  if (imgIndexAct_3 > 159) {
    imgIndexAct_3 = 0;
  }
}

function act_3(act_3_x, act_3_y) {
  image(strings[imgIndexAct_3], act_3_x, act_3_y);
  stringMusic.setVolume(1.0);
}

////////tile 4
function moveFrameTunnel_4() {
  imgIndexTunnel_4++;
  if (imgIndexTunnel_4 > 217) {
    imgIndexTunnel_4 = 0;
    ifTunnel_4 = false;
    ifActAni_4 = true;
  }
}

function tunnel_4(tunnel_4_x, tunnel_4_y) {
  image(tunnels_flower[imgIndexTunnel_4], tunnel_4_x, tunnel_4_y);
}

function moveFrameTunnelOut_4() {
  imgIndexTunnelOut_4--;
  if (imgIndexTunnelOut_4 < 0) {
    imgIndexTunnelOut_4 = 217;
    ifIdle_4 = true;
    ifTunnelOut_4 = false;
  }
}

function tunnelOut_4(tunnelOut_4_x, tunnelOut_4_y) {
  image(tunnels_flower[imgIndexTunnelOut_4], tunnelOut_4_x, tunnelOut_4_y);
}

function moveFrameAct_4() {
  imgIndexAct_4++;
  if (imgIndexAct_4 > 129) {
    imgIndexAct_4 = 0;
  }
}

function act_4(act_4_x, act_4_y) {
  image(flowers[imgIndexAct_4], act_4_x, act_4_y);
  flowerMusic.setVolume(1.0);
}

/////////////////////////////control by keyboard
function keyReleased() {
  //////activate animation
  if (key === 'q') {
    ifTunnel_1 = true;
    ifIdle_1 = false;
    transMusic.play();
  }

  if (key === 'w') {
    ifTunnel_2 = true;
    ifIdle_2 = false;
    transMusic.play();
  }

  if (key === 'e') {
    ifTunnel_3 = true;
    ifIdle_3 = false;
    transMusic.play();
  }

  if (key === 'r') {
    ifTunnel_4 = true;
    ifIdle_4 = false;
    transMusic.play();
  }

  ////////quit animation
  if (key === 'a') {
    ifActAni_1 = false;
    ifTunnelOut_1 = true;
    // ifIdle_1 = true;
    particleMusic.setVolume(0);
  }

  if (key === 's') {
    ifActAni_2 = false;
    ifTunnelOut_2 = true;
    // ifIdle_2 = true;
    rippleMusic.setVolume(0);
  }

  if (key === 'd') {
    ifActAni_3 = false;
    ifTunnelOut_3 = true;
    // ifIdle_3 = true;
    stringMusic.setVolume(0);
  }

  if (key === 'f') {
    ifActAni_4 = false;
    ifTunnelOut_4 = true;
    // ifIdle_4 = true;
    flowerMusic.setVolume(0);
  }
}

