import {Ghost} from "../types/Ghost";

export const Banshee: Ghost = {
    type: 'Banshee',
    evidence: ['Fingerprints', 'DOTS_Projector', 'Ghost_Orb'],
    description: "A Banshee is a natural hunter and will attack anything. It has been known to stalk its prey one at a time until making its kill.",
    strength: "A Banshee will only target one person at a time.",
    weakness: "Banshees fear the Crucifix and will be less aggressive when near one.",
    tips: [
        "Will only target one player at a time",
        "Initiates hunts at <50% sanity if the target is outside",
        "Initiates hunts as early as 80% sanity if the target is inside",
        "Can navigate to a location near its target and start a hunt when the target has been visible for 20 seconds"
    ],
}

export const Demon: Ghost = {
    type: 'Demon',
    evidence: ['Fingerprints', 'Ghost_Writing', 'Freezing_Temperature'],
    description: "A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.",
    strength: "Demons are the most aggressive ghosts and will begin Hunts more often.",
    weakness: "Asking a Demon successful questions on the Ouija Board will drain less sanity.",
    tips: [
        "Initiates hunts at <70% sanity",
        "Successful Ouija Board questions will not lower your sanity as much as other ghosts",
        "Failed Ouija Board questions will lower sanity as much as other ghosts"
    ]
}

export const Goryo: Ghost = {
    type: 'Goryo',
    evidence: ['EMF_Level_5', 'Fingerprints', 'DOTS_Projector'],
    description: "When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.",
    strength: "Goryo will usually only show itself on camera when there are no people nearby.",
    weakness: "Goryo are rarely seen far from their place of death.",
    tips: [
        "Unlikely to roam when they are not hunting",
        "DOTS can only be seen through a video camera",
        "Can be seen manifesting normally during ghost events and hunts"
    ],
}

export const Hantu: Ghost = {
    type: 'Hantu',
    evidence: ['Fingerprints', 'Ghost_Orb', 'Freezing_Temperature'],
    description: "A rare ghost that can be found in hot climates. They are known to attack more often in cold weather",
    strength: "Lower temperatures allow the Hantu to move at faster speeds.",
    weakness: "Hantus move slower in warmer areas",
    tips: [
        "Runs much faster through cold rooms (1.8 m/s) than through warm rooms (1.0 m/s)",
        "Keeping the breaker on will keep temperatures up, slowing the Hantu down"
    ],
}

export const Jinn: Ghost = {
    type: 'Jinn',
    evidence: ['EMF_Level_5', 'Fingerprints', 'Freezing_Temperature'],
    description: "A Jinn is a territorial Ghost that will attack when threatened. It also has been known to travel at significant speed.",
    strength: "A Jinn will travel at a faster speed if its victim is far away.",
    weakness: "Turning off the location's power source will prevent the Jinn from using its ability.",
    tips: [
        "Runs much faster (2.0 m/s) when chasing a player that is far away",
        "Can lower sanity of all players within range by 25%",
        "Cannot use abilities if the fuse box is turned off"
    ],
}

export const Mare: Ghost = {
    type: 'Mare',
    evidence: ['Spirit_Box', 'Ghost_Orb', 'Ghost_Writing'],
    description: "A Mare is the source of all nightmares, making it most powerful in the dark.",
    strength: "A Mare will have an increased chance to attack in the dark.",
    weakness: "Turning the lights on around the Mare will lower its chance to attack.",
    tips: [
        "Initiates hunts as early as 60% sanity if lights are off",
        "Will not hunt until 40% sanity if lights are on",
        "Cannot turn lights on"
    ]
}

export const Myling: Ghost = {
    type: 'Myling',
    evidence: ['EMF_Level_5', 'Fingerprints', 'Ghost_Writing'],
    description: "A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.",
    strength: "A Myling is known to be quieter when hunting.",
    weakness: "Mylings more frequently make paranormal sounds.",
    tips: [
        "Can be heard frequently on the parabolic microphone",
        "During a hunt, a Myling's footsteps will only be heard when the ghost is close enough to glitch electronics"
    ]
}

