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
  class="scroll-mt-16 relative bg-[#0B0C10] text-slate-100 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-white/5 overflow-hidden"
>
  <!-- Subtle ambient indigo & cyan aura matching About/Contact -->
  <div
    class="pointer-events-none absolute -top-28 left-0 w-[440px] h-[440px] rounded-full bg-[#4F46E5]/10 blur-[120px]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#0EA5E9]/10 blur-[120px]"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1220px] mx-auto">
    <!-- Section Heading (Aligned with About Me & Contact template) -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#818CF8] mb-3">
          <span class="w-6 h-[2px] bg-[#0EA5E9]"></span>
          <span>{LEARNING_JOURNEY.eyebrow}</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-white uppercase">
          {LEARNING_JOURNEY.title}
        </h2>
      </div>

      <p class="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
        {LEARNING_JOURNEY.subtitle}
      </p>
    </div>

    <!-- 2x2 Cards Grid matching AboutProfile & Contact card style -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
      {#each LEARNING_JOURNEY.items as item, idx}
        {@const IconComponent = ICON_MAP[item.iconKey] ?? CodeXml}
        {@const isCyan = idx % 2 === 1}
        <article class="relative group rounded-2xl bg-[#16171F]/80 hover:bg-[#1A1C26] border border-white/10 {isCyan ? 'hover:border-[#0EA5E9]/55' : 'hover:border-[#6366F1]/55'} p-6 sm:p-7 transition-all duration-200 shadow-lg flex items-start gap-5">
          <!-- Subtle Top Gradient Accent matching About card -->
          <div
            class="absolute top-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 {isCyan
              ? 'bg-gradient-to-r from-[#0EA5E9] via-[#6366F1] to-transparent'
              : 'bg-gradient-to-r from-[#6366F1] via-[#0EA5E9] to-transparent'}"
            aria-hidden="true"
          ></div>

          <!-- Tinted Rounded Icon Container matching Experience/Education/Contact -->
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 {isCyan
              ? 'bg-[#0EA5E9]/15 border border-[#0EA5E9]/35 text-[#38BDF8]'
              : 'bg-[#6366F1]/15 border border-[#6366F1]/35 text-[#818CF8]'}"
          >
            <IconComponent size={21} strokeWidth={2} />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-base sm:text-lg font-bold text-white transition-colors {isCyan ? 'group-hover:text-[#38BDF8]' : 'group-hover:text-[#A5B4FC]'}">
                {item.title}
              </h3>
              <span class="text-[11px] font-semibold tracking-wider text-slate-500 font-mono shrink-0">
                0{idx + 1}
              </span>
            </div>
            <p class="mt-2 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
