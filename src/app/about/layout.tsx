import React from 'react'

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>LAYOUT</nav>
      {children}
    </section>
  )
}