export const Obake: Ghost = {
    type: 'Obake',
    evidence: ['EMF_Level_5', 'Fingerprints', 'Ghost_Orb'],
    description: "Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.",
    strength: "When interacting with the environment, an Obake will rarely leave a trace.",
    weakness: "Sometimes this ghost will shapeshift, leaving behind unique evidence.",
    tips: [
        "Fingerprints may appear with 6 fingers instead of 5",
        "Number of fingers can change between fingerprints",
        "When interacting with an object, an Obake will sometimes place it back to its original position"
    ]
}

export const Oni: Ghost = {
    type: 'Oni',
    evidence: ['EMF_Level_5', 'Freezing_Temperature', 'DOTS_Projector'],
    description: "Onis are a cousin to the Demon and possess extreme strength. There have been rumors that they become more active around their prey.",
    strength: "Oni are more active when people are nearby and have been seen moving objects at great speed.",
    weakness: "Being more active will make the Oni easier to find and identify.",
    tips: ["Much more active when people are nearby", "Will often throw objects across the room"]
}

export const Onryo: Ghost = {
    type: 'Onryo',
    evidence: ['Spirit_Box', 'Ghost_Orb', 'Freezing_Temperature'],
    description: "The Onryo is often referred to as \"The Wrathful Spirit.\" It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.",
    strength: "Extinguishing a flame can cause an Onryo to attack.",
    weakness: "When threatened, this ghost will be less likely to attack.",
    tips: [
        "Can hunt at any sanity if a flame is extinguished nearby",
        "Will not leave the room if there is an open flame",
        "Everything changed when the fire nation attacked"
    ]
}

export const Phantom: Ghost = {
    type: 'Phantom',
    evidence: ['Spirit_Box', 'Fingerprints', 'DOTS_Projector'],
    description: "A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.",
    strength: "Looking at a Phantom will considerably drop your sanity.",
    weakness: "Taking a photo of the Phantom will make it temporarily disappear.",
    tips: [
        "When a photo is taken of the phantom, it will disappear",
        "During a hunt, phantoms will flash every 1-2 seconds as opposed to every 0.3-1 seconds",
        "Looking at a phantom will reduce sanity by 0.4% per second, as opposed to 0.2% per second"
    ]
}

export const Poltergeist: Ghost = {
    type: 'Poltergeist',
    evidence: ['Spirit_Box', 'Ghost_Writing', 'Fingerprints'],
    description: "One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into it's victims.",
    strength: "Poltergeists can throw multiple objects at once.",
    weakness: "With nothing to throw, Poltergeists become powerless.",
    tips: [
        "If a player is nearby when an item is thrown, sanity will decrease",
        "Multiple items can be thrown at the same time"
    ]
}

export const Raiju: Ghost = {
    type: 'Raiju',
    evidence: ['EMF_Level_5', 'Ghost_Orb', 'DOTS_Projector'],
    description: "A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.",
    strength: "A Raiju can siphon power from nearby electrical devices, making it move faster.",
    weakness: "Raiju are constantly disrupting electronic equipment, making it easier to track when attacking.",
    tips: [
        "While hunting, electronic devices (that are turned on) will increase the Raiju's movement speed (applies to items in the players hand or on the floor)",
        "When near activated electronic equipment, the Raiju can hunt at <70% sanity"
    ]
}

export const Revenant: Ghost = {
    type: 'Revenant',
    evidence: ['Ghost_Orb', 'Ghost_Writing', 'Freezing_Temperature'],
    description: "A Revenant is a slow but violent Ghost that will attack indiscriminately. It has been rumored to travel at a significantly high speed when hunting.",
    strength: "A Revenant will travel at a significantly faster speed when hunting their prey.",
    weakness: "Hiding from the Revenant will cause it to move very slowly.",
    tips: [
        "Roams at 0.5x speed when hunting, runs at 2x speed when chasing a player"
    ]
}

