const playStoreUrl = "https://play.google.com/store/apps/details?id=com.pasakay.app&pcampaignid=web_share";
const appStoreUrl = "https://apps.apple.com/us/search?term=PaSakay";
const registrationUrl1 = "https://pasakay-registration.vercel.app/register/merchant";
const registrationUrl2 = "https://pasakay-registration.vercel.app/register/driver";
const privacyUrl = "https://pasakay-registration.vercel.app/privacy";
const supportEmail = "pasakayapplication@gmail.com";

const screens = [
  {
    src: "/images/home-map.jpg",
    alt: "PaSakay home map with ride and quick mart options",
    label: "Home",
    className: "left-[2%] top-0 z-20 -rotate-[8deg] sm:left-[15%]",
  },
  {
    src: "/images/book-ride-ready.jpg",
    alt: "PaSakay ride booking screen with route setup",
    label: "Book",
    className: "right-[1%] top-[70px] z-30 rotate-[7deg] sm:right-[4%]",
  },
  {
    src: "/images/trip-tracking.jpg",
    alt: "PaSakay trip tracking screen waiting for driver bids",
    label: "Track",
    className: "bottom-0 left-[27%] z-40 -rotate-[1deg] sm:bottom-[2%] sm:left-[31%]",
  },
];

const features = [
  {
    title: "Book local rides fast",
    text: "Set pickup and destination, check the route, and request nearby drivers from one clean map view.",
  },
  {
    title: "Choose driver offers",
    text: "Receive bids, compare offers, and keep tracking active while PaSakay finds the right match.",
  },
  {
    title: "Shop nearby merchants",
    text: "Browse local food, cafes, stores, and quick essentials without leaving the same app ecosystem.",
  },
  {
    title: "Clear trip and order history",
    text: "Review completed orders, delivery status, fares, receipts, and ratings whenever you need them.",
  },
];

const privacyItems = [
  "PaSakay collects account, location, transaction, verification, usage, and device information to operate rides, deliveries, tracking, and safety features.",
  "Necessary trip or delivery details may be shared between passengers, drivers, merchants, and service providers such as maps, hosting, analytics, and messaging tools.",
  "You can update profile details in the app and manage location permissions from your device settings.",
];

function GooglePlayIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#36d17d" d="M3.5 2.8c-.31.33-.5.82-.5 1.46v15.48c0 .64.19 1.13.5 1.46l8.8-9.2-8.8-9.2Z" />
      <path fill="#ffd15c" d="m15.05 8.98-2.75 3.02 2.75 3.02 3.72-2.13c1.23-.7 1.23-1.08 0-1.78l-3.72-2.13Z" />
      <path fill="#4aa3ff" d="M3.5 2.8 15.05 8.98 12.3 12 3.5 2.8Z" />
      <path fill="#ff5d5d" d="m3.5 21.2 8.8-9.2 2.75 3.02L3.5 21.2Z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 13.08c-.02-2.18 1.79-3.23 1.87-3.28-1.02-1.49-2.59-1.7-3.14-1.72-1.33-.14-2.62.79-3.29.79-.69 0-1.72-.77-2.84-.75-1.46.02-2.82.86-3.57 2.17-1.54 2.66-.39 6.57 1.08 8.72.74 1.05 1.6 2.23 2.74 2.19 1.11-.04 1.52-.7 2.86-.7 1.33 0 1.72.7 2.89.67 1.2-.02 1.95-1.06 2.66-2.12.85-1.21 1.19-2.41 1.2-2.47-.03-.01-2.43-.93-2.46-3.5Z" />
      <path d="M15.46 6.67c.6-.75 1-1.77.89-2.8-.87.04-1.96.6-2.58 1.34-.55.64-1.04 1.7-.91 2.68.98.08 1.98-.49 2.6-1.22Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-mist text-ink">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-[#dce7e5]/80 bg-mist/85 px-[clamp(18px,4vw,64px)] py-3.5 backdrop-blur-xl">
        <a
          className="flex items-center gap-2.5 text-[1.05rem] font-extrabold text-teal-950"
          href="#top"
          aria-label="PaSakay home"
        >
          <img className="h-[38px] w-[38px] rounded-lg object-cover" src="/images/pasakay-logo.jpg" alt="" />
          <span className="hidden min-[430px]:inline">PaSakay</span>
        </a>
        <nav
          className="hidden items-center gap-[clamp(14px,3vw,30px)] text-sm font-bold text-teal-700 md:flex"
          aria-label="Primary navigation"
        >
          <a href="#features">Features</a>
          <a href="#support">Support</a>
          <a href="#privacy">Privacy</a>
        </nav>
        <a
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-teal-900 px-4 text-sm font-extrabold leading-none text-white transition hover:-translate-y-0.5 min-[430px]:px-[18px]"
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </header>

      <section
        id="top"
        className="grid min-h-[calc(100vh-70px)] items-center gap-[clamp(28px,5vw,72px)] overflow-hidden px-[clamp(18px,5vw,80px)] py-[clamp(42px,7vw,92px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(440px,1.08fr)]"
      >
        <div className="max-w-[690px]">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            Ride, order, and track locally
          </p>
          <h1 className="mb-[22px] max-w-[780px] text-[clamp(3rem,17vw,5rem)] font-black leading-[0.9] text-teal-950 lg:text-[clamp(3.1rem,8vw,7.8rem)]">
            PaSakay keeps moving.
          </h1>
          <p className="max-w-[600px] text-[clamp(1.05rem,2vw,1.35rem)] leading-8 text-[#667477]">
            A clean everyday app for booking rides, finding nearby merchants, and following every
            trip from request to arrival.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 max-[760px]:w-full">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-900 px-[22px] font-extrabold leading-none text-white shadow-button transition hover:-translate-y-0.5 max-[760px]:w-full"
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GooglePlayIcon />
              Get it on Google Play
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-900 px-[22px] font-extrabold leading-none text-white shadow-button transition hover:-translate-y-0.5 max-[760px]:w-full"
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              <AppStoreIcon />
              App Store
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#e6dcae] bg-cream px-[22px] font-extrabold leading-none text-teal-900 transition hover:-translate-y-0.5 max-[760px]:w-full"
              href="#partner"
            >
              Partner with PaSakay
            </a>
          </div>
          <div className="mt-[30px] flex flex-wrap gap-3" aria-label="PaSakay highlights">
            <span className="min-w-32 rounded-lg border border-[#dce7e5] bg-white/70 px-[18px] py-4 text-sm font-bold text-[#667477] max-[760px]:flex-1">
              <strong className="block text-xl text-teal-950">5.0</strong>
              Rating
            </span>
            <span className="min-w-32 rounded-lg border border-[#dce7e5] bg-white/70 px-[18px] py-4 text-sm font-bold text-[#667477] max-[760px]:flex-1">
              <strong className="block text-xl text-teal-950">Live</strong>
              Trip tracking
            </span>
            <span className="min-w-32 rounded-lg border border-[#dce7e5] bg-white/70 px-[18px] py-4 text-sm font-bold text-[#667477] max-[760px]:flex-1">
              <strong className="block text-xl text-teal-950">Local</strong>
              Merchants
            </span>
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[690px]" aria-label="PaSakay app previews">
          <div className="absolute inset-[12%_1%_9%] -rotate-[4deg] rounded-[28px] bg-[linear-gradient(135deg,#22373c,#4d6a68_58%,#f5eccb)] sm:inset-[6%_4%_5%_10%]" />
          {screens.map((screen, index) => (
            <article
              className={`absolute w-[45vw] min-w-[150px] overflow-hidden rounded-[22px] border-[6px] border-teal-950 bg-white shadow-soft sm:w-[min(32vw,260px)] sm:min-w-[196px] sm:rounded-[30px] sm:border-8 ${screen.className}`}
              key={screen.src}
            >
              <img className="h-auto w-full" src={screen.src} alt={screen.alt} />
              <span className="absolute bottom-3 right-3 hidden rounded-lg bg-teal-950/80 px-3 py-2 text-xs font-black text-cream sm:block">
                {screen.label}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="bg-white px-[clamp(18px,5vw,80px)] py-[clamp(58px,9vw,110px)]">
        <div className="max-w-[860px]">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            Built around everyday movement
          </p>
          <h2 className="mb-[18px] text-[clamp(2rem,5vw,4.5rem)] font-black leading-none text-teal-950">
            Everything feels familiar because it follows the app.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <article
              className={`min-h-[230px] rounded-lg border border-[#dce7e5] p-[26px] ${
                ["bg-mist", "bg-cream-light", "bg-[#f3fbef]", "bg-[#fff6e9]"][index]
              }`}
              key={feature.title}
            >
              <h3 className="mb-3 text-xl font-extrabold text-teal-950">{feature.title}</h3>
              <p className="text-base leading-7 text-[#667477]">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="grid items-center gap-[clamp(26px,5vw,62px)] px-[clamp(18px,5vw,80px)] py-[clamp(58px,9vw,110px)] lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]"
        aria-label="PaSakay services"
      >
        <div className="max-w-[560px]">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            One app, more local needs
          </p>
          <h2 className="mb-[18px] text-[clamp(2rem,5vw,4.5rem)] font-black leading-none text-teal-950">
            From motorcycle rides to food and store delivery.
          </h2>
          <p className="text-base leading-7 text-[#667477]">
            PaSakay brings passenger booking and merchant browsing into one flow, with warm cream
            panels, strong teal controls, and clear status cues from the mobile app.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Ride booking", "Driver bids", "Food", "Quick Mart"].map((pill) => (
              <span
                className="rounded-lg border border-[#e6dcae] bg-cream px-3.5 py-2.5 font-extrabold text-teal-900"
                key={pill}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 items-start gap-3.5 sm:grid-cols-4">
          {[
            ["/images/pasakay-food.jpg", "PaSakay Food merchant browsing screen"],
            ["/images/merchant-vape.jpg", "PaSakay store merchant browsing screen"],
            ["/images/orders.jpg", "PaSakay order history screen"],
            ["/images/book-ride-destination.jpg", "PaSakay destination setup screen"],
          ].map(([src, alt], index) => (
            <img
              className={`w-full rounded-3xl border-[7px] border-white shadow-soft ${index % 2 ? "mt-6 sm:mt-12" : ""}`}
              src={src}
              alt={alt}
              key={src}
            />
          ))}
        </div>
      </section>

      <section
        id="support"
        className="grid items-center gap-[clamp(24px,5vw,56px)] bg-teal-900 px-[clamp(18px,5vw,80px)] py-[clamp(58px,9vw,110px)] md:grid-cols-[minmax(0,1fr)_minmax(280px,440px)]"
      >
        <div>
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">Support</p>
          <h2 className="mb-[18px] text-[clamp(2rem,5vw,4.5rem)] font-black leading-none text-white">
            Need help with a trip, account, or order?
          </h2>
          <p className="text-base leading-7 text-white/80">
            Reach the PaSakay team for account questions, driver or merchant verification, trip
            concerns, app access, privacy requests, and general support.
          </p>
        </div>
        <div className="rounded-lg border border-white/20 bg-white/10 p-7">
          <span className="mb-2 block font-black text-cream">Email support</span>
          <a
            className="block [overflow-wrap:anywhere] text-[clamp(1.18rem,2vw,1.5rem)] font-black text-white"
            href={`mailto:${supportEmail}`}
          >
            {supportEmail}
          </a>
          <p className="mt-[18px] text-base leading-7 text-white/80">
            Include your name, mobile number, and trip or order details so the team can help faster.
          </p>
        </div>
      </section>

      <section id="privacy" className="bg-white px-[clamp(18px,5vw,80px)] py-[clamp(58px,9vw,110px)]">
        <div className="max-w-[860px]">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            Privacy Policy
          </p>
          <h2 className="mb-[18px] text-[clamp(2rem,5vw,4.5rem)] font-black leading-none text-teal-950">
            Clear handling for location, account, and transaction data.
          </h2>
          <p className="text-base leading-7 text-[#667477]">Policy source last updated January 29, 2026.</p>
        </div>
        <div className="my-8 grid gap-4 md:grid-cols-3">
          {privacyItems.map((item) => (
            <p className="min-h-[190px] rounded-lg border border-[#dce7e5] bg-mist p-6 text-base leading-7 text-[#667477]" key={item}>
              {item}
            </p>
          ))}
        </div>
        <a
          className="font-black text-teal-900 underline decoration-2 underline-offset-4"
          href={privacyUrl}
          target="_blank"
          rel="noreferrer"
        >
          Read the full Privacy Policy
        </a>
      </section>

      <section id="partner" className="m-[clamp(18px,5vw,80px)] rounded-lg bg-teal-950 p-[clamp(36px,7vw,76px)] text-white">
        <div className="max-w-[900px]">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            Join the PaSakay network
          </p>
          <h2 className="mb-[18px] text-[clamp(2rem,5vw,4.5rem)] font-black leading-none text-white">
            Register as a driver or merchant partner.
          </h2>
          <p className="text-base leading-7 text-white/80">
            Grow with a local platform built for nearby rides, deliveries, food, stores, and the
            daily routes your customers already take.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 max-[760px]:w-full">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-teal-900 px-[22px] font-extrabold leading-none text-white shadow-button transition hover:-translate-y-0.5 max-[760px]:w-full"
            href={registrationUrl1}
            target="_blank"
            rel="noreferrer"
          >
            Register Merchant
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-[22px] font-extrabold leading-none text-teal-900 transition hover:-translate-y-0.5 max-[760px]:w-full"
            href={registrationUrl2}
            target="_blank"
            rel="noreferrer"
          >
            Register Driver
          </a>
        </div>
      </section>

      <footer className="flex flex-col items-start justify-between gap-[18px] px-[clamp(18px,5vw,80px)] py-7 font-extrabold text-teal-700 sm:flex-row sm:items-center">
        <span className="text-lg text-teal-950">PaSakay @2026</span>
        <div className="flex flex-wrap items-center gap-5">
          <a href={playStoreUrl} target="_blank" rel="noreferrer">
            Google Play
          </a>
          <a href="#support">Support</a>
          <a href="#privacy">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
