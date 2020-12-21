import {normalize, schema} from 'normalizr';

export function normalizeLists(data) {

    const category = new schema.Entity('categories', {
        list: [new schema.Entity('list')]
    });

    const listsSchema = {categorys: [category]};
    const normalizedData = normalize(data, listsSchema);

    const categories = normalizedData.entities.categories
    let list
    ('list' in normalizedData.entities) ? list = normalizedData.entities.list : list = []

    return {categorys: categories, list: list}

}

export function normlizeCategorys(data) {
    const category = new schema.Entity('categorys');
    const categorySchema = {categorys: [category]};
    return  normalize(data, categorySchema);
}