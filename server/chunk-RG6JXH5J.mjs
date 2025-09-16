import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OD4JEM2E.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-GT2DVIBE.mjs";
import {
  CommonModule,
  NgIf,
  isPlatformBrowser
} from "./chunk-WMJX6FG3.mjs";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Subject,
  ViewEncapsulation$1,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-7SOKK2ZZ.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-24VIC3GD.mjs";

// node_modules/@angular/google-maps/fesm2022/google-maps.mjs
var _c0 = ["*"];
var MapEventManager = class {
  /** Clears all currently-registered event listeners. */
  _clearListeners() {
    for (const listener of this._listeners) {
      listener.remove();
    }
    this._listeners = [];
  }
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    this._pending = [];
    this._listeners = [];
    this._targetStream = new BehaviorSubject(void 0);
  }
  /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */
  getLazyEmitter(name) {
    return this._targetStream.pipe(switchMap((target) => {
      const observable = new Observable((observer) => {
        if (!target) {
          this._pending.push({
            observable,
            observer
          });
          return void 0;
        }
        const listener = target.addListener(name, (event) => {
          this._ngZone.run(() => observer.next(event));
        });
        if (!listener) {
          observer.complete();
          return void 0;
        }
        this._listeners.push(listener);
        return () => listener.remove();
      });
      return observable;
    }));
  }
  /** Sets the current target that the manager should bind events to. */
  setTarget(target) {
    const currentTarget = this._targetStream.value;
    if (target === currentTarget) {
      return;
    }
    if (currentTarget) {
      this._clearListeners();
      this._pending = [];
    }
    this._targetStream.next(target);
    this._pending.forEach((subscriber) => subscriber.observable.subscribe(subscriber.observer));
    this._pending = [];
  }
  /** Destroys the manager and clears the event listeners. */
  destroy() {
    this._clearListeners();
    this._pending = [];
    this._targetStream.complete();
  }
};
var DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: "roadmap"
};
var DEFAULT_HEIGHT = "500px";
var DEFAULT_WIDTH = "500px";
var GoogleMap = class _GoogleMap {
  set center(center) {
    this._center = center;
  }
  set zoom(zoom) {
    this._zoom = zoom;
  }
  set options(options) {
    this._options = options || DEFAULT_OPTIONS;
  }
  constructor(_elementRef, _ngZone, platformId) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this.height = DEFAULT_HEIGHT;
    this.width = DEFAULT_WIDTH;
    this._options = DEFAULT_OPTIONS;
    this.mapInitialized = new EventEmitter();
    this.authFailure = new EventEmitter();
    this.boundsChanged = this._eventManager.getLazyEmitter("bounds_changed");
    this.centerChanged = this._eventManager.getLazyEmitter("center_changed");
    this.mapClick = this._eventManager.getLazyEmitter("click");
    this.mapDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.mapDrag = this._eventManager.getLazyEmitter("drag");
    this.mapDragend = this._eventManager.getLazyEmitter("dragend");
    this.mapDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.headingChanged = this._eventManager.getLazyEmitter("heading_changed");
    this.idle = this._eventManager.getLazyEmitter("idle");
    this.maptypeidChanged = this._eventManager.getLazyEmitter("maptypeid_changed");
    this.mapMousemove = this._eventManager.getLazyEmitter("mousemove");
    this.mapMouseout = this._eventManager.getLazyEmitter("mouseout");
    this.mapMouseover = this._eventManager.getLazyEmitter("mouseover");
    this.projectionChanged = this._eventManager.getLazyEmitter("projection_changed");
    this.mapRightclick = this._eventManager.getLazyEmitter("rightclick");
    this.tilesloaded = this._eventManager.getLazyEmitter("tilesloaded");
    this.tiltChanged = this._eventManager.getLazyEmitter("tilt_changed");
    this.zoomChanged = this._eventManager.getLazyEmitter("zoom_changed");
    this._isBrowser = isPlatformBrowser(platformId);
    if (this._isBrowser) {
      const googleMapsWindow = window;
      if (!googleMapsWindow.google && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Namespace google not found, cannot construct embedded google map. Please install the Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript/tutorial#Loading_the_Maps_API");
      }
      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;
      googleMapsWindow.gm_authFailure = () => {
        if (this._existingAuthFailureCallback) {
          this._existingAuthFailureCallback();
        }
        this.authFailure.emit();
      };
    }
  }
  ngOnChanges(changes) {
    if (changes["height"] || changes["width"]) {
      this._setSize();
    }
    const googleMap = this.googleMap;
    if (googleMap) {
      if (changes["options"]) {
        googleMap.setOptions(this._combineOptions());
      }
      if (changes["center"] && this._center) {
        googleMap.setCenter(this._center);
      }
      if (changes["zoom"] && this._zoom != null) {
        googleMap.setZoom(this._zoom);
      }
      if (changes["mapTypeId"] && this.mapTypeId) {
        googleMap.setMapTypeId(this.mapTypeId);
      }
    }
  }
  ngOnInit() {
    if (this._isBrowser) {
      this._mapEl = this._elementRef.nativeElement.querySelector(".map-container");
      this._setSize();
      if (google.maps.Map) {
        this._initialize(google.maps.Map);
      } else {
        this._ngZone.runOutsideAngular(() => {
          google.maps.importLibrary("maps").then((lib) => this._initialize(lib.Map));
        });
      }
    }
  }
  _initialize(mapConstructor) {
    this._ngZone.runOutsideAngular(() => {
      this.googleMap = new mapConstructor(this._mapEl, this._combineOptions());
      this._eventManager.setTarget(this.googleMap);
      this.mapInitialized.emit(this.googleMap);
    });
  }
  ngOnDestroy() {
    this.mapInitialized.complete();
    this._eventManager.destroy();
    if (this._isBrowser) {
      const googleMapsWindow = window;
      googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
    }
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
   */
  fitBounds(bounds, padding) {
    this._assertInitialized();
    this.googleMap.fitBounds(bounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
   */
  panBy(x, y) {
    this._assertInitialized();
    this.googleMap.panBy(x, y);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
   */
  panTo(latLng) {
    this._assertInitialized();
    this.googleMap.panTo(latLng);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
   */
  panToBounds(latLngBounds, padding) {
    this._assertInitialized();
    this.googleMap.panToBounds(latLngBounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.googleMap.getBounds() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
   */
  getCenter() {
    this._assertInitialized();
    return this.googleMap.getCenter();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
   */
  getClickableIcons() {
    this._assertInitialized();
    return this.googleMap.getClickableIcons();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
   */
  getHeading() {
    this._assertInitialized();
    return this.googleMap.getHeading();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
   */
  getMapTypeId() {
    this._assertInitialized();
    return this.googleMap.getMapTypeId();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
   */
  getProjection() {
    this._assertInitialized();
    return this.googleMap.getProjection() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
   */
  getStreetView() {
    this._assertInitialized();
    return this.googleMap.getStreetView();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
   */
  getTilt() {
    this._assertInitialized();
    return this.googleMap.getTilt();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
   */
  getZoom() {
    this._assertInitialized();
    return this.googleMap.getZoom();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
   */
  get controls() {
    this._assertInitialized();
    return this.googleMap.controls;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
   */
  get data() {
    this._assertInitialized();
    return this.googleMap.data;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
   */
  get mapTypes() {
    this._assertInitialized();
    return this.googleMap.mapTypes;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
   */
  get overlayMapTypes() {
    this._assertInitialized();
    return this.googleMap.overlayMapTypes;
  }
  /** Returns a promise that resolves when the map has been initialized. */
  _resolveMap() {
    return this.googleMap ? Promise.resolve(this.googleMap) : this.mapInitialized.pipe(take(1)).toPromise();
  }
  _setSize() {
    if (this._mapEl) {
      const styles = this._mapEl.style;
      styles.height = this.height === null ? "" : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = this.width === null ? "" : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
  /** Combines the center and zoom and the other map options into a single object */
  _combineOptions() {
    const options = this._options || {};
    return __spreadProps(__spreadValues({}, options), {
      // It's important that we set **some** kind of `center` and `zoom`, otherwise
      // Google Maps will render a blank rectangle which looks broken.
      center: this._center || options.center || DEFAULT_OPTIONS.center,
      zoom: this._zoom ?? options.zoom ?? DEFAULT_OPTIONS.zoom,
      // Passing in an undefined `mapTypeId` seems to break tile loading
      // so make sure that we have some kind of default (see #22082).
      mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId,
      mapId: this.mapId || options.mapId
    });
  }
  /** Asserts that the map has been initialized. */
  _assertInitialized() {
    if (!this.googleMap && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Cannot access Google Map information before the API has been initialized. Please wait for the API to load before trying to interact with it.");
    }
  }
  static {
    this.\u0275fac = function GoogleMap_Factory(t) {
      return new (t || _GoogleMap)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _GoogleMap,
      selectors: [["google-map"]],
      inputs: {
        height: "height",
        width: "width",
        mapId: "mapId",
        mapTypeId: "mapTypeId",
        center: "center",
        zoom: "zoom",
        options: "options"
      },
      outputs: {
        mapInitialized: "mapInitialized",
        authFailure: "authFailure",
        boundsChanged: "boundsChanged",
        centerChanged: "centerChanged",
        mapClick: "mapClick",
        mapDblclick: "mapDblclick",
        mapDrag: "mapDrag",
        mapDragend: "mapDragend",
        mapDragstart: "mapDragstart",
        headingChanged: "headingChanged",
        idle: "idle",
        maptypeidChanged: "maptypeidChanged",
        mapMousemove: "mapMousemove",
        mapMouseout: "mapMouseout",
        mapMouseover: "mapMouseover",
        projectionChanged: "projectionChanged",
        mapRightclick: "mapRightclick",
        tilesloaded: "tilesloaded",
        tiltChanged: "tiltChanged",
        zoomChanged: "zoomChanged"
      },
      exportAs: ["googleMap"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "map-container"]],
      template: function GoogleMap_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275element(0, "div", 0);
          \u0275\u0275projection(1);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleMap, [{
    type: Component,
    args: [{
      selector: "google-map",
      exportAs: "googleMap",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content />',
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    height: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    mapId: [{
      type: Input
    }],
    mapTypeId: [{
      type: Input
    }],
    center: [{
      type: Input
    }],
    zoom: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    mapInitialized: [{
      type: Output
    }],
    authFailure: [{
      type: Output
    }],
    boundsChanged: [{
      type: Output
    }],
    centerChanged: [{
      type: Output
    }],
    mapClick: [{
      type: Output
    }],
    mapDblclick: [{
      type: Output
    }],
    mapDrag: [{
      type: Output
    }],
    mapDragend: [{
      type: Output
    }],
    mapDragstart: [{
      type: Output
    }],
    headingChanged: [{
      type: Output
    }],
    idle: [{
      type: Output
    }],
    maptypeidChanged: [{
      type: Output
    }],
    mapMousemove: [{
      type: Output
    }],
    mapMouseout: [{
      type: Output
    }],
    mapMouseover: [{
      type: Output
    }],
    projectionChanged: [{
      type: Output
    }],
    mapRightclick: [{
      type: Output
    }],
    tilesloaded: [{
      type: Output
    }],
    tiltChanged: [{
      type: Output
    }],
    zoomChanged: [{
      type: Output
    }]
  });
})();
var cssUnitsPattern = /([A-Za-z%]+)$/;
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return cssUnitsPattern.test(value) ? value : `${value}px`;
}
var MapBaseLayer = class _MapBaseLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this._initializeObject();
      });
      this._assertInitialized();
      this._setMap();
    }
  }
  ngOnDestroy() {
    this._unsetMap();
  }
  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error("Cannot access Google Map information before the API has been initialized. Please wait for the API to load before trying to interact with it.");
    }
  }
  _initializeObject() {
  }
  _setMap() {
  }
  _unsetMap() {
  }
  static {
    this.\u0275fac = function MapBaseLayer_Factory(t) {
      return new (t || _MapBaseLayer)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapBaseLayer,
      selectors: [["map-base-layer"]],
      exportAs: ["mapBaseLayer"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapBaseLayer, [{
    type: Directive,
    args: [{
      selector: "map-base-layer",
      exportAs: "mapBaseLayer",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], null);
})();
var MapBicyclingLayer = class _MapBicyclingLayer {
  constructor() {
    this._map = inject(GoogleMap);
    this._zone = inject(NgZone);
    this.bicyclingLayerInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      if (google.maps.BicyclingLayer && this._map.googleMap) {
        this._initialize(this._map.googleMap, google.maps.BicyclingLayer);
      } else {
        this._zone.runOutsideAngular(() => {
          Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
            this._initialize(map2, lib.BicyclingLayer);
          });
        });
      }
    }
  }
  _initialize(map2, layerConstructor) {
    this._zone.runOutsideAngular(() => {
      this.bicyclingLayer = new layerConstructor();
      this.bicyclingLayerInitialized.emit(this.bicyclingLayer);
      this._assertLayerInitialized();
      this.bicyclingLayer.setMap(map2);
    });
  }
  ngOnDestroy() {
    this.bicyclingLayer?.setMap(null);
  }
  _assertLayerInitialized() {
    if (!this.bicyclingLayer) {
      throw Error("Cannot interact with a Google Map Bicycling Layer before it has been initialized. Please wait for the Transit Layer to load before trying to interact with it.");
    }
  }
  static {
    this.\u0275fac = function MapBicyclingLayer_Factory(t) {
      return new (t || _MapBicyclingLayer)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapBicyclingLayer,
      selectors: [["map-bicycling-layer"]],
      outputs: {
        bicyclingLayerInitialized: "bicyclingLayerInitialized"
      },
      exportAs: ["mapBicyclingLayer"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapBicyclingLayer, [{
    type: Directive,
    args: [{
      selector: "map-bicycling-layer",
      exportAs: "mapBicyclingLayer",
      standalone: true
    }]
  }], null, {
    bicyclingLayerInitialized: [{
      type: Output
    }]
  });
})();
var MapCircle = class _MapCircle {
  set options(options) {
    this._options.next(options || {});
  }
  set center(center) {
    this._center.next(center);
  }
  set radius(radius) {
    this._radius.next(radius);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._options = new BehaviorSubject({});
    this._center = new BehaviorSubject(void 0);
    this._radius = new BehaviorSubject(void 0);
    this._destroyed = new Subject();
    this.centerChanged = this._eventManager.getLazyEmitter("center_changed");
    this.circleClick = this._eventManager.getLazyEmitter("click");
    this.circleDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.circleDrag = this._eventManager.getLazyEmitter("drag");
    this.circleDragend = this._eventManager.getLazyEmitter("dragend");
    this.circleDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.circleMousedown = this._eventManager.getLazyEmitter("mousedown");
    this.circleMousemove = this._eventManager.getLazyEmitter("mousemove");
    this.circleMouseout = this._eventManager.getLazyEmitter("mouseout");
    this.circleMouseover = this._eventManager.getLazyEmitter("mouseover");
    this.circleMouseup = this._eventManager.getLazyEmitter("mouseup");
    this.radiusChanged = this._eventManager.getLazyEmitter("radius_changed");
    this.circleRightclick = this._eventManager.getLazyEmitter("rightclick");
    this.circleInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (!this._map._isBrowser) {
      return;
    }
    this._combineOptions().pipe(take(1)).subscribe((options) => {
      if (google.maps.Circle && this._map.googleMap) {
        this._initialize(this._map.googleMap, google.maps.Circle, options);
      } else {
        this._ngZone.runOutsideAngular(() => {
          Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
            this._initialize(map2, lib.Circle, options);
          });
        });
      }
    });
  }
  _initialize(map2, circleConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.circle = new circleConstructor(options);
      this._assertInitialized();
      this.circle.setMap(map2);
      this._eventManager.setTarget(this.circle);
      this.circleInitialized.emit(this.circle);
      this._watchForOptionsChanges();
      this._watchForCenterChanges();
      this._watchForRadiusChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.circle?.setMap(null);
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.circle.getBounds();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
   */
  getCenter() {
    this._assertInitialized();
    return this.circle.getCenter();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.circle.getDraggable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.circle.getEditable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
   */
  getRadius() {
    this._assertInitialized();
    return this.circle.getRadius();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.circle.getVisible();
  }
  _combineOptions() {
    return combineLatest([this._options, this._center, this._radius]).pipe(map(([options, center, radius]) => {
      const combinedOptions = __spreadProps(__spreadValues({}, options), {
        center: center || options.center,
        radius: radius !== void 0 ? radius : options.radius
      });
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe(takeUntil(this._destroyed)).subscribe((options) => {
      this._assertInitialized();
      this.circle.setOptions(options);
    });
  }
  _watchForCenterChanges() {
    this._center.pipe(takeUntil(this._destroyed)).subscribe((center) => {
      if (center) {
        this._assertInitialized();
        this.circle.setCenter(center);
      }
    });
  }
  _watchForRadiusChanges() {
    this._radius.pipe(takeUntil(this._destroyed)).subscribe((radius) => {
      if (radius !== void 0) {
        this._assertInitialized();
        this.circle.setRadius(radius);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.circle) {
        throw Error("Cannot interact with a Google Map Circle before it has been initialized. Please wait for the Circle to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapCircle_Factory(t) {
      return new (t || _MapCircle)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapCircle,
      selectors: [["map-circle"]],
      inputs: {
        options: "options",
        center: "center",
        radius: "radius"
      },
      outputs: {
        centerChanged: "centerChanged",
        circleClick: "circleClick",
        circleDblclick: "circleDblclick",
        circleDrag: "circleDrag",
        circleDragend: "circleDragend",
        circleDragstart: "circleDragstart",
        circleMousedown: "circleMousedown",
        circleMousemove: "circleMousemove",
        circleMouseout: "circleMouseout",
        circleMouseover: "circleMouseover",
        circleMouseup: "circleMouseup",
        radiusChanged: "radiusChanged",
        circleRightclick: "circleRightclick",
        circleInitialized: "circleInitialized"
      },
      exportAs: ["mapCircle"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapCircle, [{
    type: Directive,
    args: [{
      selector: "map-circle",
      exportAs: "mapCircle",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    center: [{
      type: Input
    }],
    radius: [{
      type: Input
    }],
    centerChanged: [{
      type: Output
    }],
    circleClick: [{
      type: Output
    }],
    circleDblclick: [{
      type: Output
    }],
    circleDrag: [{
      type: Output
    }],
    circleDragend: [{
      type: Output
    }],
    circleDragstart: [{
      type: Output
    }],
    circleMousedown: [{
      type: Output
    }],
    circleMousemove: [{
      type: Output
    }],
    circleMouseout: [{
      type: Output
    }],
    circleMouseover: [{
      type: Output
    }],
    circleMouseup: [{
      type: Output
    }],
    radiusChanged: [{
      type: Output
    }],
    circleRightclick: [{
      type: Output
    }],
    circleInitialized: [{
      type: Output
    }]
  });
})();
var MapDirectionsRenderer = class _MapDirectionsRenderer {
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */
  set directions(directions) {
    this._directions = directions;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions
   */
  set options(options) {
    this._options = options;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this.directionsChanged = this._eventManager.getLazyEmitter("directions_changed");
    this.directionsRendererInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (google.maps.DirectionsRenderer && this._googleMap.googleMap) {
        this._initialize(this._googleMap.googleMap, google.maps.DirectionsRenderer);
      } else {
        this._ngZone.runOutsideAngular(() => {
          Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary("routes")]).then(([map2, lib]) => {
            this._initialize(map2, lib.DirectionsRenderer);
          });
        });
      }
    }
  }
  _initialize(map2, rendererConstructor) {
    this._ngZone.runOutsideAngular(() => {
      this.directionsRenderer = new rendererConstructor(this._combineOptions());
      this._assertInitialized();
      this.directionsRenderer.setMap(map2);
      this._eventManager.setTarget(this.directionsRenderer);
      this.directionsRendererInitialized.emit(this.directionsRenderer);
    });
  }
  ngOnChanges(changes) {
    if (this.directionsRenderer) {
      if (changes["options"]) {
        this.directionsRenderer.setOptions(this._combineOptions());
      }
      if (changes["directions"] && this._directions !== void 0) {
        this.directionsRenderer.setDirections(this._directions);
      }
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this.directionsRenderer?.setMap(null);
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getDirections
   */
  getDirections() {
    this._assertInitialized();
    return this.directionsRenderer.getDirections();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getPanel
   */
  getPanel() {
    this._assertInitialized();
    return this.directionsRenderer.getPanel();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getRouteIndex
   */
  getRouteIndex() {
    this._assertInitialized();
    return this.directionsRenderer.getRouteIndex();
  }
  _combineOptions() {
    const options = this._options || {};
    return __spreadProps(__spreadValues({}, options), {
      directions: this._directions || options.directions,
      map: this._googleMap.googleMap
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.directionsRenderer) {
        throw Error("Cannot interact with a Google Map Directions Renderer before it has been initialized. Please wait for the Directions Renderer to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapDirectionsRenderer_Factory(t) {
      return new (t || _MapDirectionsRenderer)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapDirectionsRenderer,
      selectors: [["map-directions-renderer"]],
      inputs: {
        directions: "directions",
        options: "options"
      },
      outputs: {
        directionsChanged: "directionsChanged",
        directionsRendererInitialized: "directionsRendererInitialized"
      },
      exportAs: ["mapDirectionsRenderer"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapDirectionsRenderer, [{
    type: Directive,
    args: [{
      selector: "map-directions-renderer",
      exportAs: "mapDirectionsRenderer",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    directions: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    directionsChanged: [{
      type: Output
    }],
    directionsRendererInitialized: [{
      type: Output
    }]
  });
})();
var MapGroundOverlay = class _MapGroundOverlay {
  /** URL of the image that will be shown in the overlay. */
  set url(url) {
    this._url.next(url);
  }
  /** Bounds for the overlay. */
  get bounds() {
    return this._bounds.value;
  }
  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  /** Opacity of the overlay. */
  set opacity(opacity) {
    this._opacity.next(opacity);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._opacity = new BehaviorSubject(1);
    this._url = new BehaviorSubject("");
    this._bounds = new BehaviorSubject(void 0);
    this._destroyed = new Subject();
    this.clickable = false;
    this.mapClick = this._eventManager.getLazyEmitter("click");
    this.mapDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.groundOverlayInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._bounds.pipe(takeUntil(this._destroyed)).subscribe((bounds) => {
        if (this.groundOverlay) {
          this.groundOverlay.setMap(null);
          this.groundOverlay = void 0;
        }
        if (!bounds) {
          return;
        }
        if (google.maps.GroundOverlay && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.GroundOverlay, bounds);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
              this._initialize(map2, lib.GroundOverlay, bounds);
            });
          });
        }
      });
    }
  }
  _initialize(map2, overlayConstructor, bounds) {
    this._ngZone.runOutsideAngular(() => {
      this.groundOverlay = new overlayConstructor(this._url.getValue(), bounds, {
        clickable: this.clickable,
        opacity: this._opacity.value
      });
      this._assertInitialized();
      this.groundOverlay.setMap(map2);
      this._eventManager.setTarget(this.groundOverlay);
      this.groundOverlayInitialized.emit(this.groundOverlay);
      if (!this._hasWatchers) {
        this._hasWatchers = true;
        this._watchForOpacityChanges();
        this._watchForUrlChanges();
      }
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.groundOverlay?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.groundOverlay.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getOpacity
   */
  getOpacity() {
    this._assertInitialized();
    return this.groundOverlay.getOpacity();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getUrl
   */
  getUrl() {
    this._assertInitialized();
    return this.groundOverlay.getUrl();
  }
  _watchForOpacityChanges() {
    this._opacity.pipe(takeUntil(this._destroyed)).subscribe((opacity) => {
      if (opacity != null) {
        this.groundOverlay?.setOpacity(opacity);
      }
    });
  }
  _watchForUrlChanges() {
    this._url.pipe(takeUntil(this._destroyed)).subscribe((url) => {
      const overlay = this.groundOverlay;
      if (overlay) {
        overlay.set("url", url);
        overlay.setMap(null);
        overlay.setMap(this._map.googleMap);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.groundOverlay) {
        throw Error("Cannot interact with a Google Map GroundOverlay before it has been initialized. Please wait for the GroundOverlay to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapGroundOverlay_Factory(t) {
      return new (t || _MapGroundOverlay)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapGroundOverlay,
      selectors: [["map-ground-overlay"]],
      inputs: {
        url: "url",
        bounds: "bounds",
        clickable: "clickable",
        opacity: "opacity"
      },
      outputs: {
        mapClick: "mapClick",
        mapDblclick: "mapDblclick",
        groundOverlayInitialized: "groundOverlayInitialized"
      },
      exportAs: ["mapGroundOverlay"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapGroundOverlay, [{
    type: Directive,
    args: [{
      selector: "map-ground-overlay",
      exportAs: "mapGroundOverlay",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    url: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    clickable: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    mapClick: [{
      type: Output
    }],
    mapDblclick: [{
      type: Output
    }],
    groundOverlayInitialized: [{
      type: Output
    }]
  });
})();
var MapInfoWindow = class _MapInfoWindow {
  set options(options) {
    this._options.next(options || {});
  }
  set position(position) {
    this._position.next(position);
  }
  constructor(_googleMap, _elementRef, _ngZone) {
    this._googleMap = _googleMap;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._options = new BehaviorSubject({});
    this._position = new BehaviorSubject(void 0);
    this._destroy = new Subject();
    this.closeclick = this._eventManager.getLazyEmitter("closeclick");
    this.contentChanged = this._eventManager.getLazyEmitter("content_changed");
    this.domready = this._eventManager.getLazyEmitter("domready");
    this.positionChanged = this._eventManager.getLazyEmitter("position_changed");
    this.zindexChanged = this._eventManager.getLazyEmitter("zindex_changed");
    this.infoWindowInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      this._combineOptions().pipe(take(1)).subscribe((options) => {
        if (google.maps.InfoWindow) {
          this._initialize(google.maps.InfoWindow, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            google.maps.importLibrary("maps").then((lib) => {
              this._initialize(lib.InfoWindow, options);
            });
          });
        }
      });
    }
  }
  _initialize(infoWindowConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.infoWindow = new infoWindowConstructor(options);
      this._eventManager.setTarget(this.infoWindow);
      this.infoWindowInitialized.emit(this.infoWindow);
      this._watchForOptionsChanges();
      this._watchForPositionChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroy.next();
    this._destroy.complete();
    if (this.infoWindow) {
      this.close();
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
   */
  close() {
    this._assertInitialized();
    this.infoWindow.close();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
   */
  getContent() {
    this._assertInitialized();
    return this.infoWindow.getContent() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.getPosition
   */
  getPosition() {
    this._assertInitialized();
    return this.infoWindow.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.infoWindow.getZIndex();
  }
  /**
   * Opens the MapInfoWindow using the provided AdvancedMarkerElement.
   * @deprecated Use the `open` method instead.
   * @breaking-change 20.0.0
   */
  openAdvancedMarkerElement(advancedMarkerElement, content) {
    this.open({
      getAnchor: () => advancedMarkerElement
    }, void 0, content);
  }
  /**
   * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
   * then the position property of the options input is used instead.
   */
  open(anchor, shouldFocus, content) {
    this._assertInitialized();
    if ((typeof ngDevMode === "undefined" || ngDevMode) && anchor && !anchor.getAnchor) {
      throw new Error("Specified anchor does not implement the `getAnchor` method. It cannot be used to open an info window.");
    }
    const anchorObject = anchor ? anchor.getAnchor() : void 0;
    if (this.infoWindow.get("anchor") !== anchorObject || !anchorObject) {
      this._elementRef.nativeElement.style.display = "";
      if (content) {
        this.infoWindow.setContent(content);
      }
      this.infoWindow.open({
        map: this._googleMap.googleMap,
        anchor: anchorObject,
        shouldFocus
      });
    }
  }
  _combineOptions() {
    return combineLatest([this._options, this._position]).pipe(map(([options, position]) => {
      const combinedOptions = __spreadProps(__spreadValues({}, options), {
        position: position || options.position,
        content: this._elementRef.nativeElement
      });
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe(takeUntil(this._destroy)).subscribe((options) => {
      this._assertInitialized();
      this.infoWindow.setOptions(options);
    });
  }
  _watchForPositionChanges() {
    this._position.pipe(takeUntil(this._destroy)).subscribe((position) => {
      if (position) {
        this._assertInitialized();
        this.infoWindow.setPosition(position);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.infoWindow) {
        throw Error("Cannot interact with a Google Map Info Window before it has been initialized. Please wait for the Info Window to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapInfoWindow_Factory(t) {
      return new (t || _MapInfoWindow)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapInfoWindow,
      selectors: [["map-info-window"]],
      hostAttrs: [2, "display", "none"],
      inputs: {
        options: "options",
        position: "position"
      },
      outputs: {
        closeclick: "closeclick",
        contentChanged: "contentChanged",
        domready: "domready",
        positionChanged: "positionChanged",
        zindexChanged: "zindexChanged",
        infoWindowInitialized: "infoWindowInitialized"
      },
      exportAs: ["mapInfoWindow"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapInfoWindow, [{
    type: Directive,
    args: [{
      selector: "map-info-window",
      exportAs: "mapInfoWindow",
      standalone: true,
      host: {
        "style": "display: none"
      }
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    closeclick: [{
      type: Output
    }],
    contentChanged: [{
      type: Output
    }],
    domready: [{
      type: Output
    }],
    positionChanged: [{
      type: Output
    }],
    zindexChanged: [{
      type: Output
    }],
    infoWindowInitialized: [{
      type: Output
    }]
  });
})();
var MapKmlLayer = class _MapKmlLayer {
  set options(options) {
    this._options.next(options || {});
  }
  set url(url) {
    this._url.next(url);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._options = new BehaviorSubject({});
    this._url = new BehaviorSubject("");
    this._destroyed = new Subject();
    this.kmlClick = this._eventManager.getLazyEmitter("click");
    this.defaultviewportChanged = this._eventManager.getLazyEmitter("defaultviewport_changed");
    this.statusChanged = this._eventManager.getLazyEmitter("status_changed");
    this.kmlLayerInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe(take(1)).subscribe((options) => {
        if (google.maps.KmlLayer && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.KmlLayer, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
              this._initialize(map2, lib.KmlLayer, options);
            });
          });
        }
      });
    }
  }
  _initialize(map2, layerConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.kmlLayer = new layerConstructor(options);
      this._assertInitialized();
      this.kmlLayer.setMap(map2);
      this._eventManager.setTarget(this.kmlLayer);
      this.kmlLayerInitialized.emit(this.kmlLayer);
      this._watchForOptionsChanges();
      this._watchForUrlChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.kmlLayer?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
   */
  getDefaultViewport() {
    this._assertInitialized();
    return this.kmlLayer.getDefaultViewport();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
   */
  getMetadata() {
    this._assertInitialized();
    return this.kmlLayer.getMetadata();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
   */
  getStatus() {
    this._assertInitialized();
    return this.kmlLayer.getStatus();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
   */
  getUrl() {
    this._assertInitialized();
    return this.kmlLayer.getUrl();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.kmlLayer.getZIndex();
  }
  _combineOptions() {
    return combineLatest([this._options, this._url]).pipe(map(([options, url]) => {
      const combinedOptions = __spreadProps(__spreadValues({}, options), {
        url: url || options.url
      });
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe(takeUntil(this._destroyed)).subscribe((options) => {
      if (this.kmlLayer) {
        this._assertInitialized();
        this.kmlLayer.setOptions(options);
      }
    });
  }
  _watchForUrlChanges() {
    this._url.pipe(takeUntil(this._destroyed)).subscribe((url) => {
      if (url && this.kmlLayer) {
        this._assertInitialized();
        this.kmlLayer.setUrl(url);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.kmlLayer) {
        throw Error("Cannot interact with a Google Map KmlLayer before it has been initialized. Please wait for the KmlLayer to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapKmlLayer_Factory(t) {
      return new (t || _MapKmlLayer)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapKmlLayer,
      selectors: [["map-kml-layer"]],
      inputs: {
        options: "options",
        url: "url"
      },
      outputs: {
        kmlClick: "kmlClick",
        defaultviewportChanged: "defaultviewportChanged",
        statusChanged: "statusChanged",
        kmlLayerInitialized: "kmlLayerInitialized"
      },
      exportAs: ["mapKmlLayer"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapKmlLayer, [{
    type: Directive,
    args: [{
      selector: "map-kml-layer",
      exportAs: "mapKmlLayer",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    kmlClick: [{
      type: Output
    }],
    defaultviewportChanged: [{
      type: Output
    }],
    statusChanged: [{
      type: Output
    }],
    kmlLayerInitialized: [{
      type: Output
    }]
  });
})();
var DEFAULT_MARKER_OPTIONS$1 = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
var MapMarker = class _MapMarker {
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */
  set title(title) {
    this._title = title;
  }
  /**
   * Position of the marker. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
   */
  set position(position) {
    this._position = position;
  }
  /**
   * Label for the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
   */
  set label(label) {
    this._label = label;
  }
  /**
   * Whether the marker is clickable. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
   */
  set clickable(clickable) {
    this._clickable = clickable;
  }
  /**
   * Options used to configure the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
   */
  set options(options) {
    this._options = options;
  }
  /**
   * Icon to be used for the marker.
   * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
   */
  set icon(icon) {
    this._icon = icon;
  }
  /**
   * Whether the marker is visible.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
   */
  set visible(value) {
    this._visible = value;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this.animationChanged = this._eventManager.getLazyEmitter("animation_changed");
    this.mapClick = this._eventManager.getLazyEmitter("click");
    this.clickableChanged = this._eventManager.getLazyEmitter("clickable_changed");
    this.cursorChanged = this._eventManager.getLazyEmitter("cursor_changed");
    this.mapDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.mapDrag = this._eventManager.getLazyEmitter("drag");
    this.mapDragend = this._eventManager.getLazyEmitter("dragend");
    this.draggableChanged = this._eventManager.getLazyEmitter("draggable_changed");
    this.mapDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.flatChanged = this._eventManager.getLazyEmitter("flat_changed");
    this.iconChanged = this._eventManager.getLazyEmitter("icon_changed");
    this.mapMousedown = this._eventManager.getLazyEmitter("mousedown");
    this.mapMouseout = this._eventManager.getLazyEmitter("mouseout");
    this.mapMouseover = this._eventManager.getLazyEmitter("mouseover");
    this.mapMouseup = this._eventManager.getLazyEmitter("mouseup");
    this.positionChanged = this._eventManager.getLazyEmitter("position_changed");
    this.mapRightclick = this._eventManager.getLazyEmitter("rightclick");
    this.shapeChanged = this._eventManager.getLazyEmitter("shape_changed");
    this.titleChanged = this._eventManager.getLazyEmitter("title_changed");
    this.visibleChanged = this._eventManager.getLazyEmitter("visible_changed");
    this.zindexChanged = this._eventManager.getLazyEmitter("zindex_changed");
    this.markerInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (!this._googleMap._isBrowser) {
      return;
    }
    if (google.maps.Marker && this._googleMap.googleMap) {
      this._initialize(this._googleMap.googleMap, google.maps.Marker);
    } else {
      this._ngZone.runOutsideAngular(() => {
        Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary("marker")]).then(([map2, lib]) => {
          this._initialize(map2, lib.Marker);
        });
      });
    }
  }
  _initialize(map2, markerConstructor) {
    this._ngZone.runOutsideAngular(() => {
      this.marker = new markerConstructor(this._combineOptions());
      this._assertInitialized();
      this.marker.setMap(map2);
      this._eventManager.setTarget(this.marker);
      this.markerInitialized.next(this.marker);
    });
  }
  ngOnChanges(changes) {
    const {
      marker,
      _title,
      _position,
      _label,
      _clickable,
      _icon,
      _visible
    } = this;
    if (marker) {
      if (changes["options"]) {
        marker.setOptions(this._combineOptions());
      }
      if (changes["title"] && _title !== void 0) {
        marker.setTitle(_title);
      }
      if (changes["position"] && _position) {
        marker.setPosition(_position);
      }
      if (changes["label"] && _label !== void 0) {
        marker.setLabel(_label);
      }
      if (changes["clickable"] && _clickable !== void 0) {
        marker.setClickable(_clickable);
      }
      if (changes["icon"] && _icon) {
        marker.setIcon(_icon);
      }
      if (changes["visible"] && _visible !== void 0) {
        marker.setVisible(_visible);
      }
    }
  }
  ngOnDestroy() {
    this.markerInitialized.complete();
    this._eventManager.destroy();
    this.marker?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
   */
  getAnimation() {
    this._assertInitialized();
    return this.marker.getAnimation() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
   */
  getClickable() {
    this._assertInitialized();
    return this.marker.getClickable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
   */
  getCursor() {
    this._assertInitialized();
    return this.marker.getCursor() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return !!this.marker.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
   */
  getIcon() {
    this._assertInitialized();
    return this.marker.getIcon() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
   */
  getLabel() {
    this._assertInitialized();
    return this.marker.getLabel() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
   */
  getOpacity() {
    this._assertInitialized();
    return this.marker.getOpacity() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
   */
  getPosition() {
    this._assertInitialized();
    return this.marker.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
   */
  getShape() {
    this._assertInitialized();
    return this.marker.getShape() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
   */
  getTitle() {
    this._assertInitialized();
    return this.marker.getTitle() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.marker.getVisible();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.marker.getZIndex() || null;
  }
  /** Gets the anchor point that can be used to attach other Google Maps objects. */
  getAnchor() {
    this._assertInitialized();
    return this.marker;
  }
  /** Returns a promise that resolves when the marker has been initialized. */
  _resolveMarker() {
    return this.marker ? Promise.resolve(this.marker) : this.markerInitialized.pipe(take(1)).toPromise();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS$1;
    return __spreadProps(__spreadValues({}, options), {
      title: this._title || options.title,
      position: this._position || options.position,
      label: this._label || options.label,
      clickable: this._clickable ?? options.clickable,
      map: this._googleMap.googleMap,
      icon: this._icon || options.icon,
      visible: this._visible ?? options.visible
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.marker) {
        throw Error("Cannot interact with a Google Map Marker before it has been initialized. Please wait for the Marker to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapMarker_Factory(t) {
      return new (t || _MapMarker)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapMarker,
      selectors: [["map-marker"]],
      inputs: {
        title: "title",
        position: "position",
        label: "label",
        clickable: "clickable",
        options: "options",
        icon: "icon",
        visible: "visible"
      },
      outputs: {
        animationChanged: "animationChanged",
        mapClick: "mapClick",
        clickableChanged: "clickableChanged",
        cursorChanged: "cursorChanged",
        mapDblclick: "mapDblclick",
        mapDrag: "mapDrag",
        mapDragend: "mapDragend",
        draggableChanged: "draggableChanged",
        mapDragstart: "mapDragstart",
        flatChanged: "flatChanged",
        iconChanged: "iconChanged",
        mapMousedown: "mapMousedown",
        mapMouseout: "mapMouseout",
        mapMouseover: "mapMouseover",
        mapMouseup: "mapMouseup",
        positionChanged: "positionChanged",
        mapRightclick: "mapRightclick",
        shapeChanged: "shapeChanged",
        titleChanged: "titleChanged",
        visibleChanged: "visibleChanged",
        zindexChanged: "zindexChanged",
        markerInitialized: "markerInitialized"
      },
      exportAs: ["mapMarker"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapMarker, [{
    type: Directive,
    args: [{
      selector: "map-marker",
      exportAs: "mapMarker",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    title: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    clickable: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    animationChanged: [{
      type: Output
    }],
    mapClick: [{
      type: Output
    }],
    clickableChanged: [{
      type: Output
    }],
    cursorChanged: [{
      type: Output
    }],
    mapDblclick: [{
      type: Output
    }],
    mapDrag: [{
      type: Output
    }],
    mapDragend: [{
      type: Output
    }],
    draggableChanged: [{
      type: Output
    }],
    mapDragstart: [{
      type: Output
    }],
    flatChanged: [{
      type: Output
    }],
    iconChanged: [{
      type: Output
    }],
    mapMousedown: [{
      type: Output
    }],
    mapMouseout: [{
      type: Output
    }],
    mapMouseover: [{
      type: Output
    }],
    mapMouseup: [{
      type: Output
    }],
    positionChanged: [{
      type: Output
    }],
    mapRightclick: [{
      type: Output
    }],
    shapeChanged: [{
      type: Output
    }],
    titleChanged: [{
      type: Output
    }],
    visibleChanged: [{
      type: Output
    }],
    zindexChanged: [{
      type: Output
    }],
    markerInitialized: [{
      type: Output
    }]
  });
})();
var DEFAULT_CLUSTERER_OPTIONS = {};
var MapMarkerClusterer = class _MapMarkerClusterer {
  set averageCenter(averageCenter) {
    this._averageCenter = averageCenter;
  }
  set batchSizeIE(batchSizeIE) {
    this._batchSizeIE = batchSizeIE;
  }
  set calculator(calculator) {
    this._calculator = calculator;
  }
  set clusterClass(clusterClass) {
    this._clusterClass = clusterClass;
  }
  set enableRetinaIcons(enableRetinaIcons) {
    this._enableRetinaIcons = enableRetinaIcons;
  }
  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }
  set ignoreHidden(ignoreHidden) {
    this._ignoreHidden = ignoreHidden;
  }
  set imageExtension(imageExtension) {
    this._imageExtension = imageExtension;
  }
  set imagePath(imagePath) {
    this._imagePath = imagePath;
  }
  set imageSizes(imageSizes) {
    this._imageSizes = imageSizes;
  }
  set maxZoom(maxZoom) {
    this._maxZoom = maxZoom;
  }
  set minimumClusterSize(minimumClusterSize) {
    this._minimumClusterSize = minimumClusterSize;
  }
  set styles(styles) {
    this._styles = styles;
  }
  set title(title) {
    this._title = title;
  }
  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }
  set zoomOnClick(zoomOnClick) {
    this._zoomOnClick = zoomOnClick;
  }
  set options(options) {
    this._options = options;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._currentMarkers = /* @__PURE__ */ new Set();
    this._eventManager = new MapEventManager(inject(NgZone));
    this._destroy = new Subject();
    this.ariaLabelFn = () => "";
    this.clusteringbegin = this._eventManager.getLazyEmitter("clusteringbegin");
    this.clusteringend = this._eventManager.getLazyEmitter("clusteringend");
    this.clusterClick = this._eventManager.getLazyEmitter("click");
    this.markerClustererInitialized = new EventEmitter();
    this._canInitialize = _googleMap._isBrowser;
  }
  ngOnInit() {
    if (this._canInitialize) {
      this._ngZone.runOutsideAngular(() => {
        this._googleMap._resolveMap().then((map2) => {
          if (typeof MarkerClusterer !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error("MarkerClusterer class not found, cannot construct a marker cluster. Please install the MarkerClustererPlus library: https://github.com/googlemaps/js-markerclustererplus");
          }
          this.markerClusterer = this._ngZone.runOutsideAngular(() => {
            return new MarkerClusterer(map2, [], this._combineOptions());
          });
          this._assertInitialized();
          this._eventManager.setTarget(this.markerClusterer);
          this.markerClustererInitialized.emit(this.markerClusterer);
        });
      });
    }
  }
  ngAfterContentInit() {
    if (this._canInitialize) {
      if (this.markerClusterer) {
        this._watchForMarkerChanges();
      } else {
        this.markerClustererInitialized.pipe(take(1), takeUntil(this._destroy)).subscribe(() => this._watchForMarkerChanges());
      }
    }
  }
  ngOnChanges(changes) {
    const {
      markerClusterer: clusterer,
      ariaLabelFn,
      _averageCenter,
      _batchSizeIE,
      _calculator,
      _styles,
      _clusterClass,
      _enableRetinaIcons,
      _gridSize,
      _ignoreHidden,
      _imageExtension,
      _imagePath,
      _imageSizes,
      _maxZoom,
      _minimumClusterSize,
      _title,
      _zIndex,
      _zoomOnClick
    } = this;
    if (clusterer) {
      if (changes["options"]) {
        clusterer.setOptions(this._combineOptions());
      }
      if (changes["ariaLabelFn"]) {
        clusterer.ariaLabelFn = ariaLabelFn;
      }
      if (changes["averageCenter"] && _averageCenter !== void 0) {
        clusterer.setAverageCenter(_averageCenter);
      }
      if (changes["batchSizeIE"] && _batchSizeIE !== void 0) {
        clusterer.setBatchSizeIE(_batchSizeIE);
      }
      if (changes["calculator"] && !!_calculator) {
        clusterer.setCalculator(_calculator);
      }
      if (changes["clusterClass"] && _clusterClass !== void 0) {
        clusterer.setClusterClass(_clusterClass);
      }
      if (changes["enableRetinaIcons"] && _enableRetinaIcons !== void 0) {
        clusterer.setEnableRetinaIcons(_enableRetinaIcons);
      }
      if (changes["gridSize"] && _gridSize !== void 0) {
        clusterer.setGridSize(_gridSize);
      }
      if (changes["ignoreHidden"] && _ignoreHidden !== void 0) {
        clusterer.setIgnoreHidden(_ignoreHidden);
      }
      if (changes["imageExtension"] && _imageExtension !== void 0) {
        clusterer.setImageExtension(_imageExtension);
      }
      if (changes["imagePath"] && _imagePath !== void 0) {
        clusterer.setImagePath(_imagePath);
      }
      if (changes["imageSizes"] && _imageSizes) {
        clusterer.setImageSizes(_imageSizes);
      }
      if (changes["maxZoom"] && _maxZoom !== void 0) {
        clusterer.setMaxZoom(_maxZoom);
      }
      if (changes["minimumClusterSize"] && _minimumClusterSize !== void 0) {
        clusterer.setMinimumClusterSize(_minimumClusterSize);
      }
      if (changes["styles"] && _styles) {
        clusterer.setStyles(_styles);
      }
      if (changes["title"] && _title !== void 0) {
        clusterer.setTitle(_title);
      }
      if (changes["zIndex"] && _zIndex !== void 0) {
        clusterer.setZIndex(_zIndex);
      }
      if (changes["zoomOnClick"] && _zoomOnClick !== void 0) {
        clusterer.setZoomOnClick(_zoomOnClick);
      }
    }
  }
  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
    this._eventManager.destroy();
    this.markerClusterer?.setMap(null);
  }
  fitMapToMarkers(padding) {
    this._assertInitialized();
    this.markerClusterer.fitMapToMarkers(padding);
  }
  getAverageCenter() {
    this._assertInitialized();
    return this.markerClusterer.getAverageCenter();
  }
  getBatchSizeIE() {
    this._assertInitialized();
    return this.markerClusterer.getBatchSizeIE();
  }
  getCalculator() {
    this._assertInitialized();
    return this.markerClusterer.getCalculator();
  }
  getClusterClass() {
    this._assertInitialized();
    return this.markerClusterer.getClusterClass();
  }
  getClusters() {
    this._assertInitialized();
    return this.markerClusterer.getClusters();
  }
  getEnableRetinaIcons() {
    this._assertInitialized();
    return this.markerClusterer.getEnableRetinaIcons();
  }
  getGridSize() {
    this._assertInitialized();
    return this.markerClusterer.getGridSize();
  }
  getIgnoreHidden() {
    this._assertInitialized();
    return this.markerClusterer.getIgnoreHidden();
  }
  getImageExtension() {
    this._assertInitialized();
    return this.markerClusterer.getImageExtension();
  }
  getImagePath() {
    this._assertInitialized();
    return this.markerClusterer.getImagePath();
  }
  getImageSizes() {
    this._assertInitialized();
    return this.markerClusterer.getImageSizes();
  }
  getMaxZoom() {
    this._assertInitialized();
    return this.markerClusterer.getMaxZoom();
  }
  getMinimumClusterSize() {
    this._assertInitialized();
    return this.markerClusterer.getMinimumClusterSize();
  }
  getStyles() {
    this._assertInitialized();
    return this.markerClusterer.getStyles();
  }
  getTitle() {
    this._assertInitialized();
    return this.markerClusterer.getTitle();
  }
  getTotalClusters() {
    this._assertInitialized();
    return this.markerClusterer.getTotalClusters();
  }
  getTotalMarkers() {
    this._assertInitialized();
    return this.markerClusterer.getTotalMarkers();
  }
  getZIndex() {
    this._assertInitialized();
    return this.markerClusterer.getZIndex();
  }
  getZoomOnClick() {
    this._assertInitialized();
    return this.markerClusterer.getZoomOnClick();
  }
  _combineOptions() {
    const options = this._options || DEFAULT_CLUSTERER_OPTIONS;
    return __spreadProps(__spreadValues({}, options), {
      ariaLabelFn: this.ariaLabelFn ?? options.ariaLabelFn,
      averageCenter: this._averageCenter ?? options.averageCenter,
      batchSize: this.batchSize ?? options.batchSize,
      batchSizeIE: this._batchSizeIE ?? options.batchSizeIE,
      calculator: this._calculator ?? options.calculator,
      clusterClass: this._clusterClass ?? options.clusterClass,
      enableRetinaIcons: this._enableRetinaIcons ?? options.enableRetinaIcons,
      gridSize: this._gridSize ?? options.gridSize,
      ignoreHidden: this._ignoreHidden ?? options.ignoreHidden,
      imageExtension: this._imageExtension ?? options.imageExtension,
      imagePath: this._imagePath ?? options.imagePath,
      imageSizes: this._imageSizes ?? options.imageSizes,
      maxZoom: this._maxZoom ?? options.maxZoom,
      minimumClusterSize: this._minimumClusterSize ?? options.minimumClusterSize,
      styles: this._styles ?? options.styles,
      title: this._title ?? options.title,
      zIndex: this._zIndex ?? options.zIndex,
      zoomOnClick: this._zoomOnClick ?? options.zoomOnClick
    });
  }
  _watchForMarkerChanges() {
    this._assertInitialized();
    this._ngZone.runOutsideAngular(() => {
      this._getInternalMarkers(this._markers).then((markers) => {
        const initialMarkers = [];
        for (const marker of markers) {
          this._currentMarkers.add(marker);
          initialMarkers.push(marker);
        }
        this.markerClusterer.addMarkers(initialMarkers);
      });
    });
    this._markers.changes.pipe(takeUntil(this._destroy)).subscribe((markerComponents) => {
      this._assertInitialized();
      this._ngZone.runOutsideAngular(() => {
        this._getInternalMarkers(markerComponents).then((markers) => {
          const newMarkers = new Set(markers);
          const markersToAdd = [];
          const markersToRemove = [];
          for (const marker of Array.from(newMarkers)) {
            if (!this._currentMarkers.has(marker)) {
              this._currentMarkers.add(marker);
              markersToAdd.push(marker);
            }
          }
          for (const marker of Array.from(this._currentMarkers)) {
            if (!newMarkers.has(marker)) {
              markersToRemove.push(marker);
            }
          }
          this.markerClusterer.addMarkers(markersToAdd, true);
          this.markerClusterer.removeMarkers(markersToRemove, true);
          this.markerClusterer.repaint();
          for (const marker of markersToRemove) {
            this._currentMarkers.delete(marker);
          }
        });
      });
    });
  }
  _getInternalMarkers(markers) {
    return Promise.all(markers.map((markerComponent) => markerComponent._resolveMarker()));
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.markerClusterer) {
        throw Error("Cannot interact with a MarkerClusterer before it has been initialized. Please wait for the MarkerClusterer to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapMarkerClusterer_Factory(t) {
      return new (t || _MapMarkerClusterer)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MapMarkerClusterer,
      selectors: [["map-marker-clusterer"]],
      contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MapMarker, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._markers = _t);
        }
      },
      inputs: {
        ariaLabelFn: "ariaLabelFn",
        averageCenter: "averageCenter",
        batchSize: "batchSize",
        batchSizeIE: "batchSizeIE",
        calculator: "calculator",
        clusterClass: "clusterClass",
        enableRetinaIcons: "enableRetinaIcons",
        gridSize: "gridSize",
        ignoreHidden: "ignoreHidden",
        imageExtension: "imageExtension",
        imagePath: "imagePath",
        imageSizes: "imageSizes",
        maxZoom: "maxZoom",
        minimumClusterSize: "minimumClusterSize",
        styles: "styles",
        title: "title",
        zIndex: "zIndex",
        zoomOnClick: "zoomOnClick",
        options: "options"
      },
      outputs: {
        clusteringbegin: "clusteringbegin",
        clusteringend: "clusteringend",
        clusterClick: "clusterClick",
        markerClustererInitialized: "markerClustererInitialized"
      },
      exportAs: ["mapMarkerClusterer"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MapMarkerClusterer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapMarkerClusterer, [{
    type: Component,
    args: [{
      selector: "map-marker-clusterer",
      exportAs: "mapMarkerClusterer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: "<ng-content />",
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    ariaLabelFn: [{
      type: Input
    }],
    averageCenter: [{
      type: Input
    }],
    batchSize: [{
      type: Input
    }],
    batchSizeIE: [{
      type: Input
    }],
    calculator: [{
      type: Input
    }],
    clusterClass: [{
      type: Input
    }],
    enableRetinaIcons: [{
      type: Input
    }],
    gridSize: [{
      type: Input
    }],
    ignoreHidden: [{
      type: Input
    }],
    imageExtension: [{
      type: Input
    }],
    imagePath: [{
      type: Input
    }],
    imageSizes: [{
      type: Input
    }],
    maxZoom: [{
      type: Input
    }],
    minimumClusterSize: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    zoomOnClick: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    clusteringbegin: [{
      type: Output
    }],
    clusteringend: [{
      type: Output
    }],
    clusterClick: [{
      type: Output
    }],
    _markers: [{
      type: ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }],
    markerClustererInitialized: [{
      type: Output
    }]
  });
})();
var MapPolygon = class _MapPolygon {
  set options(options) {
    this._options.next(options || {});
  }
  set paths(paths) {
    this._paths.next(paths);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._options = new BehaviorSubject({});
    this._paths = new BehaviorSubject(void 0);
    this._destroyed = new Subject();
    this.polygonClick = this._eventManager.getLazyEmitter("click");
    this.polygonDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.polygonDrag = this._eventManager.getLazyEmitter("drag");
    this.polygonDragend = this._eventManager.getLazyEmitter("dragend");
    this.polygonDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.polygonMousedown = this._eventManager.getLazyEmitter("mousedown");
    this.polygonMousemove = this._eventManager.getLazyEmitter("mousemove");
    this.polygonMouseout = this._eventManager.getLazyEmitter("mouseout");
    this.polygonMouseover = this._eventManager.getLazyEmitter("mouseover");
    this.polygonMouseup = this._eventManager.getLazyEmitter("mouseup");
    this.polygonRightclick = this._eventManager.getLazyEmitter("rightclick");
    this.polygonInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe(take(1)).subscribe((options) => {
        if (google.maps.Polygon && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.Polygon, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
              this._initialize(map2, lib.Polygon, options);
            });
          });
        }
      });
    }
  }
  _initialize(map2, polygonConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.polygon = new polygonConstructor(options);
      this._assertInitialized();
      this.polygon.setMap(map2);
      this._eventManager.setTarget(this.polygon);
      this.polygonInitialized.emit(this.polygon);
      this._watchForOptionsChanges();
      this._watchForPathChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.polygon?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.polygon.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.polygon.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
   */
  getPath() {
    this._assertInitialized();
    return this.polygon.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
   */
  getPaths() {
    this._assertInitialized();
    return this.polygon.getPaths();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.polygon.getVisible();
  }
  _combineOptions() {
    return combineLatest([this._options, this._paths]).pipe(map(([options, paths]) => {
      const combinedOptions = __spreadProps(__spreadValues({}, options), {
        paths: paths || options.paths
      });
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe(takeUntil(this._destroyed)).subscribe((options) => {
      this._assertInitialized();
      this.polygon.setOptions(options);
    });
  }
  _watchForPathChanges() {
    this._paths.pipe(takeUntil(this._destroyed)).subscribe((paths) => {
      if (paths) {
        this._assertInitialized();
        this.polygon.setPaths(paths);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.polygon) {
        throw Error("Cannot interact with a Google Map Polygon before it has been initialized. Please wait for the Polygon to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapPolygon_Factory(t) {
      return new (t || _MapPolygon)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapPolygon,
      selectors: [["map-polygon"]],
      inputs: {
        options: "options",
        paths: "paths"
      },
      outputs: {
        polygonClick: "polygonClick",
        polygonDblclick: "polygonDblclick",
        polygonDrag: "polygonDrag",
        polygonDragend: "polygonDragend",
        polygonDragstart: "polygonDragstart",
        polygonMousedown: "polygonMousedown",
        polygonMousemove: "polygonMousemove",
        polygonMouseout: "polygonMouseout",
        polygonMouseover: "polygonMouseover",
        polygonMouseup: "polygonMouseup",
        polygonRightclick: "polygonRightclick",
        polygonInitialized: "polygonInitialized"
      },
      exportAs: ["mapPolygon"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapPolygon, [{
    type: Directive,
    args: [{
      selector: "map-polygon",
      exportAs: "mapPolygon",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    paths: [{
      type: Input
    }],
    polygonClick: [{
      type: Output
    }],
    polygonDblclick: [{
      type: Output
    }],
    polygonDrag: [{
      type: Output
    }],
    polygonDragend: [{
      type: Output
    }],
    polygonDragstart: [{
      type: Output
    }],
    polygonMousedown: [{
      type: Output
    }],
    polygonMousemove: [{
      type: Output
    }],
    polygonMouseout: [{
      type: Output
    }],
    polygonMouseover: [{
      type: Output
    }],
    polygonMouseup: [{
      type: Output
    }],
    polygonRightclick: [{
      type: Output
    }],
    polygonInitialized: [{
      type: Output
    }]
  });
})();
var MapPolyline = class _MapPolyline {
  set options(options) {
    this._options.next(options || {});
  }
  set path(path) {
    this._path.next(path);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._options = new BehaviorSubject({});
    this._path = new BehaviorSubject(void 0);
    this._destroyed = new Subject();
    this.polylineClick = this._eventManager.getLazyEmitter("click");
    this.polylineDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.polylineDrag = this._eventManager.getLazyEmitter("drag");
    this.polylineDragend = this._eventManager.getLazyEmitter("dragend");
    this.polylineDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.polylineMousedown = this._eventManager.getLazyEmitter("mousedown");
    this.polylineMousemove = this._eventManager.getLazyEmitter("mousemove");
    this.polylineMouseout = this._eventManager.getLazyEmitter("mouseout");
    this.polylineMouseover = this._eventManager.getLazyEmitter("mouseover");
    this.polylineMouseup = this._eventManager.getLazyEmitter("mouseup");
    this.polylineRightclick = this._eventManager.getLazyEmitter("rightclick");
    this.polylineInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe(take(1)).subscribe((options) => {
        if (google.maps.Polyline && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.Polyline, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
              this._initialize(map2, lib.Polyline, options);
            });
          });
        }
      });
    }
  }
  _initialize(map2, polylineConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.polyline = new polylineConstructor(options);
      this._assertInitialized();
      this.polyline.setMap(map2);
      this._eventManager.setTarget(this.polyline);
      this.polylineInitialized.emit(this.polyline);
      this._watchForOptionsChanges();
      this._watchForPathChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.polyline?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.polyline.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.polyline.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
   */
  getPath() {
    this._assertInitialized();
    return this.polyline.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.polyline.getVisible();
  }
  _combineOptions() {
    return combineLatest([this._options, this._path]).pipe(map(([options, path]) => {
      const combinedOptions = __spreadProps(__spreadValues({}, options), {
        path: path || options.path
      });
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe(takeUntil(this._destroyed)).subscribe((options) => {
      this._assertInitialized();
      this.polyline.setOptions(options);
    });
  }
  _watchForPathChanges() {
    this._path.pipe(takeUntil(this._destroyed)).subscribe((path) => {
      if (path) {
        this._assertInitialized();
        this.polyline.setPath(path);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.polyline) {
        throw Error("Cannot interact with a Google Map Polyline before it has been initialized. Please wait for the Polyline to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapPolyline_Factory(t) {
      return new (t || _MapPolyline)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapPolyline,
      selectors: [["map-polyline"]],
      inputs: {
        options: "options",
        path: "path"
      },
      outputs: {
        polylineClick: "polylineClick",
        polylineDblclick: "polylineDblclick",
        polylineDrag: "polylineDrag",
        polylineDragend: "polylineDragend",
        polylineDragstart: "polylineDragstart",
        polylineMousedown: "polylineMousedown",
        polylineMousemove: "polylineMousemove",
        polylineMouseout: "polylineMouseout",
        polylineMouseover: "polylineMouseover",
        polylineMouseup: "polylineMouseup",
        polylineRightclick: "polylineRightclick",
        polylineInitialized: "polylineInitialized"
      },
      exportAs: ["mapPolyline"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapPolyline, [{
    type: Directive,
    args: [{
      selector: "map-polyline",
      exportAs: "mapPolyline",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    path: [{
      type: Input
    }],
    polylineClick: [{
      type: Output
    }],
    polylineDblclick: [{
      type: Output
    }],
    polylineDrag: [{
      type: Output
    }],
    polylineDragend: [{
      type: Output
    }],
    polylineDragstart: [{
      type: Output
    }],
    polylineMousedown: [{
      type: Output
    }],
    polylineMousemove: [{
      type: Output
    }],
    polylineMouseout: [{
      type: Output
    }],
    polylineMouseover: [{
      type: Output
    }],
    polylineMouseup: [{
      type: Output
    }],
    polylineRightclick: [{
      type: Output
    }],
    polylineInitialized: [{
      type: Output
    }]
  });
})();
var MapRectangle = class _MapRectangle {
  set options(options) {
    this._options.next(options || {});
  }
  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this._options = new BehaviorSubject({});
    this._bounds = new BehaviorSubject(void 0);
    this._destroyed = new Subject();
    this.boundsChanged = this._eventManager.getLazyEmitter("bounds_changed");
    this.rectangleClick = this._eventManager.getLazyEmitter("click");
    this.rectangleDblclick = this._eventManager.getLazyEmitter("dblclick");
    this.rectangleDrag = this._eventManager.getLazyEmitter("drag");
    this.rectangleDragend = this._eventManager.getLazyEmitter("dragend");
    this.rectangleDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.rectangleMousedown = this._eventManager.getLazyEmitter("mousedown");
    this.rectangleMousemove = this._eventManager.getLazyEmitter("mousemove");
    this.rectangleMouseout = this._eventManager.getLazyEmitter("mouseout");
    this.rectangleMouseover = this._eventManager.getLazyEmitter("mouseover");
    this.rectangleMouseup = this._eventManager.getLazyEmitter("mouseup");
    this.rectangleRightclick = this._eventManager.getLazyEmitter("rightclick");
    this.rectangleInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe(take(1)).subscribe((options) => {
        if (google.maps.Rectangle && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.Rectangle, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
              this._initialize(map2, lib.Rectangle, options);
            });
          });
        }
      });
    }
  }
  _initialize(map2, rectangleConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.rectangle = new rectangleConstructor(options);
      this._assertInitialized();
      this.rectangle.setMap(map2);
      this._eventManager.setTarget(this.rectangle);
      this.rectangleInitialized.emit(this.rectangle);
      this._watchForOptionsChanges();
      this._watchForBoundsChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.rectangle?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.rectangle.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.rectangle.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.rectangle.getEditable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.rectangle.getVisible();
  }
  _combineOptions() {
    return combineLatest([this._options, this._bounds]).pipe(map(([options, bounds]) => {
      const combinedOptions = __spreadProps(__spreadValues({}, options), {
        bounds: bounds || options.bounds
      });
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe(takeUntil(this._destroyed)).subscribe((options) => {
      this._assertInitialized();
      this.rectangle.setOptions(options);
    });
  }
  _watchForBoundsChanges() {
    this._bounds.pipe(takeUntil(this._destroyed)).subscribe((bounds) => {
      if (bounds) {
        this._assertInitialized();
        this.rectangle.setBounds(bounds);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.rectangle) {
        throw Error("Cannot interact with a Google Map Rectangle before it has been initialized. Please wait for the Rectangle to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapRectangle_Factory(t) {
      return new (t || _MapRectangle)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapRectangle,
      selectors: [["map-rectangle"]],
      inputs: {
        options: "options",
        bounds: "bounds"
      },
      outputs: {
        boundsChanged: "boundsChanged",
        rectangleClick: "rectangleClick",
        rectangleDblclick: "rectangleDblclick",
        rectangleDrag: "rectangleDrag",
        rectangleDragend: "rectangleDragend",
        rectangleDragstart: "rectangleDragstart",
        rectangleMousedown: "rectangleMousedown",
        rectangleMousemove: "rectangleMousemove",
        rectangleMouseout: "rectangleMouseout",
        rectangleMouseover: "rectangleMouseover",
        rectangleMouseup: "rectangleMouseup",
        rectangleRightclick: "rectangleRightclick",
        rectangleInitialized: "rectangleInitialized"
      },
      exportAs: ["mapRectangle"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapRectangle, [{
    type: Directive,
    args: [{
      selector: "map-rectangle",
      exportAs: "mapRectangle",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    boundsChanged: [{
      type: Output
    }],
    rectangleClick: [{
      type: Output
    }],
    rectangleDblclick: [{
      type: Output
    }],
    rectangleDrag: [{
      type: Output
    }],
    rectangleDragend: [{
      type: Output
    }],
    rectangleDragstart: [{
      type: Output
    }],
    rectangleMousedown: [{
      type: Output
    }],
    rectangleMousemove: [{
      type: Output
    }],
    rectangleMouseout: [{
      type: Output
    }],
    rectangleMouseover: [{
      type: Output
    }],
    rectangleMouseup: [{
      type: Output
    }],
    rectangleRightclick: [{
      type: Output
    }],
    rectangleInitialized: [{
      type: Output
    }]
  });
})();
var MapTrafficLayer = class _MapTrafficLayer {
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */
  set autoRefresh(autoRefresh) {
    this._autoRefresh.next(autoRefresh);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._autoRefresh = new BehaviorSubject(true);
    this._destroyed = new Subject();
    this.trafficLayerInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe(take(1)).subscribe((options) => {
        if (google.maps.TrafficLayer && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.TrafficLayer, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
              this._initialize(map2, lib.TrafficLayer, options);
            });
          });
        }
      });
    }
  }
  _initialize(map2, layerConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.trafficLayer = new layerConstructor(options);
      this._assertInitialized();
      this.trafficLayer.setMap(map2);
      this.trafficLayerInitialized.emit(this.trafficLayer);
      this._watchForAutoRefreshChanges();
    });
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this.trafficLayer?.setMap(null);
  }
  _combineOptions() {
    return this._autoRefresh.pipe(map((autoRefresh) => {
      const combinedOptions = {
        autoRefresh
      };
      return combinedOptions;
    }));
  }
  _watchForAutoRefreshChanges() {
    this._combineOptions().pipe(takeUntil(this._destroyed)).subscribe((options) => {
      this._assertInitialized();
      this.trafficLayer.setOptions(options);
    });
  }
  _assertInitialized() {
    if (!this.trafficLayer) {
      throw Error("Cannot interact with a Google Map Traffic Layer before it has been initialized. Please wait for the Traffic Layer to load before trying to interact with it.");
    }
  }
  static {
    this.\u0275fac = function MapTrafficLayer_Factory(t) {
      return new (t || _MapTrafficLayer)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapTrafficLayer,
      selectors: [["map-traffic-layer"]],
      inputs: {
        autoRefresh: "autoRefresh"
      },
      outputs: {
        trafficLayerInitialized: "trafficLayerInitialized"
      },
      exportAs: ["mapTrafficLayer"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapTrafficLayer, [{
    type: Directive,
    args: [{
      selector: "map-traffic-layer",
      exportAs: "mapTrafficLayer",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    autoRefresh: [{
      type: Input
    }],
    trafficLayerInitialized: [{
      type: Output
    }]
  });
})();
var MapTransitLayer = class _MapTransitLayer {
  constructor() {
    this._map = inject(GoogleMap);
    this._zone = inject(NgZone);
    this.transitLayerInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      if (google.maps.TransitLayer && this._map.googleMap) {
        this._initialize(this._map.googleMap, google.maps.TransitLayer);
      } else {
        this._zone.runOutsideAngular(() => {
          Promise.all([this._map._resolveMap(), google.maps.importLibrary("maps")]).then(([map2, lib]) => {
            this._initialize(map2, lib.TransitLayer);
          });
        });
      }
    }
  }
  _initialize(map2, layerConstructor) {
    this._zone.runOutsideAngular(() => {
      this.transitLayer = new layerConstructor();
      this.transitLayerInitialized.emit(this.transitLayer);
      this._assertLayerInitialized();
      this.transitLayer.setMap(map2);
    });
  }
  ngOnDestroy() {
    this.transitLayer?.setMap(null);
  }
  _assertLayerInitialized() {
    if (!this.transitLayer) {
      throw Error("Cannot interact with a Google Map Transit Layer before it has been initialized. Please wait for the Transit Layer to load before trying to interact with it.");
    }
  }
  static {
    this.\u0275fac = function MapTransitLayer_Factory(t) {
      return new (t || _MapTransitLayer)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapTransitLayer,
      selectors: [["map-transit-layer"]],
      outputs: {
        transitLayerInitialized: "transitLayerInitialized"
      },
      exportAs: ["mapTransitLayer"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapTransitLayer, [{
    type: Directive,
    args: [{
      selector: "map-transit-layer",
      exportAs: "mapTransitLayer",
      standalone: true
    }]
  }], null, {
    transitLayerInitialized: [{
      type: Output
    }]
  });
})();
var MapHeatmapLayer = class _MapHeatmapLayer {
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */
  set data(data) {
    this._data = data;
  }
  /**
   * Options used to configure the heatmap. See:
   * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
   */
  set options(options) {
    this._options = options;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this.heatmapInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (!window.google?.maps?.visualization && !window.google?.maps.importLibrary && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. Please install the Google Maps JavaScript API with the "visualization" library: https://developers.google.com/maps/documentation/javascript/visualization');
      }
      if (google.maps.visualization?.HeatmapLayer && this._googleMap.googleMap) {
        this._initialize(this._googleMap.googleMap, google.maps.visualization.HeatmapLayer);
      } else {
        this._ngZone.runOutsideAngular(() => {
          Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary("visualization")]).then(([map2, lib]) => {
            this._initialize(map2, lib.HeatmapLayer);
          });
        });
      }
    }
  }
  _initialize(map2, heatmapConstructor) {
    this._ngZone.runOutsideAngular(() => {
      this.heatmap = new heatmapConstructor(this._combineOptions());
      this._assertInitialized();
      this.heatmap.setMap(map2);
      this.heatmapInitialized.emit(this.heatmap);
    });
  }
  ngOnChanges(changes) {
    const {
      _data,
      heatmap
    } = this;
    if (heatmap) {
      if (changes["options"]) {
        heatmap.setOptions(this._combineOptions());
      }
      if (changes["data"] && _data !== void 0) {
        heatmap.setData(this._normalizeData(_data));
      }
    }
  }
  ngOnDestroy() {
    this.heatmap?.setMap(null);
  }
  /**
   * Gets the data that is currently shown on the heatmap.
   * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
   */
  getData() {
    this._assertInitialized();
    return this.heatmap.getData();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || {};
    return __spreadProps(__spreadValues({}, options), {
      data: this._normalizeData(this._data || options.data || []),
      map: this._googleMap.googleMap
    });
  }
  /**
   * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
   * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
   * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
   * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
   * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
   * convert it to a `LatLng` object before passing it off to Google Maps.
   */
  _normalizeData(data) {
    const result = [];
    data.forEach((item) => {
      result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
    });
    return result;
  }
  /** Asserts that the heatmap object has been initialized. */
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.heatmap) {
        throw Error("Cannot interact with a Google Map HeatmapLayer before it has been initialized. Please wait for the heatmap to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapHeatmapLayer_Factory(t) {
      return new (t || _MapHeatmapLayer)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapHeatmapLayer,
      selectors: [["map-heatmap-layer"]],
      inputs: {
        data: "data",
        options: "options"
      },
      outputs: {
        heatmapInitialized: "heatmapInitialized"
      },
      exportAs: ["mapHeatmapLayer"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapHeatmapLayer, [{
    type: Directive,
    args: [{
      selector: "map-heatmap-layer",
      exportAs: "mapHeatmapLayer",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    heatmapInitialized: [{
      type: Output
    }]
  });
})();
function isLatLngLiteral(value) {
  return value && typeof value.lat === "number" && typeof value.lng === "number";
}
var DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.221995,
    lng: -122.184092
  }
};
var MapAdvancedMarker = class _MapAdvancedMarker {
  /**
   * Rollover text. If provided, an accessibility text (e.g. for use with screen readers) will be added to the AdvancedMarkerElement with the provided value.
   * See: https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.title
   */
  set title(title) {
    this._title = title;
  }
  /**
   * Sets the AdvancedMarkerElement's position. An AdvancedMarkerElement may be constructed without a position, but will not be displayed until its position is provided - for example, by a user's actions or choices. An AdvancedMarkerElement's position can be provided by setting AdvancedMarkerElement.position if not provided at the construction.
   * Note: AdvancedMarkerElement with altitude is only supported on vector maps.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.position
   */
  set position(position) {
    this._position = position;
  }
  /**
   * The DOM Element backing the visual of an AdvancedMarkerElement.
   * Note: AdvancedMarkerElement does not clone the passed-in DOM element. Once the DOM element is passed to an AdvancedMarkerElement, passing the same DOM element to another AdvancedMarkerElement will move the DOM element and cause the previous AdvancedMarkerElement to look empty.
   * See: https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.content
   */
  set content(content) {
    this._content = content;
  }
  /**
   * If true, the AdvancedMarkerElement can be dragged.
   * Note: AdvancedMarkerElement with altitude is not draggable.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.gmpDraggable
   */
  set gmpDraggable(draggable) {
    this._draggable = draggable;
  }
  /**
   * Options for constructing an AdvancedMarkerElement.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions
   */
  set options(options) {
    this._options = options;
  }
  /**
   * AdvancedMarkerElements on the map are prioritized by zIndex, with higher values indicating higher display.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.zIndex
   */
  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(inject(NgZone));
    this.mapClick = this._eventManager.getLazyEmitter("click");
    this.mapDrag = this._eventManager.getLazyEmitter("drag");
    this.mapDragend = this._eventManager.getLazyEmitter("dragend");
    this.mapDragstart = this._eventManager.getLazyEmitter("dragstart");
    this.markerInitialized = new EventEmitter();
  }
  ngOnInit() {
    if (!this._googleMap._isBrowser) {
      return;
    }
    if (google.maps.marker?.AdvancedMarkerElement && this._googleMap.googleMap) {
      this._initialize(this._googleMap.googleMap, google.maps.marker.AdvancedMarkerElement);
    } else {
      this._ngZone.runOutsideAngular(() => {
        Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary("marker")]).then(([map2, lib]) => {
          this._initialize(map2, lib.AdvancedMarkerElement);
        });
      });
    }
  }
  _initialize(map2, advancedMarkerConstructor) {
    this._ngZone.runOutsideAngular(() => {
      this.advancedMarker = new advancedMarkerConstructor(this._combineOptions());
      this._assertInitialized();
      this.advancedMarker.map = map2;
      this._eventManager.setTarget(this.advancedMarker);
      this.markerInitialized.next(this.advancedMarker);
    });
  }
  ngOnChanges(changes) {
    const {
      advancedMarker,
      _content,
      _position,
      _title,
      _draggable,
      _zIndex
    } = this;
    if (advancedMarker) {
      if (changes["title"]) {
        advancedMarker.title = _title;
      }
      if (changes["content"]) {
        advancedMarker.content = _content;
      }
      if (changes["gmpDraggable"]) {
        advancedMarker.gmpDraggable = _draggable;
      }
      if (changes["content"]) {
        advancedMarker.content = _content;
      }
      if (changes["position"]) {
        advancedMarker.position = _position;
      }
      if (changes["zIndex"]) {
        advancedMarker.zIndex = _zIndex;
      }
    }
  }
  ngOnDestroy() {
    this.markerInitialized.complete();
    this._eventManager.destroy();
    if (this.advancedMarker) {
      this.advancedMarker.map = null;
    }
  }
  getAnchor() {
    this._assertInitialized();
    return this.advancedMarker;
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS;
    return __spreadProps(__spreadValues({}, options), {
      title: this._title || options.title,
      position: this._position || options.position,
      content: this._content || options.content,
      zIndex: this._zIndex ?? options.zIndex,
      gmpDraggable: this._draggable ?? options.gmpDraggable,
      map: this._googleMap.googleMap
    });
  }
  /** Asserts that the map has been initialized. */
  _assertInitialized() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this.advancedMarker) {
        throw Error("Cannot interact with a Google Map Marker before it has been initialized. Please wait for the Marker to load before trying to interact with it.");
      }
    }
  }
  static {
    this.\u0275fac = function MapAdvancedMarker_Factory(t) {
      return new (t || _MapAdvancedMarker)(\u0275\u0275directiveInject(GoogleMap), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MapAdvancedMarker,
      selectors: [["map-advanced-marker"]],
      inputs: {
        title: "title",
        position: "position",
        content: "content",
        gmpDraggable: "gmpDraggable",
        options: "options",
        zIndex: "zIndex"
      },
      outputs: {
        mapClick: "mapClick",
        mapDrag: "mapDrag",
        mapDragend: "mapDragend",
        mapDragstart: "mapDragstart",
        markerInitialized: "markerInitialized"
      },
      exportAs: ["mapAdvancedMarker"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapAdvancedMarker, [{
    type: Directive,
    args: [{
      selector: "map-advanced-marker",
      exportAs: "mapAdvancedMarker",
      standalone: true
    }]
  }], () => [{
    type: GoogleMap
  }, {
    type: NgZone
  }], {
    title: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    gmpDraggable: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    mapClick: [{
      type: Output
    }],
    mapDrag: [{
      type: Output
    }],
    mapDragend: [{
      type: Output
    }],
    mapDragstart: [{
      type: Output
    }],
    markerInitialized: [{
      type: Output
    }]
  });
})();
var COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapHeatmapLayer, MapInfoWindow, MapKmlLayer, MapMarker, MapAdvancedMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer];
var GoogleMapsModule = class _GoogleMapsModule {
  static {
    this.\u0275fac = function GoogleMapsModule_Factory(t) {
      return new (t || _GoogleMapsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _GoogleMapsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleMapsModule, [{
    type: NgModule,
    args: [{
      imports: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();
var MapDirectionsService = class _MapDirectionsService {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */
  route(request) {
    return new Observable((observer) => {
      this._getService().then((service) => {
        service.route(request, (result, status) => {
          this._ngZone.run(() => {
            observer.next({
              result: result || void 0,
              status
            });
            observer.complete();
          });
        });
      });
    });
  }
  _getService() {
    if (!this._directionsService) {
      if (google.maps.DirectionsService) {
        this._directionsService = new google.maps.DirectionsService();
      } else {
        return google.maps.importLibrary("routes").then((lib) => {
          this._directionsService = new lib.DirectionsService();
          return this._directionsService;
        });
      }
    }
    return Promise.resolve(this._directionsService);
  }
  static {
    this.\u0275fac = function MapDirectionsService_Factory(t) {
      return new (t || _MapDirectionsService)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MapDirectionsService,
      factory: _MapDirectionsService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapDirectionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();
var MapGeocoder = class _MapGeocoder {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */
  geocode(request) {
    return new Observable((observer) => {
      this._getGeocoder().then((geocoder) => {
        geocoder.geocode(request, (results, status) => {
          this._ngZone.run(() => {
            observer.next({
              results: results || [],
              status
            });
            observer.complete();
          });
        });
      });
    });
  }
  _getGeocoder() {
    if (!this._geocoder) {
      if (google.maps.Geocoder) {
        this._geocoder = new google.maps.Geocoder();
      } else {
        return google.maps.importLibrary("geocoding").then((lib) => {
          this._geocoder = new lib.Geocoder();
          return this._geocoder;
        });
      }
    }
    return Promise.resolve(this._geocoder);
  }
  static {
    this.\u0275fac = function MapGeocoder_Factory(t) {
      return new (t || _MapGeocoder)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MapGeocoder,
      factory: _MapGeocoder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapGeocoder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();

// src/app/website/pages/ias-contactus/ias-contactus.component.ts
function IasContactusComponent_div_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " First name is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Must be at least 2 characters. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_27_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Only letters are allowed. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, IasContactusComponent_div_27_span_1_Template, 2, 0, "span", 39)(2, IasContactusComponent_div_27_span_2_Template, 2, 0, "span", 39)(3, IasContactusComponent_div_27_span_3_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("firstName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("firstName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.contactForm.get("firstName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function IasContactusComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Last name is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Must be at least 2 characters. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_34_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Only letters are allowed. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, IasContactusComponent_div_34_span_1_Template, 2, 0, "span", 39)(2, IasContactusComponent_div_34_span_2_Template, 2, 0, "span", 39)(3, IasContactusComponent_div_34_span_3_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("lastName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("lastName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.contactForm.get("lastName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function IasContactusComponent_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Email is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Please enter a valid email address. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, IasContactusComponent_div_41_span_1_Template, 2, 0, "span", 39)(2, IasContactusComponent_div_41_span_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasContactusComponent_div_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter a valid 10-digit phone number. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, IasContactusComponent_div_48_span_1_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("mobileNumber")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function IasContactusComponent_div_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Message is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_55_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Message must be at least 10 characters. ");
    \u0275\u0275elementEnd();
  }
}
function IasContactusComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, IasContactusComponent_div_55_span_1_Template, 2, 0, "span", 39)(2, IasContactusComponent_div_55_span_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("message")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("message")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function IasContactusComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function IasContactusComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var IasContactusComponent = class _IasContactusComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.center = { lat: 28.6139, lng: 77.209 };
    this.zoom = 15;
    this.markerPosition = { lat: 28.6139, lng: 77.209 };
    this.isSubmitting = false;
    this.successMessage = "";
    this.errorMessage = "";
    this.contactForm = this.fb.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Za-z]+$/)
          // ✅ only letters
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Za-z]+$/)
          // ✅ only letters
        ]
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)
          // ✅ stricter email regex
        ]
      ],
      mobileNumber: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
          // ✅ exactly 10 digits
        ]
      ],
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.successMessage = "";
    this.errorMessage = "";
    this.http.post(`${environment.apiUrl}/contact-us`, this.contactForm.value).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.successMessage = "\u2705 Your message has been sent successfully!";
        this.contactForm.reset();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = "\u274C Something went wrong. Please try again later.";
        console.error(err);
      }
    });
  }
  allowOnlyNumbers(event) {
    const charCode = event.charCode ? event.charCode : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  static {
    this.\u0275fac = function IasContactusComponent_Factory(t) {
      return new (t || _IasContactusComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasContactusComponent, selectors: [["app-ias-contactus"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 11, consts: [[1, "main-aboutus-page", "pb-5"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "form-div", "mt-5", "d-flex", "container", "gap-5"], [1, "left-side-form", "w-50"], [1, "mt-5", 3, "ngSubmit", "formGroup"], [1, "inner-form-div"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "firstName", "placeholder", "Enter your first name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Enter your last name", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email id", 1, "form-control"], ["type", "text", "formControlName", "mobileNumber", "placeholder", "Enter your phone number", "maxlength", "10", "pattern", "[0-9]{10}", 1, "form-control", 3, "keypress"], [1, "mt-3"], ["formControlName", "message", "rows", "3", "placeholder", "Please describe your concern or request in detail...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-submit", "w-100", "mt-3", 3, "disabled"], ["class", "text-success mt-2", 4, "ngIf"], ["class", "text-danger mt-2", 4, "ngIf"], [1, "right-other-info", "w-50", "d-flex", "flex-column", "justify-content-between"], [1, "email-div", "d-flex", "align-items-start", "gap-3", "mt-3"], [1, "left-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none"], ["id", "mask0_470_1029", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "25", 2, "mask-type", "alpha"], ["y", "0.5", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_470_1029)"], ["d", "M4 20.5C3.45 20.5 2.97917 20.3042 2.5875 19.9125C2.19583 19.5208 2 19.05 2 18.5V6.5C2 5.95 2.19583 5.47917 2.5875 5.0875C2.97917 4.69583 3.45 4.5 4 4.5H20C20.55 4.5 21.0208 4.69583 21.4125 5.0875C21.8042 5.47917 22 5.95 22 6.5V18.5C22 19.05 21.8042 19.5208 21.4125 19.9125C21.0208 20.3042 20.55 20.5 20 20.5H4ZM12 13.5L4 8.5V18.5H20V8.5L12 13.5ZM12 11.5L20 6.5H4L12 11.5ZM4 8.5V6.5V18.5V8.5Z", "fill", "white"], [1, "right-email"], ["id", "mask0_470_1023", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "25", 2, "mask-type", "alpha"], ["mask", "url(#mask0_470_1023)"], ["d", "M12 22.5C10.2333 22.5 8.79167 22.2208 7.675 21.6625C6.55833 21.1042 6 20.3833 6 19.5C6 19.1 6.12083 18.7292 6.3625 18.3875C6.60417 18.0458 6.94167 17.75 7.375 17.5L8.95 18.975C8.8 19.0417 8.6375 19.1167 8.4625 19.2C8.2875 19.2833 8.15 19.3833 8.05 19.5C8.26667 19.7667 8.76667 20 9.55 20.2C10.3333 20.4 11.15 20.5 12 20.5C12.85 20.5 13.6708 20.4 14.4625 20.2C15.2542 20 15.7583 19.7667 15.975 19.5C15.8583 19.3667 15.7083 19.2583 15.525 19.175C15.3417 19.0917 15.1667 19.0167 15 18.95L16.55 17.45C17.0167 17.7167 17.375 18.0208 17.625 18.3625C17.875 18.7042 18 19.0833 18 19.5C18 20.3833 17.4417 21.1042 16.325 21.6625C15.2083 22.2208 13.7667 22.5 12 22.5ZM12.025 17C13.675 15.7833 14.9167 14.5625 15.75 13.3375C16.5833 12.1125 17 10.8833 17 9.65C17 7.95 16.4583 6.66667 15.375 5.8C14.2917 4.93333 13.1667 4.5 12 4.5C10.8333 4.5 9.70833 4.93333 8.625 5.8C7.54167 6.66667 7 7.95 7 9.65C7 10.7667 7.40833 11.9292 8.225 13.1375C9.04167 14.3458 10.3083 15.6333 12.025 17ZM12 19.5C9.65 17.7667 7.89583 16.0833 6.7375 14.45C5.57917 12.8167 5 11.2167 5 9.65C5 8.46667 5.2125 7.42917 5.6375 6.5375C6.0625 5.64583 6.60833 4.9 7.275 4.3C7.94167 3.7 8.69167 3.25 9.525 2.95C10.3583 2.65 11.1833 2.5 12 2.5C12.8167 2.5 13.6417 2.65 14.475 2.95C15.3083 3.25 16.0583 3.7 16.725 4.3C17.3917 4.9 17.9375 5.64583 18.3625 6.5375C18.7875 7.42917 19 8.46667 19 9.65C19 11.2167 18.4208 12.8167 17.2625 14.45C16.1042 16.0833 14.35 17.7667 12 19.5ZM12 11.5C12.55 11.5 13.0208 11.3042 13.4125 10.9125C13.8042 10.5208 14 10.05 14 9.5C14 8.95 13.8042 8.47917 13.4125 8.0875C13.0208 7.69583 12.55 7.5 12 7.5C11.45 7.5 10.9792 7.69583 10.5875 8.0875C10.1958 8.47917 10 8.95 10 9.5C10 10.05 10.1958 10.5208 10.5875 10.9125C10.9792 11.3042 11.45 11.5 12 11.5Z", "fill", "white"], [1, "map-container", "mt-3"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4986441210623!2d77.22057807488798!3d28.6090565756725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd47da6cd9a9%3A0x7c5208bb07b5e3db!2sCivil%20Service%20Officer's%20Institute!5e0!3m2!1sen!2sin!4v1693839900000!5m2!1sen!2sin`, "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade"], [4, "ngIf"], [1, "text-success", "mt-2"], [1, "text-danger", "mt-2"]], template: function IasContactusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 8);
        \u0275\u0275text(10, "Contact Us");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "h1");
        \u0275\u0275text(12, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, " We\u2019re here to assist you. Reach out to us for queries, assistance, or information related to the IAS Association ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "h1");
        \u0275\u0275text(18, "Send us a message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "form", 11);
        \u0275\u0275listener("ngSubmit", function IasContactusComponent_Template_form_ngSubmit_19_listener() {
          return ctx.submitForm();
        });
        \u0275\u0275elementStart(20, "div", 12)(21, "div")(22, "label", 13);
        \u0275\u0275text(23, "First Name ");
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "input", 15);
        \u0275\u0275template(27, IasContactusComponent_div_27_Template, 4, 3, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div")(29, "label", 13);
        \u0275\u0275text(30, "Last Name ");
        \u0275\u0275elementStart(31, "span", 14);
        \u0275\u0275text(32, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "input", 17);
        \u0275\u0275template(34, IasContactusComponent_div_34_Template, 4, 3, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div")(36, "label", 13);
        \u0275\u0275text(37, "Email ");
        \u0275\u0275elementStart(38, "span", 14);
        \u0275\u0275text(39, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(40, "input", 18);
        \u0275\u0275template(41, IasContactusComponent_div_41_Template, 3, 2, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div")(43, "label", 13);
        \u0275\u0275text(44, "Phone Number ");
        \u0275\u0275elementStart(45, "span", 14);
        \u0275\u0275text(46, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "input", 19);
        \u0275\u0275listener("keypress", function IasContactusComponent_Template_input_keypress_47_listener($event) {
          return ctx.allowOnlyNumbers($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, IasContactusComponent_div_48_Template, 2, 1, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 20)(50, "label", 13);
        \u0275\u0275text(51, "Message ");
        \u0275\u0275elementStart(52, "span", 14);
        \u0275\u0275text(53, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(54, "textarea", 21);
        \u0275\u0275template(55, IasContactusComponent_div_55_Template, 3, 2, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 22);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd();
        \u0275\u0275template(58, IasContactusComponent_div_58_Template, 2, 1, "div", 23)(59, IasContactusComponent_div_59_Template, 2, 1, "div", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 25)(61, "h1");
        \u0275\u0275text(62, "Office Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 26)(64, "div", 27);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(65, "svg", 28)(66, "mask", 29);
        \u0275\u0275element(67, "rect", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "g", 31);
        \u0275\u0275element(69, "path", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(70, "div", 33)(71, "h3");
        \u0275\u0275text(72, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "h4");
        \u0275\u0275text(74, "association.ias@gmail.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h4");
        \u0275\u0275text(76, "secretary.ias@gmail.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "h4");
        \u0275\u0275text(78, "treasurericas2006@gmail.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "h4");
        \u0275\u0275text(80, "president.ias@gmail.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 26)(82, "div", 27);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(83, "svg", 28)(84, "mask", 34);
        \u0275\u0275element(85, "rect", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "g", 35);
        \u0275\u0275element(87, "path", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(88, "div", 33)(89, "h3");
        \u0275\u0275text(90, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "h4");
        \u0275\u0275text(92, " Indian Civil and Administrative Service (Central) Association, New Delhi ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "div", 37);
        \u0275\u0275element(94, "iframe", 38);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(19);
        \u0275\u0275property("formGroup", ctx.contactForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.contactForm.get("firstName")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.contactForm.get("firstName")) == null ? null : tmp_1_0.invalid));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.contactForm.get("lastName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.contactForm.get("lastName")) == null ? null : tmp_2_0.invalid));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.contactForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.contactForm.get("email")) == null ? null : tmp_3_0.invalid));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.contactForm.get("mobileNumber")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.contactForm.get("mobileNumber")) == null ? null : tmp_4_0.invalid));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.contactForm.get("message")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.contactForm.get("message")) == null ? null : tmp_5_0.invalid));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isSubmitting)("disabled", ctx.contactForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Sending..." : "Send Message", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
      }
    }, dependencies: [GoogleMapsModule, CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n.main-aboutus-page[_ngcontent-%COMP%] {\n  background-color: #150F22;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.inner-form-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.left-side-form[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      130deg,\n      #584772 -1.74%,\n      #2F2A38 108.02%);\n  padding: 24px;\n}\n.left-side-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  text-underline-offset: 24px;\n  text-decoration: underline;\n}\n.left-side-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.right-other-info[_ngcontent-%COMP%] {\n  padding: 26px 0px 0px 0px;\n}\n.right-other-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 36px;\n  margin: 0px;\n  text-decoration: underline;\n  text-underline-offset: 12px;\n}\n.email-div[_ngcontent-%COMP%]   .left-icon[_ngcontent-%COMP%] {\n  min-width: 54px;\n  height: 54px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--1, linear-gradient(130deg, #492FB2 -1.74%, rgba(73, 47, 178, 0.61) 125.81%));\n}\n.email-div[_ngcontent-%COMP%]   .right-email[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.email-div[_ngcontent-%COMP%]   .right-email[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.map-container[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  overflow: hidden;\n  display: inline-block;\n  background-color: #141021;\n  width: 100%;\n  height: 200px;\n  position: relative;\n}\n.map-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n@media (max-width: 992px) {\n  .form-div[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 40px;\n  }\n  .left-side-form[_ngcontent-%COMP%], .right-other-info[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .inner-form-div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .left-side-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .heading-div[_ngcontent-%COMP%] {\n    padding: 60px 0;\n  }\n  .heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 36px;\n  }\n  .heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 20px;\n  }\n  .form-div[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .left-side-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .left-side-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    text-align: center;\n  }\n  .form-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .right-other-info[_ngcontent-%COMP%] {\n    padding: 10px 0 0;\n  }\n  .right-other-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .email-div[_ngcontent-%COMP%] {\n    gap: 10px;\n    text-align: start;\n  }\n  .map-container[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background: #523AB1;\n  border-radius: 8px;\n  border: none;\n  color: #FFF;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: var(--Letter-Spacing-3, 0.5px);\n  padding: 16px;\n}\n/*# sourceMappingURL=ias-contactus.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasContactusComponent, { className: "IasContactusComponent", filePath: "src/app/website/pages/ias-contactus/ias-contactus.component.ts", lineNumber: 15 });
})();
export {
  IasContactusComponent
};
//# sourceMappingURL=chunk-RG6JXH5J.mjs.map
