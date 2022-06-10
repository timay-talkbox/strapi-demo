module.exports = {
    menus: {
        config: {
            maxDepth: 3,
            layouts: {
                menuItem: {
                    link: [
                        {
                            input: {
                                label: 'Custom Field Label',
                                name: 'custom_field',
                                type: 'text',
                            },
                            grid: {
                                col: 6,
                            },
                        },
                    ],
                },
            },
        },
    },
};