export const Shade: Ghost = {
    type: 'Shade',
    evidence: ['EMF_Level_5', 'Ghost_Writing', 'Freezing_Temperature'],
    description: "A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.",
    strength: "Shades are much harder to find.",
    weakness: "The ghost will not enter a hunt if there are multiple people nearby.",
    tips: [
        "Ghost Activity and Events occur less when multiple players are in the room with it",
        "Chance of hunting reduces when multiple players are in the room with it",
    ]
}

export const Spirit: Ghost = {
    type: 'Spirit',
    evidence: ['EMF_Level_5', 'Spirit_Box', 'Ghost_Writing'],
    description: "Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.",
    strength: "N/a",
    weakness: "A Spirit can be temporarily stopped by burning Smudge Sticks near them.",
    tips: [
        "Cannot initiate a hunt within 180 seconds of using Smudge Sticks (compared to 90 seconds with most other ghosts)"
    ]
}

export const The_Mimic: Ghost = {
    type: 'The_Mimic',
    evidence: ['Spirit_Box', 'Freezing_Temperature', 'Fingerprints'],
    description: 'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
    strength: "We're unsure what this ghost is capable of. Be careful.",
    weakness: "Several reports have noted ghost orb sightings near mimics.",
    tips: [

    ]
}

export const The_Twins: Ghost = {
    type: 'The_Twins',
    evidence: ['EMF_Level_5', 'Spirit_Box', 'Freezing_Temperature'],
    description: "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
    strength: "Either Twin can be angered and initiate an attack on their prey.",
    weakness: "The Twins will often interact with the environment at the same time.",
    tips: [
        "When not hunting, they can move separately and interact with the environment on their own or at the same time",
        "There is a \"Main\" Twin, which primarily remains in the Ghost Room (creates Freezing Temperatures and responds to Spirit Box)",
        "The Other Twin cannot set off motion sensors, cannot respond to Spirit Box, nor spread Freezing Temperatures",
        "The Other Twin can create EMF Level 5 events",
        "Either Twin can initiate a Hunt"
    ]
}

export const Wraith: Ghost = {
    type: 'Wraith',
    evidence: ['EMF_Level_5', 'Spirit_Box', 'DOTS_Projector'],
    description: "A wraith is one of the most dangerous Ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.",
    strength: "Wraiths almost never touch the ground, meaning it can't be tracked by footsteps.",
    weakness: "Wraiths have a toxic reaction to Salt.",
    tips: [
        "When not hunting, a Wraith can teleport to within 3 meters of a random player, generating an EMF Level 2 reading (25% chance to be EMF Level 5)",
        "Will not leave UV Footprints after stepping in salt (it will show the imprint in the salt)"
    ]
}

export const Yokai: Ghost = {
    type: 'Yokai',
    evidence: ['Spirit_Box', 'Ghost_Orb', 'DOTS_Projector'],
    description: "A common type of ghost that is attracted to human voices. They can usually be found haunting family homes.",
    strength: "Talking near a Yokai will anger it, increasing the chance of an attack.",
    weakness: "When hunting, a Yokai can only hear voices close to it.",
    tips: [
        "Talking near a Yokai can cause it hunt at <80% sanity compared to normal (<50% sanity)",
        "When hunting, a Yokai can only hear voices within 2 meters of it"
    ]
}

export const Yurei: Ghost = {
    type: 'Yurei',
    evidence: ['Ghost_Orb', 'Freezing_Temperature', 'DOTS_Projector'],
    description: "A Yurei is a Ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
    strength: "Yurei have been known to have a stronger effect on people sanity.",
    weakness: "Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.",
    tips: [
        "Player's sanity drops faster (0.4% per second) during a ghost event or hunt, compared to most other ghosts (0.2% per second)",
        "No special effects to sanity outside of ghost events or hunts", "Using smudge sticks will cause a Yurei to roam for 90 seconds"
    ]
}

export const Ghosts = [
    Banshee,
    Demon,
    Goryo,
    Hantu,
    Jinn,
    Mare,
    Myling,
    Obake,
    Oni,
    Onryo,
    Phantom,
    Poltergeist,
    Raiju,
    Revenant,
    Shade,
    Spirit,
    The_Mimic,
    The_Twins,
    Wraith,
    Yokai,
    Yurei,
]
