import React from 'react'
import styles from '../styles/Feature.module.css'

const Feature = () => {
    return (
        <div useCallback(
          () => {
            first
          },
          [second],
        )
        >Feature</div>
    )
}

export default Feature