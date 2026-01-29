import React from 'react';
import { render, screen } from '@testing-library/react';
import MixcloudScreen from '../../app/components/screens/MixcloudScreen';

describe('MixcloudScreen', () => {
  it('renders the Mixcloud Player iframe with correct src and title', () => {
    render(<MixcloudScreen />);

    const iframe = screen.getByTitle('Mixcloud Player');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://player-widget.mixcloud.com/widget/iframe/?feed=%2Fnewtownradiobk%2Fthreshold_-with-lambface-1-20-26%2F');
    expect(iframe).toHaveAttribute('width', '100%');
    expect(iframe).toHaveAttribute('height', '400');
    expect(iframe).toHaveAttribute('frameBorder', '0');
    expect(iframe).toHaveAttribute('allow', 'encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

  it('renders the GlowFrame with the correct title', () => {
    render(<MixcloudScreen />);

    const glowFrameTitle = screen.getByText('RADIO ARCHIVE');
    expect(glowFrameTitle).toBeInTheDocument();
  });
});
