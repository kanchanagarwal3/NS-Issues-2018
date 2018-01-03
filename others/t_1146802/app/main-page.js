"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var geolocation = require("nativescript-geolocation");
var vm = new observable_1.Observable();
function navigatingTo(args) {
    var page = args.object;
    vm.set("latitude", "loading latitude...");
    vm.set("longitude", "loading longitude...");
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
function getLocation() {
    getDeviceLocation().then(function (location) {
        console.log(location);
        vm.set("latitude", location.latitude);
        vm.set("longitude", location.longitude);
    });
}
exports.getLocation = getLocation;
function getDeviceLocation() {
    return new Promise(function (resolve, reject) {
        geolocation.isEnabled().then(function () {
            geolocation.getCurrentLocation({ desiredAccuracy: 3, timeout: 100 }).then(function (location) {
                resolve(location);
            });
        }, function (error) {
            geolocation.enableLocationRequest().then(function () {
                geolocation.getCurrentLocation({ timeout: 100 }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                    console.log(error);
                });
            }, function (error) {
                console.dir(error);
            });
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBR3hELHNEQUF3RDtBQUV4RCxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUUxQixzQkFBNkIsSUFBZTtJQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUU1QyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBUEQsb0NBT0M7QUFFRDtJQUNJLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBUEQsa0NBT0M7QUFFRDtJQUVJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUM5RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUMxRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIHZtLnNldChcImxhdGl0dWRlXCIsIFwibG9hZGluZyBsYXRpdHVkZS4uLlwiKTtcbiAgICB2bS5zZXQoXCJsb25naXR1ZGVcIiwgXCJsb2FkaW5nIGxvbmdpdHVkZS4uLlwiKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIGdldERldmljZUxvY2F0aW9uKCkudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuICAgICAgICB2bS5zZXQoXCJsYXRpdHVkZVwiLCBsb2NhdGlvbi5sYXRpdHVkZSk7XG4gICAgICAgIHZtLnNldChcImxvbmdpdHVkZVwiLCBsb2NhdGlvbi5sb25naXR1ZGUpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldERldmljZUxvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBnZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogMywgdGltZW91dDogMTAwIH0pLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgdGltZW91dDogMTAwIH0pLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgIH0pO1xuXG59Il19