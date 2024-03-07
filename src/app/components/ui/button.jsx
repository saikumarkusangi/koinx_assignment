import React, { forwardRef } from 'react';
import cn from 'clsx';
import Loading from './loading';

// eslint-disable-next-line react/display-name
const Button = forwardRef(({ className, loading, disabled, children, ...rest }, ref) => {
    const isDisabled = loading || disabled;

    return (
        <button
            className={cn(
                'custom-button main-tab px-4 py-2 rounded-md font-semibold',
                loading && 'relative !text-transparent disabled:cursor-wait',
                className
            )}
            type='button'
            disabled={isDisabled}
            ref={ref}
            {...rest}
        >
            {loading && (
                <Loading
                    iconClassName='h-5 w-5'
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                />
            )}
            {children}
        </button>
    );
});

export default Button;
