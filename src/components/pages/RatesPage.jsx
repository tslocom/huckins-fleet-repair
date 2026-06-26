import { Link } from 'react-router-dom';

const RatesPage = () => (
  <div className="pt-20">
    {/* Header */}
    <section className="relative py-20 px-margin-desktop border-b border-surface-variant">
      <div className="max-w-container-max mx-auto">
        <div className="inline-block bg-primary-container text-on-primary-container px-4 py-1 font-black text-xs uppercase mb-6">
          Transparent Pricing
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 max-w-4xl">
          PRECISION SERVICE <br /> <span className="text-primary">WITHOUT GUESSWORK</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Minimize downtime with clear, upfront rates for fleet maintenance and heavy-duty repairs. No hidden fees.
        </p>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-stack-lg px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-stack-lg">
        {/* Light Duty */}
        <div className="bg-surface-container border border-surface-variant p-10 relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary-container transition-all group-hover:w-2"></div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-black uppercase mb-2">Light Duty</h2>
              <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">Passenger Vehicles</p>
            </div>
            <span className="material-symbols-outlined text-primary text-5xl">directions_car</span>
          </div>
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-end border-b border-surface-variant pb-4">
              <span className="text-xs font-black uppercase text-on-surface-variant">Labor Rate</span>
              <span className="text-4xl font-black text-primary">$125<span className="text-sm">/HR</span></span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 text-on-surface">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">Cars, Vans, & SUVs</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">1500/150 Trucks and Cargo Vans</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">On-site Computer Diagnostics</span>
            </li>
          </ul>
        </div>

        {/* Medium Duty */}
        <div className="bg-surface-container border border-surface-variant p-10 relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary-container transition-all group-hover:w-2"></div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-black uppercase mb-2">Medium Duty</h2>
              <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">Class 4-6 Vehicles</p>
            </div>
            <span className="material-symbols-outlined text-primary text-5xl">local_shipping</span>
          </div>
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-end border-b border-surface-variant pb-4">
              <span className="text-xs font-black uppercase text-on-surface-variant">Labor Rate</span>
              <span className="text-4xl font-black text-primary">$145<span className="text-sm">/HR</span></span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 text-on-surface">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">Box Trucks & Vans</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">Walk-in Vans & Flatbeds</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">On-site Computer Diagnostics</span>
            </li>
          </ul>
        </div>

        {/* Heavy Duty */}
        <div className="bg-surface-container-high border-2 border-primary-container p-10 relative overflow-hidden group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-black uppercase mb-2">Heavy Duty</h2>
              <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">Class 7-8 & Specialized</p>
            </div>
            <span className="material-symbols-outlined text-primary text-5xl">construction</span>
          </div>
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-end border-b border-outline-variant pb-4">
              <span className="text-xs font-black uppercase text-on-surface-variant">Labor Rate</span>
              <span className="text-4xl font-black text-primary">$185<span className="text-sm">/HR</span></span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 text-on-surface">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">Semi-Trucks & Tractors</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">Heavy Construction Equipment</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              <span className="text-sm">Complex Hydraulic Repairs</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Minimum Notice */}
      <div className="bg-surface-container-lowest border-l-8 border-primary-container p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-primary-container text-5xl">warning</span>
          <div>
            <h3 className="text-xl font-black uppercase">Service Minimum Notice</h3>
            <p className="text-on-surface-variant text-sm">All on-site service calls are subject to a standard labor minimum.</p>
          </div>
        </div>
        <div className="bg-surface-container border border-surface-variant px-10 py-4 flex items-baseline gap-2 hard-shadow">
          <span className="text-5xl font-black text-primary">01</span>
          <span className="font-black uppercase tracking-widest text-xs">Hour Minimum</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest border-l-8 border-primary-container p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-primary-container text-5xl">warning</span>
          <div>
            <h3 className="text-xl font-black uppercase">Diagnostics</h3>
            <p className="text-on-surface-variant text-sm">Fee covers up to one hour of diagnostics, additional diagnostics will be charged at the relevant labor rate.</p>
          </div>
        </div>
        <div className="bg-surface-container border border-surface-variant px-10 py-4 flex items-baseline gap-2 hard-shadow">
          <span className="text-5xl font-black text-primary">$150</span>
          <span className="font-black uppercase tracking-widest text-xs">One Hour</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest border-l-8 border-primary-container p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-primary-container text-5xl">warning</span>
          <div>
            <h3 className="text-xl font-black uppercase">Dispatch</h3>
            <p className="text-on-surface-variant text-sm">Fee covers up to 50 miles round trip. Additional mileage will be billed at a rate of $2 per mile.</p>
          </div>
        </div>
        <div className="bg-surface-container border border-surface-variant px-10 py-4 flex items-baseline gap-2 hard-shadow">
          <span className="text-5xl font-black text-primary">$150</span>
          <span className="font-black uppercase tracking-widest text-xs">50 Miles</span>
        </div>
      </div>
    </section>

    {/* Emergency / After Hours */}
    <section className="py-20 bg-surface-container-low mt-10">
      <div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
            Emergency & After-Hours
          </h2>
          <p className="text-on-surface-variant mb-6">
            Breakdowns don't follow a 9-to-5 schedule. We are available for critical fleet repairs 24/7. Pricing varies by urgency and location.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface border border-outline-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="text-xs font-black uppercase">After 6PM</span>
            </div>
            <div className="p-4 bg-surface border border-outline-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <span className="text-xs font-black uppercase">Weekends</span>
            </div>
          </div>
        </div>
        <div className="bg-background border-2 border-primary p-10 text-center">
          <h3 className="text-2xl font-black mb-4 uppercase">Request Repair</h3>
          <p className="text-sm text-on-surface-variant mb-8">Get an immediate estimate for emergency roadside assistance.</p>
          <Link
            to="/contact"
            className="block w-full bg-primary-container text-on-primary-container py-4 font-black uppercase hard-shadow hover:brightness-110 active:scale-95 transition-all"
          >
            Get Emergency Help
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default RatesPage;
