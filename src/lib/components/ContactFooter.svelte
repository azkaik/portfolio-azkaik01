<script>
  import Mail from 'lucide-svelte/icons/mail';
  import Phone from 'lucide-svelte/icons/phone';
  import MapPin from 'lucide-svelte/icons/map-pin';
  import Copy from 'lucide-svelte/icons/copy';
  import Check from 'lucide-svelte/icons/check';
  import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
  import ArrowUp from 'lucide-svelte/icons/arrow-up';
  import { CONTENT, CONTACT_INFO } from '../data/portfolio.js';
  import { preferences } from '../stores/preferences.svelte.js';
  import InstagramIcon from './InstagramIcon.svelte';

  let copied = $state(false);
  let showToast = $state(false);
  let toastTimer = null;

  const t = $derived(CONTENT[preferences.lang]);

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
  class="scroll-mt-16 relative bg-white text-slate-900 dark:bg-[#070B14] dark:text-slate-100 pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-slate-200/80 dark:border-white/8 overflow-hidden transition-colors duration-300"
>
  <!-- Subtle ambient indigo-cyan glow -->
  <div
    class="pointer-events-none absolute -bottom-32 right-1/4 w-[420px] h-[280px] rounded-full bg-[#4F46E5]/8 dark:bg-[#4F46E5]/12 blur-[120px]"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1220px] mx-auto">
    <!-- Section Heading -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4F46E5] dark:text-[#6366F1] mb-3">
          <span class="w-6 h-[2px] bg-[#0EA5E9]"></span>
          <span>{t.contact.eyebrow}</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-slate-900 dark:text-white uppercase">
          {t.contact.title}
        </h2>
      </div>

      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
        {t.contact.subtitle}
      </p>
    </div>

    <!-- Interactive Contact Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      <!-- Instagram -->
      <a
        href={CONTACT_INFO.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group rounded-2xl bg-slate-50 hover:bg-[#EEF2FF]/70 dark:bg-[#101626] dark:hover:bg-[#141D33] border border-slate-200 hover:border-[#4F46E5]/55 dark:border-white/10 dark:hover:border-[#6366F1]/60 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-4 shadow-sm dark:shadow-none"
      >
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl bg-[#4F46E5]/10 dark:bg-[#6366F1]/15 border border-[#4F46E5]/25 dark:border-[#6366F1]/35 flex items-center justify-center text-[#4F46E5] dark:text-[#818CF8]">
            <InstagramIcon size={20} />
          </div>
          <ArrowUpRight size={18} class="text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Instagram
          </p>
          <p class="mt-1 text-base font-bold text-slate-900 dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#A5B4FC] transition-colors">
            {CONTACT_INFO.instagram.handle}
          </p>
        </div>
      </a>

      <!-- Email with Copy Action -->
      <div class="group rounded-2xl bg-slate-50 hover:bg-sky-50/70 dark:bg-[#101626] dark:hover:bg-[#141D33] border border-slate-200 hover:border-[#0EA5E9]/60 dark:border-white/10 dark:hover:border-[#0EA5E9]/60 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-4 shadow-sm dark:shadow-none">
        <div class="flex items-center justify-between gap-2">
          <div class="w-10 h-10 rounded-xl bg-[#0EA5E9]/12 dark:bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 dark:border-[#0EA5E9]/35 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8]">
            <Mail size={20} />
          </div>
          <button
            type="button"
            onclick={copyEmail}
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4F46E5]/10 hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white border border-[#4F46E5]/30 dark:bg-[#6366F1]/20 dark:hover:bg-[#6366F1] dark:text-[#C7D2FE] dark:hover:text-white dark:border-[#6366F1]/40 transition-colors cursor-pointer"
            aria-label={t.contact.copyAria}
          >
            {#if copied}
              <Check size={14} />
              <span>{t.contact.copied}</span>
            {:else}
              <Copy size={14} />
              <span>{t.contact.copyEmail}</span>
            {/if}
          </button>
        </div>
        <div class="min-w-0">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Email
          </p>
          <a
            href={CONTACT_INFO.email.mailto}
            class="mt-1 block text-base font-bold text-slate-900 hover:text-[#0284C7] dark:text-white dark:hover:text-[#38BDF8] transition-colors truncate"
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
        class="group rounded-2xl bg-slate-50 hover:bg-[#EEF2FF]/70 dark:bg-[#101626] dark:hover:bg-[#141D33] border border-slate-200 hover:border-[#4F46E5]/55 dark:border-white/10 dark:hover:border-[#6366F1]/60 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-4 shadow-sm dark:shadow-none"
      >
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl bg-[#4F46E5]/10 dark:bg-[#6366F1]/15 border border-[#4F46E5]/25 dark:border-[#6366F1]/35 flex items-center justify-center text-[#4F46E5] dark:text-[#818CF8]">
            <Phone size={20} />
          </div>
          <ArrowUpRight size={18} class="text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t.contact.whatsappLabel}
          </p>
          <p class="mt-1 text-base font-bold text-slate-900 dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#A5B4FC] transition-colors">
            {CONTACT_INFO.whatsapp.display}
          </p>
        </div>
      </a>

      <!-- Lokasi -->
      <div class="rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-sm dark:shadow-none">
        <div class="w-10 h-10 rounded-xl bg-[#0EA5E9]/12 dark:bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 dark:border-[#0EA5E9]/35 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8]">
          <MapPin size={20} />
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t.contact.locationLabel}
          </p>
          <p class="mt-1 text-base font-bold text-slate-900 dark:text-white">
            {CONTACT_INFO.location}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Bar -->
    <footer class="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
      <div class="flex items-center gap-3">
        <span class="font-display text-lg tracking-wider text-slate-900 dark:text-white">AZKAIK</span>
        <span class="text-slate-300 dark:text-white/25" aria-hidden="true">|</span>
        <span>Ikhwanul Azka &copy; {new Date().getFullYear()}</span>
      </div>

      <a
        href="#top"
        class="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#4F46E5] dark:text-slate-300 dark:hover:text-[#38BDF8] transition-colors font-medium"
      >
        <span>{t.contact.backToTop}</span>
        <ArrowUp size={15} />
      </a>
    </footer>
  </div>

  <!-- Toast Notification for Copy Email -->
  {#if showToast}
    <div
      role="status"
      aria-live="polite"
      class="fixed top-24 right-6 z-50 animate-toast-in flex items-center gap-3 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border border-[#4F46E5]/40 dark:border-[#6366F1]/60 shadow-[0_12px_32px_rgba(15,23,42,0.18)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)] text-sm font-medium text-slate-900 dark:text-white"
    >
      <span class="w-6 h-6 rounded-full bg-[#0EA5E9]/15 dark:bg-[#0EA5E9]/20 text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center shrink-0">
        <Check size={14} />
      </span>
      <span>{t.contact.toastPrefix} <strong class="text-[#4F46E5] dark:text-[#A5B4FC]">{CONTACT_INFO.email.address}</strong> {t.contact.toastSuffix}</span>
    </div>
  {/if}
</section>
