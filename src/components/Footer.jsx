const Footer = () => (
  <footer className="mt-stack-lg border-t-4 border-primary bg-surface-container-lowest">
    <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-margin-desktop w-full max-w-container-max mx-auto">
      <div className="mb-stack-md md:mb-0 text-center md:text-left">
        <div className="text-xl font-black text-on-surface uppercase mb-2">HUCKINS FLEET REPAIR</div>
        <p className="text-sm text-on-surface-variant italic">Professional Mobile Fleet Solutions</p>
        <p className="text-xs text-on-surface-variant uppercase mt-4">© 2024 Huckins Fleet Repair, LLC. All rights reserved.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="text-xs font-bold uppercase text-on-surface-variant hover:text-primary">Terms</a>
        <a href="#" className="text-xs font-bold uppercase text-on-surface-variant hover:text-primary">Privacy</a>
        <a href="#" className="text-xs font-black uppercase text-primary">Fleet Login</a>
      </div>
    </div>
  </footer>
);

export default Footer;
