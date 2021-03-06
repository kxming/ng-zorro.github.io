"use strict";
// tslint:disable:no-import-side-effect
Object.defineProperty(exports, "__esModule", { value: true });
// Load zone.js for the server.
var core_1 = require("@angular/core");
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
require("reflect-metadata");
require("zone.js/dist/zone-node");
// Import module map for lazy loading
var platform_server_1 = require("@angular/platform-server");
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var static_paths_1 = require("./static.paths");
var build_config_1 = require("../build-config");
// Faster server renders w/ Prod mode (dev mode never needed)
core_1.enableProdMode();
// Fix the `Event is not defined` error https://github.com/angular/universal/issues/844
// tslint:disable-next-line no-string-literal
global['Event'] = null;
var serverMainFile = path_1.join(build_config_1.buildConfig.outputDir, 'server/main');
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require(serverMainFile), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
var BROWSER_FOLDER = build_config_1.buildConfig.outputDir;
// Load the index.html file containing referances to your application bundle.
var index = fs_extra_1.readFileSync(path_1.join(build_config_1.buildConfig.outputDir, 'index.html'), 'utf8');
var previousRender = Promise.resolve();
// Iterate each route path
static_paths_1.ROUTES.forEach(function (route) {
    console.log("Rendering\t" + route);
    var fullPath = path_1.join(BROWSER_FOLDER, route);
    // Make sure the directory structure is there
    fs_extra_1.ensureDirSync(fullPath);
    // Writes rendered HTML to index.html, replacing the file if it already exists.
    previousRender = previousRender
        .then(function (_) {
        return platform_server_1.renderModuleFactory(AppServerModuleNgFactory, {
            document: index,
            url: route,
            extraProviders: [module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)]
        });
    })
        .then(function (html) { return fs_extra_1.writeFileSync(path_1.join(fullPath, 'index.html'), html); });
});
//# sourceMappingURL=prerender.js.map