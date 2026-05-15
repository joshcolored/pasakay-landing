const supportEmail = "pasakayapplication@gmail.com";
const updatedAt = "January 29, 2026";

export const metadata = {
  title: "Privacy Policy | PaSakay",
  description: "Read how PaSakay collects, uses, shares, and protects your information.",
};

const sections = [
  {
    title: "Information We Collect",
    items: [
      {
        label: "Account information",
        text: "name, email address, phone number, and login credentials.",
      },
      {
        label: "Location data",
        text: "precise and approximate location collected from your device to enable trip matching, navigation, pickup/delivery tracking, ETA updates, and safety features. Location data is collected while the app is in use.",
      },
      {
        label: "Transaction data",
        text: "trip or delivery details, order items, fare or fee amounts, payment status, and receipts.",
      },
      {
        label: "Driver or merchant verification",
        text: "photos and documents, such as IDs, licenses, and permits, you submit for verification.",
      },
      {
        label: "Usage data",
        text: "app interactions, device information, crash logs, and performance data.",
      },
    ],
  },
  {
    title: "How We Use Information",
    items: [
      { text: "Provide and improve the Services, including trips, deliveries, and tracking." },
      { text: "Match passengers with drivers and merchants with customers." },
      { text: "Calculate fares, fees, earnings, and commissions." },
      { text: "Verify accounts and prevent fraud or abuse." },
      { text: "Communicate with you about your account or support requests." },
    ],
  },
  {
    title: "How We Share Information",
    intro: "We share information only as needed to operate the Services, including with:",
    items: [
      {
        label: "Other users",
        text: "we share necessary trip or delivery details, including location, between passengers, drivers, and merchants to complete a service.",
      },
      {
        label: "Service providers",
        text: "such as hosting, analytics, maps, and messaging services, including Google Maps and Firebase, to power the app.",
      },
      {
        label: "Legal requirements",
        text: "when required by law or to protect safety, rights, or property.",
      },
    ],
  },
];

function PolicyList({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-[#667477]">
      {items.map((item) => (
        <li key={`${item.label || ""}${item.text}`}>
          {item.label ? <strong className="font-black text-teal-950">{item.label}</strong> : null}
          {item.label ? `: ${item.text}` : item.text}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
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
        <nav className="hidden items-center gap-7 text-sm font-bold text-teal-700 md:flex" aria-label="Privacy navigation">
          <a href="/#features">Features</a>
          <a href="/support">Support</a>
        </nav>
        <a
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-teal-900 px-4 text-sm font-extrabold leading-none text-white transition hover:-translate-y-0.5"
          href="/support"
        >
          Contact support
        </a>
      </header>

      <section className="px-[clamp(18px,5vw,80px)] py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-4xl rounded-lg border border-[#dce7e5] bg-white p-[clamp(24px,5vw,56px)] shadow-soft">
          <p className="mb-3.5 text-xs font-black uppercase tracking-[0.12em] text-pasakay-green">
            PaSakay Privacy
          </p>
          <h1 className="mb-3 text-[clamp(2.4rem,7vw,5rem)] font-black leading-none text-teal-950">
            Privacy Policy
          </h1>
          <p className="text-sm font-bold text-[#667477]">Last updated: {updatedAt}</p>

          <section className="mt-8 space-y-4 text-base leading-7 text-[#667477]">
            <p>
              This Privacy Policy explains how PaSakay (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) collects, uses, shares, and protects your information when you use our
              mobile applications, websites, and related services (the &quot;Services&quot;).
            </p>
            <p>
              By using the Services, you agree to the collection and use of information in accordance
              with this Privacy Policy.
            </p>
          </section>

          {sections.map((section) => (
            <section className="mt-10 space-y-3" key={section.title}>
              <h2 className="text-2xl font-black text-teal-950">{section.title}</h2>
              {section.intro ? <p className="text-base leading-7 text-[#667477]">{section.intro}</p> : null}
              <PolicyList items={section.items} />
            </section>
          ))}

          <section className="mt-10 space-y-3">
            <h2 className="text-2xl font-black text-teal-950">Data Retention</h2>
            <p className="text-base leading-7 text-[#667477]">
              We retain information for as long as needed to provide the Services and to comply with
              legal, accounting, or reporting obligations.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="text-2xl font-black text-teal-950">Security</h2>
            <p className="text-base leading-7 text-[#667477]">
              We use reasonable safeguards to protect your data, but no method of transmission or
              storage is 100% secure.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="text-2xl font-black text-teal-950">Your Choices</h2>
            <ul className="list-disc space-y-2 pl-6 text-[#667477]">
              <li>You can update your profile information in the app.</li>
              <li>
                You can manage location permissions in your device settings. Some features may not
                work without location access.
              </li>
            </ul>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="text-2xl font-black text-teal-950">Children&apos;s Privacy</h2>
            <p className="text-base leading-7 text-[#667477]">
              The Services are not intended for children under 13. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section className="mt-10 rounded-lg bg-mist p-6">
            <h2 className="text-2xl font-black text-teal-950">Contact Us</h2>
            <p className="mt-3 text-base leading-7 text-[#667477]">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a className="font-black text-teal-900 underline underline-offset-4" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
