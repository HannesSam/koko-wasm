import { SearchInterface } from "./SearchInterface";

export class SearchTS implements SearchInterface {
    private data: Record<string, string> = {};

    constructor(){
        console.log("Instantiate SearchTS");
    }

    loadData(data: Record<string, string>): void {
        this.data = data; 
    }

    findNumberOfOccurences(text: string, query: string): number {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text.substr(i, query.length) === query) {
                count++;
            }
        }
        return count;
    }

    search(query: Array<string>): string[] {
        const result: {key:string, count:number}[] = [];
        for (const [key, value] of Object.entries(this.data)) {
            let count = 0;
            for (const word of query) {
                count += this.findNumberOfOccurences(value, word)
            }
            count /= value.length;
            if (count > 0) {
                result.push({key, count});
            }
        }

        // Sort result by count
        result.sort((a, b) => b.count - a.count);

        // Return only keys
        return result.map(r => r.key);        
    }
}