<script>
  import portraitImg from '../../assets/azkaik-portrait.png';

  export let parallaxX = 0;
  export let parallaxY = 0;
</script>

<div
  class="relative w-full h-full flex items-end justify-end select-none pointer-events-none"
  aria-hidden="true"
>
  <!-- Subtle ambient indigo-cyan backlight glow behind character -->
  <div
    class="absolute right-6 bottom-6 w-[78%] h-[74%] rounded-full bg-radial from-[#38BDF8]/28 via-[#818CF8]/18 to-transparent blur-3xl transition-transform duration-300 ease-out"
    style="transform: translate3d({parallaxX * -12}px, {parallaxY * -10}px, 0);"
  ></div>

  <!-- Floating + Parallax Stylized Cel-Shaded Portrait -->
  <div
    class="relative w-full animate-float-slow transition-transform duration-200 ease-out origin-bottom-right"
    style="transform: translate3d({parallaxX * 12}px, {parallaxY * 8}px, 0) scale(1.03);"
  >
    <img
      src={portraitImg}
      alt="Ilustrasi cel-shaded Ikhwanul Azka (Azkaik)"
      class="w-full h-auto max-h-[540px] lg:max-h-[78vh] object-contain object-bottom-right block drop-shadow-[0_24px_42px_rgba(10,10,28,0.45)]"
      draggable="false"
    />
  </div>
</div>
