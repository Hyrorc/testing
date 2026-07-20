// Duotone photo frame. Renders an image under a navy/sepia duotone treatment
// (shadows -> navy, highlights -> warm cream), matching the HYRO brand set.
//
// props:
//   src, alt        image
//   tone            'navy' (default) | 'plain' (light editorial gray)
//   ratio           CSS aspect-ratio, e.g. '4 / 5', '16 / 10'
//   veil            true -> adds a bottom gradient for legible overlaid content
//   className       extra classes
//   children        overlay content (chips, captions) — sits above the duotone
export default function Photo({
  src,
  alt = '',
  tone = 'navy',
  ratio,
  veil = false,
  className = '',
  children,
  eager = false,
  plain = false,
}) {
  return (
    <div
      className={`photo photo--${tone}${veil ? ' photo--veil' : ''} ${className}`.trim()}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
      <span className="photo-grain" aria-hidden="true" />
      <div className={`photo ${plain ? 'photo--no-filter' : ''}`}></div>
      {children != null && <div className="photo-content">{children}</div>}
    </div>
  )
}
