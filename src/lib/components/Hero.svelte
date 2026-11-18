<script>
  import Mail from 'lucide-svelte/icons/mail';
  import MessageCircle from 'lucide-svelte/icons/message-circle';
  import Download from 'lucide-svelte/icons/download';
  import Eye from 'lucide-svelte/icons/eye';
  import { CONTENT, CONTACT_INFO, CV_INFO } from '../data/portfolio.js';
  import { preferences } from '../stores/preferences.svelte.js';
  import AzkaikPortrait from './AzkaikPortrait.svelte';
  import InstagramIcon from './InstagramIcon.svelte';

  let heroEl = $state(null);
  let parallaxX = $state(0);
  let parallaxY = $state(0);

  const t = $derived(CONTENT[preferences.lang]);

  function handlePointerMove(event) {
    if (!heroEl) return;
    const rect = heroEl.getBoundingClientRect();
    if (
      event.clientY < rect.top ||
      event.clientY > rect.bottom ||
      event.clientX < rect.left ||
      event.clientX > rect.right
    ) {
      parallaxX = 0;
      parallaxY = 0;
      return;
    }
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    parallaxX = (relX - 0.5) * 2;
    parallaxY = (relY - 0.5) * 2;
  }

  function resetParallax() {
    parallaxX = 0;
    parallaxY = 0;
  }
</script>

<svelte:window onmousemove={handlePointerMove} onblur={resetParallax} />

<section
  bind:this={heroEl}
  id="top"
  class="relative min-h-[100svh] lg:min-h-[680px] lg:h-[100svh] lg:max-h-[940px] w-full overflow-hidden bg-[#0059FF] text-[#BDBDBD] dark:text-white flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20 transition-colors duration-300"
