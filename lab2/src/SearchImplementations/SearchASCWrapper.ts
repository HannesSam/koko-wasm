import { SearchInterface } from "./SearchInterface";
import loader from "@assemblyscript/loader"; 

export class SearchASCWrapper implements SearchInterface {
    implementation : unknown;
    constructor(){
        loader.instantiate(
            fetch("search_debug.wasm"),
          ).then(({ exports }) => {
            this.implementation = exports.search;
            console.log("set implementations");
          })
    }

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