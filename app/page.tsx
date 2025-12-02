import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import SchedulePreviewSection from "@/components/landing/SchedulePreviewSection";
import CoachesPreviewSection from "@/components/landing/CoachesPreviewSection";
import LocationSection from "@/components/landing/LocationSection";
import CallToActionSection from "@/components/landing/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SchedulePreviewSection />
      <CoachesPreviewSection />
      <LocationSection />
      <CallToActionSection />
    </>
  );
}

