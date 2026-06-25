import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Industrial Fleet"
          className="w-full h-full object-cover filter brightness-50 contrast-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkI4f_903Xue9k91UdWcB2ltj6-UxbIErZBsnOILot3SXZCF9l5k6SKx9PrKek5rCFeZzLBz4trase4_2cpgZBwzL-5znxNCQtg2US56AlOUO8v6nDIe7GlyJxqkf_qCg2yQ6enIBFak24i3OkrJW6aK9FzrZRcFyx6YY60kZYBiRsjdj9nQbJ_fVGe0YIdxVeUQ-M4IjD_KCbGO1cr-kpwNOKxf4nFftUk357ZFu8DND-7JJry7pObkXUieIIIJ0Ll6d5ivlUWk8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary-container text-on-primary-container px-4 py-1 mb-6 font-bold uppercase tracking-widest text-xs">
            24/7 Emergency Response
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-on-background uppercase mb-6 leading-[0.9] text-primary">
            KEEP YOUR <br />DOWNTIME DOWN
          </h1>
          <p className="text-lg text-secondary mb-10 max-w-lg rugged-border pl-6">
            Professional on-site fleet maintenance and emergency repair. We bring the shop to your job site to ensure maximum uptime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-primary-container text-on-primary-container px-8 py-4 font-black uppercase flex items-center justify-center gap-3 hover:brightness-110 transition-all hard-shadow"
            >
              Get a Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a
              href="tel:5555551234"
              className="border-2 border-primary text-primary px-8 py-4 font-black uppercase flex items-center justify-center gap-3 hover:bg-primary/10 transition-colors"
            >
              Emergency Repair
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
      <h2 className="text-4xl font-black uppercase mb-2">About Huckins Fleet Repair</h2>
      <div className="w-16 h-1 bg-primary-container mb-6"></div>
      <p className="text-xs font-black uppercase tracking-widest text-primary-container mb-10">Your Partner in Uptime</p>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left — copy */}
        <div className="space-y-6">
          <p className="text-base text-on-surface leading-relaxed rugged-border pl-6">
            At Huckins Fleet Repair, we aren't just mechanics; we are specialists in operational continuity. We understand that in the fleet industry, every minute of equipment downtime is a direct hit to your bottom line.
          </p>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Built on a philosophy of 'Keep Your Downtime Down', our service is engineered for reliability and precision. We bring dealership-level expertise directly to your job site, eliminating the logistical headaches and costs of transporting heavy equipment to a fixed shop. Our mission is to keep the wheels of your business turning through uncompromising technical excellence and rapid mobile response.
          </p>
        </div>

        {/* Right — Why Choose Us */}
        <div className="border border-outline-variant bg-surface-container p-8 space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">verified_user</span>
            Why Choose Us
          </h3>
          <div className="h-px bg-outline-variant"></div>
          {[
            { icon: 'schedule', label: '24/7 Rapid Response' },
            { icon: 'engineering', label: 'Certified Technicians' },
            { icon: 'build', label: 'On-Site Precision Repair' },
            { icon: 'receipt_long', label: 'Transparent Pricing' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">{icon}</span>
              <span className="text-sm font-black uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About / Quick Nav */}
    <section className="py-stack-lg px-margin-desktop max-w-container-max mx-auto">
      <div className="grid lg:grid-cols-2 gap-stack-lg items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase">Your Partner in Uptime</h2>
          <p className="text-lg text-secondary rugged-border pl-6">
            We aren't just mechanics; we are specialists in operational continuity. We understand that every minute of downtime is a direct hit to your bottom line.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-low border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">schedule</span>
              <p className="font-bold uppercase text-xs">24/7 Response</p>
            </div>
            <div className="p-4 bg-surface-container-low border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">verified</span>
              <p className="font-bold uppercase text-xs">Certified Pros</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/services" className="group relative h-48 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN38LeEd30yE95LA-OvHxD86L8y9gY1J3or_FbC8Q1wSUr2bC7L35siWEx64ubkbAzKyWYi4QEzDw2rfRQFdPBW_OhPEprvVY2jRvm_CPoe4FFXniAJzeo25HOBqO0E3d1yimeurxBIyRacPUaWvXqbbKFOaPrhPssnOMoKGN7X63Fsu2AYcnsVGHNG0a0LNUrWbRNRZyGVQJOgKxDCapmokIct4Ly60O4lTaGhcLpkwMEKb3-jZT48IHjkNQrt_JQ1mOmvxBrWA4"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
              alt="Services"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <span className="text-white font-black uppercase text-xl">Services</span>
            </div>
          </Link>
          <Link to="/rates" className="group relative h-48 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAatRzHoRs0ht6bKpnN8rNroJBpgPdPbop1JmXJrQpCceRDXATClO4X8xwa2RNLTMKuRE7gnryCQhxqGzjNO7oOYJmmUZjNqT63AkxT-jqKNnW7o0tr9mYLkFLgB99gnnmjKDZEgFxUbbBkeeDkaZOGh2VvUS8s2sP3bFY3hdJB6rmB8NckgN34YOqpjwKvbTEMsAJSMzG6rjUpIzp7oGAXogqw_afPGs6-AKg_NL5xSqoow-FTYuPqBBlNK86B7Wrir5C1Ez9gLHk"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
              alt="Rates"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <span className="text-white font-black uppercase text-xl">Rates</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
