import { init } from "@instantdb/react";

import { env } from "@/env";
import schema from "../../instant.schema";

export const isInstantConfigured = Boolean(env.VITE_INSTANT_APP_ID);

export const db = init({
	appId: env.VITE_INSTANT_APP_ID ?? "00000000-0000-0000-0000-000000000000",
	schema,
	useDateObjects: true,
});
