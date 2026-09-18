import * as THREE from 'three';

export type Product3DModelType = 'round-plate' | 'square-plate' | 'deep-bowl' | 'compartment-plate' | 'oval-platter';

/**
 * Builds 3D mesh representations of Areca Palm tableware
 */

// 1. 10" Round Dinner Plate
export function createRoundPlateGeometry(): THREE.BufferGeometry {
  const points: THREE.Vector2[] = [];
  
  // Cross-section profile for LatheGeometry
  // (x = radius from center, y = height)
  // Base center
  points.push(new THREE.Vector2(0, 0));
  // Flat base bottom
  points.push(new THREE.Vector2(2.5, 0));
  // Beveled transition to wall
  points.push(new THREE.Vector2(2.8, 0.08));
  // Slanted wall rising up
  points.push(new THREE.Vector2(3.6, 0.45));
  // Rim fillet
  points.push(new THREE.Vector2(4.1, 0.65));
  // Horizontal rim flange
  points.push(new THREE.Vector2(4.7, 0.68));
  // Outer downward lip
  points.push(new THREE.Vector2(4.85, 0.58));
  points.push(new THREE.Vector2(4.9, 0.48));
  // Bottom thickness layer (1.6mm authentic gauge)
  points.push(new THREE.Vector2(4.78, 0.45));
  points.push(new THREE.Vector2(4.65, 0.56));
  points.push(new THREE.Vector2(4.0, 0.54));
  points.push(new THREE.Vector2(3.5, 0.35));
  points.push(new THREE.Vector2(2.7, -0.04));
  points.push(new THREE.Vector2(2.3, -0.08));
  points.push(new THREE.Vector2(0, -0.08));

  const geometry = new THREE.LatheGeometry(points, 64);
  geometry.computeVertexNormals();
  return geometry;
}

// 2. 6" Deep Soup & Curry Bowl
export function createDeepBowlGeometry(): THREE.BufferGeometry {
  const points: THREE.Vector2[] = [];

  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(1.2, 0.02));
  points.push(new THREE.Vector2(1.8, 0.25));
  points.push(new THREE.Vector2(2.5, 0.8));
  points.push(new THREE.Vector2(2.9, 1.45));
  // Flanged lip
  points.push(new THREE.Vector2(3.2, 1.7));
  points.push(new THREE.Vector2(3.35, 1.62));
  // Outer underside profile
  points.push(new THREE.Vector2(3.1, 1.52));
  points.push(new THREE.Vector2(2.75, 0.9));
  points.push(new THREE.Vector2(2.0, 0.35));
  points.push(new THREE.Vector2(1.3, 0.08));
  points.push(new THREE.Vector2(1.1, -0.1));
  points.push(new THREE.Vector2(0, -0.1));

  const geometry = new THREE.LatheGeometry(points, 64);
  geometry.computeVertexNormals();
  return geometry;
}

// 3. 8" Square Party Plate
export function createSquarePlateGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const r = 0.6; // corner radius
  const s = 4.0; // half size

  // Rounded rectangle
  shape.moveTo(-s + r, -s);
  shape.lineTo(s - r, -s);
  shape.quadraticCurveTo(s, -s, s, -s + r);
  shape.lineTo(s, s - r);
  shape.quadraticCurveTo(s, s, s - r, s);
  shape.lineTo(-s + r, s);
  shape.quadraticCurveTo(-s, s, -s, s - r);
  shape.lineTo(-s, -s + r);
  shape.quadraticCurveTo(-s, -s, -s + r, -s);

  // Extrude with bevel for raised organic sidewall rim
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    steps: 2,
    depth: 0.12,
    bevelEnabled: true,
    bevelThickness: 0.55,
    bevelSize: 0.65,
    bevelOffset: 0,
    bevelSegments: 8
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();
  geometry.rotateX(Math.PI / 2);
  geometry.computeVertexNormals();
  return geometry;
}

