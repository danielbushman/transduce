# transform-json

Transforms JSON from one schema to another. Such a simple thing that needs to be done all the time, and yet I haven't seen a solution I like. The overriding design goal is an elegant template syntax. Most of the time spent using the library will be in the templates. They should be natural to read and quick to use. The template should look like what it will generate. 

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

- [ ] Establish *performance measuring strategy* (something better than jsperf?)
- [ ] curry up: findPath = path(path); findPath(json)
- [ ] Improve functional purity

## Settle on some things

- [ ] Solidify folder structure.

## Productize library

- [ ] Add transpile configuration.
- [ ] CI tags
- [ ] Write documentation.
- [ ] Create gh-page.

----
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
