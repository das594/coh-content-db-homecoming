import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const TriggerMan: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "trigger-man",
    names: [{value: "Trigger Man"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Recharge Rate and Interrupt Time."}],
    links: [
        {title: "Trigger Man Badge", href: "https://paragonwiki.com/wiki/Trigger_Man_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-1"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 10
        }
    ]
};