"use client";

import React from "react";
import GlowFrame from "../neon/GlowFrame";

interface SoundCloudScreenProps {
  trackId?: string;
  label?: string;
}

export default function SoundCloudScreen({
  trackId = "2255901005",
  label = "Latest Track"
}: SoundCloudScreenProps): JSX.Element {
  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <GlowFrame color="magenta" title={label}>
      <div className="relative h-[300px] w-full overflow-hidden rounded-md bg-black/60 crt signal-noise">
        <iframe
          title="SoundCloud Player"
          src={src}
          width="100%"
          height="100%"
          allow="autoplay"
          loading="lazy"
          className="relative z-10"
        />
      </div>
    </GlowFrame>
  );
}
