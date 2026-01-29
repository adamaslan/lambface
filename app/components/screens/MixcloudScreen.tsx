"use client";

import React from "react";
import GlowFrame from "../neon/GlowFrame";

interface MixcloudScreenProps {
  feedUrl?: string;
  label?: string;
}

export default function MixcloudScreen({
  feedUrl = "/newtownradiobk/threshold_-with-lambface-1-20-26/",
  label = "RADIO ARCHIVE"
}: MixcloudScreenProps): JSX.Element {
  const safeUrl = encodeURI(feedUrl);

  return (
    <GlowFrame color="magenta" title={label}>
      <div className="relative h-[400px] w-full overflow-hidden rounded-md bg-black/60 crt signal-noise">
        <iframe
          title="Mixcloud Player"
          src={`https://player-widget.mixcloud.com/widget/iframe/?feed=${safeUrl}`}
          width="100%"
          height="100%"
          allow="autoplay; encrypted-media; fullscreen; idle-detection; speaker-selection; web-share"
          loading="lazy"
          className="relative z-10"
        />
      </div>
    </GlowFrame>
  );
}
