import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { 
  createArecaMaterial, 
  MaterialPreset 
} from './arecaTextures';
import { 
  Product3DModelType, 
  create12InchRoundDeepGeometry,
  create10InchShallowSquareGeometry,
  create10InchRoundDeepGeometry,
  create5InchRoundDeepBowlGeometry,
  createRoundPlateGeometry, 
  createDeepBowlGeometry, 
  createSquarePlateGeometry, 
  createOvalPlatterGeometry, 
  createCompartmentPlateGroup,
  createPressToolingGroup
} from './arecaGeometries';
import { 
  RotateCw, 
  Maximize2, 
  Sun, 
  Layers, 
  Flame, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  Sliders, 
  Compass,
  ArrowRight,
  Minimize2
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface Areca3DViewerProps {
  initialProduct?: Product3DModelType;
  showControls?: boolean;
  className?: string;
  height?: string;
}

const productMeta: Record<Product3DModelType, {
  name: string;
  subtitle: string;
  diameter: string;
  depth: string;
  weight: string;
  moq: string;
  idealFor: string;
}> = {
  'round-deep-12': {
    name: '12" Round Deep - Buffet Plate',
    subtitle: 'Buffet Plate & Grand Wedding Feasts',
    diameter: '305 mm (12 Inches)',
    depth: '28 mm (1.1 Inches Deep Rim)',
    weight: '50 - 56 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Grand wedding buffets, full-course feasts, thali style dining & heavy meals'
  },
  'square-shallow-10': {
    name: '10" Shallow Square - Starters & Biryani',
    subtitle: 'Contemporary Starters & Biryani Style Plating',
    diameter: '254 x 254 mm (10 Inches)',
    depth: '16 mm (0.63 Inches Shallow Rim)',
    weight: '42 - 46 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Dum biryani platters, starters, tandoori appetizers, kebabs & cocktail receptions'
  },
  'round-deep-10': {
    name: '10" Round Deep - Tiffin & Hot Foods',
    subtitle: 'Tiffin & Hot Foods with Spill-Proof Rim',
    diameter: '254 mm (10 Inches)',
    depth: '24 mm (0.95 Inches Deep Rim)',
    weight: '40 - 44 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Tiffin breakfasts (idli, dosa, vada), hot foods with sambar, rasam & curries'
  },
  'deep-bowl-5': {
    name: '5" Round Deep Bowl (2.2" Depth)',
    subtitle: 'Multipurpose Deep Basin (~320ml)',
    diameter: '127 mm (5 Inches)',
    depth: '56 mm (2.2 Inches Extra Depth)',
    weight: '20 - 24 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Multipurpose: curries, dal, gravies, soups, rasam, kheer, payasam & ice cream'
  },
  // Compatibility aliases
  'round-plate': {
    name: '10" Round Deep - Tiffin & Hot Foods',
    subtitle: 'Tiffin & Hot Foods with Spill-Proof Rim',
    diameter: '254 mm (10 Inches)',
    depth: '24 mm (0.95 Inches Deep Rim)',
    weight: '40 - 44 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Tiffin breakfasts, hot foods with sambar & curries'
  },
  'square-plate': {
    name: '10" Shallow Square - Starters & Biryani',
    subtitle: 'Starters & Biryani Style Plating',
    diameter: '254 x 254 mm (10 Inches)',
    depth: '16 mm (0.63 Inches Shallow Rim)',
    weight: '42 - 46 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Dum biryani platters, starters, kebabs & appetizers'
  },
  'deep-bowl': {
    name: '5" Round Deep Bowl (2.2" Depth)',
    subtitle: 'Multipurpose Deep Basin (~320ml)',
    diameter: '127 mm (5 Inches)',
    depth: '56 mm (2.2 Inches Extra Depth)',
    weight: '20 - 24 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Multipurpose: curries, dal, gravies, soups & desserts'
  },
  'compartment-plate': {
    name: '12" Round Deep - Buffet Plate',
    subtitle: 'Buffet Plate & Grand Wedding Feasts',
    diameter: '305 mm (12 Inches)',
    depth: '28 mm (1.1 Inches Deep Rim)',
    weight: '50 - 56 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Grand wedding buffets, full-course feasts & heavy meals'
  },
  'oval-platter': {
    name: '10" Shallow Square - Starters & Biryani',
    subtitle: 'Starters & Biryani Style Plating',
    diameter: '254 x 254 mm (10 Inches)',
    depth: '16 mm (0.63 Inches Shallow Rim)',
    weight: '42 - 46 Grams',
    moq: '3,000 Pcs per Order',
    idealFor: 'Dum biryani platters, starters, kebabs & appetizers'
  }
};

export const Areca3DViewer: React.FC<Areca3DViewerProps> = ({
  initialProduct = 'round-deep-12',
  showControls = true,
  className = '',
  height = 'h-[520px] sm:h-[620px]'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBulkEnquiry } = useRouter();

  // State controls
  const [selectedProduct, setSelectedProduct] = useState<Product3DModelType>(initialProduct);
  const [materialPreset, setMaterialPreset] = useState<MaterialPreset>('natural');
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isPressSimulating, setIsPressSimulating] = useState(false);
  const [pressProgress, setPressProgress] = useState(0);
  const [lightingMode, setLightingMode] = useState<'studio' | 'sunlight' | 'inspection'>('studio');
  const [showDimensions, setShowDimensions] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [snapshotTaken, setSnapshotTaken] = useState(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const productGroupRef = useRef<THREE.Group | null>(null);
  const toolingGroupRef = useRef<{
    toolingGroup: THREE.Group;
    upperDie: THREE.Group;
    lowerDie: THREE.Group;
    rawLeaf: THREE.Mesh;
  } | null>(null);

  // Pointer drag rotation tracking
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0.002, y: 0.005 });
  const targetRotationRef = useRef({ x: 0.35, y: 0.4 });

  // Steam particles system
  const particlesRef = useRef<THREE.Points | null>(null);

  // Update Three.js product model
  const updateProductModel = useCallback((productType: Product3DModelType, preset: MaterialPreset, wireframe: boolean) => {
    if (!productGroupRef.current || !sceneRef.current) return;

    // Clear previous children
    while (productGroupRef.current.children.length > 0) {
      const obj = productGroupRef.current.children[0];
      productGroupRef.current.remove(obj);
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }

    const material = createArecaMaterial(preset, wireframe);

    if (productType === 'round-deep-12' || productType === 'compartment-plate') {
      const geom = create12InchRoundDeepGeometry();
      const mesh = new THREE.Mesh(geom, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      productGroupRef.current.add(mesh);
    } else if (productType === 'square-shallow-10' || productType === 'square-plate' || productType === 'oval-platter') {
      const geom = create10InchShallowSquareGeometry();
      const mesh = new THREE.Mesh(geom, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      productGroupRef.current.add(mesh);
    } else if (productType === 'round-deep-10' || productType === 'round-plate') {
      const geom = create10InchRoundDeepGeometry();
      const mesh = new THREE.Mesh(geom, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      productGroupRef.current.add(mesh);
    } else if (productType === 'deep-bowl-5' || productType === 'deep-bowl') {
      const geom = create5InchRoundDeepBowlGeometry();
      const mesh = new THREE.Mesh(geom, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      productGroupRef.current.add(mesh);
    }
  }, []);

  // Update lights based on lightingMode
  const updateLighting = useCallback((mode: 'studio' | 'sunlight' | 'inspection') => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    // Remove existing non-ambient lights
    const toRemove: THREE.Object3D[] = [];
    scene.traverse((obj) => {
      if (obj instanceof THREE.DirectionalLight || obj instanceof THREE.PointLight || obj instanceof THREE.SpotLight) {
        toRemove.push(obj);
      }
    });
    toRemove.forEach(obj => scene.remove(obj));

    if (mode === 'studio') {
      // Warm studio softbox key light
      const keyLight = new THREE.DirectionalLight(0xFFF3E0, 2.2);
      keyLight.position.set(6, 10, 8);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      scene.add(keyLight);

      // Cool botanical fill light
      const fillLight = new THREE.DirectionalLight(0xCCE7D0, 1.2);
      fillLight.position.set(-8, 5, -6);
      scene.add(fillLight);

      // Warm amber rim light
      const rimLight = new THREE.PointLight(0xE0A96D, 2.0, 20);
      rimLight.position.set(0, -4, -6);
      scene.add(rimLight);
    } else if (mode === 'sunlight') {
      // Direct high-noon golden sun
      const sunLight = new THREE.DirectionalLight(0xFFF8E7, 3.2);
      sunLight.position.set(4, 14, 5);
      sunLight.castShadow = true;
      scene.add(sunLight);

      const skyLight = new THREE.HemisphereLight(0x74C69D, 0xD4BE9B, 1.5);
      scene.add(skyLight);
    } else if (mode === 'inspection') {
      // High-contrast clean room inspection lighting
      const overhead = new THREE.DirectionalLight(0xFFFFFF, 3.5);
      overhead.position.set(0, 12, 0);
      overhead.castShadow = true;
      scene.add(overhead);

      const crossLight1 = new THREE.DirectionalLight(0x8EE4AF, 1.0);
      crossLight1.position.set(10, 2, 0);
      scene.add(crossLight1);

      const crossLight2 = new THREE.DirectionalLight(0xE0A96D, 1.0);
      crossLight2.position.set(-10, 2, 0);
      scene.add(crossLight2);
    }
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const heightPx = container.clientHeight || 600;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / heightPx, 0.1, 100);
    camera.position.set(0, 8.5, 12.5);
    camera.lookAt(0, 0.2, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true // enables high-res snapshot
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Ambient lighting
    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.85);
    scene.add(ambient);
    updateLighting(lightingMode);

    // 5. Shadow catcher ground plane with subtle gradient disc
    const shadowPlaneGeom = new THREE.PlaneGeometry(35, 35);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeom, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.55;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Circular pedestal disc
    const discGeom = new THREE.CylinderGeometry(6.5, 7.0, 0.2, 64);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0xFAF8F5,
      roughness: 0.85,
      metalness: 0.05
    });
    const disc = new THREE.Mesh(discGeom, discMat);
    disc.position.y = -0.65;
    disc.receiveShadow = true;
    scene.add(disc);

    // 6. Product Group
    const productGroup = new THREE.Group();
    productGroup.position.y = 0;
    scene.add(productGroup);
    productGroupRef.current = productGroup;

    // Initial product build
    updateProductModel(selectedProduct, materialPreset, isWireframe);

    // 7. Tooling Group for Hydraulic Press Simulation (hidden by default)
    const tooling = createPressToolingGroup();
    tooling.toolingGroup.visible = false;
    scene.add(tooling.toolingGroup);
    toolingGroupRef.current = tooling;

    // 8. Steam Particles
    const particleCount = 75;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5.0;
      positions[i + 1] = Math.random() * 2.5;
      positions[i + 2] = (Math.random() - 0.5) * 5.0;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xE8F5E9,
      size: 0.25,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 9. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 10. Animation Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (productGroupRef.current) {
        if (isAutoRotate && !isDraggingRef.current && !isPressSimulating) {
          targetRotationRef.current.y += 0.008;
        }

        // Smooth damping interpolation
        productGroupRef.current.rotation.y += (targetRotationRef.current.y - productGroupRef.current.rotation.y) * 0.08;
        productGroupRef.current.rotation.x += (targetRotationRef.current.x - productGroupRef.current.rotation.x) * 0.08;
      }

      // Hydraulic press simulation animation
      if (isPressSimulating && toolingGroupRef.current) {
        const time = clock.getElapsedTime() * 1.5;
        const cycle = (Math.sin(time) + 1) / 2; // 0 to 1
        setPressProgress(Math.round(cycle * 100));

        // Upper die movement: descends from y=4.5 to y=0.3
        toolingGroupRef.current.upperDie.position.y = 0.3 + (1 - cycle) * 4.2;

        // When compressed (cycle > 0.8), emit steam particles
        if (particlesRef.current) {
          if (cycle > 0.8) {
            (particlesRef.current.material as THREE.PointsMaterial).opacity = (cycle - 0.8) * 4.0;
            particlesRef.current.rotation.y += 0.02;
          } else {
            (particlesRef.current.material as THREE.PointsMaterial).opacity = 0;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [updateLighting, updateProductModel]);

  // Pointer and Drag Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    targetRotationRef.current.y += deltaX * 0.009;
    targetRotationRef.current.x = Math.max(
      -0.2,
      Math.min(1.2, targetRotationRef.current.x + deltaY * 0.009)
    );

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!cameraRef.current) return;
    const zoomDelta = e.deltaY * 0.006;
    const newZ = Math.max(6, Math.min(22, cameraRef.current.position.z + zoomDelta));
    cameraRef.current.position.z = newZ;
  };

  // Reset Camera View
  const handleResetView = () => {
    targetRotationRef.current = { x: 0.35, y: 0.4 };
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 8.5, 12.5);
      cameraRef.current.lookAt(0, 0.2, 0);
    }
  };

  // Switch Product
  const handleProductChange = (prod: Product3DModelType) => {
    setSelectedProduct(prod);
    updateProductModel(prod, materialPreset, isWireframe);
    handleResetView();
  };

  // Switch Material
  const handleMaterialChange = (preset: MaterialPreset) => {
    setMaterialPreset(preset);
    updateProductModel(selectedProduct, preset, isWireframe);
  };

  // Toggle Wireframe
  const handleWireframeToggle = () => {
    const next = !isWireframe;
    setIsWireframe(next);
    updateProductModel(selectedProduct, materialPreset, next);
  };

  // Toggle Hydraulic Press Simulation
  const handlePressSimulationToggle = () => {
    const next = !isPressSimulating;
    setIsPressSimulating(next);

    if (toolingGroupRef.current && productGroupRef.current) {
      toolingGroupRef.current.toolingGroup.visible = next;
      productGroupRef.current.visible = !next;
    }
    if (!next && particlesRef.current) {
      (particlesRef.current.material as THREE.PointsMaterial).opacity = 0;
    }
  };

  // Take Snapshot PNG
  const handleTakeSnapshot = () => {
    if (!rendererRef.current) return;
    const dataUrl = rendererRef.current.domElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Hanuma-Areca-3D-${selectedProduct}.png`;
    link.href = dataUrl;
    link.click();
    setSnapshotTaken(true);
    setTimeout(() => setSnapshotTaken(false), 2500);
  };

  // Handle Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const currentMeta = productMeta[selectedProduct];

  return (
    <div className={`relative flex flex-col lg:flex-row rounded-3xl bg-white border border-[#E8E0D2] shadow-xl overflow-hidden ${className}`}>
      
      {/* 3D Canvas Viewport */}
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        className={`relative flex-1 ${height} bg-gradient-to-b from-[#F5F2EC] via-[#FAF8F5] to-[#EDE7DC] cursor-grab active:cursor-grabbing select-none overflow-hidden touch-none`}
      >
        {/* Top Viewport Header Badges */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#153826] text-[#FAF8F5] text-xs font-bold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>Real-Time 3D WebGL Studio</span>
            </span>

            {isPressSimulating && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C85A17] text-white text-[11px] font-extrabold animate-pulse shadow">
                <Flame className="w-3 h-3" />
                <span>Hydraulic Press Active ({pressProgress}%)</span>
              </span>
            )}
          </div>

          {/* Quick HUD controls */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleTakeSnapshot}
              title="Download 3D Snapshot"
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-[#153826] shadow-md border border-[#E8E0D2] transition-colors cursor-pointer"
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetView}
              title="Reset Camera Angle"
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-[#153826] shadow-md border border-[#E8E0D2] transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-[#153826] shadow-md border border-[#E8E0D2] transition-colors cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Floating 3D Dimension Overlay Card */}
        {showDimensions && !isPressSimulating && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 z-20 pointer-events-auto max-w-xs bg-white/92 backdrop-blur-md p-4 rounded-2xl border border-[#E8E0D2] shadow-lg text-xs space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#153826] text-sm font-heading">{currentMeta.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#2D6A4F]/10 text-[#2D6A4F]">1.6mm Gauge</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#526356] pt-1">
              <div>
                <span className="block text-[#8C6D46] font-semibold text-[10px] uppercase">Diameter</span>
                <span className="font-bold text-[#153826]">{currentMeta.diameter}</span>
              </div>
              <div>
                <span className="block text-[#8C6D46] font-semibold text-[10px] uppercase">Depth</span>
                <span className="font-bold text-[#153826]">{currentMeta.depth}</span>
              </div>
              <div>
                <span className="block text-[#8C6D46] font-semibold text-[10px] uppercase">Average Weight</span>
                <span className="font-bold text-[#153826]">{currentMeta.weight}</span>
              </div>
              <div>
                <span className="block text-[#8C6D46] font-semibold text-[10px] uppercase">Thermal Grade</span>
                <span className="font-bold text-[#2D6A4F]">-20°C to +180°C</span>
              </div>
            </div>

            <div className="text-[10px] text-[#6B4F35] pt-1 border-t border-[#E8E0D2] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
              <span>Rotates 360° • Drag with mouse/touch to inspect</span>
            </div>
          </motion.div>
        )}

        {/* Snapshot Download Confirmation Toast */}
        <AnimatePresence>
          {snapshotTaken && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-[#153826] text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-[#2D6A4F]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#52B788]" />
              <span>High-Resolution 3D Snapshot Downloaded</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interaction Hint Pill */}
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#153826]/75 backdrop-blur-sm text-white text-[11px] font-medium shadow-md">
          <RotateCw className="w-3.5 h-3.5 animate-spin text-[#E0A96D]" style={{ animationDuration: '4s' }} />
          <span>Click & Drag to Rotate • Scroll to Zoom</span>
        </div>
      </div>

      {/* Side Customizer & Control Console */}
      {showControls && (
        <div className="w-full lg:w-96 p-6 bg-[#FAF8F5] border-t lg:border-t-0 lg:border-l border-[#E8E0D2] flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            
            {/* Model Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B4F35] block mb-2.5 flex items-center justify-between">
                <span>Select 3D Tableware Die</span>
                <span className="text-[10px] text-[#2D6A4F] font-semibold">4 Core Factory Dies</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'round-deep-12', label: '12" Round Deep (Buffet)' },
                  { id: 'square-shallow-10', label: '10" Shallow Square (Biryani)' },
                  { id: 'round-deep-10', label: '10" Round Deep (Tiffin)' },
                  { id: 'deep-bowl-5', label: '5" Deep Bowl (2.2" Depth)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleProductChange(item.id as Product3DModelType)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left truncate cursor-pointer ${
                      selectedProduct === item.id
                        ? 'bg-[#153826] text-white shadow-md'
                        : 'bg-white text-[#3E4E42] border border-[#E8E0D2] hover:bg-[#EBE5D8]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Natural Palm Sheath Material Finishes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B4F35] block mb-2.5 flex items-center justify-between">
                <span>Botanical Sheath Finish</span>
                <span className="text-[10px] text-[#526356]">Chemical-Free Texture</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'natural', name: 'Natural Tan', color: '#D4BE9B' },
                  { id: 'toasted', name: 'Artisan Toasted', color: '#B08852' },
                  { id: 'bleached', name: 'Light Sand', color: '#EFE4D2' }
                ].map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => handleMaterialChange(mat.id as MaterialPreset)}
                    className={`p-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      materialPreset === mat.id
                        ? 'bg-white border-2 border-[#2D6A4F] shadow-sm text-[#153826]'
                        : 'bg-white/60 border border-[#E8E0D2] text-[#526356] hover:bg-white'
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full border border-black/15 shadow-inner" 
                      style={{ backgroundColor: mat.color }} 
                    />
                    <span className="text-[11px] truncate w-full text-center">{mat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Modes / Visualizers */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B4F35] block">
                3D Inspection Tools
              </label>

              <div className="grid grid-cols-2 gap-2">
                {/* Auto Rotate */}
                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isAutoRotate 
                      ? 'bg-[#EBE5D8] border-[#2D6A4F] text-[#153826]' 
                      : 'bg-white border-[#E8E0D2] text-[#526356]'
                  }`}
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isAutoRotate ? 'text-[#2D6A4F] animate-spin' : ''}`} />
                  <span>{isAutoRotate ? 'Auto-Spin On' : 'Auto-Spin Off'}</span>
                </button>

                {/* Wireframe Toggle */}
                <button
                  onClick={handleWireframeToggle}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isWireframe 
                      ? 'bg-[#153826] border-[#153826] text-white' 
                      : 'bg-white border-[#E8E0D2] text-[#526356]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isWireframe ? 'Solid View' : 'Wireframe Mesh'}</span>
                </button>

                {/* Hydraulic Press Die Simulation */}
                <button
                  onClick={handlePressSimulationToggle}
                  className={`col-span-2 flex items-center justify-between p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isPressSimulating 
                      ? 'bg-gradient-to-r from-[#B8860B] to-[#C85A17] text-white border-transparent shadow-md' 
                      : 'bg-white border-[#E8E0D2] text-[#153826] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Flame className={`w-4 h-4 ${isPressSimulating ? 'text-yellow-300' : 'text-[#C85A17]'}`} />
                    <span>{isPressSimulating ? 'Stop Die Press Simulation' : 'Simulate 150°C Die Press'}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/15 font-mono">
                    {isPressSimulating ? 'Running' : 'Interactive'}
                  </span>
                </button>
              </div>
            </div>

            {/* Lighting Studio Environments */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B4F35] block mb-2 flex items-center justify-between">
                <span>Lighting Rig</span>
                <Sun className="w-3.5 h-3.5 text-[#E0A96D]" />
              </label>
              <div className="grid grid-cols-3 gap-1.5 bg-white p-1 rounded-xl border border-[#E8E0D2]">
                {[
                  { id: 'studio', label: 'Studio Soft' },
                  { id: 'sunlight', label: 'Palm Canopy' },
                  { id: 'inspection', label: 'Factory QC' }
                ].map(lt => (
                  <button
                    key={lt.id}
                    onClick={() => {
                      setLightingMode(lt.id as any);
                      updateLighting(lt.id as any);
                    }}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      lightingMode === lt.id
                        ? 'bg-[#153826] text-white'
                        : 'text-[#526356] hover:text-[#153826]'
                    }`}
                  >
                    {lt.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Action Section */}
          <div className="pt-4 border-t border-[#E8E0D2] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B4F35] font-medium">Export Container Loading:</span>
              <span className="font-bold text-[#153826]">20ft / 40ft HC Ready</span>
            </div>

            <button
              onClick={() => openBulkEnquiry(`Wholesale inquiry for 3D Configured ${currentMeta.name}`)}
              className="shimmer-btn-effect w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#153826] hover:bg-[#2D6A4F] text-[#FAF8F5] font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Get Wholesale Quote for this Model</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
