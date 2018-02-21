"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page;
var navFrame, secondNavFrame;
function onLoaded(args) {
    var contanier = args.object;
    navFrame = contanier.getViewById("navFrame");
    secondNavFrame = contanier.getViewById("secondNavFrame");
    navFrame.navigate("./firstFramePages/first");
    secondNavFrame.navigate("./secondFramePages/first");
}
exports.onLoaded = onLoaded;
;
function navToFirst() {
    navFrame.navigate("./firstFramePages/first");
}
exports.navToFirst = navToFirst;
function navToSecond() {
    navFrame.navigate("./firstFramePages/second");
}
exports.navToSecond = navToSecond;
function navOnSecondFrameToFirst() {
    secondNavFrame.navigate("./secondFramePages/first");
}
exports.navOnSecondFrameToFirst = navOnSecondFrameToFirst;
function navOnSecondFramToSecond() {
    secondNavFrame.navigate("./secondFramePages/second");
}
exports.navOnSecondFramToSecond = navOnSecondFramToSecond;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLFFBQVEsRUFBRSxjQUFjLENBQUM7QUFLN0Isa0JBQXlCLElBQUk7SUFDekIsSUFBSSxTQUFTLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUV4QyxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxjQUFjLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUM1QyxjQUFjLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUE7QUFDdkQsQ0FBQztBQVBELDRCQU9DO0FBQUEsQ0FBQztBQUVGO0lBQ0ksUUFBUSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2hELENBQUM7QUFGRCxnQ0FFQztBQUVEO0lBQ0ksUUFBUSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pELENBQUM7QUFGRCxrQ0FFQztBQUVEO0lBQ0ksY0FBYyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELENBQUM7QUFGRCwwREFFQztBQUVEO0lBQ0ksY0FBYyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFGRCwwREFFQyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYWdlO1xubGV0IG5hdkZyYW1lLCBzZWNvbmROYXZGcmFtZTtcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzKSB7XG4gICAgbGV0IGNvbnRhbmllciA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuXG4gICAgbmF2RnJhbWUgPSBjb250YW5pZXIuZ2V0Vmlld0J5SWQoXCJuYXZGcmFtZVwiKTtcbiAgICBzZWNvbmROYXZGcmFtZSA9IGNvbnRhbmllci5nZXRWaWV3QnlJZChcInNlY29uZE5hdkZyYW1lXCIpO1xuICAgIG5hdkZyYW1lLm5hdmlnYXRlKFwiLi9maXJzdEZyYW1lUGFnZXMvZmlyc3RcIilcbiAgICBzZWNvbmROYXZGcmFtZS5uYXZpZ2F0ZShcIi4vc2Vjb25kRnJhbWVQYWdlcy9maXJzdFwiKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdlRvRmlyc3QoKSB7XG4gICAgbmF2RnJhbWUubmF2aWdhdGUoXCIuL2ZpcnN0RnJhbWVQYWdlcy9maXJzdFwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2VG9TZWNvbmQoKSB7XG4gICAgbmF2RnJhbWUubmF2aWdhdGUoXCIuL2ZpcnN0RnJhbWVQYWdlcy9zZWNvbmRcIilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdk9uU2Vjb25kRnJhbWVUb0ZpcnN0KCkge1xuICAgIHNlY29uZE5hdkZyYW1lLm5hdmlnYXRlKFwiLi9zZWNvbmRGcmFtZVBhZ2VzL2ZpcnN0XCIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZPblNlY29uZEZyYW1Ub1NlY29uZCgpIHtcbiAgICBzZWNvbmROYXZGcmFtZS5uYXZpZ2F0ZShcIi4vc2Vjb25kRnJhbWVQYWdlcy9zZWNvbmRcIilcbn1cbiJdfQ==