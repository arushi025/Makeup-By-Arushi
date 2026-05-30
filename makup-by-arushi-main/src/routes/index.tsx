import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Phone,
  MessageCircle,
  Sparkles,
  Star,
  Upload,
  Calendar,
  Heart,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import ba1 from "@/assets/ba1.jpg";
import ba2 from "@/assets/ba2.jpg";
import ba3 from "@/assets/ba3.jpg";

// === EDIT YOUR DETAILS HERE ===
const ARTIST = {
  name: "Arushi",
  brand: "Makeup By Arushi",
  tagline: "Engagement & Party Makeup Artist in Prayagraj",
  subTagline: "Soft Glam • HD Makeup • Hairstyles • Saree Draping",
  phone: "+91 92509 29976",
  phoneRaw: "+919250929976",
  whatsapp: "919250929976",
  instagram: "arushi.makeupartist",
  instagramHandle: "arushi.makeupartist",
  email: "hello@makeupbyarushi.com",
  city: "Prayagraj",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${ARTIST.brand} — Engagement & Party Makeup Artist in Prayagraj` },
      {
        name: "description",
        content:
          "Engagement & party makeup artist in Prayagraj. Soft Glam • HD Makeup • Saree Draping. Book your makeup slot online via WhatsApp.",
      },
      { property: "og:title", content: `${ARTIST.brand} — Engagement & Party Makeup Artist in Prayagraj` },
      {
        property: "og:description",
        content:
          "Soft Glam • HD Makeup • Saree Draping. Reserve your date today.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  }),
  component: Index,
});

type Review = { name: string; rating: number; text: string; date: string };
type BAItem = { before: string; after: string; label: string };

const DEFAULT_REVIEWS: Review[] = [
  {
    name: "Priya S.",
    rating: 5,
    text: "Maya ne meri wedding ko aur bhi special bana diya. Makeup full day perfect tha — even after dancing!",
    date: "Mar 2026",
  },
  {
    name: "Aisha K.",
    rating: 5,
    text: "Absolutely stunning work! Engagement look was exactly what I dreamed of. Highly recommend ✨",
    date: "Feb 2026",
  },
  {
    name: "Neha R.",
    rating: 4,
    text: "Beautiful festive look for Diwali. Very professional and friendly. Will book again!",
    date: "Nov 2025",
  },
];

const DEFAULT_BA: BAItem[] = [
  { before: ba1, after: ba1, label: "Soft Glam" },
  { before: ba2, after: ba2, label: "Engagement Look" },
  { before: ba3, after: ba3, label: "Festival Glow" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <BeforeAfter />
      <Booking />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Book", "#book"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-display text-lg tracking-wide gold-text">
            {ARTIST.brand}
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:bg-primary transition-colors"
        >
          Book Now
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-4 h-px bg-foreground ml-auto" />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <ul className="px-5 py-4 space-y-3">
            {links.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-foreground/80"
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* shimmer background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, oklch(0.92 0.04 20 / 0.7), transparent 70%), radial-gradient(50% 40% at 80% 80%, oklch(0.9 0.05 60 / 0.6), transparent 70%), linear-gradient(180deg, oklch(0.98 0.012 80), oklch(0.95 0.025 50))",
        }}
      />
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="reveal in">
          <p className="uppercase tracking-[0.3em] text-xs text-primary mb-5">
            {ARTIST.brand}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            <span className="block gold-text">Engagement & Party</span>
            <span className="block italic font-serif-soft">Makeup Artist in Prayagraj</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            {ARTIST.subTagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3 text-sm font-medium hover:bg-primary transition-colors"
            >
              <Calendar className="w-4 h-4" /> Book Your Makeup Slot
            </a>
            <a
              href={`https://wa.me/${ARTIST.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp for Booking
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Sparkles className="w-4 h-4" /> View Makeup Looks
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-foreground">500+</div>
              <div className="text-xs uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">8 yrs</div>
              <div className="text-xs uppercase tracking-wider">Experience</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground gold-text">
                ★ 4.9
              </div>
              <div className="text-xs uppercase tracking-wider">Rated</div>
            </div>
          </div>
        </div>
        <div className="relative reveal in">
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.12 35), oklch(0.9 0.1 75))",
            }}
          />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="Makeup artist portrait"
              width={1536}
              height={1920}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-background/60 rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-2 text-xs text-primary mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Signature Look
              </div>
              <div className="font-display text-lg">
                Soft Glam · HD Makeup
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

