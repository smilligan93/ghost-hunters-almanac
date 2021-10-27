import { useRef } from "react";
import { SharedState } from "../lib";

export const useNewSharedState = <TypeName>(value: TypeName): SharedState<TypeName> => {
    const sharedRef = useRef(new SharedState(value));
    return sharedRef.current;
}