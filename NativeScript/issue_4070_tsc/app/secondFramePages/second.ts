import { EventData } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
  let page = <Page>args.object;

  console.log("Second Frame's - second page navigated successfully.");
};