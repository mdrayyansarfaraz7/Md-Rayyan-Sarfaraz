function Contact() {
  return (
    <section id="contact" className="w-full bg-black py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT — TEXT / CTA */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-500">
              Let’s Work Together
            </h2>

            <div className="h-px w-24 bg-emerald-500/60" />

            <p className="text-white/70 text-base leading-relaxed max-w-xl">
              I’m always open to discussing new opportunities, collaborations,
              or interesting ideas. If you’re looking for someone who cares
              about clean design, performance, and reliability — let’s talk.
            </p>

            <p className="text-white/50 text-sm">
              I usually respond within 24 hours.
            </p>
          </div>

          {/* RIGHT — FORM */}
          <div
            className="
              relative
              rounded-2xl
              border border-emerald-900/60
              bg-black
              shadow-[0_0_70px_-25px_rgba(16,185,129,0.3)]
            "
          >
            {/* subtle glow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-linear-to-br from-emerald-500/10 via-transparent to-transparent" />

            <form className="relative p-10 flex flex-col gap-6">
              {/* Name */}
              <div>
                <label className="text-xs uppercase tracking-wider text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="
                    mt-2 w-full
                    bg-transparent
                    border-b border-white/20
                    px-1 py-3
                    text-white text-sm
                    outline-none
                    focus:border-emerald-500
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-wider text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="
                    mt-2 w-full
                    bg-transparent
                    border-b border-white/20
                    px-1 py-3
                    text-white text-sm
                    outline-none
                    focus:border-emerald-500
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs uppercase tracking-wider text-white/60">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  className="
                    mt-2 w-full
                    bg-transparent
                    border-b border-white/20
                    px-1 py-3
                    text-white text-sm
                    outline-none resize-none
                    focus:border-emerald-500
                  "
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="
                  mt-8
                  w-fit
                  px-10 py-3
                  rounded-full
                  bg-emerald-500
                  text-black text-sm font-medium
                  hover:bg-emerald-400 transition
                "
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
