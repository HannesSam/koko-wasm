import { SearchInterface } from "./SearchInterface";
//const loader = import("@assemblyscript/loader")
import loader from "@assemblyscript/loader";


export class SearchASWrapper implements SearchInterface {
    impl : loader.ASUtil | any;
    constructor(){
        console.log("Instantiate SearchASWrapper");
        loader.instantiate(
            fetch("wasm/search_debug.wasm"),
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
      //console.log("count", this.impl.count(), this.impl.nulls());
    }

    search(query: string[]): string[] {
      const queries_ptrs = query.map((s) => 
        this.impl.__pin(this.impl.__newString(s.toLowerCase())) 
      );

      for (let ptr of queries_ptrs){
        this.impl.addQuery(ptr);
      }

      const arrayPtr = this.impl.search();
      const results = this.impl.__getArray(arrayPtr);
      
      for (let ptr of queries_ptrs){
        this.impl.__unpin(ptr);
      }

      return results.map((e: number) => this.impl.__getString(e));
    }


}