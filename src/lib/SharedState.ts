import {BehaviorSubject} from "rxjs";

export class SharedState<TypeName> {
    constructor(defaultValue: TypeName) {
        this.subject = new BehaviorSubject(defaultValue);
    }

    subject: BehaviorSubject<TypeName>;

    set(value: TypeName) {
        this.subject.next(value);
    }

    get() {
        return this.subject.value;
    }
}