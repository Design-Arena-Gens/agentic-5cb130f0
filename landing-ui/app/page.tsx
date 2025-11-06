import { ArrowRight, Calendar, Shield, Star, Zap } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Home Repairs",
    description: "Handymen, electricians, and plumbers ready to fix it fast.",
    metric: "2.1k pros nearby",
  },
  {
    title: "Cleaning",
    description: "Deep cleans, move-outs, and recurring upkeep you can trust.",
    metric: "4.8★ average rating",
  },
  {
    title: "Pet Care",
    description: "Dog walkers, sitters, and groomers who treat pets like family.",
    metric: "Same-day bookings",
  },
  {
    title: "Deliveries",
    description: "Courier pros for errands, pickups, and doorstep drop-offs.",
    metric: "45 min avg turnaround",
  },
];

const steps = [
  {
    title: "Tell us what you need",
    description:
      "Share your task details, preferred timing, and any special instructions.",
  },
  {
    title: "Compare trusted pros",
    description:
      "Browse vetted profiles with transparent pricing, reviews, and badges.",
  },
  {
    title: "Book in minutes",
    description:
      "Confirm the pro you like, pay securely, and track progress in real time.",
  },
];

const testimonials = [
  {
    name: "Sasha Green",
    role: "Homeowner in Austin",
    quote:
      "TaskTrail helped me find a same-day electrician when my lights went out. The pro arrived within an hour and the app kept me in the loop the whole time.",
  },
  {
    name: "Miguel Alvarez",
    role: "Restaurant Owner",
    quote:
      "We rely on TaskTrail for quick cleaning crews after events. The recurring scheduling feature saves so much back-and-forth every week.",
  },
];

const stats = [
  { label: "Tasks completed", value: "182k+" },
  { label: "Verified pros", value: "12,400" },
  { label: "Cities covered", value: "180" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 via-blue-400/20 to-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/20 blur-[120px]" />
        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 md:px-12 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-slate-950 font-semibold">
              TT
            </span>
            <div>
              <p className="text-xl font-semibold tracking-tight">TaskTrail</p>
              <p className="text-sm text-white/60">
                Your shortcut to trusted help.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <Link href="#categories" className="transition hover:text-white">
              Categories
            </Link>
            <Link href="#how-it-works" className="transition hover:text-white">
              How it works
            </Link>
            <Link href="#stories" className="transition hover:text-white">
              Stories
            </Link>
            <Link
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white hover:text-white"
            >
              Become a pro
            </Link>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Sign in
            </button>
          </nav>
          <button className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </header>

        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <Zap className="size-4" />
              Book trusted pros in minutes
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Get service jobs done fast with vetted local experts.
            </h1>
            <p className="max-w-xl text-lg text-white/70 md:text-xl">
              TaskTrail pairs urgent tasks with skilled professionals. Discover
              cleaners, handypeople, and specialists who show up prepared and
              deliver five-star results.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center rounded-full border border-white/10 bg-white/5 px-4 py-3">
                <input
                  type="text"
                  placeholder="Search for a task or service"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
                <ArrowRight className="size-5 text-white/60" />
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                Find help now
              </button>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-white/70">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -left-6 h-44 w-44 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">Same-day handyman</p>
                  <p className="text-sm text-white/60">Booked 12 minutes ago</p>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  In progress
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Key pickup & drop-off</p>
                      <p className="text-sm text-white/60">
                        Devon · Courier Pro
                      </p>
                    </div>
                    <Star className="size-5 text-amber-300" />
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    “Devon handled the errand while I was at work. Smooth
                    updates the entire time.”
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="size-8 rounded-full bg-emerald-400/10 p-1.5 text-emerald-300" />
                    <div>
                      <p className="font-semibold">Fully insured pros</p>
                      <p className="text-sm text-white/60">
                        Every pro passes ID & background checks.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
                    <Calendar className="size-4" />
                    Next-day availability guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 md:px-12"
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Popular service categories
              </h2>
              <p className="mt-3 max-w-2xl text-base text-white/70">
                Choose from curated specialists with verified experience, clear
                pricing, and reviews from people near you.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              Browse all services
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-sky-300/40 hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold">{category.title}</p>
                  <span className="text-xs uppercase tracking-wider text-sky-200/70">
                    Featured
                  </span>
                </div>
                <p className="text-sm text-white/60">{category.description}</p>
                <p className="mt-auto text-sm font-medium text-white/70">
                  {category.metric}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A seamless flow from task to done.
            </h2>
            <p className="mt-4 text-base text-white/70">
              We built TaskTrail to remove the friction from hiring. Transparent
              pricing, smart matching, and live updates keep every job on track.
            </p>
            <div className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-sky-500/10 text-base font-semibold text-sky-200">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-lg font-semibold">{step.title}</p>
                    <p className="mt-2 text-sm text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-800/40 p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Built for trust
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Every pro backed by TaskTrail Assurance.
              </h3>
              <p className="mt-4 text-sm text-white/70">
                Comprehensive background checks, insurance coverage, and live
                support make sure you&apos;re protected from booking to
                completion.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <Shield className="size-6 text-emerald-300" />
                <p className="mt-4 text-base font-semibold">Verified identity</p>
                <p className="mt-2 text-sm text-white/60">
                  Multi-step verification and continuous monitoring.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <Star className="size-6 text-amber-300" />
                <p className="mt-4 text-base font-semibold">
                  4.8★ average rating
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Real customer feedback keeps quality front and center.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <Zap className="size-6 text-sky-300" />
                <p className="mt-4 text-base font-semibold">
                  Instant notifications
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Track status, arrivals, and completions without refreshing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <Calendar className="size-6 text-purple-300" />
                <p className="mt-4 text-base font-semibold">Smart scheduling</p>
                <p className="mt-2 text-sm text-white/60">
                  Sync with your calendar and reschedule with one tap.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="stories"
          className="rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-12 md:px-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Stories from people who got it done
              </h2>
              <p className="mt-3 text-base text-white/70">
                Thousands of neighbors trust TaskTrail for everyday tasks. Here
                are a few of their experiences.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex -space-x-2">
                {["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"].map(
                  (avatar) => (
                    <span
                      key={avatar}
                      className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold"
                    >
                      🙂
                    </span>
                  ),
                )}
              </div>
              <span>Join 12k+ satisfied customers</span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
              >
                <p className="text-sm text-white/70">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="text-base font-semibold">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-sky-400/30 bg-gradient-to-r from-sky-500/20 via-sky-500/10 to-blue-500/20 px-8 py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Ready when you are
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Post your next task and relax.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
            Describe what you need done, choose from vetted professionals, and
            manage the entire job without leaving your screen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Post a task
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Explore categories
            </button>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TaskTrail. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white">
              Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
