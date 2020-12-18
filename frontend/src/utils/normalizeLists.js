import {normalize, schema} from 'normalizr';

export function normalizeLists(data) {

    console.log(data)

    const list = new schema.Entity('list');
    //const category = new schema.Entity('categories');

    //const mySchema = {categories: [category]};
    const mySchema = {lists: [list]};
    const normalizedData = normalize(data, mySchema);

    console.log(normalizedData)

}