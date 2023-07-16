"use strict";
/**
 * emc-auth-utility
 *
 * Usage:
 * import { instance as emcAuthClient } from '@/tools/auth';
 *
 * emcAuthClient.login({
      onSuccess: (message) => {
        //{"type": "authorize-success","data": "tdvch-tx3ik-r2bzp-pncic-ahjes-57rvk-oa6qu-blzh2-brbs5-x67zv-jae"}
        console.info('success', message);
      },
      onError(message) {
        console.info(message);
      },
   });
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.AuthClient = exports.ERROR_USER_INTERRUPT = void 0;
var EMC_PROVIDER_DEFAULT = 'https://hsujw-ciaaa-aaaap-qbj6a-cai.icp0.io/';
var EMC_PROVIDER_ENDPOINT = '#auth';
var INTERRUPT_CHECK_INTERVAL = 500;
var AUTH_MESSAGE_KIND_THIRD_READY = 'authorize-ready';
var AUTH_MESSAGE_KIND_SETUP = 'authorize-setup';
var AUTH_MESSAGE_KIND_SUCCESS = 'authorize-success';
var AUTH_MESSAGE_KIND_FAILURE = 'authorize-failure';
exports.ERROR_USER_INTERRUPT = 'user interrupt';
var AuthClient = /** @class */ (function () {
    function AuthClient() {
    }
    AuthClient.prototype._removeEventListener = function () {
        if (this._eventHandler) {
            window.removeEventListener('message', this._eventHandler);
        }
        this._eventHandler = undefined;
    };
    AuthClient.prototype._getEventHandler = function (emcProviderUrl, options) {
        var _this = this;
        return function (event) { return __awaiter(_this, void 0, void 0, function () {
            var message, _a, request, err_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (event.origin !== emcProviderUrl.origin) {
                            console.warn("expected origin '".concat(emcProviderUrl.origin, "', got '").concat(event.origin, "'"));
                            return [2 /*return*/];
                        }
                        message = event.data;
                        _a = message.type;
                        switch (_a) {
                            case AUTH_MESSAGE_KIND_THIRD_READY: return [3 /*break*/, 1];
                            case AUTH_MESSAGE_KIND_SUCCESS: return [3 /*break*/, 2];
                            case AUTH_MESSAGE_KIND_FAILURE: return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        {
                            request = { type: AUTH_MESSAGE_KIND_SETUP };
                            (_b = this._emcWindow) === null || _b === void 0 ? void 0 : _b.postMessage(request, emcProviderUrl.origin);
                            return [3 /*break*/, 8];
                        }
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this._handleSuccess(message, options.onSuccess)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _c.sent();
                        this._handleFailure(err_1.message, options.onError);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        this._handleFailure(message.data, options.onError);
                        return [3 /*break*/, 8];
                    case 7:
                        console.info("unknow message type '".concat(message.type, "'"));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
    };
    AuthClient.prototype._handleSuccess = function (message, onSuccess) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._emcWindow) {
                    this._emcWindow.close();
                }
                this._removeEventListener();
                delete this._emcWindow;
                typeof onSuccess === 'function' && onSuccess(message);
                return [2 /*return*/];
            });
        });
    };
    AuthClient.prototype._handleFailure = function (errorMessage, onError) {
        if (this._emcWindow && !this._emcWindow.closed) {
            this._emcWindow.close();
        }
        typeof onError === 'function' && onError(errorMessage);
        this._removeEventListener();
        delete this._emcWindow;
    };
    AuthClient.prototype.login = function (options) {
        var _this = this;
        var emcProviderUrl = new URL(options.provider || EMC_PROVIDER_DEFAULT);
        emcProviderUrl.hash = EMC_PROVIDER_ENDPOINT;
        if (this._emcWindow) {
            this._emcWindow.close();
        }
        this._removeEventListener();
        this._eventHandler = this._getEventHandler(emcProviderUrl, options);
        window.addEventListener('message', this._eventHandler);
        this._emcWindow = window.open(emcProviderUrl.toString(), 'emcWindow', options.windowOpenerFeatures);
        var checkInterruption = function () {
            if (_this._emcWindow) {
                if (_this._emcWindow.closed) {
                    _this._handleFailure(exports.ERROR_USER_INTERRUPT, options.onError);
                }
                else {
                    setTimeout(checkInterruption, INTERRUPT_CHECK_INTERVAL);
                }
            }
        };
        checkInterruption();
    };
    return AuthClient;
}());
exports.AuthClient = AuthClient;
exports.instance = new AuthClient();
