<script>
  import NavbarMenu from './lib/components/NavbarMenu.svelte';
  import Hero from './lib/components/Hero.svelte';
  import AboutProfile from './lib/components/AboutProfile.svelte';
  import LearningJourney from './lib/components/LearningJourney.svelte';
  import ContactFooter from './lib/components/ContactFooter.svelte';
</script>

<NavbarMenu />
<main class="min-h-screen w-full overflow-x-clip">
  <Hero />
  <AboutProfile />
  <LearningJourney />
  <ContactFooter />
</main>
