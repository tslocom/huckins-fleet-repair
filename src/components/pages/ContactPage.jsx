import { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface-container-lowest py-20 px-margin-desktop border-b-4 border-primary">
        <div className="max-w-container-max mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-on-surface mb-4 uppercase">GET IN TOUCH</h1>
          <p className="text-lg max-w-2xl text-on-surface-variant leading-relaxed">
            Uptime is our metric. Professional solutions to keep your logistics moving across Oregon and Washington.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-container-max mx-auto py-20 px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-10">
          {/* Owner Bio */}
          <div className="bg-surface-container-low p-10 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                alt="Travis"
                className="w-full md:w-1/3 grayscale border border-outline-variant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjgr6ZBiCDOtV6r80TGZ9diWmPP-fKiBI3gj64-8lVBmGVqXAWFE-iyEX2-RfJ8jLt6O8UXJJ1VIw_9khOT94GiM-x7vO2qCCYiBz4An_Ew-ZEodG4zDHwLijSrnbs0em2aVQiximYgatPfAyIlK22jGcj-FQzbDX7TO_PNPE-41Kd8ADInRA_73V6thVuQcU_s02WERUYvxWPSDzgAJTVtSapR4Bn_9zIWL9hO5xbrImx7Yrn5uPipW0Umw7O9wBH5jO4aM-MwNc"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-primary uppercase">Travis Huckins, Owner</h2>
                <p className="text-sm text-on-surface-variant">
                  20+ years of heavy-duty diesel experience. Travis founded this company on a simple principle: precision uptime.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <span className="text-[10px] font-black uppercase">Certified Technician</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary mb-2">call</span>
              <p className="text-[10px] font-black uppercase text-on-surface-variant">Direct Line</p>
              <p className="text-xl font-black">(555) 555-1234</p>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary mb-2">mail</span>
              <p className="text-[10px] font-black uppercase text-on-surface-variant">Service Email</p>
              <p className="text-xl font-black">service@huckinsfleet.com</p>
            </div>
          </div>

          {/* Coverage Area */}
          <div className="bg-surface-container-low p-6">
            <h3 className="text-lg font-black uppercase mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">distance</span> Coverage Area
            </h3>
            <div className="aspect-video w-full bg-surface-container relative overflow-hidden grayscale contrast-125">
              <img
                className="w-full h-full object-cover opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1WfIazd3pMvP5wN1N6wOAhQyUe-as9Ld30UBlKX3ipKo46Z0qhqMoQ_0oCyiRfpj2Y0Tqz3uMUMXtaxvFXEvMTxlWHEsMzq9NCQicqIyJh8Dz2PJzNZullAA2cybT9ZE6s3lfMFwloVjB-YQXVofvQqzYFJrgjqlRcoQZOphfD-ySYjjtdqiCfCg5JknORjS8R7FtstJ4pHGxeYjP-pbcPyc0xELX638mE3A6CMxKtw7b8LkCh0oDFybUrZ7pamsdc6sQxTaxIyI"
                alt="Service coverage map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-on-primary-container px-6 py-2 font-black uppercase tracking-widest shadow-2xl">
                  OR & WA SERVICE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <aside className="lg:col-span-5">
          <div className="bg-surface-container-high p-10 border border-outline-variant sticky top-24 hard-shadow">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-on-surface uppercase mb-2">Fleet Contract Request</h2>
              <p className="text-[10px] font-black text-primary uppercase">Send us your contact information and a brief description of your fleet size and needs. We will contact you and create a fleet agreement that meets your needs.</p>
            </div>

            {submitted ? (
              <div className="bg-primary-container/20 p-8 text-center border-2 border-primary-container">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
                <h3 className="text-xl font-black uppercase mb-2">Request Sent</h3>
                <p className="text-sm">Request recieved. We will contact you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-black uppercase underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-on-surface-variant mb-1 block">
                      Company Name
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-3 text-on-surface transition-colors"
                      placeholder="Logistics Corp"
                      type="text"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase text-on-surface-variant mb-1 block">
                        Email
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-3 text-on-surface transition-colors"
                        placeholder="email@corp.com"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-on-surface-variant mb-1 block">
                        Phone
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-3 text-on-surface transition-colors"
                        placeholder="555-555-5555"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-on-surface-variant mb-1 block">
                      Fleet Details
                    </label>
                    <textarea
                      className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-3 text-on-surface transition-colors resize-none"
                      placeholder="Detail the issue..."
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  className="w-full bg-primary-container text-on-primary-container font-black py-4 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all hard-shadow"
                  type="submit"
                >
                  Submit Dispatch Request
                </button>
              </form>
            )}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ContactPage;
