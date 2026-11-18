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
  class="scroll-mt-16 relative bg-[#F8FAFC] text-slate-900 dark:bg-[#0F0F12] dark:text-slate-100 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-300"
>
  <!-- Subtle ambient indigo & cyan aura (no red) -->
  <div
    class="pointer-events-none absolute -top-40 right-0 w-[460px] h-[460px] rounded-full bg-[#4F46E5]/8 dark:bg-[#4F46E5]/12 blur-[120px]"
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
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4F46E5] dark:text-[#818CF8] mb-3">
          <span class="w-6 h-[2px] bg-[#0EA5E9]"></span>
          <span>{t.aboutProfile.aboutEyebrow}</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-slate-900 dark:text-white uppercase">
          {t.aboutProfile.aboutTitle}
        </h2>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Ikhwanul Azka <span class="text-[#0284C7] dark:text-[#0EA5E9] font-medium">(Azkaik)</span>
        </p>
        <div class="mt-5">
          <a
            href={CV_INFO.href}
            download={CV_INFO.downloadName}
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F46E5]/10 hover:bg-[#4F46E5] dark:bg-[#6366F1]/15 dark:hover:bg-[#6366F1] border border-[#4F46E5]/30 dark:border-[#6366F1]/45 text-xs font-semibold tracking-wide text-[#4F46E5] dark:text-[#C7D2FE] hover:text-white transition-all duration-200"
          >
            <Download size={14} />
            <span>{t.ui.downloadCvPdf}</span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="relative rounded-2xl bg-white dark:bg-[#16171F]/90 border border-slate-200 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-xl transition-colors">
          <div
            class="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#6366F1] via-[#0EA5E9] to-transparent"
            aria-hidden="true"
          ></div>
          <p class="text-slate-700 dark:text-slate-200 text-base sm:text-[17px] leading-[1.85] font-normal">
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
            <div class="w-10 h-10 rounded-xl bg-[#4F46E5]/10 dark:bg-[#6366F1]/15 border border-[#4F46E5]/25 dark:border-[#6366F1]/35 flex items-center justify-center text-[#4F46E5] dark:text-[#818CF8]">
              <Briefcase size={20} />
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] dark:text-[#0EA5E9]">
                {t.aboutProfile.profileEyebrow}
              </p>
              <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t.aboutProfile.experienceTitle}
              </h3>
            </div>
          </div>

          <div class="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-[9px] sm:before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#6366F1] before:via-[#0EA5E9] before:to-[#6366F1]/20">
            {#each t.aboutProfile.experiences as exp}
              {@const isCyan = exp.accent === 'cyan'}
              <article class="relative group rounded-2xl bg-white hover:bg-slate-50/80 dark:bg-[#16171F]/80 dark:hover:bg-[#1A1C26] border border-slate-200 hover:border-[#4F46E5]/45 dark:border-white/10 dark:hover:border-[#6366F1]/50 p-5 sm:p-6 shadow-sm dark:shadow-none transition-all duration-200">
                <!-- Timeline Node -->
                <span
                  class="absolute -left-[25px] sm:-left-[31px] top-7 w-4 h-4 rounded-full border-2 border-[#F8FAFC] dark:border-[#0F0F12] {isCyan
                    ? 'bg-[#0EA5E9] shadow-[0_0_10px_rgba(14,165,233,0.65)]'
                    : 'bg-[#6366F1] shadow-[0_0_10px_rgba(99,102,241,0.65)]'}"
                  aria-hidden="true"
                ></span>

                <div class="mb-2.5">
                  <span
                    class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full {isCyan
                      ? 'bg-[#0EA5E9]/12 text-[#0284C7] border border-[#0EA5E9]/30 dark:bg-[#0EA5E9]/15 dark:text-[#38BDF8]'
                      : 'bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/25 dark:bg-[#6366F1]/15 dark:text-[#A5B4FC] dark:border-[#6366F1]/30'}"
                  >
                    {#if isCyan}
                      <Trees size={13} />
                    {:else}
                      <Award size={13} />
                    {/if}
                    {exp.period}
                  </span>
                </div>

                <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#4F46E5] dark:group-hover:text-[#A5B4FC] transition-colors">
                  {exp.title}
                </h4>

                <p class="mt-2 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
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
              <div class="w-10 h-10 rounded-xl bg-[#0EA5E9]/12 dark:bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 dark:border-[#0EA5E9]/35 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8]">
                <GraduationCap size={20} />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5] dark:text-[#818CF8]">
                  {t.aboutProfile.profileEyebrow}
                </p>
                <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {t.aboutProfile.educationTitle}
                </h3>
              </div>
            </div>

            <div class="space-y-4">
              {#each EDUCATION as edu}
                <div class="rounded-2xl bg-white dark:bg-[#16171F]/80 border border-slate-200 hover:border-[#0EA5E9]/50 dark:border-white/10 dark:hover:border-[#0EA5E9]/45 p-5 shadow-sm dark:shadow-none transition-colors">
                  <div class="flex items-center justify-between gap-3">
                    <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 dark:bg-white/5 dark:text-[#38BDF8] dark:border-white/10 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p class="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                    {edu.focus}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Prominent Software Badges -->
          <div id="software" class="scroll-mt-24 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#4F46E5]/10 dark:bg-[#6366F1]/15 border border-[#4F46E5]/25 dark:border-[#6366F1]/35 flex items-center justify-center text-[#4F46E5] dark:text-[#A5B4FC]">
                <Clapperboard size={20} />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t.aboutProfile.softwareTitle}
              </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {#each SOFTWARE as tool}
                <div class="group rounded-xl bg-gradient-to-br from-white to-indigo-50/70 dark:from-[#1C1E2E] dark:to-[#13141C] border border-indigo-200 hover:border-[#0EA5E9] dark:border-[#6366F1]/40 dark:hover:border-[#0EA5E9] px-4 py-4 transition-all duration-200 shadow-sm dark:shadow-md flex items-center justify-between gap-2">
                  <span class="font-extrabold text-sm tracking-wider text-slate-900 group-hover:text-[#0284C7] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors">
                    {tool}
                  </span>
                  <Sparkles size={15} class="text-[#4F46E5] group-hover:text-[#0EA5E9] dark:text-[#818CF8] dark:group-hover:text-[#0EA5E9] transition-colors shrink-0" />
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Pills Section -->
      <div id="skills" class="scroll-mt-24 rounded-2xl bg-white dark:bg-[#16171F]/70 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-none transition-colors">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-lg bg-[#4F46E5]/10 dark:bg-[#6366F1]/15 border border-[#4F46E5]/25 dark:border-[#6366F1]/35 flex items-center justify-center text-[#4F46E5] dark:text-[#818CF8]">
            <Layers size={18} />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.aboutProfile.skillsTitle}
          </h3>
        </div>

        <div class="flex flex-wrap gap-2.5 sm:gap-3">
          {#each SKILLS as skill}
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:border-[#4F46E5] hover:bg-[#EEF2FF] hover:text-[#312E81] dark:bg-[#0F1016] dark:text-slate-200 dark:border-white/12 dark:hover:border-[#6366F1] dark:hover:bg-[#6366F1]/12 dark:hover:text-white transition-all duration-200">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" aria-hidden="true"></span>
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
