"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var _intentSubject = new ReplaySubject_1.ReplaySubject();
exports.onNewIntent = _intentSubject.asObservable();
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
        var creationIntent = this.getIntent();
        _intentSubject.next(creationIntent);
    };
    Activity.prototype.onNewIntent = function (intent) {
        _super.prototype.onNewIntent.call(this, intent);
        this.setIntent(intent);
        _intentSubject.next(intent);
    };
    Activity.prototype.onSaveInstanceState = function (outState) {
        console.log("onSaveInstanceState");
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    Activity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
    };
    Activity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
    };
    Activity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
    };
    Activity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
    };
    Activity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    Activity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    Activity = __decorate([
        JavaProxy("com.test.TestActivity")
    ], Activity);
    return Activity;
}(android.app.Activity));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5LmFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBMEU7QUFDMUUsb0RBQW1EO0FBR25ELElBQU0sY0FBYyxHQUFHLElBQUksNkJBQWEsRUFBMEIsQ0FBQztBQUV0RCxRQUFBLFdBQVcsR0FBdUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBRzdGO0lBQXVCLDRCQUFvQjtJQUEzQzs7SUErQ0EsQ0FBQztJQTVDRywyQkFBUSxHQUFSLFVBQVMsa0JBQXFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsNEJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxpQkFBTSxRQUFRLENBQUMsQ0FBQztRQUVuRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLE1BQThCO1FBQ3RDLGlCQUFNLFdBQVcsWUFBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVTLHNDQUFtQixHQUE3QixVQUE4QixRQUEyQjtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGlCQUFNLG1CQUFtQixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVTLDBCQUFPLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGlCQUFNLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxpQkFBTSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRVMsNEJBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsaUJBQU0sU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLGdDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGlCQUFNLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSw2Q0FBMEIsR0FBakMsVUFBa0MsV0FBbUIsRUFBRSxXQUEwQixFQUFFLFlBQTJCO1FBQzFHLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25JLENBQUM7SUFFUyxtQ0FBZ0IsR0FBMUIsVUFBMkIsV0FBbUIsRUFBRSxVQUFrQixFQUFFLElBQTRCO1FBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGlCQUFNLGdCQUFnQixDQUFDLENBQUM7SUFDbEcsQ0FBQztJQTlDQyxRQUFRO1FBRGIsU0FBUyxDQUFDLHVCQUF1QixDQUFDO09BQzdCLFFBQVEsQ0ErQ2I7SUFBRCxlQUFDO0NBQUEsQUEvQ0QsQ0FBdUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBK0MxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuZHJvaWRBY3Rpdml0eUNhbGxiYWNrcywgc2V0QWN0aXZpdHlDYWxsYmFja3MgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gXCJyeGpzL1JlcGxheVN1YmplY3RcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmNvbnN0IF9pbnRlbnRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8YW5kcm9pZC5jb250ZW50LkludGVudD4oKTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbk5ld0ludGVudDogT2JzZXJ2YWJsZTxhbmRyb2lkLmNvbnRlbnQuSW50ZW50PiA9IF9pbnRlbnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuQEphdmFQcm94eShcImNvbS50ZXN0LlRlc3RBY3Rpdml0eVwiKVxyXG5jbGFzcyBBY3Rpdml0eSBleHRlbmRzIGFuZHJvaWQuYXBwLkFjdGl2aXR5IHtcclxuICAgIHByaXZhdGUgX2NhbGxiYWNrczogQW5kcm9pZEFjdGl2aXR5Q2FsbGJhY2tzO1xyXG5cclxuICAgIG9uQ3JlYXRlKHNhdmVkSW5zdGFuY2VTdGF0ZTogYW5kcm9pZC5vcy5CdW5kbGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBzZXRBY3Rpdml0eUNhbGxiYWNrcyh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQ3JlYXRlKHRoaXMsIHNhdmVkSW5zdGFuY2VTdGF0ZSwgc3VwZXIub25DcmVhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGlvbkludGVudCA9IHRoaXMuZ2V0SW50ZW50KCk7XHJcbiAgICAgICAgX2ludGVudFN1YmplY3QubmV4dChjcmVhdGlvbkludGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZXdJbnRlbnQoaW50ZW50OiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25OZXdJbnRlbnQoaW50ZW50KTtcclxuICAgICAgICB0aGlzLnNldEludGVudChpbnRlbnQpO1xyXG4gICAgICAgIF9pbnRlbnRTdWJqZWN0Lm5leHQoaW50ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TYXZlSW5zdGFuY2VTdGF0ZShvdXRTdGF0ZTogYW5kcm9pZC5vcy5CdW5kbGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uU2F2ZUluc3RhbmNlU3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uU2F2ZUluc3RhbmNlU3RhdGUodGhpcywgb3V0U3RhdGUsIHN1cGVyLm9uU2F2ZUluc3RhbmNlU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblN0YXJ0KHRoaXMsIHN1cGVyLm9uU3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uU3RvcCh0aGlzLCBzdXBlci5vblN0b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uRGVzdHJveSh0aGlzLCBzdXBlci5vbkRlc3Ryb3kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkJhY2tQcmVzc2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkJhY2tQcmVzc2VkKHRoaXMsIHN1cGVyLm9uQmFja1ByZXNzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlcXVlc3RQZXJtaXNzaW9uc1Jlc3VsdChyZXF1ZXN0Q29kZTogbnVtYmVyLCBwZXJtaXNzaW9uczogQXJyYXk8U3RyaW5nPiwgZ3JhbnRSZXN1bHRzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uUmVxdWVzdFBlcm1pc3Npb25zUmVzdWx0KHRoaXMsIHJlcXVlc3RDb2RlLCBwZXJtaXNzaW9ucywgZ3JhbnRSZXN1bHRzLCB1bmRlZmluZWQgLypUT0RPOiBFbmFibGUgaWYgbmVlZGVkKi8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkFjdGl2aXR5UmVzdWx0KHJlcXVlc3RDb2RlOiBudW1iZXIsIHJlc3VsdENvZGU6IG51bWJlciwgZGF0YTogYW5kcm9pZC5jb250ZW50LkludGVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkFjdGl2aXR5UmVzdWx0KHRoaXMsIHJlcXVlc3RDb2RlLCByZXN1bHRDb2RlLCBkYXRhLCBzdXBlci5vbkFjdGl2aXR5UmVzdWx0KTtcclxuICAgIH1cclxufSJdfQ==