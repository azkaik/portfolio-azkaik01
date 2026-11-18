<script>
  import Mail from 'lucide-svelte/icons/mail';
  import Phone from 'lucide-svelte/icons/phone';
  import MapPin from 'lucide-svelte/icons/map-pin';
  import Copy from 'lucide-svelte/icons/copy';
  import Check from 'lucide-svelte/icons/check';
  import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
  import ArrowUp from 'lucide-svelte/icons/arrow-up';
  import { CONTACT_INFO } from '../data/portfolio.js';
  import InstagramIcon from './InstagramIcon.svelte';

  let copied = $state(false);
  let showToast = $state(false);
  let toastTimer = null;

  async function copyEmail() {
    const email = CONTACT_INFO.email.address;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        fallbackCopy(email);
      }
    } catch {
      fallbackCopy(email);
    }

    copied = true;
    showToast = true;

    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(() => {
      copied = false;
      showToast = false;
    }, 2800);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
</script>

<section
  id="contact"
  class="relative bg-[#070B14] text-slate-100 pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-white/8 overflow-hidden"
>
  <!-- Subtle ambient indigo-cyan glow -->
  <div
    class="pointer-events-none absolute -bottom-32 right-1/4 w-[420px] h-[280px] rounded-full bg-[#4F46E5]/12 blur-[120px]"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1220px] mx-auto">
    <!-- Section Heading -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] mb-3">
          <span class="w-6 h-[2px] bg-[#0EA5E9]"></span>
          <span>Get in Touch</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-white uppercase">
          Contact
        </h2>
      </div>

      <p class="text-sm sm:text-base text-slate-400 max-w-md">
        Terhubung langsung melalui Instagram, Email, atau WhatsApp untuk diskusi kreatif, animasi, dan pemrograman.
      </p>
    </div>

    <!-- Interactive Contact Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      <!-- Instagram -->
      <a
        href={CONTACT_INFO.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group rounded-2xl bg-[#101626] hover:bg-[#141D33] border border-white/10 hover:border-[#6366F1]/60 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-4"
      >
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl bg-[#6366F1]/15 border border-[#6366F1]/35 flex items-center justify-center text-[#818CF8]">
            <InstagramIcon size={20} />
          </div>
          <ArrowUpRight size={18} class="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Instagram
          </p>
          <p class="mt-1 text-base font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
            {CONTACT_INFO.instagram.handle}
          </p>
        </div>
      </a>

      <!-- Email with Copy Action -->
      <div class="group rounded-2xl bg-[#101626] hover:bg-[#141D33] border border-white/10 hover:border-[#0EA5E9]/60 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-4">
        <div class="flex items-center justify-between gap-2">
          <div class="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 border border-[#0EA5E9]/35 flex items-center justify-center text-[#38BDF8]">
            <Mail size={20} />
          </div>
          <button
            type="button"
            onclick={copyEmail}
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#6366F1]/20 hover:bg-[#6366F1] text-[#C7D2FE] hover:text-white border border-[#6366F1]/40 transition-colors cursor-pointer"
            aria-label="Salin alamat email"
          >
            {#if copied}
              <Check size={14} />
              <span>Copied</span>
            {:else}
              <Copy size={14} />
              <span>Copy Email</span>
            {/if}
          </button>
        </div>
        <div class="min-w-0">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Email
          </p>
          <a
            href={CONTACT_INFO.email.mailto}
            class="mt-1 block text-base font-bold text-white hover:text-[#38BDF8] transition-colors truncate"
            title={CONTACT_INFO.email.address}
          >
            {CONTACT_INFO.email.address}
          </a>
        </div>
      </div>

      <!-- Telepon / WhatsApp -->
      <a
        href={CONTACT_INFO.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group rounded-2xl bg-[#101626] hover:bg-[#141D33] border border-white/10 hover:border-[#6366F1]/60 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-4"
      >
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl bg-[#6366F1]/15 border border-[#6366F1]/35 flex items-center justify-center text-[#818CF8]">
            <Phone size={20} />
          </div>
          <ArrowUpRight size={18} class="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Telepon / WhatsApp
          </p>
          <p class="mt-1 text-base font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
            {CONTACT_INFO.whatsapp.display}
          </p>
        </div>
      </a>

      <!-- Lokasi -->
      <div class="rounded-2xl bg-[#101626] border border-white/10 p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div class="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 border border-[#0EA5E9]/35 flex items-center justify-center text-[#38BDF8]">
          <MapPin size={20} />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Lokasi
          </p>
          <p class="mt-1 text-base font-bold text-white">
            {CONTACT_INFO.location}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Bar -->
    <footer class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
      <div class="flex items-center gap-3">
        <span class="font-display text-lg tracking-wider text-white">AZKAIK</span>
        <span class="text-white/25" aria-hidden="true">|</span>
        <span>Ikhwanul Azka &copy; {new Date().getFullYear()}</span>
      </div>

      <a
        href="#top"
        class="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#38BDF8] transition-colors font-medium"
      >
        <span>Kembali ke atas</span>
        <ArrowUp size={15} />
      </a>
    </footer>
  </div>

  <!-- Toast Notification for Copy Email -->
  {#if showToast}
    <div
      role="status"
      aria-live="polite"
      class="fixed top-24 right-6 z-50 animate-toast-in flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111827]/95 backdrop-blur-md border border-[#6366F1]/60 shadow-[0_12px_32px_rgba(0,0,0,0.5)] text-sm font-medium text-white"
    >
      <span class="w-6 h-6 rounded-full bg-[#0EA5E9]/20 text-[#38BDF8] flex items-center justify-center shrink-0">
        <Check size={14} />
      </span>
      <span>Email <strong class="text-[#A5B4FC]">{CONTACT_INFO.email.address}</strong> disalin!</span>
    </div>
  {/if}
</section>
