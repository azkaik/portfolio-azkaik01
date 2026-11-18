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
  import Download from 'lucide-svelte/icons/download';
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';
  import { CONTENT, CONTACT_INFO, CV_INFO } from '../data/portfolio.js';
  import { preferences } from '../stores/preferences.svelte.js';
  import InstagramIcon from './InstagramIcon.svelte';
  import AzkaikLogo from './AzkaikLogo.svelte';

  let menuOpen = $state(false);
  let openGroupIndex = $state(0);
  let activeHref = $state('#top');

  const t = $derived(CONTENT[preferences.lang]);

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
  <div class="w-full max-w-[1380px] mx-auto px-4 sm:px-10 lg:px-16 pt-4 sm:pt-6 flex items-center justify-between gap-2 sm:gap-3">
    <!-- Left Icon-Only Home Button with Custom A★ Logo -->
    <a
      href="#top"
      onclick={(e) => handleNavClick(e, '#top')}
      class="pointer-events-auto group inline-flex items-center justify-center rounded-xl transition-transform duration-200 hover:scale-105 active:scale-95 drop-shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
      aria-label={t.ui.homeAria}
    >
      <AzkaikLogo size={40} className="w-9 h-9 sm:w-[42px] sm:h-[42px] shrink-0" />
    </a>

    <!-- Right Pill Controls -->
    <div class="pointer-events-auto flex items-center gap-1.5 sm:gap-2.5">
      <!-- Desktop Quick Anchor Pills -->
      <nav
        class="hidden lg:inline-flex items-center gap-1 p-1.5 rounded-full border transition-all duration-200 bg-[#BDBDBD]/90 dark:bg-[#090B14]/80 backdrop-blur-md border-black/20 dark:border-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(5,8,20,0.4)]"
        aria-label="Navigasi utama"
      >
        {#each t.navLinks as link}
          {@const isActive = activeHref === link.href}
          <a
            href={link.href}
            onclick={(e) => handleNavClick(e, link.href)}
            class="px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-200 {isActive
              ? 'bg-[#0059FF] text-white shadow-[0_2px_10px_rgba(0,89,255,0.45)]'
              : 'text-[#0A0A0A] hover:text-black hover:bg-black/10 dark:text-white/85 dark:hover:text-white dark:hover:bg-white/10'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Language Switcher Pill (ID | EN) -->
      <div
        class="inline-flex items-center p-0.5 sm:p-1 rounded-full border bg-[#BDBDBD]/90 dark:bg-[#090B14]/85 backdrop-blur-md border-black/20 dark:border-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.12)] dark:shadow-[0_6px_18px_rgba(5,8,20,0.35)]"
        role="group"
        aria-label="Language switcher"
      >
        <button
          type="button"
          onclick={() => preferences.setLang('id')}
          aria-pressed={preferences.lang === 'id'}
          class="px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider transition-all cursor-pointer {preferences.lang === 'id'
            ? 'bg-[#0059FF] text-white shadow-sm'
            : 'text-[#1A1A1A] hover:text-black dark:text-slate-300 dark:hover:text-white'}"
        >
          ID
        </button>
        <button
          type="button"
          onclick={() => preferences.setLang('en')}
          aria-pressed={preferences.lang === 'en'}
          class="px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider transition-all cursor-pointer {preferences.lang === 'en'
            ? 'bg-[#0059FF] text-white shadow-sm'
            : 'text-[#1A1A1A] hover:text-black dark:text-slate-300 dark:hover:text-white'}"
        >
          EN
        </button>
      </div>

      <!-- Theme Toggle Pill (Light / Dark) -->
      <button
        type="button"
        onclick={preferences.toggleTheme}
        aria-label={preferences.theme === 'dark' ? t.ui.switchToLightAria : t.ui.switchToDarkAria}
        title={preferences.theme === 'dark' ? t.ui.switchToLightAria : t.ui.switchToDarkAria}
        class="w-8 h-8 sm:w-9 sm:h-9 rounded-full inline-flex items-center justify-center border bg-[#BDBDBD]/90 dark:bg-[#090B14]/85 backdrop-blur-md border-black/20 dark:border-white/20 text-[#0040B8] dark:text-[#FACC15] hover:border-[#0EA5E9] shadow-[0_6px_18px_rgba(0,0,0,0.12)] dark:shadow-[0_6px_18px_rgba(5,8,20,0.35)] transition-all cursor-pointer shrink-0"
      >
        {#if preferences.theme === 'dark'}
          <Sun size={16} strokeWidth={2.3} />
        {:else}
          <Moon size={16} strokeWidth={2.3} />
        {/if}
      </button>

      <!-- Tactile Cyan MENU Pill Button -->
      <button
        type="button"
        onclick={toggleMenu}
        class="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0EA5E9] hover:bg-[#38BDF8] text-[#070B14] font-extrabold text-xs sm:text-[13px] tracking-wider uppercase border-2 border-[#0A0A0A] shadow-[3px_3px_0_#0A0A0A] hover:shadow-[4px_4px_0_#0A0A0A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#0A0A0A] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
        aria-label={t.ui.openMenuAria}
        aria-expanded={menuOpen}
        aria-controls="fullscreen-nav-overlay"
      >
        <Menu size={15} strokeWidth={2.5} />
        <span>{t.ui.menuLabel}</span>
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
    aria-label={t.ui.openMenuAria}
    transition:fade={{ duration: 180 }}
    class="fixed inset-0 z-50 bg-[#BDBDBD]/[0.98] dark:bg-[#080A14]/[0.98] backdrop-blur-xl text-[#0A0A0A] dark:text-white overflow-y-auto flex flex-col justify-between transition-colors duration-200"
  >
    <!-- Top Bar inside Overlay -->
    <div class="w-full max-w-[1140px] mx-auto px-5 sm:px-10 pt-6 pb-5 border-b border-black/15 dark:border-white/10 flex items-center justify-between gap-4">
      <div class="flex items-center gap-2.5 text-sm sm:text-base font-extrabold tracking-widest uppercase">
        <AzkaikLogo size={28} className="shrink-0" />
        <span class="text-[#0A0A0A] dark:text-white font-display text-xl sm:text-2xl tracking-wider">AZKAIK</span>
        <span class="text-[#0040B8] dark:text-[#4D8CFF]" aria-hidden="true">//</span>
        <span class="text-[#003BB5] dark:text-[#0EA5E9]">NAVIGATION</span>
      </div>

      <button
        type="button"
        onclick={closeMenu}
        class="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#DEDEDE] hover:bg-[#EBEBEB] dark:bg-[#13172B] dark:hover:bg-[#1B2240] text-[#0A0A0A] dark:text-white border border-black/20 dark:border-white/25 hover:border-[#0040B8] dark:hover:border-[#0EA5E9] text-xs font-extrabold tracking-wider uppercase whitespace-nowrap shrink-0 cursor-pointer transition-colors"
        aria-label={t.ui.closeMenuAria}
      >
        <span>{t.ui.closeLabel}</span>
        <X size={15} strokeWidth={2.5} />
      </button>
    </div>

    <!-- Accordion Navigation Cards -->
    <nav class="w-full max-w-[820px] mx-auto px-5 sm:px-10 py-8 sm:py-10 flex-1 space-y-3.5" aria-label="Menu sections">
      {#each t.menuGroups as group, idx}
        {@const isOpen = openGroupIndex === idx}
        <div
          class="rounded-2xl border transition-all duration-200 {isOpen
            ? 'bg-[#DEDEDE] border-[#0059FF]/70 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:bg-[#101426] dark:border-[#0059FF]/80 dark:shadow-[0_12px_36px_rgba(0,89,255,0.2)]'
            : 'bg-[#CFCFCF] border-black/15 hover:border-black/30 dark:bg-[#0D1020] dark:border-white/12 dark:hover:border-white/28'}"
        >
          <button
            type="button"
            onclick={() => toggleGroup(idx)}
            class="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
            aria-expanded={isOpen}
          >
            <div class="flex items-start gap-3.5 sm:gap-4 min-w-0">
              <span class="text-xs sm:text-sm font-bold tracking-wider text-[#0040B8] dark:text-[#0EA5E9] pt-1 shrink-0 font-mono">
                {group.index}
              </span>
              <div class="min-w-0">
                <span class="block font-display text-2xl sm:text-3xl tracking-wide text-[#0A0A0A] dark:text-white leading-none">
                  {group.title}
                </span>
                <span class="block mt-1.5 text-xs sm:text-sm text-[#333333] dark:text-slate-400">
                  {group.subtitle}
                </span>
              </div>
            </div>

            <span
              class="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 {isOpen
                ? 'border-[#0059FF] bg-[#0059FF] text-white dark:border-[#4D8CFF] dark:bg-[#0059FF]/25 dark:text-white rotate-180'
                : 'border-black/25 text-[#262626] dark:border-white/20 dark:text-slate-400'}"
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
                  class="group flex items-center justify-between gap-4 rounded-xl bg-[#CCCCCC] hover:bg-[#DCE7FF] dark:bg-[#080B16] dark:hover:bg-[#131C38] border border-black/12 hover:border-[#0059FF]/60 dark:border-white/10 dark:hover:border-[#0EA5E9]/65 px-4 py-3.5 transition-all duration-150"
                >
                  <div class="flex items-start gap-3 min-w-0">
                    <span class="mt-0.5 text-[#0040B8] dark:text-[#0EA5E9] group-hover:translate-x-0.5 transition-transform shrink-0">
                      {#if item.external}
                        <ArrowUpRight size={17} />
                      {:else}
                        <ArrowRight size={17} />
                      {/if}
                    </span>
                    <div class="min-w-0">
                      <p class="text-sm sm:text-[15px] font-bold tracking-wide text-[#0A0A0A] group-hover:text-[#0040B8] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors">
                        {item.label}
                      </p>
                      <p class="mt-0.5 text-xs text-[#262626] dark:text-slate-400 truncate">
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

    <!-- Bottom Social, CV & Location Bar inside Overlay -->
    <div class="w-full max-w-[1140px] mx-auto px-5 sm:px-10 py-6 border-t border-black/15 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-2.5">
        <span class="text-xs font-bold uppercase tracking-widest text-[#262626] dark:text-slate-400 mr-1">
          {t.ui.findMe}
        </span>
        <a
          href={CONTACT_INFO.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D8D8D8] hover:bg-[#E8E8E8] dark:bg-white/5 dark:hover:bg-[#0059FF]/25 border border-black/15 hover:border-[#0040B8] dark:border-white/12 dark:hover:border-[#4D8CFF] text-xs font-medium text-[#0A0A0A] dark:text-slate-200 transition-colors"
        >
          <InstagramIcon size={14} />
          <span>{CONTACT_INFO.instagram.handle}</span>
        </a>
        <a
          href={CONTACT_INFO.email.mailto}
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D8D8D8] hover:bg-[#E8E8E8] dark:bg-white/5 dark:hover:bg-[#0EA5E9]/20 border border-black/15 hover:border-[#0040B8] dark:border-white/12 dark:hover:border-[#0EA5E9] text-xs font-medium text-[#0A0A0A] dark:text-slate-200 transition-colors"
        >
          <Mail size={14} />
          <span>{CONTACT_INFO.email.address}</span>
        </a>
        <a
          href={CONTACT_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D8D8D8] hover:bg-[#E8E8E8] dark:bg-white/5 dark:hover:bg-[#0059FF]/25 border border-black/15 hover:border-[#0040B8] dark:border-white/12 dark:hover:border-[#4D8CFF] text-xs font-medium text-[#0A0A0A] dark:text-slate-200 transition-colors"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <a
          href={CV_INFO.href}
          download={CV_INFO.downloadName}
          class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0EA5E9] hover:bg-[#38BDF8] text-[#070B14] font-extrabold text-xs tracking-wider uppercase border-2 border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A] transition-all"
        >
          <Download size={14} strokeWidth={2.5} />
          <span>{t.ui.downloadCvPdf}</span>
        </a>

        <div class="inline-flex items-center gap-1.5 text-xs font-medium text-[#262626] dark:text-slate-400">
          <MapPin size={14} class="text-[#0040B8] dark:text-[#0EA5E9]" />
          <span>{CONTACT_INFO.location}</span>
        </div>
      </div>
    </div>
  </div>
{/if}
