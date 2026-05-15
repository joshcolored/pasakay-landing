const supportEmail = "pasakayapplication@gmail.com";
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.pasakay.app&pcampaignid=web_share";

export const metadata = {
  title: "Support | PaSakay",
  description: "Contact PaSakay support for trip, order, account, driver, and merchant concerns.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-[#dce7e5]/80 bg-mist/85 px-[clamp(18px,4vw,64px)] py-3.5 backdrop-blur-xl">
        <a
          className="flex items-center gap-2.5 text-[1.05rem] font-extrabold text-teal-950"
          href="/"
          aria-label="PaSakay home"
        >
          <img className="h-[38px] w-[38px] rounded-lg object-cover" src="/images/pasakay-logo.jpg" alt="" />
          <span className="hidden min-[430px]:inline">PaSakay</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold text-teal-700 md:flex" aria-label="Support navigation">
          <a href="/#features">Features</a>
          <a href="/privacy-policy">Privacy</a>
        </nav>
        <a
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-teal-900 px-4 text-sm font-extrabold leading-none text-white transition hover:-translate-y-0.5"
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </header>

      <section className="grid items-start gap-[clamp(28px,5vw,72px)] px-[clamp(18px,5vw,80px)] py-[clamp(48px,8vw,96px)] lg:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.18fr)]">
        <div className="max-w-[680px]">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            PaSakay Support
          </p>
          <h1 className="mb-[22px] text-[clamp(3rem,12vw,6.5rem)] font-black leading-[0.9] text-teal-950">
            How can we help?
          </h1>
          <p className="max-w-[560px] text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-[#667477]">
            Send trip, order, account, driver, or merchant concerns to the PaSakay team. Add clear
            details so support can review your request faster.
          </p>

          <div className="mt-8 rounded-lg bg-teal-900 p-7 text-white shadow-soft">
            <span className="mb-2 block font-black text-cream">Direct email</span>
            <a className="block [overflow-wrap:anywhere] text-xl font-black" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
            <p className="mt-4 text-base leading-7 text-white/80">
              For urgent trip or delivery concerns, include your mobile number and trip or order
              reference if available.
            </p>
          </div>
        </div>

        <form
          className="rounded-lg border border-[#dce7e5] bg-white p-[clamp(22px,4vw,36px)] shadow-soft"
          action={`mailto:${supportEmail}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-black text-teal-950">Full name</span>
              <input
                className="min-h-12 w-full rounded-lg border border-[#dce7e5] bg-mist px-4 text-base outline-none transition focus:border-teal-900 focus:bg-white"
                name="Full name"
                type="text"
                autoComplete="name"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-teal-950">Email address</span>
              <input
                className="min-h-12 w-full rounded-lg border border-[#dce7e5] bg-mist px-4 text-base outline-none transition focus:border-teal-900 focus:bg-white"
                name="Email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-teal-950">Mobile number</span>
              <input
                className="min-h-12 w-full rounded-lg border border-[#dce7e5] bg-mist px-4 text-base outline-none transition focus:border-teal-900 focus:bg-white"
                name="Mobile number"
                type="tel"
                autoComplete="tel"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-teal-950">I am a</span>
              <select
                className="min-h-12 w-full rounded-lg border border-[#dce7e5] bg-mist px-4 text-base outline-none transition focus:border-teal-900 focus:bg-white"
                name="User type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Passenger</option>
                <option>Driver</option>
                <option>Merchant</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-teal-950">Concern type</span>
              <select
                className="min-h-12 w-full rounded-lg border border-[#dce7e5] bg-mist px-4 text-base outline-none transition focus:border-teal-900 focus:bg-white"
                name="Concern type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select concern
                </option>
                <option>Trip or ride</option>
                <option>Food or merchant order</option>
                <option>Account access</option>
                <option>Driver registration</option>
                <option>Merchant registration</option>
                <option>Privacy request</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-black text-teal-950">Trip or order reference</span>
              <input
                className="min-h-12 w-full rounded-lg border border-[#dce7e5] bg-mist px-4 text-base outline-none transition focus:border-teal-900 focus:bg-white"
                name="Reference"
                type="text"
                placeholder="Optional"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-black text-teal-950">Message</span>
            <textarea
              className="min-h-40 w-full resize-y rounded-lg border border-[#dce7e5] bg-mist px-4 py-3 text-base outline-none transition focus:border-teal-900 focus:bg-white"
              name="Message"
              required
            />
          </label>

          <button
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-teal-900 px-[22px] font-extrabold leading-none text-white shadow-button transition hover:-translate-y-0.5 sm:w-auto"
            type="submit"
          >
            Send support request
          </button>
        </form>
      </section>
    </main>
  );
}
