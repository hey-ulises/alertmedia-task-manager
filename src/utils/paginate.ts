export default function paginate(array: any, page = 1, pageSize = 10) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return array.slice(start, end);
}