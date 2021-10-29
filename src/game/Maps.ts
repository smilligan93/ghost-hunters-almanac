import {GameMap} from "../types/Map";

export const difficulties = [
    'Amateur',
    'Intermediate',
    'Professional',
    'Nightmare'
]

export const BleasdaleFarmhouse: GameMap = {
    type: "Bleasdale_Farmhouse",
    name: "Bleasdale Farmhouse",
    size: "small",
    floors: 3,
    keys: ['Main Door Key', 'Car Key'],
    images: ['BleasdaleFarmHouseMap.jpg']
}

export const EdgefieldStreetHouse: GameMap = {
    type: "Edgefield_Street_House",
    name: "Edgefield Street House",
    size: "small",
    floors: 3,
    keys: ['Main Door Key', 'Car Key'],
    images: ['Edgefield_Street_House_Map.jpg']
}

export const GraftonFarmhouse: GameMap = {
    type: "Grafton_Farmhouse",
    name: "Grafton Farmhouse",
    size: "small",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['GraftonFarmhouse_Map.jpg']
}

export const RidgeviewRoadHouse: GameMap = {
    type: "Ridgeview_Road_House",
    name: "Ridgeview Road House",
    size: "small",
    floors: 3,
    keys: ['Main Door Key'],
    images: ['RidgeviewRoadHouse_Map.jpg']
}

export const TanglewoodStreetHouse: GameMap = {
    type: "Tanglewood_Street_House",
    name: "Tanglewood Street House",
    size: "small",
    floors: 2,
    keys: ['Main Door Key', 'Car Key'],
    images: ['Tangle_Wood_Street_House_Map_1.1.png']
}

export const WillowStreetHouse: GameMap = {
    type: "Willow_Street_House",
    name: "Willow Street House",
    size: "small",
    floors: 2,
    keys: ['Main Door Key', 'Car Key'],
    images: ['Willow_Street_House_Map.jpg']
}

export const BrownstoneHighSchool: GameMap = {
    type: "Brownstone_High_School",
    name: "Brownstone High School",
    size: "medium",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['BrownstoneHighSchool_Map.jpg']
}

export const MapleLodgeCampsite: GameMap = {
    type: "Maple_Lodge_Campsite",
    name: "Maple Lodge Campsite",
    size: "medium",
    floors: 3,
    keys: ['Main Door Key', 'Cabin Key'],
    images: ['Maple_Lodge_Campsite_Map.png', 'Maple_Lodge_Cabin_First_Floor.png', 'Maple_Lodge_Cabin_Second_Floor.png'],
}

export const Prison: GameMap = {
    type: "Prison",
    name: "Prison",
    size: "medium",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['Prison_Map.png']
}

export const Asylum: GameMap = {
    type: "Asylum",
    name: "Asylum",
    size: "large",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['AsylumMap.jpg']
}


export const Maps = [
    BleasdaleFarmhouse,
    EdgefieldStreetHouse,
    GraftonFarmhouse,
    RidgeviewRoadHouse,
    TanglewoodStreetHouse,
    WillowStreetHouse,
    BrownstoneHighSchool,
    MapleLodgeCampsite,
    Prison,
    Asylum
]