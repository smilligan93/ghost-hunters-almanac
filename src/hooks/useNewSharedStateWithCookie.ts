import { useEffect, useRef } from "react";
import { SharedState } from "../lib";
import {useCookie} from "./useCookie";
import {useNewSharedState} from "./useNewSharedState";

export const useNewSharedStateWithCookie = <TypeName>(defaultValue: TypeName, cookieName: string): SharedState<TypeName> => {
    const [cookieVal, setCookieVal] = useCookie<TypeName>(cookieName);
    const sharedState = useNewSharedState<TypeName>(cookieVal ?? defaultValue);

    useEffect(() => {
        const sub = sharedState.subject.subscribe(next => {
            setCookieVal(next);
        })
        return () => sub.unsubscribe();
    }, [setCookieVal, sharedState]);
    return sharedState;
}
