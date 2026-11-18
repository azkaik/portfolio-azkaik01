<script>
  import { fade, slide } from 'svelte/transition';
  import Menu from 'lucide-svelte/icons/menu';
  import X from 'lucide-svelte/icons/x';
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
  import Mail from 'lucide-svelte/icons/mail';
  import MessageCircle from 'lucide-svelte/icons/message-circle';
  import MapPin from 'lucide-svelte/icons/map-pin';
  import { HERO_DATA, MENU_GROUPS, CONTACT_INFO } from '../data/portfolio.js';
  import InstagramIcon from './InstagramIcon.svelte';

  let menuOpen = $state(false);
  let openGroupIndex = $state(0);
  let isScrolled = $state(false);
  let activeHref = $state('#top');

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function toggleGroup(index) {
    openGroupIndex = openGroupIndex === index ? -1 : index;
  }

  function handleNavClick(event, href, external = false) {
    if (external) {
      closeMenu();
      return;
    }
    if (href.startsWith('#')) {
      event.preventDefault();
      closeMenu();
      const target = document.querySelector(href);
      if (target) {
        // Delay scroll by one frame so body overflow unlock takes effect cleanly
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      activeHref = href;
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
    }
  }

  function handleScroll() {
    isScrolled = window.scrollY > 36;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
      activeHref = '#contact';
      return;
    }
    const sectionIds = ['#contact', '#learning', '#profile', '#about', '#top'];
    const marker = window.scrollY + window.innerHeight * 0.35;
    for (const id of sectionIds) {
      const el = document.querySelector(id);
      if (el && el.offsetTop <= marker) {
        activeHref = id;
        break;
      }
    }
  }

  $effect(() => {
    if (typeof document === 'undefined') return;
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  });
</script>

<svelte:window onkeydown={handleKeydown} onscroll={handleScroll} />

