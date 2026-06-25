const EmergencyMobileBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container border-t-2 border-primary p-4 shadow-2xl">
    <a
      className="w-full bg-primary-container text-on-primary-container py-4 font-black uppercase flex items-center justify-center gap-3"
      href="tel:5555551234"
    >
      <span className="material-symbols-outlined">emergency</span>
      Emergency Dispatch
    </a>
  </div>
);

export default EmergencyMobileBar;
