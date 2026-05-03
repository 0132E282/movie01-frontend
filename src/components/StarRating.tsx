import Icon from "./Icon";

export default function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating / 2);
  const pct = (rating / 2 - full) * 100;
  return (
    <div className="flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="relative w-[14px] h-[14px]">
          <Icon name="starFill" size={14} color="rgba(255,255,255,0.15)" />
          {i <= full && (
            <div className="absolute inset-0">
              <Icon name="starFill" size={14} color="var(--gold)" />
            </div>
          )}
          {i === full + 1 && pct > 0 && (
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
              <Icon name="starFill" size={14} color="var(--gold)" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
