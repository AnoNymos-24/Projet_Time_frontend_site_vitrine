import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
const youtubeVideos = [{
  id: 1,
  url: "https://www.youtube.com/embed/qEm8E_moBqc",
  title: "Témoignage étudiant 1"
}, {
  id: 2,
  url: "https://www.youtube.com/embed/bhCPYY01MZQ",
  title: "Témoignage étudiant 2"
}, {
  id: 3,
  url: "https://www.youtube.com/embed/dlHv8q07_g8",
  title: "Témoignage étudiant 3"
}, {
  id: 4,
  url: "https://www.youtube.com/embed/6Lto0JJ_KsM",
  title: "Témoignage étudiant 4"
}, {
  id: 5,
  url: "https://www.youtube.com/embed/Lr4QwBfnyQU",
  title: "Témoignage étudiant 5"
}, {
  id: 6,
  url: "https://www.youtube.com/embed/1uIv3qL0WF0",
  title: "Témoignage étudiant 6"
}];
const TestimonialsSection: React.FC = () => {
  return <section className="section-container py-[67px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-time-blue-1 mb-4">Ce que disent nos étudiants</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-justified">
          Découvrez les témoignages vidéo de nos anciens étudiants sur leur expérience à l'Université TIME
        </p>
      </div>
      
      <div className="relative">
        <Carousel opts={{
        align: "start",
        loop: true
      }} plugins={[Autoplay({
        delay: 5000
      })]} className="w-full">
          <CarouselContent className="-ml-4">
            {youtubeVideos.map(video => <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video">
                    <iframe src={video.url} title={video.title} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-time-blue-1 text-center">{video.title}</h3>
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>;
};
export default TestimonialsSection;