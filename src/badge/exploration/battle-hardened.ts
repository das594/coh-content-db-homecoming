import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const BattleHardened: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "battle-hardened",
    setTitleId: 2371,
    names: [{value: "Battle Hardened"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The loyal legions of Cimerora have prevailed in battle against an enemy wielding unimaginable power.`}],
    mapKey: Cimerora.key,
    location: [-1006.2, 265.5, 3113.5],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "2"
};
