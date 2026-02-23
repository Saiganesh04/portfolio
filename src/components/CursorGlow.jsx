import { useMousePosition } from '../hooks/useMousePosition'

export default function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.06), transparent 40%)`,
      }}
    />
  )
}
