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
    // Hint: use for i-loop
    let result: Count[] = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];

        if (value === null)
            continue;
        
        let count : f32 = 0.0;
        for (let j = 0; j < queries.length; j++){
            const query = queries[j];
            if (query !== null){
                for (let k = 0; k < query.length; k++) {
                    if (value.substr(k, query.length) == query) {
                        count += 1.0;
                    }
                }
            }
        }
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