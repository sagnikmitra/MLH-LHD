let combineList xs ys = xs++ys
let zs = combineList xs ys
let sortList (z:zs) = if (head zs) < z then (zs:z) else (z:(sortList zs))
