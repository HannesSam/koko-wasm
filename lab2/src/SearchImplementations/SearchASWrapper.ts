import { SearchInterface } from "./SearchInterface";
//const loader = import("@assemblyscript/loader")
import loader from "@assemblyscript/loader";


export class SearchASWrapper implements SearchInterface {
    impl : loader.ASUtil | any;
    constructor(){
        console.log("Instantiate SearchASWrapper");
        loader.instantiate(
            fetch("wasm/search.wasm"),
          ).then((result) => {
            this.impl = result.exports;
          })
    }

    loadData(data: Record<string, string>): void {
      console.log(this.impl);
      let k = [];
      for (const [key, entry] of Object.entries(data)){
        this.impl.loadEntry(
          this.impl.__pin(this.impl.__newString(key)),
          this.impl.__pin(this.impl.__newString(entry.toLowerCase()))
        );
        k.push(key);
      }
    }

    search(queries: string[]): string[] {
      queries = queries.map(q => q.toLowerCase());

      // TODO: Convert earch query in queies to a pointer (a number 
      // representing the variables location in memory), and send it
      // to the wasm function.
      // Hints:
      // use the this.impl.__newString function.
      // use the this.impl.__pin function to make sure the memory
      // is not garbage collected.

      // TODO: call the search function
      // TODO: convert the resulting pointer to regular array of
      //       pointers using: this.impl.__getArray
      // TODO: Convert each pointer to string
      
      // TODO: call this.impl.__unpin on all the query pointers.

      return [];
    }


}