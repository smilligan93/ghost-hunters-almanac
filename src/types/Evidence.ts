import {
    faBookOpen,
    faCircle,
    faFingerprint, faMobile,
    faTachometerAlt,
    faThermometerEmpty,
    faWifi
} from "@fortawesome/free-solid-svg-icons";

export type Evidence = 'EMF_Level_5' | 'DOTS_Projector' | 'Fingerprints' | 'Ghost_Orb' | 'Ghost_Writing' | 'Freezing_Temperature' | 'Spirit_Box';

export const evidenceName = (evidence: Evidence) => {
    return evidence.replaceAll('_', ' ');
}

export const iconForEvidence = (evidence: Evidence) => {
    switch (evidence) {
        case "EMF_Level_5":
            return faTachometerAlt;
        case "DOTS_Projector":
            return faWifi;
        case "Fingerprints":
            return faFingerprint;
        case "Ghost_Orb":
            return faCircle;
        case "Ghost_Writing":
            return faBookOpen;
        case "Freezing_Temperature":
            return faThermometerEmpty;
        case "Spirit_Box":
            return faMobile;
    }
}
