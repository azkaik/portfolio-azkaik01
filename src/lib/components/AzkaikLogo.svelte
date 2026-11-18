<script>
  let { size = 28, className = '' } = $props();
  const clipId = `az-logo-${Math.random().toString(36).slice(2, 8)}`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 128 128"
  fill="none"
  class={className}
  aria-hidden="true"
>
  <defs>
    <clipPath id={clipId}>
      <rect x="8" y="8" width="112" height="112" rx="22" />
    </clipPath>
  </defs>

  <!-- Diagonal Electric Blue (#0059FF) & Silver (#BDBDBD) Stripes -->
  <g clip-path={`url(#${clipId})`}>
    <rect x="0" y="0" width="128" height="128" fill="#0059FF" />
    <g transform="translate(64 64) rotate(-35)">
      <rect x="-100" y="-130" width="20" height="260" fill="#BDBDBD" />
      <rect x="-60" y="-130" width="20" height="260" fill="#BDBDBD" />
      <rect x="-20" y="-130" width="20" height="260" fill="#BDBDBD" />
      <rect x="20" y="-130" width="20" height="260" fill="#BDBDBD" />
      <rect x="60" y="-130" width="20" height="260" fill="#BDBDBD" />
      <rect x="100" y="-130" width="20" height="260" fill="#BDBDBD" />
    </g>
  </g>

  <!-- Rounded Square Bold Black Border -->
  <rect
    x="7"
    y="7"
    width="114"
    height="114"
    rx="23"
    stroke="#0A0A0A"
    stroke-width="8"
  />

  <!-- Bold Forward-Slanted 'A' -->
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M 55 24 L 77 24 L 89 92 L 71 92 L 68.5 76 L 43 76 L 36.5 92 L 19 92 Z M 61.5 41.5 L 48.5 63 L 66 63 Z"
    fill="#0A0A0A"
  />

  <!-- Five-Pointed Star Tucked at Lower-Right Leg -->
  <g transform="translate(88 86) rotate(8)">
    <polygon
      points="0,-24 6.2,-8.2 23,-7.4 9.8,3.2 14.2,19.4 0,10.2 -14.2,19.4 -9.8,3.2 -23,-7.4 -6.2,-8.2"
      fill="#FFFFFF"
      stroke="#0A0A0A"
      stroke-width="5"
      stroke-linejoin="miter"
    />
  </g>
</svg>
