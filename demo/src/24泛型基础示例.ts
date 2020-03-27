function identity<T>(arg: T): T {
    return arg
}
// let myIdentity: <T>(arg: T) => T = identity

/* interface GnericIdentityFn {
    <T>(arg: T): T
} 

let myIdentity: GnericIdentityFn = identity
*/

interface GnericIdentityFn<T> {
    (arg: T): T
}

let myIdentity: GnericIdentityFn<number> = identity
