import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const OldFashioned: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "old-fashioned",
    names: [{value: "Old Fashioned"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Faultline.key,
    location: [-170.0, 74.0, -1504.0],
    badgeText: [{value: "Best doughnuts in all of Paragon City! You picked the ultimate bragging rights location."}],
    notes: "The Old Fashioned Badge is located inside the doughnut hole of the large inflatable doughnut on top of the Drenched Donuts shop just inside the entrance to Faultline.",
    links: [
        {title: "Old Fashioned Badge", href: "https://paragonwiki.com/wiki/Old_Fashioned_Badge"},
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};