import { ProcessStep } from '../types';

export const manufacturingSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Raw Leaf Collection",
    shortDescription: "Sourcing naturally shed areca palm sheaths from local sustainable agro plantations.",
    detailedProcess: "Areca palm trees naturally shed their outer leaf bases (sheaths) several times a year. Our field network works directly with certified farmers across the Malnad palm belt to collect these fallen sheaths immediately to prevent weathering and soil decay. Zero trees are ever harvested or damaged.",
    hygieneProtocol: "Dry collection protocol, inspected at collection depots before transport.",
    iconName: "Trees",
    image: '/images/areca-original/areca_palm_sheath_natural.jpg'
  },
  {
    step: 2,
    title: "Freshwater Cleaning & Scrubbing",
    shortDescription: "Triple-stage wash in high-pressure clean freshwater to remove sand, dust, and organic debris.",
    detailedProcess: "Leaves undergo an initial soak in potable spring water, followed by multi-nozzle high pressure spray washing and gentle food-grade brush scrubbing on both sides. We never use chemical detergents, bleach, chlorine, or synthetic surfactants.",
    hygieneProtocol: "Potable, tested borewell spring water with zero chemical additives.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 3,
    title: "Controlled Sun & Solar Drying",
    shortDescription: "Drying under natural sunlight and humidity-controlled solar tunnels to optimal moisture levels.",
    detailedProcess: "Cleaned leaves are carefully laid on raised stainless-steel mesh racks inside dust-free, solar-heated drying tunnels. This ensures uniform moisture extraction down to the critical 8–10% moisture content target without fiber brittleness.",
    hygieneProtocol: "Elevated off-ground racks in closed mesh structures preventing insect contamination.",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 4,
    title: "Thickness & Grain Sorting",
    shortDescription: "Manual tactile inspection and grading by leaf thickness, natural grain texture, and fiber density.",
    detailedProcess: "Experienced quality sorters grade each dried sheath. Thicker sheaths with dense longitudinal fibers are separated for large dinner plates and compartment trays, while lighter, smoother sheaths are allocated to delicate bowls and dessert dishes.",
    hygieneProtocol: "Gloved and hair-netted inspection staff, rejects repurposed into organic farm mulch.",
    iconName: "CheckCheck",
    image: '/images/areca-original/areca_plate_original_2.jpg'
  },
  {
    step: 5,
    title: "Hydraulic Heat Pressing & Sterilization",
    shortDescription: "Forming under 180°C - 200°C precision hydraulic heated dies that sterilize and mold simultaneously.",
    detailedProcess: "Sorted leaves are lightly conditioned with clean water mist to relax fibers, then placed into heavy-duty hydraulic press dies heated between 180°C and 200°C for 25 to 45 seconds under controlled tonnage. The extreme thermal energy permanently molds the leaf into the plate shape while eliminating all micro-organisms.",
    hygieneProtocol: "Thermal self-sanitization eliminates mold spores, bacteria, and moisture pockets without chemical additives.",
    iconName: "Flame",
    image: '/images/areca-original/areca_leaf_machine_press.jpg'
  },
  {
    step: 6,
    title: "Precision Trimming & Edge Polishing",
    shortDescription: "Laser/mechanical die trimming to create smooth, burr-free borders safe for handling.",
    detailedProcess: "Immediately following heat pressing, excess perimeter leaf margins are cleanly sheared off using calibrated contour die cutters. The perimeter is then inspected for smooth, snag-free rim edges that offer comfortable grip during dining.",
    hygieneProtocol: "Automated perimeter cutting with scrap collection ducts feeding biomass boilers.",
    iconName: "Scissors",
    image: '/images/areca-original/areca_plate_making_factory.jpg'
  },
  {
    step: 7,
    title: "Multi-Point Quality Inspection",
    shortDescription: "Individual testing for thickness uniformity, zero warping, rim integrity, and clean surface.",
    detailedProcess: "Each plate is placed under high-lumen inspection lamps. Operators verify absence of pinholes, cracks, burns, or dark fungus spots. Random lot samples are tested for load-bearing capacity and hot water holding times.",
    hygieneProtocol: "100% visual inspection before any unit enters the packaging station.",
    iconName: "SearchCheck",
    image: '/images/areca-original/areca_plate_original_1.jpg'
  },
  {
    step: 8,
    title: "Moisture-Barrier Export Packaging",
    shortDescription: "Shrink-wrapping with food-grade film, food-safe silica desiccant pouches, and master carton sealing.",
    detailedProcess: "Finished plates are stacked in counts of 20 or 25 pieces, inserted with food-grade silica gel desiccant sachets, and vacuum shrink-wrapped in protective film. Stacks are then packed into heavy-duty 5-ply export corrugated cartons designed for overseas container humidity.",
    hygieneProtocol: "Cleanroom packaging environment; tamper-evident and hermetically sealed packs.",
    iconName: "Package",
    image: '/images/areca-original/areca_plates_stack_1.jpg'
  },
  {
    step: 9,
    title: "Container Loading & Dispatch",
    shortDescription: "Palletization, container stuffing, and dispatch for domestic wholesale transport and ocean export.",
    detailedProcess: "Master cartons are palletized with corner edge protectors and stretch-wrapped on ISPM-15 heat-treated wooden or heavy plastic pallets. Inspected and loaded directly into clean shipping containers or dry freight carriers with full batch tracking documentation.",
    hygieneProtocol: "Container fumigation compliance and weather-sealed dock loading.",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
  }
];
