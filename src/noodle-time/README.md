the log is the only persistent storage

To send something to a client, the fewest components possible is an expression and the log

## Axioms
*n.* "a statement or proposition that is regarded as being established, accepted, or self-evidently true."
  - *mathematics*: "a statement or proposition on which an abstractly defined structure is based."

The log is the only persistent storage.
Mobius is a [Formal language](https://en.wikipedia.org/wiki/Formal_language)
  ```
  The following rules describe a formal language L over the alphabet Σ = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, = }:

  - Every nonempty string that does not contain "+" or "d=" and does not start with "0" is in L.
  - The string "0" is in L.
  - A string containing "=" is in L if and only if there is exactly one "=", and it separates two valid strings of L.
  - A string containing "+" but not "=" is in L if and only if every "+" in the string separates two valid strings of L.
  - No string is in L other than those implied by the previous rules.
  ```

## Formal language rules

## Managed terminology

**sequence** global immutable log. stream of records.

**series** losslessly compacted sequence  

**stream** data

**token**



(f x) -- data-last to curry

No node is required to know everything, but the system promises to remember absolutely everything. Abstractly, like an onion, the entire onion exists somewhere. You can't get data until you've provided interlocked redundant data.
