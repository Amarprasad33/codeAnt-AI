const sideBarNavItems = [
    {
        displayName: 'Repositories',
        href: '#',
        iconName: 'Home'
    },
    {
        displayName: 'AI Code Review',
        href: '#',
        iconName: 'Code'
    },
    {
        displayName: 'Cloud Security',
        href: '#',
        iconName: 'Cloud'
    },
    {
        displayName: 'How to Use',
        href: '#',
        iconName: 'Book'
    },
    {
        displayName: 'Settings',
        href: '#',
        iconName: 'Settings'
    },
]
const secondaryActions = [
    {
        displayName: 'Support',
        href: '#',
        iconName: 'Phone'
    },
    {
        displayName: 'Logout',
        href: '#',
        iconName: 'SignOut'
    },
]
const navbarItemConfig = sideBarNavItems.concat(secondaryActions);

export { sideBarNavItems, secondaryActions, navbarItemConfig };