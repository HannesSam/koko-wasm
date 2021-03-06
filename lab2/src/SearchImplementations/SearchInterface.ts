
export interface SearchInterface {
    loadData(data: Record<string, string>): void;
    search(query: Array<string>): string[];
}