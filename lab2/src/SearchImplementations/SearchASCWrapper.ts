import { SearchInterface } from "./SearchInterface";

export class SearchASCWrapper implements SearchInterface {
    loadData(data: Record<string, string>): void {
        throw new Error("Method not implemented.");
    }
    getProgress(): number {
        throw new Error("Method not implemented.");
    }
    search(query: string[]): string[] {
        throw new Error("Method not implemented.");
    }


}