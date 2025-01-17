# Changelog

## v0.17.0-beta.9 (2021-02-21)

#### :bug: Bug Fix

- [#329](https://github.com/orbitjs/ember-orbit/pull/329) Use js instead of ts within app dir ([@dgeb](https://github.com/dgeb))

#### :house: Internal

- [#330](https://github.com/orbitjs/ember-orbit/pull/330) Don't include app/\*_/_ in tsconfig ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.17.0-beta.8 (2021-02-21)

#### :rocket: Enhancement

- [#328](https://github.com/orbitjs/ember-orbit/pull/328) Improve typings and fix ember-source peer dependency ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.17.0-beta.7 (2021-02-19)

#### :rocket: Enhancement

- [#327](https://github.com/orbitjs/ember-orbit/pull/327) Strict typings ([@dgeb](https://github.com/dgeb))

#### :house: Internal

- [#326](https://github.com/orbitjs/ember-orbit/pull/326) Update orbit v0.17.0-beta.12 and ember-cli v3.25.0 ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.17.0-beta.6 (2021-02-12)

#### :boom: Breaking Change

- [#325](https://github.com/orbitjs/ember-orbit/pull/325) Update to orbit v0.17.0-beta.11 ([@dgeb](https://github.com/dgeb))
- [#317](https://github.com/orbitjs/ember-orbit/pull/317) Remove ember-inflector singularize/pluralize ([@rwwagner90](https://github.com/rwwagner90))

#### :rocket: Enhancement

- [#325](https://github.com/orbitjs/ember-orbit/pull/325) Update to orbit v0.17.0-beta.11 ([@dgeb](https://github.com/dgeb))

#### :bug: Bug Fix

- [#306](https://github.com/orbitjs/ember-orbit/pull/306) Hotfix for using ember computed macros based on model attributes ([@chbonser](https://github.com/chbonser))
- [#310](https://github.com/orbitjs/ember-orbit/pull/310) Fix prototype leakage on inheritance ([@tchak](https://github.com/tchak))
- [#309](https://github.com/orbitjs/ember-orbit/pull/309) Store schema information on prototype to fix model inheritance ([@tchak](https://github.com/tchak))

#### :house: Internal

- [#318](https://github.com/orbitjs/ember-orbit/pull/318) Upgrade Ember 3.23 ([@rwwagner90](https://github.com/rwwagner90))
- [#308](https://github.com/orbitjs/ember-orbit/pull/308) Update dependencies ([@tchak](https://github.com/tchak))

#### Committers: 4

- Chris Bonser ([@chbonser](https://github.com/chbonser))
- Dan Gebhardt ([@dgeb](https://github.com/dgeb))
- Paul Chavard ([@tchak](https://github.com/tchak))
- Robert Wagner ([@rwwagner90](https://github.com/rwwagner90))

## v0.17.0-beta.1 (2020-08-02)

#### :boom: Breaking Change

- [#280](https://github.com/orbitjs/ember-orbit/pull/280) Remove 0.16 deprecations ([@tchak](https://github.com/tchak))
- [#274](https://github.com/orbitjs/ember-orbit/pull/274) Make records on non forked stores readonly ([@tchak](https://github.com/tchak))

#### :rocket: Enhancement

- [#287](https://github.com/orbitjs/ember-orbit/pull/287) Fix immutable record exceptions ([@tchak](https://github.com/tchak))
- [#286](https://github.com/orbitjs/ember-orbit/pull/286) Expose base store on forked stores ([@tchak](https://github.com/tchak))
- [#274](https://github.com/orbitjs/ember-orbit/pull/274) Make records on non forked stores readonly ([@tchak](https://github.com/tchak))
- [#277](https://github.com/orbitjs/ember-orbit/pull/277) Migrate initializers to ts ([@tchak](https://github.com/tchak))
- [#276](https://github.com/orbitjs/ember-orbit/pull/276) Implement liveQuery ([@tchak](https://github.com/tchak))
- [#271](https://github.com/orbitjs/ember-orbit/pull/271) Refactor has many to be a readonly array ([@tchak](https://github.com/tchak))
- [#272](https://github.com/orbitjs/ember-orbit/pull/272) Fix decorators for use in typescript ([@tchak](https://github.com/tchak))
- [#267](https://github.com/orbitjs/ember-orbit/pull/267) Convert factories to typescript ([@tchak](https://github.com/tchak))
- [#262](https://github.com/orbitjs/ember-orbit/pull/262) Support polymorphic relationships. Issue #257 ([@derekwsgray](https://github.com/derekwsgray))
- [#259](https://github.com/orbitjs/ember-orbit/pull/259) Remove ember 3.4 support ([@tchak](https://github.com/tchak))

#### :bug: Bug Fix

- [#279](https://github.com/orbitjs/ember-orbit/pull/279) Fix live query ([@tchak](https://github.com/tchak))

#### :memo: Documentation

- [#265](https://github.com/orbitjs/ember-orbit/pull/265) Add doc for polymorphic relationships. ([@derekwsgray](https://github.com/derekwsgray))

#### :house: Internal

- [#293](https://github.com/orbitjs/ember-orbit/pull/293) Fix typing in modules-of-type ([@dgeb](https://github.com/dgeb))
- [#292](https://github.com/orbitjs/ember-orbit/pull/292) Update orbit and ember-source, as well as imports ([@dgeb](https://github.com/dgeb))
- [#291](https://github.com/orbitjs/ember-orbit/pull/291) Bump elliptic from 6.5.2 to 6.5.3 ([@dependabot[bot]](https://github.com/apps/dependabot))
- [#290](https://github.com/orbitjs/ember-orbit/pull/290) Remove redundant @types/ember-test-helpers ([@tchak](https://github.com/tchak))
- [#289](https://github.com/orbitjs/ember-orbit/pull/289) Use proper import for destroyable polyfill ([@tchak](https://github.com/tchak))
- [#288](https://github.com/orbitjs/ember-orbit/pull/288) Update dependencies ([@tchak](https://github.com/tchak))
- [#284](https://github.com/orbitjs/ember-orbit/pull/284) Bump lodash from 4.17.15 to 4.17.19 ([@dependabot[bot]](https://github.com/apps/dependabot))
- [#273](https://github.com/orbitjs/ember-orbit/pull/273) Use glimmer cache API ([@tchak](https://github.com/tchak))
- [#275](https://github.com/orbitjs/ember-orbit/pull/275) disable deprecations during tests ([@tchak](https://github.com/tchak))
- [#268](https://github.com/orbitjs/ember-orbit/pull/268) Use new destroyable api ([@tchak](https://github.com/tchak))
- [#270](https://github.com/orbitjs/ember-orbit/pull/270) Add has many rendering test ([@tchak](https://github.com/tchak))
- [#263](https://github.com/orbitjs/ember-orbit/pull/263) Bump websocket-extensions from 0.1.3 to 0.1.4 ([@dependabot[bot]](https://github.com/apps/dependabot))
- [#255](https://github.com/orbitjs/ember-orbit/pull/255) Prettier2 ([@tchak](https://github.com/tchak))

#### Committers: 3

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))
- Derek W. S. Gray ([@derekwsgray](https://github.com/derekwsgray))
- Paul Chavard ([@tchak](https://github.com/tchak))

## v0.16.8 (2020-07-27)

#### :bug: Bug Fix

- [#285](https://github.com/orbitjs/ember-orbit/pull/285) Bump orbit deps (v0.16) ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.16.7 (2020-06-07)

#### :rocket: Enhancement

- [#264](https://github.com/orbitjs/ember-orbit/pull/264) Support Polymorphic Relationships (0.16 backport) ([@derekwsgray](https://github.com/derekwsgray))

#### :house: Internal

- [#255](https://github.com/orbitjs/ember-orbit/pull/255) Prettier2 ([@tchak](https://github.com/tchak))

#### Committers: 2

- Derek W. S. Gray ([@derekwsgray](https://github.com/derekwsgray))
- Paul Chavard ([@tchak](https://github.com/tchak))

## v0.16.6 (2020-03-12)

#### :rocket: Enhancement

- [#253](https://github.com/orbitjs/ember-orbit/pull/253) Bump Orbit deps ([@dgeb](https://github.com/dgeb))
- [#252](https://github.com/orbitjs/ember-orbit/pull/252) Update ember-cli ([@tchak](https://github.com/tchak))
- [#251](https://github.com/orbitjs/ember-orbit/pull/251) Small DX improvement ([@pangratz](https://github.com/pangratz))
- [#250](https://github.com/orbitjs/ember-orbit/pull/250) Export types from addon index ([@tchak](https://github.com/tchak))

#### :memo: Documentation

- [#249](https://github.com/orbitjs/ember-orbit/pull/249) Add ember-cli-addon-docs site ([@rwwagner90](https://github.com/rwwagner90))

#### Committers: 4

- Clemens M�ller ([@pangratz](https://github.com/pangratz))
- Dan Gebhardt ([@dgeb](https://github.com/dgeb))
- Paul Chavard ([@tchak](https://github.com/tchak))
- Robert Wagner ([@rwwagner90](https://github.com/rwwagner90))

## v0.16.5 (2020-01-14)

#### :rocket: Enhancement

- [#239](https://github.com/orbitjs/ember-orbit/pull/239) Fix store#merge return type ([@tchak](https://github.com/tchak))

#### :memo: Documentation

- [#239](https://github.com/orbitjs/ember-orbit/pull/239) Fix store#merge return type ([@tchak](https://github.com/tchak))

#### :house: Internal

- [#246](https://github.com/orbitjs/ember-orbit/pull/246) Test with node 10 ([@dgeb](https://github.com/dgeb))
- [#245](https://github.com/orbitjs/ember-orbit/pull/245) Add more LTS builds ([@tchak](https://github.com/tchak))

#### Committers: 2

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))
- Paul Chavard ([@tchak](https://github.com/tchak))

## v0.16.4 (2019-12-22)

#### :rocket: Enhancement

- [#236](https://github.com/orbitjs/ember-orbit/pull/236) Upgrade ember, orbit.js and other dependencies ([@tchak](https://github.com/tchak))

#### :bug: Bug Fix

- [#234](https://github.com/orbitjs/ember-orbit/pull/234) Allow ember-orbit to be used in addons ([@devotox](https://github.com/devotox))
- [#235](https://github.com/orbitjs/ember-orbit/pull/235) Fix app reference in addon index ([@tchak](https://github.com/tchak))

#### :house: Internal

- [#237](https://github.com/orbitjs/ember-orbit/pull/237) Explicitly declare supported node versions ([@tchak](https://github.com/tchak))

#### Committers: 2

- Devonte ([@devotox](https://github.com/devotox))
- Paul Chavard ([@tchak](https://github.com/tchak))

## v0.16.3 (2019-09-26)

#### :rocket: Enhancement

- [#229](https://github.com/orbitjs/ember-orbit/pull/229) Upgrade dependencies ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.16.2 (2019-09-05)

#### :bug: Bug Fix

- [#218](https://github.com/orbitjs/ember-orbit/pull/218) Upgrade @orbit/coordinator@^0.16.2 ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.16.1 (2019-08-20)

#### :bug: Bug Fix

- [#215](https://github.com/orbitjs/ember-orbit/pull/215) Fix in 3.11+ ([@cibernox](https://github.com/cibernox))

#### :house: Internal

- [#216](https://github.com/orbitjs/ember-orbit/pull/216) Bump @orbit deps ([@dgeb](https://github.com/dgeb))
- [#214](https://github.com/orbitjs/ember-orbit/pull/214) Update to Ember 3.12 ([@cibernox](https://github.com/cibernox))

#### Committers: 2

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))
- Miguel Camba ([@cibernox](https://github.com/cibernox))

## v0.16.0 (2019-07-30)

#### :rocket: Enhancement

- [#210](https://github.com/orbitjs/ember-orbit/pull/210) Refine strategy generator ([@dgeb](https://github.com/dgeb))
- [#207](https://github.com/orbitjs/ember-orbit/pull/207) Make strategy name parsing even smarter ([@dgeb](https://github.com/dgeb))
- [#206](https://github.com/orbitjs/ember-orbit/pull/206) Create data-buckets dir in default blueprint ([@dgeb](https://github.com/dgeb))
- [#205](https://github.com/orbitjs/ember-orbit/pull/205) Refactor initializers and data-bucket generator ([@dgeb](https://github.com/dgeb))
- [#204](https://github.com/orbitjs/ember-orbit/pull/204) Introduce `data-bucket` blueprint ([@dgeb](https://github.com/dgeb))
- [#203](https://github.com/orbitjs/ember-orbit/pull/203) Add blueprints ([@dgeb](https://github.com/dgeb))

#### :memo: Documentation

- [#208](https://github.com/orbitjs/ember-orbit/pull/208) Update README ([@dgeb](https://github.com/dgeb))

#### :house: Internal

- [#211](https://github.com/orbitjs/ember-orbit/pull/211) Upgrade orbit packages to v0.16 ([@dgeb](https://github.com/dgeb))
- [#209](https://github.com/orbitjs/ember-orbit/pull/209) Remove unused Promise extension from tests ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.16.0-beta.2 (2019-07-22)

#### :bug: Bug Fix

- [#201](https://github.com/orbitjs/ember-orbit/pull/201) Fix ReadOnlyArrayProxy for octane ([@dgeb](https://github.com/dgeb))

#### Committers: 1

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))

## v0.16.0-beta.1 (2019-07-20)

#### :rocket: Enhancement

- [#197](https://github.com/orbitjs/ember-orbit/pull/197) Modernize and standardize Store + Cache interfaces ([@dgeb](https://github.com/dgeb))
- [#194](https://github.com/orbitjs/ember-orbit/pull/194) Validate presence of models collection ([@tchak](https://github.com/tchak))
- [#193](https://github.com/orbitjs/ember-orbit/pull/193) Use ember-inflector for Orbit Schema singularize/pluralize ([@mattmcmanus](https://github.com/mattmcmanus))
- [#183](https://github.com/orbitjs/ember-orbit/pull/183) Convert to Typescript (part 1) ([@tchak](https://github.com/tchak))
- [#182](https://github.com/orbitjs/ember-orbit/pull/182) Use new obit config to lookup sources and strategies ([@tchak](https://github.com/tchak))
- [#177](https://github.com/orbitjs/ember-orbit/pull/177) [BREAKING] Configurable lookup paths; change default for models (`models/` -> `data-models/`) ([@lukemelia](https://github.com/lukemelia))
- [#180](https://github.com/orbitjs/ember-orbit/pull/180) Provide convenient access to underlying record data via ember-orbit model ([@lukemelia](https://github.com/lukemelia))

#### :bug: Bug Fix

- [#185](https://github.com/orbitjs/ember-orbit/pull/185) Fix management of HasMany relationships ([@dgeb](https://github.com/dgeb))

#### :house: Internal

- [#200](https://github.com/orbitjs/ember-orbit/pull/200) Disable noImplicitAny flag in tsconfig ([@dgeb](https://github.com/dgeb))
- [#198](https://github.com/orbitjs/ember-orbit/pull/198) Bump dependencies, include ember 3.8 in test matrix ([@dgeb](https://github.com/dgeb))
- [#196](https://github.com/orbitjs/ember-orbit/pull/196) Update @orbit dependencies ([@dgeb](https://github.com/dgeb))
- [#195](https://github.com/orbitjs/ember-orbit/pull/195) Update dependencies ([@tchak](https://github.com/tchak))
- [#191](https://github.com/orbitjs/ember-orbit/pull/191) Enable prettier ([@tchak](https://github.com/tchak))
- [#188](https://github.com/orbitjs/ember-orbit/pull/188) Update record ([@tchak](https://github.com/tchak))
- [#190](https://github.com/orbitjs/ember-orbit/pull/190) Update ember-cli ([@tchak](https://github.com/tchak))
- [#189](https://github.com/orbitjs/ember-orbit/pull/189) Update orbit.js ([@tchak](https://github.com/tchak))
- [#187](https://github.com/orbitjs/ember-orbit/pull/187) Upgrade orbit ([@tchak](https://github.com/tchak))
- [#184](https://github.com/orbitjs/ember-orbit/pull/184) Modernize tests ([@dgeb](https://github.com/dgeb))
- [#176](https://github.com/orbitjs/ember-orbit/pull/176) Update orbit dependencies to 0.16.0-beta.1 ([@PieterJanVdb](https://github.com/PieterJanVdb))

#### Committers: 5

- Dan Gebhardt ([@dgeb](https://github.com/dgeb))
- Luke Melia ([@lukemelia](https://github.com/lukemelia))
- Matt McManus ([@mattmcmanus](https://github.com/mattmcmanus))
- Paul Chavard ([@tchak](https://github.com/tchak))
- Pieter-Jan Vandenbussche ([@PieterJanVdb](https://github.com/PieterJanVdb))
