import React from 'react';
import styles from './FormsControls.module.css';

export const Element = Element => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (

        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    );
};

