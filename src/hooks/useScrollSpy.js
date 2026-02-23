import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset

      // Check if at bottom of page
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        setActiveId(sectionIds[sectionIds.length - 1])
        return
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId(sectionIds[0])
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
