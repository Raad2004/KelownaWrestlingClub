import React from 'react';
import Image from 'next/image';
import { Music } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-red-600 pl-4">
              What is Freestyle Wrestling?
            </h2>
            <div className="prose text-slate-600 space-y-4">
              <p>
                Freestyle wrestling is one of the two Olympic styles of wrestling. Unlike 
                <strong> Greco-Roman</strong> wrestling (which forbids holds below the waist), 
                Freestyle allows the use of the wrestler's or opponent's legs in offense and defense.
              </p>
              <p>
                It is also distinct from submission grappling arts like <strong>Brazilian Jiu-Jitsu</strong>. 
                In Freestyle, the ultimate goal is to pin your opponent's shoulders to the mat. 
                There are no submissions or chokeholds; it is a fast-paced sport emphasizing 
                takedowns, throws, and dominance.
              </p>
            </div>
            
            {/* Spotify Playlist Link */}
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline">
                <Music className="h-5 w-5" />
                Listen to the KWC Team Playlist on Spotify
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/mat-action-1.jpg" 
              alt="Freestyle Wrestling Action" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

