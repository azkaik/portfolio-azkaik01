<script>
  import CodeXml from 'lucide-svelte/icons/code-xml';
  import GitBranch from 'lucide-svelte/icons/git-branch';
  import Globe from 'lucide-svelte/icons/globe';
  import Cpu from 'lucide-svelte/icons/cpu';
  import { LEARNING_JOURNEY } from '../data/portfolio.js';

  const ICON_MAP = {
    code: CodeXml,
    git: GitBranch,
    web: Globe,
    ai: Cpu,
  };
</script>

<section
  id="learning"
  class="scroll-mt-16 relative bg-[#F1F5F9] text-slate-900 dark:bg-[#0B0C10] dark:text-slate-100 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-300"
>
  <!-- Subtle ambient cobalt blue & cyan aura matching About/Contact -->
  <div
    class="pointer-events-none absolute -top-28 left-0 w-[440px] h-[440px] rounded-full bg-[#0059FF]/8 dark:bg-[#0059FF]/12 blur-[120px]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#0EA5E9]/8 dark:bg-[#0EA5E9]/10 blur-[120px]"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1220px] mx-auto">
    <!-- Section Heading (Aligned with About Me & Contact template) -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0059FF] dark:text-[#4D8CFF] mb-3">
          <span class="w-6 h-[2px] bg-[#0EA5E9]"></span>
          <span>{LEARNING_JOURNEY.eyebrow}</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-slate-900 dark:text-white uppercase">
          {LEARNING_JOURNEY.title}
        </h2>
      </div>

      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
        {LEARNING_JOURNEY.subtitle}
      </p>
    </div>

    <!-- 2x2 Cards Grid matching AboutProfile & Contact card style -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
      {#each LEARNING_JOURNEY.items as item, idx}
        {@const IconComponent = ICON_MAP[item.iconKey] ?? CodeXml}
        {@const isCyan = idx % 2 === 1}
        <article class="relative group rounded-2xl bg-white hover:bg-slate-50/90 dark:bg-[#16171F]/80 dark:hover:bg-[#1A1C26] border border-slate-200 dark:border-white/10 {isCyan ? 'hover:border-[#0EA5E9]/60 dark:hover:border-[#0EA5E9]/55' : 'hover:border-[#0059FF]/55 dark:hover:border-[#0059FF]/65'} p-6 sm:p-7 transition-all duration-200 shadow-sm dark:shadow-lg flex items-start gap-5">
          <!-- Subtle Top Gradient Accent matching About card -->
          <div
            class="absolute top-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 {isCyan
              ? 'bg-gradient-to-r from-[#0EA5E9] via-[#0059FF] to-transparent'
              : 'bg-gradient-to-r from-[#0059FF] via-[#0EA5E9] to-transparent'}"
            aria-hidden="true"
          ></div>

          <!-- Tinted Rounded Icon Container matching Experience/Education/Contact -->
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 {isCyan
              ? 'bg-[#0EA5E9]/12 border border-[#0EA5E9]/30 text-[#0284C7] dark:bg-[#0EA5E9]/15 dark:border-[#0EA5E9]/35 dark:text-[#38BDF8]'
              : 'bg-[#0059FF]/10 border border-[#0059FF]/25 text-[#0059FF] dark:bg-[#0059FF]/18 dark:border-[#4D8CFF]/35 dark:text-[#4D8CFF]'}"
          >
            <IconComponent size={21} strokeWidth={2} />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white transition-colors {isCyan ? 'group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]' : 'group-hover:text-[#0059FF] dark:group-hover:text-[#80ADFF]'}">
                {item.title}
              </h3>
              <span class="text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 font-mono shrink-0">
                0{idx + 1}
              </span>
            </div>
            <p class="mt-2 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
