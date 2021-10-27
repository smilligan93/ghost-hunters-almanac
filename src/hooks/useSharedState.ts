import {SharedState} from "../lib/SharedState";
import {useCallback, useEffect, useState} from "react";

export const useSharedState = <TypeName>(sharedState: SharedState<TypeName>): [TypeName, (value: TypeName) => void] => {
    const [state, setState] = useState(sharedState.get());

    useEffect(() => {
        const sub = sharedState.subject.subscribe(next => setState(next));
        return () => sub.unsubscribe();
    }, [sharedState, setState]);

    const setSharedState = useCallback((value: TypeName) => {
        sharedState.set(value);
    }, [sharedState]);

    return [state, setSharedState];
}