import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';

import {FooterItem, FooterItemProps} from '../FooterItem';
import {ASIDE_HEADER_COMPACT_WIDTH, ASIDE_HEADER_EXPANDED_WIDTH} from '../../constants';

export default {
    title: 'Components/AsideHeader/FooterItem',
    component: FooterItem,
    decorators: [
        (DecoratedStory, context) => {
            const {
                args: {compact},
            } = context;
            const width = compact ? ASIDE_HEADER_COMPACT_WIDTH : ASIDE_HEADER_EXPANDED_WIDTH;

            return (
                <div style={{width}}>
                    <DecoratedStory />
                </div>
            );
        },
    ],
} as Meta;

const Template: Story<FooterItemProps> = (args) => <FooterItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    compact: false,
    text: 'Settings',
};
