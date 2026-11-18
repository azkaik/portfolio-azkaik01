<script>
  import Mail from 'lucide-svelte/icons/mail';
  import MessageCircle from 'lucide-svelte/icons/message-circle';
  import { HERO_DATA, CONTACT_INFO } from '../data/portfolio.js';
  import AzkaikPortrait from './AzkaikPortrait.svelte';
  import InstagramIcon from './InstagramIcon.svelte';

  let heroEl = $state(null);
  let parallaxX = $state(0);
  let parallaxY = $state(0);

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
  class="relative min-h-[100svh] lg:min-h-[680px] lg:h-[100svh] lg:max-h-[940px] w-full overflow-hidden bg-[#4F46E5] text-white flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20"
>
  <!-- Subtle poster ambient depth (strictly Indigo/Cyan, no red) -->
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(14,165,233,0.18),transparent_52%),radial-gradient(circle_at_15%_20%,rgba(129,140,248,0.28),transparent_45%)]"
    aria-hidden="true"
  ></div>

  <!-- Left Vertical Social Bar (Desktop & Tablet) -->
  <aside
    class="hidden sm:flex flex-col items-center gap-6 absolute left-6 md:left-9 lg:left-12 top-1/2 -translate-y-1/2 z-30"
    aria-label="Tautan sosial"
  >
    <a
      href={CONTACT_INFO.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Instagram ${CONTACT_INFO.instagram.handle}`}
      aria-label={`Instagram ${CONTACT_INFO.instagram.handle}`}
      class="group p-2 rounded-lg text-white/85 hover:text-white hover:bg-white/12 hover:scale-110 transition-all duration-200"
    >
      <InstagramIcon size={21} />
    </a>

    <a
      href={CONTACT_INFO.email.mailto}
      title={`Email ${CONTACT_INFO.email.address}`}
      aria-label={`Email ${CONTACT_INFO.email.address}`}
      class="group p-2 rounded-lg text-white/85 hover:text-white hover:bg-white/12 hover:scale-110 transition-all duration-200"
    >
      <Mail size={21} strokeWidth={2} />
    </a>

    <a
      href={CONTACT_INFO.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`WhatsApp ${CONTACT_INFO.whatsapp.display}`}
      aria-label={`WhatsApp ${CONTACT_INFO.whatsapp.display}`}
      class="group p-2 rounded-lg text-white/85 hover:text-white hover:bg-white/12 hover:scale-110 transition-all duration-200"
    >
      <MessageCircle size={21} strokeWidth={2} />
    </a>
  </aside>

  <!-- Main Hero Stage -->
  <div class="relative z-20 flex-1 w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between pt-4 lg:pt-0">
    <!-- Left Column: Typography + Bottom 3 Highlights -->
    <div class="w-full lg:w-[62%] sm:pl-14 lg:pl-16 xl:pl-20 flex-1 flex flex-col justify-between py-4 sm:py-8 lg:py-12">
      <!-- Vertical center spacer so typography sits visually balanced like the reference poster -->
      <div class="hidden lg:block"></div>

      <!-- Bold Editorial Typography -->
      <div class="my-auto py-4">
        <div class="inline-flex flex-col items-start">
          <span class="font-display text-white text-5xl sm:text-7xl lg:text-[5.25rem] xl:text-[6rem] leading-[0.95] tracking-normal">
            {HERO_DATA.greeting}
          </span>

          <h1 class="font-display text-[#0A0A0A] text-[5.4rem] sm:text-[8.5rem] lg:text-[10.25rem] xl:text-[12rem] leading-[0.86] tracking-[-0.015em] mt-1 sm:mt-2 select-none">
            {HERO_DATA.name}
          </h1>

          <p class="font-display text-white text-xl sm:text-2xl lg:text-[1.85rem] xl:text-[2.1rem] tracking-wide self-end mt-2.5 sm:mt-3">
            {HERO_DATA.subtitle}
          </p>
        </div>

        <!-- Mobile Social Links Row -->
        <div class="flex sm:hidden items-center gap-4 mt-6" aria-label="Tautan sosial seluler">
          <a
            href={CONTACT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${CONTACT_INFO.instagram.handle}`}
            class="p-2.5 rounded-lg bg-white/12 text-white hover:bg-white/20 transition-colors"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={CONTACT_INFO.email.mailto}
            aria-label={`Email ${CONTACT_INFO.email.address}`}
            class="p-2.5 rounded-lg bg-white/12 text-white hover:bg-white/20 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href={CONTACT_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${CONTACT_INFO.whatsapp.display}`}
            class="p-2.5 rounded-lg bg-white/12 text-white hover:bg-white/20 transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <!-- Bottom 3 Highlights Separated by Thin Vertical Lines -->
      <div class="pt-4 lg:pt-8">
        <div class="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start md:items-center gap-3 md:gap-0 text-xs lg:text-[12px] xl:text-[12.5px] font-medium text-white/95">
          {#each HERO_DATA.highlights as item, idx}
            {#if idx > 0}
              <span
                class="hidden md:inline-block w-px h-4 bg-white/40 mx-2.5 xl:mx-3.5 shrink-0"
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
