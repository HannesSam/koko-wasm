# Lab 2

Reimplementing a linear search function using AssemblyScript.

### Steps:
1. Make sure npm is installed: `npm --version`
2. Install dependencies: `npm install`
3. Run the react website: `npm start`

As you can see we now have a webpage where you can enter characteristics, 
and get which ficitional character match the best depending on how commonly
occuring the given words are.

The current implementation is written in TypeScript (a variant of JS).
Let's implement it using AssemblyScript to see if we get any performance gains!

4. Go into **SearchContainer.tsx** and instantiate **SearchASWrapper** instead of **SearchTS**.
5. The **SearchASWrapper**-class contains glue code for calling WASM written in AssemlyScript (.as file ending). This AssemblyScript is implemented in the file **search.as**. Both **SearchASWrapper** and **search.as** are unfinished. Fix the TODOs (see **SearchTS.ts** from inspiration).
6. To test the code you have to host the app (`npm start`), and compile the AS code to WASM: `npm run asbuild`. Everytime you run this command the webpage should automatically reload. 


### Datasets used, with prefixes:
Harry Potter - hp\
Friends - friends\
Despicable me - despicable me\
Breaking bad - bbb \
Lord of the Rings - lotr