>
  <!-- Subtle poster ambient depth (same #0059FF primary blue in both modes) -->
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(56,189,248,0.20),transparent_52%),radial-gradient(circle_at_15%_20%,rgba(189,189,189,0.16),transparent_45%)] dark:bg-[radial-gradient(circle_at_78%_48%,rgba(56,189,248,0.22),transparent_52%),radial-gradient(circle_at_15%_20%,rgba(128,173,255,0.24),transparent_45%)]"
    aria-hidden="true"
  ></div>

  <!-- Left Vertical Social Bar (Desktop & Tablet) -->
  <aside
    class="hidden sm:flex flex-col items-center gap-6 absolute left-6 md:left-9 lg:left-12 top-1/2 -translate-y-1/2 z-30"
    aria-label="Social links"
  >
    <a
      href={CONTACT_INFO.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Instagram ${CONTACT_INFO.instagram.handle}`}
      aria-label={`Instagram ${CONTACT_INFO.instagram.handle}`}
      class="group p-2 rounded-lg text-[#BDBDBD] hover:text-[#E0E0E0] hover:bg-black/15 dark:text-white/85 dark:hover:text-white dark:hover:bg-white/15 hover:scale-110 transition-all duration-200"
    >
      <InstagramIcon size={21} />
    </a>

    <a
      href={CONTACT_INFO.email.mailto}
      title={`Email ${CONTACT_INFO.email.address}`}
      aria-label={`Email ${CONTACT_INFO.email.address}`}
      class="group p-2 rounded-lg text-[#BDBDBD] hover:text-[#E0E0E0] hover:bg-black/15 dark:text-white/85 dark:hover:text-white dark:hover:bg-white/15 hover:scale-110 transition-all duration-200"
    >
      <Mail size={21} strokeWidth={2} />
    </a>

    <a
      href={CONTACT_INFO.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`WhatsApp ${CONTACT_INFO.whatsapp.display}`}
      aria-label={`WhatsApp ${CONTACT_INFO.whatsapp.display}`}
      class="group p-2 rounded-lg text-[#BDBDBD] hover:text-[#E0E0E0] hover:bg-black/15 dark:text-white/85 dark:hover:text-white dark:hover:bg-white/15 hover:scale-110 transition-all duration-200"
    >
      <MessageCircle size={21} strokeWidth={2} />
    </a>
  </aside>

  <!-- Main Hero Stage -->
  <div class="relative z-20 flex-1 w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between pt-4 lg:pt-0">
    <!-- Left Column: Typography + Bottom 3 Highlights -->
    <div class="w-full lg:w-[62%] sm:pl-12 lg:pl-14 xl:pl-16 flex-1 flex flex-col justify-between py-4 sm:py-8 lg:py-12">
      <div class="hidden lg:block"></div>

      <!-- Bold Editorial Typography (White in Dark Mode, #BDBDBD Silver in Light Mode) -->
      <div class="my-auto py-4">
        <div class="inline-flex flex-col items-start">
          <span class="font-display text-[#BDBDBD] dark:text-white text-5xl sm:text-7xl lg:text-[5.25rem] xl:text-[6rem] leading-[0.95] tracking-normal transition-colors">
            {t.hero.greeting}
          </span>

          <h1 class="font-display text-[#0A0A0A] text-[5.4rem] sm:text-[8.5rem] lg:text-[10.25rem] xl:text-[12rem] leading-[0.86] tracking-[-0.015em] mt-1 sm:mt-2 select-none">
            {t.hero.name}
          </h1>

          <p class="font-display text-[#BDBDBD] dark:text-white text-xl sm:text-2xl lg:text-[1.85rem] xl:text-[2.1rem] tracking-wide self-end mt-2.5 sm:mt-3 transition-colors">
            {t.hero.subtitle}
          </p>
        </div>

        <!-- Download & View CV Actions -->
        <div class="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
          <a
            href={CV_INFO.href}
            download={CV_INFO.downloadName}
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0EA5E9] hover:bg-[#38BDF8] text-[#070B14] font-extrabold text-xs sm:text-[13px] tracking-wider uppercase border-2 border-[#0A0A0A] shadow-[3px_3px_0_#0A0A0A] hover:shadow-[4px_4px_0_#0A0A0A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#0A0A0A] transition-all duration-150"
          >
            <Download size={16} strokeWidth={2.5} />
            <span>{t.ui.downloadCv}</span>
          </a>

          <a
            href={CV_INFO.href}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#BDBDBD] hover:bg-[#CFCFCF] text-[#0A0A0A] border-2 border-[#0A0A0A]/30 hover:border-[#0A0A0A] dark:bg-[#090B14]/70 dark:hover:bg-[#090B14]/90 dark:text-white dark:border-white/25 dark:hover:border-[#0EA5E9] backdrop-blur-md text-xs sm:text-[13px] font-semibold tracking-wide transition-colors duration-200"
          >
            <Eye size={15} />
            <span>{t.ui.viewCv}</span>
          </a>
        </div>

        <!-- Mobile Social Links Row -->
        <div class="flex sm:hidden items-center gap-4 mt-6" aria-label="Mobile social links">
          <a
            href={CONTACT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${CONTACT_INFO.instagram.handle}`}
            class="p-2.5 rounded-lg bg-black/15 text-[#BDBDBD] hover:text-white dark:bg-white/15 dark:text-white dark:hover:bg-white/25 transition-colors"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={CONTACT_INFO.email.mailto}
            aria-label={`Email ${CONTACT_INFO.email.address}`}
            class="p-2.5 rounded-lg bg-black/15 text-[#BDBDBD] hover:text-white dark:bg-white/15 dark:text-white dark:hover:bg-white/25 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href={CONTACT_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${CONTACT_INFO.whatsapp.display}`}
            class="p-2.5 rounded-lg bg-black/15 text-[#BDBDBD] hover:text-white dark:bg-white/15 dark:text-white dark:hover:bg-white/25 transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <!-- Bottom 3 Highlights Separated by Thin Vertical Lines -->
      <div class="pt-4 lg:pt-8">
        <div class="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start md:items-center gap-3 md:gap-0 text-xs lg:text-[11.5px] xl:text-[12px] font-semibold sm:font-medium text-[#BDBDBD] dark:text-white/95 transition-colors">
          {#each t.hero.highlights as item, idx}
            {#if idx > 0}
              <span
                class="hidden md:inline-block w-px h-4 bg-[#BDBDBD]/50 dark:bg-white/40 mx-2 xl:mx-3 shrink-0"
                aria-hidden="true"
              ></span>
            {/if}
            <span class="leading-snug tracking-wide lg:whitespace-nowrap">{item}</span>
          {/each}
        </div>
      </div>
    </div>

    <!-- Mobile Portrait Bleed at Bottom-Right -->
    <div class="lg:hidden self-end -mr-6 sm:-mr-10 -mb-2 w-[88%] max-w-[400px]">
      <AzkaikPortrait {parallaxX} {parallaxY} />
    </div>
  </div>

  <!-- Desktop Portrait Flush to Bottom-Right Edge of Hero Poster -->
  <div class="hidden lg:block pointer-events-none absolute right-0 bottom-0 z-10 w-[39%] max-w-[490px] xl:max-w-[535px]">
    <AzkaikPortrait {parallaxX} {parallaxY} />
  </div>
</section>