// 4. 10" x 7" Oval Serving Platter
export function createOvalPlatterGeometry(): THREE.BufferGeometry {
  const geom = createRoundPlateGeometry();
  // Scale along one horizontal axis to create authentic natural oval contour
  geom.scale(1.35, 1, 0.85);
  geom.computeVertexNormals();
  return geom;
}

// 5. 3-Compartment Meal Tray
export function createCompartmentPlateGroup(material: THREE.Material): THREE.Group {
  const group = new THREE.Group();

  // Base dish
  const plateGeom = createRoundPlateGeometry();
  const plateMesh = new THREE.Mesh(plateGeom, material);
  group.add(plateMesh);

  // Divider ribs
  // Main horizontal divider (separates bottom large half from top quadrants)
  const divGeom1 = new THREE.BoxGeometry(5.2, 0.45, 0.18);
  const div1 = new THREE.Mesh(divGeom1, material);
  div1.position.set(0, 0.22, 0.2);
  group.add(div1);

  // Vertical divider (splits the top section into two 4-oz compartments)
  const divGeom2 = new THREE.BoxGeometry(0.18, 0.45, 2.3);
  const div2 = new THREE.Mesh(divGeom2, material);
  div2.position.set(0, 0.22, -1.2);
  group.add(div2);

  return group;
}

/**
 * Creates 3D Hydraulic Press Tooling dies for the manufacturing simulation
 */
export function createPressToolingGroup(): {
  toolingGroup: THREE.Group;
  upperDie: THREE.Group;
  lowerDie: THREE.Group;
  rawLeaf: THREE.Mesh;
} {
  const toolingGroup = new THREE.Group();

  const dieMaterial = new THREE.MeshStandardMaterial({
    color: 0xB8860B, // Polished industrial bronze
    metalness: 0.88,
    roughness: 0.28
  });

  const steelPlatenMat = new THREE.MeshStandardMaterial({
    color: 0x2A323D,
    metalness: 0.92,
    roughness: 0.35
  });

  // Lower die base
  const lowerDie = new THREE.Group();
  const lowerBaseGeom = new THREE.CylinderGeometry(5.5, 5.8, 1.2, 32);
  const lowerBase = new THREE.Mesh(lowerBaseGeom, dieMaterial);
  lowerBase.position.y = -0.65;
  lowerDie.add(lowerBase);

  const lowerPlatenGeom = new THREE.BoxGeometry(13, 0.8, 13);
  const lowerPlaten = new THREE.Mesh(lowerPlatenGeom, steelPlatenMat);
  lowerPlaten.position.y = -1.65;
  lowerDie.add(lowerPlaten);

  toolingGroup.add(lowerDie);

  // Upper heated die (moves up and down)
  const upperDie = new THREE.Group();
  const upperBaseGeom = new THREE.CylinderGeometry(5.2, 5.0, 1.0, 32);
  const upperBase = new THREE.Mesh(upperBaseGeom, dieMaterial);
  upperBase.position.y = 0.5;
  upperDie.add(upperBase);

  // Hydraulic piston column
  const pistonGeom = new THREE.CylinderGeometry(1.2, 1.2, 5.0, 32);
  const piston = new THREE.Mesh(pistonGeom, steelPlatenMat);
  piston.position.y = 3.5;
  upperDie.add(piston);

  upperDie.position.y = 4.5; // Rest position when open
  toolingGroup.add(upperDie);

  // Raw unpressed flat leaf sheath
  const leafGeom = new THREE.CylinderGeometry(4.8, 4.8, 0.04, 32);
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0xC8AF87,
    roughness: 0.85,
    metalness: 0.05
  });
  const rawLeaf = new THREE.Mesh(leafGeom, leafMat);
  rawLeaf.position.y = 0.05;
  toolingGroup.add(rawLeaf);

  return { toolingGroup, upperDie, lowerDie, rawLeaf };
}
