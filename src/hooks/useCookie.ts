import {useCookies} from "react-cookie";
import {useCallback, useMemo} from "react";

export const useCookie = <TypeName>(cookieName: string): [TypeName | undefined, (value: TypeName) => void] => {
    const [cookies, setCookies] = useCookies([cookieName]);

    const cookie = useMemo(() => cookies[cookieName],
        [cookies, cookieName]
    );
    const setCookie = useCallback((value: TypeName) => setCookies(cookieName, value),
        [cookieName, setCookies]
    );

    return [cookie, setCookie];

}