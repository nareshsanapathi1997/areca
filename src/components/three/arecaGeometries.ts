import * as THREE from 'three';

export type Product3DModelType = 
  | 'round-deep-12' 
  | 'square-shallow-10' 
  | 'round-deep-10' 
  | 'deep-bowl-5'
  | 'round-plate' 
  | 'square-plate' 
  | 'deep-bowl'
  | 'compartment-plate'
  | 'oval-platter';

/**
 * Builds 3D mesh representations of HANUMA ENTERPRISES Areca Palm tableware
 * 1. 12" Round Deep - Buffet Plate
 * 2. 10" Shallow Square - Starters & Biryani Style
 * 3. 10" Round Deep - Tiffin & Hot Foods
 * 4. 5" Round Deep Bowl (2.2" Depth) - Multipurpose
 */

// 1. 12" Round Deep - Buffet Plate (Extra wide diameter, deep contour rim)
export function create12InchRoundDeepGeometry(): THREE.BufferGeometry {
  const points: THREE.Vector2[] = [];
  // (x = radius in units, y = height)
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(3.6, 0));
  points.push(new THREE.Vector2(4.1, 0.12));
  points.push(new THREE.Vector2(5.0, 0.65));
  points.push(new THREE.Vector2(5.5, 0.95)); // deep 28mm rim
  points.push(new THREE.Vector2(6.0, 1.0));  // 12-inch wide outer lip
  points.push(new THREE.Vector2(6.15, 0.88));
  points.push(new THREE.Vector2(6.2, 0.76));
  // underside thickness
  points.push(new THREE.Vector2(6.05, 0.72));
  points.push(new THREE.Vector2(5.9, 0.85));
  points.push(new THREE.Vector2(5.35, 0.78));
  points.push(new THREE.Vector2(4.8, 0.5));
  points.push(new THREE.Vector2(3.9, 0.05));
  points.push(new THREE.Vector2(3.4, -0.06));
  points.push(new THREE.Vector2(0, -0.06));

  const geometry = new THREE.LatheGeometry(points, 64);
  geometry.computeVertexNormals();
  return geometry;
}

// 2. 10" Shallow Square - Starters & Biryani Style (Contemporary shallow lip)
export function create10InchShallowSquareGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const r = 0.5; // slight rounded corner
  const s = 4.8; // 10 inch square half-size

  shape.moveTo(-s + r, -s);
  shape.lineTo(s - r, -s);
  shape.quadraticCurveTo(s, -s, s, -s + r);
  shape.lineTo(s, s - r);
  shape.quadraticCurveTo(s, s, s - r, s);
  shape.lineTo(-s + r, s);
  shape.quadraticCurveTo(-s, s, -s, s - r);
  shape.lineTo(-s, -s + r);
  shape.quadraticCurveTo(-s, -s, -s + r, -s);

  // Shallow bevel for starters & biryani presentation
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    steps: 2,
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.38, // shallow rim (16-19mm)
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 6
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();
  geometry.rotateX(Math.PI / 2);
  geometry.computeVertexNormals();
  return geometry;
}

// 3. 10" Round Deep - Tiffin & Hot Foods (Deep rim for curries, dal, sambar)
export function create10InchRoundDeepGeometry(): THREE.BufferGeometry {
  const points: THREE.Vector2[] = [];
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(2.6, 0));
  points.push(new THREE.Vector2(3.0, 0.1));
  points.push(new THREE.Vector2(3.9, 0.55));
  points.push(new THREE.Vector2(4.4, 0.82)); // deep tiffin spill-proof rim
  points.push(new THREE.Vector2(4.9, 0.86));
  points.push(new THREE.Vector2(5.05, 0.74));
  points.push(new THREE.Vector2(5.1, 0.62));
  // thickness
  points.push(new THREE.Vector2(4.98, 0.58));
  points.push(new THREE.Vector2(4.85, 0.72));
  points.push(new THREE.Vector2(4.25, 0.68));
  points.push(new THREE.Vector2(3.75, 0.42));
  points.push(new THREE.Vector2(2.9, 0.02));
  points.push(new THREE.Vector2(2.4, -0.07));
  points.push(new THREE.Vector2(0, -0.07));

  const geometry = new THREE.LatheGeometry(points, 64);
  geometry.computeVertexNormals();
  return geometry;
}

