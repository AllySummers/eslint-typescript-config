/**
 * An environment defines global variables that are predefined.
 */
export interface Env {
   /**
     * defines require() and define() as global variables as per the amd spec
     */
    amd?: boolean;
    /**
     * AppleScript global variables
     */
    applescript?: boolean;
    /**
     * Atom test helper globals
     */
    atomtest?: boolean;
    /**
     * browser global variables
     */
    browser?: boolean;
    /**
     * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack)
     */
    commonjs?: boolean;
    /**
     * Globals common to both Node and Browser
     */
    'shared-node-browser'?: boolean;
    /**
     * Ember test helper globals
     */
    embertest?: boolean;
    /**
     * enable all ECMAScript 6 features except for modules
     */
    es6?: boolean;
    /**
     * GreaseMonkey globals
     */
    greasemonkey?: boolean;
    /**
     * adds all of the Jasmine testing global variables for version 1.3 and 2.0
     */
    jasmine?: boolean;
    /**
     * Jest global variables
     */
    jest?: boolean;
    /**
     * jQuery global variables
     */
    jquery?: boolean;
    /**
     * Meteor global variables
     */
    meteor?: boolean;
    /**
     * adds all of the Mocha test global variables
     */
    mocha?: boolean;
    /**
     * MongoDB global variables
     */
    mongo?: boolean;
    /**
     * Java 8 Nashorn global variables
     */
    nashorn?: boolean;
    /**
     * Node.js global variables and Node.js scoping
     */
    node?: boolean;
    /**
     * PhantomJS global variables
     */
    phantomjs?: boolean;
    /**
     * Prototype.js global variables
     */
    prototypejs?: boolean;
    /**
     * Protractor global variables
     */
    protractor?: boolean;
    /**
     * QUnit global variables
     */
    qunit?: boolean;
    /**
     * Service Worker global variables
     */
    serviceworker?: boolean;
    /**
     * ShellJS global variables
     */
    shelljs?: boolean;
    /**
     * WebExtensions globals
     */
    webextensions?: boolean;
    /**
     * web workers global variables
     */
    worker?: boolean;
    [key: string]: unknown;
}