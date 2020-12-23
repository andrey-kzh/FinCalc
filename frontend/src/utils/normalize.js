import {normalize, schema} from 'normalizr';

export function normalizeLists(data) {
    const category = new schema.Entity('categorys', {
        list: [new schema.Entity('list')]
    });
    const listsSchema = {categorys: [category]};
    return normalize(data, listsSchema);
}

export function normalizeCategorys(data) {
    const category = new schema.Entity('categorys');
    const categorySchema = {categorys: [category]};
    return normalize(data, categorySchema);
}