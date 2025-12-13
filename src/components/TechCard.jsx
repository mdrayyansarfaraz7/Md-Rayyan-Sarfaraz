function TechCard({ name, icon }) {
  return (
    <div
      className="
        bg-black/70
        border border-emerald-500/40
        rounded-2xl
        p-6
        flex flex-col items-center justify-center
        gap-4
      "
    >
      <img
        src={icon}
        alt={name}
        className="
          h-12
          w-12
          object-contain
          opacity-90
        "
      />

      <p className="text-sm text-white/90 tracking-wide">
        {name}
      </p>
    </div>
  );
}

export default TechCard;
