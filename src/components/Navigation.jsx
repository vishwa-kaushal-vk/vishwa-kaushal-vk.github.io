const clickSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3"
);

export default function Navigation({ page, setPage }) {
  const go = (p) => {
    clickSound.currentTime = 0;
    clickSound.play();
    setPage(p);
  };

  return (
    <div className="nav">
      {["home", "about", "projects", "contact"].map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          className={page === p ? "active-tab glow-hover" : "glow-hover"}
        >
          {p.toUpperCase()}
        </button>
      ))}
    </div>
  );
}