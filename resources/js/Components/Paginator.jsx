import { Link } from '@inertiajs/inertia-react'
import React from 'react'

const Paginator = ({ meta }) => {
  const page = meta.current_page
  const prev = meta.links[0].url
  const next = meta.links[meta.links.length - 1].url
  return (
    <div className="btn-group">
      <Link href={prev} className={`${prev == null ? 'btn-disabled' : ''} btn btn-outline `}>«</Link>
      <Link className="btn btn-outline">{page}</Link>
      <Link href={next} className={`${next == null ? 'btn-disabled' : ''} btn btn-outline `}>»</Link>
    </div>
  )
}

export default Paginator