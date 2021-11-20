// Elements need to be able to be null for technical reasons
let keys : Array<String|null> = [];
let values: Array<String|null> = [];
let queries: Array<String|null> = [];


export function loadEntry(key: string, value: string) : void {
   keys.push(key);
   values.push(value);
 }

export function addQuery(query: string) : void {
   queries.push(query);
 }

// Fun fact: this is basically a C-struct
@unmanaged class Count {
    key: string;
    count: f32;
}

export function search(): Array<string> {
    // TODO: Implement the rest of the function
    // Hints:
    // for ... of loops dont exist. Use indexing instead. 
    // You're gonna have to check that the strings are not
    //   null (which they have to be due to technical reasons).
    let result: Count[] = [];

    // Could use arrays directly, but this is slightly faster
    const staticKeys = StaticArray.fromArray(keys);
    const staticValues = StaticArray.fromArray(values);
    const staticQueries = StaticArray.fromArray(queries);

    for (let i = 0; i < staticKeys.length; i++) {
        const key = unchecked(staticKeys[i]);
        const value = unchecked(staticValues[i]);

        if (value === null) continue;
        
        let count : f32 = 0.0;

        // TODO: count how many times search queries appears in value
        // Hint: don't try to use multiple functions - it don't work.

        count /= value.length as f32;
        
        if (0 < count && key !== null) {
            result.push({key, count});
        }
    }

    // Sort result by count
    result.sort((a, b) => a.count < b.count ? 1 : -1);

    // Clear queries
    queries = [];

    // Return only keys
    return result
        .filter(r => r !== null)
        .map<string>(r => r.key);
}