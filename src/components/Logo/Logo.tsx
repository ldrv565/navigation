import React from 'react';
import {block} from '../utils/cn';
import {LogoProps} from '../types';
import {Button, Icon} from '@gravity-ui/uikit';

import {useAsideHeaderContext} from '../AsideHeader/AsideHeaderContext';

import './Logo.scss';

const b = block('logo');

export const Logo: React.FC<LogoProps> = ({
    text,
    icon,
    iconSrc,
    iconClassName,
    iconSize = 24,
    textSize = 15,
    href,
    wrapper,
    onClick,
}) => {
    const {compact} = useAsideHeaderContext();
    const hasWrapper = typeof wrapper === 'function';

    let buttonIcon;

    if (iconSrc) {
        buttonIcon = (
            <Button.Icon className={iconClassName}>
                <img alt="logo icon" src={iconSrc} width={iconSize} height={iconSize} />
            </Button.Icon>
        );
    } else if (icon) {
        buttonIcon = <Icon data={icon} size={iconSize} className={iconClassName} />;
    }

    const button = (
        <Button
            view="flat"
            size="l"
            className={b('btn-logo')}
            component={hasWrapper ? 'span' : undefined}
            onClick={onClick}
            target="_self"
            href={href}
        >
            {buttonIcon}
        </Button>
    );

    let logo: React.ReactNode;

    if (typeof text === 'function') {
        logo = text();
    } else {
        logo = (
            <div className={b('logo')} style={{fontSize: textSize}}>
                {text}
            </div>
        );
    }

    return (
        <div className={b()}>
            <div className={b('logo-btn-place')}>
                {hasWrapper ? wrapper(button, Boolean(compact)) : button}
            </div>
            {!compact &&
                (hasWrapper ? (
                    <div onClick={onClick}>{wrapper(logo, Boolean(compact))}</div>
                ) : (
                    <a
                        href={href ?? '/'}
                        target="_self"
                        className={b('logo-link')}
                        onClick={onClick}
                    >
                        {logo}
                    </a>
                ))}
        </div>
    );
};
