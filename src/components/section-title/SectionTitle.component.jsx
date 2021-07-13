import React from 'react'

function SectionTitle({title, subTitle, rightAlign}) {
    return (
        <React.Fragment>
            <h3 className={`title--sm text-capitalize ${rightAlign ? 'text-right': ''}`}>{subTitle}</h3>
            <h2 className={`title--xl text-capitalize ${rightAlign ? 'text-right': ''}`}>{title}</h2>
        </React.Fragment>
    )
}

export default SectionTitle
