import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FashionDesigner: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "fashion-designer",
    names: [
        {value: "Fashion Designer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "You spend your free time perfecting your costume earning the Fashion Designer Day Job." +
            " Logging out at a Tailor will earn you a discount to Tailor fees, when you log back in, for a short time."
    }],
    acquisition: "Log out inside Tailor buildings for 100 hours.",
    effect: "Day Job: Tailor discount tokens",
    links: [
        {title: "Fashion Designer Badge", href: "https://paragonwiki.com/wiki/Fashion_Designer_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.fashion-designer"}]
};