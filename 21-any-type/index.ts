// this will trigger typecheck warnings
let value1 = 1;
value1 = 'Bob';
value1.map((i: number) => i);

// this wont trigger typecheck warnings, but will remove the type-safety from the code
let value2: any = 1;
value2 = 'Bob';
value2.map((i: number) => i);
