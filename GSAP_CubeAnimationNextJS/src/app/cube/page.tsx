"use client";

import AnimationCube from "../../components/Animation";
import SubscribeSection from "../../components/SubscribeSection";

export default function Page() {
  return (
    <main className="relative">
      {/* Cube Animation Section */}
      <div>
        <AnimationCube />
      </div>

      {/* // Subscribe Section
      <div className="min-h-60 static top-56">
        <SubscribeSection />
      </div> */}
    </main>
  );
}
