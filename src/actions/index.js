export function selectLibrary(id) {
    return {
        type: 'select_library',
        payload: id,
    };
}
