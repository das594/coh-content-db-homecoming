import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const LordOfWar: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "lord-of-war",
    names: [{value: "Lord of War"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Damage and Knockback."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Lord of War Badge", href: "https://paragonwiki.com/wiki/Lord_of_War_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-5"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 14
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 14
        }
    ]
};