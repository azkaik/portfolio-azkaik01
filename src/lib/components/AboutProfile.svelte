<script>
  import Award from 'lucide-svelte/icons/award';
  import GraduationCap from 'lucide-svelte/icons/graduation-cap';
  import Layers from 'lucide-svelte/icons/layers';
  import Sparkles from 'lucide-svelte/icons/sparkles';
  import Trees from 'lucide-svelte/icons/trees';
  import Clapperboard from 'lucide-svelte/icons/clapperboard';
  import Briefcase from 'lucide-svelte/icons/briefcase';
  import Download from 'lucide-svelte/icons/download';
  import {
    CONTENT,
    EDUCATION,
    SKILLS,
    SOFTWARE,
    CV_INFO,
  } from '../data/portfolio.js';
  import { preferences } from '../stores/preferences.svelte.js';

  const t = $derived(CONTENT[preferences.lang]);
</script>

<section
  id="about"
  class="scroll-mt-16 relative bg-[#BDBDBD] text-[#0A0A0A] dark:bg-[#0F0F12] dark:text-slate-100 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-black/12 dark:border-white/5 overflow-hidden transition-colors duration-300"
>
  <!-- Subtle ambient cobalt blue & cyan aura (no red) -->
  <div
    class="pointer-events-none absolute -top-40 right-0 w-[460px] h-[460px] rounded-full bg-[#0059FF]/8 dark:bg-[#0059FF]/14 blur-[120px]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute bottom-10 -left-32 w-[380px] h-[380px] rounded-full bg-[#0EA5E9]/8 dark:bg-[#0EA5E9]/10 blur-[110px]"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1220px] mx-auto space-y-20">
    <!-- ================= ABOUT ME ================= -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div class="lg:col-span-4">
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0040B8] dark:text-[#4D8CFF] mb-3">
          <span class="w-6 h-[2px] bg-[#0059FF] dark:bg-[#0EA5E9]"></span>
          <span>{t.aboutProfile.aboutEyebrow}</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-[#0A0A0A] dark:text-white uppercase">
          {t.aboutProfile.aboutTitle}
        </h2>
        <p class="mt-2 text-sm text-[#262626] dark:text-slate-400">
          Ikhwanul Azka <span class="text-[#0040B8] dark:text-[#0EA5E9] font-semibold">(Azkaik)</span>
        </p>
        <div class="mt-5">
          <a
            href={CV_INFO.href}
            download={CV_INFO.downloadName}
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8D8D8] hover:bg-[#0059FF] dark:bg-[#0059FF]/18 dark:hover:bg-[#0059FF] border border-black/20 hover:border-[#0059FF] dark:border-[#4D8CFF]/45 text-xs font-semibold tracking-wide text-[#0A0A0A] dark:text-[#99BCFF] hover:text-white transition-all duration-200"
          >
            <Download size={14} />
            <span>{t.ui.downloadCvPdf}</span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="relative rounded-2xl bg-[#D8D8D8] dark:bg-[#16171F]/90 border border-black/15 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-xl transition-colors">
          <div
            class="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#0059FF] via-[#0EA5E9] to-transparent"
            aria-hidden="true"
          ></div>
          <p class="text-[#141414] dark:text-slate-200 text-base sm:text-[17px] leading-[1.85] font-normal">
            {t.aboutProfile.aboutText}
          </p>
        </div>
      </div>
    </div>

    <!-- ================= PROFILE (EXPERIENCE, EDUCATION, SKILLS, SOFTWARE) ================= -->
    <div id="profile" class="scroll-mt-24 space-y-14">
      <!-- Experience + Education Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Experience Timeline (7 cols) -->
        <div id="experience" class="lg:col-span-7 scroll-mt-24 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#D8D8D8] dark:bg-[#0059FF]/18 border border-black/15 dark:border-[#4D8CFF]/35 flex items-center justify-center text-[#0040B8] dark:text-[#4D8CFF]">
              <Briefcase size={20} />
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#0040B8] dark:text-[#0EA5E9]">
                {t.aboutProfile.profileEyebrow}
              </p>
              <h3 class="text-2xl sm:text-3xl font-bold text-[#0A0A0A] dark:text-white tracking-tight">
                {t.aboutProfile.experienceTitle}
              </h3>
            </div>
          </div>

          <div class="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-[9px] sm:before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#0059FF] before:via-[#0EA5E9] before:to-[#0059FF]/20">
            {#each t.aboutProfile.experiences as exp}
              {@const isCyan = exp.accent === 'cyan'}
              <article class="relative group rounded-2xl bg-[#D8D8D8] hover:bg-[#E4E4E4] dark:bg-[#16171F]/80 dark:hover:bg-[#1A1C26] border border-black/15 hover:border-[#0059FF]/60 dark:border-white/10 dark:hover:border-[#0059FF]/60 p-5 sm:p-6 shadow-sm dark:shadow-none transition-all duration-200">
                <!-- Timeline Node -->
                <span
                  class="absolute -left-[25px] sm:-left-[31px] top-7 w-4 h-4 rounded-full border-2 border-[#BDBDBD] dark:border-[#0F0F12] {isCyan
                    ? 'bg-[#0EA5E9] shadow-[0_0_10px_rgba(14,165,233,0.65)]'
                    : 'bg-[#0059FF] shadow-[0_0_10px_rgba(0,89,255,0.65)]'}"
                  aria-hidden="true"
                ></span>

                <div class="mb-2.5">
                  <span
                    class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full {isCyan
                      ? 'bg-[#0EA5E9]/20 text-[#004C73] border border-[#0284C7]/40 dark:bg-[#0EA5E9]/15 dark:text-[#38BDF8] dark:border-[#0EA5E9]/30'
                      : 'bg-[#0059FF]/14 text-[#003BB5] border border-[#0059FF]/30 dark:bg-[#0059FF]/18 dark:text-[#80ADFF] dark:border-[#4D8CFF]/35'}"
                  >
                    {#if isCyan}
                      <Trees size={13} />
                    {:else}
                      <Award size={13} />
                    {/if}
                    {exp.period}
                  </span>
                </div>

                <h4 class="text-base sm:text-lg font-bold text-[#0A0A0A] dark:text-white leading-snug group-hover:text-[#0040B8] dark:group-hover:text-[#80ADFF] transition-colors">
                  {exp.title}
                </h4>

                <p class="mt-2 text-sm sm:text-[15px] text-[#262626] dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </article>
            {/each}
          </div>
        </div>

        <!-- Education + Software Column (5 cols) -->
        <div class="lg:col-span-5 space-y-10">
          <!-- Education -->
          <div id="education" class="scroll-mt-24 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#D8D8D8] dark:bg-[#0EA5E9]/15 border border-black/15 dark:border-[#0EA5E9]/35 flex items-center justify-center text-[#004C73] dark:text-[#38BDF8]">
                <GraduationCap size={20} />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#0040B8] dark:text-[#4D8CFF]">
                  {t.aboutProfile.profileEyebrow}
                </p>
                <h3 class="text-2xl sm:text-3xl font-bold text-[#0A0A0A] dark:text-white tracking-tight">
                  {t.aboutProfile.educationTitle}
                </h3>
              </div>
            </div>

            <div class="space-y-4">
              {#each EDUCATION as edu}
                <div class="rounded-2xl bg-[#D8D8D8] dark:bg-[#16171F]/80 border border-black/15 hover:border-[#0059FF]/60 dark:border-white/10 dark:hover:border-[#0EA5E9]/45 p-5 shadow-sm dark:shadow-none transition-colors">
                  <div class="flex items-center justify-between gap-3">
                    <h4 class="text-base sm:text-lg font-bold text-[#0A0A0A] dark:text-white">
                      {edu.institution}
                    </h4>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#C7C7C7] text-[#003BB5] border border-black/15 dark:bg-white/5 dark:text-[#38BDF8] dark:border-white/10 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p class="mt-1.5 text-sm text-[#262626] dark:text-slate-300">
                    {edu.focus}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Prominent Software Badges -->
          <div id="software" class="scroll-mt-24 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#D8D8D8] dark:bg-[#0059FF]/18 border border-black/15 dark:border-[#4D8CFF]/35 flex items-center justify-center text-[#0040B8] dark:text-[#80ADFF]">
                <Clapperboard size={20} />
              </div>
              <h3 class="text-2xl font-bold text-[#0A0A0A] dark:text-white tracking-tight">
                {t.aboutProfile.softwareTitle}
              </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {#each SOFTWARE as tool}
                <div class="group rounded-xl bg-gradient-to-br from-[#DEDEDE] to-[#CECECE] dark:from-[#181C2E] dark:to-[#12141D] border border-black/15 hover:border-[#0059FF] dark:border-[#0059FF]/40 dark:hover:border-[#0EA5E9] px-4 py-4 transition-all duration-200 shadow-sm dark:shadow-md flex items-center justify-between gap-2">
                  <span class="font-extrabold text-sm tracking-wider text-[#0A0A0A] group-hover:text-[#0040B8] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors">
                    {tool}
                  </span>
                  <Sparkles size={15} class="text-[#0040B8] group-hover:text-[#0059FF] dark:text-[#4D8CFF] dark:group-hover:text-[#0EA5E9] transition-colors shrink-0" />
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Pills Section -->
      <div id="skills" class="scroll-mt-24 rounded-2xl bg-[#D8D8D8] dark:bg-[#16171F]/70 border border-black/15 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-none transition-colors">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-lg bg-[#C7C7C7] dark:bg-[#0059FF]/18 border border-black/15 dark:border-[#4D8CFF]/35 flex items-center justify-center text-[#0040B8] dark:text-[#4D8CFF]">
            <Layers size={18} />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-[#0A0A0A] dark:text-white tracking-tight">
            {t.aboutProfile.skillsTitle}
          </h3>
        </div>

        <div class="flex flex-wrap gap-2.5 sm:gap-3">
          {#each SKILLS as skill}
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#C9C9C9] text-[#0A0A0A] border border-black/15 hover:border-[#0059FF] hover:bg-[#DCE7FF] hover:text-[#003BB5] dark:bg-[#0F1016] dark:text-slate-200 dark:border-white/12 dark:hover:border-[#0059FF] dark:hover:bg-[#0059FF]/15 dark:hover:text-white transition-all duration-200">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0059FF] dark:bg-[#0EA5E9]" aria-hidden="true"></span>
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
