export default function Header() {
  return (
    <header className="bg-espresso sticky top-0 z-50 shadow-lg">
      <div className="max-w-3xl mx-auto px-4 h-16 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-caramel flex items-center justify-center shrink-0">
          <span className="text-foam text-sm font-bold" style={{ fontFamily: "Georgia, serif" }}>N</span>
        </div>
        <div>
          <p className="text-latte font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Northstar Coffee
          </p>
          <p className="text-bark text-xs leading-tight">Onboarding Assistant</p>
        </div>
      </div>
    </header>
  );
}
