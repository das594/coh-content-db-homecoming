import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FlamesOfPrometheus: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "flames-of-prometheus",
    names: [
        {value: "Flames of Prometheus"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    notes: `Complete the Mortimer Kal Strike Force.

Can be redeemed for a Notice of the Well at 50

**Note: once redeemed, this badge is no longer obtainable. This badge is also not included in badge totals.**`,
    links: [
        {title: "Flames of Prometheus Badge", href: "https://paragonwiki.com/wiki/Flames_of_Prometheus"}
    ],
    ignoreInTotals: true
};
