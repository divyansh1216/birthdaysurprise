import { Hero } from './components/Hero';
import { BirthdayMessage } from './components/BirthdayMessage';
import { Timeline } from './components/Timeline';
import { MemoryGallery } from './components/MemoryGallery';
import { LoveCards } from './components/LoveCards';
import { LetterReveal } from './components/LetterReveal';
import { BirthdaySurprise } from './components/BirthdaySurprise';
import { TimeTogether } from './components/TimeTogether';
import { EngagementSection } from './components/EngagementSection';
import { FutureSection } from './components/FutureSection';
import { FinalSurprise } from './components/FinalSurprise';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <div className="bg-wine-900 min-h-screen text-rose-100 font-sans selection:bg-rose-300/30 selection:text-white">
      <MusicPlayer />
      
      <main>
        <Hero />
        <BirthdayMessage />
        <Timeline />
        <MemoryGallery />
        <TimeTogether />
        <EngagementSection />
        <LoveCards />
        <LetterReveal />
        <BirthdaySurprise />
        <FutureSection />
        <FinalSurprise />
      </main>
    </div>
  );
}

export default App;
