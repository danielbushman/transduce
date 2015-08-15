# transform-json

Transforms JSON from one schema to another. Such a simple thing that needs to be done all the time, and yet I haven't seen a solution I like. The overriding design goal is an elegant template syntax. Most of the time spent using the library will be in the templates. They should be natural to read and quick to use. The template should look like what it will generate.

# TODO

## Bare bones

- [x] Use [Atom](https://atom.io/) as text editor.
- [x] Add gulp transpile watch.
- [x] Add Mocha config and runner in Atom.

## Streamlining development

- [ ] Add Chai support for deep JSON comparisons.
- [ ] Set up source-preview-babel Atom plugin
- [x] Set up config and BTT gestures for mocha-test-runner

## TDD

### rapid dot.notation implementation

- [x] path(path, json)
- [x] transform(template, json)
- [ ] template = {'literal': literal('key')}

## Polish

- [ ] Establish *performance measuring strategy* (something better than jsperf?)
- [ ] curry up: findPath = path(path); findPath(json)
- [ ] Improve functional purity
- [ ] In browser tests

## Settle on some things

- [ ] Solidify folder structure.

## Productize library

- [ ] CI tags
- [ ] Write documentation.
- [ ] Create gh-page.

# Notes

## My Tool Setup

Mostly reminders to myself when returning to the project. I will move them to MyRC later.

### Better Touch Tool gestures

- cmd-shift + Three Finger Swipe Down: ``'ctrl-alt-m': 'mocha-test-runner:run'`
- cmd + Three Finger Swipe Down: `'ctrl-alt-shift-M': 'mocha-test-runner:run-previous'`


----
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
