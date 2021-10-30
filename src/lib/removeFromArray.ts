
export const removeFromArray = <TypeName>(array: TypeName[], item: TypeName) => {
    const copy = [...array];
    const index = copy.indexOf(item);
    if (index >= 0) {
        copy.splice(index, 1);
    }
    return copy;
}