# transform-json

Transforms JSON from one schema to another. Such a simple thing that I haven't seen a good solution for. The primary aim is targeted at transformation templates that are clean, clear, and quick to use, since in the end, that's the the bulk of the time spent using the library.

# TODO

## Bare bones

- [x] Use [Atom](https://atom.io/) as text editor.
- [ ] Use [language-babel](https://atom.io/packages/language-babel) package in Atom, set to "Transpile on save".
- [ ] Add Mocha config and runner in Atom.
- [ ] Add Chai support for deep comparisons.

## Streamlining development

- [ ] Set up a quick test runner.

## TDD

### rapid dot.notation implementation

- [ ] path(path, json)
- [ ] transform(template, json)
- [ ] template = {'literal': literal('key')}

## Polish

- [ ] curry up: findPath = path(path); findPath(json)
- [ ] Do immutability performance test
- [ ] Improve functional purity

## Settle on some things

- [ ] Solidify folder structure.

## Productize library

- [ ] Add transpile configuration.
- [ ] Write documentation.
- [ ] Create gh-page.

----
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
