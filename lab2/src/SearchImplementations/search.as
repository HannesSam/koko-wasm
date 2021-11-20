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
    // TODO: Implement the rest of the function§
    // Hints:
    // for ... of loops dont exist. Use indexing instead. 
    // 
    let result: Count[] = [];

    const staticKeys = StaticArray.fromArray(keys);
    const staticValues = StaticArray.fromArray(values);
    const staticQueries = StaticArray.fromArray(queries);

    for (let i = 0; i < staticKeys.length; i++) {
        const key = unchecked(staticKeys[i]);
        const value = unchecked(staticValues[i]);

        if (value === null)
            continue;
        
        let count : f32 = 0.0;
        for (let j = 0; j < staticQueries.length; j++){
            const query = unchecked(staticQueries[j]);
            if (query !== null){
                for (let k = 0; k < value.length-query.length; k++) {
                    if (unchecked(value.substr(k, query.length)) == query) {
                        count += 1.0;
                    }
                }
            }
        }
        //c ount /= value.length as f32;
        
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
        .map<string>(r => r.count.toString() + " " + r.key);
}