// 4. 5" Round (2.2" Depth) Deep Bowl - Multipurpose
export function create5InchRoundDeepBowlGeometry(): THREE.BufferGeometry {
  const points: THREE.Vector2[] = [];
  // 5-inch diameter with 2.2-inch extra depth (aspect ratio is quite deep)
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(1.1, 0.04));
  points.push(new THREE.Vector2(1.6, 0.4));
  points.push(new THREE.Vector2(2.2, 1.2));
  points.push(new THREE.Vector2(2.5, 2.1)); // 2.2" depth scale
  // Rounded lip
  points.push(new THREE.Vector2(2.7, 2.3));
  points.push(new THREE.Vector2(2.82, 2.2));
  // Underside wall
  points.push(new THREE.Vector2(2.62, 2.05));
  points.push(new THREE.Vector2(2.32, 1.15));
  points.push(new THREE.Vector2(1.75, 0.42));
  points.push(new THREE.Vector2(1.2, 0.1));
  points.push(new THREE.Vector2(0.95, -0.1));
  points.push(new THREE.Vector2(0, -0.1));

  const geometry = new THREE.LatheGeometry(points, 64);
  geometry.computeVertexNormals();
  return geometry;
}

// Aliases for compatibility
export function createRoundPlateGeometry(): THREE.BufferGeometry {
  return create10InchRoundDeepGeometry();
}

export function createDeepBowlGeometry(): THREE.BufferGeometry {
  return create5InchRoundDeepBowlGeometry();
}

export function createSquarePlateGeometry(): THREE.BufferGeometry {
  return create10InchShallowSquareGeometry();
}

export function createOvalPlatterGeometry(): THREE.BufferGeometry {
  const geom = create10InchRoundDeepGeometry();
  geom.scale(1.3, 1, 0.85);
  geom.computeVertexNormals();
  return geom;
}

export function createCompartmentPlateGroup(material: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const plateGeom = create12InchRoundDeepGeometry();
  const plateMesh = new THREE.Mesh(plateGeom, material);
  group.add(plateMesh);

  const divGeom1 = new THREE.BoxGeometry(6.5, 0.5, 0.2);
  const div1 = new THREE.Mesh(divGeom1, material);
  div1.position.set(0, 0.25, 0.25);
  group.add(div1);

  const divGeom2 = new THREE.BoxGeometry(0.2, 0.5, 2.8);
  const div2 = new THREE.Mesh(divGeom2, material);
  div2.position.set(0, 0.25, -1.5);
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
  const lowerBaseGeom = new THREE.CylinderGeometry(5.8, 6.2, 1.2, 32);
  const lowerBase = new THREE.Mesh(lowerBaseGeom, dieMaterial);
  lowerBase.position.y = -0.65;
  lowerDie.add(lowerBase);

  const lowerPlatenGeom = new THREE.BoxGeometry(14, 0.8, 14);
  const lowerPlaten = new THREE.Mesh(lowerPlatenGeom, steelPlatenMat);
  lowerPlaten.position.y = -1.65;
  lowerDie.add(lowerPlaten);

  toolingGroup.add(lowerDie);

  // Upper heated die (moves up and down)
  const upperDie = new THREE.Group();
  const upperBaseGeom = new THREE.CylinderGeometry(5.6, 5.3, 1.0, 32);
  const upperBase = new THREE.Mesh(upperBaseGeom, dieMaterial);
  upperBase.position.y = 0.5;
  upperDie.add(upperBase);

  // Hydraulic piston column
  const pistonGeom = new THREE.CylinderGeometry(1.3, 1.3, 5.0, 32);
  const piston = new THREE.Mesh(pistonGeom, steelPlatenMat);
  piston.position.y = 3.5;
  upperDie.add(piston);

  upperDie.position.y = 4.5; // Rest position when open
  toolingGroup.add(upperDie);

  // Raw unpressed flat leaf sheath
  const leafGeom = new THREE.CylinderGeometry(5.2, 5.2, 0.04, 32);
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
