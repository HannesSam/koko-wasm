
export interface SearchInterface {
    loadData(data: Record<string, string>): void;
    getProgress(): number;
    search(query: Array<string>): string[];
}