const SERVICES = [
  {
    title: "Reception Makeup",
    desc: "Soft luminous glam that photographs beautifully under every light.",
    price: "₹8,000+",
  },
  {
    title: "Engagement Makeup",
    desc: "Romantic, dewy & radiant — for the moment you'll remember forever.",
    price: "₹6,500+",
  },
  {
    title: "Party Wear Makeup",
    desc: "Bold, modern, statement looks for cocktails, sangeet & celebrations.",
    price: "₹5,000+",
  },
  {
    title: "Festival Makeup",
    desc: "Traditional Diwali, Karwa Chauth & festive glow with rich tones.",
    price: "₹4,500+",
  },
];

function Services() {
  return (
    <Section id="services" eyebrow="What I Offer" title="Signature Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/60 transition-colors"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Sparkles className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {s.desc}
            </p>
            <div className="text-sm gold-text font-medium">{s.price}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BeforeAfter() {
  const [items, setItems] = useState<BAItem[]>(DEFAULT_BA);

  const handleUpload =
    (kind: "before" | "after", idx: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result as string;
        setItems((prev) =>
          prev.map((it, i) => (i === idx ? { ...it, [kind]: url } : it)),
        );
      };
      reader.readAsDataURL(file);
    };

  const addNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setItems((prev) => [
        ...prev,
        { before: url, after: url, label: "New Look" },
      ]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Section
      id="gallery"
      eyebrow="The Transformation"
      title="Before & After"
      subtitle="Slide to reveal the magic. Upload your own photos to preview your look."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {items.map((it, idx) => (
          <BACard
            key={idx}
            item={it}
            onUploadBefore={handleUpload("before", idx)}
            onUploadAfter={handleUpload("after", idx)}
          />
        ))}
        <a
          href={`https://instagram.com/${ARTIST.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center aspect-[3/4] rounded-2xl border-2 border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-7 h-7 mb-2" />
          <span className="text-sm font-medium">See More Transformations</span>
          <span className="text-xs">@{ARTIST.instagramHandle}</span>
        </a>
      </div>
    </Section>
  );
}

function BACard({
  item,
  onUploadBefore,
  onUploadAfter,
}: {
  item: BAItem;
  onUploadBefore: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUploadAfter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div className="group">
      <div
        ref={ref}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-lg"
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onClick={(e) => move(e.clientX)}
      >
        <img
          src={item.after}
          alt={`${item.label} after`}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={item.before}
            alt={`${item.label} before`}
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-xs font-bold text-primary">
            ⇆
          </div>
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 text-white text-[10px] uppercase tracking-wider">
          Before
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] uppercase tracking-wider">
          After
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-display text-lg">{item.label}</div>
        <div className="flex gap-2">
          <label className="text-xs px-2 py-1 rounded border border-border hover:border-primary cursor-pointer">
            Before
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onUploadBefore}
            />
          </label>
          <label className="text-xs px-2 py-1 rounded border border-border hover:border-primary cursor-pointer">
            After
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onUploadAfter}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Reception Makeup",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi ${ARTIST.name}! I'd like to book a ${form.service}.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0ANotes: ${form.message}`;
    window.open(`https://wa.me/${ARTIST.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <Section
      id="book"
      eyebrow="Reserve Your Date"
      title="Online Booking"
      subtitle="Fill in your details — I'll confirm on WhatsApp within hours."
    >
      <form
        onSubmit={submit}
        className="max-w-2xl mx-auto mt-12 p-6 sm:p-10 rounded-3xl border border-border bg-card shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, oklch(0.995 0.006 70), oklch(0.97 0.02 75))",
        }}
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Your Name">
            <input
              required
              maxLength={80}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input"
              placeholder="Priya Sharma"
            />
          </Field>
          <Field label="Phone Number">
            <input
              required
              type="tel"
              maxLength={20}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="input"
              placeholder="+91 98765 43210"
            />
          </Field>
          <Field label="Service">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="input"
            >
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </Field>
          <Field label="Preferred Date">
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="input"
            />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Message (optional)">
            <textarea
              maxLength={500}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input resize-none"
              placeholder="Tell me about your event, theme, or any specific look you'd love..."
            />
          </Field>
        </div>
        <button
          type="submit"
          className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-4 font-medium hover:bg-primary transition-colors"
        >
          <Calendar className="w-4 h-4" />
          {sent ? "Sent — check WhatsApp ✓" : "Reserve Your Date"}
        </button>
        <p className="text-xs text-center text-muted-foreground mt-3">
          By submitting, this opens WhatsApp to confirm your booking with{" "}
          {ARTIST.name}.
        </p>
      </form>
      <style>{`
        .input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: oklch(1 0 0 / 0.6);
          border: 1px solid oklch(0.78 0.08 70 / 0.4);
          border-radius: 0.75rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.62 0.13 35 / 0.15);
        }
      `}</style>
    </Section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem("reviews");
      return saved ? JSON.parse(saved) : DEFAULT_REVIEWS;
    } catch {
      return DEFAULT_REVIEWS;
    }
  });
  const [form, setForm] = useState({ name: "", text: "", rating: 5 });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const r: Review = {
      name: form.name.trim().slice(0, 60),
      text: form.text.trim().slice(0, 500),
      rating: form.rating,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    };
    setReviews([r, ...reviews]);
    setForm({ name: "", text: "", rating: 5 });
  };

  return (
    <Section
      id="reviews"
      eyebrow="Kind Words"
      title="Client Love"
      subtitle="Reviews from beautiful souls I've had the joy of glamming up."
    >
      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {reviews.slice(0, 6).map((r, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className={`w-4 h-4 ${
                    j < r.rating
                      ? "fill-primary text-primary"
                      : "text-border"
                  }`}
                />
              ))}
            </div>
            <p className="font-serif-soft text-lg leading-relaxed text-foreground/90 mb-4">
              "{r.text}"
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{r.name}</span>
              <span className="text-muted-foreground text-xs">{r.date}</span>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={submit}
        className="max-w-2xl mx-auto mt-12 p-6 rounded-2xl border border-border bg-card"
      >
        <h3 className="font-display text-xl mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" /> Leave a Review
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            maxLength={60}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input"
          />
          <div className="flex items-center gap-1 px-4 py-2 rounded-xl border border-border bg-background/60">
            <span className="text-xs text-muted-foreground mr-2">Rating:</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setForm({ ...form, rating: n })}
                aria-label={`${n} stars`}
              >
                <Star
                  className={`w-5 h-5 ${
                    n <= form.rating
                      ? "fill-primary text-primary"
                      : "text-border hover:text-primary/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <textarea
          required
          maxLength={500}
          rows={3}
          placeholder="Share your experience..."
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          className="input mt-4 resize-none"
        />
        <button
          type="submit"
          className="mt-4 w-full sm:w-auto px-7 py-3 rounded-full bg-foreground text-background font-medium hover:bg-primary transition-colors"
        >
          Post Review
        </button>
      </form>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let's Talk"
      title="Connect With Me"
      subtitle="Available for engagements, parties & festive events in Prayagraj and nearby."
    >
      <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
        <a
          href={`tel:${ARTIST.phoneRaw}`}
          className="group p-7 rounded-2xl border border-border bg-card hover:border-primary hover:-translate-y-1 transition-all text-center"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            Call
          </div>
          <div className="font-display text-lg">{ARTIST.phone}</div>
        </a>
        <a
          href={`https://wa.me/${ARTIST.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-7 rounded-2xl border border-border bg-card hover:border-primary hover:-translate-y-1 transition-all text-center"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            WhatsApp
          </div>
          <div className="font-display text-lg">DM me</div>
        </a>
        <a
          href={`https://instagram.com/${ARTIST.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-7 rounded-2xl border border-border bg-card hover:border-primary hover:-translate-y-1 transition-all text-center"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            Instagram
          </div>
          <div className="font-display text-lg">{ARTIST.instagram}</div>
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  const quickLinks = [
    ["Home", "#home"],
    ["Gallery", "#gallery"],
    ["Book", "#book"],
    ["Reviews", "#reviews"],
  ];
  return (
    <footer className="border-t border-border mt-20 pt-14 pb-8 px-5 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand + Quick Links */}
        <div>
          <div className="font-display text-xl gold-text mb-2">
            {ARTIST.brand}
          </div>
          <p className="text-xs mb-5 leading-relaxed">{ARTIST.subTagline}</p>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 mb-3">
            Quick Links
          </div>
          <ul className="space-y-2">
            {quickLinks.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 mb-3">
            Services
          </div>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-primary transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 mb-3">
            Contact
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href={`https://instagram.com/${ARTIST.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" /> @{ARTIST.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${ARTIST.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp · {ARTIST.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              {ARTIST.city} & nearby areas
            </li>
            <li className="text-xs italic mt-3 text-foreground/70">
              By Appointment Only
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border/60 text-center text-xs">
        © {new Date().getFullYear()} {ARTIST.brand} · All rights reserved
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 sm:py-28 px-5 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl mb-4">
            <span className="gold-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