<!-- Floating Pill Header -->
<header class="fixed top-0 left-0 right-0 z-40 pointer-events-none">
  <div class="w-full max-w-[1380px] mx-auto px-5 sm:px-10 lg:px-16 pt-5 sm:pt-6 flex items-center justify-between gap-3">
    <!-- Left Brand Pill -->
    <a
      href="#top"
      onclick={(e) => handleNavClick(e, '#top')}
      class="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-200 {isScrolled
        ? 'bg-[#090B14]/90 backdrop-blur-md border-white/20 shadow-[0_8px_24px_rgba(5,8,20,0.45)]'
        : 'bg-[#090B14]/75 backdrop-blur-md border-white/25 shadow-[0_6px_18px_rgba(10,10,28,0.28)]'} text-white hover:border-[#0EA5E9]"
      aria-label="Kembali ke beranda Azkaik"
    >
      <span class="w-2 h-2 rounded-full bg-[#0EA5E9] shadow-[0_0_8px_#0EA5E9]" aria-hidden="true"></span>
      <span class="font-display text-base sm:text-lg tracking-wider leading-none">
        AZKAIK
      </span>
    </a>

    <!-- Right Pill Controls -->
    <div class="pointer-events-auto flex items-center gap-2.5 sm:gap-3">
      <!-- Desktop Quick Anchor Pills -->
      <nav
        class="hidden md:inline-flex items-center gap-1 p-1.5 rounded-full border transition-all duration-200 {isScrolled
          ? 'bg-[#090B14]/90 backdrop-blur-md border-white/20 shadow-[0_8px_24px_rgba(5,8,20,0.45)]'
          : 'bg-[#090B14]/65 backdrop-blur-md border-white/20 shadow-[0_6px_18px_rgba(10,10,28,0.25)]'}"
        aria-label="Navigasi utama"
      >
        {#each HERO_DATA.navLinks as link}
          {@const isActive = activeHref === link.href}
          <a
            href={link.href}
            onclick={(e) => handleNavClick(e, link.href)}
            class="px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-200 {isActive
              ? 'bg-[#4F46E5] text-white shadow-[0_2px_10px_rgba(79,70,229,0.5)]'
              : 'text-white/85 hover:text-white hover:bg-white/10'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Tactile Cyan MENU Pill Button -->
      <button
        type="button"
        onclick={toggleMenu}
        class="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#0EA5E9] hover:bg-[#38BDF8] text-[#070B14] font-extrabold text-xs sm:text-[13px] tracking-wider uppercase border-2 border-[#0A0A0A] shadow-[3px_3px_0_#0A0A0A] hover:shadow-[4px_4px_0_#0A0A0A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#0A0A0A] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
        aria-label="Buka menu navigasi"
        aria-expanded={menuOpen}
        aria-controls="fullscreen-nav-overlay"
      >
        <Menu size={16} strokeWidth={2.5} />
        <span>MENU</span>
      </button>
    </div>
  </div>
</header>

<!-- Fullscreen Accordion Navigation Overlay -->
{#if menuOpen}
  <div
    id="fullscreen-nav-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Menu navigasi portofolio"
    transition:fade={{ duration: 180 }}
    class="fixed inset-0 z-50 bg-[#080A14]/[0.98] backdrop-blur-xl text-white overflow-y-auto flex flex-col justify-between"
  >
    <!-- Top Bar inside Overlay -->
    <div class="w-full max-w-[1140px] mx-auto px-5 sm:px-10 pt-6 pb-5 border-b border-white/10 flex items-center justify-between gap-4">
      <div class="flex items-center gap-2.5 text-sm sm:text-base font-extrabold tracking-widest uppercase">
        <span class="text-white font-display text-xl sm:text-2xl tracking-wider">AZKAIK</span>
        <span class="text-[#6366F1]" aria-hidden="true">//</span>
        <span class="text-[#0EA5E9]">NAVIGATION</span>
      </div>

      <button
        type="button"
        onclick={closeMenu}
        class="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#13172B] hover:bg-[#1B2240] text-white border border-white/25 hover:border-[#0EA5E9] text-xs font-extrabold tracking-wider uppercase whitespace-nowrap shrink-0 cursor-pointer transition-colors"
        aria-label="Tutup menu navigasi"
      >
        <span>CLOSE</span>
        <X size={15} strokeWidth={2.5} />
      </button>
    </div>

    <!-- Accordion Navigation Cards -->
    <nav class="w-full max-w-[820px] mx-auto px-5 sm:px-10 py-8 sm:py-10 flex-1 space-y-3.5" aria-label="Daftar bagian portofolio">
      {#each MENU_GROUPS as group, idx}
        {@const isOpen = openGroupIndex === idx}
        <div
          class="rounded-2xl border transition-all duration-200 {isOpen
            ? 'bg-[#101426] border-[#6366F1]/75 shadow-[0_12px_36px_rgba(79,70,229,0.18)]'
            : 'bg-[#0D1020] border-white/12 hover:border-white/28'}"
        >
          <button
            type="button"
            onclick={() => toggleGroup(idx)}
            class="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
            aria-expanded={isOpen}
          >
            <div class="flex items-start gap-3.5 sm:gap-4 min-w-0">
              <span class="text-xs sm:text-sm font-bold tracking-wider text-[#0EA5E9] pt-1 shrink-0 font-mono">
                {group.index}
              </span>
              <div class="min-w-0">
                <span class="block font-display text-2xl sm:text-3xl tracking-wide text-white leading-none">
                  {group.title}
                </span>
                <span class="block mt-1.5 text-xs sm:text-sm text-slate-400">
                  {group.subtitle}
                </span>
              </div>
            </div>

            <span
              class="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 {isOpen
                ? 'border-[#6366F1] bg-[#6366F1]/20 text-white rotate-180'
                : 'border-white/20 text-slate-400'}"
              aria-hidden="true"
            >
              <ChevronDown size={18} />
            </span>
          </button>

          {#if isOpen}
            <div transition:slide={{ duration: 200 }} class="px-5 sm:px-6 pb-5 sm:pb-6 space-y-2.5">
              {#each group.items as item}
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onclick={(e) => handleNavClick(e, item.href, item.external)}
                  class="group flex items-center justify-between gap-4 rounded-xl bg-[#080B16] hover:bg-[#161D38] border border-white/10 hover:border-[#0EA5E9]/65 px-4 py-3.5 transition-all duration-150"
                >
                  <div class="flex items-start gap-3 min-w-0">
                    <span class="mt-0.5 text-[#0EA5E9] group-hover:translate-x-0.5 transition-transform shrink-0">
                      {#if item.external}
                        <ArrowUpRight size={17} />
                      {:else}
                        <ArrowRight size={17} />
                      {/if}
                    </span>
                    <div class="min-w-0">
                      <p class="text-sm sm:text-[15px] font-bold tracking-wide text-white group-hover:text-[#38BDF8] transition-colors">
                        {item.label}
                      </p>
                      <p class="mt-0.5 text-xs text-slate-400 truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </nav>

    <!-- Bottom Social & Location Bar inside Overlay -->
    <div class="w-full max-w-[1140px] mx-auto px-5 sm:px-10 py-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-2.5">
        <span class="text-xs font-bold uppercase tracking-widest text-slate-400 mr-1">
          Find Me:
        </span>
        <a
          href={CONTACT_INFO.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#6366F1]/25 border border-white/12 hover:border-[#6366F1] text-xs font-medium text-slate-200 transition-colors"
        >
          <InstagramIcon size={14} />
          <span>{CONTACT_INFO.instagram.handle}</span>
        </a>
        <a
          href={CONTACT_INFO.email.mailto}
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#0EA5E9]/20 border border-white/12 hover:border-[#0EA5E9] text-xs font-medium text-slate-200 transition-colors"
        >
          <Mail size={14} />
          <span>{CONTACT_INFO.email.address}</span>
        </a>
        <a
          href={CONTACT_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#6366F1]/25 border border-white/12 hover:border-[#6366F1] text-xs font-medium text-slate-200 transition-colors"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>

      <div class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
        <MapPin size={14} class="text-[#0EA5E9]" />
        <span>{CONTACT_INFO.location}</span>
      </div>
    </div>
  </div>
{/if}
