import {Evidence} from "./Evidence";

export type Ghost = {
    type: string;
    description?: string;
    strength?: string;
    weakness?: string;
    evidence: [Evidence, Evidence, Evidence];
}