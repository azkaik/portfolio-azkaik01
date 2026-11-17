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
  class="relative bg-[#0B1120] text-slate-100 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-white/5 overflow-hidden"
>
  <!-- Subtle background radial accent -->
  <div
    class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-[#6366F1]/12 blur-[130px] rounded-full"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1140px] mx-auto">
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
        {LEARNING_JOURNEY.eyebrow}
      </p>
      <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {LEARNING_JOURNEY.title}
      </h2>
      <p class="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
        {LEARNING_JOURNEY.subtitle}
      </p>
    </div>

    <!-- 2x2 Grid -->
    <div class="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each LEARNING_JOURNEY.items as item}
        {@const IconComponent = ICON_MAP[item.iconKey] ?? CodeXml}
        <article class="group rounded-2xl bg-[#11182B]/90 hover:bg-[#151E35] border border-white/8 hover:border-[#6366F1]/55 p-6 sm:p-7 transition-all duration-200 shadow-lg hover:shadow-[0_12px_36px_rgba(99,102,241,0.14)] flex items-start gap-5">
          <!-- Rounded Indigo-Purple Icon Box (#6366F1) -->
          <div class="w-12 h-12 rounded-xl bg-[#6366F1] text-white flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform duration-200">
            <IconComponent size={23} strokeWidth={2} />
          </div>

          <div class="min-w-0">
            <h3 class="text-lg font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
              {item.title}
            </h3>
            <p class="mt-2 text-sm sm:text-[15px] text-[#94A3B8] leading-relaxed">
              {item.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
