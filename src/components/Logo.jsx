const leaflets = [
    [-75, 0.45], [-50, 0.7], [-25, 0.9], [0, 1.1], [25, 0.9], [50, 0.7], [75, 0.45],
];

function Logo() {
    return (
      <a href="#top" className="logo" aria-label="SK Tier home">
        <svg viewBox="-55 -100 110 140" width="34" height="44" aria-hidden="true">
            <g fill="#C6FF3D" stroke="#C6FF3D" strokeWidth="2" strokeLinejoin="round">
                {leaflets.map(([angle, scale])=>(
                    <path
                        key={angle}
                        d="M0,0 C-10,-25 -10, -55 0, -85 C10, -55 10, -25 0, 0Z"
                        transform={`rotate(${angle}) scale(1, ${scale})`}
                    />
                ))}
                <line x1="0" y1="0" x2="0" y2="32" strokeWidth="6" strokeLinecap="round"/>
            </g>
        </svg>
        <span className="logo-text">SK TIER</span>
      </a>
    );
}
export default Logo;