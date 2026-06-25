import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'On-Site Engine Repair', icon: 'engineering', desc: 'Complete diagnostics and major overhauls for Class 7 & 8 trucks. Fuel systems, turbochargers, and aftertreatment.', priority: true },
  { id: 2, title: 'DOT Inspections', icon: 'fact_check', desc: 'Federally mandated safety inspections to keep your fleet compliant and your drivers safe.', priority: true },
  { id: 3, title: 'Brake & Air Systems', icon: 'settings_input_component', desc: 'Full service for S-cam, disc, and hydraulic systems. Air dryer service and leak detection.' },
  { id: 4, title: 'Hydraulic Systems', icon: 'fluid_balance', desc: 'Mobile hose crimping and cylinder resealing for wet kits, garbage trucks, and heavy loaders.' },
  { id: 5, title: 'OEM Diagnostics', icon: 'monitor_heart', desc: 'Fault finding using latest software for Cummins, Detroit, Paccar, and Volvo.' },
  { id: 6, title: 'PM Programs', icon: 'verified', desc: 'Scheduled preventative maintenance tailored to your duty cycle, reducing breakdowns by 35%.' },
];

const ServicesPage = () => (
  <div className="pt-20">
    <header className="relative h-[400px] w-full overflow-hidden flex items-end border-b-4 border-primary">
      <img
        alt="Workshop"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN38LeEd30yE95LA-OvHxD86L8y9gY1J3or_FbC8Q1wSUr2bC7L35siWEx64ubkbAzKyWYi4QEzDw2rfRQFdPBW_OhPEprvVY2jRvm_CPoe4FFXniAJzeo25HOBqO0E3d1yimeurxBIyRacPUaWvXqbbKFOaPrhPssnOMoKGN7X63Fsu2AYcnsVGHNG0a0LNUrWbRNRZyGVQJOgKxDCapmokIct4Ly60O4lTaGhcLpkwMEKb3-jZT48IHjkNQrt_JQ1mOmvxBrWA4"
      />
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-10">
        <div className="rugged-border pl-6">
          <h1 className="text-5xl font-black text-white uppercase mb-4">Elite Fleet <br />Capabilities</h1>
          <p className="max-w-2xl text-on-surface-variant font-bold">
            We bring dealership-level precision directly to your job site or terminal.
          </p>
        </div>
      </div>
    </header>

    <main className="w-full max-w-container-max mx-auto px-margin-desktop py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((s) => (
          <section
            key={s.id}
            className="bg-surface-container border border-surface-variant p-stack-lg service-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary-container text-5xl">{s.icon}</span>
                {s.priority && (
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-black uppercase">
                    Priority
                  </span>
                )}
              </div>
              <h2 className="text-xl font-black uppercase mb-4">{s.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
            <Link
              to="/contact"
              className="mt-8 text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform"
            >
              Request Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </section>
        ))}
      </div>

      <div className="mt-20 bg-surface-container-lowest border-t-4 border-primary-container p-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black uppercase mb-4">Maintenance Programs</h2>
            <p className="text-on-surface-variant">
              Don't wait for a breakdown. Our PM programs are tailored to your fleet's duty cycle, reducing unexpected downtime and long-term costs.
            </p>
          </div>
          <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
            <div className="bg-surface p-6 border border-surface-variant text-center">
              <p className="text-4xl font-black text-primary">A</p>
              <p className="text-xs font-bold uppercase mt-2">Lubrication</p>
            </div>
            <div className="bg-surface p-6 border border-surface-variant text-center">
              <p className="text-4xl font-black text-primary">B</p>
              <p className="text-xs font-bold uppercase mt-2">Full Inspection</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default ServicesPage;
