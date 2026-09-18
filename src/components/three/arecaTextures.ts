import * as THREE from 'three';

export type MaterialPreset = 'natural' | 'toasted' | 'bleached';

/**
 * Generates procedural high-resolution canvas textures for realistic
 * Areca Palm Leaf sheaths without requiring external image assets.
 */
export function createArecaTextures(preset: MaterialPreset = 'natural') {
  const width = 1024;
  const height = 1024;

  // 1. Base Diffuse/Color Canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Color profiles
  let baseColor1 = '#DFCBB0';
  let baseColor2 = '#CFB897';
  let fiberDark = 'rgba(105, 78, 48, 0.18)';
  let fiberLight = 'rgba(255, 250, 240, 0.22)';
  let edgeBurn = 'rgba(110, 68, 30, 0.4)';

  if (preset === 'toasted') {
    baseColor1 = '#C6A172';
    baseColor2 = '#A87F4E';
    fiberDark = 'rgba(74, 45, 18, 0.3)';
    fiberLight = 'rgba(240, 215, 175, 0.15)';
    edgeBurn = 'rgba(68, 38, 12, 0.6)';
  } else if (preset === 'bleached') {
    baseColor1 = '#F3E8D5';
    baseColor2 = '#E6D7BD';
    fiberDark = 'rgba(130, 105, 75, 0.12)';
    fiberLight = 'rgba(255, 255, 255, 0.3)';
    edgeBurn = 'rgba(145, 110, 70, 0.25)';
  }

  // Base gradient
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, baseColor1);
  grad.addColorStop(0.5, baseColor2);
  grad.addColorStop(1, baseColor1);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Longitudinal parallel leaf fibers
  const numFibers = 450;
  for (let i = 0; i < numFibers; i++) {
    const x = Math.random() * width;
    const lineWidth = Math.random() * 2.5 + 0.5;
    const isDark = Math.random() > 0.35;

    ctx.strokeStyle = isDark ? fiberDark : fiberLight;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();

    // Natural undulating botanical grain curve
    const waveFreq = 0.003 + Math.random() * 0.005;
    const waveAmp = 4 + Math.random() * 8;
    const phase = Math.random() * Math.PI * 2;

    ctx.moveTo(x, 0);
    for (let y = 0; y <= height; y += 32) {
      const offsetX = Math.sin(y * waveFreq + phase) * waveAmp;
      ctx.lineTo(x + offsetX, y);
    }
    ctx.stroke();
  }

  // Natural plant speckles & organic nodes
  for (let i = 0; i < 200; i++) {
    const px = Math.random() * width;
    const py = Math.random() * height;
    const r = Math.random() * 1.8 + 0.4;
    ctx.fillStyle = 'rgba(92, 64, 34, 0.15)';
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Radial heat press die burn vignetting (darkened compressed perimeter)
  const radial = ctx.createRadialGradient(
    width / 2, height / 2, width * 0.28,
    width / 2, height / 2, width * 0.5
  );
  radial.addColorStop(0, 'rgba(0,0,0,0)');
  radial.addColorStop(0.75, 'rgba(0,0,0,0.04)');
  radial.addColorStop(1, edgeBurn);
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, width, height);

  const diffuseMap = new THREE.CanvasTexture(canvas);
  diffuseMap.wrapS = THREE.RepeatWrapping;
  diffuseMap.wrapT = THREE.RepeatWrapping;

  // 2. Normal / Bump Map Canvas
  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = 512;
  bumpCanvas.height = 512;
  const bCtx = bumpCanvas.getContext('2d')!;
  bCtx.fillStyle = '#808080';
  bCtx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 280; i++) {
    const bx = Math.random() * 512;
    bCtx.strokeStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.2)';
    bCtx.lineWidth = Math.random() * 2 + 0.8;
    bCtx.beginPath();
    bCtx.moveTo(bx, 0);
    bCtx.lineTo(bx + (Math.random() - 0.5) * 8, 512);
    bCtx.stroke();
  }

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;

  return { diffuseMap, bumpMap };
}

/**
 * Creates standard MeshPhysicalMaterial or MeshStandardMaterial configured for palm sheaths
 */
export function createArecaMaterial(preset: MaterialPreset = 'natural', wireframe = false) {
  const { diffuseMap, bumpMap } = createArecaTextures(preset);

  return new THREE.MeshStandardMaterial({
    map: diffuseMap,
    bumpMap: bumpMap,
    bumpScale: 0.035,
    roughness: 0.72,
    metalness: 0.04,
    wireframe: wireframe,
    side: THREE.DoubleSide
  });
}
