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
    ABOUT_TEXT,
    EXPERIENCES,
    EDUCATION,
    SKILLS,
    SOFTWARE,
    CV_INFO,
  } from '../data/portfolio.js';
</script>

<section
  id="about"
  class="relative bg-[#0F0F12] text-slate-100 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-white/5 overflow-hidden"
>
  <!-- Subtle ambient indigo & cyan aura (no red) -->
  <div
    class="pointer-events-none absolute -top-40 right-0 w-[460px] h-[460px] rounded-full bg-[#4F46E5]/12 blur-[120px]"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute bottom-10 -left-32 w-[380px] h-[380px] rounded-full bg-[#0EA5E9]/10 blur-[110px]"
    aria-hidden="true"
  ></div>

  <div class="relative max-w-[1220px] mx-auto space-y-20">
    <!-- ================= ABOUT ME ================= -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div class="lg:col-span-4">
        <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#818CF8] mb-3">
          <span class="w-6 h-[2px] bg-[#0EA5E9]"></span>
          <span>About</span>
        </div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-wide text-white uppercase">
          About Me
        </h2>
        <p class="mt-2 text-sm text-slate-400">
          Ikhwanul Azka <span class="text-[#0EA5E9] font-medium">(Azkaik)</span>
        </p>
        <div class="mt-5">
          <a
            href={CV_INFO.href}
            download={CV_INFO.downloadName}
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/15 hover:bg-[#6366F1] border border-[#6366F1]/45 text-xs font-semibold tracking-wide text-[#C7D2FE] hover:text-white transition-all duration-200"
          >
            <Download size={14} />
            <span>{CV_INFO.label} (PDF)</span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="relative rounded-2xl bg-[#16171F]/90 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div
            class="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#6366F1] via-[#0EA5E9] to-transparent"
            aria-hidden="true"
          ></div>
          <p class="text-slate-200 text-base sm:text-[17px] leading-[1.85] font-normal">
            {ABOUT_TEXT}
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
            <div class="w-10 h-10 rounded-xl bg-[#6366F1]/15 border border-[#6366F1]/35 flex items-center justify-center text-[#818CF8]">
              <Briefcase size={20} />
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#0EA5E9]">
                Profile
              </p>
              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Experience
              </h3>
            </div>
          </div>

          <div class="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-[9px] sm:before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#6366F1] before:via-[#0EA5E9] before:to-[#6366F1]/20">
            {#each EXPERIENCES as exp}
              {@const isCyan = exp.accent === 'cyan'}
              <article class="relative group rounded-2xl bg-[#16171F]/80 hover:bg-[#1A1C26] border border-white/10 hover:border-[#6366F1]/50 p-5 sm:p-6 transition-all duration-200">
                <!-- Timeline Node -->
                <span
                  class="absolute -left-[25px] sm:-left-[31px] top-7 w-4 h-4 rounded-full border-2 border-[#0F0F12] {isCyan
                    ? 'bg-[#0EA5E9] shadow-[0_0_12px_rgba(14,165,233,0.75)]'
                    : 'bg-[#6366F1] shadow-[0_0_12px_rgba(99,102,241,0.75)]'}"
                  aria-hidden="true"
                ></span>

                <div class="mb-2.5">
                  <span
                    class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full {isCyan
                      ? 'bg-[#0EA5E9]/15 text-[#38BDF8] border border-[#0EA5E9]/30'
                      : 'bg-[#6366F1]/15 text-[#A5B4FC] border border-[#6366F1]/30'}"
                  >
                    {#if isCyan}
                      <Trees size={13} />
                    {:else}
                      <Award size={13} />
                    {/if}
                    {exp.period}
                  </span>
                </div>

                <h4 class="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#A5B4FC] transition-colors">
                  {exp.title}
                </h4>

                <p class="mt-2 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
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
              <div class="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 border border-[#0EA5E9]/35 flex items-center justify-center text-[#38BDF8]">
                <GraduationCap size={20} />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#818CF8]">
                  Profile
                </p>
                <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Education
                </h3>
              </div>
            </div>

            <div class="space-y-4">
              {#each EDUCATION as edu}
                <div class="rounded-2xl bg-[#16171F]/80 border border-white/10 hover:border-[#0EA5E9]/45 p-5 transition-colors">
                  <div class="flex items-center justify-between gap-3">
                    <h4 class="text-base sm:text-lg font-bold text-white">
                      {edu.institution}
                    </h4>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-[#38BDF8] border border-white/10 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p class="mt-1.5 text-sm text-slate-300">
                    {edu.focus}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Prominent Software Badges -->
          <div id="software" class="scroll-mt-24 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#6366F1]/15 border border-[#6366F1]/35 flex items-center justify-center text-[#A5B4FC]">
                <Clapperboard size={20} />
              </div>
              <h3 class="text-2xl font-bold text-white tracking-tight">
                Software
              </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {#each SOFTWARE as tool}
                <div class="group rounded-xl bg-gradient-to-br from-[#1C1E2E] to-[#13141C] border border-[#6366F1]/40 hover:border-[#0EA5E9] px-4 py-4 transition-all duration-200 shadow-md flex items-center justify-between gap-2">
                  <span class="font-extrabold text-sm tracking-wider text-white group-hover:text-[#38BDF8] transition-colors">
                    {tool}
                  </span>
                  <Sparkles size={15} class="text-[#818CF8] group-hover:text-[#0EA5E9] transition-colors shrink-0" />
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Pills Section -->
      <div id="skills" class="scroll-mt-24 rounded-2xl bg-[#16171F]/70 border border-white/10 p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-lg bg-[#6366F1]/15 border border-[#6366F1]/35 flex items-center justify-center text-[#818CF8]">
            <Layers size={18} />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Skills
          </h3>
        </div>

        <div class="flex flex-wrap gap-2.5 sm:gap-3">
          {#each SKILLS as skill}
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#0F1016] text-slate-200 border border-white/12 hover:border-[#6366F1] hover:bg-[#6366F1]/12 hover:text-white transition-all duration-200">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" aria-hidden="true"></span>
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
