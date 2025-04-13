import React from 'react'
import Link from 'next/link'

const MenuLink = ({item}) => {
  return (
    <Link href={item.path} className={styles.container}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink