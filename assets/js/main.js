console.log("You're rich baby. 🍼");

import {
	theme_color,
	new_title,
	application_name,
	favicon_props,
	icon_path,
	sizes_array_for_apple_touch_icons,
	stylesheet_path,
	manifest_path
} from "./constants/index.js";

import {
	injectApplicationNameMetaTag,
	injectManifestLinkTag,
	injectMobileWebAppCapableMetaTag,
	injectFavicon,
	injectIosStatusBar,
	injectMetaThemeTag,
	injectTitle,
	injectStylesheet
} from "./lib/injections.js";

injectMetaThemeTag(theme_color);
injectStylesheet(stylesheet_path);
injectTitle(new_title);
injectFavicon(favicon_props);
injectIosStatusBar(theme_color);
injectMobileWebAppCapableMetaTag();
injectApplicationNameMetaTag(application_name);
injectManifestLinkTag(manifest_path);
