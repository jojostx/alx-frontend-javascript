 export default function iterateThroughObject(reportWithIterator) {
    let names = [];

    for (const item of reportWithIterator) {
        names.push(item);
    }

    return names.join(' | ');
}
